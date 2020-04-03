/*
 * HKNBP_Core is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HKNBP_Core is distributed in the hope that it will be useful,
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HKNBP_Core.  If not, see <https://www.gnu.org/licenses/>.
 */

package org.sourcekey.hknbp.hknbp_core

import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.removeClass
import kotlin.js.Date
import kotlin.js.Math
import kotlin.random.Random

object Player: UserInterface(document.getElementById("player") as HTMLElement) {
    private var playingChannel: Channel? = null
    private val iframePlayer: dynamic = document.getElementById("iframePlayer")
    private var watchingCounter: WatchingCounter? = null


    enum class OnPlayerEvent{
        playing,
        notPlaying,
        error
    }

    interface OnPlayerEventListener{
        fun on(onPlayerEvent: OnPlayerEvent)
    }

    private var onPlayerEvents: ArrayList<OnPlayerEventListener> = ArrayList()

    fun addOnPlayerEventListener(onPlayerEventListener: OnPlayerEventListener) {
        onPlayerEvents.add(onPlayerEventListener)
    }


    private val callIframePlayerFunctionList = ArrayList<dynamic>()

    private fun callIframePlayerFunction(
            evalScript: String, onReturn: (returnValue: dynamic)->Unit = fun(returnValue){}
    ){
        val caller = js("{}")
        caller.evalScript = evalScript
        caller.name = "HKNBPCore"
        caller.id = Date().getTime().toString() + Random.nextInt(0, 99999999)
        caller.onReturn = onReturn
        callIframePlayerFunctionList.add(caller)
        window.setTimeout(fun(){
            callIframePlayerFunctionList.remove(caller) //如果太耐冇return就響List自動清除免堆垃圾
        }, 60000)
        try {
            iframePlayer.contentWindow.postMessage(JSON.stringify(caller), "*")
        } catch (e: dynamic){ println("iframePlayer有啲Function搵唔到或發生問題: $e") }
    }

    private fun kotlinValueToEvalScriptUseableValue(kotlinValue: dynamic): String{
        val obj = js("{}")
        obj.value = kotlinValue
        return "JSON.parse(\'${JSON.stringify(obj)}\').value"
    }

    /**
     * 檢查需唔需要可直接點擊IframePlayer模式嘅Timer
     *
     * 此值為清除之前Player嘅Timer
     * 因當觀眾轉台後
     * 上一台Player嘅Timer仍在計時
     * */
    private var checkNeedCanTouchIframePlayerModeTimer = 0
        set(value) {
            window.clearTimeout(checkNeedCanTouchIframePlayerModeTimer)
            field = value
        }


    /**
     * 片源表
     *
     * 由於唔能夠響主線程攞個表返來
     * 所以此值會設定響iframePlayer Load好個頻道之後
     * 先初始化此值
     * */
    var videoTracks: ArrayLinkList<TrackDescription> = {
        addOnPlayerEventListener(object : OnPlayerEventListener {
            override fun on(onPlayerEvent: OnPlayerEvent) {
                when (onPlayerEvent) {
                    OnPlayerEvent.playing -> {
                        //清空VideoTracks值
                        videoTracks = ArrayLinkList(TrackDescription(-5, "-------"))
                        //設定VideoTracks值
                        callIframePlayerFunction("onGetIframePlayerVideoTracks(onReturn)", fun(tracks){
                            callIframePlayerFunction("onGetIframePlayerVideoTrack(onReturn)", fun(track){
                                videoTracks = TrackDescription.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions(
                                        tracks, track
                                )
                                videoTracks.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<TrackDescription> {
                                    override fun onNodeChanged(
                                            preChangeNodeID: Int?, postChangeNodeID: Int?,
                                            preChangeNode: TrackDescription?, postChangeNode: TrackDescription?
                                    ) {
                                        callIframePlayerFunction("onSetIframePlayerVideoTrack(${
                                                kotlinValueToEvalScriptUseableValue(postChangeNode)
                                        })")
                                        localStorage.setItem("RecentlyChannel${playingChannel?.number}VideoTrackID", postChangeNodeID.toString())
                                        VirtualRemote.updateVideoInformation()
                                    }
                                })
                                videoTracks.designated(
                                        localStorage.getItem("RecentlyChannel${playingChannel?.number}VideoTrackID")?.toIntOrNull()?:0
                                )
                            })
                        })
                    }
                }
            }
        })

        ArrayLinkList(TrackDescription(-5, "-------"))
    }()
        private set

    /**
     * 去依家嘅片源嘅下一個片源
     */
    fun nextVideoTrack() {
        videoTracks.next()
    }

    /**
     * 去依家嘅片源嘅上一個片源
     */
    fun previousVideoTrack() {
        videoTracks.previous()
    }

    /**
     * 去特定片源
     * @param videoTrackID 要轉去片源ID
     */
    @JsName("designatedVideoTrack") fun designatedVideoTrack(videoTrackID: Int): Boolean {
        val videoTracksNodeID = TrackDescription.toTracksNodeID(videoTracks, videoTrackID)

        if (videoTracksNodeID != null) {
            videoTracks.designated(videoTracksNodeID)
            return true
        } else {
            Dialogue.getDialogues(fun(dialogues) {
                PromptBox(dialogues.node?.canNotFind ?: "")
            })
            return false
        }
    }


    /**
     * 聲道表
     *
     * 由於唔能夠響主線程攞個表返來
     * 所以此值會設定響iframePlayer Load好個頻道之後
     * 先初始化此值
     * */
    var audioTracks: ArrayLinkList<TrackDescription> = {
        addOnPlayerEventListener(object : OnPlayerEventListener {
            override fun on(onPlayerEvent: OnPlayerEvent) {
                when (onPlayerEvent) {
                    OnPlayerEvent.playing -> {
                        //清空AudioTracks值
                        audioTracks = ArrayLinkList(TrackDescription(-5, "-------"))
                        //設定AudioTracks值
                        callIframePlayerFunction("onGetIframePlayerAudioTracks(onReturn)", fun(tracks){
                            callIframePlayerFunction("onGetIframePlayerAudioTrack(onReturn)", fun(track){
                                audioTracks = TrackDescription.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions(
                                        tracks, track
                                )
                                audioTracks.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<TrackDescription> {
                                    override fun onNodeChanged(
                                            preChangeNodeID: Int?, postChangeNodeID: Int?,
                                            preChangeNode: TrackDescription?, postChangeNode: TrackDescription?
                                    ) {
                                        callIframePlayerFunction("onSetIframePlayerAudioTrack(${
                                        kotlinValueToEvalScriptUseableValue(postChangeNode)
                                        })")
                                        localStorage.setItem("RecentlyChannel${playingChannel?.number}AudioTrackID", postChangeNodeID.toString())
                                        VirtualRemote.updateAudioInformation()
                                    }
                                })
                                audioTracks.designated(
                                        localStorage.getItem("RecentlyChannel${playingChannel?.number}AudioTrackID")?.toIntOrNull()?:0
                                )
                            })
                        })
                    }
                }
            }
        })

        ArrayLinkList(TrackDescription(-5, "-------"))
    }()
        private set

    /**
     * 去依家嘅聲道嘅下一個聲道
     */
    fun nextAudioTrack() {
        audioTracks.next()
    }

    /**
     * 去依家嘅聲道嘅上一個聲道
     */
    fun previousAudioTrack() {
        audioTracks.previous()
    }

    /**
     * 去特定聲道
     * @param audioTrackID 要轉去聲道ID
     */
    @JsName("designatedAudioTrack") fun designatedAudioTrack(audioTrackID: Int): Boolean {
        val audioTracksNodeID = TrackDescription.toTracksNodeID(audioTracks, audioTrackID)

        if (audioTracksNodeID != null) {
            audioTracks.designated(audioTracksNodeID)
            return true
        } else {
            Dialogue.getDialogues(fun(dialogues) {
                PromptBox(dialogues.node?.canNotFind ?: "")
            })
            return false
        }
    }


    /**
     * 字幕表
     *
     * 由於唔能夠響主線程攞個表返來
     * 所以此值會設定響iframePlayer Load好個頻道之後
     * 先初始化此值
     * */
    var subtitleTracks: ArrayLinkList<TrackDescription> = {
        addOnPlayerEventListener(object : OnPlayerEventListener {
            override fun on(onPlayerEvent: OnPlayerEvent) {
                when (onPlayerEvent) {
                    OnPlayerEvent.playing -> {
                        //清空SubtitleTracks值
                        subtitleTracks = ArrayLinkList(TrackDescription(-5, "-------"))
                        //設定SubtitleTracks值
                        callIframePlayerFunction("onGetIframePlayerSubtitleTracks(onReturn)", fun(tracks){
                            callIframePlayerFunction("onGetIframePlayerSubtitleTrack(onReturn)", fun(track){
                                subtitleTracks = TrackDescription.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions(
                                        tracks, track
                                )
                                subtitleTracks.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<TrackDescription> {
                                    override fun onNodeChanged(
                                            preChangeNodeID: Int?, postChangeNodeID: Int?,
                                            preChangeNode: TrackDescription?, postChangeNode: TrackDescription?
                                    ) {
                                        callIframePlayerFunction("onSetIframePlayerSubtitleTrack(${
                                                kotlinValueToEvalScriptUseableValue(postChangeNode)
                                        })")
                                        localStorage.setItem("RecentlyChannel${playingChannel?.number}SubtitleTrackID", postChangeNodeID.toString())
                                        VirtualRemote.updateSubtitleInformation()
                                    }
                                })
                                subtitleTracks.designated(
                                        localStorage.getItem("RecentlyChannel${playingChannel?.number}SubtitleTrackID")?.toIntOrNull()?:0
                                )
                            })
                        })
                    }
                }
            }
        })

        ArrayLinkList(TrackDescription(-5, "-------"))
    }()
        private set

    /**
     * 去依家嘅字幕嘅下一個字幕
     */
    fun nextSubtitleTrack() {
        subtitleTracks.next()
    }

    /**
     * 去依家嘅字幕嘅上一個字幕
     */
    fun previousSubtitleTrack() {
        subtitleTracks.previous()
    }

    /**
     * 去特定字幕
     * @param subtitleTrackID 要轉去字幕ID
     */
    @JsName("designatedSubtitleTrack") fun designatedSubtitleTrack(subtitleTrackID: Int): Boolean {
        val subtitleTracksNodeID = TrackDescription.toTracksNodeID(subtitleTracks, subtitleTrackID)

        if (subtitleTracksNodeID != null) {
            subtitleTracks.designated(subtitleTracksNodeID)
            return true
        } else {
            Dialogue.getDialogues(fun(dialogues) {
                PromptBox(dialogues.node?.canNotFind ?: "")
            })
            return false
        }
    }


    /**
     * 全局音量值
     *
     * 此值使所有Player使用同一音量
     * */
    private var volume: Double = localStorage.getItem("RecentlyVolume")?.toDoubleOrNull()?:100.0
        set(value) {
            localStorage.setItem("RecentlyVolume", volume.toString())//儲存低返最近設定音量
            field = value
        }

    /**
     * 設定iframePlayer嘅音量資訊
     *
     * 注:音量值用Double原因係因為有啲IframePlayer嘅音量值有小數
     * 小數中有取捨使到有機會調教唔到音量值
     * */
    fun setVolume(volume: Double) {
        var volumeChecked = volume
        if(100 < volumeChecked){volumeChecked = 100.0}
        if(volumeChecked < 0){volumeChecked = 0.0}
        callIframePlayerFunction("onSetIframePlayerVolume(${kotlinValueToEvalScriptUseableValue(volumeChecked)})")
        this.volume = volumeChecked
        VolumeDescription.show(3000)
    }

    /**
     * 獲取iframePlayer嘅音量資訊
     *
     * 注:音量值用Double原因係因為有啲IframePlayer嘅音量值有小數
     * 小數中有取捨使到有機會調教唔到音量值
     * */
    fun getVolume(onReturn: (volume: Double)->Unit) {
        callIframePlayerFunction("onGetIframePlayerVolume(onReturn)", fun(returnValue){
            onReturn(returnValue?.toString()?.toDoubleOrNull()?:100.0)
        })
    }

    /**
     * 提升音量
     *
     * 由於其他平台需要其他位置設置提升音量
     * 因此此值可被修改成學合其他平台嘅程序
     * */
    var volumeUp = fun(){
        getVolume(fun(volume){
            setVolume(volume + 1.0)
        })
    }

    /**
     * 降底音量
     *
     * 由於其他平台需要其他位置設置降底音量
     * 因此此值可被修改成學合其他平台嘅程序
     * */
    var volumeDown = fun(){
        getVolume(fun(volume){
            setVolume(volume - 1.0)
        })
    }

    /**
     * 對IframePlayer音量值初始化
     * */
    private val iframePlayerVolumeInit = {
        addOnPlayerEventListener(object : OnPlayerEventListener {
            override fun on(onPlayerEvent: OnPlayerEvent) {
                when (onPlayerEvent) {
                    OnPlayerEvent.playing -> {
                        //讀取最近設定音量再去設定IframePlayer音量,呢度唔直接用setMuted()係因為唔想每次轉頻道都顯示音量值
                        callIframePlayerFunction("onSetIframePlayerVolume(${
                        kotlinValueToEvalScriptUseableValue(volume)
                        })")
                    }
                }
            }
        })
    }()


    /**
     * 全局音量值
     *
     * 此值使所有Player使用同一音量
     * */
    private var muted: Boolean = localStorage.getItem("RecentlyMuted")?.toBoolean()?:false
        set(value) {
            localStorage.setItem("RecentlyMuted", muted.toString())//儲存低返最近設定音量
            field = value
        }

    private var tryUnmuteCount = 0

    /**
     * 設定iframePlayer嘅靜音資訊
     * */
    fun setMuted(muted: Boolean) {
        //因依家大部分 <瀏覽器> 唔畀自動播放, 如果要自動播放一定要將Player設為 <靜音>
        val setScript = fun(muted: Boolean){
            callIframePlayerFunction("onSetIframePlayerMuted(${kotlinValueToEvalScriptUseableValue(muted)})")
            MutedDescription.update(muted)
        }
        //檢查自動播放係米需要靜音
        CanAutoplay.checkVideoAutoPlayNeedToMute(fun(){
            this.muted = muted
            setScript(muted)
        }, fun(){
            setScript(true)
            if(1 < tryUnmuteCount){PromptBox("如未能解除靜音請任意點擊螢幕")}
            tryUnmuteCount++
        })
    }

    /**
     * 獲取iframePlayer嘅靜音資訊
     * */
    fun getMuted(onReturn: (muted: Boolean)->Unit) {
        callIframePlayerFunction("onGetIframePlayerMuted(onReturn)", fun(returnValue){
            MutedDescription.update(muted)
            onReturn(returnValue?.toString()?.toBoolean()?:true)
        })
    }

    /**
     * 設換靜音
     *
     * Call一次靜音,再Call取消靜音
     * 由於其他平台需要其他位置設置設換靜音
     * 因此此值可被修改成學合其他平台嘅程序
     * */
    var volumeMute = fun(){
        getMuted(fun(muted){
            setMuted(!muted)
        })
    }
        set(value) {
            field = fun(){
                //其他平台設置自己靜音方式後
                getMuted(fun(muted){
                    if(muted){
                        //取消因要Mute左iframePlayer先可自動播放嘅靜音
                        setMuted(false)
                    }else{
                        //行其他平台設置自己靜音方式
                        setMuted(false)
                        value()
                    }
                })
            }
        }

    /**
     * 對IframePlayer靜音值初始化
     * */
    private val iframePlayerMutedInit = {
        addOnPlayerEventListener(object : OnPlayerEventListener {
            override fun on(onPlayerEvent: OnPlayerEvent) {
                when (onPlayerEvent) {
                    OnPlayerEvent.playing -> {
                        setMuted(muted)
                    }
                }
            }
        })
    }()


    /**
     * Programmable鍵有嘅顏色
     * */
    enum class ProgrammableColor {
        red,
        green,
        yellow,
        blue
    }

    /**
     * programmable鍵 嘅功能
     * @param color 咩野顏色嘅programmable鍵
     */
    @JsName("programmable") fun programmable(color: ProgrammableColor) {
        var colorString = ""
        when(color){
            ProgrammableColor.red       -> {colorString = "red"}
            ProgrammableColor.green     -> {colorString = "green"}
            ProgrammableColor.yellow    -> {colorString = "yellow"}
            ProgrammableColor.blue      -> {colorString = "blue"}
        }
        callIframePlayerFunction("onClickProgrammableButton(${kotlinValueToEvalScriptUseableValue(colorString)})")
    }


    /**
     * pictureInPicture模式切換
     * */
    fun pictureInPictureModeSwitch(){
        callIframePlayerFunction("""
            async function pictureInPictureModeSwitch(){
                try {
                //console.log(document.pictureInPictureEnabled);
                    var video = document.getElementsByTagName("video")[0]
                    if (video !== document.pictureInPictureElement){
                        await video.requestPictureInPicture();
                    }else{
                        await document.exitPictureInPicture();
                    }
                }catch(error){console.log(error);}
            }
            pictureInPictureModeSwitch();
        """)
    }


    /**
     *  播放
     *
     *  此Function防止Player冇自動播放時手動播放
     */
    fun play(){
        callIframePlayerFunction("onSetIframePlayerPlay()")
    }

    /**
     * 當iframePlayer開始播放頻道時
     * 會執行此function
     * 即iframePlayer正確地播放緊
     * 有關資料可讀取
     * */
    private val onPlaying = fun(){ for(event in onPlayerEvents){ event.on(OnPlayerEvent.playing) } }

    /**
     * 當iframePlayer冇進行播放頻道時
     * 會執行此function
     * */
    private val onNotPlaying = fun(){ for(event in onPlayerEvents){ event.on(OnPlayerEvent.notPlaying) } }

    /**
     * 當iframePlayer播放頻道出錯時
     * 會執行此function
     * */
    private val onError = fun(){ for(event in onPlayerEvents){ event.on(OnPlayerEvent.error) } }


    /**
    /**
     * 設定為最高畫質片源
    */
    private fun setHighestVideoQuality() {
    //designatedVideoTrack(getVideoTracks().size - 1)
    //updateVideoTrack()
    }

    /**
     * 設定為最低畫質片源
    */
    private fun setLowestVideoQuality() {
    //designatedVideoTrack(1)//因第0片源為冇畫面影片,所以第1片源先至係最低畫質
    //updateVideoTrack()
    }

    /**
     * 設定為自動選擇畫質片源
    */
    private fun setAutoSelectVideoQuality() {
    //designatedVideoTrack(-1)//-1為自動選擇畫質片源
    //updateVideoTrack()
    }
     */


    private val initListenIframePlayerMessage = {
        window.addEventListener("message", fun(event: dynamic){
            try{
                val callMessage = JSON.parse<dynamic>(event.data.toString())
                if (callMessage.name == null){
                    return
                }else if(callMessage.name == "HKNBPCore"){
                    // 之前callIframePlayerFunction嘅Return
                    for(obj in callIframePlayerFunctionList){
                        if(obj.id == callMessage.id){
                            obj.onReturn(callMessage.returnValue)
                            callIframePlayerFunctionList.remove(obj)
                        }
                    }
                }else if(callMessage.name == "IframePlayer"){
                    val onPlaying = onPlaying // 畀IframePlayer方便Call
                    val onNotPlaying = onNotPlaying // 畀IframePlayer方便Call
                    val onError = onError // 畀IframePlayer方便Call

                    /**
                    var onReturn = fun(returnValue: dynamic){
                    val obj = callMessage
                    obj.returnValue = returnValue
                    window.parent.postMessage(JSON.stringify(obj), "*")
                    }*/
                    //檢查functionName係米指定特定名
                    //因安全為由 避免被不安全IframePlayer執行不安全程序
                    val functionName: String = callMessage.functionName
                    if(functionName == "onPlaying" || functionName == "onNotPlaying" || functionName == "onError"){
                        eval(functionName + "()")
                    }
                }
            }catch(e: dynamic){
                println("callIframePlayerFunction衰左: ${e}" + "\n" +
                        "JSON字串(message)內容: ${event.data.toString()}" + "\n" +
                        "Event內容: ${JSON.stringify(event)}"
                )
            }
        }, false)
    }()


    /**
     *
     * */
    fun reload(){
        playChannel(playingChannel?:return)
    }

    fun playChannel(channel: Channel){
        playingChannel = channel
        fun getLink(): String{
            val link = playingChannel?.sources?.node?.iFramePlayerSrc
            if(link == null || link == ""){
                return "iframePlayer/videojs.html"
            }
            return link
        }
        iframePlayer?.src =
                        "${getLink()}?sourceSrc=${encodeURIComponent(playingChannel?.sources?.node?.getLinkOfHttpsGetAble()?:"")}"
        watchingCounter = WatchingCounter(channel)
    }

    init {
        //iOS10以下就不需自動Reload
        //因播放頻道必需全由使用者操作
        //如自動Reload會跳出iOS10以下專屬播放介面
        //導致使用者再要點擊打開iOS10以下專屬播放介面播放頻道
        if(!RunnerInfo.isBelowIOS10()){
            addOnPlayerEventListener(object : OnPlayerEventListener {
                private var isPlaying: Boolean = false
                override fun on(onPlayerEvent: OnPlayerEvent) {
                    when (onPlayerEvent) {
                        OnPlayerEvent.playing -> {
                            isPlaying = true
                        }
                        OnPlayerEvent.notPlaying -> {
                            isPlaying = false
                            //檢查呢2分鐘內Player有冇再繼續正常播放,若冇就ReLoad
                            window.setTimeout(fun() { if (!isPlaying) {
                                //ReLoad
                                window.location.reload()
                            } }, 120000)
                        }
                    }
                }
                init {
                    /**
                    //如果冇自動播放就換到手動播放模式
                    checkNeedCanTouchIframePlayerModeTimer = window.setTimeout(fun() {
                    if (!isPlaying && numberOfPlaying == 0) {
                    UserControlPanel.canTouchIframePlayerMode()
                    PromptBox("已切換到手動播放模式")
                    }
                    }, 30000)*/
                }
            })
        }
    }
}


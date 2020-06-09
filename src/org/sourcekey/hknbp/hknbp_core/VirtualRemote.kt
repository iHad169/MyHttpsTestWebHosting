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

import jquery.jq
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window


object VirtualRemote{
    val virtualRemote               = document.getElementById("virtualRemote")              as HTMLDivElement
    val hideVirtualRemoteButton     = document.getElementById("hideVirtualRemoteButton")    as HTMLButtonElement
    val onOffButton                 = document.getElementById("onOffButton")                as HTMLButtonElement
    val epgButton                   = document.getElementById("epgButton")                  as HTMLButtonElement
    val nextChannelButton           = document.getElementById("nextChannelButton")          as HTMLButtonElement
    val previousChannelButton       = document.getElementById("previousChannelButton")      as HTMLButtonElement
    val designateChannelSelect      = document.getElementById("designateChannelSelect")     as HTMLSelectElement
    val designateChannelInputText   = document.getElementById("designateChannelInputText")  as HTMLInputElement
    val designateChannelButton      = document.getElementById("designateChannelButton")     as HTMLButtonElement
    val lastTimeChannelButton       = document.getElementById("lastTimeChannelButton")      as HTMLButtonElement
    val nextVideoButton             = document.getElementById("nextVideoButton")            as HTMLButtonElement
    val previousVideoButton         = document.getElementById("previousVideoButton")        as HTMLButtonElement
    val designateVideoSelect        = document.getElementById("designateVideoSelect")       as HTMLSelectElement
    val nextAudioButton             = document.getElementById("nextAudioButton")            as HTMLButtonElement
    val previousAudioButton         = document.getElementById("previousAudioButton")        as HTMLButtonElement
    val designateAudioSelect        = document.getElementById("designateAudioSelect")       as HTMLSelectElement
    val onHeadNextAudioButton       = document.getElementById("onHeadNextAudioButton")      as HTMLButtonElement
    val nextSubtitleButton          = document.getElementById("nextSubtitleButton")         as HTMLButtonElement
    val previousSubtitleButton      = document.getElementById("previousSubtitleButton")     as HTMLButtonElement
    val designateSubtitleSelect     = document.getElementById("designateSubtitleSelect")    as HTMLSelectElement
    val onHeadNextSubtitleButton    = document.getElementById("onHeadNextSubtitleButton")   as HTMLButtonElement
    val volumeMuteButton            = document.getElementById("volumeMuteButton")           as HTMLButtonElement
    val volumeUpButton              = document.getElementById("volumeUpButton")             as HTMLButtonElement
    val volumeDownButton            = document.getElementById("volumeDownButton")           as HTMLButtonElement
    val programmableRedButton       = document.getElementById("programmableRedButton")      as HTMLButtonElement
    val programmableGreenButton     = document.getElementById("programmableGreenButton")    as HTMLButtonElement
    val programmableYellowButton    = document.getElementById("programmableYellowButton")   as HTMLButtonElement
    val programmableBlueButton      = document.getElementById("programmableBlueButton")     as HTMLButtonElement
    val number0Button               = document.getElementById("number0Button")              as HTMLButtonElement
    val number1Button               = document.getElementById("number1Button")              as HTMLButtonElement
    val number2Button               = document.getElementById("number2Button")              as HTMLButtonElement
    val number3Button               = document.getElementById("number3Button")              as HTMLButtonElement
    val number4Button               = document.getElementById("number4Button")              as HTMLButtonElement
    val number5Button               = document.getElementById("number5Button")              as HTMLButtonElement
    val number6Button               = document.getElementById("number6Button")              as HTMLButtonElement
    val number7Button               = document.getElementById("number7Button")              as HTMLButtonElement
    val number8Button               = document.getElementById("number8Button")              as HTMLButtonElement
    val number9Button               = document.getElementById("number9Button")              as HTMLButtonElement
    val minusButton                 = document.getElementById("minusButton")                as HTMLButtonElement
    val refreshButton               = document.getElementById("refreshButton")              as HTMLButtonElement
    val channelDescriptionButton    = document.getElementById("channelDescriptionButton")   as HTMLButtonElement
    val aboutWindowButton           = document.getElementById("aboutWindowButton")          as HTMLButtonElement
    val feedbackWebWindowButton     = document.getElementById("feedbackWebButton")          as HTMLButtonElement
    val shareWindowButton           = document.getElementById("shareWindowButton")          as HTMLButtonElement
    val settingWindowButton         = document.getElementById("settingWindowButton")        as HTMLButtonElement
    val appDownloadWindowButton     = document.getElementById("appDownloadWindowButton")    as HTMLButtonElement
    val githubWebButton             = document.getElementById("githubWebButton")            as HTMLButtonElement
    val documentStoreButton         = document.getElementById("documentStoreButton")        as HTMLButtonElement
    val watchingCounterWebButton    = document.getElementById("watchingCounterWebButton")   as HTMLButtonElement
    val centerButton                = document.createElement("button")                      as HTMLButtonElement
    val upButton                    = document.createElement("button")                      as HTMLButtonElement
    val downButton                  = document.createElement("button")                      as HTMLButtonElement
    val leftButton                  = document.createElement("button")                      as HTMLButtonElement
    val rightButton                 = document.createElement("button")                      as HTMLButtonElement
    val menuButton                  = document.createElement("button")                      as HTMLButtonElement
    val videoDescriptionButton      = document.createElement("button")                      as HTMLButtonElement
    val audioDescriptionButton      = document.createElement("button")                      as HTMLButtonElement
    val subtitleDescriptionButton   = document.createElement("button")                      as HTMLButtonElement
    val volumeDescriptionButton     = document.createElement("button")                      as HTMLButtonElement
    val returnButton                = document.createElement("button")                      as HTMLButtonElement


    fun updateChannelDescription(){
        //顯示頻道選項
        var channelOptionHTMLString = ""
        for(channel in channels){
            channelOptionHTMLString = "" +
                    "<option value=${channel.number}>" +
                    "${channel.number.toStringBackwardZeroPadding(3)} ${channel.name}" +
                    "</option>" +
                    channelOptionHTMLString
        }
        designateChannelSelect.innerHTML = channelOptionHTMLString
        designateChannelSelect.value = channels.node?.number.toString()
    }

    fun updateVideoInformation(){
        //顯示依家影片Track選項
        var videoOptionHTMLString = ""
        for(videoTracks in Player.videoTracks){
            videoOptionHTMLString = "<option value=${videoTracks.id}>${videoTracks.name}</option>" + videoOptionHTMLString
        }
        designateVideoSelect.innerHTML = videoOptionHTMLString
        designateVideoSelect.value = (Player.videoTracks.node?.id ?: 0).toString()
    }

    fun updateAudioInformation(){
        //顯示依家聲音Track選項
        var audioOptionHTMLString = ""
        for(audioTracks in Player.audioTracks){
            audioOptionHTMLString = "<option value=${audioTracks.id}>${audioTracks.name}</option>" + audioOptionHTMLString
        }
        designateAudioSelect.innerHTML = audioOptionHTMLString
        designateAudioSelect.value = (Player.audioTracks.node?.id ?: 0).toString()
    }

    fun updateSubtitleInformation(){
        //顯示依家字幕Track選項
        var subtitleOptionHTMLString = ""
        for(subtitleTracks in Player.subtitleTracks){
            subtitleOptionHTMLString = "<option value=${subtitleTracks.id}>${subtitleTracks.name}</option>" + subtitleOptionHTMLString
        }
        designateSubtitleSelect.innerHTML = subtitleOptionHTMLString
        designateSubtitleSelect.value = (Player.subtitleTracks.node?.id ?: 0).toString()
    }

    fun update(){
        updateChannelDescription()
        updateVideoInformation()
        updateAudioInformation()
        updateSubtitleInformation()
    }

    /**
    override val isShow: Boolean
        get() {return UserControlPanel.isShow}

    override fun show(){
        UserControlPanel.show()
    }

    override fun hide(){
        console.trace()
        UserControlPanel.hide()
    }
*/
    init {
        hideVirtualRemoteButton.onclick     = fun(event){event.stopPropagation();UserControlPanel.hide()}
        onOffButton.onclick                 = fun(event){window.location.href = "./off.html"}
        epgButton.onclick                   = fun(event){EPG.showHideAlternately(null)}
        nextChannelButton.onclick           = fun(event){channels.next()}
        previousChannelButton.onclick       = fun(event){channels.previous()}
        designateChannelSelect.onchange     = fun(event){channels.designatedByChannelNumber(designateChannelSelect.value.toInt())}
        designateChannelButton.onclick      = fun(event){channels.designatedByChannelNumber(designateChannelInputText.value.toInt())}
        lastTimeChannelButton.onclick       = fun(event){channels.lastTime()}
        nextVideoButton.onclick             = fun(event){Player.nextVideoTrack();VideoDescription.show(3000)}
        previousVideoButton.onclick         = fun(event){Player.previousVideoTrack();VideoDescription.show(3000)}
        designateVideoSelect.onchange       = fun(event){Player.designatedVideoTrack(designateVideoSelect.value.toInt());VideoDescription.show(3000)}
        nextAudioButton.onclick             = fun(event){Player.nextAudioTrack();AudioDescription.show(3000)}
        previousAudioButton.onclick         = fun(event){Player.previousAudioTrack();AudioDescription.show(3000)}
        designateAudioSelect.onchange       = fun(event){Player.designatedAudioTrack(designateAudioSelect.value.toInt());AudioDescription.show(3000)}
        onHeadNextAudioButton.onclick       = fun(event){Player.nextAudioTrack();AudioDescription.show(3000)}
        nextSubtitleButton.onclick          = fun(event){Player.nextSubtitleTrack();SubtitleDescription.show(3000)}
        previousSubtitleButton.onclick      = fun(event){Player.previousSubtitleTrack();SubtitleDescription.show(3000)}
        designateSubtitleSelect.onchange    = fun(event){Player.designatedSubtitleTrack(designateSubtitleSelect.value.toInt());SubtitleDescription.show(3000)}
        onHeadNextSubtitleButton.onclick    = fun(event){Player.nextSubtitleTrack();SubtitleDescription.show(3000)}
        volumeMuteButton.onclick            = fun(event){Player.volumeMute.invoke()}
        volumeUpButton.onclick              = fun(event){Player.volumeUp.invoke()}
        volumeDownButton.onclick            = fun(event){Player.volumeDown.invoke()}
        programmableRedButton.onclick       = fun(event){Player.programmable(Player.ProgrammableColor.red)}
        programmableGreenButton.onclick     = fun(event){Player.programmable(Player.ProgrammableColor.green)}
        programmableYellowButton.onclick    = fun(event){Player.programmable(Player.ProgrammableColor.yellow)}
        programmableBlueButton.onclick      = fun(event){Player.programmable(Player.ProgrammableColor.blue)}
        number0Button.onclick               = fun(event){EnteringNumberBox.enter("0")}
        number1Button.onclick               = fun(event){EnteringNumberBox.enter("1")}
        number2Button.onclick               = fun(event){EnteringNumberBox.enter("2")}
        number3Button.onclick               = fun(event){EnteringNumberBox.enter("3")}
        number4Button.onclick               = fun(event){EnteringNumberBox.enter("4")}
        number5Button.onclick               = fun(event){EnteringNumberBox.enter("5")}
        number6Button.onclick               = fun(event){EnteringNumberBox.enter("6")}
        number7Button.onclick               = fun(event){EnteringNumberBox.enter("7")}
        number8Button.onclick               = fun(event){EnteringNumberBox.enter("8")}
        number9Button.onclick               = fun(event){EnteringNumberBox.enter("9")}
        minusButton.onclick                 = fun(event){EnteringNumberBox.enter("-")}
        refreshButton.onclick               = fun(event){Player.reloadIframePlayer()}
        channelDescriptionButton.onclick    = fun(event){if(ChannelDescription.isShow){ChannelDescription.hide()}else{ChannelDescription.show(60000)}}
        aboutWindowButton.onclick           = fun(event){AboutWindow.showHideAlternately(null)}
        feedbackWebWindowButton.onclick     = fun(event){FeedbackWebWindow.showHideAlternately(null)}
        shareWindowButton.onclick           = fun(event){ShareWindow.showHideAlternately(null)}
        settingWindowButton.onclick         = fun(event){SettingWindow.showHideAlternately(null)}
        appDownloadWindowButton.onclick     = fun(event){AppDownloadWindow.showHideAlternately(null)}
        githubWebButton.onclick             = fun(event){
            window.open(
                    "https://github.com/HKNBP",
                    "_blank" // <- This is what makes it open in a new window.
            )
        }
        documentStoreButton.onclick         = fun(event){
            window.open(
                    "https://drive.google.com/drive/folders/1c8rb7Yrfe8IV_32pSDGF9oP5n-7Qs3PO",
                    "_blank" // <- This is what makes it open in a new window.
            )
        }
        watchingCounterWebButton.onclick    = fun(event){
            window.open(
                    "https://datastudio.google.com/reporting/1GKlAWHEsDdryWh2PRdQFmWzQ_ksRQ8BK/page/1M",
                    "_blank" // <- This is what makes it open in a new window.
            )
        }
        centerButton.onclick                = fun(event){
            //當冇Focus任何Element時
            //按此鍵就Focus到userControlPanelShower實現顯示userControlPanel
            var focusingElement = jq(":focus").get(0)
            if(!(focusingElement is HTMLButtonElement
                    || focusingElement is HTMLInputElement
                    || focusingElement is HTMLSelectElement
                    || focusingElement is HTMLOptionElement
            )){ jq("#userControlPanelShower").focus() }
            ////////////////////////////////////////////////////
            //暫時將Tizen唔行呢句
            //因之前Tizen嘅應用程式嘅Enter鍵程序
            //冇寫event.preventDefault();
            //使如果行下面句野就會當click左兩下
            //而因應用程式提交中未能更新此問題
            //之後再算
            //(過度性則)
            ////////////////////////////////////////////////////
            if(!RunnerInfo.isTizen()){
                //click入Focus緊嘅Element
                jq(":focus").click()
            }
        }
        upButton.onclick                    = fun(event){
            val selectables = jq(":tabbable")
            val current = jq(":focus")

            //搵相同<TabIndex嘅Y>響剩余element
            val currentIndex: Int = selectables.index(current)?:0
            val currentTabIndex: Tab3dIndex = Tab3dIndex.toTab3dIndex(current.attr("tabIndex")?:"")
            for(i in (currentIndex-1) downTo 0 ){
                val tabIndexForCheck = Tab3dIndex.toTab3dIndex(selectables.eq(i).attr("tabIndex")?:"")
                if(tabIndexForCheck.y == currentTabIndex.y && tabIndexForCheck.z == currentTabIndex.z){
                    if(tabIndexForCheck.x >= currentTabIndex.x){
                        selectables.eq(i).focus()
                        return
                    }
                }
            }

            //檢查依家係咪到最細<TabIndex嘅Y>
            var needTabIndex: Tab3dIndex = currentTabIndex
            val tabIndexList: ArrayList<Tab3dIndex> = Tab3dIndex.getTab3dIndexList(selectables)
            tabIndexList.sortByDescending(fun(element): Int{
                return Tab3dIndex.toUnparsedTabIndex(element).toIntOrNull()?:0
            })
            if(needTabIndex.y == tabIndexList.last().y){
                //由最大<TabIndex嘅Y>開始搵
                needTabIndex = Tab3dIndex(
                        currentTabIndex.x,
                        (tabIndexList.getOrNull(0)?.y?:0)+1,
                        currentTabIndex.z
                )
            }

            //搵上個<TabIndex嘅Y>響所有element
            val nextTabIndex: Tab3dIndex = tabIndexList.find(fun(element): Boolean{
                if(needTabIndex.z == element.z){
                    return needTabIndex.y > element.y
                }
                return false
            })?:Tab3dIndex(0,0,0)
            var closestIndex: Int? = null
            for(i in (selectables.length.toString().toIntOrNull()?:0) downTo 0){
                val tabIndexForCheck = Tab3dIndex.toTab3dIndex(selectables.eq(i).attr("tabIndex")?:"")
                if(tabIndexForCheck.y == nextTabIndex.y && tabIndexForCheck.z == nextTabIndex.z){
                    if(tabIndexForCheck.x == currentTabIndex.x){
                        selectables.eq(i).focus()
                        return
                    }
                    closestIndex?: {closestIndex = i}()
                }
            }
            selectables.eq(closestIndex?:0).focus()
        }
        downButton.onclick                  = fun(event){
            val selectables = jq(":tabbable")
            val current = jq(":focus")

            //搵相同<TabIndex嘅Y>響剩余element
            val currentIndex: Int = selectables.index(current)?:0
            val currentTabIndex: Tab3dIndex = Tab3dIndex.toTab3dIndex(current.attr("tabIndex")?:"")
            for(i in (currentIndex+1) until (selectables.length.toString().toIntOrNull()?:0)){
                val tabIndexForCheck = Tab3dIndex.toTab3dIndex(selectables.eq(i).attr("tabIndex")?:"")
                if(tabIndexForCheck.y == currentTabIndex.y && tabIndexForCheck.z == currentTabIndex.z){
                    if(tabIndexForCheck.x <= currentTabIndex.x){
                        selectables.eq(i).focus()
                        return
                    }
                }
            }

            //檢查依家係咪到最大<TabIndex嘅Y>
            var needTabIndex: Tab3dIndex = currentTabIndex
            val tabIndexList: ArrayList<Tab3dIndex> = Tab3dIndex.getTab3dIndexList(selectables)
            tabIndexList.sortBy(fun(element): Int{
                return Tab3dIndex.toUnparsedTabIndex(element).toIntOrNull()?:0
            })
            if(needTabIndex.y == tabIndexList.last().y){
                //由最細<TabIndex嘅Y>開始搵
                needTabIndex = Tab3dIndex(currentTabIndex.x, -1, currentTabIndex.z)
            }

            //搵下個<TabIndex嘅Y>響所有element
            val nextTabIndex: Tab3dIndex = tabIndexList.find(fun(element): Boolean{
                if(needTabIndex.z == element.z){
                    return needTabIndex.y < element.y
                }
                return false
            })?:Tab3dIndex(0,0,0)
            var closestIndex: Int = 0
            for(i in 0 until (selectables.length.toString().toIntOrNull()?:0)-1){
                val tabIndexForCheck = Tab3dIndex.toTab3dIndex(selectables.eq(i).attr("tabIndex")?:"")
                if(tabIndexForCheck.y == nextTabIndex.y && tabIndexForCheck.z == nextTabIndex.z){
                    if(tabIndexForCheck.x == currentTabIndex.x){
                        selectables.eq(i).focus()
                        return
                    }
                    closestIndex = i
                }
            }
            selectables.eq(closestIndex).focus()
        }
        leftButton.onclick                  = fun(event){jq.tabPrev()}
        rightButton.onclick                 = fun(event){jq.tabNext()}
        menuButton.onclick                  = fun(event){UserControlPanel.showHideAlternately(60000)}
        videoDescriptionButton.onclick      = fun(event){VideoDescription.show(5000)}
        audioDescriptionButton.onclick      = fun(event){AudioDescription.show(5000)}
        subtitleDescriptionButton.onclick   = fun(event){SubtitleDescription.show(5000)}
        volumeDescriptionButton.onclick     = fun(event){VolumeDescription.show(5000)}
        returnButton.onclick                = fun(event){UserInterface.hideAllUserInterface()}

        update()
        channels.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<Channel> {
            override fun onNodeChanged(
                    preChangeNodeID: Int?, postChangeNodeID: Int?,
                    preChangeNode: Channel?, postChangeNode: Channel?
            ) { update() }
        })
        channels.addOnElementsChangedListener(object: ArrayLinkList.OnElementsChangedListener{
            override fun onElementsChanged() { update() }
        })
        Player.addOnPlayerEventListener(object : Player.OnPlayerEventListener {
            override fun on(onPlayerEvent: Player.OnPlayerEvent) {
                when (onPlayerEvent) {
                    Player.OnPlayerEvent.playing -> { update() }
                }
            }
        })
    }
}

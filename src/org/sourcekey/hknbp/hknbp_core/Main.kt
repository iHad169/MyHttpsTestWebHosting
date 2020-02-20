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
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.stringify
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.dom.url.URL
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window
import kotlin.js.Date
import kotlin.js.Json
import kotlin.random.Random



/**
 * 設置ConsoleLog監聽器
 * */
private val setConsoleLogsListener = {
    try {
        js("""
            console.stdlog = console.log.bind(console);
            console.logs = [];
            console.log = function(){
                if(1000<console.logs.length){console.logs.shift();}//防過多Log
                console.logs.push(Array.from(arguments));
                console.stdlog.apply(console, arguments);
            }
        """)
    }catch (e: dynamic){println("setConsoleLogListener哀左: ${e}")}
}()

/**
 * 獲取ConsoleLog
 * */
val getConsoleLogs = fun(): String{
    try {
        val consoleLogs = js("console").logs
        var logs = ""
        var i = 0
        while (i < consoleLogs.length.toString().toIntOrNull()?:0){
            logs += consoleLogs[i] + "\n"
            i++
        }
        return logs
    }catch (e: dynamic){println("getConsoleLog哀左: ${e}")}
    return ""
}

/**
 * 畀Kotlin使用JQuery
 * */
val jQuery: dynamic = js("\$")

external fun decodeURIComponent(encodedURI: String): String

external fun encodeURIComponent(encodedURI: String): String

/**
 * 更新URL參數
 * @param param 參數名
 * @param paramVal 參數值
 * */
fun updateURLParameter(param: String, paramVal: String){
    val url: String = window.location.href
    var TheAnchor: String? = null
    var newAdditionalURL = ""
    var tempArray = url.split("?")
    var baseURL = tempArray.getOrNull(0)
    var additionalURL: String? = tempArray.getOrNull(1)
    var temp = ""

    if (additionalURL != null) {
        val tmpAnchor = additionalURL.split("#")
        val TheParams = tmpAnchor.getOrNull(0)
        TheAnchor = tmpAnchor.getOrNull(1)
        if (TheAnchor != null) {additionalURL = TheParams}

        tempArray = additionalURL!!.split("&")

        for (i in 0 until tempArray.size){
            if (tempArray.getOrNull(i)?.split('=')?.getOrNull(0) != param) {
                newAdditionalURL += temp + tempArray.getOrNull(i)
                temp = "&"
            }
        }
    } else {
        val tmpAnchor = baseURL!!.split("#")
        val TheParams = tmpAnchor.getOrNull(0)
        TheAnchor = tmpAnchor.getOrNull(1)

        if (TheParams != null) {baseURL = TheParams}
    }

    var _paramVal = paramVal
    if (TheAnchor != null) {_paramVal += "#" + TheAnchor}

    val rows_txt = temp + "" + param + "=" + _paramVal
    window.history.replaceState("", "", baseURL + "?" + newAdditionalURL + rows_txt)
}

val rootURL: String = "https://hknbp.org/"

/**
 * 核心版本
 *
 * 響service-worker.js度get返個coreVersion
 * */
val coreVersion: String = {
    var value: String = ""
    val savedValue: String = localStorage.getItem("CoreVersion")?: ""
    try {
        value = js("coreVersion")?: savedValue
    }catch (e: dynamic){
        value = savedValue
    }
    localStorage.setItem("CoreVersion", value)//儲底畀離線時讀取
    value
}()

/**
 * 程式版本
 *
 * 此值來得知到時係乜類型框架運行緊呢個Core程序
 * 類型例如: Android, iOS, PWA, 等等...
 * 此值會畀其他框架所改至該框架嘅Version
 * */
var appVersion: String = "${coreVersion}-PWA"

/**
fun includeScript(vararg files: String) {
    for(file in files){
        document.write("<script type=\"text/javascript\" src=\"'+${file}+'\"></script>")
    }
}
val jQueryLib = includeScript("js/jquery-3.4.1.min.js")*/

/**
 * 現在播放頻道嘅播放器
 * */
var player: Player? = null

/**
 * 更新頻道表
 * 此function畀其他地方可直接更新頻道表(channels值)
 *
 * @return 純水畀channels嘅value直接可攞個頻道表兼可執行更新頻道表程序
 * */
fun updateChannels(): ArrayLinkList<Channel>{
    channels = ArrayLinkList<Channel>()
    channels.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<Channel> {
        override fun onNodeChanged(
                preChangeNodeID: Int?, postChangeNodeID: Int?,
                preChangeNode: Channel?, postChangeNode: Channel?
        ) {
            //儲存低返最近睇過嘅頻道
            localStorage.setItem("RecentlyWatchedChannel", postChangeNodeID.toString())
            //更新URL嘅channel參數
            if(postChangeNode?.number?:0 < 0){
                //自訂頻道參數(用作分享連結)
                updateURLParameter("channelXmlString", postChangeNode?.number.toString())///////////////////////
            }else{
                //官方頻道參數(用作分享連結)
                updateURLParameter("channel", postChangeNode?.number.toString())
            }


            updateChannel()
        }
    })

    OfficialChannels.getOfficialChannels(fun(officialChannels){
        channels.addAll(officialChannels)//載入官方頻道
        channels.addAll(CustomChannels.getCustomChannels())//載入自定頻道
        channels.sortBy { channel -> channel.number }
        //讀返最近睇過嘅頻道
        channels.designated(
                //URL參數指定嘅道
                {
                    val channelParam = URL(window.location.href).searchParams.get("channel")?.toIntOrNull()
                    channels.indexOfOrNull(channels.find{channel -> channel.number == channelParam})
                }()?:
                //上次收睇緊嘅頻道
                {
                    val recentlyWatchedChannel = localStorage.getItem("RecentlyWatchedChannel")?.toInt()
                    if(recentlyWatchedChannel != null){
                        if(recentlyWatchedChannel < channels.size){ recentlyWatchedChannel }else{ channels.lastIndex }
                    }else{ null }
                }()?:
                //隨機一個頻道
                if(channels.size <= 0){ 0 }else{ Random.nextInt(0, channels.size) }
        )
    })
    updateChannel()

    return channels
}

/**
 * 頻道表
 * */
var channels: ArrayLinkList<Channel> = updateChannels()

/**
 * 去特定頻道
 * @param channelNumber 要轉去頻道冧把
 */
@JsName("designatedChannel") fun designatedChannel(channelNumber: Int): Boolean {
    val channelNumberNodeID = channels.indexOfOrNull(channels.find{ channel -> channel.number == channelNumber })
    if (channelNumberNodeID != null) {
        channels.designated(channelNumberNodeID)
        return true
    } else {
        Dialogue.getDialogues(fun(dialogues) {
            PromptBox.promptMessage(dialogues.node?.canNotFind ?: "")
        })
        return false
    }
}

/**
 * 刷新頻道
 */
fun updateChannel() {
    player = Player(channels.node?: Channel(0))
    player?.addOnPlayerEventListener(object : Player.OnPlayerEventListener {
        private var currentPlayer: Player? = null
        private var isPlaying: Boolean = false
        override fun on(onPlayerEvent: Player.OnPlayerEvent) {
            when (onPlayerEvent) {
                Player.OnPlayerEvent.playing -> {
                    currentPlayer = player
                    isPlaying = true
                }
                Player.OnPlayerEvent.notPlaying -> {
                    isPlaying = false
                    //檢查呢15秒內Player有冇再繼續正常播放,若冇就刷新Player
                    window.setTimeout(fun() {
                        if ((!isPlaying) && (player == currentPlayer)) {
                            updateChannel()
                        }
                    }, 15000)
                }
            }
        }
    })
    player?.play()
    VirtualRemote.update()
}

/**
private var autoTransformEngineTimerSecond = 12000

private var isLoopAutoTransformEngineTimer = true

/**
 * 開或熄自動換引擎功能
 * 用來當某一方引擎嘅Source出現問題
 * 轉換至其他Source
 * 重複輛扭換引擎
 * ///////////////////寫法有待修改(至Listeners)////////////////////
*/
fun setAutoTransformEngine(onOff: Boolean) {
if (onOff) {
isLoopAutoTransformEngineTimer = true
autoTransformEngineTimer()
} else {
isLoopAutoTransformEngineTimer = false
}
}

/**
 * 自動換引擎嘅倒時器
 * 用來定時檢查引擎嘅Source有冇出現問題
*/
private fun autoTransformEngineTimer(){
if(isLoopAutoTransformEngineTimer){
//用JavaScript嘅Timer來做Timer功能
val timer: dynamic = js("""
function timer(second){
setTimeout(
function(){
//去Call Kotlin嘅function
HKNBP.UIFeatures.prototype.autoTransformEngineRun(); //倒數後行要行嘅Code
HKNBP.UIFeatures.prototype.autoTransformEngineTimer(); //設置Timer倒數再行多次
}, second
);
}
""")
timer(autoTransformEngineTimerSecond)
}
}

/**
 * 畀autoTransformEngineTimer()當倒時完之後
 * 檢查引擎嘅Source有冇出現問題
*/
private fun autoTransformEngineRun() {
if (!p]layer.isPlaying()) {
channels.node.getSources().next()
updateChannel()
}
}
 */

/**
 *  w,h為正整數的分子和分母
 *
 *  @return intArray[0] 為約簡後分子 intArray[1] 為約簡後分母
 */
fun reductionTo(w: Int, h: Int): IntArray{
    val arr = IntArray(2)
    var p = w
    var q = h
    var a = p
    var b = q
    if(a >= b){ a = p; b = q }else{ a = q; b = p}
    if (p != 1 && q != 1 ) {
        for ( i in b downTo 2 ) {
            if (p % i == 0 && q % i == 0 ) {
                p = (p / i)
                q = (q / i)
            }
        }
    }
    arr[0] = p
    arr[1] = q
    return arr
}


/**
 * ****************************** *
 * 成個HKNBP_Core嘅Kotlin部分嘅開始 *
 * ****************************** *
 * */
fun main(args: Array<String>) {
    //HKNBPAppLayerBridge
    try {
        UserControlPanel
        VirtualRemote.show()
        ConsentPanel
        VirtualRemote
        //RealRemote
        LongClickEvent
        println("介面初始化完成")
    } catch (e: dynamic) { println("介面初始化哀左: $e") }

    println("Init Main")
}
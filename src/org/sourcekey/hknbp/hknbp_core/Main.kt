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

import jquery.JQuery
import jquery.jq
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.stringify
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.url.URL
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window
import kotlin.js.Console
import kotlin.js.Date
import kotlin.js.Json
import kotlin.js.json
import kotlin.random.Random


/**
fun dynamicallyLoadScript(url: String) {
var script = document.createElement("script") as HTMLScriptElement  // create a script DOM node
script.src = url  // set its src to the provided URL
script.async = false
document.head?.appendChild(script)  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

private val initLoadScript = {
dynamicallyLoadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js")
dynamicallyLoadScript("js/jquery.tabbable.js")
dynamicallyLoadScript("https://video-dev.github.io/can-autoplay/build/can-autoplay.min.js")
dynamicallyLoadScript("https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.5/platform.min.js")
}()*/
/**/
/**
 * 設置ConsoleLog監聽器
 * */
private val initConsoleLogsListener = {
    try {
        js("""
            console.stdlog = console.log.bind(console);
            console.logs = [];
            console.log = function(message){
                if(1000<console.logs.length){console.logs.shift();}//防過多Log
                console.logs.push(message);
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

external fun decodeURIComponent(encodedURI: String): String

external fun encodeURIComponent(encodedURI: String): String

/**
 * 將Int轉String兼向後補零
 * 因如直接使用.toString().padStart(length, '0')
 * 會冇處理負號'-'問題
 * 如: 而理想係要 -3 轉成 -003 但事實 -3 會轉成 0-3
 * */
fun Int.toStringBackwardZeroPadding(length: Int): String = {
    val isNegativeNumber = this < 0
    val mustPositiveNumber = if(isNegativeNumber){ -1 * this }else{ this }
    if(isNegativeNumber){"-"}else{""} + mustPositiveNumber.toString().padStart(length, '0')
}()

fun Int.toNegative(): Int{
    if(-1 < this){ return -this }
    return this
}

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
    /*
    var value: String = ""
    val savedValue: String = localStorage.getItem("CoreVersion")?: ""
    try {
        value = js("coreVersion")?: savedValue
    }catch (e: dynamic){
        value = savedValue
    }
    localStorage.setItem("CoreVersion", value)//儲底畀離線時讀取
    value
    */

    "v2020.04_0-test"
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
    try {
        OfficialChannels
        UserControlPanelShower
        UserControlPanel
        ConsentPanel
        VirtualRemote
        //RealRemote
        LongClickEvent
        ChannelDescription
    } catch (e: dynamic) { println("介面初始化哀左: $e") }
}
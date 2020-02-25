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
import org.w3c.dom.events.Event
import org.w3c.dom.parsing.DOMParser
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window

object LoadFile {
    val cacheShelfLife = 60 * 60 * 24 * 7 //7日

    fun load(cacheShelfLife: Int, filePath: String): XMLHttpRequest{
        val xmlhttp = XMLHttpRequest()
        xmlhttp.open("GET", filePath, false)
        xmlhttp.setRequestHeader("cache-control", "max-age=${cacheShelfLife}")//以秒為單位
        xmlhttp.send()
        return xmlhttp
    }

    fun load(filePath: String): XMLHttpRequest{
        return load(cacheShelfLife, filePath)
    }

    fun load(onLoadedFile: (xmlhttp: XMLHttpRequest)->Unit, onFailedLoadFile: ()->Unit, cacheShelfLife: Int, filePaths: ArrayLinkList<String>){
        val filePath = filePaths.node
        println("0 ${filePath}")
        val xmlhttp = XMLHttpRequest()
        println("1 ${filePath}")
        var isFailedLoadFile = false //確保FailedLoad後只限一次
        println("2 ${filePath}")
        val onFailedLoadFileProgram: dynamic = fun(){
            if(!isFailedLoadFile){
                println("8F ${filePath}")
                isFailedLoadFile = true
                println("9F ${filePath}")
                println("未能讀取: ${filePaths.node}")
                println("10F ${filePath}")
                onFailedLoadFile()
                println("11F ${filePath}")
                //PromptBox.promptMessage(dialogues.node().canNotReadData)
                if(filePaths.nodeID?:return < filePaths.size-1){
                    println("12F ${filePath}")
                    filePaths.next()
                    println("13F ${filePath}")
                    load(onLoadedFile, onFailedLoadFile, filePaths)
                    println("14F ${filePath}")
                }
            }
        }
        xmlhttp.ontimeout = onFailedLoadFileProgram
        xmlhttp.onerror = onFailedLoadFileProgram
        xmlhttp.onreadystatechange = fun(event){
            if (xmlhttp.readyState == 4.toShort() && xmlhttp.status == 404.toShort()){ onFailedLoadFileProgram() }
        }
        xmlhttp.onload = fun(event) {
            println("8L ${filePath}")
            if(xmlhttp.status.toInt()==200){
                println("9L ${filePath}")
                println(xmlhttp.status)
                println("10L ${filePath}")
                println("成功讀取: ${filePaths.node}")
                println("11L ${filePath}")
                println(xmlhttp.response)
                println("12L ${filePath}")
                onLoadedFile(xmlhttp)
                println("13 ${filePath}")
            }else{ onFailedLoadFileProgram() }
        }

        println("3 ${filePath}")
        var path: String = filePaths.node?:""
        if(path.startsWith("http")){
            //實現<跨Domain存取(CORS)>重點
            //完全唔明點解做到,要將呢個url+文件位置就得
            //https://github.com/Rob--W/cors-anywhere
            val cors_api_url = "https://cors-anywhere.herokuapp.com/"
            path = cors_api_url + path
        }
        println("4 ${filePath}")
        xmlhttp.open("GET", path, true)
        println("5 ${filePath}")
        xmlhttp.setRequestHeader("cache-control", "max-age=${cacheShelfLife}")//以秒為單位///////////////////////////////整個可以強制響線上讀取唔用Cache
        println("6 ${filePath}")
        xmlhttp.send()
    }

    fun load(onLoadedFile: (xmlhttp: XMLHttpRequest)->Unit, onFailedLoadFile: ()->Unit, cacheShelfLife: Int, filePath: Array<out String>){
        load(onLoadedFile, onFailedLoadFile, cacheShelfLife, ArrayLinkList(filePath))
    }

    fun load(onLoadedFile: (xmlhttp: XMLHttpRequest)->Unit, onFailedLoadFile: ()->Unit, cacheShelfLife: Int, vararg filePath: String){
        load(onLoadedFile, onFailedLoadFile, cacheShelfLife, filePath)
    }

    fun load(onLoadedFile: (xmlhttp: XMLHttpRequest)->Unit, onFailedLoadFile: ()->Unit, filePaths: ArrayLinkList<String>){
        load(onLoadedFile, onFailedLoadFile, cacheShelfLife, filePaths)
    }

    fun load(onLoadedFile: (xmlhttp: XMLHttpRequest)->Unit, onFailedLoadFile: ()->Unit, filePath: Array<out String>){
        load(onLoadedFile, onFailedLoadFile, cacheShelfLife, ArrayLinkList(filePath))
    }

    fun load(onLoadedFile: (xmlhttp: XMLHttpRequest)->Unit, onFailedLoadFile: ()->Unit, vararg filePath: String){
        load(onLoadedFile, onFailedLoadFile, cacheShelfLife, filePath)
    }
}
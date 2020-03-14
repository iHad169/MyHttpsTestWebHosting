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
    private val cacheShelfLife = 60 * 60 * 24 * 7 //7日

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

    /**
     * Proxy嘅URL表
     *
     * 以倒序作先後嘗試proxy次序
     * */
    private val proxyUrlList: ArrayList<String> = {
        val proxyUrlList = ArrayList<String>()
        proxyUrlList.add("https://hknbp-proxy.herokuapp.com/")
        proxyUrlList.add("https://cors-anywhere.herokuapp.com/")
        proxyUrlList
    }()

    fun load(onLoadedFile: (xmlhttp: XMLHttpRequest)->Unit, onFailedLoadFile: ()->Unit, cacheShelfLife: Int, filePaths: ArrayLinkList<String>){
        val xmlhttp = XMLHttpRequest()
        val useProxy = fun(){
            val path: String = filePaths.node?:return
            val isAddedProxy: Boolean = {
                var isAddedProxy = false
                for(url in proxyUrlList){
                    if(path.startsWith(url)){isAddedProxy = true}
                }
                isAddedProxy
            }()
            if(path.startsWith("http") && !isAddedProxy){
                //要加使用Proxy嘅URL嘅位置,作下一個去讀取嘅filePath
                val addTagetIndex = (filePaths.nodeID?:return) + 1
                //實現<跨Domain存取(CORS)>重點
                //完全唔明點解做到,要將呢個url+文件位置就得
                //https://github.com/Rob--W/cors-anywhere
                for(proxyUrl in proxyUrlList){
                    filePaths.add(addTagetIndex, proxyUrl + path)
                }
            }
        }
        var isFailedLoadFile = false //確保FailedLoad後只限一次
        val onFailedLoadFileProgram: dynamic = fun(){
            if(!isFailedLoadFile){
                isFailedLoadFile = true
                println("未能讀取: ${filePaths.node}")
                //PromptBox.promptMessage(dialogues.node().canNotReadData)
                useProxy()
                if(filePaths.nodeID?:{onFailedLoadFile();null}()?:return < filePaths.size-1){
                    filePaths.next()
                    load(onLoadedFile, onFailedLoadFile, filePaths)
                }else{ onFailedLoadFile() }
            }
        }
        xmlhttp.ontimeout = onFailedLoadFileProgram
        xmlhttp.onerror = onFailedLoadFileProgram
        xmlhttp.onreadystatechange = fun(event){
            if (xmlhttp.readyState == 4.toShort() && xmlhttp.status == 404.toShort()){ onFailedLoadFileProgram() }
        }
        xmlhttp.onload = fun(event) {
            if(xmlhttp.status.toInt()==200){
                //println("成功讀取: ${filePaths.node}")
                onLoadedFile(xmlhttp)
            }else{ onFailedLoadFileProgram() }
        }
        xmlhttp.open("GET", filePaths.node?:"", true)
        xmlhttp.setRequestHeader("cache-control", "max-age=${cacheShelfLife}")//以秒為單位///////////////////////////////整個可以強制響線上讀取唔用Cache
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

/**
jq.ajax(json(Pair("url", "http://tvprofil.net/xmltv/data/htv2.hr/weekly_htv2.hr_tvprofil.net.xml"), Pair("success", fun(result: dynamic){
println(result)
})))*/
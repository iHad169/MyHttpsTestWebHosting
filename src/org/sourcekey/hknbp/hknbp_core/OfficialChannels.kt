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
import org.w3c.dom.HTMLProgressElement
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.random.Random


object OfficialChannels {

    private fun set(needSetOfficialChannels: ArrayList<Channel>) {
        //刪除舊有OfficialChannels
        val needRemoveOfficialChannels = ArrayList<Channel>()
        for(channel in channels){
            if(-1 < channel.number){ needRemoveOfficialChannels.add(channel) }
        }
        channels.removeAll(needRemoveOfficialChannels)
        //加入最新OfficialChannels
        channels.addAll(needSetOfficialChannels)
    }
    /*
    private class ChannelsSearchDisplay(
            val channelsSearchDisplayId: String = "ChannelsSearchDisplay${Random.nextInt(0, 99999999)}",
            protected val message: HTMLDivElement = {
                val message = document.createElement("progress") as HTMLDivElement
                message.style.position                  = "relative"
                message.style.backgroundColor           = "#303030"
                message.style.top                       = "30vh"
                message.style.left                      = "10vh"
                message.style.right                     = "10vh"
                message.style.cursor                    = "auto"
                message.onclick                         = fun(event){ event.stopPropagation() }//停止行父元素onclick
                message
            }(),
            protected val progressBar: HTMLProgressElement = {
                val progressBar = document.createElement("progress") as HTMLProgressElement
                progressBar.style.position              = "relative"
                progressBar.style.backgroundColor       = "#303030"
                progressBar.style.bottom                = "30vh"
                progressBar.style.left                  = "10vh"
                progressBar.style.right                 = "10vh"
                progressBar.style.cursor                = "auto"
                progressBar.onclick                     = fun(event){ event.stopPropagation() }//停止行父元素onclick
                progressBar
            }(),
            protected val focusOutArea: HTMLDivElement = {
                val focusOutArea = document.createElement("div") as HTMLDivElement
                focusOutArea.style.backgroundColor      = "rgba(0, 0, 0, 0.6)"
                focusOutArea.style.display              = "flex"
                focusOutArea.style.position             = "absolute"
                focusOutArea.style.top                  = "0"
                focusOutArea.style.bottom               = "0"
                focusOutArea.style.left                 = "0"
                focusOutArea.style.right                = "0"
                focusOutArea.style.zIndex               = "90"
                focusOutArea.style.alignItems           = "center"
                focusOutArea.style.justifyContent       = "center"
                focusOutArea.tabIndex                   = -1
                focusOutArea.appendChild(message)
                focusOutArea.appendChild(progressBar)
                focusOutArea
            }(),
            protected val placeArea: HTMLDivElement = {
                val placeArea = document.createElement("div") as HTMLDivElement
                placeArea.id                        = channelsSearchDisplayId
                placeArea.style.display             = "none"
                placeArea.style.position            = "absolute"
                placeArea.style.top                 = "0"
                placeArea.style.bottom              = "0"
                placeArea.style.left                = "0"
                placeArea.style.right               = "0"
                placeArea.style.zIndex              = "90"
                placeArea.appendChild(focusOutArea)
                //將ChannelsSearchDisplay放置在dynamicUserInterfaceArea顯示
                val dynamicUserInterfaceArea = document.getElementById("dynamicUserInterfaceArea") as HTMLDivElement
                dynamicUserInterfaceArea.appendChild(placeArea)

                placeArea
            }()
    ): UserInterface(placeArea){

        fun update(max: Double, value: Double) {
            progressBar.max     = max
            progressBar.value   = value
            message.innerHTML   = "<i class=\"icon-font\">&#xe834;</i>搜索頻道中..."
        }

        override fun hide() {
            super.hide()
            (document.getElementById("dynamicUserInterfaceArea") as HTMLDivElement).removeChild(placeArea)
        }

        init {
            show(null)
        }
    }*/

    /**
     * 更新OfficialChannels
     * */
    fun updateChannels(){
        /*
        var channelsSearchDisplay: ChannelsSearchDisplay? = null
        var isShowProgress = false*/
        parseChannels(fun(max: Double, value: Double){
            /*
            if(channels.size<1){
                if(!isShowProgress){
                    isShowProgress = true
                    channelsSearchDisplay = ChannelsSearchDisplay()
                }
                channelsSearchDisplay?.update(max, value)
                if(max <= value){
                    //channelsSearchDisplay?.hide()
                }
            }*/
        }, fun(officialChannels){
            if(channels.size<1){
                //設置OfficialChannels
                set(officialChannels)
                //因第一次運行程式未有channel資料響表入面
                //使程式冇頻道進行播放
                //所以load到OfficialChannels資料後就是但搵個頻道播放
                channels.changeToRecentlyWatchedChannel()
            }else{
                //設置OfficialChannels
                set(officialChannels)
            }
        }, fun(){}, "https://official-channels.hknbp.org/official_channels.xml")
    }

    init {
        updateChannels()
    }
}
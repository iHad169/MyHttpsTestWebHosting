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

import kotlin.browser.localStorage


object OfficialChannels {

    /**
     * 讀取電視頻道表資料
     */
    private fun loadOfficialChannelsXML(onLoadedChannelsListener: (channels: ArrayLinkList<Channel>)->Unit){
        parseChannels(fun(channels){ onLoadedChannelsListener(channels) }, fun(){},
                "https://official-channels.hknbp.org/official_channels.xml", "data/official_channels.xml"
        )
    }

    private fun set(needSetOfficialChannels: ArrayList<Channel>) {
        //刪除舊有OfficialChannels
        val needRemoveOfficialChannels = ArrayList<Channel>()
        for(channel in channels){
            println("${channel.number} ${-1 < channel.number}")
            if(-1 < channel.number){ needRemoveOfficialChannels.add(channel) }
        }
        channels.removeAll(needRemoveOfficialChannels)
        //加入最新OfficialChannels
        channels.addAll(needSetOfficialChannels)
    }

    /**
     * 更新OfficialChannels
     * */
    fun updateChannels(){
        loadOfficialChannelsXML(fun(officialChannels){
            //設置OfficialChannels
            set(officialChannels)
            //因第一次運行程式未有channel響表入面,當load到OfficialChannels資料時
            if(localStorage.getItem("isFirstLoadedOfficialChannelsInfoToSet")?.toBoolean()?:true){
                localStorage.setItem("isFirstLoadedOfficialChannelsInfoToSet", false.toString())
                channels.changeToRecentlyWatchedChannel()
            }
        })
    }

    init {
        updateChannels()
    }
}
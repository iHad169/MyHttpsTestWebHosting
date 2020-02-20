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




object OfficialChannels: ChannelsReader() {

    /**
     * 讀取電視頻道表資料
     */
    fun getOfficialChannels(onLoadedChannelsListener: (channels: ArrayLinkList<Channel>)->Unit){
        parseChannels(fun(channels){
            channels.sortBy { channel -> channel.number }
            println("成功讀取official_channels.xml\n此OfficialChannels有${channels.size}條頻道")
            onLoadedChannelsListener(channels)
        }, fun(){
            println("未能讀取official_channels.xml")
        }, "https://official_channels.hknbp.org/official_channels.xml", "data/official_channels.xml")
    }
}
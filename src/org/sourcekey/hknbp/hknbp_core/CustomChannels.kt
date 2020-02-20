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

import org.w3c.dom.parsing.DOMParser
import kotlin.browser.localStorage

object CustomChannels: ChannelsReader() {
    private fun Channel.changeMustNegativeNumber(): Channel {
        return Channel(
                number = this.number.toNegative(),
                name = this.name,
                sources = this.sources,
                information = this.information
        )
    }

    fun toXMLString(customChannels: ArrayLinkList<Channel>): String {
        var channelsString = ""
        for (channel in customChannels) {
            channelsString += channel.changeMustNegativeNumber().toXMLString()
        }
        return channelsString
    }

    private var customChannelsXMLStringCache = localStorage.getItem("customChannels")?:""
        private set(value) {
            //儲存底自訂頻道表
            localStorage.setItem("customChannels", value)
        }

    fun get(): ArrayLinkList<Channel> {
        return parseChannels("<customchannel>${customChannelsXMLStringCache}</customchannel>")
    }

    fun set(customChannels: ArrayLinkList<Channel>) {
        customChannelsXMLStringCache = toXMLString(customChannels)
    }

    fun set(customChannelsXMLString: String) {
        set(parseChannels(customChannelsXMLString))
    }

    fun add(customChannel: Channel){
        customChannelsXMLStringCache += customChannel.toXMLString()
    }

    /*
    fun set(index: Int, customChannel: Channel){

    }

    fun remove(customChannel: Channel){

    }
    */
}
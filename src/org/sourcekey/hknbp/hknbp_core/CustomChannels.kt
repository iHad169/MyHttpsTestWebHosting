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

    private fun setSourceToXMLString(source: Channel.Source): String {
        return """<source description="${source.description}" iframeplayersrc="${source.iFramePlayerSrc}" link="${source.link}"/>"""
    }

    private fun setSourcesToXMLString(sources: ArrayLinkList<Channel.Source>): String {
        var sourcesString = ""
        for (source in sources) {
            sourcesString += setSourceToXMLString(source)
        }
        return sourcesString
    }

    fun setChannelToXMLString(channel: Channel): String {
        return """<channel number="${channel.number}">
    <name lang="">${channel.name}</name>
    ${setSourcesToXMLString(channel.sources)}
    <information epgid="${channel.information.epgID}" src="${channel.information.src}"/>
</channel>"""
    }

    fun setChannelsToXMLString(customChannels: ArrayLinkList<Channel>): String {
        var channelsString = ""
        for (channel in customChannels) {
            channelsString += setChannelToXMLString(channel)
        }
        return channelsString
    }

    fun getCustomChannels(): ArrayLinkList<Channel> {
        return parseChannels(localStorage.getItem("customChannels") ?: "")
    }

    fun setCustomChannels(customChannels: ArrayLinkList<Channel>) {
        val currentCustomChannels = getCustomChannels()
        //將CustomChannels加去要Save嘅表
        for (channel in customChannels) {
            currentCustomChannels.add(channel)
        }
        //將依家運行緊嘅表排列返加完嘅Channel
        currentCustomChannels.sortBy { channel -> channel.number }
        //儲存底自訂頻道表
        localStorage.setItem("customChannels", setChannelsToXMLString(currentCustomChannels))
        //更新頻道表
        updateChannels()
    }

    fun setCustomChannels(customChannelsXMLString: String) {
        setCustomChannels(parseChannels(customChannelsXMLString))
    }

    fun setCustomChannel(customChannel: Channel): Boolean {
        val currentCustomChannels = getCustomChannels()
        //搵要add()嘅Channel有冇撞Number
        val isNumberHaveChannel = currentCustomChannels.find(fun(_channel: Channel): Boolean {
            return _channel.number == customChannel.number
        }) != null
        if (!isNumberHaveChannel) {
            //將CustomChannel加去要Save嘅表
            currentCustomChannels.add(customChannel)
        } else {
            return false
        }
        //將依家運行緊嘅表排列返加完嘅Channel
        currentCustomChannels.sortBy { channel -> channel.number }
        //儲存低CustomChannels
        localStorage.setItem("customChannels", setChannelsToXMLString(currentCustomChannels))
        //更新頻道表
        updateChannels()
        return true
    }

    fun addCustomChannel(customChannel: Channel): Boolean {
        return setCustomChannel(customChannel)
    }

    fun removeCustomChannel(customChannel: Channel) {
        val currentCustomChannels = getCustomChannels()
        //響依家嘅自訂頻道表刪要刪除嘅Channel
        currentCustomChannels.remove(customChannel)
        //儲存低CustomChannels
        localStorage.setItem("customChannels", setChannelsToXMLString(currentCustomChannels))
        //更新頻道表
        updateChannels()
    }

    init {

        println("Init CustomChannels")
    }
}
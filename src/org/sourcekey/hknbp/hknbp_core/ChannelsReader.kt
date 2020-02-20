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

import org.w3c.dom.Document
import org.w3c.dom.Element
import org.w3c.dom.get
import org.w3c.dom.parsing.DOMParser


open class ChannelsReader {
    protected fun getName(element: Element): MultiLanguageString {
        val multiLangName = MultiLanguageString()

        var i = 0
        val nameTag = element.getElementsByTagName("name")
        while(i < nameTag.length) {
            val nameElement     = nameTag.get(i)?:break

            val lang            = nameElement.getAttribute("lang")?: ""
            val name            = nameElement.innerHTML?: ""

            multiLangName.add(MultiLanguageString.LanguageString(lang, name))
            i++
        }

        return multiLangName
    }

    protected fun getSources(element: Element): ArrayLinkList<Channel.Source> {
        val sources = ArrayLinkList<Channel.Source>()

        var i = 0
        val sourceTag = element.getElementsByTagName("source")
        while(i < sourceTag.length) {
            val sourceElement   = sourceTag.get(i)?:break

            val description     = sourceElement.getAttribute("description")?: ""
            val iframeplayersrc = sourceElement.getAttribute("iframeplayersrc")?: ""
            val link            = sourceElement.getAttribute("link")?: ""

            sources.add(Channel.Source(description, iframeplayersrc, link))
            i++
        }

        return sources
    }

    protected fun getInformation(element: Element): Channel.Information {
        val informationTag = element.getElementsByTagName("information")
        return Channel.Information(
                informationTag.get(0)?.getAttribute("epgid")?: "",
                informationTag.get(0)?.getAttribute("src")?: ""
        )
    }

    protected fun getChannels(document: Document?): ArrayLinkList<Channel>{
        val channels = ArrayLinkList<Channel>()

        var i = 0
        val channelTag = document?.getElementsByTagName("channel")
        while(i < (channelTag?.length ?: 0)) {
            val channelElement = channelTag?.get(i)?:break

            val number      = channelElement.getAttribute("number")?.toIntOrNull()?: 0
            val name        = getName(channelElement)
            val sources     = getSources(channelElement)
            val information = getInformation(channelElement)

            channels.add(Channel(number, name, sources, information))
            i++
        }

        return channels
    }

    /**
     * 分析已讀取返來嘅電視頻道表資料
     * */
    fun parseChannels(
            onParsedChannelsListener: (channels: ArrayLinkList<Channel>) -> Unit,
            onFailedParseChannelsListener: ()->Unit,
            vararg xmlSrc: String
    ){
        LoadFile.load(fun(xmlHttp){
            onParsedChannelsListener(getChannels(xmlHttp.responseXML))
        }, fun(){
            onFailedParseChannelsListener()
        }, xmlSrc)
    }

    /**
     * 分析已讀取返來嘅電視頻道表資料
     * */
    fun parseChannels(xmlString: String): ArrayLinkList<Channel>{
        return getChannels(DOMParser().parseFromString(xmlString, "text/xml"))
    }
}
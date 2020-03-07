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

import org.sourcekey.hknbp.hknbp_core.MultiLanguageString.LanguageString
import org.w3c.dom.Document
import org.w3c.dom.Element
import org.w3c.dom.get
import org.w3c.dom.parsing.DOMParser
import org.w3c.dom.url.URL
import kotlin.browser.localStorage
import kotlin.browser.window
import kotlin.random.Random


/**
 * 電視頻道
 *
 * @param number 頻道冧把
 * @param name 頻道名
 * @param sources 頻道嘅頻道源list
 * @param information 頻道資料
 */
data class Channel(
        val number: Int,
        val name: MultiLanguageString       = MultiLanguageString(),
        val sources: ArrayLinkList<Source>  = ArrayLinkList(),
        val information: Information        = Information()
) {
    /**
     * 頻道源
     *
     * @param description 係乜野頻道源
     * @param iFramePlayerSrc 頻道源需要使用嘅iFramePlayer嘅Src
     * @param link 頻道源條Link
     */
    data class Source(
            val description: String         = "",
            val iFramePlayerSrc: String,
            val link: String
    ){
        override fun equals(other: Any?): Boolean {
            if(other is Source){
                val isDescriptionEqual = this.description == other.description
                val isIFramePlayerSrcEqual = this.iFramePlayerSrc == other.iFramePlayerSrc
                val isLinkEqual = this.link == other.link
                if(isDescriptionEqual&&isIFramePlayerSrcEqual&&isLinkEqual){return true}
            }
            return false
        }

        /**
         * 獲取https可以請求http資源嘅link
         *
         * https因安全問題禁止http方式讀取資源
         * 但確實無法控制 頻道源 使用https方式
         * 但因程式需要乎合 PWA Web應用程式 必需使用https設立
         * 所以解決方法需要透過 代理伺服器
         * 將 http請求 轉成 https請求
         * https://github.com/netnr/proxy
         *
         * @return 如果http嘅link就加代理伺服器輸出 原本已經https嘅link就照輸出
         * */
        fun getLinkOfHttpsGetAble(): String{
            if(link.startsWith("http://")){
                val proxy_url = "https://hknbp-proxy.herokuapp.com/"
                return proxy_url + link
            }
            return link
        }
    }

    /**
     * 頻道節目表
     *
     * @param id 響節目表內嘅id 用來獲取此頻道嘅所有節目資訊
     * @param src 頻道節目表源
     */
    data class Information(
            val epgID: String               = "",
            val src: String                 = ""
    ){
        /**
         * 頻道資料
         *
         * 響XML檔解析返來嘅資料儲低
         * 之後可以唔使再解析
         * */
        private var xmltv: XMLTV? = null

        /**
         * 獲取資料
         *
         * @param onLoadedXMLTVListener 當完成讀取XMLTV就執行呢個function
         * */
        fun getXMLTV(onLoadedXMLTVListener: (xmltv: XMLTV)->Unit){
            if(xmltv == null){
                XMLTV.parseXMLTV(fun(xmltv){
                    this.xmltv = xmltv
                    onLoadedXMLTVListener(this.xmltv?: XMLTV())
                }, fun(){}, epgID, src)
            }else{
                onLoadedXMLTVListener(xmltv?:XMLTV())
            }
        }

        override fun equals(other: Any?): Boolean {
            if(other is Information){
                val isEpgIdEqual = this.epgID == other.epgID
                val isSrcEqual = this.src == other.src
                if(isEpgIdEqual&&isSrcEqual){return true}
            }
            return false
        }
    }

    override fun equals(other: Any?): Boolean {
        if(other is Channel){
            val isNumberEqual = this.number == other.number
            val isNameEqual = this.name == other.name
            for(thisSource in this.sources){
                var isHaveSameSource = false
                for(otherSource in other.sources){ if(thisSource == otherSource){isHaveSameSource = true} }
                if(!isHaveSameSource){return false}
            }
            val isInformationEqual = this.information == other.information
            if(isNumberEqual&&isNameEqual&&isInformationEqual){return true}
        }
        return false
    }

    private fun LanguageString.toXMLString(): String {
        return """<name lang="${this.lang}">${this.string}</name>"""
    }

    private fun MultiLanguageString.toXMLString(): String {
        var nameMultiLangString = ""
        for (name in this) {
            nameMultiLangString += name.toXMLString()
        }
        return nameMultiLangString
    }

    private fun Source.toXMLString(): String {
        return """<source description="${this.description}" iframeplayersrc="${this.iFramePlayerSrc}" link="${this.link}"/>"""
    }

    private fun ArrayLinkList<Source>.toXMLString(): String {
        var sourcesString = ""
        for (source in this) {
            sourcesString += source.toXMLString()
        }
        return sourcesString
    }

    fun toXMLString(): String {
        return """<channel number="${this.number}">
    ${this.name.toXMLString()}
    ${this.sources.toXMLString()}
    <information epgid="${this.information.epgID}" src="${this.information.src}"/>
</channel>
"""
    }
}

/**
 * 去特定頻道
 * @param channelNumber 要轉去頻道冧把
 */
fun ArrayLinkList<Channel>.designatedOfChannelNumber(channelNumber: Int): Boolean {
    val channelNumberNodeID = this.indexOfOrNull(this.find{ channel -> channel.number == channelNumber })
    if (channelNumberNodeID != null) {
        this.designated(channelNumberNodeID)
        return true
    } else {
        Dialogue.getDialogues(fun(dialogues) {
            PromptBox.promptMessage(dialogues.node?.canNotFind ?: "")
        })
        return false
    }
}

/**
 * 轉到最近睇過嘅頻道
 * */
fun ArrayLinkList<Channel>.changeToRecentlyWatchedChannel(){
    this.designated(
            try {
                //URL參數指定嘅道
                {
                    val channelParam = URL(window.location.href).searchParams?.get("channel")//個<?.get>嘅問號要留,因試到https://cs.coredump.biz/questions/51961922/urlsearchparams-not-working-in-a-webview
                    //查個參數係米純ChannelNumber
                    var goTOChannelNumber = channelParam?.toIntOrNull()
                    //查個參數係米CustomChannel嘅XmlString
                    val customChannel = decodeURIComponent(channelParam?:"").parseChannels().getOrNull(0)
                    if(customChannel != null && this.find{ channel: Channel -> channel == customChannel } == null) {
                        //將新嘅自訂頻道儲底
                        CustomChannels.add(customChannel)
                        //將新嘅自訂頻道加到現運行頻道表
                        this.add(customChannel)
                        //轉到新自訂頻道
                        goTOChannelNumber = customChannel.number
                    }
                    //轉換成ArrayList Index
                    this.indexOfOrNull(this.find{channel -> channel.number == goTOChannelNumber})
                }()?:
                //上次收睇緊嘅頻道
                {
                    val recentlyWatchedChannel = localStorage.getItem("RecentlyWatchedChannel")?.toInt()
                    if(recentlyWatchedChannel != null){
                        if(recentlyWatchedChannel < this.size){ recentlyWatchedChannel }else{ this.lastIndex }
                    }else{ null }
                }()?:
                //隨機一個頻道
                if(this.size <= 0){ 0 }else{ Random.nextInt(0, this.size) }
            }catch(e:dynamic){0}
    )
}

/**
 * 頻道表
 * */
val channels: ArrayLinkList<Channel> = {
    val channels = localStorage.getItem("allChannels")?.parseChannels()?:ArrayLinkList<Channel>()
    channels.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<Channel> {
        override fun onNodeChanged(
                preChangeNodeID: Int?, postChangeNodeID: Int?,
                preChangeNode: Channel?, postChangeNode: Channel?
        ) {
            //儲存低返最近睇過嘅頻道
            localStorage.setItem("RecentlyWatchedChannel", postChangeNodeID.toString())
            //更新URL嘅channel參數
            if(postChangeNode != null){
                if(postChangeNode.number < 0){
                    //自訂頻道參數(用作分享連結)
                    updateURLParameter("channel", encodeURIComponent(postChangeNode.toXMLString()))
                }else{
                    //官方頻道參數(用作分享連結)
                    updateURLParameter("channel", postChangeNode.number.toString())
                }
            }
            //將頻道播放
            Player.playChannel(channels.node?: Channel(0))
        }
    })
    channels.addOnElementsChangedListener(object: ArrayLinkList.OnElementsChangedListener{
        override fun onElementsChanged() {
            //以頻道號碼排序
            channels.sortBy { channel: Channel -> channel.number }
            //儲存所有頻道
            localStorage.setItem("allChannels", "<channels>${channels.toXMLString()}</channels>")
        }
    })
    channels.changeToRecentlyWatchedChannel()
    channels
}()

/*
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

private fun getName(element: Element): MultiLanguageString {
    val multiLangName = MultiLanguageString()

    var i = 0
    val nameTag = element.getElementsByTagName("name")
    while(i < nameTag.length) {
        val nameElement     = nameTag.get(i)?:break
        println("nameElement ${nameElement}")
        println("nameElement.innerHTML ${nameElement.innerHTML}")
        println("nameElement.textContent ${nameElement.textContent}")
        println("nameElement.nodeValue ${nameElement.nodeValue}")
        val lang            = nameElement.getAttribute("lang")?: ""
        val name            = nameElement.textContent?: ""

        multiLangName.add(MultiLanguageString.LanguageString(lang, name))
        i++
    }

    return multiLangName
}

private fun getSources(element: Element): ArrayLinkList<Channel.Source> {
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

private fun getInformation(element: Element): Channel.Information {
    val informationTag = element.getElementsByTagName("information")
    return Channel.Information(
            informationTag.get(0)?.getAttribute("epgid")?: "",
            informationTag.get(0)?.getAttribute("src")?: ""
    )
}

private fun getChannels(document: Document?): ArrayLinkList<Channel>{
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
fun String.parseChannels(): ArrayLinkList<Channel>{
    return getChannels(DOMParser().parseFromString(this, "text/xml"))
}

fun ArrayList<Channel>.toXMLString(): String {
    var channelsString = ""
    for (channel in this) {
        channelsString += channel.toXMLString()
    }
    return channelsString
}

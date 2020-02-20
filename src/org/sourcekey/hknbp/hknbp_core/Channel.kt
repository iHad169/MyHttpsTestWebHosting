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
                val proxy_url = "https://netnr-proxy.cloudno.de/"
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

    companion object{


    }
}
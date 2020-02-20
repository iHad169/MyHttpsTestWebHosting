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
class Channel(
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
    class Source(
            val description: String         = "",
            val iFramePlayerSrc: String,
            val link: String
    )

    /**
     * 頻道節目表
     *
     * @param id 響節目表內嘅id 用來獲取此頻道嘅所有節目資訊
     * @param src 頻道節目表源
     */
    class Information(
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
    }
}


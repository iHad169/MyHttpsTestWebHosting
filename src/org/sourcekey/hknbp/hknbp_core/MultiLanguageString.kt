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
import org.w3c.dom.HTMLOptionElement
import org.w3c.dom.HTMLSelectElement
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.browser.localStorage

/**
 * 令String實現多語言功能
 * */
data class MultiLanguageString(
        private val langStringList: ArrayLinkList<LanguageString> = ArrayLinkList()
): ArrayLinkList<LanguageString>(langStringList){

    companion object{
        private val currentUserSystemLanguage = js("navigator.language || navigator.userLanguage;") as String

        /**
         * 使用者選取語言優先排列表
         * */
        val userSelectLanguageSequence = {
            val languageSelect = document.createElement("select") as HTMLSelectElement
            languageSelect.innerHTML =
                    localStorage.getItem("userSelectLanguageOptionSequence")?:"<option>${currentUserSystemLanguage}</option>"

            val sequence = ArrayLinkList<String>()
            sequence.addOnElementsChangedListener(object: OnElementsChangedListener{
                override fun onElementsChanged() {
                    var languageOptionSequence = ""
                    for(lang in sequence){ languageOptionSequence += "<option>${currentUserSystemLanguage}</option>" }
                    localStorage.setItem("userSelectLanguageOptionSequence", languageOptionSequence)
                }
            })
            for(index in 0 until languageSelect.length){
                sequence.add((languageSelect.options.get(index) as HTMLOptionElement).text)
            }
            sequence
        }()

        /**
         * 得閒放返齊整個多語言功能
         * 個userLanguageList放來呢度
         * SettingWindow.getLanguageSetting()
         * */
    }

    open class LanguageString(
            open val lang: String?,
            open val string: String
    )

    override fun equals(other: Any?): Boolean {
        if(other is MultiLanguageString){
            if(this.size == other.size){
                for(thisLangString in this){
                    var isHaveSameLangString = false
                    for(otherLangString in other){
                        val isLangEqual = thisLangString.lang == otherLangString.lang
                        val isStringEqual = thisLangString.string == otherLangString.string
                        if(isLangEqual&&isStringEqual){isHaveSameLangString = true}
                    }
                    if(!isHaveSameLangString){return false}
                }
                return true
            }
        }
        return false
    }

    val lang: String?
        get() = node?.lang

    val string: String?
        get() = node?.string

    /**
     * 輸出所需嘅語言嘅String
     * 令String實現多語言
     * */
    override fun toString(): String {
        return node?.string?:"null"
    }

    /**
     * 搵該語言嘅所有string
     */
    fun getAllStringByLanguage(lang: String): ArrayList<LanguageString>?{
        val langElementList = lang.split("-")
        var allString: ArrayList<LanguageString> = this
        for(index in 0 until langElementList.size){
            val langElement = langElementList.getOrNull(index)

            val findSelectLanguageListTemp = ArrayList<LanguageString>()
            for(findSelectLanguageListElement in allString){
                val compareElement = findSelectLanguageListElement.lang?.split("-")?.getOrNull(index)
                if(langElement?.toUpperCase() === compareElement?.toUpperCase()){
                    findSelectLanguageListTemp.add(findSelectLanguageListElement)
                }
            }
            allString = findSelectLanguageListTemp
        }
        return if(allString.size == 0){ null }else{ allString }
    }

    /**
     * 搵該語言嘅所有string
     */
    fun getAllStringByLanguage(langs: ArrayList<String>): ArrayList<LanguageString>?{
        val langStringList = ArrayList<LanguageString>()
        for(lang in langs){
            val selectLanguage = getAllStringByLanguage(lang)?.getOrNull(0)
            if(selectLanguage != null){ langStringList.add(selectLanguage) }
        }
        return if(langStringList.size < 1){ null }else{ langStringList }
    }

    /**
     * 搵該語言嘅所有string
     */
    fun getAllStringByLanguage(): ArrayList<LanguageString>?{
        return getAllStringByLanguage(userSelectLanguageSequence)
    }

    /**
     * 睇使用者選取語言優先排列表轉語言
     *
     * 最先搵到嘅語言就設置來用
     * 設置最先選取語言
     * 如搵唔到就選擇第0個langString
     */
    private fun changeToNeedToSelectLanguageOfFirst(){
        val selectLanguage = getAllStringByLanguage(userSelectLanguageSequence)?.getOrNull(0)
        if(selectLanguage != null){
            designated(selectLanguage)
        }else{
            node = getOrNull(0)
        }
    }

    init {
        addOnElementsChangedListener(object: OnElementsChangedListener{
            override fun onElementsChanged() {
                changeToNeedToSelectLanguageOfFirst()
            }
        } )
        changeToNeedToSelectLanguageOfFirst()
    }
}

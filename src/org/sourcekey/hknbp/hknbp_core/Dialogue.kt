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

import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.localStorage


/**
 * 程式內對白
 *
 * ////////之後要換過好啲(多語言)架構
 * */
class Dialogue(
        val language: String = "",

        val agree: String = "",
        val canNotFind: String = "",
        val canNotReadData: String = "",
        val cannotReceiveChannelSignal: String = "",
        val episode: String = "",
        val part: String = "",
        val poorSignalReception: String = "",
        val thisDeviceDoesNotSupportThisChannelSignal: String = "",
        val totalEpisode: String = "",
        val totalSeason: String = "",
        val totalPart: String = "",
        val season: String = ""

) {
    companion object {
        private fun getDialoguesNodeID(dialogues: ArrayLinkList<Dialogue>, language: String): Int{
            var dialogueNodeID = 0
            for(dialogue in dialogues){
                dialogueNodeID++
                if(language === dialogue.language){
                    return dialogueNodeID
                }
            }
            return 0
        }

        private var dialogues: ArrayLinkList<Dialogue>? = null

        fun getDialogues(onLoadedDialogueListener: (dialogues: ArrayLinkList<Dialogue>)->Unit){
            if(dialogues == null){
                LoadFile.load(fun(max: Double, value: Double){
                }, fun(xmlHttp){
                    if(xmlHttp.responseText!==""){
                        val dialogues = ArrayLinkList(JSON.parse<Array<Dialogue>>(xmlHttp.responseText))
                        dialogues.addOnNodeEventListener(object: ArrayLinkList.OnNodeEventListener<Dialogue>{
                            override fun onNodeChanged(preChangeNodeID: Int?, postChangeNodeID: Int?, preChangeNode: Dialogue?, postChangeNode: Dialogue?) {
                                localStorage.setItem("SelectedLanguage", postChangeNodeID.toString())//儲存低返最近睇過嘅頻道
                            }
                        })
                        dialogues.designated(localStorage.getItem("SelectedLanguage")?.toInt()?:0)//讀返最近使用嘅語言

                        this.dialogues = dialogues
                        onLoadedDialogueListener(this.dialogues?:ArrayLinkList<Dialogue>())
                    }
                }, fun(){}, "data/dialogue.json")
            }else{
                onLoadedDialogueListener(dialogues?:ArrayLinkList<Dialogue>())
            }
        }
    }
}
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

import jquery.jq
import org.w3c.dom.Element
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.random.Random

open class DialogueBox(
        var title: String = "",
        var dialogueHTML: String,
        var okButtonString: String = "OK",
        var okButtonScript: (()->Unit)? = null,
        var cancelButtonString: String = "Cancel",
        var cancelButtonScript: (()->Unit)? = null,
        private val titleDiv: HTMLDivElement = {
            val titleDiv = document.createElement("div") as HTMLDivElement
            titleDiv.style.textAlign                = "left"
            titleDiv.innerHTML                      = title
            titleDiv
        }(),
        private val dialogueDiv: HTMLDivElement = {
            val dialogueDiv = document.createElement("div") as HTMLDivElement
            dialogueDiv.innerHTML                   = dialogueHTML
            dialogueDiv
        }(),
        private val okButton: HTMLButtonElement = {
            val okButton = document.createElement("button") as HTMLButtonElement
            okButton.style.flex                     = "1"
            okButton.style.color                    = "#FFF"
            okButton.style.fontWeight               = "bold"
            okButton.style.fontSize                 = "4vh"
            okButton.innerHTML                      = okButtonString
            okButton
        }(),
        private val cancelButton: HTMLButtonElement = {
            val cancelButton = document.createElement("button") as HTMLButtonElement
            cancelButton.style.flex                 = "1"
            cancelButton.style.color                = "#FFF"
            cancelButton.style.fontWeight           = "bold"
            cancelButton.style.fontSize             = "4vh"
            cancelButton.innerHTML                  = cancelButtonString
            cancelButton
        }(),
        private val dialogueBox: HTMLDivElement = {
            fun createFlexArea(vararg elements: HTMLElement): HTMLDivElement{
                val flexArea = document.createElement("div") as HTMLDivElement
                flexArea.style.display                  = "flex"
                flexArea.style.width                    = "100%"
                for(element in elements){ flexArea.appendChild(element) }
                return flexArea
            }

            val dialogueBox = document.createElement("div") as HTMLDivElement
            dialogueBox.style.position              = "relative"
            dialogueBox.style.backgroundColor       = "#303030"
            dialogueBox.style.cursor                = "auto"
            dialogueBox.onclick                     = fun(event){ event.stopPropagation() }//停止行父元素onclick
            dialogueBox.appendChild(titleDiv)
            dialogueBox.appendChild(dialogueDiv)
            dialogueBox.appendChild(createFlexArea(okButton, cancelButton))
            dialogueBox
        }(),
        private val focusOutArea: HTMLDivElement = {
            val focusOutArea = document.createElement("div") as HTMLDivElement
            focusOutArea.style.backgroundColor      = "rgba(0, 0, 0, 0.6)"
            focusOutArea.style.display              = "flex"
            focusOutArea.style.position             = "absolute"
            focusOutArea.style.top                  = "0"
            focusOutArea.style.bottom               = "0"
            focusOutArea.style.left                 = "0"
            focusOutArea.style.right                = "0"
            focusOutArea.style.zIndex               = "90"
            focusOutArea.style.alignItems           = "center"
            focusOutArea.style.justifyContent       = "center"
            //focusOutArea.onclick                    = fun(event){ hide() }
            focusOutArea.appendChild(dialogueBox)
            focusOutArea
        }(),
        private val placeArea: HTMLDivElement = {
            //建立Window放置空間
            val placeArea = document.createElement("div") as HTMLDivElement
            placeArea.id                        = "dialogue${Random.nextInt(0, 99999999)}"
            placeArea.style.display             = "none"
            placeArea.style.position            = "absolute"
            placeArea.style.top                 = "0"
            placeArea.style.bottom              = "0"
            placeArea.style.left                = "0"
            placeArea.style.right               = "0"
            placeArea.style.zIndex              = "90"
            //將Window放置在dynamicUserInterfaceArea顯示
            val dynamicUserInterfaceArea = document.getElementById("dynamicUserInterfaceArea") as HTMLDivElement
            dynamicUserInterfaceArea.appendChild(placeArea)

            placeArea
        }()
): TabbableUI(
        placeArea,
        firstFocusJqElement = jq(cancelButton),
        transpositionFocusHideTime = null
) {

    override fun hide() {
        super.hide()
        val dynamicUserInterfaceArea = document.getElementById("dynamicUserInterfaceArea") as HTMLDivElement
        dynamicUserInterfaceArea.removeChild(placeArea)
    }

    init {
        okButton.onclick = fun(event){
            okButtonScript?.invoke()
            hide()
        }
        cancelButton.onclick = fun(event){
            cancelButtonScript?.invoke()
            hide()
        }
        placeArea.appendChild(focusOutArea)
        show(null)
    }
}
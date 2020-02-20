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

import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

open class DialogueBox(
        var title: String = "",
        var dialogueHTML: String,
        var okButtonString: String = "OK",
        var okButtonScript: (()->Unit)? = null,
        var cancelButtonString: String = "Cancel",
        var cancelButtonScript: (()->Unit)? = null
): UserInterface(
        "dialogueBox",
        conversionFocusHideTime = null
) {

    val titleDiv        = document.getElementById("dialogueBoxTitleDiv") as HTMLDivElement
    val dialogueDiv     = document.getElementById("dialogueBoxDialogueDiv") as HTMLDivElement
    val okButton        = document.getElementById("dialogueBoxOkButton") as HTMLButtonElement
    val cancelButton    = document.getElementById("dialogueBoxCancelButton") as HTMLButtonElement

    init {
        titleDiv.innerHTML = title
        dialogueDiv.innerHTML = dialogueHTML
        okButton.innerHTML = okButtonString
        okButton.onclick = fun(event){
            okButtonScript?.invoke()
            hide()
        }
        cancelButton.innerHTML = cancelButtonString
        cancelButton.onclick = fun(event){
            cancelButtonScript?.invoke()
            hide()
        }
        show()
    }
}
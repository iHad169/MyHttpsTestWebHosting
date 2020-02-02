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
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window

object ConsentPanel: TabbableUI(
        document.getElementById("consentPanel") as HTMLElement,
        firstFocusJqElement = jq(document.getElementById("consentPanelAgreeConsentButton") as HTMLElement),
        transpositionFocusHideTime = null
){
    private val consentPanel       = document.getElementById("consentPanel") as HTMLDivElement
    private val agreeConsentButton  = document.getElementById("consentPanelAgreeConsentButton") as HTMLButtonElement

    fun isAgreeConsent(): Boolean{
        return localStorage.getItem("IsAgreeConsent")?.toBoolean()?: false
    }

    init {
        consentPanel.style.cursor = "auto"
        if(isAgreeConsent() != true){
            show(null)
            agreeConsentButton.focus()
        }
        Dialogue.getDialogues(fun(dialagues){
            agreeConsentButton.innerHTML = dialagues.node?.agree?:"同意"
        })
        agreeConsentButton.onclick = fun(event){
            localStorage.setItem("IsAgreeConsent", true.toString())
            hide()
        }
    }
}
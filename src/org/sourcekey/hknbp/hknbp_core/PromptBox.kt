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
import kotlin.browser.window
import kotlin.random.Random


/**
 * 輸出 提示訊息 提示觀眾
 * @param message 提示訊息
 * @param time 顯示訊息時間
 */
open class PromptBox(
        val message: String,
        val time: Int? = 3500,
        val promptBoxId: String = "promptBox${Random.nextInt(0, 99999999)}",
        protected val promptBox: HTMLDivElement = {
            //建立PromptBox
            val promptBox = document.createElement("div") as HTMLDivElement
            promptBox.id                        = promptBoxId
            promptBox.style.backgroundColor     = "#111111"
            promptBox.style.cssFloat            = "right"
            promptBox.style.fontSize            = "5vh"
            promptBox.style.display             = "none"
            promptBox.style.position            = "absolute"
            promptBox.style.bottom              = "0"
            promptBox.style.right               = "0"
            promptBox.style.paddingLeft         = "1.5vh"
            promptBox.style.paddingRight        = "1.5vh"
            promptBox.style.textAlign           = "center"
            promptBox.style.verticalAlign       = "middle"
            promptBox.style.zIndex              = "100"
            //將PromptBox放置在dynamicUserInterfaceArea顯示
            val dynamicUserInterfaceArea = document.getElementById("dynamicUserInterfaceArea") as HTMLDivElement
            dynamicUserInterfaceArea.appendChild(promptBox)

            promptBox
        }()
): UserInterface(promptBox){

    override fun hide() {
        super.hide()
        (document.getElementById("dynamicUserInterfaceArea") as HTMLDivElement).removeChild(promptBox)
    }

    init {
        promptBox.innerHTML = message
        show(time)
    }
}



//margin:auto;





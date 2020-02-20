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

import kotlin.browser.document
import kotlin.browser.window

object PromptBox: UserInterface("promptBox") {
    private val promptBox: dynamic = document.getElementById("promptBox")


    /**
     * 輸出 提示訊息 提示觀眾
     * @param promptMessage 提示訊息
     */
    @JsName("promptMessage") fun promptMessage(promptMessage: String): Int{
        promptBox.innerHTML = promptMessage
        show(3500)
        return 0/////////
    }

    init {
        println("Init PromptBox")
    }
}
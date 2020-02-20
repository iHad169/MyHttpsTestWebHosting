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

import kotlinx.serialization.ImplicitReflectionSerializer
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Window
import kotlin.browser.document
import kotlin.browser.window

object AudioDescription: UserInterface("trackDescription") {
    private val trackDescription: HTMLDivElement = document.getElementById("trackDescription") as HTMLDivElement
    private val audioIconHTML = "<i class=\"icon-font nestle-bottom\" style=\"display:inline;\">&#xe81c;</i>"

    override fun show() {
        super.show()
        val audioNameHTML = "<div style=\"display:inline;\">${player?.audioTracks?.node?.name?:""}</div>"
        trackDescription.innerHTML = audioIconHTML + "&nbsp" + audioNameHTML
    }

    init {
        println("Init AudioDescription")
    }
}
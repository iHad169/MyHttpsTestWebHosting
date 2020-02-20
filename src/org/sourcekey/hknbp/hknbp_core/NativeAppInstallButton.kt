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
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.window

object NativeAppInstallButton: UserInterface("nativeAppInstallButton") {
    private val nativeAppInstallButton = document.getElementById("nativeAppInstallButton") as HTMLButtonElement
    private var installPromptEvent: dynamic = null

    init{
        hide()
        window.addEventListener("appinstalled", fun(event: dynamic){ hide() })
        window.addEventListener("beforeinstallprompt", fun(event: dynamic){
            // Prevent Chrome <= 67 from automatically showing the prompt
            event.preventDefault()
            // Stash the event so it can be triggered later.
            installPromptEvent = event
            // 顯示安裝Button
            show()
        })

        nativeAppInstallButton.onclick = fun(event){
            installPromptEvent.prompt()
        }

        println("Init NativeAppInstallButton")
    }
}
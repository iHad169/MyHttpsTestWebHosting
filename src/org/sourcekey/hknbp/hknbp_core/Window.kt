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
import kotlin.dom.addClass
import kotlin.random.Random
open class Window(
        val title: String = "",
        var contentHTML: String,
        var width: String = "100vh",
        var height: String = "70vh",
        val isBoundless: Boolean = false,
        val windowId: String = "window${Random.nextInt(0, 99999999)}",
        protected val titleArea: HTMLDivElement = {
            val _title = document.createElement("div") as HTMLDivElement
            _title.style.position                   = "absolute"
            _title.style.top                        = "0"
            _title.style.left                       = "0"
            _title.style.fontWeight                 = "bold"
            _title.style.zIndex                     = "91"
            _title.innerHTML                        = title
            _title
        }(),
        protected val closeButton: HTMLButtonElement = {
            val closeButton = document.createElement("button") as HTMLButtonElement
            closeButton.style.background            = "rgba(0, 0, 0, 0)"
            closeButton.style.color                 = "#FFF"
            closeButton.style.position              = "absolute"
            closeButton.style.top                   = "0"
            closeButton.style.right                 = "0"
            closeButton.style.width                 = "8vh"
            closeButton.style.height                = "8vh"
            closeButton.style.fontWeight            = "bold"
            closeButton.style.fontSize              = "6vh"
            closeButton.style.zIndex                = "91"
            closeButton.innerHTML                   = "<i class=\"icon-font\">&#xe801;</i>"
            closeButton
        }(),
        protected val contentArea: HTMLDivElement = {
            val contentArea = document.createElement("div") as HTMLDivElement
            contentArea.style.position              = "absolute"
            contentArea.style.top                   = "0"
            contentArea.style.bottom                = "0"
            contentArea.style.left                  = "0"
            contentArea.style.right                 = "0"
            contentArea.style.padding               = if(isBoundless){"0"}else{"6vh"}
            contentArea.style.overflowY             = "scroll"
            contentArea.innerHTML                   = contentHTML
            contentArea
        }(),
        protected val window: HTMLDivElement = {
            val window = document.createElement("div") as HTMLDivElement
            window.style.position                   = "relative"
            window.style.width                      = width
            window.style.height                     = height
            window.style.backgroundColor            = "#303030"
            window.style.cursor                     = "auto"
            window.onclick                          = fun(event){ event.stopPropagation() }//停止行父元素onclick
            window.appendChild(titleArea)
            window.appendChild(closeButton)
            window.appendChild(contentArea)
            window
        }(),
        protected val focusOutArea: HTMLDivElement = {
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
            focusOutArea.tabIndex                   = -1
            focusOutArea.appendChild(window)
            focusOutArea
        }(),
        protected val placeArea: HTMLDivElement = {
            //建立Window放置空間
            val placeArea = document.createElement("div") as HTMLDivElement
            placeArea.id                        = windowId
            placeArea.style.display             = "none"
            placeArea.style.position            = "absolute"
            placeArea.style.top                 = "0"
            placeArea.style.bottom              = "0"
            placeArea.style.left                = "0"
            placeArea.style.right               = "0"
            placeArea.style.zIndex              = "90"
            placeArea.appendChild(focusOutArea)
            //將Window放置在dynamicUserInterfaceArea顯示
            val dynamicUserInterfaceArea = document.getElementById("dynamicUserInterfaceArea") as HTMLDivElement
            dynamicUserInterfaceArea.appendChild(placeArea)

            placeArea
        }()
): TabbableUI(
        placeArea,
        firstFocusJqElement = jq(closeButton),
        isFocusOutHide = true
){

    init {
        closeButton.onclick = fun(event){ hide() }
        focusOutArea.onclick = fun(event){ hide() }
    }
}




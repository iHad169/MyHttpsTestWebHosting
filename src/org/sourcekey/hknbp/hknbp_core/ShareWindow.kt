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
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLScriptElement
import kotlin.browser.document

object ShareWindow : TabbableUI(document.getElementById("shareWindow") as HTMLElement) {
    //private val shareWindow = document.getElementById("shareWindow") as HTMLDivElement
    private val hideButton = document.getElementById("shareWindowHideButton") as HTMLButtonElement
    private val buttonList = document.getElementById("shareWindowShareButtonList") as HTMLDivElement

    override fun show(showTime: Int?) {
        super.show(showTime)
        buttonList.setAttribute("data-a2a-url", kotlin.browser.window.location.href)//設定要分享嘅Link
    }

    init {
        hideButton.onclick = fun(event){hide()}
    }
}
/**
object ShareWindow : Window(
        title = "",
        contentHTML = """
            <script src="https://static.addtoany.com/menu/page.js"></script>
            <div class="contentCenter" style="width:60vh;">
                <!-- AddToAny BEGIN -->
                <div class="a2a_kit a2a_kit_size_32 a2a_default_style" id="shareWindowShareButtonList">
                    <a class="a2a_button_facebook">
                        <img src="https://static.addtoany.com/buttons/facebook.svg" style="background-color:#3b5998">
                    </a>
                    <a class="a2a_button_twitter">
                        <img src="https://static.addtoany.com/buttons/twitter.svg" style="background-color:#55acee">
                    </a>
                    <a class="a2a_button_linkedin">
                        <img src="https://static.addtoany.com/buttons/linkedin.svg" style="background-color:#007bb5">
                    </a>
                    <a class="a2a_button_whatsapp">
                        <img src="https://static.addtoany.com/buttons/whatsapp.svg" style="background-color:#12af0a">
                    </a>
                    <a class="a2a_button_email">
                        <img src="https://static.addtoany.com/buttons/email.svg" style="background-color:royalblue">
                    </a>
                    <a class="a2a_button_reddit">
                        <img src="https://static.addtoany.com/buttons/reddit.svg" style="background-color:#ff4500">
                    </a>
                    <a class="a2a_button_line">
                        <img src="https://static.addtoany.com/buttons/line.svg" style="background-color:#00c300">
                    </a>
                    <a class="a2a_button_copy_link">
                        <img src="https://static.addtoany.com/buttons/link.svg" style="background-color:#666666">
                    </a>
                    <a class="a2a_button_google_gmail">
                        <img src="https://static.addtoany.com/buttons/gmail.svg" style="background-color:#dd5347">
                    </a>
                    <a class="a2a_button_telegram">
                        <img src="https://static.addtoany.com/buttons/telegram.svg" style="background-color:#2ca5e0">
                    </a>
                    <a class="a2a_dd" href="https://www.addtoany.com/share">
                        <img src="https://static.addtoany.com/buttons/a2a.svg" style="background-color:rgba(0,0,0,0);">
                    </a>
                </div>
                <div id="sss"></div>
                <!-- AddToAny END -->
            </div>
        """,
        width = "70vh",
        height = "45vh",
        firstFocusElementID = "shareWindowHideButton") {
    private val buttonList = document.getElementById("shareWindowShareButtonList") as HTMLDivElement

    override fun show() {
        super.show()
        buttonList.setAttribute("data-a2a-url", kotlin.browser.window.location.href)//設定要分享嘅Link
    }

    init {


        println("Init ShareWindow")
    }
}
 */
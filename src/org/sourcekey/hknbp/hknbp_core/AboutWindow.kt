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
import kotlin.browser.document
import kotlin.browser.window

object AboutWindow: Window(
        title = "",
        contentHTML = """
            <div style="font-size:2.5vh;">
                <div><img src="img/logo.png" style="width:20vh;height:20vh;"/></div>
                <div style="font-size:6vh;">香港網路廣播平台</div>
                <br>
                <div>Core版本: <div style="display:inline;" id="aboutWindowCoreVersionText"></div></div>
                <div>App版本: <div style="display:inline;" id="aboutWindowAppVersionText"></div></div>
                <br>
                <br>
                <div style="font-size:2vh;">Contributor</div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/320px-IntelliJ_IDEA_Logo.svg.png" style="width:auto;height:4vh;margin:.5vh;"/><!--IDEA-->
                    <img src="https://rocket-seo.com/wp-content/uploads/google-analytics-logo.png" style="width:auto;height:4vh;margin:.5vh;"/><!--GoogleAnalytics-->
                    <img src="https://gregtrevellick.gallerycdn.vsassets.io/extensions/gregtrevellick/openinandroidstudio/1.1.52/1540120323482/ThirdPartyLogo.png" style="width:auto;height:4vh;margin:.5vh;"/><!--AndroidStudio-->
                    <img src="https://camo.githubusercontent.com/627c774e3070482b180c3abd858ef2145d46303b/68747470733a2f2f656c656374726f6e6a732e6f72672f696d616765732f656c656374726f6e2d6c6f676f2e737667" style="width:auto;height:4vh;margin:.5vh;"/><!--Electron-->
                    <img src="https://informsuiuc.files.wordpress.com/2016/10/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png" style="width:auto;height:4vh;margin:.5vh;filter:invert(100%);"/><!--Github-->
                    <img src="https://camo.githubusercontent.com/fd8e51a1c5161fbcff241c09b4e1001c20768b3f/68747470733a2f2f7261776769746875622e636f6d2f666f6e74656c6c6f2f666f6e74656c6c6f2f6d61737465722f666f6e74656c6c6f2d696d6167652e737667" style="width:auto;height:4vh;margin:.5vh;filter:invert(100%);"/><!--fontello-->
                    <img src="http://webostv.developer.lge.com/download_file/view_inline/1016/" style="width:auto;height:4vh;margin:.5vh;"/><!--WebOS-->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tizen-Lockup-On-Dark-RGB.png/800px-Tizen-Lockup-On-Dark-RGB.png" style="width:auto;height:4vh;margin:.5vh;"/><!--Tizen-->
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/0c/Xcode_icon.png" style="width:auto;height:4vh;margin:.5vh;"/><!--Xcode-->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" style="width:auto;height:4vh;margin:.5vh;"/><!--Youtube-->
                    <img src="https://avatars0.githubusercontent.com/u/12976866?s=400&v=4" style="width:auto;height:4vh;margin:.5vh;"/><!--XMLTV-->
                    <img src="https://user-images.githubusercontent.com/110953/28352645-7a8a66d8-6c0c-11e7-83af-752609e7e072.png" style=4width:auto;height:5vh;margin:.5vh;"/><!--Workbox-->
                    <img src="https://corp.hapyak.com/wp-content/uploads/videojs-logo.png" style="width:auto;height:4vh;margin:.5vh;"/><!--videojs-->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/AddToAny_logo_PNG.png" style=4width:auto;height:5vh;margin:.5vh;"/><!--AddToAny-->
                    <img src="https://i1.wp.com/soyemprendedora.com.ar/wp-content/uploads/2016/08/descarga-2.png?resize=300%2C99" style="width:auto;height:4vh;margin:.5vh;"/><!--GoogleForms-->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JQuery_logo_text.svg/1280px-JQuery_logo_text.svg.png" style="width:auto;height:4vh;margin:.5vh;filter:invert(100%);"/><!--JQuery-->
                    <img src="https://cdn.worldvectorlogo.com/logos/polyfillio.svg" style="width:auto;height:4vh;margin:.5vh;"/><!--Polyfillio-->
                    <div>CORS Anywhere</div>
                    <div>jQuery.tabbable</div>
                    <div>platform.js</div>
                    <div>can-autoplay.js</div>
                    <div style="color:#888;font-size:1.5vh;">如未列出可會知本平台</div>
                </div>
                <br>
                <br>
                <a href="consent.html" target="_blank"  id="aboutWindowConsentText" style="text-decoration:underline;font-size:2vh;">Consent</a>
                <br>
                <div style="font-size:3vh;" onclick="window.open('https://github.com/HKNBP', '_blank')" >
                    <div style="display:inline;font-size:2vh;">
                        <i class="icon-font">&#xf121;</i> with <i class="icon-font">&#xe81a;</i> by
                    </div>
                    <i class="icon-font">&#xf09b;</i>GitHub
                </div>
                <br>
                <div style="font-size:1vh;">The source code is licensed under GPL v3. License is available
                    <a href="https://github.com/HKNBP/HKNBP_Core/blob/master/LICENSE" target="_blank">here</a>.
                </div>
                <div style="font-size:1vh;">Copyright © 2016-2020 原匙 All rights reserved.</div>
            </div>
        """
) {
    private val coreVersionText: HTMLDivElement = document.getElementById("aboutWindowCoreVersionText") as HTMLDivElement
    private val appVersionText: HTMLDivElement = document.getElementById("aboutWindowAppVersionText") as HTMLDivElement

    override fun show(showTime: Int?) {
        super.show(showTime)
        coreVersionText.innerHTML = coreVersion
        appVersionText.innerHTML = appVersion
    }
}
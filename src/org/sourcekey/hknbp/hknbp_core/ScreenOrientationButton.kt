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

object ScreenOrientationButton : UserInterface(
        mainFrameElement = document.getElementById("screenOrientationButton") as HTMLElement
) {
    private val screenOrientationButton = document.getElementById("screenOrientationButton") as HTMLButtonElement

    private val orientation: dynamic = js("screen.orientation || screen.mozOrientation")

    fun isSupportOrientation(): Boolean{
        return js("if(orientation){return true}else{return false}")////////////未work
    }

    fun currentType(): String?{
        return orientation.type
    }

    fun orientation(){
        if(currentType() != "landscape-primary"){
            orientation.lock("landscape-primary")
        }else{
            orientation.lock("landscape-secondary")
        }
        orientation.unlock()
    }

    init {
        //如果運行裝置支援螢幕旋轉就顯示按鍵
        //if(isSupportOrientation()){ show(null) }else{ hide() }
        //設置螢幕旋轉按鍵
        screenOrientationButton.onclick = fun(event){
            FullScreenButton.enterFullscreen()
            orientation()
        }
    }
}
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

/**
 * 螢幕旋轉按鍵
 *
 * 為鎖死成 縱向模式 嘅手機方便轉成 橫向模式
 * */
object ScreenOrientationButton : UserInterface(
        mainFrameElement = document.getElementById("screenOrientationButton") as HTMLElement
) {
    private val screenOrientationButton = document.getElementById("screenOrientationButton") as HTMLButtonElement

    private val orientation: dynamic = js("screen.orientation || screen.mozOrientation")

    /**
     * 運行裝置螢幕有冇需要旋轉
     *
     * 本程式主要傾向橫向使用
     * 所以如果檢查到 高度 > 寬度 (即:縱向模式 中)
     * 就為需要旋轉嘅運行裝置
     *
     * @return 係米有需要旋轉
     * */
    fun isNeedOrientation(): Boolean{
        return window.innerHeight > window.innerWidth
    }

    /**
     * 依家螢幕嘅旋轉類型
     *
     * @return 螢幕旋轉類型
     * */
    fun currentType(): String?{
        return orientation.type
    }

    /**
     * 進行螢幕旋轉
     * */
    fun orientation(){
        if(currentType() != "landscape" || currentType() != "landscape-primary" || currentType() != "landscape-secondary"){
            //強制旋轉至 橫向模式
            orientation.lock("landscape")
        }else{
            //強制旋轉至 縱向模式
            orientation.lock("portrait")
        }
    }

    init {
        //如果運行裝置螢幕有縱向模式時提供旋轉就顯示按鍵
        if(isNeedOrientation()){ show(null) }else{ hide() }
        //設置螢幕旋轉按鍵
        screenOrientationButton.onclick = fun(event){
            FullScreenButton.enterFullscreen()
            orientation()
        }
    }
}
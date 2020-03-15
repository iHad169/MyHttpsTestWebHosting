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
import org.w3c.dom.Element
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Math

/**
 * 操作使用者介面器
 * */
object UserControlPanel: TabbableUI(
        document.getElementById("userControlPanel") as HTMLElement,
        firstFocusJqElement = jq(document.getElementById("onHeadNextAudioButton") as HTMLElement)
) {
    private val panel: HTMLDivElement   = document.getElementById("userControlPanel") as HTMLDivElement

    /**
     * 響顯示panel時執行嘅程序
     * 畀外部連接
     * 當以HKNBP_Core有以下動作時
     * 外部程序可以寫入以下function
     * 執行外部某特定需要程序
     * 模仿Set Listener做法
     * */
    var onShowUserControlPanel: ()->Unit = fun(){}

    /**
     * 響隱藏panel時執行嘅程序
     * 畀外部連接
     * 當以HKNBP_Core有以下動作時
     * 外部程序可以寫入以下function
     * 執行外部某特定需要程序
     * 模仿Set Listener做法
     * */
    var onHideUserControlPanel: ()->Unit = fun(){}

    override fun show(showTime: Int?) {
        super.show(showTime)
        onShowUserControlPanel()
    }

    override fun hide() {
        super.hide()
        onHideUserControlPanel()
    }


    init {
        //初始化各使用者控制界面
        VirtualRemote
        NativeAppInstallButton
        PictureInPictureButton
        FullScreenButton

        //設定使用者控制界面顯示方法
        panel.onmousemove = fun(event){
            //使用緊panel就繼續顯示
            event.stopPropagation()
            show(30000)
        }
        panel.onscroll = fun(event){ show(30000) }

        //當滑鼠離開瀏覽器就隱藏
        //jq("body").mouseleave(fun(event){ hide() })  ///////////////Bug: Firefox嘅Select同Option Element一展開就隱藏

        //如果系統係iOS10以下就保持顯示UserControlPanel
        //由於iOS10以下唔允唔網頁內播放Video
        //所以要將UserControlPanelShower縮細
        //供使用者可向IframePlayer操作
        //方便使用者使用UserControlPanel
        if(RunnerInfo.isBelowIOS10()){
            window.setInterval(fun(){
                if(!isShow){show(null)}
            }, 1000)
        }
    }
}
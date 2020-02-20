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
object UserControlPanel: UserInterface(
        "userControlPanel",
        firstFocusElementID = "onHeadNextAudioButton",
        isHideFocusToUserControlPanelShower = true
) {
    private val panel: HTMLDivElement   = document.getElementById("userControlPanel") as HTMLDivElement
    private val shower: HTMLButtonElement  = document.getElementById("userControlPanelShower") as HTMLButtonElement

    /**
     * 隱藏滑鼠計時器
     * */
    private var hideMouseTimer: Int = 0
        set(value) {
            window.clearTimeout(field)
            field = value
        }

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

    override fun show() {
        super.show()
        onShowUserControlPanel()
        jQuery("#userControlPanelShower").css("cursor", "auto")
    }

    override fun hide() {
        super.hide()
        onHideUserControlPanel()
        hideMouseTimer = window.setTimeout(fun(){
            jQuery("#userControlPanelShower").css("cursor", "none")
        }, 2000)
    }

    /**
     *
     * 應用到iframeTracker.js Lib實現
     * */
    fun setIframeOnClick(iframeId: String, onClick: ()->Unit){
        /**
        //shower.focus()
        var obj = js("{}")
        obj.blurCallback = fun(){
            onClick()
            window.setTimeout(fun(){
                jQuery(js("this")).focus()
                shower.focus()
            }, 0)
        }
        jQuery(js("document")).ready(fun(){
            jQuery("#${iframeId}").iframeTracker(obj)
        })*/
    }

    fun canTouchIframePlayerMode(){
        shower.style.right = "auto"
        shower.style.width = "10vh"
        shower.style.backgroundColor = "#303030"
        //shower.style.outline = "1vh"
        shower.innerHTML = "<i class=\"icon-font\" style=\"font-size: 5vh;\">&#xe825;</i>"
    }

    fun cannotTouchIframePlayerMode(){
        if(RunnerInfo.getOsFamily() != "iOS"){//當iOS時唔會切換到"不可觸摸IframePlayer模式"
            shower.style.right = "0"
            shower.style.width = "100%"
            shower.style.backgroundColor = "rgba(0, 0, 0, 0)"
            //shower.style.outline = "0"
            shower.innerHTML = ""
        }
    }

    init {
        //初始化各使用者控制界面
        VirtualRemote
        NativeAppInstallButton
        PictureInPictureButton
        FullScreenButton

        //開程式時首先focus userControlPanelShower
        //if(ConsentPanel.isAgreeConsent()){ shower.focus() }

        //設定使用者控制界面顯示方法
        shower.onclick = fun(event){
            showHideAlternately()
            player?.play()
        }
        shower.onmousemove = fun(event){
            jQuery("#userControlPanelShower").css("cursor", "auto")
            hideMouseTimer = window.setTimeout(fun(){
                jQuery("#userControlPanelShower").css("cursor", "none")
            }, 2000)
        }
        panel.onmousemove = fun(event){
            //使用緊panel就繼續顯示
            event.stopPropagation()
            show(30000)
        }
        panel.onscroll = fun(event){ show(30000) }
        jQuery("body").mouseleave(fun(){ hide() })
        shower.ondblclick = fun(event){ FullScreenButton.enterExitFullScreenAlternately() }
        val _shower: dynamic = shower
        _shower.ontouchstart = fun(event: MouseEvent){
            // 因觸控會同時觸發其他EVENT
            // https://medium.com/frochu/touch-and-mouse-together-76fb69114c04
            event.preventDefault()
            if(panel.style.display==="block"){
                hide()
            }else{
                show(15000)
            }
        }

        //如果系統係iOS就開iframePlayer畀人撳Play制播放頻道
        //由於iOS唔允唔全螢幕播放Video
        //所以要畀iOS用戶直接點擊iframePlayer
        //好似有解決方法, 有待研究
        //https://stackoverflow.com/questions/5054560/can-i-avoid-the-native-fullscreen-video-player-with-html5-on-iphone-or-android
        if(RunnerInfo.getOsFamily() == "iOS"){ canTouchIframePlayerMode() }
        //setIframeOnClick("iframePlayer", fun(){ showHideAlternately() })

        println("Init UserControlPanel")
    }
}

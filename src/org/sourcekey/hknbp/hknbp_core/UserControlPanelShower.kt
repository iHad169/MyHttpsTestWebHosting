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
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.browser.window

object UserControlPanelShower: TabbableUI(
        document.createElement("div") as HTMLElement,
        firstFocusJqElement = jq(document.getElementById("userControlPanelShower") as HTMLElement),
        transpositionFocusHideTime = null
) {
    private val shower: HTMLButtonElement = document.getElementById("userControlPanelShower") as HTMLButtonElement

    private var HTMLButtonElement.ontouchstart: (event: MouseEvent)->Unit
        get() = this.ontouchstart
        set(value) {value}

    /**
     * 隱藏滑鼠計時器
     * */
    private var hideMouseTimer: Int = 0
        set(value) {
            window.clearTimeout(field)
            field = value
        }

    override fun show(showTime: Int?) {
        println("show UserControlPanelShower")
        super.show(showTime)
        shower.style.cursor = "auto"
    }

    override fun hide() {
        super.hide()
        hideMouseTimer = window.setTimeout(fun(){
            shower.style.cursor = "none"
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
        jq(js("this")).focus()
        shower.focus()
        }, 0)
        }
        jq(js("document")).ready(fun(){
        jq("#${iframeId}").iframeTracker(obj)
        })*/
    }

    fun canTouchIframePlayerMode(){
        shower.style.right = "auto"
        shower.style.width = "10vh"
        shower.style.backgroundColor = "#303030"
        //shower.style.outline = "1vh"
        shower.innerHTML = """<i class="icon-font" style="font-size: 5vh;">&#xe825;</i>"""
    }

    fun cannotTouchIframePlayerMode(){
        //當iOS時唔會切換到"不可觸摸IframePlayer模式"
        if(RunnerInfo.getOsFamily() != "iOS"){
            shower.style.right = "0"
            shower.style.width = "100%"
            shower.style.backgroundColor = "rgba(0, 0, 0, 0)"
            //shower.style.outline = "0"
            shower.innerHTML = ""
        }
    }

    init {
        println("UserControlPanelShower init")
        //保持顯示
        show(null)
        println("UserControlPanelShower init F")
        //設定使用者控制界面顯示方法
        shower.onclick = fun(event){
            UserControlPanel.showHideAlternately(30000)
            Player.play()
        }
        shower.onmousemove = fun(event){
            shower.style.cursor = "auto"
            hideMouseTimer = window.setTimeout(fun(){
                shower.style.cursor = "none"
            }, 2000)
        }
        shower.ondblclick = fun(event){
            FullScreenButton.enterExitFullScreenAlternately()
        }
        shower.ontouchstart = fun(event){
            // 因觸控會同時觸發其他EVENT
            // https://medium.com/frochu/touch-and-mouse-together-76fb69114c04
            event.preventDefault()
            UserControlPanel.showHideAlternately(15000)
        }

        //如果系統係iOS就開iframePlayer畀人撳Play制播放頻道
        //由於iOS唔允唔全螢幕播放Video
        //所以要畀iOS用戶直接點擊iframePlayer
        //好似有解決方法, 有待研究
        //https://stackoverflow.com/questions/5054560/can-i-avoid-the-native-fullscreen-video-player-with-html5-on-iphone-or-android
        if(RunnerInfo.getOsFamily() == "iOS"){ canTouchIframePlayerMode() }

        //setIframeOnClick("iframePlayer", fun(){ showHideAlternately() })

        Player.addOnPlayerEventListener(object : Player.OnPlayerEventListener {
            override fun on(onPlayerEvent: Player.OnPlayerEvent) {
                when (onPlayerEvent) {
                    Player.OnPlayerEvent.playing -> {
                        cannotTouchIframePlayerMode()
                    }
                }
            }
        })
    }
}
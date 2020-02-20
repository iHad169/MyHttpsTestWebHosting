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

import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.window

abstract class UserInterface(
        private val mainFrameElementID: String,
        private val firstFocusElementID: String? = null,
        private var isFocusCountdownHide: Boolean = true,
        private var isFocusOutHide: Boolean = false,
        private val isHideFocusToUserControlPanelShower: Boolean = false,
        private val isShowToHideUserControlPanel: Boolean = false,
        private val conversionFocusHideTime: Int? = 15000
) {
    companion object{
        val allUserInterfaceList = ArrayList<UserInterface>()

        fun hideAllUserInterface(){
            for(userInterface in allUserInterfaceList){userInterface.hide()}
        }
    }

    private val htmlElement = document.getElementById(mainFrameElementID) as HTMLElement
    private var lastTimeFocusElement: dynamic? = {
        if(firstFocusElementID != null){
            try {
                jQuery("#${firstFocusElementID}")
            }catch (e: dynamic){ null }
        }else{ null }
    }()

    open fun update(){}

    /**
     * 係顯示介面時首次Focus
     *
     * 每個介面當顯示出來時
     * 都會Focus去上次Focus嘅Element度
     * 此值   為辨別Focus類型
     * */
    private var isShowUserInterfaceFirstFocus: Boolean = false

    /**
     * 隱藏頻道訊息計時器
     * */
    private var hideTimer = 0
        set(value) {
            window.clearTimeout(field)
            field = value
        }

    open val isShow: Boolean
        get(){
            return htmlElement.style.display == "block"
        }

    open fun show(){
        htmlElement.style.display = "block"
        isShowUserInterfaceFirstFocus = true
        if(isShow){ lastTimeFocusElement?.focus() }
    }

    private fun setHideTimer(showTime: Int){
        hideTimer = window.setTimeout(fun(){ hide() }, showTime)
    }

    fun show(showTime: Int){
        show()
        setHideTimer(showTime)
    }

    open fun hide(){
        htmlElement.style.display = "none"

        if(isHideFocusToUserControlPanelShower){
            //focus到userControlPanelShower,為左之後撳centerButton可以顯示VirtualRemote
            (document.getElementById("userControlPanelShower") as HTMLElement).focus()
        }
    }

    fun showHideAlternately(){
        if(isShow){ hide() }else{ show() }
    }

    fun showHideAlternately(showTime: Int){
        if(isShow){ hide() }else{ show(showTime) }
    }

    init {
        jQuery(
                "#${mainFrameElementID} button" + "," +
                "#${mainFrameElementID} select" + "," +
                "#${mainFrameElementID} option" + "," +
                "#${mainFrameElementID} input"
        )?.focus(fun(){if(!js("\$(\"this\").is(\":focus\")")){
            //設 當onfocus 就onhover 同步
            jQuery(js("this"))?.hover()
            //記住依家Focus邊粒element為之後再Show呢個介面時Focus返對上個次嘅element
            lastTimeFocusElement = jQuery(js("this"))
            //當focus就重新倒數介面顯示時間 同 唔係顯示介面時首次Focus
            if((!isShowUserInterfaceFirstFocus)&&isFocusCountdownHide){
                isShowUserInterfaceFirstFocus = false
                if(conversionFocusHideTime != null){setHideTimer(conversionFocusHideTime)}
            }
        }})
        jQuery(
                "#${mainFrameElementID} button" + "," +
                "#${mainFrameElementID} select" + "," +
                "#${mainFrameElementID} option" + "," +
                "#${mainFrameElementID} input"
        )?.hover(fun(){
            //設 當onhover 就onfocus 同步
            jQuery(js("this"))?.focus()
        })

        /**
        jQuery("#${mainFrameElementID}").blur(fun(){
            if(isFocusOutHide){
                hide()
            }
        })*/

        //將呢個UserInterface加去一個List,為其他位置可以一次過搵到哂所有UserInterface
        allUserInterfaceList.add(this)
    }
}
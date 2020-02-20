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

import jquery.JQuery
import jquery.jq
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.window

abstract class UserInterface(
        protected val mainFrameElement: HTMLElement             //用戶界面嘅最大Element
) {
    companion object{
        val allUserInterfaceList = ArrayList<UserInterface>()

        fun hideAllUserInterface(){
            for(userInterface in allUserInterfaceList){userInterface.hide()}
        }
    }

    open fun update(){}

    /**
     * 隱藏頻道訊息計時器
     * */
    protected var hideTimer = 0
        set(value) {
            window.clearTimeout(field)
            field = value
        }

    open val isShow: Boolean
        get() = mainFrameElement.style.display != "none"

    /**
     * 隱藏用戶界面倒數器
     * */
    protected fun setHideTimer(showTime: Int?){
        hideTimer = if(showTime != null){
            window.setTimeout(fun(){ hide() }, showTime)
        }else{ 0 }
    }

    open fun show(showTime: Int?){
        //顯示呢個用戶界面
        mainFrameElement.style.display = "block"
        //設置倒數隱藏用戶界面嘅時間
        setHideTimer(showTime)
    }

    open fun hide(){
        //隱藏呢個用戶界面
        mainFrameElement.style.display = "none"
    }

    fun showHideAlternately(showTime: Int?){
        if(isShow){ hide() }else{ show(showTime) }
    }

}
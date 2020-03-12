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

abstract class TabbableUI(
        mainFrameElement: HTMLElement,
        protected var firstFocusJqElement: JQuery? = null,              //當顯示用戶介面最先Focus嘅Element
        protected var transpositionFocusHideTime: Int? = 120000,        //Focus换位後用戶介面倒數隱藏時間,如null就唔會倒數隱藏
        protected val isFocusTriggerShowEventElement: Boolean = true,   //係米Focus返觸發顯示呢個用戶介面嘅Element
        protected var isFocusOutHide: Boolean = false                   //////////////////
): UserInterface(mainFrameElement = mainFrameElement) {

    companion object{
        /**
         * 將 可Tab用戶介面 草低到表度 作push同pop用途
         * */
        private val tabbableUIList = ArrayList<TabbableUI>()
    }

    private var isAddThisToTabbableUIList: Boolean = false

    override fun show(showTime: Int?) {
        //如果未響表度就加到表度,如果響表度即是呢個介面係因有新介面顯示而被隱藏
        if(!isAddThisToTabbableUIList){
            //記低呢個 可Tab用戶介面 係已經響個表度
            isAddThisToTabbableUIList = true
            //將所有 可Tab用戶介面 隱藏 防止搖控讀取到其他介面Element
            for(tabbableUI in tabbableUIList){tabbableUI.pushEventHide()}
            //將呢個 可Tab用戶介面 草低到表度
            tabbableUIList.add(this)
        }
        //顯示呢個可Tab用戶介面
        super.show(showTime)
        //Focus去當用戶介面顯示時最先Focus嘅Element
        firstFocusJqElement?.focus()
    }

    /**
     * 因有其他新介面去顯示而隱藏呢個介面
     * */
    fun pushEventHide(){
        super.hide()
    }

    override fun hide() {
        //隱藏呢個可Tab用戶介面
        super.hide()
        //響可Tab用戶介面表中移除呢個介面
        tabbableUIList.remove(this)
        //記低呢個 可Tab用戶介面 係已經唔響個表度
        isAddThisToTabbableUIList = false
        //顯示最新嘅 可Tab用戶介面
        tabbableUIList.lastOrNull()?.show(transpositionFocusHideTime)
    }

    init {
        jq(mainFrameElement).on("hover", "button,select,option,input", fun(event){
            var isEquals = false
            for(i in 0 until jqThis().length){
                for(j in 0 until (firstFocusJqElement?.length?:0)){
                    if(jqThis().get(i) == firstFocusJqElement?.get(j)){isEquals = true}
                }
            }
            if(!isEquals){
                //設 當onhover 就onfocus 同步
                jqThis().focus()
            }
        })
        jq(mainFrameElement).on("focus", "button,select,option,input", fun(event){if(!js("\$(\"this\").is(\":focus\")")){
            //記住依家Focus邊粒element為之後再Show呢個介面時Focus返對上個次嘅element
            firstFocusJqElement = jqThis()
            //當focus就重新倒數介面顯示時間
            setHideTimer(transpositionFocusHideTime)
        }})
        jq(mainFrameElement).on("scroll", fun(event){
            //當focus就重新倒數介面顯示時間
            setHideTimer(transpositionFocusHideTime)
        })
        jq(mainFrameElement).on("mousemove", fun(event){
            //當focus就重新倒數介面顯示時間
            setHideTimer(transpositionFocusHideTime)
        })

        /**
        jq("#${id}").blur(fun(){
        if(isFocusOutHide){
        hide()
        }
        })*/

        //將呢個UserInterface加去一個List,為其他位置可以一次過搵到哂所有UserInterface
        allUserInterfaceList.add(this)
    }
}
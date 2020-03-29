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

object EnteringNumberBox: UserInterface(document.getElementById("enteringNumberBox") as HTMLElement) {
    private val enteringNumberBox: dynamic  = document.getElementById("enteringNumberBox")
    private val text: dynamic               = document.getElementById("enteringNumberBoxText")

    /**
     * 用來裝住暫時輸入緊嘅頻道冧把
     */
    private var enteringNumber: String = ""

    private var enteringMinus: String = ""

    private val enteringNumberWaitingTime: Int = 3500

    private val enteringNumberDirectTime: Int = 500

    override fun update(){
        text.innerHTML = enteringMinus + enteringNumber
    }

    override fun show(showTime: Int?) {
        update()
        super.show(showTime)
    }

    /**
     * 畀enteringNumberToDesignatedChannel()當3.5秒倒時完之後
     * 轉去相認頻道從輸入好嘅頻道冧把
     */
    private fun enteringNumberToDesignatedChannelRun() {
        hide()
        val channelNumber = (enteringMinus + enteringNumber).toIntOrNull()
        if(channelNumber != null){ channels.designatedOfChannelNumber(channelNumber) }

        //初始化
        enteringNumber = ""
        enteringMinus = ""
    }

    private var enteringNumberWaitingTimer: Int = 0
        set(value) {
            window.clearTimeout(field)
            field = value
        }

    /**
     * 使用數字鍵做輸入將要轉嘅頻道冧把
     *
     * 如日後有其他功能使用數字鍵就響度加switch()
     * @param number 搖控數字鍵
     */
    fun enter(numberString: String){
        //當輸入夠3個史數字就等待轉台成功先可以再輸入
        if(enteringNumber.length < 3){
            //處理輸入
            val number = numberString.toIntOrNull()
            if(number != null){
                enteringNumber += number
            }else if(numberString == "-"){
                if(enteringMinus == ""){
                    enteringMinus = "-"
                }else{
                    enteringMinus = ""
                }
            }
            //顯示輸入
            show(null)
            //等候使用者輸入
            enteringNumberWaitingTimer = window.setTimeout(fun(){
                enteringNumberToDesignatedChannelRun()
            }, if(enteringNumber.length < 3){
                //倒時完轉去相認頻道從輸入好嘅頻道冧把
                enteringNumberWaitingTime
            }else{
                //當輸入第3個號碼就直接轉台
                enteringNumberDirectTime
            })
        }
    }
}
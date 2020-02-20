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

import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

abstract class Window(
        mainFrameElementID: String,
        firstFocusElementID: String? = null,
        isFocusCountdownHide: Boolean = true,
        isFocusOutHide: Boolean = true,
        isHideFocusToUserControlPanelShower: Boolean = true,
        isShowToHideUserControlPanel: Boolean = true,
        conversionFocusHideTime: Int = 15000
): UserInterface(
        mainFrameElementID,
        firstFocusElementID,
        isFocusCountdownHide,
        isFocusOutHide,
        isHideFocusToUserControlPanelShower,
        isShowToHideUserControlPanel,
        conversionFocusHideTime
){
    init {
        /**
        //按Window外區域隱藏Window
        jQuery("#${mainFrameElementID}").children().blur(fun(){
            if(jQuery(js("this")).parents("#${mainFrameElementID}").length){ }else{ hide() }
        })*/
    }
}




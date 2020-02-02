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
import kotlin.browser.window

object RealRemote {
    private val arrowLeft   = 37
    private val arrowUp     = 38
    private val arrowRight  = 39
    private val arrowDown   = 40

    private inline fun jqWindow(): JQuery = js("\$")(js("window"))

    init {
        jqWindow().on("keydown", fun(event: dynamic){
            when(event.which.toString().toIntOrNull()){
                arrowLeft   -> {VirtualRemote.leftButton.click()}
                arrowUp     -> {VirtualRemote.upButton.click()}
                arrowRight  -> {VirtualRemote.rightButton.click()}
                arrowDown   -> {VirtualRemote.downButton.click()}
                else        -> {}
            }
        })
    }
}
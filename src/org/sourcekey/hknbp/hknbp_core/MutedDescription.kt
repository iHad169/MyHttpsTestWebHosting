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
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document
import kotlin.browser.window

object MutedDescription: UserInterface("mutedDescription") {
    private val mutedDescription: HTMLDivElement = document.getElementById("mutedDescription") as HTMLDivElement
    private val mutedDescriptionButton: HTMLButtonElement = document.getElementById("mutedDescriptionButton") as HTMLButtonElement

    fun update(muted: Boolean){
        println("MDupdateV")
        if(muted){
            show()
        }else{
            hide()
        }
    }

    override fun update() {
        println("MDupdate")
        val script = fun(){
            Player.getMuted(fun(muted){
                update(muted)
            })
        }

        //由於有啲IframePlayer Set完個值之後唔會即時變更
        //使到標示與值不同步
        script()
        window.setTimeout(fun(){ script() }, 1000)
        window.setTimeout(fun(){ script() }, 10000)
        window.setTimeout(fun(){ script() }, 60000)
    }

    init {
        mutedDescriptionButton.onclick = fun(event){
            Player.getMuted(fun(muted){
                Player.setMuted(!muted)
            })
        }

        println("Init MutedDescription")
    }
}
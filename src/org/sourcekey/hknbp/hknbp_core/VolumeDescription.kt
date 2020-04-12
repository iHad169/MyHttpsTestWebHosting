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
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.window

object VolumeDescription: UserInterface(document.getElementById("volumeDescription") as HTMLElement) {
    private val volumeUpButton: HTMLButtonElement = document.getElementById("volumeDescriptionVolumeUpButton") as HTMLButtonElement
    private val volumeDownButton: HTMLButtonElement = document.getElementById("volumeDescriptionVolumeDownButton") as HTMLButtonElement
    private val volumeValue: HTMLDivElement = document.getElementById("volumeDescriptionVolumeValue") as HTMLDivElement
    private val volumeIconList: HTMLDivElement = document.getElementById("volumeDescriptionVolumeIconList") as HTMLDivElement

    private val volumeIcon = "<i class=\"icon-font\">&#xe82a;</i>"

    override fun show(showTime: Int?) {
        super.show(showTime)
        val script = fun(){
            Player.getVolume(fun(volume){
                VolumeDescription.volumeValue.innerHTML = volume.toInt().toString()
                VolumeDescription.volumeIconList.innerHTML = ""
                for(i in 0 until (volume/10).toInt()){
                    VolumeDescription.volumeIconList.innerHTML += VolumeDescription.volumeIcon
                }
            })
        }

        //由於有啲IframePlayer Set完個值之後唔會即時變更
        //使到標示與值不同步
        script()
        window.setTimeout(fun(){ script() }, 100)
        window.setTimeout(fun(){ script() }, 500)
        window.setTimeout(fun(){ script() }, 1000)
        window.setTimeout(fun(){ script() }, 10000)
        window.setTimeout(fun(){ script() }, 60000)
    }

    init {
        volumeUpButton.onclick = fun(event){Player.volumeUp()}
        volumeDownButton.onclick = fun(event){Player.volumeDown()}
    }
}
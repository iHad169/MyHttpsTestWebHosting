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

import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window

object PictureInPictureButton: UserInterface(
        mainFrameElement = document.getElementById("pictureInPictureButton") as HTMLElement
){
    private val pictureInPictureButton = document.getElementById("pictureInPictureButton") as HTMLButtonElement

    init {
        hide()
        Player.addOnPlayerEventListener(object : Player.OnPlayerEventListener {
            override fun on(onPlayerEvent: Player.OnPlayerEvent) {
                when (onPlayerEvent) {
                    Player.OnPlayerEvent.turnChannel -> {
                        hide()
                    }
                    Player.OnPlayerEvent.playing -> {
                        Player.isPictureInPictureEnabled { isEnabled: Boolean ->
                            if(isEnabled){show(null)}else{hide()}
                        }
                    }
                }
            }
        })
        pictureInPictureButton.onclick = fun(event){
            Player.pictureInPictureModeSwitch()
        }
    }
}
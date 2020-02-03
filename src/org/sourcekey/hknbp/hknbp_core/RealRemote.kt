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
    private val enter 		            = 13
    private val alt                     = 18        //TizenMenu
    private val pause                   = 19        //webOSMediaPause
    private val pageUp                  = 33        //webOSChannelUp
    private val pageDown                = 34        //webOSChannelDown
    private val arrowLeft               = 37
    private val arrowUp                 = 38
    private val arrowRight              = 39
    private val arrowDown               = 40
    private val digit0                  = 48
    private val digit1 				    = 49
    private val digit2 				    = 50
    private val digit3 				    = 51
    private val digit4 				    = 52
    private val digit5 				    = 53
    private val digit6 				    = 54
    private val digit7 				    = 55
    private val digit8 				    = 56
    private val digit9 				    = 57
    private val minus 				    = 189
    private val tizenColorF0Red         = 403
    private val tizenColorF1Green 		= 404
    private val tizenColorF2Yellow 		= 405
    private val tizenColorF3Blue 		= 406
    private val tizenMediaRewind 		= 412
    private val tizenMediaFastForward 	= 417
    private val tizenMediaPlay 			= 415
    private val tizenMediaStop 			= 413
    private val tizenMediaRecord 		= 416
    private val tizenChannelUp          = 427
    private val tizenChannelDown        = 428
    private val tizenVolumeUp 			= 447       //webOS未證實KeyCode
    private val tizenVolumeDown         = 448       //webOS未證實KeyCode
    private val tizenVolumeMute         = 449       //webOS未證實KeyCode
    private val tizenInfo 				= 457
    private val tizenGuide 				= 458       //webOS未證實KeyCode
    private val tizenCaption 			= 460
    private val tizenBack 				= 461       //webOS未證實KeyCode
    private val tizenSource             = 10072     //webOS未證實KeyCode
    private val tizenChannelList 		= 10073     //webOS未證實KeyCode
    private val tizenTools 				= 10135     //webOS未證實KeyCode
    private val tizenPictureSize 		= 10140     //webOS未證實KeyCode
    private val tizenE_Manual 			= 10146     //webOS未證實KeyCode
    private val tizenExit 				= 10182     //webOS未證實KeyCode
    private val tizenPreviousChannel 	= 10190     //webOS未證實KeyCode
    private val tizenMTS 				= 10195     //webOS未證實KeyCode
    private val tizenKey_3D             = 10199     //webOS未證實KeyCode
    private val tizenTeletext 			= 10200     //webOS未證實KeyCode
    private val tizenSearch             = 10225     //webOS未證實KeyCode
    private val tizenSoccer             = 10228     //webOS未證實KeyCode
    private val tizenMediaTrackPrevious = 10232     //webOS未證實KeyCode
    private val tizenMediaTrackNext     = 10233     //webOS未證實KeyCode
    private val tizenMediaPlayPause     = 10252     //webOS未證實KeyCode
    private val tizenExtra 				= 10253     //webOS未證實KeyCode


    private inline fun jqWindow(): JQuery = js("\$")(js("window"))

    init {
        jqWindow().on("keydown", fun(event: dynamic){
            when(event.which.toString().toIntOrNull()){
                //enter                   -> {VirtualRemote.centerButton.click()}
                alt                     -> {VirtualRemote.menuButton.click()}
                pageUp                  -> {VirtualRemote.nextChannelButton.click()}
                pageDown                -> {VirtualRemote.previousChannelButton.click()}
                digit0                  -> {VirtualRemote.number0Button.click()}
                digit1                  -> {VirtualRemote.number1Button.click()}
                digit2                  -> {VirtualRemote.number2Button.click()}
                digit3                  -> {VirtualRemote.number3Button.click()}
                digit4                  -> {VirtualRemote.number4Button.click()}
                digit5                  -> {VirtualRemote.number5Button.click()}
                digit6                  -> {VirtualRemote.number6Button.click()}
                digit7                  -> {VirtualRemote.number7Button.click()}
                digit8                  -> {VirtualRemote.number8Button.click()}
                digit9                  -> {VirtualRemote.number9Button.click()}
                minus                   -> {VirtualRemote.minusButton.click()}
                arrowLeft               -> {VirtualRemote.leftButton.click()}
                arrowUp                 -> {VirtualRemote.upButton.click()}
                arrowRight              -> {VirtualRemote.rightButton.click()}
                arrowDown               -> {VirtualRemote.downButton.click()}
                tizenColorF0Red         -> {VirtualRemote.programmableRedButton.click()}
                tizenColorF1Green       -> {VirtualRemote.programmableGreenButton.click()}
                tizenColorF2Yellow      -> {VirtualRemote.programmableYellowButton.click()}
                tizenColorF3Blue        -> {VirtualRemote.programmableBlueButton.click()}
                tizenChannelUp          -> {VirtualRemote.nextChannelButton.click()}
                tizenChannelDown        -> {VirtualRemote.previousChannelButton.click()}
                tizenVolumeUp           -> {VirtualRemote.volumeUpButton.click()}
                tizenVolumeDown         -> {VirtualRemote.volumeDownButton.click()}
                tizenVolumeMute         -> {VirtualRemote.volumeMuteButton.click()}
                tizenInfo               -> {VirtualRemote.channelDescriptionButton.click()}
                tizenGuide              -> {VirtualRemote.epgButton.click()}
                tizenCaption            -> {VirtualRemote.nextSubtitleButton.click()}
                tizenBack               -> {VirtualRemote.returnButton.click()}
                tizenChannelList        -> {VirtualRemote.epgButton.click()}
                tizenTools              -> {VirtualRemote.menuButton.click()}
                tizenPictureSize        -> {VirtualRemote.nextVideoButton.click()}
                tizenPreviousChannel    -> {VirtualRemote.lastTimeChannelButton.click()}
                tizenMTS                -> {VirtualRemote.nextAudioButton.click()}
                //else                    -> {PromptBox.promptMessage("本程式並無提供功能編號${event.which.toString().toIntOrNull()}")}
            }
        })
    }
}
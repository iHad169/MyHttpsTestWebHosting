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
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window
import kotlin.js.Date

object ChannelDescription: UserInterface(document.getElementById("channelDescription") as HTMLElement) {
    private val channelDescription            = document.getElementById("channelDescription") as HTMLDivElement
    private val currentChannelName              = document.getElementById("channelDescriptionCurrentChannelName") as HTMLDivElement
    private val currentChannelNumber            = document.getElementById("channelDescriptionCurrentChannelNumber") as HTMLDivElement
    private val currentDate                     = document.getElementById("channelDescriptionCurrentDate") as HTMLDivElement
    //private val currentChannelBitRate           = document.getElementById("channelDescriptionCurrentChannelBitRate") as org.w3c.dom.HTMLDivElement
    //private val currentChannelResolution        = document.getElementById("channelDescriptionCurrentChannelResolution") as org.w3c.dom.HTMLDivElement
    //private val currentChannelAspectRatio       = document.getElementById("channelDescriptionCurrentChannelAspectRatio") as HTMLDivElement
    private val currentProgrammeTitle           = document.getElementById("channelDescriptionCurrentProgrammeTitle") as HTMLDivElement
    private val currentProgrammeSubTitle        = document.getElementById("channelDescriptionCurrentProgrammeSubTitle") as HTMLDivElement
    private val currentProgrammeEpisode         = document.getElementById("channelDescriptionCurrentProgrammeEpisode") as HTMLDivElement
    private val currentProgrammeBroadcastTime   = document.getElementById("channelDescriptionCurrentProgrammeBroadcastTime") as HTMLDivElement
    private val currentProgrammeDesc            = document.getElementById("channelDescriptionCurrentProgrammeDesc") as HTMLDivElement
    private val currentProgrammeCategory        = document.getElementById("channelDescriptionCurrentProgrammeCategory") as HTMLDivElement

    private fun setCurrentChannelName(){
        currentChannelName.innerHTML = (channels.node?.name?:"").toString()
    }

    private fun setCurrentChannelNumber(){
        currentChannelNumber.innerHTML = channels.node?.number?.toStringBackwardZeroPadding(3)?:""
    }

    private var currentDateTimer = 0

    private fun setCurrentDate(){
        val script = fun(){currentDate.innerHTML = Date().toLocaleString()}
        script()
        currentDateTimer = window.setInterval(script, 1000)
    }

    private fun setCurrentProgrammeTitle(){
        currentProgrammeTitle.innerHTML = ""
        channels.node?.information?.getXMLTV(fun(xmltv){
            currentProgrammeTitle.innerHTML = xmltv.programmes?.getProgrammeByTime()?.title?.toString()?:""
        })
    }

    private fun setCurrentProgrammeSubTitle(){
        currentProgrammeSubTitle.innerHTML = ""
        channels.node?.information?.getXMLTV(fun(xmltv){
            currentProgrammeSubTitle.innerHTML = xmltv.programmes?.getProgrammeByTime()?.subTitle?.toString()?:""
        })
    }

    private fun setCurrentProgrammeEpisode(){
        currentProgrammeEpisode.innerHTML = ""
        channels.node?.information?.getXMLTV(fun(xmltv){
            Dialogue.getDialogues(fun(dialogues){
                var episodeInnerHTML = ""
                val season = xmltv.programmes?.getProgrammeByTime()?.episodeNum?.getSeason()
                if(season != null){
                    episodeInnerHTML += dialogues.node?.season?.replace("\${season}", season.toString())?: ""
                }
                val episode = xmltv.programmes?.getProgrammeByTime()?.episodeNum?.getEpisode()
                if(episode != null){
                    episodeInnerHTML += dialogues.node?.episode?.replace("\${episode}", episode.toString())?: ""
                }

                currentProgrammeEpisode.innerHTML = episodeInnerHTML
            })
        })
    }

    private fun setCurrentProgrammeBroadcastTime(){
        currentProgrammeBroadcastTime.innerHTML = ""
        channels.node?.information?.getXMLTV(fun(xmltv){
            val programmeTime = xmltv.programmes?.getProgrammeByTime()
            if(programmeTime != null){
                val fromTime = programmeTime.start.getHours().toString().padStart(2, '0') +
                        ":" + programmeTime.start.getMinutes().toString().padStart(2, '0')
                val toTime = programmeTime.stop.getHours().toString().padStart(2, '0') +
                        ":" + programmeTime.stop.getMinutes().toString().padStart(2, '0')
                currentProgrammeBroadcastTime.innerHTML = fromTime+"-"+toTime
            }else{
                currentProgrammeBroadcastTime.innerHTML = ""
            }
        })
    }

    private fun setCurrentProgrammeDesc(){
        currentProgrammeDesc.innerHTML = ""
        channels.node?.information?.getXMLTV(fun(xmltv){
            currentProgrammeDesc.innerHTML = xmltv.programmes?.getProgrammeByTime()?.desc?.toString()?:""
        })
    }

    private fun setCurrentProgrammeCategory(){
        currentProgrammeCategory.innerHTML = ""
        channels.node?.information?.getXMLTV(fun(xmltv){
            currentProgrammeCategory.innerHTML = xmltv.programmes?.getProgrammeByTime()?.category?.toString()?:""
        })
    }

    override fun update(){
        setCurrentChannelName()
        setCurrentChannelNumber()
        setCurrentProgrammeTitle()
        setCurrentProgrammeSubTitle()
        setCurrentProgrammeEpisode()
        setCurrentProgrammeDesc()
        setCurrentProgrammeBroadcastTime()
        setCurrentProgrammeCategory()
    }

    private var channelStatusPrompt: PromptBox? = null
        set(value) {
            field?.hide()
            field = value
        }

    init {
        setCurrentDate()
        channels.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<Channel> {
            override fun onNodeChanged(
                    preChangeNodeID: Int?, postChangeNodeID: Int?,
                    preChangeNode: Channel?, postChangeNode: Channel?
            ) {
                update()
                show(null)
            }
        })
        Player.addOnPlayerEventListener(object : Player.OnPlayerEventListener {
            private var isPlaying: Boolean = false
            override fun on(onPlayerEvent: Player.OnPlayerEvent) {
                channelStatusPrompt = null
                when (onPlayerEvent) {
                    Player.OnPlayerEvent.playing -> {
                        isPlaying = true
                        update()
                        show(5000)
                        channelStatusPrompt = null
                    }
                    Player.OnPlayerEvent.notPlaying -> {
                        isPlaying = false
                        window.setTimeout(fun(){
                            if(!isPlaying){
                                //當頻道中斷時顯示頻道資訊令觀眾現在狀況
                                update()
                                show(null)
                                //顯示訊號差嘅提示
                                Dialogue.getDialogues(fun (dialogues){
                                    channelStatusPrompt = PromptBox(
                                            dialogues.node?.poorSignalReception?: "",
                                            null
                                    )
                                })
                            }
                        }, 5000)
                    }
                    Player.OnPlayerEvent.error -> {
                        Dialogue.getDialogues(fun (dialogues){
                            channelStatusPrompt = PromptBox(
                                    dialogues.node?.thisDeviceDoesNotSupportThisChannelSignal?: "",
                                    null
                            )
                        })
                    }
                }
            }
            init {
                update()
                show(null)
            }
        })
    }
}
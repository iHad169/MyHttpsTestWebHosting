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

import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement
import kotlin.browser.document

class CustomChannelEditChannelDialogBox: DialogueBox(
        "新增自訂頻道",
        """
        <div style="display:flex;">
            <div style="text-align:left;font-size:3vh;">
                <input id="customChannelsSettingChannelNumberInputNumber" type="number" placeholder="頻道號碼" style="font-size:3vh;margin:.2vh;width:25vh;" min="-999" max="-1">
                <input id="customChannelsSettingChannelNameInputText" type="Text" placeholder="頻道名稱" style="font-size:3vh;margin:.2vh;">
                <input id="customChannelsSettingChannelSourceLinkInputText" type="Text" placeholder="頻道源連結" style="font-size:3vh;margin:.2vh;">
                <form style="margin:.5vh;">
                    頻道源播放器<br>
                    <input id="customChannelsSettingChannelSourceIframelayerSrcVideoJsHlsInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;" checked>HLS<br>
                    <input id="customChannelsSettingChannelSourceIframelayerSrcVideoJsDashInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">DASH<br>
                    <input id="customChannelsSettingChannelSourceIframelayerSrcYoutubeApiInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">YoutubeAPI<br>
                    <input id="customChannelsSettingChannelSourceIframelayerSrcOtherInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">
                    <input id="customChannelsSettingChannelSourceIframelayerSrcOtherInputText" type="Text" placeholder="其他源播放器連結" style="font-size:3vh;width:25vh;"><br>
                </form>
                <input id="customChannelsSettingChannelInformationEpgIdInputText" type="Text" placeholder="EPG ID" style="font-size:3vh;margin:.2vh;">
                <input id="customChannelsSettingChannelInformationSrcInputText" type="Text" placeholder="EPG Src" style="font-size:3vh;margin:.2vh;">
            </div>
        </div>
        <div>
            <textarea id="customChannelsSettingChannelXmlString" rows="5" style="font-size:1vh;width:100%;white-space:nowrap;"></textarea>
        </div>
        """
) {
    private val channelNumberInputNumber                            = document.getElementById("customChannelsSettingChannelNumberInputNumber") as HTMLInputElement
    private val channelNameInputText                                = document.getElementById("customChannelsSettingChannelNameInputText") as HTMLInputElement
    private val channelSourceLinkInputText                          = document.getElementById("customChannelsSettingChannelSourceLinkInputText") as HTMLInputElement
    private val channelSourceIframelayerSrcVideoJsHlsInputRadio     = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcVideoJsHlsInputRadio") as HTMLInputElement
    private val channelSourceIframelayerSrcVideoJsDashInputRadio    = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcVideoJsDashInputRadio") as HTMLInputElement
    private val channelSourceIframelayerSrcYoutubeApiInputRadio     = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcYoutubeApiInputRadio") as HTMLInputElement
    private val channelSourceIframelayerSrcOtherInputRadio          = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcOtherInputRadio") as HTMLInputElement
    private val channelSourceIframelayerSrcOtherInputText           = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcOtherInputText") as HTMLInputElement
    private val channelInformationEpgIdInputText                    = document.getElementById("customChannelsSettingChannelInformationEpgIdInputText") as HTMLInputElement
    private val channelInformationSrcInputText                      = document.getElementById("customChannelsSettingChannelInformationSrcInputText") as HTMLInputElement

    private val channelXmlString                                    = document.getElementById("customChannelsSettingChannelXmlString") as HTMLTextAreaElement

    private fun getEditChannelDialogBoxInformation(): Channel{
        val mustNegativeNumber = fun(number: Int): Int{
            if(-1 < number){ return -number }
            return number
        }
        val getIframelayerSrc = fun(): String{
            return when(true){
                channelSourceIframelayerSrcVideoJsHlsInputRadio.checked -> { "iframePlayer/videojs_hls.html" }
                channelSourceIframelayerSrcVideoJsDashInputRadio.checked -> { "iframePlayer/videojs_dash.html" }
                channelSourceIframelayerSrcYoutubeApiInputRadio.checked -> { "iframePlayer/youtube_api.html" }
                channelSourceIframelayerSrcOtherInputRadio.checked -> {
                    println(channelSourceIframelayerSrcOtherInputText.value )
                    channelSourceIframelayerSrcOtherInputText.value
                }
                else -> {""}
            }
        }
        return Channel(
                number = mustNegativeNumber(channelNumberInputNumber.value.toIntOrNull()?:-1),
                name = MultiLanguageString(ArrayLinkList(MultiLanguageString.LanguageString("", channelNameInputText.value))),
                sources = ArrayLinkList(Channel.Source(
                        description = getIframelayerSrc(),
                        iFramePlayerSrc = getIframelayerSrc(),
                        link = channelSourceLinkInputText.value
                )),
                information = Channel.Information(
                        epgID = channelInformationEpgIdInputText.value,
                        src = channelInformationSrcInputText.value
                )
        )
    }

    private fun setChannelXmlString(){
        println(CustomChannels.setChannelToXMLString(getEditChannelDialogBoxInformation()))
        channelXmlString.value = CustomChannels.setChannelToXMLString(getEditChannelDialogBoxInformation())
    }

    private fun initChannelNumberInputNumber(){
        channelNumberInputNumber.onclick = fun(event){ setChannelXmlString() }
        channelNumberInputNumber.onchange = fun(event){ setChannelXmlString() }
        channelNumberInputNumber.onkeyup = fun(event){ setChannelXmlString() }
    }

    private fun initChannelNameInputText(){
        channelNameInputText.onkeyup = fun(event){ setChannelXmlString() }
    }

    private fun initChannelSourceLinkInputText(){
        channelSourceLinkInputText.onkeyup = fun(event){ setChannelXmlString() }
    }

    private fun initChannelSourceIframelayerSrcInputRadio(){
        channelSourceIframelayerSrcVideoJsHlsInputRadio.onchange = fun(event){ setChannelXmlString() }
        channelSourceIframelayerSrcVideoJsDashInputRadio.onchange = fun(event){ setChannelXmlString() }
        channelSourceIframelayerSrcYoutubeApiInputRadio.onchange = fun(event){ setChannelXmlString() }
        channelSourceIframelayerSrcOtherInputRadio.onchange = fun(event){ setChannelXmlString() }
        channelSourceIframelayerSrcOtherInputText.onkeyup = fun(event){ setChannelXmlString() }
    }

    private fun initChannelInformationEpgIdInputText(){
        channelInformationEpgIdInputText.onkeyup = fun(event){ setChannelXmlString() }
    }

    private fun initChannelInformationSrcInputText(){
        channelInformationSrcInputText.onkeyup = fun(event){ setChannelXmlString() }
    }

    private fun initChannelXmlString(){
        channelXmlString.onkeyup = fun(event){
            val channel = CustomChannels.parseChannels(channelXmlString.value).getOrNull(0)
            channelNumberInputNumber.value          = channel?.number.toString()
            channelNameInputText.value              = channel?.name.toString()
            channelSourceLinkInputText.value        = channel?.sources?.node?.link.toString()
            when(channel?.sources?.node?.iFramePlayerSrc){
                "iframePlayer/videojs_hls.html" -> { channelSourceIframelayerSrcVideoJsHlsInputRadio.checked = true }
                "iframePlayer/videojs_dash.html" -> { channelSourceIframelayerSrcVideoJsDashInputRadio.checked = true }
                "iframePlayer/youtube_api.html" -> { channelSourceIframelayerSrcYoutubeApiInputRadio.checked = true }
                else -> {
                    channelSourceIframelayerSrcOtherInputRadio.checked = true
                    channelSourceIframelayerSrcOtherInputText.value = channel?.sources?.node?.iFramePlayerSrc.toString()
                }
            }
            channelInformationEpgIdInputText.value  = channel?.information?.epgID.toString()
            channelInformationSrcInputText.value    = channel?.information?.src.toString()
        }
    }

    init {
        okButton.onclick = fun(event){
            CustomChannels.setCustomChannels(ArrayLinkList(getEditChannelDialogBoxInformation()))
        }

        initChannelNumberInputNumber()
        initChannelNameInputText()
        initChannelSourceLinkInputText()
        initChannelSourceIframelayerSrcInputRadio()
        initChannelInformationEpgIdInputText()
        initChannelInformationSrcInputText()
        initChannelXmlString()
    }
}
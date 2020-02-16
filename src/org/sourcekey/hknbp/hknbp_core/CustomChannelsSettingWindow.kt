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

import jquery.jq
import org.sourcekey.hknbp.hknbp_core.CustomChannelsSettingWindow.getChannelOption
import org.sourcekey.hknbp.hknbp_core.CustomChannelsSettingWindow.remove
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.dom.createElement

object CustomChannelsSettingWindow: Window(
        title = "自訂頻道設定",
        contentHTML = """
            <div style="display:flex;">
                <div style="flex:3;">
                    <select id="customChannelsSettingChannelsSelect" size="7" style="font-size:5vh;width:100%;"></select>
                    <div style="display:flex;">
                        <div style="flex:1;">
                            <button id="customChannelsSettingChannelsImportButton" style="display:none;font-size:5vh;margin:.2vh;">匯入</button>
                        </div>
                        <div style="flex:1;">
                            <button id="customChannelsSettingChannelsExportButton" style="display:none;font-size:5vh;margin:.2vh;">匯出</button>
                        </div>
                    </div>
                </div>
                <div style="flex:1;">
                    <button id="customChannelsSettingChannelAddButton" style="font-size:5vh;margin:.2vh;">
                        <i class="icon-font">&#xe82e;</i>
                    </button>
                    <button id="customChannelsSettingChannelMoveUpButton" style="font-size:5vh;margin:.2vh;">
                        <i class="icon-font">&#xe821;</i>
                    </button>
                    <button id="customChannelsSettingChannelMoveDownButton" style="font-size:5vh;margin:.2vh;">
                        <i class="icon-font">&#xe80a;</i>
                    </button>
                    <button id="customChannelsSettingChannelRemoveButton" style="font-size:5vh;margin:.2vh;">
                        <i class="icon-font">&#xe82f;</i>
                    </button>
                    <button id="customChannelsSettingChannelEditButton" style="font-size:5vh;margin:.2vh;">
                        <i class="icon-font">&#xe810;</i>
                    </button>
                </div>
            </div>
        """
) {
    private class CustomChannelEditChannelDialogBox(val initValueOfChannelXmlString: String = ""): DialogueBox(
            "新增自訂頻道",
            """
        <div style="display:flex;">
            <div style="text-align:left;font-size:3vh;">
                <input id="customChannelsSettingChannelNumberInputNumber" type="number" placeholder="頻道號碼" style="font-size:3vh;margin:.2vh;width:25vh;" min="-999" max="-1">
                <input id="customChannelsSettingChannelNameInputText" type="Text" placeholder="頻道名稱" style="font-size:3vh;margin:.2vh;">
                <input id="customChannelsSettingChannelSourceLinkInputText" type="Text" placeholder="頻道源連結" style="font-size:3vh;margin:.2vh;">
                <form style="margin:.5vh;">
                    頻道源播放器<br>
                    <input id="customChannelsSettingChannelSourceIframelayerSrcVideoJsInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;" checked>VideoJS<br>
                    <input id="customChannelsSettingChannelSourceIframelayerSrcYoutubeApiInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">YoutubeAPI<br>
                    <input id="customChannelsSettingChannelSourceIframelayerSrcOtherInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">
                    <input id="customChannelsSettingChannelSourceIframelayerSrcOtherInputText" type="Text" placeholder="其他源播放器連結" style="font-size:3vh;width:25vh;"><br>
                </form>
                <input id="customChannelsSettingChannelInformationEpgIdInputText" type="Text" placeholder="EPG ID" style="font-size:3vh;margin:.2vh;">
                <input id="customChannelsSettingChannelInformationSrcInputText" type="Text" placeholder="EPG Src" style="font-size:3vh;margin:.2vh;">
            </div>
        </div>
        <div>
            <textarea id="customChannelsSettingChannelXmlStringTextArea" rows="5" style="font-size:1vh;width:100%;white-space:nowrap;" tabindex="-1"></textarea>
        </div>
        """
    ) {
        private val channelNumberInputNumber                            = document.getElementById("customChannelsSettingChannelNumberInputNumber") as HTMLInputElement
        private val channelNameInputText                                = document.getElementById("customChannelsSettingChannelNameInputText") as HTMLInputElement
        private val channelSourceLinkInputText                          = document.getElementById("customChannelsSettingChannelSourceLinkInputText") as HTMLInputElement
        private val channelSourceIframelayerSrcVideoJsInputRadio        = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcVideoJsInputRadio") as HTMLInputElement
        private val channelSourceIframelayerSrcYoutubeApiInputRadio     = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcYoutubeApiInputRadio") as HTMLInputElement
        private val channelSourceIframelayerSrcOtherInputRadio          = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcOtherInputRadio") as HTMLInputElement
        private val channelSourceIframelayerSrcOtherInputText           = document.getElementById("customChannelsSettingChannelSourceIframelayerSrcOtherInputText") as HTMLInputElement
        private val channelInformationEpgIdInputText                    = document.getElementById("customChannelsSettingChannelInformationEpgIdInputText") as HTMLInputElement
        private val channelInformationSrcInputText                      = document.getElementById("customChannelsSettingChannelInformationSrcInputText") as HTMLInputElement
        private val channelXmlStringTextArea                            = document.getElementById("customChannelsSettingChannelXmlStringTextArea") as HTMLTextAreaElement

        fun getEditChannelDialogBoxInformation(): Channel{
            val getIframelayerSrc = fun(): String{
                return when(true){
                    channelSourceIframelayerSrcVideoJsInputRadio.checked -> { "iframePlayer/videojs.html" }
                    channelSourceIframelayerSrcYoutubeApiInputRadio.checked -> { "iframePlayer/youtube_api.html" }
                    channelSourceIframelayerSrcOtherInputRadio.checked -> { channelSourceIframelayerSrcOtherInputText.value }
                    else -> {""}
                }
            }
            return Channel(
                    number = channelNumberInputNumber.value.toIntOrNull()?.toNegative()?:-1,
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

        private fun setChannelXmlStringTextArea(){
            channelXmlStringTextArea.value = getEditChannelDialogBoxInformation().toXMLString()
        }

        private fun initChannelNumberInputNumber(){
            channelNumberInputNumber.onclick = fun(event){ setChannelXmlStringTextArea() }
            channelNumberInputNumber.onchange = fun(event){ setChannelXmlStringTextArea() }
            channelNumberInputNumber.onkeyup = fun(event){ setChannelXmlStringTextArea() }
        }

        private fun initChannelNameInputText(){
            channelNameInputText.onkeyup = fun(event){ setChannelXmlStringTextArea() }
        }

        private fun initChannelSourceLinkInputText(){
            channelSourceLinkInputText.onkeyup = fun(event){ setChannelXmlStringTextArea() }
        }

        private fun initChannelSourceIframelayerSrcInputRadio(){
            channelSourceIframelayerSrcVideoJsInputRadio.onchange = fun(event){ setChannelXmlStringTextArea() }
            channelSourceIframelayerSrcYoutubeApiInputRadio.onchange = fun(event){ setChannelXmlStringTextArea() }
            channelSourceIframelayerSrcOtherInputRadio.onchange = fun(event){ setChannelXmlStringTextArea() }
            channelSourceIframelayerSrcOtherInputText.onkeyup = fun(event){ setChannelXmlStringTextArea() }
        }

        private fun initChannelInformationEpgIdInputText(){
            channelInformationEpgIdInputText.onkeyup = fun(event){ setChannelXmlStringTextArea() }
        }

        private fun initChannelInformationSrcInputText(){
            channelInformationSrcInputText.onkeyup = fun(event){ setChannelXmlStringTextArea() }
        }

        private fun initChannelXmlStringTextArea(){
            fun update(){
                val channel = CustomChannels.parseChannels(channelXmlStringTextArea.value).getOrNull(0)
                channelNumberInputNumber.value          = (channel?.number?:"").toString()
                channelNameInputText.value              = (channel?.name?:"").toString()
                channelSourceLinkInputText.value        = (channel?.sources?.node?.link?:"").toString()
                when(channel?.sources?.node?.iFramePlayerSrc){
                    "iframePlayer/videojs.html" -> { channelSourceIframelayerSrcVideoJsInputRadio.checked = true }
                    "iframePlayer/youtube_api.html" -> { channelSourceIframelayerSrcYoutubeApiInputRadio.checked = true }
                    else -> {
                        channelSourceIframelayerSrcOtherInputRadio.checked = true
                        channelSourceIframelayerSrcOtherInputText.value = (channel?.sources?.node?.iFramePlayerSrc?:"").toString()
                    }
                }
                channelInformationEpgIdInputText.value  = (channel?.information?.epgID?:"").toString()
                channelInformationSrcInputText.value    = (channel?.information?.src?:"").toString()
            }
            channelXmlStringTextArea.onkeyup = fun(event){update()}
            channelXmlStringTextArea.value = initValueOfChannelXmlString
            update()
        }

        init {
            okButtonScript = fun(){
                CustomChannels.set(ArrayLinkList(getEditChannelDialogBoxInformation()))
            }

            initChannelNumberInputNumber()
            initChannelNameInputText()
            initChannelSourceLinkInputText()
            initChannelSourceIframelayerSrcInputRadio()
            initChannelInformationEpgIdInputText()
            initChannelInformationSrcInputText()
            initChannelXmlStringTextArea()
        }
    }

    class ChannelOption(val channel: Channel, val option: HTMLOptionElement)

    private val channelsSelect          = document.getElementById("customChannelsSettingChannelsSelect") as HTMLSelectElement
    private val channelAddButton        = document.getElementById("customChannelsSettingChannelAddButton") as HTMLButtonElement
    private val channelRemoveButton     = document.getElementById("customChannelsSettingChannelRemoveButton") as HTMLButtonElement
    private val channelMoveUpButton     = document.getElementById("customChannelsSettingChannelMoveUpButton") as HTMLButtonElement
    private val channelMoveDownButton   = document.getElementById("customChannelsSettingChannelMoveDownButton") as HTMLButtonElement
    private val channelEditButton       = document.getElementById("customChannelsSettingChannelEditButton") as HTMLButtonElement
    private val channelsImportButton    = document.getElementById("customChannelsSettingChannelsImportButton") as HTMLButtonElement
    private val channelsExportButton    = document.getElementById("customChannelsSettingChannelsExportButton") as HTMLButtonElement

    private fun createChannelOption(channel: Channel): HTMLOptionElement{
        val option = document.createElement("option") as HTMLOptionElement
        option.text = "${channel.number.toStringBackwardZeroPadding(3)} ${channel.name}"
        option.value = channel.number.toString()
        return option
    }

    private fun initChannelsSelect(channels: ArrayList<Channel>){
        channelsSelect.innerHTML = ""
        for(channel in channels){
            val option = createChannelOption(channel)
            channelOptionList.add(ChannelOption(channel, option))
            channelsSelect.appendChild(option)
        }
    }

    private fun initChannelsSelect(){
        initChannelsSelect(CustomChannels.get())
    }

    private fun saveCustomChannels(){
        val list = ArrayLinkList<Channel>()
        for(channelOption in channelOptionList){
            list.add(channelOption.channel)
        }
        CustomChannels.set(list)
    }

    private val channelOptionList = ArrayLinkList<ChannelOption>()

    private fun Channel.getChannelOption(): ChannelOption?{
        for(channelOption in channelOptionList){
            if(channelOption.channel === this){ return channelOption }
        }
        return null
    }

    private fun Channel.getOption(): HTMLOptionElement?{
        return this.getChannelOption()?.option
    }

    private fun HTMLOptionElement.getChannelOption(): ChannelOption?{
        for(channelOption in channelOptionList){
            if(channelOption.option === this){ return channelOption }
        }
        return null
    }

    private fun HTMLOptionElement.getChannel(): Channel?{
        return this.getChannelOption()?.channel
    }

    private fun Channel.changeNumber(changeToNumber: Int): ChannelOption{
        val changedNumberChannel = Channel(
                number = changeToNumber,
                name = this.name,
                sources = this.sources,
                information = this.information
        )
        return ChannelOption(changedNumberChannel, createChannelOption(changedNumberChannel))
    }

    private fun HTMLOptionElement.changeNumber(changeToNumber: Int): ChannelOption?{
        return this.getChannel()?.changeNumber(changeToNumber)
    }

    private fun HTMLSelectElement.indexOfOrNull(option: HTMLOptionElement): Int?{
        val options = this.options
        for(i in 0 until options.length){
            if(options.get(i) === option){ return i }
        }
        return null
    }

    private fun HTMLSelectElement.remove(option: HTMLOptionElement): Boolean{
        this.remove(this.indexOfOrNull(option)?:return false)
        return true
    }

    private fun HTMLSelectElement.sort(){
        channelOptionList.sortByDescending { channelOption: ChannelOption -> channelOption.channel.number }
        this.innerHTML = ""
        for(channelOption in channelOptionList){ this.appendChild(channelOption.option) }
    }

    private fun HTMLSelectElement.select(option: HTMLOptionElement){
        option.selected = true
    }

    init {
        initChannelsSelect()

        channelAddButton.onclick = fun(event){
            val dialogBox = CustomChannelEditChannelDialogBox()
            dialogBox.okButtonScript = fun(){
                val goToSetChannel = dialogBox.getEditChannelDialogBoxInformation()
                val goToSetOption = createChannelOption(goToSetChannel)
                //新增自訂頻道從ChannelOptionList
                channelOptionList.add(ChannelOption(goToSetChannel, goToSetOption))
                //新增自訂頻道從現運行嘅channel表
                channels.add(goToSetChannel)
                //新增自訂頻道從自訂頻道設定嘅Select
                channelsSelect.add(goToSetOption)
                //按Number排序
                channelsSelect.sort()
                //揀選返修改左嘅Option
                channelsSelect.select(goToSetOption)
                //儲存自訂頻道
                saveCustomChannels()
            }
        }
        channelRemoveButton.onclick = fun(event){
            val options = channelsSelect.selectedOptions
            for (i in 0 until options.length){
                val goToRemoveChannelOption = ((options.get(i)?:return) as HTMLOptionElement).getChannelOption()?:return
                //移除自訂頻道從ChannelOptionList
                channelOptionList.remove(goToRemoveChannelOption)
                //移除自訂頻道從現運行嘅channel表
                channels.remove(goToRemoveChannelOption.channel)
                //移除自訂頻道從自訂頻道設定嘅Select
                channelsSelect.remove(goToRemoveChannelOption.option)
                //儲存自訂頻道
                saveCustomChannels()
            }
        }
        channelMoveUpButton.onclick = fun(event){
            val selectedOption = channelsSelect.selectedOptions.get(0) as HTMLOptionElement
            val currentChannelOption = selectedOption.getChannelOption()?:return
            val goToSetChannelOption = selectedOption.changeNumber({
                val number = (selectedOption.getChannel()?.number?:-1)+1
                if(-1 < number){-1}else{number}
            }())?:return
            //修改自訂頻道從ChannelOptionList
            val goToSetChannelOnChannelOptionListIndex = channelOptionList.indexOfOrNull(currentChannelOption)
            if(goToSetChannelOnChannelOptionListIndex != null){
                channelOptionList.set(goToSetChannelOnChannelOptionListIndex, goToSetChannelOption)
            }
            //修改自訂頻道從現運行嘅channel表
            val goToSetChannelOnChannelsIndex = channels.indexOfOrNull(currentChannelOption.channel)
            if(goToSetChannelOnChannelsIndex != null){
                channels.set(goToSetChannelOnChannelsIndex, goToSetChannelOption.channel)
            }
            //修改自訂頻道從自訂頻道設定嘅Select
            val goToSetChannelOnChannelsSelectIndex = channelsSelect.indexOfOrNull(currentChannelOption.option)
            if(goToSetChannelOnChannelsSelectIndex != null){
                channelsSelect.set(goToSetChannelOnChannelsSelectIndex, goToSetChannelOption.option)
            }
            //按Number排序
            channelsSelect.sort()
            //揀選返修改左嘅Option
            channelsSelect.select(goToSetChannelOption.option)
            //儲存自訂頻道
            saveCustomChannels()
        }
        channelMoveDownButton.onclick = fun(event){
            val selectedOption = channelsSelect.selectedOptions.get(0) as HTMLOptionElement
            val currentChannelOption = selectedOption.getChannelOption()?:return
            val goToSetChannelOption = selectedOption.changeNumber((selectedOption.getChannel()?.number?:0)-1)?:return
            //修改自訂頻道從ChannelOptionList
            val goToSetChannelOnChannelOptionListIndex = channelOptionList.indexOfOrNull(currentChannelOption)
            if(goToSetChannelOnChannelOptionListIndex != null){
                channelOptionList.set(goToSetChannelOnChannelOptionListIndex, goToSetChannelOption)
            }
            //修改自訂頻道從現運行嘅channel表
            val goToSetChannelOnChannelsIndex = channels.indexOfOrNull(currentChannelOption.channel)
            if(goToSetChannelOnChannelsIndex != null){
                channels.set(goToSetChannelOnChannelsIndex, goToSetChannelOption.channel)
            }
            //修改自訂頻道從自訂頻道設定嘅Select
            val goToSetChannelOnChannelsSelectIndex = channelsSelect.indexOfOrNull(currentChannelOption.option)
            if(goToSetChannelOnChannelsSelectIndex != null){
                channelsSelect.set(goToSetChannelOnChannelsSelectIndex, goToSetChannelOption.option)
            }
            //按Number排序
            channelsSelect.sort()
            //揀選返修改左嘅Option
            channelsSelect.select(goToSetChannelOption.option)
            //儲存自訂頻道
            saveCustomChannels()
        }
        channelEditButton.onclick = fun(event){
            val selectedOption = channelsSelect.selectedOptions.get(0) as HTMLOptionElement
            val selectedChannel = selectedOption.getChannel()?: Channel(-1)
            val dialogBox = CustomChannelEditChannelDialogBox(selectedChannel.toXMLString())
            dialogBox.okButtonScript = fun(){
                val currentChannelOption = selectedOption.getChannelOption()?:return
                val goToSetChannel = dialogBox.getEditChannelDialogBoxInformation()
                val goToSetOption = createChannelOption(dialogBox.getEditChannelDialogBoxInformation())
                val goToSetChannelOption = ChannelOption(goToSetChannel, goToSetOption)
                //修改自訂頻道從ChannelOptionList
                val goToSetChannelOnChannelOptionListIndex = channelOptionList.indexOfOrNull(currentChannelOption)
                if(goToSetChannelOnChannelOptionListIndex != null){
                    channelOptionList.set(goToSetChannelOnChannelOptionListIndex, goToSetChannelOption)
                }
                //修改自訂頻道從現運行嘅channel表
                val goToSetChannelOnChannelsIndex = channels.indexOfOrNull(currentChannelOption.channel)
                if(goToSetChannelOnChannelsIndex != null){
                    channels.set(goToSetChannelOnChannelsIndex, goToSetChannelOption.channel)
                }
                //修改自訂頻道從自訂頻道設定嘅Select
                val goToSetChannelOnChannelsSelectIndex = channelsSelect.indexOfOrNull(currentChannelOption.option)
                if(goToSetChannelOnChannelsSelectIndex != null){
                    channelsSelect.set(goToSetChannelOnChannelsSelectIndex, goToSetChannelOption.option)
                }
                //按Number排序
                channelsSelect.sort()
                //揀選返修改左嘅Option
                channelsSelect.select(goToSetChannelOption.option)
                //儲存自訂頻道
                saveCustomChannels()
            }
        }
    }
}
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
import kotlin.browser.document
import kotlin.browser.localStorage

object CustomChannelsSettingWindow: Window(
        "customChannelsSettingWindow",
        firstFocusElementID = "customChannelsSettingWindowHideButton"
) {
    private val hideButton = document.getElementById("customChannelsSettingWindowHideButton") as HTMLButtonElement

    private val channelsSelect                                      = document.getElementById("customChannelsSettingChannelsSelect") as HTMLSelectElement
    private val channelAddButton                                    = document.getElementById("customChannelsSettingChannelAddButton") as HTMLInputElement
    private val channelRemoveButton                                 = document.getElementById("customChannelsSettingChannelRemoveButton") as HTMLInputElement
    private val channelMoveUpButton                                 = document.getElementById("customChannelsSettingChannelMoveUpButton") as HTMLInputElement
    private val channelMoveDownButton                               = document.getElementById("customChannelsSettingChannelMoveDownButton") as HTMLInputElement
    private val channelEditButton                                   = document.getElementById("customChannelsSettingChannelEditButton") as HTMLInputElement
    private val channelsImportButton                                = document.getElementById("customChannelsSettingChannelImportButton") as HTMLInputElement
    private val channelsExportButton                                = document.getElementById("customChannelsSettingChannelExportButton") as HTMLInputElement
/***/
    private fun createChannelOption(channel: Channel): HTMLOptionElement{
        val option = document.createElement("option") as HTMLOptionElement
        option.text = "${channel.number.toString().padStart(3, '0')} ${channel.name}"
        option.value = channel.number.toString()
        return option
    }

    private fun initChannelsSelect(channels: ArrayList<Channel>){
        channelsSelect.innerHTML = ""
        for(channel in channels){
            channelsSelect.append(createChannelOption(channel))
        }
    }

    private fun initChannelsSelect(){
        initChannelsSelect(CustomChannels.getCustomChannels())
    }


    private fun getChannelFromChannelNumber(channelNumber: Int): Channel?{
        val customChannels = CustomChannels.getCustomChannels()
        for(channel in customChannels){
            if(channel.number == channelNumber){
                return channel
            }
        }
        return null
    }

    private fun changeChannelNumber(currentNumber: Int, changeToNumber: Int){
        val channel = getChannelFromChannelNumber(currentNumber)
        if(channel != null){
            CustomChannels.setCustomChannel(Channel(
                    number = changeToNumber,
                    name = channel.name,
                    sources = channel.sources,
                    information = channel.information
            ))
        }
    }

    private fun optionSortBy(by: (option: HTMLOptionElement)->Int){
        val options = channelsSelect.options
        for(i in 0 until (options.length-1)){
            for(j in (i+1) until options.length){
                val optionI = (options.get(i)?: document.createElement("option")) as HTMLOptionElement
                val optionJ = (options.get(j)?: document.createElement("option")) as HTMLOptionElement
                if(by(optionI) < by(optionJ)){
                    channelsSelect.set(i, optionJ)
                    channelsSelect.set(j, optionI)
                }
            }
        }
    }

    private fun sortChannelsSelect(){
        optionSortBy { option: HTMLOptionElement -> option.value.toIntOrNull()?:0 }
    }

    private fun saveChannelsSelect(){

    }

    init {
        initChannelsSelect()

        hideButton.onclick = fun(event){ hide() }

        channelAddButton.onclick = fun(event){
            CustomChannelEditChannelDialogBox()
            initChannelsSelect()
        }
        channelRemoveButton.onclick = fun(event){
            //刪除自訂頻道從自訂頻道表
            val options = channelsSelect.selectedOptions
            for (i in 0 until options.length){
                val channelNumber = (options.get(i) as HTMLOptionElement).value.toIntOrNull()
                if(channelNumber != null){
                    val channel = getChannelFromChannelNumber(channelNumber)
                    if(channel != null){
                        CustomChannels.removeCustomChannel(channel)
                    }
                }
            }
            //刪除自訂頻道從自訂頻道設定嘅Select
            channelsSelect.remove(channelsSelect.selectedIndex)
        }
        channelMoveUpButton.onclick = fun(event){
            if(0 < channelsSelect.selectedIndex){
                val optionAIndex = channelsSelect.selectedIndex
                val optionBIndex = channelsSelect.selectedIndex - 1
                val options: ArrayList<HTMLOptionElement> = ArrayList()
                for(index in 0 until channelsSelect.length){
                    options.add(channelsSelect.options.get(index) as HTMLOptionElement)
                }
                val optionA = options.get(optionAIndex)
                val optionB = options.get(optionBIndex)
                options.set(optionAIndex, optionB)
                options.set(optionBIndex, optionA)
                channelsSelect.innerHTML = ""
                for(index in 0 until options.size){
                    val option = options.getOrNull(index)
                    if(option != null){
                        channelsSelect.append(option)
                    }
                }
            }
        }
        channelMoveDownButton.onclick = fun(event){
            if(channelsSelect.selectedIndex < channelsSelect.length){
                val optionAIndex = channelsSelect.selectedIndex
                val optionBIndex = channelsSelect.selectedIndex + 1
                val options: ArrayList<HTMLOptionElement> = ArrayList()
                for(index in 0 until channelsSelect.length){
                    options.add(channelsSelect.options.get(index) as HTMLOptionElement)
                }
                val optionA = options.get(optionAIndex)
                val optionB = options.get(optionBIndex)
                options.set(optionAIndex, optionB)
                options.set(optionBIndex, optionA)
                channelsSelect.innerHTML = ""
                for(index in 0 until options.size){
                    val option = options.getOrNull(index)
                    if(option != null){
                        channelsSelect.append(option)
                    }
                }
            }
        }
    }
}
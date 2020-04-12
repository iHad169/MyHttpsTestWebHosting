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
import kotlin.browser.window

object SettingWindow: Window(
        title = "設定",
        contentHTML = """
            <div style="display:flex;margin-bottom:1vh;margin-up:1vh;"><!--display:flex;-->
                <div style="flex:1">
                    自訂頻道:
                </div>
                <div style="flex:4">
                    <button id="customChannelsSettingOpenButton" style="font-size:4vh;width:13vh;">設置</button>
                </div>
            </div>
            <div style="display:none;margin-bottom:1vh;margin-up:1vh;"><!--display:flex;-->
                <div style="flex:2">
                    語言:
                </div>
                <div style="flex:2">
                    <button id="settingWindowLanguageSetHonJyutElegantSet" style="font-size:4vh;margin:1vh;width:23vh;">
                        漢文-粵語雅言
                    </button>
                    <button id="settingWindowLanguageSetHonJyutColloquialSet" style="font-size:4vh;margin:1vh;width:23vh;">
                        漢文-粵語口語
                    </button>
                    <button id="settingWindowLanguageSetEnglishSet" style="font-size:4vh;margin:1vh;width:23vh;">
                        English
                    </button>
                    <button id="settingWindowLanguageSetPresetSet" style="font-size:4vh;margin:1vh;width:23vh;">
                        預設
                    </button>
                </div>
                <div style="flex:3">
                    <input id="settingWindowLanguageSetLanguageISOCodeInput"
                           style="font-size:6vh;width:28vh;margin:1vh;" type="text" placeholder="ISO Code">
                    <select id="settingWindowLanguageSelectSequenceList" size="5"
                            style="font-size:5vh;width:28vh;margin:1vh;">
                    </select>
                </div>
                <div style="flex:1">
                    <button id="settingWindowLanguageAddLanguage" style="font-size:6vh;margin:1vh;width:100%;">
                        <i class="icon-font">&#xe82e;</i>
                    </button>
                    <button id="settingWindowLanguageMoveUpLanguage" style="font-size:6vh;margin:1vh;width:100%;">
                        <i class="icon-font">&#xe821;</i>
                    </button>
                    <button id="settingWindowLanguageMoveDownLanguage" style="font-size:6vh;margin:1vh;width:100%;">
                        <i class="icon-font">&#xe80a;</i>
                    </button>
                    <button id="settingWindowLanguageRemoveLanguage" style="font-size:6vh;margin:1vh;width:100%;">
                        <i class="icon-font">&#xe82f;</i>
                    </button>
                </div>
            </div>
            <div style="display:flex;margin-bottom:1vh;margin-up:1vh;">
                <div style="flex:1">
                    設定移除:
                </div>
                <div style="flex:4">
                    <button id="clearSettingButton" style="font-size:5vh;width:13vh;"><i
                            class="icon-font">&#xe82b;</i></button>
                </div>
            </div>
            <div style="display:flex;margin-bottom:1vh;margin-up:1vh;">
                <div style="flex:1">
                    Dev模式:
                </div>
                <div style="flex:4">
                        <input id="DevModeCheckbox" type="checkbox" style="width:6vh;height:6vh;">
                </div>
            </div>
        """
) {

    private val customChannelsSettingOpenButton = document.getElementById("customChannelsSettingOpenButton") as HTMLButtonElement

    fun initCustomChannelsSettingOpenButton(){
        customChannelsSettingOpenButton.onclick = fun(event){
            CustomChannelsSettingWindow.show(null)
        }
    }

    /*******************************************

    private val languageSetHonJyutElegantSet    = document.getElementById("settingWindowLanguageSetHonJyutElegantSet") as HTMLButtonElement
    private val languageSetHonJyutColloquialSet = document.getElementById("settingWindowLanguageSetHonJyutColloquialSet") as HTMLButtonElement
    private val languageSetEnglishSet           = document.getElementById("settingWindowLanguageSetEnglishSet") as HTMLButtonElement
    private val languageSetPresetSet            = document.getElementById("settingWindowLanguageSetPresetSet") as HTMLButtonElement
    private val languageSetLanguageISOCodeInput = document.getElementById("settingWindowLanguageSetLanguageISOCodeInput") as HTMLInputElement
    private val languageSelectSequenceList      = document.getElementById("settingWindowLanguageSelectSequenceList") as HTMLSelectElement
    private val languageAddLanguage             = document.getElementById("settingWindowLanguageAddLanguage") as HTMLButtonElement
    private val languageRemoveLanguage          = document.getElementById("settingWindowLanguageRemoveLanguage") as HTMLButtonElement
    private val languageMoveUpLanguage          = document.getElementById("settingWindowLanguageMoveUpLanguage") as HTMLButtonElement
    private val languageMoveDownLanguage        = document.getElementById("settingWindowLanguageMoveDownLanguage") as HTMLButtonElement
    private val currentUserLanguage             = js("navigator.language || navigator.userLanguage;") as String

    fun getLanguageSetting(): ArrayList<String>{
        val userLanguageList = ArrayList<String>()
        for(index in 0 until languageSelectSequenceList.length){
            userLanguageList.add((languageSelectSequenceList.options.get(index) as HTMLOptionElement).text)
        }
        return userLanguageList
    }

    private fun createLanguageOption(isoCode: String): HTMLOptionElement{
        val option = document.createElement("option") as HTMLOptionElement
        option.text = isoCode
        option.value = isoCode
        return option
    }

    fun initLangugeSetting(){
        languageAddLanguage.onclick = fun(event){
            if(languageSetLanguageISOCodeInput.value != ""){
                val option = document.createElement("option") as HTMLOptionElement
                option.text = languageSetLanguageISOCodeInput.value
                option.value = languageSetLanguageISOCodeInput.value
                languageSelectSequenceList.add(option)

                //儲存低返最近設定<語言選取次序>
                localStorage.setItem("RecentlyLanguageSelectSequence", languageSelectSequenceList.innerHTML)
            }
        }
        languageRemoveLanguage.onclick = fun(event){
            languageSelectSequenceList.remove(languageSelectSequenceList.selectedIndex)

            //儲存低返最近設定<語言選取次序>
            localStorage.setItem("RecentlyLanguageSelectSequence", languageSelectSequenceList.innerHTML)
        }
        languageMoveUpLanguage.onclick = fun(event){
            if(0 < languageSelectSequenceList.selectedIndex){
                val optionAIndex = languageSelectSequenceList.selectedIndex
                val optionBIndex = languageSelectSequenceList.selectedIndex - 1
                val options: ArrayList<HTMLOptionElement> = ArrayList()
                for(index in 0 until languageSelectSequenceList.length){
                    options.add(languageSelectSequenceList.options.get(index) as HTMLOptionElement)
                }
                val optionA = options.get(optionAIndex)
                val optionB = options.get(optionBIndex)
                options.set(optionAIndex, optionB)
                options.set(optionBIndex, optionA)
                languageSelectSequenceList.innerHTML = ""
                for(index in 0 until options.size){
                    val option = options.getOrNull(index)
                    if(option != null){
                        languageSelectSequenceList.append(option)
                    }
                }

                //儲存低返最近設定<語言選取次序>
                localStorage.setItem("RecentlyLanguageSelectSequence", languageSelectSequenceList.innerHTML)
            }
        }
        languageMoveDownLanguage.onclick = fun(event){
            if(languageSelectSequenceList.selectedIndex < languageSelectSequenceList.length){
                val optionAIndex = languageSelectSequenceList.selectedIndex
                val optionBIndex = languageSelectSequenceList.selectedIndex + 1
                val options: ArrayList<HTMLOptionElement> = ArrayList()
                for(index in 0 until languageSelectSequenceList.length){
                    options.add(languageSelectSequenceList.options.get(index) as HTMLOptionElement)
                }
                val optionA = options.get(optionAIndex)
                val optionB = options.get(optionBIndex)
                options.set(optionAIndex, optionB)
                options.set(optionBIndex, optionA)
                languageSelectSequenceList.innerHTML = ""
                for(index in 0 until options.size){
                    val option = options.getOrNull(index)
                    if(option != null){
                        languageSelectSequenceList.append(option)
                    }
                }

                //儲存低返最近設定<語言選取次序>
                localStorage.setItem("RecentlyLanguageSelectSequence", languageSelectSequenceList.innerHTML)
            }
        }

        languageSetHonJyutElegantSet.onclick = fun(event){
            languageSelectSequenceList.innerHTML = ""
            languageSelectSequenceList.append(
                    createLanguageOption("hon-JyutElegant"),
                    createLanguageOption("zh-HK"),
                    createLanguageOption("zh-Hant-HK"),
                    createLanguageOption("zh-TW"),
                    createLanguageOption("zh-Hant-TW"),
                    createLanguageOption("zh-Hant"),
                    createLanguageOption("hon-JyutColloquial"),
                    createLanguageOption("zh-Yue"),
                    createLanguageOption(currentUserLanguage),
                    createLanguageOption("en")
            )
        }
        languageSetHonJyutColloquialSet.onclick = fun(event){
            languageSelectSequenceList.innerHTML = ""
            languageSelectSequenceList.append(
                    createLanguageOption("hon-JyutColloquial"),
                    createLanguageOption("zh-Yue"),
                    createLanguageOption("hon-JyutElegant"),
                    createLanguageOption("zh-HK"),
                    createLanguageOption("zh-Hant-HK"),
                    createLanguageOption("zh-TW"),
                    createLanguageOption("zh-Hant-TW"),
                    createLanguageOption("zh-Hant"),
                    createLanguageOption(currentUserLanguage),
                    createLanguageOption("en")
            )
        }
        languageSetEnglishSet.onclick = fun(event){
            languageSelectSequenceList.innerHTML = ""
            languageSelectSequenceList.append(
                    createLanguageOption("en"),
                    createLanguageOption(currentUserLanguage)
            )
        }
        languageSetPresetSet.onclick = fun(event){
            languageSelectSequenceList.innerHTML = ""
            languageSelectSequenceList.append(
                    createLanguageOption(currentUserLanguage),
                    createLanguageOption("en")
            )
        }

        languageSelectSequenceList.innerHTML =
                localStorage.getItem("RecentlyLanguageSelectSequence")?:
                        "<option value=\"${currentUserLanguage}\">${currentUserLanguage}</option>"
    }*/

    /********************************************/

    private val clearSettingButton = document.getElementById("clearSettingButton") as HTMLButtonElement

    fun initClearSetting(){
        clearSettingButton.onclick = fun(event){localStorage.clear();js("location.reload();")}
    }

    /********************************************/

    val devConsole = document.getElementById("devConsole") as HTMLDivElement
    private val devModeCheckbox = document.getElementById("DevModeCheckbox") as HTMLInputElement

    fun initDevModeCheckbox(){
        devModeCheckbox.onchange = fun(event){
            if(devModeCheckbox.checked){
                devConsole.style.display = "block"
                try {
                    val _devConsole = devConsole
                    val _getConsoleLogs: ()->String = getConsoleLogs
                    _devConsole.innerHTML = _getConsoleLogs()
                    js("""
                        console.log = function(message){
                            console.logs.push(message);
                            console.stdlog.apply(console, arguments);
                            _devConsole.innerHTML = _getConsoleLogs();
                            _devConsole.scrollTop = _devConsole.scrollHeight
                        }
                    """)
                }catch (e: dynamic){println("DevModeCheckbox哀左: ${e}")}
            }else{
                devConsole.style.display = "none"
            }
        }
    }

    /********************************************/

    init {
        initCustomChannelsSettingOpenButton()
        //initLangugeSetting()
        initClearSetting()
        initDevModeCheckbox()
    }
}
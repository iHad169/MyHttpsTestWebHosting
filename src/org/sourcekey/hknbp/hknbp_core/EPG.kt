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
import kotlin.browser.document
import kotlin.js.Date
import org.sourcekey.hknbp.hknbp_core.XMLTV.Programme
import org.sourcekey.hknbp.hknbp_core.MultiLanguageString.LanguageString
import kotlin.browser.window
import kotlin.dom.addClass

import org.w3c.dom.*
import org.w3c.dom.events.FocusEvent


object EPG: TabbableUI(document.getElementById("epg") as HTMLElement) {
    private val epg                             = document.getElementById("epg") as HTMLElement
    private val displayCurrentDateBox           = document.getElementById("epgDisplayCurrentDateBox") as HTMLElement
    private val hideButton                      = document.getElementById("epgHideButton") as HTMLElement
    private val programmeInformationTitle       = document.getElementById("epgProgrammeInformationTitle") as HTMLElement
    private val programmeInformationSubTitle    = document.getElementById("epgProgrammeInformationSubTitle") as HTMLElement
    private val programmeInformationDesc        = document.getElementById("epgProgrammeInformationDesc") as HTMLElement
    private val programmeInformationCredit      = document.getElementById("epgProgrammeInformationCredit") as HTMLElement
    private val programmeInformationDate        = document.getElementById("epgProgrammeInformationDate") as HTMLElement
    private val programmeInformationCategory    = document.getElementById("epgProgrammeInformationCategory") as HTMLElement
    private val programmeInformationKeyword     = document.getElementById("epgProgrammeInformationKeyword") as HTMLElement
    private val programmeInformationLanguage    = document.getElementById("epgProgrammeInformationLanguage") as HTMLElement
    private val programmeInformationOrigLanguage= document.getElementById("epgProgrammeInformationOrigLanguage") as HTMLElement
    private val programmeInformationLength      = document.getElementById("epgProgrammeInformationLength") as HTMLElement
    private val programmeInformationIcon        = document.getElementById("epgProgrammeInformationIcon") as HTMLImageElement
    private val programmeInformationUrl         = document.getElementById("epgProgrammeInformationUrl") as HTMLElement
    private val programmeInformationCountry     = document.getElementById("epgProgrammeInformationCountry") as HTMLElement
    private val programmeInformationEpisodeNum  = document.getElementById("epgProgrammeInformationEpisodeNum") as HTMLElement
    //private val programmeInformationVideo       = document.getElementById("epgProgrammeInformationVideo") as HTMLElement
    //private val programmeInformationAudio       = document.getElementById("epgProgrammeInformationAudio") as HTMLElement
    private val programmeInformationPreviouslyShown = document.getElementById("epgProgrammeInformationPreviouslyShown") as HTMLElement
    //private val programmeInformationPremiere    = document.getElementById("epgProgrammeInformationPremiere") as HTMLElement
    //private val programmeInformationLastChance  = document.getElementById("epgProgrammeInformationLastChance") as HTMLElement
    //private val programmeInformationNew         = document.getElementById("epgProgrammeInformationNew") as HTMLElement
    //private val programmeInformationSubtitles   = document.getElementById("epgProgrammeInformationSubtitles") as HTMLElement
    //private val programmeInformationRating      = document.getElementById("epgProgrammeInformationRating") as HTMLElement
    //private val programmeInformationStarRating  = document.getElementById("epgProgrammeInformationStarRating") as HTMLElement
    //private val programmeInformationReview      = document.getElementById("epgProgrammeInformationReview") as HTMLElement
    private val programmeInformationBroadcastDateSlot = document.getElementById("epgProgrammeInformationBroadcastDateSlot") as HTMLElement
    private val programmeInformationBroadcastTimeSlot = document.getElementById("epgProgrammeInformationBroadcastTimeSlot") as HTMLElement
    private val programmeListCurrentDisplayDate = document.getElementById("epgProgrammeListCurrentDisplayDate") as HTMLElement
    private val programmeListTimeLine           = document.getElementById("epgProgrammeListTimeLine") as HTMLElement
    private val programmeListChannelList        = document.getElementById("epgProgrammeListChannelList") as HTMLElement
    private val programmeListTable              = document.getElementById("epgProgrammeListTable") as HTMLElement

    private val tabIndexZ: Int = 9

    private var updateDisplayCurrentDateBoxTimer: Int = 0

    private fun setDisplayCurrentDateBox(){
        val script = fun(){displayCurrentDateBox.innerHTML = Date().toLocaleString()}
        script()
        updateDisplayCurrentDateBoxTimer = window.setInterval(script, 1000)
    }

    private fun setProgrammeInformationTitle(programme: Programme){
        programmeInformationTitle.innerHTML = programme.title?.toString()?:""
    }

    private fun setProgrammeInformationSubTitle(programme: Programme){
        val string = programme.subTitle
        if(string != null){
            programmeInformationSubTitle.innerHTML = " : $string"
        }else{
            programmeInformationSubTitle.innerHTML = ""
        }
    }

    private fun setProgrammeInformationDesc(programme: Programme){
        programmeInformationDesc.innerHTML = programme.desc?.toString() ?: ""
    }

    private fun setProgrammeInformationCredit(programme: Programme){
        programmeInformationCredit.innerHTML = ""
        if(programme.credits?.directors?.size?:0 > 0){
            programmeInformationCredit.innerHTML += "導演: "
            for(i in 0 until (programme.credits?.directors?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.directors?.getOrNull(i)?: "")+" "
            }
        }
        if(programme.credits?.actors?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "演員: "
            for(i in 0 until (programme.credits?.actors?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.actors?.getOrNull(i)?.actor?: "")+"-"+(programme.credits?.actors?.getOrNull(i)?.role?: "")+" "
            }
        }
        if(programme.credits?.writers?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "編劇: "
            for(i in 0 until (programme.credits?.writers?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.writers?.getOrNull(i)?: "")+" "
            }
        }
        if(programme.credits?.adapters?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "改編: "
            for(i in 0 until (programme.credits?.adapters?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.adapters?.getOrNull(i)?: "")+" "
            }
        }
        if(programme.credits?.producers?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "製片人: "
            for(i in 0 until (programme.credits?.producers?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.producers?.getOrNull(i)?: "")+" "
            }
        }
        if(programme.credits?.composers?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "作曲家: "
            for(i in 0 until (programme.credits?.composers?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.composers?.getOrNull(i)?: "")+" "
            }
        }
        if(programme.credits?.editors?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "編輯: "
            for(i in 0 until (programme.credits?.editors?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.editors?.getOrNull(i)?: "")+" "
            }
        }
        if(programme.credits?.presenters?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "主持: "
            for(i in 0 until (programme.credits?.presenters?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.presenters?.getOrNull(i)?: "")+" "
            }
        }
        if(programme.credits?.commentators?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "評論員: "
            for(i in 0 until (programme.credits?.commentators?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.commentators?.getOrNull(i)?: "")+" "
            }
        }
        if(programme.credits?.guests?.size?:0 > 0){
            programmeInformationCredit.innerHTML += if(programmeInformationCredit.innerHTML == ""){""}else{"<br/>"} + "嘉賓: "
            for(i in 0 until (programme.credits?.guests?.size?:0)){
                programmeInformationCredit.innerHTML += (programme.credits?.guests?.getOrNull(i)?: "")+" "
            }
        }
    }

    private fun setProgrammeInformationDate(programme: Programme){
        programmeInformationDate.innerHTML = ""

        val date = programme.date
        if(date != null){ programmeInformationDate.innerHTML = "發行期: " + date }
    }

    private fun setProgrammeInformationCategory(programme: Programme){
        programmeInformationCategory.innerHTML = ""

        val category = programme.category
        if(category != null){ programmeInformationCategory.innerHTML = "片類: $category" }
    }

    private fun setProgrammeInformationKeyword(programme: Programme){
        programmeInformationKeyword.innerHTML = ""

        val keywordList = programme.keyword?.getAllStringByLanguage()
        if(keywordList != null){
            programmeInformationKeyword.innerHTML += "關鍵詞: "
            for(keyword in keywordList){
                programmeInformationKeyword.innerHTML += keyword
            }
        }
    }

    private fun setProgrammeInformationLanguage(programme: Programme){
        programmeInformationLanguage.innerHTML = ""

        val languageList = programme.language?.getAllStringByLanguage()
        if(languageList != null){
            programmeInformationLanguage.innerHTML += "["
            for(language in languageList){
                if(programmeInformationLanguage.innerHTML !== "["){programmeInformationLanguage.innerHTML += "/"}
                programmeInformationLanguage.innerHTML += language
            }
            programmeInformationLanguage.innerHTML += "]"
        }
    }

    private fun setProgrammeInformationOrigLanguage(programme: Programme){
        programmeInformationOrigLanguage.innerHTML = ""

        val origLanguage = programme.origLanguage
        if(origLanguage != null){ programmeInformationOrigLanguage.innerHTML = "原語言: $origLanguage" }
    }

    private fun setProgrammeInformationLength(programme: Programme){
        programmeInformationLength.innerHTML = ""

        val length = programme.length?.length
        if(length != null){ programmeInformationLength.innerHTML = "片長: " + length + (programme.length?.units?:"") }
    }

    private fun setProgrammeInformationIcon(programme: Programme){
        programmeInformationIcon.src = programme.icon?.src?: "img/nullIcon.png"
    }

    private fun setProgrammeInformationUrl(programme: Programme){
        programmeInformationUrl.innerHTML = ""
        for(i in 0 until (programme.urls?.size?:0)){
            val link = programme.urls?.getOrNull(i)?: ""
            programmeInformationUrl.innerHTML += "<br/><a href=\"$link\">$link</a>"
        }
    }

    private fun setProgrammeInformationCountry(programme: Programme){
        programmeInformationCountry.innerHTML = ""

        val country = programme.country
        if(country != null){ programmeInformationCountry.innerHTML = "國家: $country" }
    }

    private fun setProgrammeInformationEpisodeNum(programme: Programme){
        Dialogue.getDialogues(fun (dialogues){
            var episodeInnerHTML = ""
            val season = programme.episodeNum?.getSeason()
            if(season != null){
                episodeInnerHTML += dialogues.node?.season?.replace("\${season}", season.toString())?: ""
            }
            val episode = programme.episodeNum?.getEpisode()
            if(episode != null){
                episodeInnerHTML += dialogues.node?.episode?.replace("\${episode}", episode.toString())?: ""
            }
            val part = programme.episodeNum?.getPart()
            if(part != null){
                episodeInnerHTML += dialogues.node?.part?.replace("\${part}", part.toString())?: ""
            }
            val totalSeason = programme.episodeNum?.getTotalSeason()
            if(totalSeason != null){
                episodeInnerHTML += dialogues.node?.totalSeason?.replace("\${totalSeason}", totalSeason.toString())?: ""
            }
            val totalEpisode = programme.episodeNum?.getTotalEpisode()
            if(totalEpisode != null){
                episodeInnerHTML += dialogues.node?.totalEpisode?.replace("\${totalEpisode}", totalEpisode.toString())?: ""
            }
            val totalPart = programme.episodeNum?.getTotalPart()
            if(totalPart != null){
                episodeInnerHTML  += dialogues.node?.totalPart?.replace("\${totalPart}", totalPart.toString())?: ""
            }

            programmeInformationEpisodeNum.innerHTML = episodeInnerHTML
        })
    }

    private fun setProgrammeInformationVideo(programme: Programme){
        //programmeInformationVideo.innerHTML = programme.video
    }

    private fun setProgrammeInformationAudio(programme: Programme){
        //programmeInformationAudio.innerHTML = programme.audio
    }

    private fun setProgrammeInformationPreviouslyShown(programme: Programme){
        programmeInformationPreviouslyShown.innerHTML = ""

        val previouslyShownDate = programme.previouslyShown?.start?.toLocaleString()
        if(previouslyShownDate != null){ programmeInformationPreviouslyShown.innerHTML += "上次播放時間: " + previouslyShownDate + "\n" }
        val previouslyShownChannel = programme.previouslyShown?.channel
        if(previouslyShownChannel != null){ programmeInformationPreviouslyShown.innerHTML += "上次播放頻道: " + previouslyShownChannel }
    }

    private fun setProgrammeInformationPremiere(programme: Programme){
        //programmeInformationPremiere.innerHTML = programme.premieres.getElementsByLanguage(org.sourcekey.hknbp.hknbp_core.userLanguageList)?.getOrNull(0)?.premiere?: ""
    }

    private fun setProgrammeInformationLastChance(programme: Programme){
        //programmeInformationLastChance.innerHTML = programme.lastChances.getElementsByLanguage(org.sourcekey.hknbp.hknbp_core.userLanguageList)?.getOrNull(0)?.lastChance?: ""
    }

    private fun setProgrammeInformationNew(programme: Programme){
        //programmeInformationNew
    }

    private fun setProgrammeInformationSubtitles(programme: Programme){
        //programmeInformationSubtitles.innerHTML = programme.subtitles
    }

    private fun setProgrammeInformationRating(programme: Programme){
        //programmeInformationRating.innerHTML = programme.rating
    }

    private fun setProgrammeInformationStarRating(programme: Programme){
        //programmeInformationStarRating.innerHTML = programme.starRating
    }

    private fun setProgrammeInformationReview(programme: Programme){
        //programmeInformationReview.innerHTML = programme.reviews.getElementByLanguage(userLanguage)??: ""
    }

    private fun setProgrammeInformationBroadcastDateSlot(programme: Programme){
        /**
        val options = object : Date.LocaleOptions {
            override var day: String? = "2-digit"
            override var era: String? = "long"
            override var formatMatcher: String? = "long"
            override var hour: String? = "2-digit"
            override var hour12: Boolean? = false
            override var localeMatcher: String? = "long"
            override var minute: String? = "2-digit"
            override var month: String? = "2-digit"
            override var second: String? = "2-digit"
            override var timeZone: String? = "UTC"
            override var timeZoneName: String? = "long"
            override var weekday: String? = "long"
            override var year: String? = "2-digit"
        }*/

        programmeInformationBroadcastDateSlot.innerHTML = programme.start.toLocaleDateString()
    }

    private fun setProgrammeInformationBroadcastTimeSlot(programme: Programme){
        val fromTime = programme.start.getHours().toString().padStart(2, '0')+
                ":"+programme.start.getMinutes().toString().padStart(2, '0')
        val toTime = programme.stop.getHours().toString().padStart(2, '0')+
                ":"+programme.stop.getMinutes().toString().padStart(2, '0')
        programmeInformationBroadcastTimeSlot.innerHTML = fromTime+"-"+toTime
    }

    private fun setProgrammeInformation(programme: Programme){
        setProgrammeInformationTitle(programme)
        setProgrammeInformationSubTitle(programme)
        setProgrammeInformationDesc(programme)
        setProgrammeInformationCredit(programme)
        setProgrammeInformationDate(programme)
        setProgrammeInformationCategory(programme)
        setProgrammeInformationKeyword(programme)
        setProgrammeInformationLanguage(programme)
        setProgrammeInformationOrigLanguage(programme)
        setProgrammeInformationLength(programme)
        setProgrammeInformationIcon(programme)
        setProgrammeInformationUrl(programme)
        setProgrammeInformationCountry(programme)
        setProgrammeInformationEpisodeNum(programme)
        setProgrammeInformationVideo(programme)
        setProgrammeInformationAudio(programme)
        setProgrammeInformationPreviouslyShown(programme)
        setProgrammeInformationPremiere(programme)
        setProgrammeInformationLastChance(programme)
        setProgrammeInformationNew(programme)
        setProgrammeInformationSubtitles(programme)
        setProgrammeInformationRating(programme)
        setProgrammeInformationStarRating(programme)
        setProgrammeInformationReview(programme)
        setProgrammeInformationBroadcastDateSlot(programme)
        setProgrammeInformationBroadcastTimeSlot(programme)
    }

    private fun nowDateWithoutMinute(): Date{
        return Date(Date().getFullYear(), Date().getMonth(), Date().getDate(), Date().getHours())
    }

    private fun addDay(dateForChange: Date, numberOfDay: Int): Date{
        return Date(dateForChange.getTime() + (numberOfDay * 24 * 60 * 60 * 1000))
    }

    private var fromDate: Date = nowDateWithoutMinute()

    private var toDate: Date = addDay(nowDateWithoutMinute(), 2)

    private fun dateToDateDifferenceMinute(fromDate: Date, toDate: Date): Int{
        val differenceTime = kotlin.math.abs(toDate.getTime() - fromDate.getTime())
        return kotlin.math.ceil(differenceTime / (1000 * 60)).toInt()
    }

    private fun oneHourLengthPX(): Double{
        return (programmeListTable.scrollWidth / (dateToDateDifferenceMinute(fromDate, toDate) / 60)).toDouble()
    }

    private fun getDateByProgrammeListTableScrollLeft(scrollLeftValue: Double): Date{
        val numberOfHour = (scrollLeftValue - (scrollLeftValue % oneHourLengthPX())) / oneHourLengthPX()
        val currentScrollValueTime = numberOfHour * 60 * 60 * 1000
        return Date(fromDate.getTime() + currentScrollValueTime)
    }

    private fun newProgrammeListBlock(
            width: String,
            addClass: String            = "",
            backgroundColor: String     = "#000",
            innerHTML: String           = "",
            tabIndex: Int               = -1,
            onfocus: (FocusEvent)->Unit = fun(event){}
    ): HTMLDivElement{
        val button = document.createElement("button") as HTMLButtonElement
        button.style.backgroundColor    = backgroundColor
        button.style.color              = "#FFFFFF"
        button.style.fontWeight         = "bold"
        button.style.fontSize           = "3.5vh"
        button.style.overflowX          = "hidden"
        button.style.overflowY          = "hidden"
        button.style.textAlign          = "left"
        button.style.width              = "inherit"
        button.style.height             = "5.5vh"
        //button.style.padding            = "0vh"
        button.style.margin             = "0.25vh"
        button.style.marginLeft         = "0.5vh"
        button.style.marginRight        = "0.5vh"
        button.innerHTML                = innerHTML
        button.tabIndex                 = tabIndex
        button.onfocus                  = onfocus

        val div = document.createElement("div") as HTMLDivElement
        div.addClass(addClass)
        div.style.display               = "inline-block"
        div.style.width                 = width
        div.appendChild(button)

        return div
    }

    private fun newProgrammeListBlockLine(id: String = ""): HTMLDivElement{
        val div = document.createElement("div") as HTMLDivElement
        div.id                  = id
        div.style.whiteSpace    = "nowrap"
        div.style.width         = "max-content"
        return div
    }

    private fun setProgrammeListCurrentDisplayDate(){
        val updateDisplayDate = fun(innerHTML: String){
            programmeListCurrentDisplayDate.innerHTML = ""
            val block = newProgrammeListBlock(
                    width = "30vh",
                    backgroundColor = "#111",
                    innerHTML = innerHTML
            )
            val blockLine = newProgrammeListBlockLine()
            blockLine.appendChild(block)
            programmeListCurrentDisplayDate.appendChild(blockLine)
        }

        updateDisplayDate(fromDate.toLocaleDateString())
        programmeListTable.onscroll = fun(event){
            updateDisplayDate(getDateByProgrammeListTableScrollLeft(programmeListTable.scrollLeft).toLocaleDateString())
        }
    }

    private fun setProgrammeListTimeLine(){
        programmeListTimeLine.innerHTML = ""
        val line = newProgrammeListBlockLine()
        var increaseHour = 0
        while (fromDate.getTime()+(increaseHour*60*60*1000) < toDate.getTime()) {
            val hour = Date(fromDate.getTime()+(increaseHour*60*60*1000)).getHours().toString().padStart(2, '0')
            line.appendChild(
                    newProgrammeListBlock(
                            width = "30vh",
                            addClass = "time",
                            backgroundColor = "#222222",
                            innerHTML = "${hour}:00"
                    )
            )
            line.appendChild(
                    newProgrammeListBlock(
                            width = "30vh",
                            addClass = "time",
                            backgroundColor = "#222222",
                            innerHTML = "${hour}:30"
                    )
            )

            increaseHour++
        }
        programmeListTimeLine.appendChild(line)
    }

    private fun setProgrammeListChannelList(){
        programmeListChannelList.innerHTML = ""
        for (channel in channels){
            val line = newProgrammeListBlockLine()
            line.appendChild(
                    newProgrammeListBlock(
                            width = "8vh",
                            addClass = "channelNumber",
                            backgroundColor = "#222",
                            innerHTML = channel.number.toStringBackwardZeroPadding(3)
                    )
            )
            line.appendChild(
                    newProgrammeListBlock(
                            width = "22vh",
                            addClass = "channelName",
                            backgroundColor = "#222",
                            innerHTML = channel.name.toString()
                    )
            )
            programmeListChannelList.appendChild(line)
        }
    }

    private fun addProgrammeOnTimeLine(timeLine: HTMLDivElement, channel: Channel, programme: Programme){
        val addProgrammeFromTime: Date = if(fromDate.getTime() < programme.start.getTime()){ programme.start }else{ fromDate }
        val addProgrammeToTime: Date = if(programme.stop.getTime() < toDate.getTime()){ programme.stop }else{ toDate }
        val timeLength = dateToDateDifferenceMinute(addProgrammeFromTime, addProgrammeToTime)
        val title = programme.title

        timeLine.appendChild(
                newProgrammeListBlock(
                        width = "${timeLength}vh",
                        addClass = "programme",
                        backgroundColor = "#333",
                        innerHTML = title.toString(),
                        tabIndex = Tab3dIndex.toUnparsedTabIndex(Tab3dIndex(
                                (programme.start.getDate().toString().padStart(2, '0') +
                                        programme.start.getHours().toString().padStart(2, '0')
                                        ).toIntOrNull()?:0,
                                channel.number,
                                tabIndexZ
                        )).toIntOrNull()?:0,
                        onfocus = fun(event){ setProgrammeInformation(programme) }
                )
        )
    }

    private fun loadProgrammeListTableContentChannelProgrammeTimeLine(channel: Channel){
        channel.information.getXMLTV(fun(xmltv){
            if(xmltv.programmes == null){return}

            val id = "channel${channel.number}ProgrammeTimeLine"
            val timeLine = (document.getElementById(id) as HTMLDivElement)
            timeLine.innerHTML = ""//清空此ID嘅TimeLine所有Programme

            var currentSettedLastTime: Date = fromDate
            var nextProgrammeStartTime: Date = fromDate

            while (currentSettedLastTime.getTime() < toDate.getTime()){
                //搵呢個時間嘅Programme
                var addToShowProgramme: Programme? = xmltv.programmes.getProgrammeByTime(currentSettedLastTime)
                if(addToShowProgramme != null){
                    nextProgrammeStartTime = addToShowProgramme.stop
                }else{
                    //搵呢個時間下個最近嘅Programme
                    addToShowProgramme = xmltv.programmes.getClosestNextProgrammeByTime(currentSettedLastTime)
                    if(addToShowProgramme != null){
                        if(addToShowProgramme.start.getTime() < toDate.getTime()){
                            nextProgrammeStartTime = addToShowProgramme.stop
                        }else{
                            nextProgrammeStartTime = toDate
                        }
                    }else{
                        nextProgrammeStartTime = toDate
                    }

                    //加一個空嘅時段
                    addToShowProgramme = Programme(
                            start = currentSettedLastTime,
                            stop = nextProgrammeStartTime,
                            title = MultiLanguageString(ArrayLinkList(LanguageString("","此時段無資訊")))
                    )
                }
                addProgrammeOnTimeLine(timeLine, channel, addToShowProgramme)
                currentSettedLastTime = nextProgrammeStartTime
            }
        })
    }

    /**
     * Focus到依家頻道嘅節目
     * */
    private fun focusCurrentProgramme(){
        channels.node?.information?.getXMLTV(fun(xmltv){
            val currentProgrammeOrNull = xmltv.programmes?.getProgrammeByTime()
            val currentProgramme: Programme = if(null != currentProgrammeOrNull){ currentProgrammeOrNull }else{
                hideButton.focus()
                return
            }
            val firstFocusTabIndex: String = Tab3dIndex.toUnparsedTabIndex(Tab3dIndex(
                    (currentProgramme.start.getDate().toString().padStart(2, '0') +
                            currentProgramme.start.getHours().toString().padStart(2, '0')).toIntOrNull()?:0,
                    channels.node?.number?:0,
                    tabIndexZ
            ))
            (document.querySelector("[tabindex=\"${firstFocusTabIndex}\"]") as HTMLElement).focus()
        })
    }

    /**
     * 設定ChannelProgrammeTimeLine內容
     * */
    private fun setChannelProgrammeTimeLineContent(){
        for (channel in channels){
            val id = "channel${channel.number}ProgrammeTimeLine"
            addProgrammeOnTimeLine((document.getElementById(id) as HTMLDivElement), channel,
                    Programme(start = fromDate, stop = toDate,
                            title = MultiLanguageString(ArrayLinkList(LanguageString("","暫無資訊")))//////////
                    )
            )
            loadProgrammeListTableContentChannelProgrammeTimeLine(channel)
        }
    }

    /**
     * 為每頻道建立ChannelProgrammeTimeLine空間
     * */
    private fun newChannelProgrammeTimeLineArea(){
        for (channel in channels){
            programmeListTable.appendChild(
                    newProgrammeListBlockLine("channel${channel.number}ProgrammeTimeLine")
            )
        }
    }

    /**
     * 將TimeLine同ChannelList同Table嘅scroll同步
     * */
    private fun syncScroll(){
        jq("#epgProgrammeListTable").on("scroll", fun(event){
            jq("#epgProgrammeListChannelList").scrollTop(jqThis().scrollTop())
            jq("#epgProgrammeListTimeLine").scrollLeft(jqThis().scrollLeft())
        })
    }

    private fun setProgrammeListTable(){
        programmeListTable.innerHTML = ""
        newChannelProgrammeTimeLineArea()
        setChannelProgrammeTimeLineContent()
        syncScroll()
        focusCurrentProgramme()
    }

    private fun setProgrammeList(){
        setProgrammeListCurrentDisplayDate()
        setProgrammeListTimeLine()
        setProgrammeListChannelList()
        setProgrammeListTable()
    }

    override fun show(showTime: Int?) {
        super.show(showTime)
        setDisplayCurrentDateBox()
        setProgrammeList()
    }

    override fun hide() {
        super.hide()
        window.clearTimeout(updateDisplayCurrentDateBoxTimer)
    }

    init {
        epg.style.cursor = "auto"
        hideButton.onclick = fun(event){ hide() }
    }
}


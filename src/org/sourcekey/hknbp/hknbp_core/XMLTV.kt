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

import org.w3c.dom.Document
import org.w3c.dom.Element
import org.w3c.dom.get
import kotlin.js.Date
import org.sourcekey.hknbp.hknbp_core.MultiLanguageString.LanguageString

/**
 * 一條頻道嘅所有節目同相關資訊
 *
 * 此參考xmltv.dtd來編寫嘅Class
 * https://salsa.debian.org/nickm-guest/xmltv/blob/master/xmltv.dtd
 * */
open class XMLTV(
        val displayName: MultiLanguageString?           = null,
        val icon: Icon?                                                 = null,
        val urls: ArrayList<String>?                                    = null,
        val programmes: Programme.ProgrammeList<Programme>?             = null
){
    class Icon(
            val src: String?                                = null,
            val width: Int?                                 = null,
            val height: Int?                                = null
    )
    class Programme(
            val start: Date,
            val stop: Date,
            val pdcStart: String?                                       = null,
            val vpsStart: String?                                       = null,
            val showView: String?                                       = null,
            val videoPlus: String?                                      = null,
            val clumpidx: String?                                       = null,
            val title: MultiLanguageString?                             = null,
            val subTitle: MultiLanguageString?                          = null,
            val desc: MultiLanguageString?                              = null,
            val credits: Credits?                                       = null,
            val date: String?                                           = null,
            val category: MultiLanguageString?                          = null,
            val keyword: MultiLanguageString?                           = null,
            val language: MultiLanguageString?                          = null,
            val origLanguage: MultiLanguageString?                      = null,
            val length: Length?                                         = null,
            val icon: Icon?                                             = null,
            val urls: ArrayList<String>?                                = null,
            val country: MultiLanguageString?                           = null,
            val episodeNum: EpisodeNum?                                 = null,
            val video: Video?                                           = null,
            val audio: Audio?                                           = null,
            val previouslyShown: PreviouslyShown?                       = null,
            val premiere: MultiLanguageString?                          = null,
            val lastChance: MultiLanguageString?                        = null,
            val new: Boolean                                            = false,
            val subtitles: Subtitles?                                   = null,
            val rating: Rating?                                         = null,
            val starRating: StarRating?                                 = null,
            val review: Review?                                         = null
    ){
        class Credits(
                val directors: ArrayList<String>?                       = null,
                val actors: ArrayList<Actor>?                           = null,
                val writers: ArrayList<String>?                         = null,
                val adapters: ArrayList<String>?                        = null,
                val producers: ArrayList<String>?                       = null,
                val composers: ArrayList<String>?                       = null,
                val editors: ArrayList<String>?                         = null,
                val presenters: ArrayList<String>?                      = null,
                val commentators: ArrayList<String>?                    = null,
                val guests: ArrayList<String>?                          = null
        ){
            class Actor(
                    val role: String?                               = null,
                    val actor: String?                              = null
            )
        }
        class Length(
                val units: String?                              = null,
                val length: String?                             = null
        )
        class EpisodeNum(
                val system: String?                             = null,
                val episodeNum: String?                         = null
        ){
            fun getSeason(): Int?{
                return when (system) {
                    "xmltv_ns" -> {
                        val number = episodeNum
                                ?.split(".")?.getOrNull(0)
                                ?.split("/")?.getOrNull(0)
                                ?.replace(Regex("[^0-9]"), "")?.toIntOrNull()
                        if(number != null){number + 1}else{number}
                    }
                    /** 暫時只支援xmltv_ns系統, 其他有待研究
                    "onscreen" -> { null }
                    "themoviedb.org" -> { null }
                    "thetvdb.com" -> { null }
                    "imdb.com" -> { null }
                    */
                    else -> {null}
                }
            }

            fun getTotalSeason(): Int?{
                return when (system) {
                    "xmltv_ns" -> {
                        episodeNum
                                ?.split(".")?.getOrNull(0)
                                ?.split("/")?.getOrNull(1)
                                ?.replace(Regex("[^0-9]"), "")?.toIntOrNull()
                    }
                    /** 暫時只支援xmltv_ns系統, 其他有待研究
                    "onscreen" -> { null }
                    "themoviedb.org" -> { null }
                    "thetvdb.com" -> { null }
                    "imdb.com" -> { null }
                    */
                    else -> {null}
                }
            }

            fun getEpisode(): Int?{
                return when (system) {
                    "xmltv_ns" -> {
                        val number = episodeNum
                                ?.split(".")?.getOrNull(1)
                                ?.split("/")?.getOrNull(0)
                                ?.replace(Regex("[^0-9]"), "")?.toIntOrNull()
                        if(number != null){number + 1}else{number}
                    }
                    /** 暫時只支援xmltv_ns系統, 其他有待研究
                    "onscreen" -> { null }
                    "themoviedb.org" -> { null }
                    "thetvdb.com" -> { null }
                    "imdb.com" -> { null }
                    */
                    else -> {null}
                }
            }

            fun getTotalEpisode(): Int?{
                return when (system) {
                    "xmltv_ns" -> {
                        episodeNum
                                ?.split(".")?.getOrNull(1)
                                ?.split("/")?.getOrNull(1)
                                ?.replace(Regex("[^0-9]"), "")?.toIntOrNull()
                    }
                    /** 暫時只支援xmltv_ns系統, 其他有待研究
                    "onscreen" -> { null }
                    "themoviedb.org" -> { null }
                    "thetvdb.com" -> { null }
                    "imdb.com" -> { null }
                    */
                    else -> {null}
                }
            }

            fun getPart(): Int?{
                return when (system) {
                    "xmltv_ns" -> {
                        val number = episodeNum
                                ?.split(".")?.getOrNull(2)
                                ?.split("/")?.getOrNull(0)
                                ?.replace(Regex("[^0-9]"), "")?.toIntOrNull()
                        if(number != null){number + 1}else{number}
                    }
                    /** 暫時只支援xmltv_ns系統, 其他有待研究
                    "onscreen" -> { null }
                    "themoviedb.org" -> { null }
                    "thetvdb.com" -> { null }
                    "imdb.com" -> { null }
                    */
                    else -> {null}
                }
            }

            fun getTotalPart(): Int?{
                return when (system) {
                    "xmltv_ns" -> {
                        episodeNum
                                ?.split(".")?.getOrNull(2)
                                ?.split("/")?.getOrNull(1)
                                ?.replace(Regex("[^0-9]"), "")?.toIntOrNull()
                    }
                    /** 暫時只支援xmltv_ns系統, 其他有待研究
                    "onscreen" -> { null }
                    "themoviedb.org" -> { null }
                    "thetvdb.com" -> { null }
                    "imdb.com" -> { null }
                    */
                    else -> {null}
                }
            }
        }
        class Video(
                val present: String?                            = null,
                val colour: String?                             = null,
                val aspect: String?                             = null,
                val quality: String?                            = null
        )
        class Audio(
                val present: String?                            = null,
                val stereo: String?                             = null
        )
        class PreviouslyShown(
                val start: Date?                                = null,
                val channel: String?                            = null
        )
        class Subtitles(
                val type: String?                                       = null,
                val language: String?                                   = null
        )
        class Rating(
                val system: String?                             = null,
                val value: String?                              = null,
                val icon: Icon?                                 = null
        )
        class StarRating(
                val system: String?                             = null,
                val value: String?                              = null,
                val icon: Icon?                                 = null
        )
        class Review(
                val type: MultiLanguageString?                          = null,
                val source: MultiLanguageString?                        = null,
                val reviewer: MultiLanguageString?                      = null,
                val review: MultiLanguageString?                        = null
        )

        class ProgrammeList<T: Programme>: ArrayList<T>{
            /**
             * 獲取呢個時間節目資訊
             *
             * @param date 想獲取呢個時間節目嘅時間
             * @return 有關時間嘅節目
             * */
            fun getProgrammeByTime(date: Date): Programme?{
                for(programme in this){
                    if(programme.start <= date && date < programme.stop){
                        return programme
                    }
                }
                return null
            }

            /**
             * 獲取依家時間節目資訊
             *
             * @return 有關時間嘅節目
             * */
            fun getProgrammeByTime(): Programme?{
                return getProgrammeByTime(Date())
            }

            /**
             * 獲取呢個時間最接近嘅下個節目資訊
             *
             * @param date 想獲取某個時間最接近嘅下個節目嘅時間
             * @return 有關時間嘅節目
             * */
            fun getClosestNextProgrammeByTime(date: Date): Programme?{
                for(programme in this){
                    if(date <= programme.start){
                        return programme
                    }
                }
                return null
            }

            /**
             * 獲取呢個時間最接近嘅上個節目資訊
             *
             * @param date 想獲取某個時間最接近嘅上個節目嘅時間
             * @return 有關時間嘅節目
             * */
            fun getClosestPreviousProgrammeByTime(date: Date): Programme?{
                var i: Int = size - 1
                while(0 < i){
                    if(get(i).stop <= date){
                        return get(i)
                    }
                    i--
                }
                return null
            }

            constructor(): super(){
                sortBy { programme -> programme.start.getTime() }
            }

            /**
             * @param initElements 初始化時一次過窒入所有元素
             * */
            constructor(vararg initElements: T): super() {
                for (initElement in initElements){
                    add(initElement)
                }
            }

            constructor(initialCapacity: Int): super(initialCapacity){
                sortBy { programme -> programme.start.getTime() }
            }

            constructor(elements: Collection<T>): super(elements){
                sortBy { programme -> programme.start.getTime() }
            }
        }
    }

    companion object {
        /**
         * 解析XMLTV檔去獲取Channel資料
         *
         * @param xmltvSrc XMLTV檔地址
         * @param epgID 需要獲取嘅頻道嘅節目指南ID
         * @param onParseedXMLTVListener 當完成解析XMLTV就執行呢個function
         * */
        fun parseXMLTV(
                onParsedXMLTVListener: (xmltv: XMLTV) -> Unit,
                onFailedParseXMLTVListener: ()->Unit,
                epgID: String, vararg xmltvSrc: String
        ){
            LoadFile.load(fun(max: Double, value: Double){
            }, fun(xmlHttp){
                onParsedXMLTVListener(getXMLTV(xmlHttp.responseXML, epgID))
            }, fun(){
                onFailedParseXMLTVListener()
            }, xmltvSrc)
        }

        /**
         * 令Date可以進行比較
         *
         * @param date 要同呢個Date進行比教嘅對像Date
         * @return 如Int, >0即對像Date較細, <0即對像Date較大, =0即同對像Date時間相同
         * */
        operator fun Date.compareTo(date: Date): Int {
            return (getTime() - date.getTime()).toInt()
        }

        /**
         * 時區字串轉有用嘅時區數值
         *
         * @param timeZoneString 時區字串, 格式例如: "+0800" "+0900" "-0530" 由5個位組成 "ZZZZZ"
         * @return 有用嘅時區數值
         * */
        private fun timeZoneStringToTimeZone(timeZoneString: String): Int?{
            try {
                //檢查係米時間數值
                var timeZoneHour = (timeZoneString[1].toString()+timeZoneString[2].toString()).toDouble()
                var timeZoneMinute = (timeZoneString[3].toString()+timeZoneString[4].toString()).toDouble()
                if(24<timeZoneHour||60<timeZoneMinute){return null}

                //檢查timeZone係正定負
                when(timeZoneString[0]){
                    '+', '-' -> {
                        timeZoneHour*=(timeZoneString[0].toString()+"1").toDouble()
                        timeZoneMinute*=(timeZoneString[0].toString()+"1").toDouble()
                    }
                    else -> {return null}
                }

                return ((timeZoneHour + (timeZoneMinute / 60)) * 60).toInt()
            }catch (e: Exception){
                return null
            }
        }

        /**
         * 將Date轉換時區
         *
         * @param date 要轉時區嘅Date
         * @param timeZone 要轉到嘅時區數值
         * @return 轉換左時區嘅Date
         */
        private fun changeTimeZone(date: Date, timeZone: Int): Date {
            val utc = date.getTime() - (timeZone * 60 * 1000)
            return Date(utc + (-date.getTimezoneOffset()) * 60 * 1000)
        }

        /**
         * 將由String類型來記錄嘅Date轉成Date類型
         *
         * @param dateString 由String類型來記錄嘅Date
         * @return 已轉換成嘅Date類型嘅Date
         * */
        private fun dateStringToDate(dateString: String): Date? {
            try {
                val year = (dateString[0].toString() + dateString[1].toString() + dateString[2].toString() + dateString[3].toString()).toInt()
                val month = (dateString[4].toString() + dateString[5].toString()).toInt()
                val day = (dateString[6].toString() + dateString[7].toString()).toInt()
                val hour = (dateString[8].toString() + dateString[9].toString()).toInt()
                val minute = (dateString[10].toString() + dateString[11].toString()).toInt()
                val second = (dateString[12].toString() + dateString[13].toString()).toInt()
                val timeZone = dateString[15].toString() + dateString[16].toString() + dateString[17].toString() + dateString[18].toString() + dateString[19].toString()

                return changeTimeZone(Date(year, month-1, day, hour, minute, second), timeZoneStringToTimeZone(timeZone)?: 0)
            } catch (e: Exception) {
                return null
            }
        }

        private fun getXMLTV(xmltvDoc: Document?, epgID: String): XMLTV{
            val subElements = xmltvDoc?.getElementsByTagName("channel")
            if(subElements == null || subElements.length < 1){return XMLTV()}

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                if(subElement?.getAttribute("id") == epgID){
                    return XMLTV(
                            getDisplayName(subElement),
                            getIcon(subElement),
                            getUrls(subElement),
                            getProgrammes(xmltvDoc, epgID)
                    )
                }
                i++
            }
            return XMLTV()
        }

        private fun getDisplayName(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("displayName")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangDisplayName = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang        = getLang(subElement)
                val displayName = subElement?.textContent

                if(displayName != null){multiLangDisplayName.add(LanguageString(lang?:"", displayName))}
                i++
            }

            return multiLangDisplayName
        }

        private fun getLang(element: Element?): String?{
            return element?.getAttribute("Lang")
        }

        private fun getIcon(element: Element?): Icon?{
            val subElements = element?.getElementsByTagName("icon")
            if(subElements == null || subElements.length < 1){return null}

            return Icon(
                    getSrc(subElements.get(0)),
                    getWidth(subElements.get(0)),
                    getHeight(subElements.get(0))
            )
        }

        private fun getSrc(element: Element?): String?{
            return element?.getAttribute("src")
        }

        private fun getWidth(element: Element?): Int?{
            return element?.getAttribute("width")?.toIntOrNull()
        }

        private fun getHeight(element: Element?): Int?{
            return element?.getAttribute("height")?.toIntOrNull()
        }

        private fun getUrls(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("url")
            if(subElements == null || subElements.length < 1){return null}

            val urls = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val url = subElement?.textContent

                if(url != null){ urls.add(url) }
                i++
            }

            return urls
        }

        private fun getProgrammes(xmltvDoc: Document?, epgID: String): Programme.ProgrammeList<Programme>?{
            val subElements = xmltvDoc?.getElementsByTagName("programme")
            if(subElements == null || subElements.length < 1){return null}

            val programmes = Programme.ProgrammeList<Programme>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                if(subElement?.getAttribute("channel") == epgID){
                    val start           = getStart(subElement)
                    val stop            = getStop(subElement)
                    val pdcStart        = getPDCStart(subElement)
                    val vpsStart        = getVPSStart(subElement)
                    val showView        = getShowView(subElement)
                    val videoPlus       = getVideoPlus(subElement)
                    val clumpidx        = getClumpidx(subElement)
                    val title           = getTitle(subElement)
                    val subTitle        = getSubTitle(subElement)
                    val desc            = getDesc(subElement)
                    val credits         = getCredits(subElement)
                    val date            = getDate(subElement)
                    val category        = getCategory(subElement)
                    val keyword         = getKeyword(subElement)
                    val language        = getLanguage(subElement)
                    val origLanguage    = getOrigLanguage(subElement)
                    val length          = getLength(subElement)
                    val icon            = getIcon(subElement)
                    val urls            = getUrls(subElement)
                    val country         = getCountry(subElement)
                    val episodeNum      = getEpisodeNum(subElement)
                    val video           = getVideo(subElement)
                    val audio           = getAudio(subElement)
                    val previouslyShown = getPreviouslyShown(subElement)
                    val premiere        = getPremiere(subElement)
                    val lastChance      = getLastChance(subElement)
                    val new             = getNew(subElement)
                    val subtitles       = getSubtitles(subElement)
                    val rating          = getRating(subElement)
                    val starRating      = getStarRating(subElement)
                    val reviews         = getReview(subElement)

                    if(start!=null && stop!=null && start<stop){//冇標明時間同時間錯誤將不加入到List中
                        programmes.add(Programme(
                                start, stop, pdcStart, vpsStart, showView, videoPlus, clumpidx, title,
                                subTitle, desc, credits, date, category, keyword, language, origLanguage,
                                length, icon, urls, country, episodeNum, video, audio, previouslyShown,
                                premiere, lastChance, new, subtitles, rating, starRating, reviews
                        ))
                    }
                }
                i++
            }
            programmes.sortBy{ programme -> programme.start.getTime() }
            return programmes
        }

        private fun getStart(element: Element?): Date?{
            return dateStringToDate(element?.getAttribute("start")?: "")
        }

        private fun getStop(element: Element?): Date?{
            return dateStringToDate(element?.getAttribute("stop")?: "")
        }

        private fun getPDCStart(element: Element?): String?{
            return element?.getAttribute("pdc-start")
        }

        private fun getVPSStart(element: Element?): String?{
            return element?.getAttribute("vps-start")
        }

        private fun getShowView(element: Element?): String?{
            return element?.getAttribute("showview")
        }

        private fun getVideoPlus(element: Element?): String?{
            return element?.getAttribute("videoplus")
        }

        private fun getClumpidx(element: Element?): String?{
            return element?.getAttribute("clumpidx")
        }

        private fun getTitle(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("title")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangTitle = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang  = getLang(subElement)
                val title = subElement?.textContent

                if(title != null){multiLangTitle.add(LanguageString(lang?:"", title))}
                i++
            }

            return multiLangTitle
        }

        private fun getSubTitle(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("sub-title")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangSubTitle = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang        = getLang(subElement)
                val subTitle    = subElement?.textContent

                if(subTitle != null){multiLangSubTitle.add(LanguageString(lang?:"", subTitle))}
                i++
            }

            return multiLangSubTitle
        }

        private fun getDesc(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("desc")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangDesc = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang    = getLang(subElement)
                val desc    = subElement?.textContent

                if(desc != null){multiLangDesc.add(LanguageString(lang?:"", desc))}
                i++
            }

            return multiLangDesc
        }

        private fun getCredits(element: Element?): Programme.Credits?{
            val subElements = element?.getElementsByTagName("credits")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.Credits(
                    getDirectors(subElements.get(0)),
                    getActors(subElements.get(0)),
                    getWriters(subElements.get(0)),
                    getAdapters(subElements.get(0)),
                    getProducers(subElements.get(0)),
                    getComposers(subElements.get(0)),
                    getEditors(subElements.get(0)),
                    getPresenters(subElements.get(0)),
                    getCommentators(subElements.get(0)),
                    getGuests(subElements.get(0))
            )
        }

        private fun getDirectors(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("director")
            if(subElements == null || subElements.length < 1){return null}

            val directors = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val director = subElement?.textContent

                if(director != null){ directors.add(director) }
                i++
            }

            return directors
        }

        private fun getActors(element: Element?): ArrayList<Programme.Credits.Actor>?{
            val subElements = element?.getElementsByTagName("actor")
            if(subElements == null || subElements.length < 1){return null}

            val actors = ArrayList<Programme.Credits.Actor>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val role = getRole(subElement)
                val actor = subElement?.textContent

                actors.add(Programme.Credits.Actor(role, actor))
                i++
            }

            return actors
        }

        private fun getRole(element: Element?): String?{
            return element?.getAttribute("rote")
        }

        private fun getWriters(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("writer")
            if(subElements == null || subElements.length < 1){return null}

            val writers = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val writer = subElement?.textContent

                if(writer != null){ writers.add(writer) }
                i++
            }

            return writers
        }

        private fun getAdapters(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("adapter")
            if(subElements == null || subElements.length < 1){return null}

            val adapters = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val adapter = subElement?.textContent

                if(adapter != null){ adapters.add(adapter) }
                i++
            }

            return adapters
        }

        private fun getProducers(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("producer")
            if(subElements == null || subElements.length < 1){return null}

            val producers = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val producer = subElement?.textContent

                if(producer != null){ producers.add(producer) }
                i++
            }

            return producers
        }

        private fun getComposers(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("composer")
            if(subElements == null || subElements.length < 1){return null}

            val composers = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val composer = subElement?.textContent

                if(composer != null){ composers.add(composer) }
                i++
            }

            return composers
        }

        private fun getEditors(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("editor")
            if(subElements == null || subElements.length < 1){return null}

            val editors = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val editor = subElement?.textContent

                if(editor != null){ editors.add(editor) }
                i++
            }

            return editors
        }

        private fun getPresenters(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("presenter")
            if(subElements == null || subElements.length < 1){return null}

            val presenters = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val presenter = subElement?.textContent

                if(presenter != null){ presenters.add(presenter) }
                i++
            }

            return presenters
        }

        private fun getCommentators(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("commentator")
            if(subElements == null || subElements.length < 1){return null}

            val commentators = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val commentator = subElement?.textContent

                if(commentator != null){ commentators.add(commentator) }
                i++
            }

            return commentators
        }

        private fun getGuests(element: Element?): ArrayList<String>?{
            val subElements = element?.getElementsByTagName("guest")
            if(subElements == null || subElements.length < 1){return null}

            val guests = ArrayList<String>()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val guest = subElement?.textContent

                if(guest != null){ guests.add(guest) }
                i++
            }

            return guests
        }

        private fun getDate(element: Element?): String?{
            return element?.getElementsByTagName("date")?.get(0)?.textContent
        }

        private fun getCategory(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("category")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangCategory = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang = getLang(subElement)
                val category = subElement?.textContent

                if(category != null){multiLangCategory.add(LanguageString(lang?:"", category))}
                i++
            }

            return multiLangCategory
        }

        private fun getKeyword(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("keyword")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangKeyword = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang = getLang(subElement)
                val keyword = subElement?.textContent

                if(keyword != null){multiLangKeyword.add(LanguageString(lang?:"", keyword))}
                i++
            }

            return multiLangKeyword
        }

        private fun getLanguage(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("language")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangLanguage = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang = getLang(subElement)
                val language = subElement?.textContent

                if(language != null){multiLangLanguage.add(LanguageString(lang?:"", language))}
                i++
            }

            return multiLangLanguage
        }

        private fun getOrigLanguage(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("origLanguage")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangOrigLanguage = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang = getLang(subElement)
                val origLanguage = subElement?.textContent

                if(origLanguage != null){multiLangOrigLanguage.add(LanguageString(lang?:"", origLanguage))}
                i++
            }

            return multiLangOrigLanguage
        }

        private fun getLength(element: Element?): Programme.Length?{
            val subElements = element?.getElementsByTagName("length")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.Length(
                    getUnits(subElements.get(0)),
                    subElements.get(0)?.textContent
            )
        }

        private fun getUnits(element: Element?): String?{
            return element?.getAttribute("units")
        }

        private fun getCountry(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("country")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangCountry = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang = getLang(subElement)
                val country = element?.getElementsByTagName("wcountry").get(i)?.textContent

                if(country != null){multiLangCountry.add(LanguageString(lang?:"", country))}
                i++
            }

            return multiLangCountry
        }

        private fun getEpisodeNum(element: Element?): Programme.EpisodeNum?{
            val subElements = element?.getElementsByTagName("episode-num")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.EpisodeNum(
                    getSystem(subElements.get(0)),
                    subElements.get(0)?.textContent
            )
        }

        private fun getSystem(element: Element?): String?{
            return element?.getAttribute("system")
        }

        private fun getVideo(element: Element?): Programme.Video?{
            val subElements = element?.getElementsByTagName("video")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.Video(
                    getPresent(subElements.get(0)),
                    getColour(subElements.get(0)),
                    getAspect(subElements.get(0)),
                    getQuality(subElements.get(0))
            )
        }

        private fun getPresent(element: Element?): String?{
            return element?.getElementsByTagName("present")?.get(0)?.textContent
        }

        private fun getColour(element: Element?): String?{
            return element?.getElementsByTagName("colour")?.get(0)?.textContent
        }

        private fun getAspect(element: Element?): String?{
            return element?.getElementsByTagName("aspect")?.get(0)?.textContent
        }

        private fun getQuality(element: Element?): String?{
            return element?.getElementsByTagName("quality")?.get(0)?.textContent
        }

        private fun getAudio(element: Element?): Programme.Audio?{
            val subElements = element?.getElementsByTagName("audio")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.Audio(
                    getPresent(subElements.get(0)),
                    getStereo(subElements.get(0))
            )
        }

        private fun getStereo(element: Element?): String?{
            return element?.getElementsByTagName("stereo")?.get(0)?.textContent
        }

        private fun getPreviouslyShown(element: Element?): Programme.PreviouslyShown?{
            val subElements = element?.getElementsByTagName("previously-shown")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.PreviouslyShown(
                    getStart(subElements.get(0)),
                    getChannel(subElements.get(0))
            )
        }

        private fun getChannel(element: Element?): String?{
            return element?.getElementsByTagName("channel")?.get(0)?.textContent
        }

        private fun getPremiere(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("premiere")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangPremiere = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang = getLang(subElement)
                val premiere = subElement?.textContent

                if(premiere != null){multiLangPremiere.add(LanguageString(lang?:"", premiere))}
                i++
            }

            return multiLangPremiere
        }

        private fun getLastChance(element: Element?): MultiLanguageString?{
            val subElements = element?.getElementsByTagName("last-chance")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangLastChance = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val lang = getLang(subElement)
                val lastChance = subElement?.textContent

                if(lastChance != null){multiLangLastChance.add(LanguageString(lang?:"", lastChance))}
                i++
            }

            return multiLangLastChance
        }

        private fun getNew(element: Element?): Boolean{
            return element?.getElementsByTagName("new")?.get(0) != null
        }

        private fun getSubtitles(element: Element?): Programme.Subtitles?{
            val subElements = element?.getElementsByTagName("subtitles")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.Subtitles(
                    getType(subElements.get(0)),
                    getLanguage(subElements.get(0)).toString()
            )
        }

        private fun getType(element: Element?): String?{
            return element?.getAttribute("type")
        }

        private fun getRating(element: Element?): Programme.Rating?{
            val subElements = element?.getElementsByTagName("rating")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.Rating(
                    getSystem(subElements.get(0)),
                    getValue(subElements.get(0)),
                    getIcon(subElements.get(0))
            )
        }

        private fun getValue(element: Element?): String?{
            return element?.getAttribute("value")
        }

        private fun getStarRating(element: Element?): Programme.StarRating?{
            val subElements = element?.getElementsByTagName("star-rating")
            if(subElements == null || subElements.length < 1){return null}

            return Programme.StarRating(
                    getSystem(subElements.get(0)),
                    getValue(subElements.get(0)),
                    getIcon(subElements.get(0))
            )
        }

        private fun getReview(element: Element?): Programme.Review?{
            val subElements = element?.getElementsByTagName("review")
            if(subElements == null || subElements.length < 1){return null}

            val multiLangType       = MultiLanguageString()
            val multiLangSource     = MultiLanguageString()
            val multiLangReviewer   = MultiLanguageString()
            val multiLangReview     = MultiLanguageString()

            var i = 0
            while(i < subElements.length) {
                val subElement = subElements.get(i)

                val type = getType(subElement)
                val source = getSource(subElement)
                val reviewer = getReviewer(subElement)
                val lang = getLang(subElement)
                val review = subElement?.textContent

                if(type != null){multiLangType.add(LanguageString(lang?:"", type))}
                if(source != null){multiLangSource.add(LanguageString(lang?:"", source))}
                if(reviewer != null){multiLangReviewer.add(LanguageString(lang?:"", reviewer))}
                if(review != null){multiLangReview.add(LanguageString(lang?:"", review))}
                i++
            }

            return Programme.Review(multiLangType, multiLangSource, multiLangReviewer, multiLangReview)
        }

        private fun getSource(element: Element?): String?{
            return element?.getAttribute("source")
        }

        private fun getReviewer(element: Element?): String?{
            return element?.getAttribute("reviewer")
        }
    }
}
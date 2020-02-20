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

object FeedbackWebWindow: Window(
        title = "",
        contentHTML = "",
        isBoundless = true
){
    override fun show(showTime: Int?) {
        val formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSehWsf1J8sSzPpXHRfFg7mqAsCC1q5dJpef2W6YvNFCrIW-8g/viewform?usp=pp_url"
        val coreVersionArg = "entry.133709146=${coreVersion}"
        val appVersionArg = "entry.759953459=${appVersion}"
        val runningOsArg = "entry.272098163=${RunnerInfo.getOsName()}"
        val runningBrowserArg = "entry.1391825326=${RunnerInfo.getBrowserName()}"
        val logArg = "entry.1270012498=${encodeURIComponent(getConsoleLogs())}"
        val src = "$formUrl&$coreVersionArg&$appVersionArg&$runningOsArg&$runningBrowserArg&$logArg"
        contentArea.innerHTML = """<iframe style="width:100%;height:100%;" frameBorder="0" src="$src"></iframe>"""
        super.show(showTime)
    }
}
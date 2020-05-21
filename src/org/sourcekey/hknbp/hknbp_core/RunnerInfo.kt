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

import kotlin.browser.window

object RunnerInfo {
    val platform = js("platform")

    /**
     * 獲取系統家族
     * */
    fun getOsFamily(): String?{
        return platform?.os?.family?.toString()
    }

    /**
     * 獲取系統名
     *
     * 此funtion使用其他一個叫Platform.js嘅Lib
     * https://github.com/bestiejs/platform.js/
     * */
    fun getOsName(): String?{
        return platform?.os?.toString()
    }

    /**
     * 獲取瀏覽器名
     *
     * 此funtion使用其他一個叫Platform.js嘅Lib
     * https://github.com/bestiejs/platform.js/
     * */
    fun getBrowserName(): String?{
        return platform?.name?.toString() + " " + platform?.version?.toString()
    }

    /**
     * 獲取iOS版本
     * */
    fun getIOSVersion(): Int?{
        val iOSVersion = js("""
            function(){
                try{
                    if (/iP(hone|od|ad)/.test(navigator.platform)) {
                        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
                        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)][0];
                    }
                }catch(e){return null;}
                return null;
            }
        """) as ()->Int?
        return iOSVersion()
    }

    fun isBelowIOS10(): Boolean{
        return getOsFamily() == "iOS" && (getIOSVersion()?:10) < 10
    }

    fun isTizen(): Boolean{
        return getOsFamily() == "Tizen"
    }

    fun isWebOS(): Boolean{
        return 0 < appVersion.match("webOS")?.size?:0
    }
}
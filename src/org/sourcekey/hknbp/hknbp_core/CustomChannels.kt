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

import org.w3c.dom.parsing.DOMParser
import kotlin.browser.localStorage

object CustomChannels {

    fun get(): ArrayList<Channel> {
        val customChannels = ArrayList<Channel>()
        for(channel in channels){
            if(channel.number < 0){customChannels.add(channel)}
        }
        return customChannels
    }

    fun set(index: Int, customChannel: Channel){
        if(channels.find{ channel: Channel -> channel == customChannel } == null) {
            channels.set(index, customChannel)
        }
    }

    fun add(customChannel: Channel){
        if(channels.find{ channel: Channel -> channel == customChannel } == null){
            channels.add(customChannel)
        }
    }

    fun remove(customChannel: Channel){
        channels.remove(customChannel)
    }
}

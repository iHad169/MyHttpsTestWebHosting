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


/**
 * 使用can-autoplay Lib來檢測運行時可唔可以自動播放
 * https://github.com/video-dev/can-autoplay
 *
 * 因依家啲瀏覽器唔準(出聲)自動播放
 * */
object CanAutoplay {
    private val video               = js("{type: 'video', method: 'video', params: null}")
    private val videoMuted          = js("{type: 'videoMuted', method: 'video', params: {muted: true}}")
    private val videoInline         = js("{type: 'videoInline', method: 'video', params: {inline: true}}")
    private val videoInlineMuted    = js("{type: 'videoInlineMuted', method: 'video', params: {inline: true, muted: true}}")


    private fun isNotUseCanAutoplayOnThisRunner(): Boolean{
        var isNotUse = false
        //發現Tizen一運行CanAutoplay就會令頻道播放暫停,所以要篩走用Tizen系統嘅設備
        if(RunnerInfo.isTizen()){isNotUse = true}
        //暫時未知webOS係米同Tizen發生同樣問題,孤奢試下唔行 (暫時未諗到點知行緊嘅裝置係webOS,試過getOsFamily()出"Linux x86")
        if(RunnerInfo.isWebOS()){isNotUse = true}
        return isNotUse
    }

    private fun checkCanAutoplay(onCanAutoplay: ()->Unit, onCanNotAutoplay: ()->Unit, autoplayType: dynamic){
        try{
            if(isNotUseCanAutoplayOnThisRunner()){ onCanAutoplay() }else{
                val _canAutoplay: dynamic = js("canAutoplay")
                _canAutoplay[autoplayType.method](autoplayType.params).then(fun(obj: dynamic){
                    var result: Boolean = false
                    try{result = obj.result}catch(e: dynamic){}
                    if (result == true) {
                        //可以自動播放
                        onCanAutoplay()
                    } else {
                        //唔可以自動播放
                        onCanNotAutoplay()
                    }
                })
            }
        }catch(e:dynamic){onCanAutoplay()}
    }

    fun checkVideoAutoPlayNeedToMute(onNotNeedToMuteCanAutoplay: ()->Unit, onNeedToMuteCanAutoplay: ()->Unit){
        checkCanAutoplay(onNotNeedToMuteCanAutoplay, onNeedToMuteCanAutoplay, videoInline)
    }

    /**
    fun canInlinePlay(onIsCanInlinePlay: (isCanInlinePlay: Boolean)->Unit){
        checkCanAutoplay(
                fun(){onIsCanInlinePlay(true)},
                fun(){onIsCanInlinePlay(false)},
                videoInlineMuted
        )
    }*/

    init {
        checkCanAutoplay(fun(){}, fun(){println(video.type+": 唔可以自動播放")}, video)
        checkCanAutoplay(fun(){}, fun(){println(videoMuted.type+": 唔可以自動播放")}, videoMuted)
        checkCanAutoplay(fun(){}, fun(){println(videoInline.type+": 唔可以自動播放")}, videoInline)
        checkCanAutoplay(fun(){}, fun(){println(videoInlineMuted.type+": 唔可以自動播放")}, videoInlineMuted)
    }
}
/*
//如果iOS就唔好用CanAutoplay來檢查可唔可唔靜音自動播放
//因為
if(!RunnerInfo.isIOS()){
    val _canAutoplay: dynamic = js("canAutoplay")
    _canAutoplay[autoplayType.method](autoplayType.params).then(fun(obj: dynamic){
        var result: Boolean = false
        try{result = obj.result}catch(e: dynamic){}
        if (result == true) {
            //可以自動播放
            onCanAutoplay()
        } else {
            //唔可以自動播放
            onCanNotAutoplay()
        }
    })
}else{ onCanAutoplay() }*/
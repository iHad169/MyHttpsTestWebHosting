/**
 * Track嘅class
 * @param {String} id Track嘅編號,用來識別
 * @param {String} name Track嘅名
 * */
function TrackDescription(id, name){
   var obj = {};
   obj.id = id;
   obj.name = name;
   return obj;
}

/**
 * 存底callHKNBPCoreFunction要求
 * 為之後return返來嘅值執行onReturn
 * 實淺CallBackFunction原理
 */
var callHKNBPCoreFunctionList = [];

/**
 * 刪除要刪除嘅caller響callHKNBPCoreFunctionList當中
 */
function removeObjFromcallHKNBPCoreFunctionList(caller){
 for(var i = 0; i < callHKNBPCoreFunctionList.length; i++){
    if (callHKNBPCoreFunctionList[i] === caller) {
      callHKNBPCoreFunctionList.splice(i, 1);
    }
 }
}

/**
 * 設定被call時要執行嘅野
 */
window.addEventListener("message", function(event){
   var callMessage = JSON.parse(event.data);
   if(callMessage.name === "IframePlayer"){
     for(var i = 0; i < callHKNBPCoreFunctionList.length; i++){
        if (callHKNBPCoreFunctionList[i].id == callMessage.id) {
          callHKNBPCoreFunctionList[i].onReturn(callMessage.returnValue)
          removeObjFromcallHKNBPCoreFunctionList(callHKNBPCoreFunctionList[i]);
        }
     }
   }else if(callMessage.name === "HKNBPCore"){
     var onReturn = function(returnValue){
         var obj = callMessage;
         obj.returnValue = returnValue;
         window.parent.postMessage(JSON.stringify(obj), "*");
     }
     eval(callMessage.evalScript);
   }
}, false);

/**
 * 去call HKNBPCore嘅Function
 */
function callHKNBPCoreFunction(functionName, value, onReturn){
   var caller = {};
   caller.functionName = functionName;
   caller.value = value;
   caller.name = "IframePlayer";
   caller.id = new Date().getTime().toString() + Math.random().toString();
   caller.onReturn = onReturn;
   callHKNBPCoreFunctionList.push(caller);
   window.setTimeout(function(){
     removeObjFromcallHKNBPCoreFunctionList(caller); //如果太耐冇return就響List自動清除免堆垃圾
   }, 60000);
   window.parent.postMessage(JSON.stringify(caller), "*");
}

/**
 * 當播放器播放緊頻道時
 * 需要設定call呢個function()
 * 向HKNBP_Core發送呢個IframePlayer正播放緊頻道
 * */
var onIframePlayerPlaying = function(){
   callHKNBPCoreFunction("onPlaying", "", function(){});
};

/**
 * 當播放器冇播放頻道時
 * 需要設定call呢個function()
 * 向HKNBP_Core發送呢個IframePlayer嘅播放器依家冇播放緊頻道
 * 如call左一次onIframePlayerNotPlaying()
 * 響一段時間之內冇再call onIframePlayerPlaying()嘅話
 * 將會刷新此IframePlayer
 * */
var onIframePlayerNotPlaying = function(){
   callHKNBPCoreFunction("onNotPlaying", "", function(){});
};

/**
 * 當播放器播放頻道發現運行裝置不支援個頻道嘅訊號格式時
 * 需要設定call呢個function()
 * 向HKNBP_Core發送呢個IframePlayer播放依家發現運行裝置不支援個頻道嘅訊號格式
 * */
var onIframePlayerDeviceNotSupportFormat = function(){
   callHKNBPCoreFunction("onDeviceNotSupportFormat", "", function(){});
};

/**
 * 當播放器無法接收頻道訊號時(可能: 頻道源無效,頻道源伺服器瓜左)
 * 需要設定call呢個function()
 * 向HKNBP_Core發送呢個IframePlayer播放依家嘅頻道源無效
 * */
var onIframePlayerCannotReceiveChannelSignal = function(){
   callHKNBPCoreFunction("onCannotReceiveChannelSignal", "", function(){});
};

/**
 * 獲取URL參數值
 *
 * 因為有啲舊瀏覽器唔支援URL().searchParams.get()
 *
 * @param {paramName: String} 要獲取參數名
 * @return {param: String} 參數值
 * */
function getUrlParams(paramName) {
 var url = window.location.href
 var vars = {};
 var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi,
 function(m,key,value) {
   vars[key] = value;
 });
 return vars[paramName];
}

/**
 * 在URL參數讀取 片源
 * 並初始化IframePlayer
 */
onIframePlayerInit(decodeURIComponent(getUrlParams("sourceSrc")));

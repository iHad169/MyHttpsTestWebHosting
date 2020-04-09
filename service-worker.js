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

/**
 * 成個程式嘅版本名
 *
 * 控制更新cache版本
 * 修改版本名今用戶進行更新新版
 */
var coreVersion = "v2020.04_3";

/**
 * 檢查依家運行係米ServiceWorker
 *
 * 由於希望以一個位置放置版本名
 * 而最後決定響ServiceWorker上放置
 * 使其他地方容易讀取
 * 但此方法需要Call呢個.js兩次
 * 一次由 <script src="service-worker.js"> 去Call
 * 可在其他地方get coreVersion值
 * 一次由 navigator.serviceWorker.register('service-worker.js') 去Call
 * 可註冊原本ServiceWorker要執行嘅程序
 * 所以此if()係檢查到時係邊個方法去Call
 * 作不同情況下使用
 */
if(self.registration){
    // 使用precache功能，在offline下也可以執行
    var cacheFiles = [
        ".",
        "index.html",
        "consent.html",
        "watching-counter.html",
        "manifest.json",
        "css/animation.css",
        "css/fontello.css",
        "css/fontello-codes.css",
        "css/fontello-embedded.css",
        "data/dialogue.json",
        "data/official_channels.xml",
        "font/fontello.eot",
        "font/fontello.svg",
        "font/fontello.ttf",
        "font/fontello.woff",
        "font/fontello.woff2",
        "iframePlayer/hknbp-iframeplayer-bridge.js",
        "iframePlayer/videojs.html",
        "iframePlayer/youtube_api.html",
        "img/logo.png",
        "img/nullIcon.png",
        "js/jquery.tabbable.js",
        "out/production/HKNBP_Core/HKNBP_Core.js",

        "https://polyfill.io/v3/polyfill.min.js?features=default%2Ces5%2Ces6",
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        "https://video-dev.github.io/can-autoplay/build/can-autoplay.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.5/platform.min.js",
        "https://cdn.jsdelivr.net/npm/kotlin@1.3.71/kotlin.js",

        "https://vjs.zencdn.net/7.8.0/video-js.min.css",
        "https://vjs.zencdn.net/7.8.0/video.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.9.3/dash.mediaplayer.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-dash/2.9.3/videojs-dash.min.js"
    ];

    importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

    // 檢查Workbox
    if (workbox) {
        //console.log("Yay! Workbox is loaded 🎉");
    } else {
        console.log("Boo! Workbox didn't load 😬");
    }

    // Cache名 設置
    workbox.core.setCacheNameDetails({
        prefix: "HKNBP",
        suffix: coreVersion,
        precache: "precache",
        runtime: "runtime-cache"
    });

    // 使用precache功能，在offline下也可以執行
    workbox.precaching.precacheAndRoute(cacheFiles, {
        // Ignore all URL parameters.
        ignoreURLParametersMatching: [/.*/]
    });

    // 刷新Cache
    self.addEventListener('activate', function(event) {
        event.waitUntil(
            // 揀選舊版本cache去刪除
            caches.keys().then(function(cacheNames){
                console.log("正儲存嘅版本Cache有: " + cacheNames);
                return Promise.all(
                    cacheNames.filter(function(cacheName){
                        // return true為刪除冇使用緊嘅cache
                        return cacheName !== workbox.core.cacheNames.precache;
                    }).map(function(cacheName){
                        console.log("刪除" + cacheName + "版本Cache");
                        // 被filter判定為要刪除嘅cache去刪除
                        return caches.delete(cacheName);
                    })
                );
            }).then(function(){
                return self.clients.claim();
            })
        );
    });
}
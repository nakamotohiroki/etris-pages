if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/etris-pages/_next/static/chunks/121-2ffb4b4cf2666096.js",revision:"2ffb4b4cf2666096"},{url:"/etris-pages/_next/static/chunks/14dc3453-4ee2857edc119f71.js",revision:"4ee2857edc119f71"},{url:"/etris-pages/_next/static/chunks/260-a72dc1bb4ad913b1.js",revision:"a72dc1bb4ad913b1"},{url:"/etris-pages/_next/static/chunks/528-48a8e5b694997cb1.js",revision:"48a8e5b694997cb1"},{url:"/etris-pages/_next/static/chunks/664-806b52bf69b97e98.js",revision:"806b52bf69b97e98"},{url:"/etris-pages/_next/static/chunks/675-c8baa8da81ed0f38.js",revision:"c8baa8da81ed0f38"},{url:"/etris-pages/_next/static/chunks/822-539eea3892b9a4b8.js",revision:"539eea3892b9a4b8"},{url:"/etris-pages/_next/static/chunks/861-9ebf5f066c06a23e.js",revision:"9ebf5f066c06a23e"},{url:"/etris-pages/_next/static/chunks/901-86acaf844165084a.js",revision:"86acaf844165084a"},{url:"/etris-pages/_next/static/chunks/94726e6d-be776a0ccdd066b5.js",revision:"be776a0ccdd066b5"},{url:"/etris-pages/_next/static/chunks/964-3bcf01096ae72762.js",revision:"3bcf01096ae72762"},{url:"/etris-pages/_next/static/chunks/ea88be26-0b8b202a1eea634a.js",revision:"0b8b202a1eea634a"},{url:"/etris-pages/_next/static/chunks/fb7d5399-fd33293821970ac6.js",revision:"fd33293821970ac6"},{url:"/etris-pages/_next/static/chunks/framework-2c16ac744b6cdea6.js",revision:"2c16ac744b6cdea6"},{url:"/etris-pages/_next/static/chunks/main-a4a90d6de4321c8c.js",revision:"a4a90d6de4321c8c"},{url:"/etris-pages/_next/static/chunks/pages/_app-166efec3bdb0d7fb.js",revision:"166efec3bdb0d7fb"},{url:"/etris-pages/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/etris-pages/_next/static/chunks/pages/createImage-0bd64edb9a2392db.js",revision:"0bd64edb9a2392db"},{url:"/etris-pages/_next/static/chunks/pages/index-60f19e2aa3181378.js",revision:"60f19e2aa3181378"},{url:"/etris-pages/_next/static/chunks/pages/play-9186a493adcfdca4.js",revision:"9186a493adcfdca4"},{url:"/etris-pages/_next/static/chunks/pages/test-7765b2bca428290d.js",revision:"7765b2bca428290d"},{url:"/etris-pages/_next/static/chunks/pages/test1-7eb67f6770dda3b2.js",revision:"7eb67f6770dda3b2"},{url:"/etris-pages/_next/static/chunks/pages/tutorial-d766081e24b0ff9b.js",revision:"d766081e24b0ff9b"},{url:"/etris-pages/_next/static/chunks/pages/webGL-98a76cf929061f2d.js",revision:"98a76cf929061f2d"},{url:"/etris-pages/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/etris-pages/_next/static/chunks/webpack-6e94be504cd9a072.js",revision:"6e94be504cd9a072"},{url:"/etris-pages/_next/static/css/052c21629f1f1eef.css",revision:"052c21629f1f1eef"},{url:"/etris-pages/_next/static/css/e48dc4a4b6b6638e.css",revision:"e48dc4a4b6b6638e"},{url:"/etris-pages/_next/static/css/f363d5d599215a17.css",revision:"f363d5d599215a17"},{url:"/etris-pages/_next/static/css/f8dd4688dec96d00.css",revision:"f8dd4688dec96d00"},{url:"/etris-pages/_next/static/m1fbiIthJfGqX_u75RN11/_buildManifest.js",revision:"4df3d6785fe3f2be89f878648b3ffa83"},{url:"/etris-pages/_next/static/m1fbiIthJfGqX_u75RN11/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/etris-pages/animation/back-arrow.json",revision:"84a485704127b82c87c9d3341e73fe01"},{url:"/etris-pages/animation/dropZone.json",revision:"418abd2b8d7f4496dec4bc9ea1d8111a"},{url:"/etris-pages/animation/loading.json",revision:"2a7bcaa2c064077cbdca0dc28916887c"},{url:"/etris-pages/animation/loading_block.json",revision:"a8ff8cef7f16d3a7292a5af5bda313e5"},{url:"/etris-pages/animation/success.json",revision:"8a7457b22388bd5317de8d4e7e09a233"},{url:"/etris-pages/animation/test.json",revision:"ccd951dfec99dd080757abc76ff63c43"},{url:"/etris-pages/animation/wait-loading.json",revision:"41c0f8348787fff3ebfe7df2e457d377"},{url:"/etris-pages/favicon.ico",revision:"9bafcb42b9581a85d4101cbdc76cc595"},{url:"/etris-pages/icon-192x192.png",revision:"f84f2d469149accd46b32a1ad8dbfb30"},{url:"/etris-pages/icon-256x256.png",revision:"6a308fe78b341ad710be8efe3caa55a6"},{url:"/etris-pages/icon-384x384.png",revision:"bb58bdca1b75508c3aa2dc697dc3d56e"},{url:"/etris-pages/icon-512x512.png",revision:"4022cb2e0e691d3b4e961556c4310d8b"},{url:"/etris-pages/img/dummy-image-square.jpeg",revision:"ae613d5f84ec0352af61f417401d1834"},{url:"/etris-pages/img/fetchImageMock/1 (0).png",revision:"208388d1d38df93d941d2025578467b1"},{url:"/etris-pages/img/fetchImageMock/1 (1).png",revision:"7ab970243f32639db866a1a057acda25"},{url:"/etris-pages/img/fetchImageMock/1 (10).png",revision:"dd46576c0a44ce62b32acc4328bf4328"},{url:"/etris-pages/img/fetchImageMock/1 (2).png",revision:"d686b3f7b23099e7d7a8fa09fa971ded"},{url:"/etris-pages/img/fetchImageMock/1 (3).png",revision:"b4e3442b1069f2de747859355dac1832"},{url:"/etris-pages/img/fetchImageMock/1 (4).png",revision:"8fe8c23659047025b330915fc9ee81e4"},{url:"/etris-pages/img/fetchImageMock/1 (5).png",revision:"7feafa7d56d6d8fda8baa4f92233bd9c"},{url:"/etris-pages/img/fetchImageMock/1 (6).png",revision:"7e878c7f7c597ada19d08eae1a4d3eab"},{url:"/etris-pages/img/fetchImageMock/1 (7).png",revision:"8bafeace57d48e4cb651b2443420f129"},{url:"/etris-pages/img/fetchImageMock/1(1).png",revision:"2f548fdc717e97ba586119994abef867"},{url:"/etris-pages/img/fetchImageMock/20221020174414xzfoy _00.png",revision:"0f8a3b1793d85d610616f2cc6616bfa1"},{url:"/etris-pages/img/fetchImageMock/20221028172023qansb _00 .png",revision:"dba5072829257276a67d4ec7eaad4015"},{url:"/etris-pages/img/fetchImageMock/20230318234039ddzkk_00.png",revision:"e74df059e83da98018acbb842ca4bb0b"},{url:"/etris-pages/img/fetchImageMock/20230319005403kxzfs_00.png",revision:"239b87e0104db09bfec89fb190da56d2"},{url:"/etris-pages/img/fetchImageMock/ダウンロード (13).png",revision:"cd7e9fa5e204b2f74d62a7c7f2f074e0"},{url:"/etris-pages/img/fetchImageMock/ダウンロード (14).png",revision:"49f2a6ef88f7f0a243be99e42450404a"},{url:"/etris-pages/img/fetchImageMock/ダウンロード (7).png",revision:"4e750fab3d951609fbe0e2ec9b179152"},{url:"/etris-pages/img/home/L.png",revision:"fc333b2c822a714b19a2ca9306e58eaa"},{url:"/etris-pages/img/home/R.png",revision:"78ee06eccc603d4917a3b71bf823ff64"},{url:"/etris-pages/img/home/bk.png",revision:"61505362ecd8dcf5234c364410e77a93"},{url:"/etris-pages/img/home/bk.webp",revision:"23bcde7a77636d4f4bdab1fd40446194"},{url:"/etris-pages/img/home/cont-button.png",revision:"45029f9e7626c633b1cc8bbc3525a626"},{url:"/etris-pages/img/home/controller_button.png",revision:"fad9d75381b08611eae3a0a6c393e1bb"},{url:"/etris-pages/img/home/l-button.png",revision:"b70cb4124de14912388f1e940011a6b8"},{url:"/etris-pages/img/home/r-button.png",revision:"f1ca28b4a85969a26b5baf0ab59834b2"},{url:"/etris-pages/img/home/titleLogo.png",revision:"af468aa96041449ca4d12efc4fc243f4"},{url:"/etris-pages/img/home/titleLogo.webp",revision:"525130fce2a385a2da2f029b958439f3"},{url:"/etris-pages/img/home/white.svg",revision:"782a4e23ebafc5a3d5b5c9f72569bdd1"},{url:"/etris-pages/img/icon/arrow_down.svg",revision:"2e85345cd4e9731c3aa3dbd8fb02325f"},{url:"/etris-pages/img/icon/arrow_down_gray.svg",revision:"737b9bab93071fe51719660fdbf6f005"},{url:"/etris-pages/img/icon/arrow_up.svg",revision:"a6f71fce1d5e7352cf5cdbc3a2740fee"},{url:"/etris-pages/img/icon/create.svg",revision:"bececbd77d739f369f26ab6a7f0b7d1b"},{url:"/etris-pages/img/icon/reload.svg",revision:"44c90db0f2db2f205a63c994c645f939"},{url:"/etris-pages/img/icon/upload.png",revision:"03781186221e55ce8a3d516a7ff3bcfc"},{url:"/etris-pages/img/icon/upload.svg",revision:"b7a2aa835a336f5f3557ede1550811d8"},{url:"/etris-pages/img/logo.png",revision:"7fcba7e84f014d157cbd5d579864c0a6"},{url:"/etris-pages/img/model/2.jpg",revision:"d7de5915a87265bb0d21d6e9c77c4261"},{url:"/etris-pages/index.html",revision:"62c6637f073187f7039a58707884a384"},{url:"/etris-pages/manifest.json",revision:"3983d1719c592ca1afde92f411264c47"},{url:"/etris-pages/screenshot_home_narrow.png",revision:"a3278fea678009924757cc95dd8a5ab8"},{url:"/etris-pages/screenshot_home_wide.png",revision:"7d030052e7b2c6619aff661eb5c18c46"},{url:"/etris-pages/screenshot_play_narrow.png",revision:"e14eb551b365734eb7de1ae49f15604b"},{url:"/etris-pages/screenshot_play_wide.png",revision:"a4b88ef27e6e6d09deb43cc3b1908651"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/etris-pages",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

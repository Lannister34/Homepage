if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-ef4f420c"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/images/audio_icon.svg",revision:"76d346773c296fb65ae556fd2c7ca87e"},{url:"assets/images/avatar.png",revision:"3de979c34a901ee6925cd7c4d0c2fe6c"},{url:"assets/images/favicon-192x192.png",revision:"374f79f3b81fe01f562952781e684f72"},{url:"assets/images/preview.png",revision:"a15ec938ddbbd915ccc981ac8b133064"},{url:"assets/sounds/greetings.mp3",revision:"aef6278f126c2e302703e534a02d9fe9"},{url:"assets/sounds/mistake.mp3",revision:"3302c3742c8d993fc131805ff8d782da"},{url:"assets/sounds/sylvanas.mp3",revision:"ffee540a99bcc03a3d26d7e364aadf51"},{url:"favicon.ico",revision:"8a9575f80dcf13b279edaec78fb8f36f"},{url:"index.html",revision:"614f3fb7dd8abf7813f7e1e2bdfb9e74"},{url:"ru-ru/assets/images/audio_icon.svg",revision:"76d346773c296fb65ae556fd2c7ca87e"},{url:"ru-ru/assets/images/avatar.png",revision:"3de979c34a901ee6925cd7c4d0c2fe6c"},{url:"ru-ru/assets/images/favicon-192x192.png",revision:"374f79f3b81fe01f562952781e684f72"},{url:"ru-ru/assets/images/preview.png",revision:"0cd0c3b91cdec574aaed5ace6773ffca"},{url:"ru-ru/assets/sounds/greetings.mp3",revision:"fb4f1a71631852bc8adb40dba690eb6f"},{url:"ru-ru/assets/sounds/mistake.mp3",revision:"55e921120a5a99c126fca46f35a05b1b"},{url:"ru-ru/assets/sounds/sylvanas.mp3",revision:"b5a20c41503d8cd6bfb6b3c2d095e015"},{url:"ru-ru/favicon.ico",revision:"8a9575f80dcf13b279edaec78fb8f36f"},{url:"ru-ru/index.html",revision:"abc252e6d1bc7634afac9d8299b2880d"},{url:"uk-ua/assets/images/audio_icon.svg",revision:"76d346773c296fb65ae556fd2c7ca87e"},{url:"uk-ua/assets/images/avatar.png",revision:"3de979c34a901ee6925cd7c4d0c2fe6c"},{url:"uk-ua/assets/images/favicon-192x192.png",revision:"374f79f3b81fe01f562952781e684f72"},{url:"uk-ua/assets/images/preview.png",revision:"27fbc67caee348d28cca3882087d79cf"},{url:"uk-ua/assets/sounds/greetings.mp3",revision:"fb4f1a71631852bc8adb40dba690eb6f"},{url:"uk-ua/assets/sounds/mistake.mp3",revision:"55e921120a5a99c126fca46f35a05b1b"},{url:"uk-ua/assets/sounds/sylvanas.mp3",revision:"b5a20c41503d8cd6bfb6b3c2d095e015"},{url:"uk-ua/favicon.ico",revision:"8a9575f80dcf13b279edaec78fb8f36f"},{url:"uk-ua/index.html",revision:"d0a7cc39742d367c8498ee4e2d28a65f"}],{})}));
//# sourceMappingURL=sw.js.map

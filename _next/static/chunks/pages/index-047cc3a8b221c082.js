(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(6209)}])},6209:function(e,t,a){"use strict";a.r(t);var i=a(4386),l=a(917),s=a(3631),n=a(6172),o=a(3450),r=a(1752),c=a.n(r),d=a(9008),p=a.n(d),u=a(1664),g=a.n(u),m=a(1163),h=a(7294),b=a(6358),_=a(3410),E=a(7541),S=a(6069),I=a.n(S);let{publicRuntimeConfig:N}=c()();t.default=()=>{let e=N&&N.basePath||"";(0,h.useLayoutEffect)(_.Q5);let t=(0,m.useRouter)(),a=t.query.MODEL_IMAGE,[r,c]=(0,h.useState)("string"==typeof a?a:null),[d,u]=(0,h.useState)(b.LA.USE_ROTATE[0].label),[S,L]=(0,h.useState)(b.LA.FALL_SPEED[0].label),[v,f]=(0,h.useState)(b.LA.DIVIDER_NUM[0].label);return(0,h.useEffect)(()=>{let e=sessionStorage.getItem("modelImage");e&&(0,_.R4)(e).then(e=>{c(e||r)});let t=sessionStorage.getItem("useRotate"),a=sessionStorage.getItem("fallSpeed"),i=sessionStorage.getItem("divider");t&&u(t),a&&L(a),i&&f(i)},[]),(0,i.BX)(i.HY,{children:[(0,i.tZ)(p(),{children:(0,i.tZ)("title",{children:"絵トリス"})}),(0,i.BX)("main",{css:(0,l.iv)({paddingTop:"20px"}),children:[(0,i.tZ)(g(),{href:"/createImage",css:(0,l.iv)({color:"white",fontSize:"20px",position:"fixed",top:"0",right:"0",padding:"27px",textDecoration:"underline",cursor:"pointer",backgroundColor:"rgba(0,0,0,0.6)",zIndex:"1","@media only screen and (max-width:767px)":{padding:"15px"}}),children:"AIで画像を生成する"}),(0,i.tZ)("div",{className:I().background,style:{backgroundImage:"url('".concat(e,"/img/home/bk.webp')")}}),(0,i.tZ)("div",{className:I().title,children:(0,i.tZ)("img",{src:"".concat(e,"/img/home/titleLogo.webp"),alt:"etris",sizes:"100%",style:{width:"100%",height:"auto"}})}),(0,i.BX)("div",{className:I().contentWrapper,children:[(0,i.tZ)(s.Z,{className:I().uploader,onDrop:e=>{let t=window.URL.createObjectURL(e[0]);c(t),sessionStorage.setItem("modelImage",t)},children:(0,i.BX)("div",{className:I().uploader__wrapper,css:(0,l.iv)({position:"relative"}),children:[(0,i.tZ)("div",{css:(0,l.iv)({height:"100%",display:r?"block":"none"}),children:(0,i.tZ)("img",{alt:"",className:I().uploader__img,src:r||""})}),(0,i.BX)("div",{css:(0,l.iv)({display:r?"none":"block"}),children:[(0,i.tZ)(o.Z,{json:E}),(0,i.tZ)("img",{alt:"クリックして画像をアップロードしてください",src:"".concat(e,"/img/icon/upload.png"),css:(0,l.iv)({position:"absolute",left:"0",right:"0",top:"0",bottom:"0",margin:"auto",width:"13%"})})]})]})}),(0,i.tZ)("div",{className:I().playSetting,children:(0,i.tZ)(n.Z,{labelMaxStringNum:4,settings:[{label:"回転",rollProps:{initLabel:d,options:b.LA.USE_ROTATE,clickCallBack:(e,t)=>{u(t),sessionStorage.setItem("useRotate",t)},valueStringNum:4}},{label:"自動落下",rollProps:{initLabel:S,options:b.LA.FALL_SPEED,clickCallBack:(e,t)=>{L(t),sessionStorage.setItem("fallSpeed",t)},valueStringNum:4}},{label:"分割数",rollProps:{initLabel:v,options:b.LA.DIVIDER_NUM,clickCallBack:(e,t)=>{f(t),sessionStorage.setItem("divider",t)},valueStringNum:4}}]})}),(0,i.BX)("button",{className:I().playButtomWrapper,disabled:null===r,onClick:()=>{r&&t.push({pathname:"play",query:{MODEL_IMAGE:r,USE_ROTATE:d,FALL_SPEED:S,DIVIDER_NUM:v}})},children:[(0,i.tZ)("span",{className:I().playImg}),(0,i.tZ)("span",{className:I().playButton,children:"この画像で遊ぶ"})]})]})]})]})}}},function(e){e.O(0,[498,802,861,664,901,964,528,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(2603)}])},2603:function(e,t,a){"use strict";a.r(t);var i=a(1965),l=a(1752),s=a.n(l),n=a(7294),o=a(1163),r=a(9008),c=a.n(r),d=a(4780),p=a.n(d),u=a(2690),g=a(2081),m=a(917),h=a(9634),_=a(7541),E=a(6767),S=a(1664),I=a.n(S),b=a(1214);let{publicRuntimeConfig:N}=s()();t.default=()=>{let e=N&&N.basePath||"";(0,n.useLayoutEffect)(g.Q5);let t=(0,o.useRouter)(),a=t.query.MODEL_IMAGE,[l,s]=(0,n.useState)("string"==typeof a?a:null),[r,d]=(0,n.useState)(u.LA.USE_ROTATE[0].label),[S,v]=(0,n.useState)(u.LA.FALL_SPEED[0].label),[L,f]=(0,n.useState)(u.LA.DIVIDER_NUM[0].label);return(0,n.useEffect)(()=>{let e=sessionStorage.getItem("modelImage");if(e){let t=(0,g.R4)(e);t.then(e=>{s(e||l)})}let t=sessionStorage.getItem("useRotate"),a=sessionStorage.getItem("fallSpeed"),i=sessionStorage.getItem("divider");t&&d(t),a&&v(a),i&&f(i)},[]),(0,i.BX)(i.HY,{children:[(0,i.tZ)(c(),{children:(0,i.tZ)("title",{children:"絵トリス"})}),(0,i.BX)("main",{css:(0,m.iv)({paddingTop:"20px"}),children:[(0,i.tZ)(I(),{href:"/createImage",css:(0,m.iv)({color:"white",fontSize:"20px",position:"fixed",top:"0",right:"0",padding:"27px",textDecoration:"underline",cursor:"pointer",backgroundColor:"rgba(0,0,0,0.6)",zIndex:"1","@media only screen and (max-width:767px)":{padding:"15px"}}),children:"AIで画像を生成する"}),(0,i.tZ)("div",{className:p().background}),(0,i.tZ)("div",{className:p().title,children:(0,i.tZ)("img",{src:"".concat(e,"/img/home/titleLogo.webp"),alt:"etris",width:300,height:103,sizes:"100%",style:{width:"100%",height:"auto"}})}),(0,i.BX)("div",{className:p().contentWrapper,children:[(0,i.tZ)(h.Z,{className:p().uploader,onDrop:e=>{let t=window.URL.createObjectURL(e[0]);s(t),sessionStorage.setItem("modelImage",t)},children:(0,i.BX)("div",{className:p().uploader__wrapper,css:(0,m.iv)({position:"relative"}),children:[(0,i.tZ)("div",{css:(0,m.iv)({height:"100%",display:l?"block":"none"}),children:(0,i.tZ)("img",{alt:"",className:p().uploader__img,src:l||""})}),(0,i.BX)("div",{css:(0,m.iv)({display:l?"none":"block"}),children:[(0,i.tZ)(E.Z,{speed:.5,json:_}),(0,i.tZ)("img",{alt:"クリックして画像をアップロードしてください",src:"".concat(e,"/img/icon/upload.png"),css:(0,m.iv)({position:"absolute",left:"0",right:"0",top:"0",bottom:"0",margin:"auto",width:"13%"})})]})]})}),(0,i.tZ)("div",{className:p().playSetting,children:(0,i.tZ)(b.Z,{labelMaxStringNum:4,settings:[{label:"回転",rollProps:{initLabel:r,options:u.LA.USE_ROTATE,clickCallBack:(e,t)=>{d(t),sessionStorage.setItem("useRotate",t)},valueStringNum:4}},{label:"自動落下",rollProps:{initLabel:S,options:u.LA.FALL_SPEED,clickCallBack:(e,t)=>{v(t),sessionStorage.setItem("fallSpeed",t)},valueStringNum:4}},{label:"分割数",rollProps:{initLabel:L,options:u.LA.DIVIDER_NUM,clickCallBack:(e,t)=>{f(t),sessionStorage.setItem("divider",t)},valueStringNum:4}}]})}),(0,i.BX)("div",{className:"".concat(p().playButtomWrapper," ").concat(l?p().playButtomWrapper__onImage:""),onClick:()=>{l&&t.push({pathname:"play",query:{MODEL_IMAGE:l,USE_ROTATE:r,FALL_SPEED:S,DIVIDER_NUM:L}})},children:[(0,i.tZ)("span",{className:p().playImg}),(0,i.tZ)("span",{className:p().playButton,children:"この画像で遊ぶ"})]})]})]})]})}}},function(e){e.O(0,[296,802,260,115,664,147,351,253,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
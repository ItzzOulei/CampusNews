(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{41:e=>{e.exports={nav:"Navigation_nav__hP0PW",navIcon:"Navigation_navIcon__gEqdZ",open:"Navigation_open__U_AAa",links:"Navigation_links__8cnFD"}},126:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var n=r(7876);r(6048);var i=r(4232),o=r(8230),l=r.n(o),a=r(41),s=r.n(a),u=r(8731),d=r.n(u);let c=e=>{let{isOpen:t}=e;return(0,n.jsxs)("div",{className:"".concat(d().navTab," ").concat(t?d().open:""),children:[(0,n.jsx)(l(),{href:"/",target:"_blank",title:"HomePage",children:(0,n.jsx)("div",{className:"".concat(d().navTabLinks," ").concat(d().homeLink),children:(0,n.jsx)("p",{children:"Home"})})}),(0,n.jsx)(l(),{href:"/#",target:"_blank",title:"Profile",children:(0,n.jsx)("div",{className:d().navTabLinks,children:(0,n.jsx)("p",{children:"Profil"})})})]})},f=()=>{let[e,t]=(0,i.useState)(!1);return(0,n.jsxs)("nav",{className:s().nav,children:[(0,n.jsxs)("div",{id:"nav-icon3",className:"".concat(s().navIcon," ").concat(e?s().open:""),onClick:()=>{t(!e)},children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]}),(0,n.jsx)("div",{className:s().links,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/#",children:"Profil"})})]})}),(0,n.jsx)(c,{isOpen:e})]})};var p=r(6323),h=r.n(p),g=r(4587),m=r.n(g);let v=()=>(0,n.jsxs)("header",{className:h().header,children:[(0,n.jsx)(l(),{href:"/",children:(0,n.jsxs)("div",{className:h().logoContainer,children:[(0,n.jsx)(m(),{src:"/Repo.png",alt:"Logo",width:50,height:50}),(0,n.jsx)("h1",{children:"CAMPUS NEWS"})]})}),(0,n.jsx)("div",{className:h().logoContainer,children:(0,n.jsx)(f,{})})]});var _=r(7328),b=r.n(_);let y=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(b(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("title",{children:"Campus news"}),(0,n.jsx)("link",{rel:"icon",href:"/Repo.png"})]}),(0,n.jsx)(v,{}),(0,n.jsx)("main",{children:t})]})};function j(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(y,{children:(0,n.jsx)(t,{...r})})}},546:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1026:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=r(4232);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1393:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(4232),i=n.useLayoutEffect,o=n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},1639:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(4252),i=r(7876),o=n._(r(4232)),l=r(6658),a=r(1851),s=r(6225),u=r(8407),d=r(2696),c=r(8265),f=r(2343),p=r(8940),h=r(7469),g=r(1026),m=new Set;function v(e,t,r,n){if((0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(i))return;m.add(i)}e.prefetch(t,r,n).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:m,children:b,prefetch:y=null,passHref:j,replace:x,shallow:w,scroll:P,locale:O,onClick:C,onMouseEnter:S,onTouchStart:E,legacyBehavior:M=!1,...k}=e;r=b,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let R=o.default.useContext(c.RouterContext),N=!1!==y,{href:I,as:z}=o.default.useMemo(()=>{if(!R){let e=_(s);return{href:e,as:m?_(m):e}}let[e,t]=(0,l.resolveHref)(R,s,!0);return{href:e,as:m?(0,l.resolveHref)(R,m):t||e}},[R,s,m]),T=o.default.useRef(I),L=o.default.useRef(z);M&&(n=o.default.Children.only(r));let A=M?n&&"object"==typeof n&&n.ref:t,[D,U,F]=(0,f.useIntersection)({rootMargin:"200px"}),H=o.default.useCallback(e=>{(L.current!==z||T.current!==I)&&(F(),L.current=z,T.current=I),D(e)},[z,I,F,D]),B=(0,g.useMergedRef)(H,A);o.default.useEffect(()=>{R&&U&&N&&v(R,I,z,{locale:O})},[z,I,U,O,N,null==R?void 0:R.locale,R]);let W={ref:B,onClick(e){M||"function"!=typeof C||C(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&!function(e,t,r,n,i,o,l,s){let{nodeName:u}=e.currentTarget;!("A"===u.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,a.isLocalURL)(r)))&&(e.preventDefault(),(()=>{let e=null==l||l;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:o,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})})())}(e,R,I,z,x,w,P,O)},onMouseEnter(e){M||"function"!=typeof S||S(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&v(R,I,z,{locale:O,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){M||"function"!=typeof E||E(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&v(R,I,z,{locale:O,priority:!0,bypassPrefetchedCheck:!0})}};if((0,u.isAbsoluteUrl)(z))W.href=z;else if(!M||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==R?void 0:R.locale;W.href=(null==R?void 0:R.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales)||(0,h.addBasePath)((0,d.addLocale)(z,e,null==R?void 0:R.defaultLocale))}return M?o.default.cloneElement(n,W):(0,i.jsx)("a",{...k,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2343:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(4232),i=r(4754),o="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!o,[d,c]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(u||d)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},a.push(r),l.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!d){let e=(0,i.requestIdleCallback)(()=>c(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,r,t,d,f.current]),[p,d,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2439:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(4252),i=r(8365),o=r(7876),l=i._(r(4232)),a=n._(r(8477)),s=n._(r(9836)),u=r(4915),d=r(6904),c=r(72);r(546);let f=r(8265),p=n._(r(3829)),h=r(1026),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function v(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let _=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:_,fill:b,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:x,setShowAltText:w,sizesInput:P,onLoad:O,onError:C,...S}=e,E=(0,l.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&m(e,p,y,j,x,_,P))},[r,p,y,j,x,C,_,P]),M=(0,h.useMergedRef)(t,E);return(0,o.jsx)("img",{...S,...v(f),loading:g,width:s,height:a,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:M,onLoad:e=>{m(e.currentTarget,p,y,j,x,_,P)},onError:e=>{w(!0),"empty"!==p&&x(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),i=(0,l.useMemo)(()=>{var e;let t=g||n||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:a,onLoadingComplete:s}=e,h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let[v,y]=(0,l.useState)(!1),[j,x]=(0,l.useState)(!1),{props:w,meta:P}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:j});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{...w,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:x,sizesInput:e.sizes,ref:t}),P.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3657:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let n=r(4252),i=r(4915),o=r(2439),l=n._(r(3829));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},3829:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,l=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+l+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4587:(e,t,r)=>{e.exports=r(3657)},4915:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(546);let n=r(5284),i=r(6904);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let s,u,d,{src:c,sizes:f,unoptimized:p=!1,priority:h=!1,loading:g,className:m,quality:v,width:_,height:b,fill:y=!1,style:j,overrideSrc:x,onLoad:w,onLoadingComplete:P,placeholder:O="empty",blurDataURL:C,fetchPriority:S,decoding:E="async",layout:M,objectFit:k,objectPosition:R,lazyBoundary:N,lazyRoot:I,...z}=e,{imgConf:T,showAltText:L,blurComplete:A,defaultLoader:D}=t,U=T||i.imageConfigDefault;if("allSizes"in U)s=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),n=null==(r=U.qualities)?void 0:r.sort((e,t)=>e-t);s={...U,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=z.loader||D;delete z.loader,delete z.srcSet;let H="__next_img_default"in F;if(H){if("custom"===s.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!f&&(f=t)}let B="",W=l(_),q=l(b);if((a=c)&&"object"==typeof a&&(o(a)||void 0!==a.src)){let e=o(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(u=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,B=e.src,!y){if(W||q){if(W&&!q){let t=W/e.width;q=Math.round(e.height*t)}else if(!W&&q){let t=q/e.height;W=Math.round(e.width*t)}}else W=e.width,q=e.height}}let X=!h&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,X=!1),s.unoptimized&&(p=!0),H&&!s.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let G=l(v),K=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:R}:{},L?{}:{color:"transparent"},j),V=A||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:W,heightInt:q,blurWidth:u,blurHeight:d,blurDataURL:C||"",objectFit:K.objectFit})+'")':'url("'+O+'")',Y=V?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[d]})}}({config:s,src:c,unoptimized:p,width:W,quality:G,sizes:f,loader:F});return{props:{...z,loading:X?"lazy":g,fetchPriority:S,width:W,height:q,decoding:E,className:m,style:{...K,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:x||Z.src},meta:{unoptimized:p,priority:h,placeholder:O,fill:y}}}},5284:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5648:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6048:()=>{},6323:e=>{e.exports={header:"Header_header__pXml_",logoContainer:"Header_logoContainer___jykF"}},6556:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(126)}])},7328:(e,t,r)=>{e.exports=r(9836)},8230:(e,t,r)=>{e.exports=r(1639)},8731:e=>{e.exports={navTab:"SideNavbar_navTab__v6zRi",open:"SideNavbar_open__hmPZ_",navTabLinks:"SideNavbar_navTabLinks__IDb2Y",nav:"SideNavbar_nav__UpIoR"}},8940:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(7810),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9836:(e,t,r)=>{"use strict";var n=r(5364);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return f}});let i=r(4252),o=r(8365),l=r(7876),a=o._(r(4232)),s=i._(r(1393)),u=r(9896),d=r(6834),c=r(5648);function f(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(546);let h=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let m=function(e){let{children:t}=e,r=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(d.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9896:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(4252)._(r(4232)).default.createContext({})}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(6556),t(8253))),_N_E=e.O()}]);
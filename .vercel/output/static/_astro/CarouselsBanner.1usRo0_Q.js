import{j as Z}from"./jsx-runtime.n8eUWEGm.js";import{r as W}from"./index.cRtcXttU.js";const Zt=(t,n)=>t?`http://image.tmdb.org/t/p/${n?"original":"w500"}/${t}`:"https://links.papareact.com/o8z",Wt={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function yt(t={}){let n,e,i,c=!1,r=!0,o=!1,u=0,s=0;function f(h,v){e=h;const{mergeOptions:O,optionsAtMedia:w}=v,N=O(Wt,yt.globalOptions),E=O(N,t);if(n=w(E),e.scrollSnapList().length<=1)return;o=n.jump,i=!1;const{eventStore:I,ownerDocument:L}=e.internalEngine(),A=e.rootNode(),T=n.rootNode&&n.rootNode(A)||A;e.on("pointerDown",d),n.stopOnInteraction||e.on("pointerUp",a),n.stopOnMouseEnter&&(I.add(T,"mouseenter",()=>{r=!1,d()}),n.stopOnInteraction||I.add(T,"mouseleave",()=>{r=!0,a()})),n.stopOnFocusIn&&(I.add(T,"focusin",d),n.stopOnInteraction||I.add(T,"focusout",a)),I.add(L,"visibilitychange",()=>{if(L.visibilityState==="hidden")return r=c,d();r&&a()}),n.playOnInit&&e.on("init",a).on("reInit",a)}function y(){i=!0,c=!1,e.off("init",a).off("reInit",a),e.off("pointerDown",d),n.stopOnInteraction||e.off("pointerUp",a),d(),cancelAnimationFrame(u),u=0}function a(){if(i||!r)return;c||e.emit("autoplay:play");const{ownerWindow:h}=e.internalEngine();h.clearInterval(s),s=h.setInterval(l,n.delay),c=!0}function d(){if(i)return;c&&e.emit("autoplay:stop");const{ownerWindow:h}=e.internalEngine();h.clearInterval(s),s=0,c=!1}function S(h){typeof h<"u"&&(o=h),r=!0,a()}function m(){c&&d()}function p(){c&&S()}function b(){return c}function l(){u=requestAnimationFrame(()=>{const{index:h}=e.internalEngine(),v=h.clone().add(1).get(),O=e.scrollSnapList().length-1;n.stopOnLastSnap&&v===O&&d(),e.canScrollNext()?e.scrollNext(o):e.scrollTo(0,o)})}return{name:"autoplay",options:t,init:f,destroy:y,play:S,stop:m,reset:p,isPlaying:b}}yt.globalOptions=void 0;function tn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ct(t){return tn(t)||Array.isArray(t)}function nn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ot(t,n){const e=Object.keys(t),i=Object.keys(n);if(e.length!==i.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),r=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==r?!1:e.every(o=>{const u=t[o],s=n[o];return typeof u=="function"?`${u}`==`${s}`:!Ct(u)||!Ct(s)?u===s:Ot(u,s)})}function zt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function en(t,n){if(t.length!==n.length)return!1;const e=zt(t),i=zt(n);return e.every((c,r)=>{const o=i[r];return Ot(c,o)})}function Lt(t){return typeof t=="number"}function It(t){return typeof t=="string"}function wt(t){return typeof t=="boolean"}function Bt(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function At(t){return Math.sign(t)}function mt(t,n){return M(t-n)}function on(t,n){if(t===0||n===0||M(t)<=M(n))return 0;const e=mt(M(t),M(n));return M(e/t)}function at(t){return ft(t).map(Number)}function B(t){return t[dt(t)]}function dt(t){return Math.max(0,t.length-1)}function Dt(t,n){return n===dt(t)}function Vt(t,n=0){return Array.from(Array(t),(e,i)=>n+i)}function ft(t){return Object.keys(t)}function Ht(t,n){return[t,n].reduce((e,i)=>(ft(i).forEach(c=>{const r=e[c],o=i[c],u=Bt(r)&&Bt(o);e[c]=u?Ht(r,o):o}),e),{})}function Gt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function rn(t,n){const e={start:i,center:c,end:r};function i(){return 0}function c(s){return r(s)/2}function r(s){return n-s}function o(s,f){return It(t)?e[t](s):t(n,s,f)}return{measure:o}}function lt(){let t=[];function n(c,r,o,u={passive:!0}){let s;if("addEventListener"in c)c.addEventListener(r,o,u),s=()=>c.removeEventListener(r,o,u);else{const f=c;f.addListener(o),s=()=>f.removeListener(o)}return t.push(s),i}function e(){t=t.filter(c=>c())}const i={add:n,clear:e};return i}function sn(t,n,e,i){const c=lt(),r=1e3/60;let o=null,u=0,s=0;function f(){c.add(t,"visibilitychange",()=>{t.hidden&&m()})}function y(){S(),c.clear()}function a(b){o||(o=b);const l=b-o;for(o=b,u+=l;u>=r;)e(),u-=r;const g=M(u/r);i(g),s&&n.requestAnimationFrame(a)}function d(){s||(s=n.requestAnimationFrame(a))}function S(){n.cancelAnimationFrame(s),o=null,u=0,s=0}function m(){o=null,u=0}return{init:f,destroy:y,start:d,stop:S,update:e,render:i}}function cn(t,n){const e=t==="y"?"y":"x",i=t==="y"?"x":"y",c=u(),r=s();function o(y){const{width:a,height:d}=y;return e==="x"?a:d}function u(){return e==="y"?"top":n==="rtl"?"right":"left"}function s(){return e==="y"?"bottom":n==="rtl"?"left":"right"}return{scroll:e,cross:i,startEdge:c,endEdge:r,measureSize:o}}function et(t=0,n=0){const e=M(t-n);function i(f){return f<t}function c(f){return f>n}function r(f){return i(f)||c(f)}function o(f){return r(f)?i(f)?t:n:f}function u(f){return e?f-e*Math.ceil((f-n)/e):f}return{length:e,max:n,min:t,constrain:o,reachedAny:r,reachedMax:c,reachedMin:i,removeOffset:u}}function Rt(t,n,e){const{constrain:i}=et(0,t),c=t+1;let r=o(n);function o(d){return e?M((c+d)%c):i(d)}function u(){return r}function s(d){return r=o(d),a}function f(d){return y().set(u()+d)}function y(){return Rt(t,u(),e)}const a={get:u,set:s,add:f,clone:y};return a}function un(t){const n=t==="rtl"?-1:1;function e(c){return c*n}return{apply:e}}function an(t,n,e,i,c,r,o,u,s,f,y,a,d,S,m,p,b,l,g,h){const{cross:v}=t,O=["INPUT","SELECT","TEXTAREA"],w={passive:!1},N=lt(),E=lt(),I=et(50,225).constrain(m.measure(20)),L={mouse:300,touch:400},A={mouse:500,touch:600},T=p?43:25;let V=!1,H=0,q=0,G=!1,J=!1,X=!1,U=!1;function st(x){if(!h)return;function D(k){(wt(h)||h(x,k))&&ct(k)}const P=e;N.add(P,"dragstart",k=>k.preventDefault(),w).add(P,"touchmove",()=>{},w).add(P,"touchend",()=>{}).add(P,"touchstart",D).add(P,"mousedown",D).add(P,"touchcancel",j).add(P,"contextmenu",j).add(P,"click",K,!0)}function R(){N.clear(),E.clear()}function ot(){const x=U?i:e;E.add(x,"touchmove",C,w).add(x,"touchend",j).add(x,"mousemove",C,w).add(x,"mouseup",j)}function rt(x){const D=x.nodeName||"";return O.includes(D)}function _(){return(p?A:L)[U?"mouse":"touch"]}function it(x,D){const P=d.add(At(x)*-1),k=a.byDistance(x,!p).distance;return p||M(x)<I?k:l&&D?k*.5:a.byIndex(P.get(),0).distance}function ct(x){const D=Gt(x,c);U=D,!(D&&x.button!==0)&&(rt(x.target)||(X=p&&D&&!x.buttons&&V,V=mt(r.get(),u.get())>=2,G=!0,o.pointerDown(x),y.useFriction(0).useDuration(0),r.set(u),ot(),H=o.readPoint(x),q=o.readPoint(x,v),S.emit("pointerDown")))}function C(x){const D=o.readPoint(x),P=o.readPoint(x,v),k=mt(D,H),Y=mt(P,q);if(!J&&!U&&(!x.cancelable||(J=k>Y,!J)))return j(x);const $=o.pointerMove(x);k>b&&(X=!0),y.useFriction(.3).useDuration(1),s.start(),r.add(n.apply($)),x.preventDefault()}function j(x){const P=a.byDistance(0,!1).index!==d.get(),k=o.pointerUp(x)*_(),Y=it(n.apply(k),P),$=on(k,Y),tt=T-10*$,Q=g+$/50;J=!1,G=!1,E.clear(),y.useDuration(tt).useFriction(Q),f.distance(Y,!p),U=!1,S.emit("pointerUp")}function K(x){X&&(x.stopPropagation(),x.preventDefault())}function z(){return G}return{init:st,pointerDown:z,destroy:R}}function fn(t,n){let i,c;function r(a){return a.timeStamp}function o(a,d){const m=`client${(d||t.scroll)==="x"?"X":"Y"}`;return(Gt(a,n)?a:a.touches[0])[m]}function u(a){return i=a,c=a,o(a)}function s(a){const d=o(a)-o(c),S=r(a)-r(i)>170;return c=a,S&&(i=a),d}function f(a){if(!i||!c)return 0;const d=o(c)-o(i),S=r(a)-r(i),m=r(a)-r(c)>170,p=d/S;return S&&!m&&M(p)>.1?p:0}return{pointerDown:u,pointerMove:s,pointerUp:f,readPoint:o}}function ln(){function t(e){const{offsetTop:i,offsetLeft:c,offsetWidth:r,offsetHeight:o}=e;return{top:i,right:c+r,bottom:i+o,left:c,width:r,height:o}}return{measure:t}}function dn(t){function n(i){return t*(i/100)}return{measure:n}}function pn(t,n,e,i,c,r,o){let u,s,f=[],y=!1;function a(p){return c.measureSize(o.measure(p))}function d(p){if(!r)return;s=a(t),f=i.map(a);function b(g){for(const h of g){const v=h.target===t,O=i.indexOf(h.target),w=v?s:f[O],N=a(v?t:i[O]);if(M(N-w)>=.5){e.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}u=new ResizeObserver(g=>{y||(wt(r)||r(p,g))&&b(g)}),[t].concat(i).forEach(g=>u.observe(g))}function S(){u&&u.disconnect(),y=!0}return{init:d,destroy:S}}function mn(t,n,e,i,c){let r=0,o=0,u=i,s=c,f=t.get(),y=0;function a(){const O=e.get()-t.get(),w=!u;let N=0;return w?(r=0,t.set(e),N=O):(r+=O/u,r*=s,f+=r,t.add(r),N=f-y),o=At(N),y=f,v}function d(){const O=e.get()-n.get();return M(O)<.001}function S(){return u}function m(){return o}function p(){return r}function b(){return g(i)}function l(){return h(c)}function g(O){return u=O,v}function h(O){return s=O,v}const v={direction:m,duration:S,velocity:p,seek:a,settled:d,useBaseFriction:l,useBaseDuration:b,useFriction:h,useDuration:g};return v}function gn(t,n,e,i,c){const r=c.measure(10),o=c.measure(50),u=et(.1,.99);let s=!1;function f(){return!(s||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function y(S){if(!f())return;const m=t.reachedMin(n.get())?"min":"max",p=M(t[m]-n.get()),b=e.get()-n.get(),l=u.constrain(p/o);e.subtract(b*l),!S&&M(b)<r&&(e.set(t.constrain(e.get())),i.useDuration(25).useBaseFriction())}function a(S){s=!S}return{constrain:y,toggleActive:a}}function hn(t,n,e,i,c){const r=et(-n+t,0),o=y(),u=f(),s=a();function f(){const S=o[0],m=B(o),p=o.lastIndexOf(S),b=o.indexOf(m)+1;return et(p,b)}function y(){return e.map((S,m)=>{const p=!m,b=Dt(e,m);return p?r.max:b?r.min:r.constrain(S)}).map(S=>parseFloat(S.toFixed(3)))}function a(){if(n<=t+c)return[r.max];if(i==="keepSnaps")return o;const{min:S,max:m}=u;return o.slice(S,m)}return{snapsContained:s,scrollContainLimit:u}}function yn(t,n,e){const i=n[0],c=e?i-t:B(n);return{limit:et(c,i)}}function bn(t,n,e,i){const r=n.min+.1,o=n.max+.1,{reachedMin:u,reachedMax:s}=et(r,o);function f(d){return d===1?s(e.get()):d===-1?u(e.get()):!1}function y(d){if(!f(d))return;const S=t*(d*-1);i.forEach(m=>m.add(S))}return{loop:y}}function Sn(t){const{max:n,length:e}=t;function i(r){const o=r-n;return e?o/-e:0}return{get:i}}function xn(t,n,e,i,c){const{startEdge:r,endEdge:o}=t,{groupSlides:u}=c,s=a().map(n.measure),f=d(),y=S();function a(){return u(i).map(p=>B(p)[o]-p[0][r]).map(M)}function d(){return i.map(p=>e[r]-p[r]).map(p=>-M(p))}function S(){return u(f).map(p=>p[0]).map((p,b)=>p+s[b])}return{snaps:f,snapsAligned:y}}function En(t,n,e,i,c,r){const{groupSlides:o}=c,{min:u,max:s}=i,f=y();function y(){const d=o(r),S=!t||n==="keepSnaps";return e.length===1?[r]:S?d:d.slice(u,s).map((m,p,b)=>{const l=!p,g=Dt(b,p);if(l){const h=B(b[0])+1;return Vt(h)}if(g){const h=dt(r)-B(b)[0]+1;return Vt(h,B(b)[0])}return m})}return{slideRegistry:f}}function vn(t,n,e,i,c){const{reachedAny:r,removeOffset:o,constrain:u}=i;function s(m){return m.concat().sort((p,b)=>M(p)-M(b))[0]}function f(m){const p=t?o(m):u(m),b=n.map(g=>g-p).map(g=>y(g,0)).map((g,h)=>({diff:g,index:h})).sort((g,h)=>M(g.diff)-M(h.diff)),{index:l}=b[0];return{index:l,distance:p}}function y(m,p){const b=[m,m+e,m-e];if(!t)return b[0];if(!p)return s(b);const l=b.filter(g=>At(g)===p);return l.length?s(l):B(b)-e}function a(m,p){const b=n[m]-c.get(),l=y(b,p);return{index:m,distance:l}}function d(m,p){const b=c.get()+m,{index:l,distance:g}=f(b),h=!t&&r(b);if(!p||h)return{index:l,distance:m};const v=n[l]-g,O=m+y(v,0);return{index:l,distance:O}}return{byDistance:d,byIndex:a,shortcut:y}}function In(t,n,e,i,c,r,o){function u(a){const d=a.distance,S=a.index!==n.get();r.add(d),d&&(i.duration()?t.start():(t.update(),t.render(1),t.update())),S&&(e.set(n.get()),n.set(a.index),o.emit("select"))}function s(a,d){const S=c.byDistance(a,d);u(S)}function f(a,d){const S=n.clone().set(a),m=c.byIndex(S.get(),d);u(m)}return{distance:s,index:f}}function On(t,n,e,i,c,r){let o=0;function u(){r.add(document,"keydown",s,!1),n.forEach(f)}function s(a){a.code==="Tab"&&(o=new Date().getTime())}function f(a){const d=()=>{if(new Date().getTime()-o>10)return;t.scrollLeft=0;const p=n.indexOf(a),b=e.findIndex(l=>l.includes(p));Lt(b)&&(c.useDuration(0),i.index(b,0))};r.add(a,"focus",d,{passive:!0,capture:!0})}return{init:u}}function gt(t){let n=t;function e(){return n}function i(s){n=o(s)}function c(s){n+=o(s)}function r(s){n-=o(s)}function o(s){return Lt(s)?s:s.get()}return{get:e,set:i,add:c,subtract:r}}function $t(t,n,e){const i=t.scroll==="x"?o:u,c=e.style;let r=!1;function o(d){return`translate3d(${d}px,0px,0px)`}function u(d){return`translate3d(0px,${d}px,0px)`}function s(d){r||(c.transform=i(n.apply(d)))}function f(d){r=!d}function y(){r||(c.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:y,to:s,toggleActive:f}}function Ln(t,n,e,i,c,r,o,u,s,f){const a=at(r),d=at(r).reverse(),S=g().concat(h());function m(E,I){return E.reduce((L,A)=>L-r[A],I)}function p(E,I){return E.reduce((L,A)=>m(L,I)>0?L.concat([A]):L,[])}function b(E){return o.map((I,L)=>({start:I-c[L]+.5+E,end:I+e-.5+E}))}function l(E,I,L){const A=b(I);return E.map(T=>{const V=L?0:-i,H=L?i:0,q=L?"end":"start",G=A[T][q];return{index:T,loopPoint:G,slideLocation:gt(-1),translate:$t(t,n,f[T]),target:()=>s.get()>G?V:H}})}function g(){const E=u[0],I=p(d,E);return l(I,i,!1)}function h(){const E=e-u[0]-1,I=p(a,E);return l(I,-i,!0)}function v(){return S.every(({index:E})=>{const I=a.filter(L=>L!==E);return m(I,e)<=.1})}function O(){S.forEach(E=>{const{target:I,translate:L,slideLocation:A}=E,T=I();T!==A.get()&&(L.to(T),A.set(T))})}function w(){S.forEach(E=>E.translate.clear())}return{canLoop:v,clear:w,loop:O,loopPoints:S}}function wn(t,n,e){let i,c=!1;function r(s){if(!e)return;function f(y){for(const a of y)if(a.type==="childList"){s.reInit(),n.emit("slidesChanged");break}}i=new MutationObserver(y=>{c||(wt(e)||e(s,y))&&f(y)}),i.observe(t,{childList:!0})}function o(){i&&i.disconnect(),c=!0}return{init:r,destroy:o}}function An(t,n,e,i){const c={};let r=null,o=null,u,s=!1;function f(){u=new IntersectionObserver(m=>{s||(m.forEach(p=>{const b=n.indexOf(p.target);c[b]=p}),r=null,o=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:i}),n.forEach(m=>u.observe(m))}function y(){u&&u.disconnect(),s=!0}function a(m){return ft(c).reduce((p,b)=>{const l=parseInt(b),{isIntersecting:g}=c[l];return(m&&g||!m&&!g)&&p.push(l),p},[])}function d(m=!0){if(m&&r)return r;if(!m&&o)return o;const p=a(m);return m&&(r=p),m||(o=p),p}return{init:f,destroy:y,get:d}}function Dn(t,n,e,i,c,r){const{measureSize:o,startEdge:u,endEdge:s}=t,f=e[0]&&c,y=m(),a=p(),d=e.map(o),S=b();function m(){if(!f)return 0;const g=e[0];return M(n[u]-g[u])}function p(){if(!f)return 0;const g=r.getComputedStyle(B(i));return parseFloat(g.getPropertyValue(`margin-${s}`))}function b(){return e.map((g,h,v)=>{const O=!h,w=Dt(v,h);return O?d[h]+y:w?d[h]+a:v[h+1][u]-g[u]}).map(M)}return{slideSizes:d,slideSizesWithGaps:S,startGap:y,endGap:a}}function Tn(t,n,e,i,c,r,o,u,s,f){const{startEdge:y,endEdge:a}=t,d=Lt(i);function S(l,g){return at(l).filter(h=>h%g===0).map(h=>l.slice(h,h+g))}function m(l){return l.length?at(l).reduce((g,h)=>{const v=B(g)||0,O=v===0,w=h===dt(l),N=r[y]-o[v][y],E=r[y]-o[h][a],I=!c&&O?n.apply(u):0,L=!c&&w?n.apply(s):0;return M(E-L-(N+I))>e+f&&g.push(h),w&&g.push(l.length),g},[]).map((g,h,v)=>{const O=Math.max(v[h-1]||0);return l.slice(O,g)}):[]}function p(l){return d?S(l,i):m(l)}return{groupSlides:p}}function Mn(t,n,e,i,c,r,o){const{align:u,axis:s,direction:f,startIndex:y,loop:a,duration:d,dragFree:S,dragThreshold:m,inViewThreshold:p,slidesToScroll:b,skipSnaps:l,containScroll:g,watchResize:h,watchSlides:v,watchDrag:O}=r,w=2,N=ln(),E=N.measure(n),I=e.map(N.measure),L=un(f),A=cn(s,f),T=A.measureSize(E),V=dn(T),H=rn(u,T),q=!a&&!!g,G=a||!!g,{slideSizes:J,slideSizesWithGaps:X,startGap:U,endGap:st}=Dn(A,E,I,e,G,c),R=Tn(A,L,T,b,a,E,I,U,st,w),{snaps:ot,snapsAligned:rt}=xn(A,H,E,I,R),_=-B(ot)+B(X),{snapsContained:it,scrollContainLimit:ct}=hn(T,_,rt,g,w),C=q?it:rt,{limit:j}=yn(_,C,a),K=Rt(dt(C),y,a),z=K.clone(),F=at(e),x=({dragHandler:nt,scrollBody:Et,scrollBounds:vt,options:{loop:pt}})=>{pt||vt.constrain(nt.pointerDown()),Et.seek()},D=({scrollBody:nt,translate:Et,location:vt,offsetLocation:pt,scrollLooper:_t,slideLooper:Kt,dragHandler:Qt,animation:Jt,eventHandler:Pt,options:{loop:Xt}},Yt)=>{const kt=nt.velocity(),jt=nt.settled();jt&&!Qt.pointerDown()&&(Jt.stop(),Pt.emit("settle")),jt||Pt.emit("scroll"),pt.set(vt.get()-kt+kt*Yt),Xt&&(_t.loop(nt.direction()),Kt.loop()),Et.to(pt.get())},P=sn(i,c,()=>x(xt),nt=>D(xt,nt)),k=.68,Y=C[K.get()],$=gt(Y),tt=gt(Y),Q=gt(Y),ut=mn($,tt,Q,d,k),bt=vn(a,C,_,j,Q),St=In(P,K,z,ut,bt,Q,o),Mt=Sn(j),Ft=lt(),qt=An(n,e,o,p),{slideRegistry:Nt}=En(q,g,C,ct,R,F),Ut=On(t,e,Nt,St,ut,Ft),xt={ownerDocument:i,ownerWindow:c,eventHandler:o,containerRect:E,slideRects:I,animation:P,axis:A,direction:L,dragHandler:an(A,L,t,i,c,Q,fn(A,c),$,P,St,ut,bt,K,o,V,S,m,l,k,O),eventStore:Ft,percentOfView:V,index:K,indexPrevious:z,limit:j,location:$,offsetLocation:tt,options:r,resizeHandler:pn(n,o,c,e,A,h,N),scrollBody:ut,scrollBounds:gn(j,$,Q,ut,V),scrollLooper:bn(_,j,tt,[$,tt,Q]),scrollProgress:Mt,scrollSnapList:C.map(Mt.get),scrollSnaps:C,scrollTarget:bt,scrollTo:St,slideLooper:Ln(A,L,T,_,J,X,ot,C,tt,e),slideFocus:Ut,slidesHandler:wn(n,o,v),slidesInView:qt,slideIndexes:F,slideRegistry:Nt,slidesToScroll:R,target:Q,translate:$t(A,L,n)};return xt}function Fn(){const t={};let n;function e(s){n=s}function i(s){return t[s]||[]}function c(s){return i(s).forEach(f=>f(n,s)),u}function r(s,f){return t[s]=i(s).concat([f]),u}function o(s,f){return t[s]=i(s).filter(y=>y!==f),u}const u={init:e,emit:c,off:o,on:r};return u}const Nn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Pn(t){function n(r,o){return Ht(r,o||{})}function e(r){const o=r.breakpoints||{},u=ft(o).filter(s=>t.matchMedia(s).matches).map(s=>o[s]).reduce((s,f)=>n(s,f),{});return n(r,u)}function i(r){return r.map(o=>ft(o.breakpoints||{})).reduce((o,u)=>o.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:i}}function kn(t){let n=[];function e(r,o){return n=o.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(r,t)),o.reduce((u,s)=>Object.assign(u,{[s.name]:s}),{})}function i(){n=n.filter(r=>r.destroy())}return{init:e,destroy:i}}function ht(t,n,e){const i=t.ownerDocument,c=i.defaultView,r=Pn(c),o=kn(r),u=lt(),s=Fn(),{mergeOptions:f,optionsAtMedia:y,optionsMediaQueries:a}=r,{on:d,off:S,emit:m}=s,p=A;let b=!1,l,g=f(Nn,ht.globalOptions),h=f(g),v=[],O,w,N;function E(){const{container:F,slides:x}=h;w=(It(F)?t.querySelector(F):F)||t.children[0];const P=It(x)?w.querySelectorAll(x):x;N=[].slice.call(P||w.children)}function I(F){const x=Mn(t,w,N,i,c,F,s);if(F.loop&&!x.slideLooper.canLoop()){const D=Object.assign({},F,{loop:!1});return I(D)}return x}function L(F,x){b||(g=f(g,F),h=y(g),v=x||v,E(),l=I(h),a([g,...v.map(({options:D})=>D)]).forEach(D=>u.add(D,"change",A)),h.active&&(l.translate.to(l.location.get()),l.animation.init(),l.slidesInView.init(),l.slideFocus.init(),l.eventHandler.init(z),l.resizeHandler.init(z),l.slidesHandler.init(z),l.options.loop&&l.slideLooper.loop(),w.offsetParent&&N.length&&l.dragHandler.init(z),O=o.init(z,v)))}function A(F,x){const D=R();T(),L(f({startIndex:D},F),x),s.emit("reInit")}function T(){l.dragHandler.destroy(),l.eventStore.clear(),l.translate.clear(),l.slideLooper.clear(),l.resizeHandler.destroy(),l.slidesHandler.destroy(),l.slidesInView.destroy(),l.animation.destroy(),o.destroy(),u.clear()}function V(){b||(b=!0,u.clear(),T(),s.emit("destroy"))}function H(F,x,D){!h.active||b||(l.scrollBody.useBaseFriction().useDuration(x===!0?0:h.duration),l.scrollTo.index(F,D||0))}function q(F){const x=l.index.add(1).get();H(x,F,-1)}function G(F){const x=l.index.add(-1).get();H(x,F,1)}function J(){return l.index.add(1).get()!==R()}function X(){return l.index.add(-1).get()!==R()}function U(){return l.scrollSnapList}function st(){return l.scrollProgress.get(l.location.get())}function R(){return l.index.get()}function ot(){return l.indexPrevious.get()}function rt(){return l.slidesInView.get()}function _(){return l.slidesInView.get(!1)}function it(){return O}function ct(){return l}function C(){return t}function j(){return w}function K(){return N}const z={canScrollNext:J,canScrollPrev:X,containerNode:j,internalEngine:ct,destroy:V,off:S,on:d,emit:m,plugins:it,previousScrollSnap:ot,reInit:p,rootNode:C,scrollNext:q,scrollPrev:G,scrollProgress:st,scrollSnapList:U,scrollTo:H,selectedScrollSnap:R,slideNodes:K,slidesInView:rt,slidesNotInView:_};return L(n,e),setTimeout(()=>s.emit("init"),0),z}ht.globalOptions=void 0;function Tt(t={},n=[]){const e=W.useRef(t),i=W.useRef(n),[c,r]=W.useState(),[o,u]=W.useState(),s=W.useCallback(()=>{c&&c.reInit(e.current,i.current)},[c]);return W.useEffect(()=>{if(nn()&&o){ht.globalOptions=Tt.globalOptions;const f=ht(o,e.current,i.current);return r(f),()=>f.destroy()}else r(void 0)},[o,r]),W.useEffect(()=>{Ot(e.current,t)||(e.current=t,s())},[t,s]),W.useEffect(()=>{en(i.current,n)||(i.current=n,s())},[n,s]),[u,c]}Tt.globalOptions=void 0;yt.globalOptions={delay:8e3};function zn({movies:t}){const[n]=Tt({loop:!0,duration:100},[yt()]);return Z.jsxs("div",{ref:n,className:"overflow-hidden relative cursor-pointer lg:h-[85vh] w-full",children:[Z.jsx("div",{className:"flex relative",children:t.map(e=>Z.jsxs("div",{className:"flex-[0_0_100%] min-w-0 relative",children:[Z.jsx("img",{src:Zt(e.backdrop_path||e.poster_path,!0),alt:"",width:"1920",height:"1080"}),Z.jsxs("div",{className:"hidden md:inline absolute mt-0 top-0 z-20 pt-40 xl:pt-52 left-0  bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent text-white p-10 space-y-5",children:[Z.jsx("h2",{className:"font-bold max-w-xl z-50 text-5xl",children:e.title}),Z.jsx("p",{className:"max-w-xl line-clamp-3",children:e.overview})]})]},e.id))}),Z.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]"})]})}export{zn as default};
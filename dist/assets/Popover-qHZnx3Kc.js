import{Y as oe,X as ie,c$ as te,m as ae,d0 as Ve,d1 as er,d2 as rr,d3 as ye,d4 as G,d5 as Ke,d6 as K,d7 as he,d8 as nr,d9 as Ce,da as tr,db as Oe,dc as _e,dd as Z,de as ar,df as Te,l as or,dg as ir,dh as sr,di as lr,dj as dr,dk as ur,dl as fr,p as D,n as B,aE as se,q as le,x as ee,dm as cr,d as Ue,i as S,a6 as vr,s as hr,y as be,r as F,Z as ke,a as X,I as gr,a8 as Pe,ak as pr,D as wr,am as mr,ab as yr,C as Q,ae as Ee,dn as br,aG as Me,ah as Sr,ai as Ar,a7 as je,aH as de,aN as $r,cD as Cr,A as V,aq as Or,ap as _r,ar as Tr,dp as Pr,aW as Er,dq as Mr,av as Rr,cq as xr,ad as Br,cs as Re,af as Y}from"./index-CgPf9EQm.js";import{c as Ir,t as Se,i as qe,g as Dr,a as Lr,f as ue}from"./get-aZYWdo8V.js";import{b as Fr,u as re,B as zr,V as Nr}from"./Follower-BA0-0DAj.js";import{a as Hr}from"./use-locale-CuzreQhd.js";import{u as Wr}from"./use-compitable-DFJDUIHc.js";const W="@@mmoContext",Gr={mounted(e,{value:r}){e[W]={handler:void 0},typeof r=="function"&&(e[W].handler=r,ie("mousemoveoutside",e,r))},updated(e,{value:r}){const n=e[W];typeof r=="function"?n.handler?n.handler!==r&&(oe("mousemoveoutside",e,n.handler),n.handler=r,ie("mousemoveoutside",e,r)):(e[W].handler=r,ie("mousemoveoutside",e,r)):n.handler&&(oe("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:r}=e[W];r&&oe("mousemoveoutside",e,r),e[W].handler=void 0}};let fe;function Kr(){return fe===void 0&&(fe=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),fe}var ge=te(ae,"WeakMap"),Ur=Ve(Object.keys,Object),kr=Object.prototype,jr=kr.hasOwnProperty;function qr(e){if(!er(e))return Ur(e);var r=[];for(var n in Object(e))jr.call(e,n)&&n!="constructor"&&r.push(n);return r}function Ae(e){return ye(e)?rr(e):qr(e)}function Xr(e,r){for(var n=-1,t=r.length,o=e.length;++n<t;)e[o+n]=r[n];return e}function Yr(e,r){for(var n=-1,t=e==null?0:e.length,o=0,a=[];++n<t;){var i=e[n];r(i,n,e)&&(a[o++]=i)}return a}function Jr(){return[]}var Zr=Object.prototype,Qr=Zr.propertyIsEnumerable,xe=Object.getOwnPropertySymbols,Vr=xe?function(e){return e==null?[]:(e=Object(e),Yr(xe(e),function(r){return Qr.call(e,r)}))}:Jr;function en(e,r,n){var t=r(e);return G(e)?t:Xr(t,n(e))}function Be(e){return en(e,Ae,Vr)}var pe=te(ae,"DataView"),we=te(ae,"Promise"),me=te(ae,"Set"),Ie="[object Map]",rn="[object Object]",De="[object Promise]",Le="[object Set]",Fe="[object WeakMap]",ze="[object DataView]",nn=K(pe),tn=K(he),an=K(we),on=K(me),sn=K(ge),L=Ke;(pe&&L(new pe(new ArrayBuffer(1)))!=ze||he&&L(new he)!=Ie||we&&L(we.resolve())!=De||me&&L(new me)!=Le||ge&&L(new ge)!=Fe)&&(L=function(e){var r=Ke(e),n=r==rn?e.constructor:void 0,t=n?K(n):"";if(t)switch(t){case nn:return ze;case tn:return Ie;case an:return De;case on:return Le;case sn:return Fe}return r});var ln="__lodash_hash_undefined__";function dn(e){return this.__data__.set(e,ln),this}function un(e){return this.__data__.has(e)}function ne(e){var r=-1,n=e==null?0:e.length;for(this.__data__=new nr;++r<n;)this.add(e[r])}ne.prototype.add=ne.prototype.push=dn;ne.prototype.has=un;function fn(e,r){for(var n=-1,t=e==null?0:e.length;++n<t;)if(r(e[n],n,e))return!0;return!1}function cn(e,r){return e.has(r)}var vn=1,hn=2;function Xe(e,r,n,t,o,a){var i=n&vn,s=e.length,d=r.length;if(s!=d&&!(i&&d>s))return!1;var u=a.get(e),c=a.get(r);if(u&&c)return u==r&&c==e;var p=-1,g=!0,m=n&hn?new ne:void 0;for(a.set(e,r),a.set(r,e);++p<s;){var y=e[p],f=r[p];if(t)var T=i?t(f,y,p,r,e,a):t(y,f,p,e,r,a);if(T!==void 0){if(T)continue;g=!1;break}if(m){if(!fn(r,function($,C){if(!cn(m,C)&&(y===$||o(y,$,n,t,a)))return m.push(C)})){g=!1;break}}else if(!(y===f||o(y,f,n,t,a))){g=!1;break}}return a.delete(e),a.delete(r),g}function gn(e){var r=-1,n=Array(e.size);return e.forEach(function(t,o){n[++r]=[o,t]}),n}function pn(e){var r=-1,n=Array(e.size);return e.forEach(function(t){n[++r]=t}),n}var wn=1,mn=2,yn="[object Boolean]",bn="[object Date]",Sn="[object Error]",An="[object Map]",$n="[object Number]",Cn="[object RegExp]",On="[object Set]",_n="[object String]",Tn="[object Symbol]",Pn="[object ArrayBuffer]",En="[object DataView]",Ne=Ce?Ce.prototype:void 0,ce=Ne?Ne.valueOf:void 0;function Mn(e,r,n,t,o,a,i){switch(n){case En:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Pn:return!(e.byteLength!=r.byteLength||!a(new Oe(e),new Oe(r)));case yn:case bn:case $n:return tr(+e,+r);case Sn:return e.name==r.name&&e.message==r.message;case Cn:case _n:return e==r+"";case An:var s=gn;case On:var d=t&wn;if(s||(s=pn),e.size!=r.size&&!d)return!1;var u=i.get(e);if(u)return u==r;t|=mn,i.set(e,r);var c=Xe(s(e),s(r),t,o,a,i);return i.delete(e),c;case Tn:if(ce)return ce.call(e)==ce.call(r)}return!1}var Rn=1,xn=Object.prototype,Bn=xn.hasOwnProperty;function In(e,r,n,t,o,a){var i=n&Rn,s=Be(e),d=s.length,u=Be(r),c=u.length;if(d!=c&&!i)return!1;for(var p=d;p--;){var g=s[p];if(!(i?g in r:Bn.call(r,g)))return!1}var m=a.get(e),y=a.get(r);if(m&&y)return m==r&&y==e;var f=!0;a.set(e,r),a.set(r,e);for(var T=i;++p<d;){g=s[p];var $=e[g],C=r[g];if(t)var z=i?t(C,$,g,r,e,a):t($,C,g,e,r,a);if(!(z===void 0?$===C||o($,C,n,t,a):z)){f=!1;break}T||(T=g=="constructor")}if(f&&!T){var M=e.constructor,E=r.constructor;M!=E&&"constructor"in e&&"constructor"in r&&!(typeof M=="function"&&M instanceof M&&typeof E=="function"&&E instanceof E)&&(f=!1)}return a.delete(e),a.delete(r),f}var Dn=1,He="[object Arguments]",We="[object Array]",J="[object Object]",Ln=Object.prototype,Ge=Ln.hasOwnProperty;function Fn(e,r,n,t,o,a){var i=G(e),s=G(r),d=i?We:L(e),u=s?We:L(r);d=d==He?J:d,u=u==He?J:u;var c=d==J,p=u==J,g=d==u;if(g&&_e(e)){if(!_e(r))return!1;i=!0,c=!1}if(g&&!c)return a||(a=new Z),i||ar(e)?Xe(e,r,n,t,o,a):Mn(e,r,d,n,t,o,a);if(!(n&Dn)){var m=c&&Ge.call(e,"__wrapped__"),y=p&&Ge.call(r,"__wrapped__");if(m||y){var f=m?e.value():e,T=y?r.value():r;return a||(a=new Z),o(f,T,n,t,a)}}return g?(a||(a=new Z),In(e,r,n,t,o,a)):!1}function $e(e,r,n,t,o){return e===r?!0:e==null||r==null||!Te(e)&&!Te(r)?e!==e&&r!==r:Fn(e,r,n,t,$e,o)}var zn=1,Nn=2;function Hn(e,r,n,t){var o=n.length,a=o;if(e==null)return!a;for(e=Object(e);o--;){var i=n[o];if(i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++o<a;){i=n[o];var s=i[0],d=e[s],u=i[1];if(i[2]){if(d===void 0&&!(s in e))return!1}else{var c=new Z,p;if(!(p===void 0?$e(u,d,zn|Nn,t,c):p))return!1}}return!0}function Ye(e){return e===e&&!or(e)}function Wn(e){for(var r=Ae(e),n=r.length;n--;){var t=r[n],o=e[t];r[n]=[t,o,Ye(o)]}return r}function Je(e,r){return function(n){return n==null?!1:n[e]===r&&(r!==void 0||e in Object(n))}}function Gn(e){var r=Wn(e);return r.length==1&&r[0][2]?Je(r[0][0],r[0][1]):function(n){return n===e||Hn(n,e,r)}}function Kn(e,r){return e!=null&&r in Object(e)}function Un(e,r,n){r=Ir(r,e);for(var t=-1,o=r.length,a=!1;++t<o;){var i=Se(r[t]);if(!(a=e!=null&&n(e,i)))break;e=e[i]}return a||++t!=o?a:(o=e==null?0:e.length,!!o&&ir(o)&&sr(i,o)&&(G(e)||lr(e)))}function kn(e,r){return e!=null&&Un(e,r,Kn)}var jn=1,qn=2;function Xn(e,r){return qe(e)&&Ye(r)?Je(Se(e),r):function(n){var t=Dr(n,e);return t===void 0&&t===r?kn(n,e):$e(r,t,jn|qn)}}function Yn(e){return function(r){return r?.[e]}}function Jn(e){return function(r){return Lr(r,e)}}function Zn(e){return qe(e)?Yn(Se(e)):Jn(e)}function Qn(e){return typeof e=="function"?e:e==null?dr:typeof e=="object"?G(e)?Xn(e[0],e[1]):Gn(e):Zn(e)}function Vn(e,r){return e&&ur(e,r,Ae)}function et(e,r){return function(n,t){if(n==null)return n;if(!ye(n))return e(n,t);for(var o=n.length,a=-1,i=Object(n);++a<o&&t(i[a],a,i)!==!1;);return n}}var rt=et(Vn);function nt(e,r){var n=-1,t=ye(e)?Array(e.length):[];return rt(e,function(o,a,i){t[++n]=r(o,a,i)}),t}function tt(e,r){var n=G(e)?fr:nt;return n(e,Qn(r))}const ve={top:"bottom",bottom:"top",left:"right",right:"left"},w="var(--n-arrow-height) * 1.414",at=D([B("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[D(">",[B("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),se("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[se("scrollable",[se("show-header-or-footer","padding: var(--n-padding);")])]),le("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),le("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ee("scrollable, show-header-or-footer",[le("content",`
 padding: var(--n-padding);
 `)])]),B("popover-shared",`
 transform-origin: inherit;
 `,[B("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[B("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${w});
 height: calc(${w});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),D("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),D("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),D("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),D("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),P("top-start",`
 top: calc(${w} / -2);
 left: calc(${x("top-start")} - var(--v-offset-left));
 `),P("top",`
 top: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),P("top-end",`
 top: calc(${w} / -2);
 right: calc(${x("top-end")} + var(--v-offset-left));
 `),P("bottom-start",`
 bottom: calc(${w} / -2);
 left: calc(${x("bottom-start")} - var(--v-offset-left));
 `),P("bottom",`
 bottom: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),P("bottom-end",`
 bottom: calc(${w} / -2);
 right: calc(${x("bottom-end")} + var(--v-offset-left));
 `),P("left-start",`
 left: calc(${w} / -2);
 top: calc(${x("left-start")} - var(--v-offset-top));
 `),P("left",`
 left: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),P("left-end",`
 left: calc(${w} / -2);
 bottom: calc(${x("left-end")} + var(--v-offset-top));
 `),P("right-start",`
 right: calc(${w} / -2);
 top: calc(${x("right-start")} - var(--v-offset-top));
 `),P("right",`
 right: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),P("right-end",`
 right: calc(${w} / -2);
 bottom: calc(${x("right-end")} + var(--v-offset-top));
 `),...tt({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,r)=>{const n=["right","left"].includes(r),t=n?"width":"height";return e.map(o=>{const a=o.split("-")[1]==="end",s=`calc((${`var(--v-target-${t}, 0px)`} - ${w}) / 2)`,d=x(o);return D(`[v-placement="${o}"] >`,[B("popover-shared",[ee("center-arrow",[B("popover-arrow",`${r}: calc(max(${s}, ${d}) ${a?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function x(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function P(e,r){const n=e.split("-")[0],t=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return D(`[v-placement="${e}"] >`,[B("popover-shared",`
 margin-${ve[n]}: var(--n-space);
 `,[ee("show-arrow",`
 margin-${ve[n]}: var(--n-space-arrow);
 `),ee("overlap",`
 margin: 0;
 `),cr("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${ve[n]}: auto;
 ${t}
 `,[B("popover-arrow",r)])])])}const Ze=Object.assign(Object.assign({},be.props),{to:re.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function ot({arrowClass:e,arrowStyle:r,arrowWrapperClass:n,arrowWrapperStyle:t,clsPrefix:o}){return S("div",{key:"__popover-arrow__",style:t,class:[`${o}-popover-arrow-wrapper`,n]},S("div",{class:[`${o}-popover-arrow`,e],style:r}))}const it=Ue({name:"PopoverBody",inheritAttrs:!1,props:Ze,setup(e,{slots:r,attrs:n}){const{namespaceRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:a}=hr(e),i=be("Popover","-popover",at,br,e,o),s=F(null),d=gr("NPopover"),u=F(null),c=F(e.show),p=F(!1);ke(()=>{const{show:v}=e;v&&!Kr()&&!e.internalDeactivateImmediately&&(p.value=!0)});const g=X(()=>{const{trigger:v,onClickoutside:A}=e,O=[],{positionManuallyRef:{value:h}}=d;return h||(v==="click"&&!A&&O.push([Pe,M,void 0,{capture:!0}]),v==="hover"&&O.push([Gr,z])),A&&O.push([Pe,M,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&O.push([pr,e.show]),O}),m=X(()=>{const{common:{cubicBezierEaseInOut:v,cubicBezierEaseIn:A,cubicBezierEaseOut:O},self:{space:h,spaceArrow:k,padding:j,fontSize:I,textColor:q,dividerColor:l,color:b,boxShadow:_,borderRadius:N,arrowHeight:H,arrowOffset:R,arrowOffsetVertical:Qe}}=i.value;return{"--n-box-shadow":_,"--n-bezier":v,"--n-bezier-ease-in":A,"--n-bezier-ease-out":O,"--n-font-size":I,"--n-text-color":q,"--n-color":b,"--n-divider-color":l,"--n-border-radius":N,"--n-arrow-height":H,"--n-arrow-offset":R,"--n-arrow-offset-vertical":Qe,"--n-padding":j,"--n-space":h,"--n-space-arrow":k}}),y=X(()=>{const v=e.width==="trigger"?void 0:ue(e.width),A=[];v&&A.push({width:v});const{maxWidth:O,minWidth:h}=e;return O&&A.push({maxWidth:ue(O)}),h&&A.push({maxWidth:ue(h)}),a||A.push(m.value),A}),f=a?wr("popover",void 0,m,e):void 0;d.setBodyInstance({syncPosition:T}),mr(()=>{d.setBodyInstance(null)}),yr(Q(e,"show"),v=>{e.animated||(v?c.value=!0:c.value=!1)});function T(){var v;(v=s.value)===null||v===void 0||v.syncPosition()}function $(v){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&d.handleMouseEnter(v)}function C(v){e.trigger==="hover"&&e.keepAliveOnHover&&d.handleMouseLeave(v)}function z(v){e.trigger==="hover"&&!E().contains(Ee(v))&&d.handleMouseMoveOutside(v)}function M(v){(e.trigger==="click"&&!E().contains(Ee(v))||e.onClickoutside)&&d.handleClickOutside(v)}function E(){return d.getTriggerElement()}V(Or,u),V(_r,null),V(Tr,null);function U(){if(f?.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let A;const O=d.internalRenderBodyRef.value,{value:h}=o;if(O)A=O([`${h}-popover-shared`,f?.themeClass.value,e.overlap&&`${h}-popover-shared--overlap`,e.showArrow&&`${h}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${h}-popover-shared--center-arrow`],u,y.value,$,C);else{const{value:k}=d.extraClassRef,{internalTrapFocus:j}=e,I=!Me(r.header)||!Me(r.footer),q=()=>{var l,b;const _=I?S($r,null,de(r.header,R=>R?S("div",{class:[`${h}-popover__header`,e.headerClass],style:e.headerStyle},R):null),de(r.default,R=>R?S("div",{class:[`${h}-popover__content`,e.contentClass],style:e.contentStyle},r):null),de(r.footer,R=>R?S("div",{class:[`${h}-popover__footer`,e.footerClass],style:e.footerStyle},R):null)):e.scrollable?(l=r.default)===null||l===void 0?void 0:l.call(r):S("div",{class:[`${h}-popover__content`,e.contentClass],style:e.contentStyle},r),N=e.scrollable?S(Cr,{contentClass:I?void 0:`${h}-popover__content ${(b=e.contentClass)!==null&&b!==void 0?b:""}`,contentStyle:I?void 0:e.contentStyle},{default:()=>_}):_,H=e.showArrow?ot({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:h}):null;return[N,H]};A=S("div",Ar({class:[`${h}-popover`,`${h}-popover-shared`,f?.themeClass.value,k.map(l=>`${h}-${l}`),{[`${h}-popover--scrollable`]:e.scrollable,[`${h}-popover--show-header-or-footer`]:I,[`${h}-popover--raw`]:e.raw,[`${h}-popover-shared--overlap`]:e.overlap,[`${h}-popover-shared--show-arrow`]:e.showArrow,[`${h}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:y.value,onKeydown:d.handleKeydown,onMouseenter:$,onMouseleave:C},n),j?S(Sr,{active:e.show,autoFocus:!0},{default:q}):q())}return je(A,g.value)}return{displayed:p,namespace:t,isMounted:d.isMountedRef,zIndex:d.zIndexRef,followerRef:s,adjustedTo:re(e),followerEnabled:c,renderContentNode:U}},render(){return S(Fr,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===re.tdkey},{default:()=>this.animated?S(vr,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),st=Object.keys(Ze),lt={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function dt(e,r,n){lt[r].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[t],a=n[t];o?e.props[t]=(...i)=>{o(...i),a(...i)}:e.props[t]=a})}const ut={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:re.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},ft=Object.assign(Object.assign(Object.assign({},be.props),ut),{internalOnAfterLeave:Function,internalRenderBody:Function}),wt=Ue({name:"Popover",inheritAttrs:!1,props:ft,slots:Object,__popover__:!0,setup(e){const r=Br(),n=F(null),t=X(()=>e.show),o=F(e.defaultShow),a=Hr(t,o),i=Re(()=>e.disabled?!1:a.value),s=()=>{if(e.disabled)return!0;const{getDisabled:l}=e;return!!l?.()},d=()=>s()?!1:a.value,u=Wr(e,["arrow","showArrow"]),c=X(()=>e.overlap?!1:u.value);let p=null;const g=F(null),m=F(null),y=Re(()=>e.x!==void 0&&e.y!==void 0);function f(l){const{"onUpdate:show":b,onUpdateShow:_,onShow:N,onHide:H}=e;o.value=l,b&&Y(b,l),_&&Y(_,l),l&&N&&Y(N,!0),l&&H&&Y(H,!1)}function T(){p&&p.syncPosition()}function $(){const{value:l}=g;l&&(window.clearTimeout(l),g.value=null)}function C(){const{value:l}=m;l&&(window.clearTimeout(l),m.value=null)}function z(){const l=s();if(e.trigger==="focus"&&!l){if(d())return;f(!0)}}function M(){const l=s();if(e.trigger==="focus"&&!l){if(!d())return;f(!1)}}function E(){const l=s();if(e.trigger==="hover"&&!l){if(C(),g.value!==null||d())return;const b=()=>{f(!0),g.value=null},{delay:_}=e;_===0?b():g.value=window.setTimeout(b,_)}}function U(){const l=s();if(e.trigger==="hover"&&!l){if($(),m.value!==null||!d())return;const b=()=>{f(!1),m.value=null},{duration:_}=e;_===0?b():m.value=window.setTimeout(b,_)}}function v(){U()}function A(l){var b;d()&&(e.trigger==="click"&&($(),C(),f(!1)),(b=e.onClickoutside)===null||b===void 0||b.call(e,l))}function O(){if(e.trigger==="click"&&!s()){$(),C();const l=!d();f(l)}}function h(l){e.internalTrapFocus&&l.key==="Escape"&&($(),C(),f(!1))}function k(l){o.value=l}function j(){var l;return(l=n.value)===null||l===void 0?void 0:l.targetRef}function I(l){p=l}return V("NPopover",{getTriggerElement:j,handleKeydown:h,handleMouseEnter:E,handleMouseLeave:U,handleClickOutside:A,handleMouseMoveOutside:v,setBodyInstance:I,positionManuallyRef:y,isMountedRef:r,zIndexRef:Q(e,"zIndex"),extraClassRef:Q(e,"internalExtraClass"),internalRenderBodyRef:Q(e,"internalRenderBody")}),ke(()=>{a.value&&s()&&f(!1)}),{binderInstRef:n,positionManually:y,mergedShowConsideringDisabledProp:i,uncontrolledShow:o,mergedShowArrow:c,getMergedShow:d,setShow:k,handleClick:O,handleMouseEnter:E,handleMouseLeave:U,handleFocus:z,handleBlur:M,syncPosition:T}},render(){var e;const{positionManually:r,$slots:n}=this;let t,o=!1;if(!r&&(t=Pr(n,"trigger"),t)){t=Er(t),t=t.type===Mr?S("span",[t]):t;const a={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)o=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[a,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[a];else{const{internalInheritedEventHandlers:i}=this,s=[a,...i],d={onBlur:u=>{s.forEach(c=>{c.onBlur(u)})},onFocus:u=>{s.forEach(c=>{c.onFocus(u)})},onClick:u=>{s.forEach(c=>{c.onClick(u)})},onMouseenter:u=>{s.forEach(c=>{c.onMouseenter(u)})},onMouseleave:u=>{s.forEach(c=>{c.onMouseleave(u)})}};dt(t,i?"nested":r?"manual":this.trigger,d)}}return S(zr,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const a=this.getMergedShow();return[this.internalTrapFocus&&a?je(S("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[Rr,{enabled:a,zIndex:this.zIndex}]]):null,r?null:S(Nr,null,{default:()=>t}),S(it,xr(this.$props,st,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:a})),{default:()=>{var i,s;return(s=(i=this.$slots).default)===null||s===void 0?void 0:s.call(i)},header:()=>{var i,s;return(s=(i=this.$slots).header)===null||s===void 0?void 0:s.call(i)},footer:()=>{var i,s;return(s=(i=this.$slots).footer)===null||s===void 0?void 0:s.call(i)}})]}})}});export{wt as N,ut as p,ot as r};

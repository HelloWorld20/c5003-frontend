import{d as fe,ag as io,i as r,a_ as Yo,r as B,j as Qo,F as Ge,cF as Xe,ab as Re,am as po,n as T,q as z,p as X,aO as mo,s as Ne,y as he,cG as Xo,a as $,ac as V,D as De,aM as ze,I as Co,cs as eo,a6 as xo,x as j,aE as Oe,a5 as yo,aH as Ke,aJ as en,aj as on,J as nn,al as ao,C as Z,cH as tn,aL as ln,aU as Fe,A as lo,aB as rn,cI as an,aD as D,az as sn,cJ as co,af as ce,E as cn,cK as dn,aN as un,cL as hn,Z as fn,a7 as vn,ak as gn,a8 as uo,cM as bn,a9 as pn,ad as mn,ae as Cn,cm as xn}from"./index-CgPf9EQm.js";import{c as yn,a as wn,i as so,d as Sn,B as kn,V as On,b as Rn,u as ro}from"./Follower-BA0-0DAj.js";import{a as Pn}from"./Input-CW-Izv7Y.js";import{N as zn}from"./Popover-qHZnx3Kc.js";import{V as Fn,F as Mn}from"./FocusDetector-DEKUhLld.js";import{a as Tn,c as In}from"./create-C8zW23Rr.js";import{u as wo,a as ho}from"./use-locale-CuzreQhd.js";import{h as Ae}from"./use-keyboard-BIDzhMOw.js";import{u as Bn}from"./use-compitable-DFJDUIHc.js";const be="v-hidden",_n=yn("[v-hidden]",{display:"none!important"}),fo=fe({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:l}){const n=B(null),a=B(null);function c(u){const{value:t}=n,{getCounter:x,getTail:w}=e;let b;if(x!==void 0?b=x():b=a.value,!t||!b)return;b.hasAttribute(be)&&b.removeAttribute(be);const{children:C}=t;if(u.showAllItemsBeforeCalculate)for(const k of C)k.hasAttribute(be)&&k.removeAttribute(be);const m=t.offsetWidth,h=[],v=l.tail?w?.():null;let O=v?v.offsetWidth:0,_=!1;const R=t.children.length-(l.tail?1:0);for(let k=0;k<R-1;++k){if(k<0)continue;const E=C[k];if(_){E.hasAttribute(be)||E.setAttribute(be,"");continue}else E.hasAttribute(be)&&E.removeAttribute(be);const A=E.offsetWidth;if(O+=A,h[k]=A,O>m){const{updateCounter:K}=e;for(let L=k;L>=0;--L){const J=R-1-L;K!==void 0?K(J):b.textContent=`${J}`;const ee=b.offsetWidth;if(O-=h[L],O+ee<=m||L===0){_=!0,k=L-1,v&&(k===-1?(v.style.maxWidth=`${m-ee}px`,v.style.boxSizing="border-box"):v.style.maxWidth="");const{onUpdateCount:q}=e;q&&q(J);break}}}}const{onUpdateOverflow:S}=e;_?S!==void 0&&S(!0):(S!==void 0&&S(!1),b.setAttribute(be,""))}const f=Qo();return _n.mount({id:"vueuc/overflow",head:!0,anchorMetaName:wn,ssr:f}),Ge(()=>c({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:a,sync:c}},render(){const{$slots:e}=this;return io(()=>this.sync({showAllItemsBeforeCalculate:!1})),r("div",{class:"v-overflow",ref:"selfRef"},[Yo(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function So(e,l){l&&(Ge(()=>{const{value:n}=e;n&&Xe.registerHandler(n,l)}),Re(e,(n,a)=>{a&&Xe.unregisterHandler(a)},{deep:!1}),po(()=>{const{value:n}=e;n&&Xe.unregisterHandler(n)}))}function vo(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function oo(e){const l=e.filter(n=>n!==void 0);if(l.length!==0)return l.length===1?l[0]:n=>{e.forEach(a=>{a&&a(n)})}}const $n=fe({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),En=fe({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),An=T("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[X("+",[z("description",`
 margin-top: 8px;
 `)])]),z("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Nn=Object.assign(Object.assign({},he.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Dn=fe({name:"Empty",props:Nn,slots:Object,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:n,mergedComponentPropsRef:a}=Ne(e),c=he("Empty","-empty",An,Xo,e,l),{localeRef:f}=wo("Empty"),u=$(()=>{var b,C,m;return(b=e.description)!==null&&b!==void 0?b:(m=(C=a?.value)===null||C===void 0?void 0:C.Empty)===null||m===void 0?void 0:m.description}),t=$(()=>{var b,C;return((C=(b=a?.value)===null||b===void 0?void 0:b.Empty)===null||C===void 0?void 0:C.renderIcon)||(()=>r(En,null))}),x=$(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:C},self:{[V("iconSize",b)]:m,[V("fontSize",b)]:h,textColor:v,iconColor:O,extraTextColor:_}}=c.value;return{"--n-icon-size":m,"--n-font-size":h,"--n-bezier":C,"--n-text-color":v,"--n-icon-color":O,"--n-extra-text-color":_}}),w=n?De("empty",$(()=>{let b="";const{size:C}=e;return b+=C[0],b}),x,e):void 0;return{mergedClsPrefix:l,mergedRenderIcon:t,localizedDescription:$(()=>u.value||f.value.description),cssVars:n?void 0:x,themeClass:w?.themeClass,onRender:w?.onRender}},render(){const{$slots:e,mergedClsPrefix:l,onRender:n}=this;return n?.(),r("div",{class:[`${l}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${l}-empty__icon`},e.icon?e.icon():r(mo,{clsPrefix:l},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${l}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${l}-empty__extra`},e.extra()):null)}}),go=fe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:l,labelFieldRef:n,nodePropsRef:a}=Co(so);return{labelField:n,nodeProps:a,renderLabel:e,renderOption:l}},render(){const{clsPrefix:e,renderLabel:l,renderOption:n,nodeProps:a,tmNode:{rawNode:c}}=this,f=a?.(c),u=l?l(c,!1):ze(c[this.labelField],c,!1),t=r("div",Object.assign({},f,{class:[`${e}-base-select-group-header`,f?.class]}),u);return c.render?c.render({node:t,option:c}):n?n({node:t,option:c,selected:!1}):t}});function Ln(e,l){return r(xo,{name:"fade-in-scale-up-transition"},{default:()=>e?r(mo,{clsPrefix:l,class:`${l}-base-select-option__check`},{default:()=>r($n)}):null})}const bo=fe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:l,pendingTmNodeRef:n,multipleRef:a,valueSetRef:c,renderLabelRef:f,renderOptionRef:u,labelFieldRef:t,valueFieldRef:x,showCheckmarkRef:w,nodePropsRef:b,handleOptionClick:C,handleOptionMouseEnter:m}=Co(so),h=eo(()=>{const{value:R}=n;return R?e.tmNode.key===R.key:!1});function v(R){const{tmNode:S}=e;S.disabled||C(R,S)}function O(R){const{tmNode:S}=e;S.disabled||m(R,S)}function _(R){const{tmNode:S}=e,{value:k}=h;S.disabled||k||m(R,S)}return{multiple:a,isGrouped:eo(()=>{const{tmNode:R}=e,{parent:S}=R;return S&&S.rawNode.type==="group"}),showCheckmark:w,nodeProps:b,isPending:h,isSelected:eo(()=>{const{value:R}=l,{value:S}=a;if(R===null)return!1;const k=e.tmNode.rawNode[x.value];if(S){const{value:E}=c;return E.has(k)}else return R===k}),labelField:t,renderLabel:f,renderOption:u,handleMouseMove:_,handleMouseEnter:O,handleClick:v}},render(){const{clsPrefix:e,tmNode:{rawNode:l},isSelected:n,isPending:a,isGrouped:c,showCheckmark:f,nodeProps:u,renderOption:t,renderLabel:x,handleClick:w,handleMouseEnter:b,handleMouseMove:C}=this,m=Ln(n,e),h=x?[x(l,n),f&&m]:[ze(l[this.labelField],l,n),f&&m],v=u?.(l),O=r("div",Object.assign({},v,{class:[`${e}-base-select-option`,l.class,v?.class,{[`${e}-base-select-option--disabled`]:l.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:c,[`${e}-base-select-option--pending`]:a,[`${e}-base-select-option--show-checkmark`]:f}],style:[v?.style||"",l.style||""],onClick:oo([w,v?.onClick]),onMouseenter:oo([b,v?.onMouseenter]),onMousemove:oo([C,v?.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},h));return l.render?l.render({node:O,option:l,selected:n}):t?t({node:O,option:l,selected:n}):O}}),Hn=T("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[T("scrollbar",`
 max-height: var(--n-height);
 `),T("virtual-list",`
 max-height: var(--n-height);
 `),T("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),T("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),T("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),T("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),T("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[j("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),X("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),X("&:active",`
 color: var(--n-option-text-color-pressed);
 `),j("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),j("pending",[X("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),j("selected",`
 color: var(--n-option-text-color-active);
 `,[X("&::before",`
 background-color: var(--n-option-color-active);
 `),j("pending",[X("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),j("disabled",`
 cursor: not-allowed;
 `,[Oe("selected",`
 color: var(--n-option-text-color-disabled);
 `),j("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[yo({enterScale:"0.5"})])])]),Vn=fe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:l,mergedRtlRef:n}=Ne(e),a=ao("InternalSelectMenu",n,l),c=he("InternalSelectMenu","-internal-select-menu",Hn,tn,e,Z(e,"clsPrefix")),f=B(null),u=B(null),t=B(null),x=$(()=>e.treeMate.getFlattenedNodes()),w=$(()=>Tn(x.value)),b=B(null);function C(){const{treeMate:s}=e;let g=null;const{value:H}=e;H===null?g=s.getFirstAvailableNode():(e.multiple?g=s.getNode((H||[])[(H||[]).length-1]):g=s.getNode(H),(!g||g.disabled)&&(g=s.getFirstAvailableNode())),le(g||null)}function m(){const{value:s}=b;s&&!e.treeMate.getNode(s.key)&&(b.value=null)}let h;Re(()=>e.show,s=>{s?h=Re(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?C():m(),io(ve)):m()},{immediate:!0}):h?.()},{immediate:!0}),po(()=>{h?.()});const v=$(()=>ln(c.value.self[V("optionHeight",e.size)])),O=$(()=>Fe(c.value.self[V("padding",e.size)])),_=$(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),R=$(()=>{const s=x.value;return s&&s.length===0});function S(s){const{onToggle:g}=e;g&&g(s)}function k(s){const{onScroll:g}=e;g&&g(s)}function E(s){var g;(g=t.value)===null||g===void 0||g.sync(),k(s)}function A(){var s;(s=t.value)===null||s===void 0||s.sync()}function K(){const{value:s}=b;return s||null}function L(s,g){g.disabled||le(g,!1)}function J(s,g){g.disabled||S(g)}function ee(s){var g;Ae(s,"action")||(g=e.onKeyup)===null||g===void 0||g.call(e,s)}function q(s){var g;Ae(s,"action")||(g=e.onKeydown)===null||g===void 0||g.call(e,s)}function oe(s){var g;(g=e.onMousedown)===null||g===void 0||g.call(e,s),!e.focusable&&s.preventDefault()}function ne(){const{value:s}=b;s&&le(s.getNext({loop:!0}),!0)}function N(){const{value:s}=b;s&&le(s.getPrev({loop:!0}),!0)}function le(s,g=!1){b.value=s,g&&ve()}function ve(){var s,g;const H=b.value;if(!H)return;const ae=w.value(H.key);ae!==null&&(e.virtualScroll?(s=u.value)===null||s===void 0||s.scrollTo({index:ae}):(g=t.value)===null||g===void 0||g.scrollTo({index:ae,elSize:v.value}))}function de(s){var g,H;!((g=f.value)===null||g===void 0)&&g.contains(s.target)&&((H=e.onFocus)===null||H===void 0||H.call(e,s))}function ye(s){var g,H;!((g=f.value)===null||g===void 0)&&g.contains(s.relatedTarget)||(H=e.onBlur)===null||H===void 0||H.call(e,s)}lo(so,{handleOptionMouseEnter:L,handleOptionClick:J,valueSetRef:_,pendingTmNodeRef:b,nodePropsRef:Z(e,"nodeProps"),showCheckmarkRef:Z(e,"showCheckmark"),multipleRef:Z(e,"multiple"),valueRef:Z(e,"value"),renderLabelRef:Z(e,"renderLabel"),renderOptionRef:Z(e,"renderOption"),labelFieldRef:Z(e,"labelField"),valueFieldRef:Z(e,"valueField")}),lo(Sn,f),Ge(()=>{const{value:s}=t;s&&s.sync()});const ie=$(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:g},self:{height:H,borderRadius:ae,color:ge,groupHeaderTextColor:me,actionDividerColor:se,optionTextColorPressed:Y,optionTextColor:Ce,optionTextColorDisabled:te,optionTextColorActive:Me,optionOpacityDisabled:Te,optionCheckColor:Ie,actionTextColor:Be,optionColorPending:we,optionColorActive:Se,loadingColor:_e,loadingSize:$e,optionColorActivePending:Ee,[V("optionFontSize",s)]:Pe,[V("optionHeight",s)]:ke,[V("optionPadding",s)]:Q}}=c.value;return{"--n-height":H,"--n-action-divider-color":se,"--n-action-text-color":Be,"--n-bezier":g,"--n-border-radius":ae,"--n-color":ge,"--n-option-font-size":Pe,"--n-group-header-text-color":me,"--n-option-check-color":Ie,"--n-option-color-pending":we,"--n-option-color-active":Se,"--n-option-color-active-pending":Ee,"--n-option-height":ke,"--n-option-opacity-disabled":Te,"--n-option-text-color":Ce,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":te,"--n-option-text-color-pressed":Y,"--n-option-padding":Q,"--n-option-padding-left":Fe(Q,"left"),"--n-option-padding-right":Fe(Q,"right"),"--n-loading-color":_e,"--n-loading-size":$e}}),{inlineThemeDisabled:pe}=e,G=pe?De("internal-select-menu",$(()=>e.size[0]),ie,e):void 0,re={selfRef:f,next:ne,prev:N,getPendingTmNode:K};return So(f,e.onResize),Object.assign({mergedTheme:c,mergedClsPrefix:l,rtlEnabled:a,virtualListRef:u,scrollbarRef:t,itemSize:v,padding:O,flattenedNodes:x,empty:R,virtualListContainer(){const{value:s}=u;return s?.listElRef},virtualListContent(){const{value:s}=u;return s?.itemsElRef},doScroll:k,handleFocusin:de,handleFocusout:ye,handleKeyUp:ee,handleKeyDown:q,handleMouseDown:oe,handleVirtualListResize:A,handleVirtualListScroll:E,cssVars:pe?void 0:ie,themeClass:G?.themeClass,onRender:G?.onRender},re)},render(){const{$slots:e,virtualScroll:l,clsPrefix:n,mergedTheme:a,themeClass:c,onRender:f}=this;return f?.(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,c,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Ke(e.header,u=>u&&r("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},u)),this.loading?r("div",{class:`${n}-base-select-menu__loading`},r(en,{clsPrefix:n,strokeWidth:20})):this.empty?r("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},nn(e.empty,()=>[r(Dn,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty,size:this.size})])):r(on,{ref:"scrollbarRef",theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,scrollable:this.scrollable,container:l?this.virtualListContainer:void 0,content:l?this.virtualListContent:void 0,onScroll:l?void 0:this.doScroll},{default:()=>l?r(Fn,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:u})=>u.isGroup?r(go,{key:u.key,clsPrefix:n,tmNode:u}):u.ignored?null:r(bo,{clsPrefix:n,key:u.key,tmNode:u})}):r("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(u=>u.isGroup?r(go,{key:u.key,clsPrefix:n,tmNode:u}):r(bo,{clsPrefix:n,key:u.key,tmNode:u})))}),Ke(e.action,u=>u&&[r("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},u),r(Mn,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function jn(e){const{textColor2:l,primaryColorHover:n,primaryColorPressed:a,primaryColor:c,infoColor:f,successColor:u,warningColor:t,errorColor:x,baseColor:w,borderColor:b,opacityDisabled:C,tagColor:m,closeIconColor:h,closeIconColorHover:v,closeIconColorPressed:O,borderRadiusSmall:_,fontSizeMini:R,fontSizeTiny:S,fontSizeSmall:k,fontSizeMedium:E,heightMini:A,heightTiny:K,heightSmall:L,heightMedium:J,closeColorHover:ee,closeColorPressed:q,buttonColor2Hover:oe,buttonColor2Pressed:ne,fontWeightStrong:N}=e;return Object.assign(Object.assign({},an),{closeBorderRadius:_,heightTiny:A,heightSmall:K,heightMedium:L,heightLarge:J,borderRadius:_,opacityDisabled:C,fontSizeTiny:R,fontSizeSmall:S,fontSizeMedium:k,fontSizeLarge:E,fontWeightStrong:N,textColorCheckable:l,textColorHoverCheckable:l,textColorPressedCheckable:l,textColorChecked:w,colorCheckable:"#0000",colorHoverCheckable:oe,colorPressedCheckable:ne,colorChecked:c,colorCheckedHover:n,colorCheckedPressed:a,border:`1px solid ${b}`,textColor:l,color:m,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:v,closeIconColorPressed:O,closeColorHover:ee,closeColorPressed:q,borderPrimary:`1px solid ${D(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:D(c,{alpha:.12}),colorBorderedPrimary:D(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:D(c,{alpha:.12}),closeColorPressedPrimary:D(c,{alpha:.18}),borderInfo:`1px solid ${D(f,{alpha:.3})}`,textColorInfo:f,colorInfo:D(f,{alpha:.12}),colorBorderedInfo:D(f,{alpha:.1}),closeIconColorInfo:f,closeIconColorHoverInfo:f,closeIconColorPressedInfo:f,closeColorHoverInfo:D(f,{alpha:.12}),closeColorPressedInfo:D(f,{alpha:.18}),borderSuccess:`1px solid ${D(u,{alpha:.3})}`,textColorSuccess:u,colorSuccess:D(u,{alpha:.12}),colorBorderedSuccess:D(u,{alpha:.1}),closeIconColorSuccess:u,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:u,closeColorHoverSuccess:D(u,{alpha:.12}),closeColorPressedSuccess:D(u,{alpha:.18}),borderWarning:`1px solid ${D(t,{alpha:.35})}`,textColorWarning:t,colorWarning:D(t,{alpha:.15}),colorBorderedWarning:D(t,{alpha:.12}),closeIconColorWarning:t,closeIconColorHoverWarning:t,closeIconColorPressedWarning:t,closeColorHoverWarning:D(t,{alpha:.12}),closeColorPressedWarning:D(t,{alpha:.18}),borderError:`1px solid ${D(x,{alpha:.23})}`,textColorError:x,colorError:D(x,{alpha:.1}),colorBorderedError:D(x,{alpha:.08}),closeIconColorError:x,closeIconColorHoverError:x,closeIconColorPressedError:x,closeColorHoverError:D(x,{alpha:.12}),closeColorPressedError:D(x,{alpha:.18})})}const Wn={common:rn,self:jn},Un={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Kn=T("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[j("strong",`
 font-weight: var(--n-font-weight-strong);
 `),z("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),z("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),z("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),z("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),j("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[z("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),z("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),j("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),j("icon, avatar",[j("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),j("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),j("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Oe("disabled",[X("&:hover","background-color: var(--n-color-hover-checkable);",[Oe("checked","color: var(--n-text-color-hover-checkable);")]),X("&:active","background-color: var(--n-color-pressed-checkable);",[Oe("checked","color: var(--n-text-color-pressed-checkable);")])]),j("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Oe("disabled",[X("&:hover","background-color: var(--n-color-checked-hover);"),X("&:active","background-color: var(--n-color-checked-pressed);")])])])]),qn=Object.assign(Object.assign(Object.assign({},he.props),Un),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Gn=cn("n-tag"),no=fe({name:"Tag",props:qn,slots:Object,setup(e){const l=B(null),{mergedBorderedRef:n,mergedClsPrefixRef:a,inlineThemeDisabled:c,mergedRtlRef:f}=Ne(e),u=he("Tag","-tag",Kn,Wn,e,a);lo(Gn,{roundRef:Z(e,"round")});function t(){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:v,onUpdateChecked:O,"onUpdate:checked":_}=e;O&&O(!h),_&&_(!h),v&&v(!h)}}function x(h){if(e.triggerClickOnClose||h.stopPropagation(),!e.disabled){const{onClose:v}=e;v&&ce(v,h)}}const w={setTextContent(h){const{value:v}=l;v&&(v.textContent=h)}},b=ao("Tag",f,a),C=$(()=>{const{type:h,size:v,color:{color:O,textColor:_}={}}=e,{common:{cubicBezierEaseInOut:R},self:{padding:S,closeMargin:k,borderRadius:E,opacityDisabled:A,textColorCheckable:K,textColorHoverCheckable:L,textColorPressedCheckable:J,textColorChecked:ee,colorCheckable:q,colorHoverCheckable:oe,colorPressedCheckable:ne,colorChecked:N,colorCheckedHover:le,colorCheckedPressed:ve,closeBorderRadius:de,fontWeightStrong:ye,[V("colorBordered",h)]:ie,[V("closeSize",v)]:pe,[V("closeIconSize",v)]:G,[V("fontSize",v)]:re,[V("height",v)]:s,[V("color",h)]:g,[V("textColor",h)]:H,[V("border",h)]:ae,[V("closeIconColor",h)]:ge,[V("closeIconColorHover",h)]:me,[V("closeIconColorPressed",h)]:se,[V("closeColorHover",h)]:Y,[V("closeColorPressed",h)]:Ce}}=u.value,te=Fe(k);return{"--n-font-weight-strong":ye,"--n-avatar-size-override":`calc(${s} - 8px)`,"--n-bezier":R,"--n-border-radius":E,"--n-border":ae,"--n-close-icon-size":G,"--n-close-color-pressed":Ce,"--n-close-color-hover":Y,"--n-close-border-radius":de,"--n-close-icon-color":ge,"--n-close-icon-color-hover":me,"--n-close-icon-color-pressed":se,"--n-close-icon-color-disabled":ge,"--n-close-margin-top":te.top,"--n-close-margin-right":te.right,"--n-close-margin-bottom":te.bottom,"--n-close-margin-left":te.left,"--n-close-size":pe,"--n-color":O||(n.value?ie:g),"--n-color-checkable":q,"--n-color-checked":N,"--n-color-checked-hover":le,"--n-color-checked-pressed":ve,"--n-color-hover-checkable":oe,"--n-color-pressed-checkable":ne,"--n-font-size":re,"--n-height":s,"--n-opacity-disabled":A,"--n-padding":S,"--n-text-color":_||H,"--n-text-color-checkable":K,"--n-text-color-checked":ee,"--n-text-color-hover-checkable":L,"--n-text-color-pressed-checkable":J}}),m=c?De("tag",$(()=>{let h="";const{type:v,size:O,color:{color:_,textColor:R}={}}=e;return h+=v[0],h+=O[0],_&&(h+=`a${co(_)}`),R&&(h+=`b${co(R)}`),n.value&&(h+="c"),h}),C,e):void 0;return Object.assign(Object.assign({},w),{rtlEnabled:b,mergedClsPrefix:a,contentRef:l,mergedBordered:n,handleClick:t,handleCloseClick:x,cssVars:c?void 0:C,themeClass:m?.themeClass,onRender:m?.onRender})},render(){var e,l;const{mergedClsPrefix:n,rtlEnabled:a,closable:c,color:{borderColor:f}={},round:u,onRender:t,$slots:x}=this;t?.();const w=Ke(x.avatar,C=>C&&r("div",{class:`${n}-tag__avatar`},C)),b=Ke(x.icon,C=>C&&r("div",{class:`${n}-tag__icon`},C));return r("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:a,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:u,[`${n}-tag--avatar`]:w,[`${n}-tag--icon`]:b,[`${n}-tag--closable`]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},b||w,r("span",{class:`${n}-tag__content`,ref:"contentRef"},(l=(e=this.$slots).default)===null||l===void 0?void 0:l.call(e)),!this.checkable&&c?r(sn,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:u,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?r("div",{class:`${n}-tag__border`,style:{borderColor:f}}):null)}}),Zn=X([T("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[T("base-loading",`
 color: var(--n-loading-color);
 `),T("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),z("state-border",`
 z-index: 1;
 border-color: #0000;
 `),T("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),T("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[z("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),T("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[z("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),T("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),T("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[T("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[z("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),z("render-label",`
 color: var(--n-text-color);
 `)]),Oe("disabled",[X("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),j("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),j("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),T("base-selection-label","background-color: var(--n-color-active);"),T("base-selection-tags","background-color: var(--n-color-active);")])]),j("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),T("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[T("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
 color: var(--n-text-color-disabled);
 `)]),T("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),T("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),T("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[z("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),z("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>j(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),Oe("disabled",[X("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),j("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),T("base-selection-label",`background-color: var(--n-color-active-${e});`),T("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),j("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),T("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),T("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[X("&:last-child","padding-right: 0;"),T("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Jn=fe({name:"InternalSelection",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:l,mergedRtlRef:n}=Ne(e),a=ao("InternalSelection",n,l),c=B(null),f=B(null),u=B(null),t=B(null),x=B(null),w=B(null),b=B(null),C=B(null),m=B(null),h=B(null),v=B(!1),O=B(!1),_=B(!1),R=he("InternalSelection","-internal-selection",Zn,hn,e,Z(e,"clsPrefix")),S=$(()=>e.clearable&&!e.disabled&&(_.value||e.active)),k=$(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),E=$(()=>{const i=e.selectedOption;if(i)return i[e.labelField]}),A=$(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function K(){var i;const{value:p}=c;if(p){const{value:W}=f;W&&(W.style.width=`${p.offsetWidth}px`,e.maxTagCount!=="responsive"&&((i=m.value)===null||i===void 0||i.sync({showAllItemsBeforeCalculate:!1})))}}function L(){const{value:i}=h;i&&(i.style.display="none")}function J(){const{value:i}=h;i&&(i.style.display="inline-block")}Re(Z(e,"active"),i=>{i||L()}),Re(Z(e,"pattern"),()=>{e.multiple&&io(K)});function ee(i){const{onFocus:p}=e;p&&p(i)}function q(i){const{onBlur:p}=e;p&&p(i)}function oe(i){const{onDeleteOption:p}=e;p&&p(i)}function ne(i){const{onClear:p}=e;p&&p(i)}function N(i){const{onPatternInput:p}=e;p&&p(i)}function le(i){var p;(!i.relatedTarget||!(!((p=u.value)===null||p===void 0)&&p.contains(i.relatedTarget)))&&ee(i)}function ve(i){var p;!((p=u.value)===null||p===void 0)&&p.contains(i.relatedTarget)||q(i)}function de(i){ne(i)}function ye(){_.value=!0}function ie(){_.value=!1}function pe(i){!e.active||!e.filterable||i.target!==f.value&&i.preventDefault()}function G(i){oe(i)}const re=B(!1);function s(i){if(i.key==="Backspace"&&!re.value&&!e.pattern.length){const{selectedOptions:p}=e;p?.length&&G(p[p.length-1])}}let g=null;function H(i){const{value:p}=c;if(p){const W=i.target.value;p.textContent=W,K()}e.ignoreComposition&&re.value?g=i:N(i)}function ae(){re.value=!0}function ge(){re.value=!1,e.ignoreComposition&&N(g),g=null}function me(i){var p;O.value=!0,(p=e.onPatternFocus)===null||p===void 0||p.call(e,i)}function se(i){var p;O.value=!1,(p=e.onPatternBlur)===null||p===void 0||p.call(e,i)}function Y(){var i,p;if(e.filterable)O.value=!1,(i=w.value)===null||i===void 0||i.blur(),(p=f.value)===null||p===void 0||p.blur();else if(e.multiple){const{value:W}=t;W?.blur()}else{const{value:W}=x;W?.blur()}}function Ce(){var i,p,W;e.filterable?(O.value=!1,(i=w.value)===null||i===void 0||i.focus()):e.multiple?(p=t.value)===null||p===void 0||p.focus():(W=x.value)===null||W===void 0||W.focus()}function te(){const{value:i}=f;i&&(J(),i.focus())}function Me(){const{value:i}=f;i&&i.blur()}function Te(i){const{value:p}=b;p&&p.setTextContent(`+${i}`)}function Ie(){const{value:i}=C;return i}function Be(){return f.value}let we=null;function Se(){we!==null&&window.clearTimeout(we)}function _e(){e.active||(Se(),we=window.setTimeout(()=>{A.value&&(v.value=!0)},100))}function $e(){Se()}function Ee(i){i||(Se(),v.value=!1)}Re(A,i=>{i||(v.value=!1)}),Ge(()=>{fn(()=>{const i=w.value;i&&(e.disabled?i.removeAttribute("tabindex"):i.tabIndex=O.value?-1:0)})}),So(u,e.onResize);const{inlineThemeDisabled:Pe}=e,ke=$(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:p},self:{fontWeight:W,borderRadius:Ze,color:Je,placeholderColor:Le,textColor:He,paddingSingle:Ve,paddingMultiple:Ye,caretColor:Qe,colorDisabled:je,textColorDisabled:xe,placeholderColorDisabled:o,colorActive:d,boxShadowFocus:y,boxShadowActive:I,boxShadowHover:F,border:P,borderFocus:M,borderHover:U,borderActive:ue,arrowColor:Oo,arrowColorDisabled:Ro,loadingColor:Po,colorActiveWarning:zo,boxShadowFocusWarning:Fo,boxShadowActiveWarning:Mo,boxShadowHoverWarning:To,borderWarning:Io,borderFocusWarning:Bo,borderHoverWarning:_o,borderActiveWarning:$o,colorActiveError:Eo,boxShadowFocusError:Ao,boxShadowActiveError:No,boxShadowHoverError:Do,borderError:Lo,borderFocusError:Ho,borderHoverError:Vo,borderActiveError:jo,clearColor:Wo,clearColorHover:Uo,clearColorPressed:Ko,clearSize:qo,arrowSize:Go,[V("height",i)]:Zo,[V("fontSize",i)]:Jo}}=R.value,We=Fe(Ve),Ue=Fe(Ye);return{"--n-bezier":p,"--n-border":P,"--n-border-active":ue,"--n-border-focus":M,"--n-border-hover":U,"--n-border-radius":Ze,"--n-box-shadow-active":I,"--n-box-shadow-focus":y,"--n-box-shadow-hover":F,"--n-caret-color":Qe,"--n-color":Je,"--n-color-active":d,"--n-color-disabled":je,"--n-font-size":Jo,"--n-height":Zo,"--n-padding-single-top":We.top,"--n-padding-multiple-top":Ue.top,"--n-padding-single-right":We.right,"--n-padding-multiple-right":Ue.right,"--n-padding-single-left":We.left,"--n-padding-multiple-left":Ue.left,"--n-padding-single-bottom":We.bottom,"--n-padding-multiple-bottom":Ue.bottom,"--n-placeholder-color":Le,"--n-placeholder-color-disabled":o,"--n-text-color":He,"--n-text-color-disabled":xe,"--n-arrow-color":Oo,"--n-arrow-color-disabled":Ro,"--n-loading-color":Po,"--n-color-active-warning":zo,"--n-box-shadow-focus-warning":Fo,"--n-box-shadow-active-warning":Mo,"--n-box-shadow-hover-warning":To,"--n-border-warning":Io,"--n-border-focus-warning":Bo,"--n-border-hover-warning":_o,"--n-border-active-warning":$o,"--n-color-active-error":Eo,"--n-box-shadow-focus-error":Ao,"--n-box-shadow-active-error":No,"--n-box-shadow-hover-error":Do,"--n-border-error":Lo,"--n-border-focus-error":Ho,"--n-border-hover-error":Vo,"--n-border-active-error":jo,"--n-clear-size":qo,"--n-clear-color":Wo,"--n-clear-color-hover":Uo,"--n-clear-color-pressed":Ko,"--n-arrow-size":Go,"--n-font-weight":W}}),Q=Pe?De("internal-selection",$(()=>e.size[0]),ke,e):void 0;return{mergedTheme:R,mergedClearable:S,mergedClsPrefix:l,rtlEnabled:a,patternInputFocused:O,filterablePlaceholder:k,label:E,selected:A,showTagsPanel:v,isComposing:re,counterRef:b,counterWrapperRef:C,patternInputMirrorRef:c,patternInputRef:f,selfRef:u,multipleElRef:t,singleElRef:x,patternInputWrapperRef:w,overflowRef:m,inputTagElRef:h,handleMouseDown:pe,handleFocusin:le,handleClear:de,handleMouseEnter:ye,handleMouseLeave:ie,handleDeleteOption:G,handlePatternKeyDown:s,handlePatternInputInput:H,handlePatternInputBlur:se,handlePatternInputFocus:me,handleMouseEnterCounter:_e,handleMouseLeaveCounter:$e,handleFocusout:ve,handleCompositionEnd:ge,handleCompositionStart:ae,onPopoverUpdateShow:Ee,focus:Ce,focusInput:te,blur:Y,blurInput:Me,updateCounter:Te,getCounter:Ie,getTail:Be,renderLabel:e.renderLabel,cssVars:Pe?void 0:ke,themeClass:Q?.themeClass,onRender:Q?.onRender}},render(){const{status:e,multiple:l,size:n,disabled:a,filterable:c,maxTagCount:f,bordered:u,clsPrefix:t,ellipsisTagPopoverProps:x,onRender:w,renderTag:b,renderLabel:C}=this;w?.();const m=f==="responsive",h=typeof f=="number",v=m||h,O=r(dn,null,{default:()=>r(Pn,{clsPrefix:t,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var R,S;return(S=(R=this.$slots).arrow)===null||S===void 0?void 0:S.call(R)}})});let _;if(l){const{labelField:R}=this,S=N=>r("div",{class:`${t}-base-selection-tag-wrapper`,key:N.value},b?b({option:N,handleClose:()=>{this.handleDeleteOption(N)}}):r(no,{size:n,closable:!N.disabled,disabled:a,onClose:()=>{this.handleDeleteOption(N)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>C?C(N,!0):ze(N[R],N,!0)})),k=()=>(h?this.selectedOptions.slice(0,f):this.selectedOptions).map(S),E=c?r("div",{class:`${t}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:a,value:this.pattern,autofocus:this.autofocus,class:`${t}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${t}-base-selection-input-tag__mirror`},this.pattern)):null,A=m?()=>r("div",{class:`${t}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(no,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:a})):void 0;let K;if(h){const N=this.selectedOptions.length-f;N>0&&(K=r("div",{class:`${t}-base-selection-tag-wrapper`,key:"__counter__"},r(no,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:a},{default:()=>`+${N}`})))}const L=m?c?r(fo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:A,tail:()=>E}):r(fo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:A}):h&&K?k().concat(K):k(),J=v?()=>r("div",{class:`${t}-base-selection-popover`},m?k():this.selectedOptions.map(S)):void 0,ee=v?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},x):null,oe=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${t}-base-selection-placeholder ${t}-base-selection-overlay`},r("div",{class:`${t}-base-selection-placeholder__inner`},this.placeholder)):null,ne=c?r("div",{ref:"patternInputWrapperRef",class:`${t}-base-selection-tags`},L,m?null:E,O):r("div",{ref:"multipleElRef",class:`${t}-base-selection-tags`,tabindex:a?void 0:0},L,O);_=r(un,null,v?r(zn,Object.assign({},ee,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ne,default:J}):ne,oe)}else if(c){const R=this.pattern||this.isComposing,S=this.active?!R:!this.selected,k=this.active?!1:this.selected;_=r("div",{ref:"patternInputWrapperRef",class:`${t}-base-selection-label`,title:this.patternInputFocused?void 0:vo(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${t}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:a,disabled:a,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),k?r("div",{class:`${t}-base-selection-label__render-label ${t}-base-selection-overlay`,key:"input"},r("div",{class:`${t}-base-selection-overlay__wrapper`},b?b({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,S?r("div",{class:`${t}-base-selection-placeholder ${t}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${t}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,O)}else _=r("div",{ref:"singleElRef",class:`${t}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${t}-base-selection-input`,title:vo(this.label),key:"input"},r("div",{class:`${t}-base-selection-input__content`},b?b({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):r("div",{class:`${t}-base-selection-placeholder ${t}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${t}-base-selection-placeholder__inner`},this.placeholder)),O);return r("div",{ref:"selfRef",class:[`${t}-base-selection`,this.rtlEnabled&&`${t}-base-selection--rtl`,this.themeClass,e&&`${t}-base-selection--${e}-status`,{[`${t}-base-selection--active`]:this.active,[`${t}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${t}-base-selection--disabled`]:this.disabled,[`${t}-base-selection--multiple`]:this.multiple,[`${t}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,u?r("div",{class:`${t}-base-selection__border`}):null,u?r("div",{class:`${t}-base-selection__state-border`}):null)}});function qe(e){return e.type==="group"}function ko(e){return e.type==="ignored"}function to(e,l){try{return!!(1+l.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Yn(e,l){return{getIsGroup:qe,getIgnored:ko,getKey(a){return qe(a)?a.name||a.key||"key-required":a[e]},getChildren(a){return a[l]}}}function Qn(e,l,n,a){if(!l)return e;function c(f){if(!Array.isArray(f))return[];const u=[];for(const t of f)if(qe(t)){const x=c(t[a]);x.length&&u.push(Object.assign({},t,{[a]:x}))}else{if(ko(t))continue;l(n,t)&&u.push(t)}return u}return c(e)}function Xn(e,l,n){const a=new Map;return e.forEach(c=>{qe(c)?c[n].forEach(f=>{a.set(f[l],f)}):a.set(c[l],c)}),a}const et=X([T("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),T("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[yo({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),ot=Object.assign(Object.assign({},he.props),{to:ro.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),ut=fe({name:"Select",props:ot,slots:Object,setup(e){const{mergedClsPrefixRef:l,mergedBorderedRef:n,namespaceRef:a,inlineThemeDisabled:c}=Ne(e),f=he("Select","-select",et,bn,e,l),u=B(e.defaultValue),t=Z(e,"value"),x=ho(t,u),w=B(!1),b=B(""),C=Bn(e,["items","options"]),m=B([]),h=B([]),v=$(()=>h.value.concat(m.value).concat(C.value)),O=$(()=>{const{filter:o}=e;if(o)return o;const{labelField:d,valueField:y}=e;return(I,F)=>{if(!F)return!1;const P=F[d];if(typeof P=="string")return to(I,P);const M=F[y];return typeof M=="string"?to(I,M):typeof M=="number"?to(I,String(M)):!1}}),_=$(()=>{if(e.remote)return C.value;{const{value:o}=v,{value:d}=b;return!d.length||!e.filterable?o:Qn(o,O.value,d,e.childrenField)}}),R=$(()=>{const{valueField:o,childrenField:d}=e,y=Yn(o,d);return In(_.value,y)}),S=$(()=>Xn(v.value,e.valueField,e.childrenField)),k=B(!1),E=ho(Z(e,"show"),k),A=B(null),K=B(null),L=B(null),{localeRef:J}=wo("Select"),ee=$(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:J.value.placeholder}),q=[],oe=B(new Map),ne=$(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:d,valueField:y}=e;return I=>({[d]:String(I),[y]:I})}return o===!1?!1:d=>Object.assign(o(d),{value:d})});function N(o){const d=e.remote,{value:y}=oe,{value:I}=S,{value:F}=ne,P=[];return o.forEach(M=>{if(I.has(M))P.push(I.get(M));else if(d&&y.has(M))P.push(y.get(M));else if(F){const U=F(M);U&&P.push(U)}}),P}const le=$(()=>{if(e.multiple){const{value:o}=x;return Array.isArray(o)?N(o):[]}return null}),ve=$(()=>{const{value:o}=x;return!e.multiple&&!Array.isArray(o)?o===null?null:N([o])[0]||null:null}),de=pn(e),{mergedSizeRef:ye,mergedDisabledRef:ie,mergedStatusRef:pe}=de;function G(o,d){const{onChange:y,"onUpdate:value":I,onUpdateValue:F}=e,{nTriggerFormChange:P,nTriggerFormInput:M}=de;y&&ce(y,o,d),F&&ce(F,o,d),I&&ce(I,o,d),u.value=o,P(),M()}function re(o){const{onBlur:d}=e,{nTriggerFormBlur:y}=de;d&&ce(d,o),y()}function s(){const{onClear:o}=e;o&&ce(o)}function g(o){const{onFocus:d,showOnFocus:y}=e,{nTriggerFormFocus:I}=de;d&&ce(d,o),I(),y&&se()}function H(o){const{onSearch:d}=e;d&&ce(d,o)}function ae(o){const{onScroll:d}=e;d&&ce(d,o)}function ge(){var o;const{remote:d,multiple:y}=e;if(d){const{value:I}=oe;if(y){const{valueField:F}=e;(o=le.value)===null||o===void 0||o.forEach(P=>{I.set(P[F],P)})}else{const F=ve.value;F&&I.set(F[e.valueField],F)}}}function me(o){const{onUpdateShow:d,"onUpdate:show":y}=e;d&&ce(d,o),y&&ce(y,o),k.value=o}function se(){ie.value||(me(!0),k.value=!0,e.filterable&&Ve())}function Y(){me(!1)}function Ce(){b.value="",h.value=q}const te=B(!1);function Me(){e.filterable&&(te.value=!0)}function Te(){e.filterable&&(te.value=!1,E.value||Ce())}function Ie(){ie.value||(E.value?e.filterable?Ve():Y():se())}function Be(o){var d,y;!((y=(d=L.value)===null||d===void 0?void 0:d.selfRef)===null||y===void 0)&&y.contains(o.relatedTarget)||(w.value=!1,re(o),Y())}function we(o){g(o),w.value=!0}function Se(){w.value=!0}function _e(o){var d;!((d=A.value)===null||d===void 0)&&d.$el.contains(o.relatedTarget)||(w.value=!1,re(o),Y())}function $e(){var o;(o=A.value)===null||o===void 0||o.focus(),Y()}function Ee(o){var d;E.value&&(!((d=A.value)===null||d===void 0)&&d.$el.contains(Cn(o))||Y())}function Pe(o){if(!Array.isArray(o))return[];if(ne.value)return Array.from(o);{const{remote:d}=e,{value:y}=S;if(d){const{value:I}=oe;return o.filter(F=>y.has(F)||I.has(F))}else return o.filter(I=>y.has(I))}}function ke(o){Q(o.rawNode)}function Q(o){if(ie.value)return;const{tag:d,remote:y,clearFilterAfterSelect:I,valueField:F}=e;if(d&&!y){const{value:P}=h,M=P[0]||null;if(M){const U=m.value;U.length?U.push(M):m.value=[M],h.value=q}}if(y&&oe.value.set(o[F],o),e.multiple){const P=Pe(x.value),M=P.findIndex(U=>U===o[F]);if(~M){if(P.splice(M,1),d&&!y){const U=i(o[F]);~U&&(m.value.splice(U,1),I&&(b.value=""))}}else P.push(o[F]),I&&(b.value="");G(P,N(P))}else{if(d&&!y){const P=i(o[F]);~P?m.value=[m.value[P]]:m.value=q}He(),Y(),G(o[F],o)}}function i(o){return m.value.findIndex(y=>y[e.valueField]===o)}function p(o){E.value||se();const{value:d}=o.target;b.value=d;const{tag:y,remote:I}=e;if(H(d),y&&!I){if(!d){h.value=q;return}const{onCreate:F}=e,P=F?F(d):{[e.labelField]:d,[e.valueField]:d},{valueField:M,labelField:U}=e;C.value.some(ue=>ue[M]===P[M]||ue[U]===P[U])||m.value.some(ue=>ue[M]===P[M]||ue[U]===P[U])?h.value=q:h.value=[P]}}function W(o){o.stopPropagation();const{multiple:d}=e;!d&&e.filterable&&Y(),s(),d?G([],[]):G(null,null)}function Ze(o){!Ae(o,"action")&&!Ae(o,"empty")&&!Ae(o,"header")&&o.preventDefault()}function Je(o){ae(o)}function Le(o){var d,y,I,F,P;if(!e.keyboard){o.preventDefault();return}switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((d=A.value)===null||d===void 0)&&d.isComposing)){if(E.value){const M=(y=L.value)===null||y===void 0?void 0:y.getPendingTmNode();M?ke(M):e.filterable||(Y(),He())}else if(se(),e.tag&&te.value){const M=h.value[0];if(M){const U=M[e.valueField],{value:ue}=x;e.multiple&&Array.isArray(ue)&&ue.includes(U)||Q(M)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;E.value&&((I=L.value)===null||I===void 0||I.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;E.value?(F=L.value)===null||F===void 0||F.next():se();break;case"Escape":E.value&&(xn(o),Y()),(P=A.value)===null||P===void 0||P.focus();break}}function He(){var o;(o=A.value)===null||o===void 0||o.focus()}function Ve(){var o;(o=A.value)===null||o===void 0||o.focusInput()}function Ye(){var o;E.value&&((o=K.value)===null||o===void 0||o.syncPosition())}ge(),Re(Z(e,"options"),ge);const Qe={focus:()=>{var o;(o=A.value)===null||o===void 0||o.focus()},focusInput:()=>{var o;(o=A.value)===null||o===void 0||o.focusInput()},blur:()=>{var o;(o=A.value)===null||o===void 0||o.blur()},blurInput:()=>{var o;(o=A.value)===null||o===void 0||o.blurInput()}},je=$(()=>{const{self:{menuBoxShadow:o}}=f.value;return{"--n-menu-box-shadow":o}}),xe=c?De("select",void 0,je,e):void 0;return Object.assign(Object.assign({},Qe),{mergedStatus:pe,mergedClsPrefix:l,mergedBordered:n,namespace:a,treeMate:R,isMounted:mn(),triggerRef:A,menuRef:L,pattern:b,uncontrolledShow:k,mergedShow:E,adjustedTo:ro(e),uncontrolledValue:u,mergedValue:x,followerRef:K,localizedPlaceholder:ee,selectedOption:ve,selectedOptions:le,mergedSize:ye,mergedDisabled:ie,focused:w,activeWithoutMenuOpen:te,inlineThemeDisabled:c,onTriggerInputFocus:Me,onTriggerInputBlur:Te,handleTriggerOrMenuResize:Ye,handleMenuFocus:Se,handleMenuBlur:_e,handleMenuTabOut:$e,handleTriggerClick:Ie,handleToggle:ke,handleDeleteOption:Q,handlePatternInput:p,handleClear:W,handleTriggerBlur:Be,handleTriggerFocus:we,handleKeydown:Le,handleMenuAfterLeave:Ce,handleMenuClickOutside:Ee,handleMenuScroll:Je,handleMenuKeydown:Le,handleMenuMousedown:Ze,mergedTheme:f,cssVars:c?void 0:je,themeClass:xe?.themeClass,onRender:xe?.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(kn,null,{default:()=>[r(On,null,{default:()=>r(Jn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,l;return[(l=(e=this.$slots).arrow)===null||l===void 0?void 0:l.call(e)]}})}),r(Rn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ro.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(xo,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,l,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),vn(r(Vn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(l=this.menuProps)===null||l===void 0?void 0:l.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var a,c;return[(c=(a=this.$slots).empty)===null||c===void 0?void 0:c.call(a)]},header:()=>{var a,c;return[(c=(a=this.$slots).header)===null||c===void 0?void 0:c.call(a)]},action:()=>{var a,c;return[(c=(a=this.$slots).action)===null||c===void 0?void 0:c.call(a)]}}),this.displayDirective==="show"?[[gn,this.mergedShow],[uo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[uo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{ut as N,fo as V,Dn as _,Vn as a,Yn as c,oo as m};

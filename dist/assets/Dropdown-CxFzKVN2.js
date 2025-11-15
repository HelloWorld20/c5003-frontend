import{r as V,ab as me,d as U,i,s as ne,a9 as ge,a as w,A as Y,C as j,E as re,af as K,p as _,n as b,bU as $e,bV as Ke,x as D,q as T,aH as De,aJ as Te,aK as Oe,X as Ae,ci as ee,I as J,y as Z,ao as Fe,ac as X,D as se,cp as Be,cq as Me,aO as oe,a4 as we,al as ue,cr as je,a6 as Le,at as ye,ai as Ue,cs as Ee,au as He,as as Ve,a5 as Ge,ah as pe,ce as We,ct as qe}from"./index-Fa26LLGJ.js";import{a as fe}from"./use-locale-3ZZNx-H2.js";import{r as Xe,N as Je,p as xe}from"./Popover-OLpDKtti.js";import{f as Ye}from"./get-D-rsvxxO.js";import{B as Ze,V as Qe,b as eo}from"./Follower-YbKMuAEO.js";import{h as be,u as oo}from"./use-keyboard-DyVeZvMZ.js";import{c as no}from"./create-C8zW23Rr.js";function ro(e,n,a){const t=V(e.value);let r=null;return me(e,o=>{r!==null&&window.clearTimeout(r),o===!0?a&&!a.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},n):t.value=!1}),t}function to(e){return n=>{n?e.value=n.$el:e.value=null}}const io=U({name:"ChevronRight",render(){return i("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ke=re("n-checkbox-group"),ao={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},$o=U({name:"CheckboxGroup",props:ao,setup(e){const{mergedClsPrefixRef:n}=ne(e),a=ge(e),{mergedSizeRef:t,mergedDisabledRef:r}=a,o=V(e.defaultValue),c=w(()=>e.value),d=fe(c,o),h=w(()=>{var x;return((x=d.value)===null||x===void 0?void 0:x.length)||0}),f=w(()=>Array.isArray(d.value)?new Set(d.value):new Set);function C(x,m){const{nTriggerFormInput:N,nTriggerFormChange:P}=a,{onChange:k,"onUpdate:value":g,onUpdateValue:z}=e;if(Array.isArray(d.value)){const I=Array.from(d.value),G=I.findIndex(E=>E===m);x?~G||(I.push(m),z&&K(z,I,{actionType:"check",value:m}),g&&K(g,I,{actionType:"check",value:m}),N(),P(),o.value=I,k&&K(k,I)):~G&&(I.splice(G,1),z&&K(z,I,{actionType:"uncheck",value:m}),g&&K(g,I,{actionType:"uncheck",value:m}),k&&K(k,I),o.value=I,N(),P())}else x?(z&&K(z,[m],{actionType:"check",value:m}),g&&K(g,[m],{actionType:"check",value:m}),k&&K(k,[m]),o.value=[m],N(),P()):(z&&K(z,[],{actionType:"uncheck",value:m}),g&&K(g,[],{actionType:"uncheck",value:m}),k&&K(k,[]),o.value=[],N(),P())}return Y(ke,{checkedCountRef:h,maxRef:j(e,"max"),minRef:j(e,"min"),valueSetRef:f,disabledRef:r,mergedSizeRef:t,toggleCheckbox:C}),{mergedClsPrefix:n}},render(){return i("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),lo=()=>i("svg",{viewBox:"0 0 64 64",class:"check-icon"},i("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),co=()=>i("svg",{viewBox:"0 0 100 100",class:"line-icon"},i("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),so=_([b("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[D("show-label","line-height: var(--n-label-line-height);"),_("&:hover",[b("checkbox-box",[T("border","border: var(--n-border-checked);")])]),_("&:focus:not(:active)",[b("checkbox-box",[T("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),D("inside-table",[b("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),D("checked",[b("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[b("checkbox-icon",[_(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),D("indeterminate",[b("checkbox-box",[b("checkbox-icon",[_(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),_(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),D("checked, indeterminate",[_("&:focus:not(:active)",[b("checkbox-box",[T("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[T("border",{border:"var(--n-border-checked)"})])]),D("disabled",{cursor:"not-allowed"},[D("checked",[b("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[T("border",{border:"var(--n-border-disabled-checked)"}),b("checkbox-icon",[_(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),b("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[T("border",`
 border: var(--n-border-disabled);
 `),b("checkbox-icon",[_(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),T("label",`
 color: var(--n-text-color-disabled);
 `)]),b("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),b("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[T("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),b("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[_(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),De({left:"1px",top:"1px"})])]),T("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[_("&:empty",{display:"none"})])]),$e(b("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Ke(b("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),uo=Object.assign(Object.assign({},Z.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ko=U({name:"Checkbox",props:uo,setup(e){const n=J(ke,null),a=V(null),{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedRtlRef:o}=ne(e),c=V(e.defaultChecked),d=j(e,"checked"),h=fe(d,c),f=ee(()=>{if(n){const u=n.valueSetRef.value;return u&&e.value!==void 0?u.has(e.value):!1}else return h.value===e.checkedValue}),C=ge(e,{mergedSize(u){const{size:O}=e;if(O!==void 0)return O;if(n){const{value:$}=n.mergedSizeRef;if($!==void 0)return $}if(u){const{mergedSize:$}=u;if($!==void 0)return $.value}return"medium"},mergedDisabled(u){const{disabled:O}=e;if(O!==void 0)return O;if(n){if(n.disabledRef.value)return!0;const{maxRef:{value:$},checkedCountRef:A}=n;if($!==void 0&&A.value>=$&&!f.value)return!0;const{minRef:{value:B}}=n;if(B!==void 0&&A.value<=B&&f.value)return!0}return u?u.disabled.value:!1}}),{mergedDisabledRef:x,mergedSizeRef:m}=C,N=Z("Checkbox","-checkbox",so,Me,e,t);function P(u){if(n&&e.value!==void 0)n.toggleCheckbox(!f.value,e.value);else{const{onChange:O,"onUpdate:checked":$,onUpdateChecked:A}=e,{nTriggerFormInput:B,nTriggerFormChange:M}=C,l=f.value?e.uncheckedValue:e.checkedValue;$&&K($,l,u),A&&K(A,l,u),O&&K(O,l,u),B(),M(),c.value=l}}function k(u){x.value||P(u)}function g(u){if(!x.value)switch(u.key){case" ":case"Enter":P(u)}}function z(u){switch(u.key){case" ":u.preventDefault()}}const I={focus:()=>{var u;(u=a.value)===null||u===void 0||u.focus()},blur:()=>{var u;(u=a.value)===null||u===void 0||u.blur()}},G=Fe("Checkbox",o,t),E=w(()=>{const{value:u}=m,{common:{cubicBezierEaseInOut:O},self:{borderRadius:$,color:A,colorChecked:B,colorDisabled:M,colorTableHeader:l,colorTableHeaderModal:R,colorTableHeaderPopover:v,checkMarkColor:p,checkMarkColorDisabled:F,border:s,borderFocus:S,borderDisabled:L,borderChecked:W,boxShadowFocus:Q,textColor:q,textColorDisabled:ie,checkMarkColorDisabledChecked:ae,colorDisabledChecked:le,borderDisabledChecked:de,labelPadding:y,labelLineHeight:Pe,labelFontWeight:ze,[X("fontSize",u)]:Ie,[X("size",u)]:_e}}=N.value;return{"--n-label-line-height":Pe,"--n-label-font-weight":ze,"--n-size":_e,"--n-bezier":O,"--n-border-radius":$,"--n-border":s,"--n-border-checked":W,"--n-border-focus":S,"--n-border-disabled":L,"--n-border-disabled-checked":de,"--n-box-shadow-focus":Q,"--n-color":A,"--n-color-checked":B,"--n-color-table":l,"--n-color-table-modal":R,"--n-color-table-popover":v,"--n-color-disabled":M,"--n-color-disabled-checked":le,"--n-text-color":q,"--n-text-color-disabled":ie,"--n-check-mark-color":p,"--n-check-mark-color-disabled":F,"--n-check-mark-color-disabled-checked":ae,"--n-font-size":Ie,"--n-label-padding":y}}),H=r?se("checkbox",w(()=>m.value[0]),E,e):void 0;return Object.assign(C,I,{rtlEnabled:G,selfRef:a,mergedClsPrefix:t,mergedDisabled:x,renderedChecked:f,mergedTheme:N,labelId:Be(),handleClick:k,handleKeyUp:g,handleKeyDown:z,cssVars:r?void 0:E,themeClass:H?.themeClass,onRender:H?.onRender})},render(){var e;const{$slots:n,renderedChecked:a,mergedDisabled:t,indeterminate:r,privateInsideTable:o,cssVars:c,labelId:d,label:h,mergedClsPrefix:f,focusable:C,handleKeyUp:x,handleKeyDown:m,handleClick:N}=this;(e=this.onRender)===null||e===void 0||e.call(this);const P=Te(n.default,k=>h||k?i("span",{class:`${f}-checkbox__label`,id:d},h||k):null);return i("div",{ref:"selfRef",class:[`${f}-checkbox`,this.themeClass,this.rtlEnabled&&`${f}-checkbox--rtl`,a&&`${f}-checkbox--checked`,t&&`${f}-checkbox--disabled`,r&&`${f}-checkbox--indeterminate`,o&&`${f}-checkbox--inside-table`,P&&`${f}-checkbox--show-label`],tabindex:t||!C?void 0:0,role:"checkbox","aria-checked":r?"mixed":a,"aria-labelledby":d,style:c,onKeyup:x,onKeydown:m,onClick:N,onMousedown:()=>{Ae("selectstart",window,k=>{k.preventDefault()},{once:!0})}},i("div",{class:`${f}-checkbox-box-wrapper`}," ",i("div",{class:`${f}-checkbox-box`},i(Oe,null,{default:()=>this.indeterminate?i("div",{key:"indeterminate",class:`${f}-checkbox-icon`},co()):i("div",{key:"check",class:`${f}-checkbox-icon`},lo())}),i("div",{class:`${f}-checkbox-box__border`}))),P)}}),he=re("n-dropdown-menu"),te=re("n-dropdown"),ve=re("n-dropdown-option"),Re=U({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return i("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),fo=U({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=J(he),{renderLabelRef:a,labelFieldRef:t,nodePropsRef:r,renderOptionRef:o}=J(te);return{labelField:t,showIcon:e,hasSubmenu:n,renderLabel:a,nodeProps:r,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:a,showIcon:t,nodeProps:r,renderLabel:o,renderOption:c}=this,{rawNode:d}=this.tmNode,h=i("div",Object.assign({class:`${n}-dropdown-option`},r?.(d)),i("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},i("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,t&&`${n}-dropdown-option-body__prefix--show-icon`]},oe(d.icon)),i("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(d):oe((e=d.title)!==null&&e!==void 0?e:d[this.labelField])),i("div",{class:[`${n}-dropdown-option-body__suffix`,a&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:h,option:d}):h}}),ho=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[D("color-transition",{transition:"color .3s var(--n-bezier)"}),D("depth",{color:"var(--n-color)"},[_("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),_("svg",{height:"1em",width:"1em"})]),po=Object.assign(Object.assign({},Z.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),bo=U({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:po,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=ne(e),t=Z("Icon","-icon",ho,je,e,n),r=w(()=>{const{depth:c}=e,{common:{cubicBezierEaseInOut:d},self:h}=t.value;if(c!==void 0){const{color:f,[`opacity${c}Depth`]:C}=h;return{"--n-bezier":d,"--n-color":f,"--n-opacity":C}}return{"--n-bezier":d,"--n-color":"","--n-opacity":""}}),o=a?se("icon",w(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:w(()=>{const{size:c,color:d}=e;return{fontSize:Ye(c),color:d}}),cssVars:a?void 0:r,themeClass:o?.themeClass,onRender:o?.onRender}},render(){var e;const{$parent:n,depth:a,mergedClsPrefix:t,component:r,onRender:o,themeClass:c}=this;return!((e=n?.$options)===null||e===void 0)&&e._n_icon__&&we("icon","don't wrap `n-icon` inside `n-icon`"),o?.(),i("i",ue(this.$attrs,{role:"img",class:[`${t}-icon`,c,{[`${t}-icon--depth`]:a,[`${t}-icon--color-transition`]:a!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?i(r):this.$slots)}});function ce(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function vo(e){return e.type==="group"}function Se(e){return e.type==="divider"}function mo(e){return e.type==="render"}const Ce=U({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=J(te),{hoverKeyRef:a,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:o,activeKeyPathRef:c,animatedRef:d,mergedShowRef:h,renderLabelRef:f,renderIconRef:C,labelFieldRef:x,childrenFieldRef:m,renderOptionRef:N,nodePropsRef:P,menuPropsRef:k}=n,g=J(ve,null),z=J(he),I=J(ye),G=w(()=>e.tmNode.rawNode),E=w(()=>{const{value:s}=m;return ce(e.tmNode.rawNode,s)}),H=w(()=>{const{disabled:s}=e.tmNode;return s}),u=w(()=>{if(!E.value)return!1;const{key:s,disabled:S}=e.tmNode;if(S)return!1;const{value:L}=a,{value:W}=t,{value:Q}=r,{value:q}=o;return L!==null?q.includes(s):W!==null?q.includes(s)&&q[q.length-1]!==s:Q!==null?q.includes(s):!1}),O=w(()=>t.value===null&&!d.value),$=ro(u,300,O),A=w(()=>!!g?.enteringSubmenuRef.value),B=V(!1);Y(ve,{enteringSubmenuRef:B});function M(){B.value=!0}function l(){B.value=!1}function R(){const{parentKey:s,tmNode:S}=e;S.disabled||h.value&&(r.value=s,t.value=null,a.value=S.key)}function v(){const{tmNode:s}=e;s.disabled||h.value&&a.value!==s.key&&R()}function p(s){if(e.tmNode.disabled||!h.value)return;const{relatedTarget:S}=s;S&&!be({target:S},"dropdownOption")&&!be({target:S},"scrollbarRail")&&(a.value=null)}function F(){const{value:s}=E,{tmNode:S}=e;h.value&&!s&&!S.disabled&&(n.doSelect(S.key,S.rawNode),n.doUpdateShow(!1))}return{labelField:x,renderLabel:f,renderIcon:C,siblingHasIcon:z.showIconRef,siblingHasSubmenu:z.hasSubmenuRef,menuProps:k,popoverBody:I,animated:d,mergedShowSubmenu:w(()=>$.value&&!A.value),rawNode:G,hasSubmenu:E,pending:ee(()=>{const{value:s}=o,{key:S}=e.tmNode;return s.includes(S)}),childActive:ee(()=>{const{value:s}=c,{key:S}=e.tmNode,L=s.findIndex(W=>S===W);return L===-1?!1:L<s.length-1}),active:ee(()=>{const{value:s}=c,{key:S}=e.tmNode,L=s.findIndex(W=>S===W);return L===-1?!1:L===s.length-1}),mergedDisabled:H,renderOption:N,nodeProps:P,handleClick:F,handleMouseMove:v,handleMouseEnter:R,handleMouseLeave:p,handleSubmenuBeforeEnter:M,handleSubmenuAfterEnter:l}},render(){var e,n;const{animated:a,rawNode:t,mergedShowSubmenu:r,clsPrefix:o,siblingHasIcon:c,siblingHasSubmenu:d,renderLabel:h,renderIcon:f,renderOption:C,nodeProps:x,props:m,scrollable:N}=this;let P=null;if(r){const I=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);P=i(Ne,Object.assign({},I,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const k={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=x?.(t),z=i("div",Object.assign({class:[`${o}-dropdown-option`,g?.class],"data-dropdown-option":!0},g),i("div",ue(k,m),[i("div",{class:[`${o}-dropdown-option-body__prefix`,c&&`${o}-dropdown-option-body__prefix--show-icon`]},[f?f(t):oe(t.icon)]),i("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},h?h(t):oe((n=t[this.labelField])!==null&&n!==void 0?n:t.title)),i("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,d&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?i(bo,null,{default:()=>i(io,null)}):null)]),this.hasSubmenu?i(Ze,null,{default:()=>[i(Qe,null,{default:()=>i("div",{class:`${o}-dropdown-offset-container`},i(eo,{show:this.mergedShowSubmenu,placement:this.placement,to:N&&this.popoverBody||void 0,teleportDisabled:!N},{default:()=>i("div",{class:`${o}-dropdown-menu-wrapper`},a?i(Le,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>P}):P)}))})]}):null);return C?C({node:z,option:t}):z}}),go=U({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:a}=this,{children:t}=e;return i(Ue,null,i(fo,{clsPrefix:a,tmNode:e,key:e.key}),t?.map(r=>{const{rawNode:o}=r;return o.show===!1?null:Se(o)?i(Re,{clsPrefix:a,key:r.key}):r.isGroup?(we("dropdown","`group` node is not allowed to be put in `group` node."),null):i(Ce,{clsPrefix:a,tmNode:r,parentKey:n,key:r.key})}))}}),wo=U({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return i("div",n,[e?.()])}}),Ne=U({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:a}=J(te);Y(he,{showIconRef:w(()=>{const r=n.value;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:h})=>r?r(h):h.icon);const{rawNode:d}=o;return r?r(d):d.icon})}),hasSubmenuRef:w(()=>{const{value:r}=a;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:h})=>ce(h,r));const{rawNode:d}=o;return ce(d,r)})})});const t=V(null);return Y(He,null),Y(Ve,null),Y(ye,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:n,scrollable:a}=this,t=this.tmNodes.map(r=>{const{rawNode:o}=r;return o.show===!1?null:mo(o)?i(wo,{tmNode:r,key:r.key}):Se(o)?i(Re,{clsPrefix:n,key:r.key}):vo(o)?i(go,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):i(Ce,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:o.props,scrollable:a})});return i("div",{class:[`${n}-dropdown-menu`,a&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},a?i(Ee,{contentClass:`${n}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?Xe({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),yo=b("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ge(),b("dropdown-option",`
 position: relative;
 `,[_("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[_("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[_("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),pe("disabled",[D("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),_("&::before","background-color: var(--n-option-color-hover);")]),D("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),_("&::before","background-color: var(--n-option-color-active);")]),D("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),D("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),D("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[D("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[D("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[D("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),b("dropdown-menu","pointer-events: all;")]),b("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),b("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),b("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),_(">",[b("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),pe("scrollable",`
 padding: var(--n-padding);
 `),D("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),xo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ko=Object.keys(xe),Ro=Object.assign(Object.assign(Object.assign({},xe),xo),Z.props),Do=U({name:"Dropdown",inheritAttrs:!1,props:Ro,setup(e){const n=V(!1),a=fe(j(e,"show"),n),t=w(()=>{const{keyField:l,childrenField:R}=e;return no(e.options,{getKey(v){return v[l]},getDisabled(v){return v.disabled===!0},getIgnored(v){return v.type==="divider"||v.type==="render"},getChildren(v){return v[R]}})}),r=w(()=>t.value.treeNodes),o=V(null),c=V(null),d=V(null),h=w(()=>{var l,R,v;return(v=(R=(l=o.value)!==null&&l!==void 0?l:c.value)!==null&&R!==void 0?R:d.value)!==null&&v!==void 0?v:null}),f=w(()=>t.value.getPath(h.value).keyPath),C=w(()=>t.value.getPath(e.value).keyPath),x=ee(()=>e.keyboard&&a.value);oo({keydown:{ArrowUp:{prevent:!0,handler:H},ArrowRight:{prevent:!0,handler:E},ArrowDown:{prevent:!0,handler:u},ArrowLeft:{prevent:!0,handler:G},Enter:{prevent:!0,handler:O},Escape:I}},x);const{mergedClsPrefixRef:m,inlineThemeDisabled:N}=ne(e),P=Z("Dropdown","-dropdown",yo,qe,e,m);Y(te,{labelFieldRef:j(e,"labelField"),childrenFieldRef:j(e,"childrenField"),renderLabelRef:j(e,"renderLabel"),renderIconRef:j(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:c,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:f,activeKeyPathRef:C,animatedRef:j(e,"animated"),mergedShowRef:a,nodePropsRef:j(e,"nodeProps"),renderOptionRef:j(e,"renderOption"),menuPropsRef:j(e,"menuProps"),doSelect:k,doUpdateShow:g}),me(a,l=>{!e.animated&&!l&&z()});function k(l,R){const{onSelect:v}=e;v&&K(v,l,R)}function g(l){const{"onUpdate:show":R,onUpdateShow:v}=e;R&&K(R,l),v&&K(v,l),n.value=l}function z(){o.value=null,c.value=null,d.value=null}function I(){g(!1)}function G(){A("left")}function E(){A("right")}function H(){A("up")}function u(){A("down")}function O(){const l=$();l?.isLeaf&&a.value&&(k(l.key,l.rawNode),g(!1))}function $(){var l;const{value:R}=t,{value:v}=h;return!R||v===null?null:(l=R.getNode(v))!==null&&l!==void 0?l:null}function A(l){const{value:R}=h,{value:{getFirstAvailableNode:v}}=t;let p=null;if(R===null){const F=v();F!==null&&(p=F.key)}else{const F=$();if(F){let s;switch(l){case"down":s=F.getNext();break;case"up":s=F.getPrev();break;case"right":s=F.getChild();break;case"left":s=F.getParent();break}s&&(p=s.key)}}p!==null&&(o.value=null,c.value=p)}const B=w(()=>{const{size:l,inverted:R}=e,{common:{cubicBezierEaseInOut:v},self:p}=P.value,{padding:F,dividerColor:s,borderRadius:S,optionOpacityDisabled:L,[X("optionIconSuffixWidth",l)]:W,[X("optionSuffixWidth",l)]:Q,[X("optionIconPrefixWidth",l)]:q,[X("optionPrefixWidth",l)]:ie,[X("fontSize",l)]:ae,[X("optionHeight",l)]:le,[X("optionIconSize",l)]:de}=p,y={"--n-bezier":v,"--n-font-size":ae,"--n-padding":F,"--n-border-radius":S,"--n-option-height":le,"--n-option-prefix-width":ie,"--n-option-icon-prefix-width":q,"--n-option-suffix-width":Q,"--n-option-icon-suffix-width":W,"--n-option-icon-size":de,"--n-divider-color":s,"--n-option-opacity-disabled":L};return R?(y["--n-color"]=p.colorInverted,y["--n-option-color-hover"]=p.optionColorHoverInverted,y["--n-option-color-active"]=p.optionColorActiveInverted,y["--n-option-text-color"]=p.optionTextColorInverted,y["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,y["--n-option-text-color-active"]=p.optionTextColorActiveInverted,y["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,y["--n-prefix-color"]=p.prefixColorInverted,y["--n-suffix-color"]=p.suffixColorInverted,y["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(y["--n-color"]=p.color,y["--n-option-color-hover"]=p.optionColorHover,y["--n-option-color-active"]=p.optionColorActive,y["--n-option-text-color"]=p.optionTextColor,y["--n-option-text-color-hover"]=p.optionTextColorHover,y["--n-option-text-color-active"]=p.optionTextColorActive,y["--n-option-text-color-child-active"]=p.optionTextColorChildActive,y["--n-prefix-color"]=p.prefixColor,y["--n-suffix-color"]=p.suffixColor,y["--n-group-header-text-color"]=p.groupHeaderTextColor),y}),M=N?se("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),B,e):void 0;return{mergedClsPrefix:m,mergedTheme:P,tmNodes:r,mergedShow:a,handleAfterLeave:()=>{e.animated&&z()},doUpdateShow:g,cssVars:N?void 0:B,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const e=(t,r,o,c,d)=>{var h;const{mergedClsPrefix:f,menuProps:C}=this;(h=this.onRender)===null||h===void 0||h.call(this);const x=C?.(void 0,this.tmNodes.map(N=>N.rawNode))||{},m={ref:to(r),class:[t,`${f}-dropdown`,this.themeClass],clsPrefix:f,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:d};return i(Ne,ue(this.$attrs,m,x))},{mergedTheme:n}=this,a={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return i(Je,Object.assign({},We(this.$props,ko),a),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{io as C,$o as N,Do as _,Ko as a,bo as b,to as c};

import{M as oe,N as re,O as R,P,Q as S,R as C,S as k,U as te,V as t,d as N,W as p,X as ne,Y as le,Z as ae,a0 as se,a1 as ie,a2 as Y,a3 as W,a4 as J,a as H,a5 as de,a6 as g,a7 as X,r as w,a8 as ce,a9 as ue,aa as be,ab as pe,ac as ge,ad as ve,ae as he,af as me,ag as fe,ah as Ce,c as O,o as B,w as f,f as _,G as K,e as z,p as xe,B as _e,g as L,K as Ee,t as G,b as Ie,x as ye,F as ze}from"./index-Cm_XrM6r.js";import{N as Z}from"./Space-Ct4mz2a2.js";function Se(o){const{lineHeight:e,borderRadius:a,fontWeightStrong:b,baseColor:d,dividerColor:u,actionColor:T,textColor1:c,textColor2:s,closeColorHover:v,closeColorPressed:i,closeIconColor:n,closeIconColorHover:x,closeIconColorPressed:l,infoColor:r,successColor:E,warningColor:I,errorColor:y,fontSize:h}=o;return Object.assign(Object.assign({},re),{fontSize:h,lineHeight:e,titleFontWeight:b,borderRadius:a,border:`1px solid ${u}`,color:T,titleTextColor:c,iconColor:s,contentTextColor:s,closeBorderRadius:a,closeColorHover:v,closeColorPressed:i,closeIconColor:n,closeIconColorHover:x,closeIconColorPressed:l,borderInfo:`1px solid ${R(d,P(r,{alpha:.25}))}`,colorInfo:R(d,P(r,{alpha:.08})),titleTextColorInfo:c,iconColorInfo:r,contentTextColorInfo:s,closeColorHoverInfo:v,closeColorPressedInfo:i,closeIconColorInfo:n,closeIconColorHoverInfo:x,closeIconColorPressedInfo:l,borderSuccess:`1px solid ${R(d,P(E,{alpha:.25}))}`,colorSuccess:R(d,P(E,{alpha:.08})),titleTextColorSuccess:c,iconColorSuccess:E,contentTextColorSuccess:s,closeColorHoverSuccess:v,closeColorPressedSuccess:i,closeIconColorSuccess:n,closeIconColorHoverSuccess:x,closeIconColorPressedSuccess:l,borderWarning:`1px solid ${R(d,P(I,{alpha:.33}))}`,colorWarning:R(d,P(I,{alpha:.08})),titleTextColorWarning:c,iconColorWarning:I,contentTextColorWarning:s,closeColorHoverWarning:v,closeColorPressedWarning:i,closeIconColorWarning:n,closeIconColorHoverWarning:x,closeIconColorPressedWarning:l,borderError:`1px solid ${R(d,P(y,{alpha:.25}))}`,colorError:R(d,P(y,{alpha:.08})),titleTextColorError:c,iconColorError:y,contentTextColorError:s,closeColorHoverError:v,closeColorPressedError:i,closeIconColorError:n,closeIconColorHoverError:x,closeIconColorPressedError:l})}const Te={common:oe,self:Se},Re=S("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[C("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),k("closable",[S("alert-body",[C("title",`
 padding-right: 24px;
 `)])]),C("icon",{color:"var(--n-icon-color)"}),S("alert-body",{padding:"var(--n-padding)"},[C("title",{color:"var(--n-title-text-color)"}),C("content",{color:"var(--n-content-text-color)"})]),te({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),C("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),C("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),k("show-icon",[S("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),k("right-adjust",[S("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),S("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[C("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[t("& +",[C("content",{marginTop:"9px"})])]),C("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),C("icon",{transition:"color .3s var(--n-bezier)"})]),Pe=Object.assign(Object.assign({},W.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ke=N({name:"Alert",inheritAttrs:!1,props:Pe,slots:Object,setup(o){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:b,mergedRtlRef:d}=Y(o),u=W("Alert","-alert",Re,Te,o,e),T=J("Alert",d,e),c=H(()=>{const{common:{cubicBezierEaseInOut:l},self:r}=u.value,{fontSize:E,borderRadius:I,titleFontWeight:y,lineHeight:h,iconSize:$,iconMargin:M,iconMarginRtl:F,closeIconSize:A,closeBorderRadius:V,closeSize:j,closeMargin:D,closeMarginRtl:U,padding:Q}=r,{type:m}=o,{left:q,right:ee}=de(M);return{"--n-bezier":l,"--n-color":r[g("color",m)],"--n-close-icon-size":A,"--n-close-border-radius":V,"--n-close-color-hover":r[g("closeColorHover",m)],"--n-close-color-pressed":r[g("closeColorPressed",m)],"--n-close-icon-color":r[g("closeIconColor",m)],"--n-close-icon-color-hover":r[g("closeIconColorHover",m)],"--n-close-icon-color-pressed":r[g("closeIconColorPressed",m)],"--n-icon-color":r[g("iconColor",m)],"--n-border":r[g("border",m)],"--n-title-text-color":r[g("titleTextColor",m)],"--n-content-text-color":r[g("contentTextColor",m)],"--n-line-height":h,"--n-border-radius":I,"--n-font-size":E,"--n-title-font-weight":y,"--n-icon-size":$,"--n-icon-margin":M,"--n-icon-margin-rtl":F,"--n-close-size":j,"--n-close-margin":D,"--n-close-margin-rtl":U,"--n-padding":Q,"--n-icon-margin-left":q,"--n-icon-margin-right":ee}}),s=b?X("alert",H(()=>o.type[0]),c,o):void 0,v=w(!0),i=()=>{const{onAfterLeave:l,onAfterHide:r}=o;l&&l(),r&&r()};return{rtlEnabled:T,mergedClsPrefix:e,mergedBordered:a,visible:v,handleCloseClick:()=>{var l;Promise.resolve((l=o.onClose)===null||l===void 0?void 0:l.call(o)).then(r=>{r!==!1&&(v.value=!1)})},handleAfterLeave:()=>{i()},mergedTheme:u,cssVars:b?void 0:c,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var o;return(o=this.onRender)===null||o===void 0||o.call(this),p(ie,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,b={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?p("div",Object.assign({},ne(this.$attrs,b)),this.closable&&p(le,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&p("div",{class:`${e}-alert__border`}),this.showIcon&&p("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},ae(a.icon,()=>[p(ce,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return p(ge,null);case"info":return p(pe,null);case"warning":return p(be,null);case"error":return p(ue,null);default:return null}}})])),p("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},se(a.header,d=>{const u=d||this.title;return u?p("div",{class:`${e}-alert-body__title`},u):null}),a.default&&p("div",{class:`${e}-alert-body__content`},a))):null}})}}),Le=t([S("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[t("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[t("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),t("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[t("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),k("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[t("tr",[t("&:last-child",[t("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),k("single-line",[t("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),t("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),k("single-column",[t("tr",[t("&:not(:last-child)",[t("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),k("striped",[t("tr:nth-of-type(even)",[t("td","background-color: var(--n-td-color-striped)")])]),me("bottom-bordered",[t("tr",[t("&:last-child",[t("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),ve(S("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[t("th",`
 background-color: var(--n-th-color-modal);
 `),t("td",`
 background-color: var(--n-td-color-modal);
 `)])),he(S("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[t("th",`
 background-color: var(--n-th-color-popover);
 `),t("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),$e=Object.assign(Object.assign({},W.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),we=N({name:"Table",props:$e,setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:a,mergedRtlRef:b}=Y(o),d=W("Table","-table",Le,fe,o,e),u=J("Table",b,e),T=H(()=>{const{size:s}=o,{self:{borderColor:v,tdColor:i,tdColorModal:n,tdColorPopover:x,thColor:l,thColorModal:r,thColorPopover:E,thTextColor:I,tdTextColor:y,borderRadius:h,thFontWeight:$,lineHeight:M,borderColorModal:F,borderColorPopover:A,tdColorStriped:V,tdColorStripedModal:j,tdColorStripedPopover:D,[g("fontSize",s)]:U,[g("tdPadding",s)]:Q,[g("thPadding",s)]:m},common:{cubicBezierEaseInOut:q}}=d.value;return{"--n-bezier":q,"--n-td-color":i,"--n-td-color-modal":n,"--n-td-color-popover":x,"--n-td-text-color":y,"--n-border-color":v,"--n-border-color-modal":F,"--n-border-color-popover":A,"--n-border-radius":h,"--n-font-size":U,"--n-th-color":l,"--n-th-color-modal":r,"--n-th-color-popover":E,"--n-th-font-weight":$,"--n-th-text-color":I,"--n-line-height":M,"--n-td-padding":Q,"--n-th-padding":m,"--n-td-color-striped":V,"--n-td-color-striped-modal":j,"--n-td-color-striped-popover":D}}),c=a?X("table",H(()=>o.size[0]),T,o):void 0;return{rtlEnabled:u,mergedClsPrefix:e,cssVars:a?void 0:T,themeClass:c?.themeClass,onRender:c?.onRender}},render(){var o;const{mergedClsPrefix:e}=this;return(o=this.onRender)===null||o===void 0||o.call(this),p("table",{class:[`${e}-table`,this.themeClass,{[`${e}-table--rtl`]:this.rtlEnabled,[`${e}-table--bottom-bordered`]:this.bottomBordered,[`${e}-table--bordered`]:this.bordered,[`${e}-table--single-line`]:this.singleLine,[`${e}-table--single-column`]:this.singleColumn,[`${e}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});function Be(o){return Ce("/exec",{sql:o})}const Me={class:"flex gap-8px"},Oe=N({name:"SqlExecutor",__name:"sql-execute",setup(o){const e=w(""),a=w(""),b=w(!1),d=["SELECT * FROM departments","SELECT emp_no FROM dept_emp","SELECT dept_no FROM dept_emp WHERE dept_no = 'd005'","SELECT salary FROM salaries WHERE salary >= 140000 AND salary <150000","SELECT * FROM dept_emp ORDER BY emp_no LIMIT 10 OFFSET 0","SELECT COUNT(*) FROM dept_emp","SELECT CEILING(COUNT(*) / 10) FROM dept_emp","SELECT * FROM dept_emp WHERE timestamp(from_date) > '1989-05-28' < '1995-10-18' LIMIT 10","SELECT * FROM dept_emp WHERE timestamp(from_date) between '1989-05-28' and '1995-10-18' LIMIT 10","INSERT INTO departments (dept_no, dept_name) VALUES ('d666', 'Mayer')","UPDATE departments SET dept_no='d777', dept_name='Vice Mayer' WHERE dept_no='d666'","DELETE FROM departments WHERE dept_no='d777'"],u=w(d[0]),T=()=>{u.value="",e.value="",a.value=""},c=async()=>{b.value=!0;try{const i=await Be(u.value);e.value=JSON.stringify(i),a.value=""}catch(i){a.value=i,e.value=""}finally{b.value=!1}},s=i=>{navigator.clipboard.writeText(i),window.$message?.success("复制成功")},v=i=>{u.value=i};return(i,n)=>{const x=xe,l=_e,r=Ee,E=ke,I=we,y=Z;return B(),O(y,{vertical:"",size:16},{default:f(()=>[_(r,{title:"SQL执行"},{default:f(()=>[z("div",Me,[_(x,{value:u.value,"onUpdate:value":n[0]||(n[0]=h=>u.value=h),placeholder:"请输入SQL语句并且点击执行"},null,8,["value"]),_(l,{type:"primary",loading:b.value,onClick:c},{default:f(()=>[...n[1]||(n[1]=[L("执行",-1)])]),_:1},8,["loading"]),_(l,{type:"warning",onClick:T},{default:f(()=>[...n[2]||(n[2]=[L("清空",-1)])]),_:1})])]),_:1}),e.value?(B(),O(r,{key:0,title:"执行结果"},{default:f(()=>[L(G(e.value),1)]),_:1})):K("",!0),a.value?(B(),O(r,{key:1,title:"报错信息"},{default:f(()=>[_(E,{type:"error"},{default:f(()=>[L(G(a.value),1)]),_:1})]),_:1})):K("",!0),_(r,{title:"SQL举例"},{default:f(()=>[_(I,null,{default:f(()=>[n[5]||(n[5]=z("thead",null,[z("tr",null,[z("th",null,"SQL语句"),z("th",null,"操作")])],-1)),z("tbody",null,[(B(),Ie(ze,null,ye(d,h=>z("tr",{key:h},[z("td",null,G(h),1),z("td",null,[_(l,{quaternary:"",type:"info",size:"small",class:"mr-8px",onClick:$=>v(h)},{default:f(()=>[...n[3]||(n[3]=[L(" 复制到输入框 ",-1)])]),_:2},1032,["onClick"]),_(l,{quaternary:"",type:"info",size:"small",onClick:$=>s(h)},{default:f(()=>[...n[4]||(n[4]=[L("复制到粘贴板",-1)])]),_:2},1032,["onClick"])])])),64))])]),_:1})]),_:1})]),_:1})}}}),We=N({name:"home",__name:"index",setup(o){return(e,a)=>{const b=Z;return B(),O(b,{vertical:"",size:16},{default:f(()=>[_(Oe)]),_:1})}}});export{We as default};

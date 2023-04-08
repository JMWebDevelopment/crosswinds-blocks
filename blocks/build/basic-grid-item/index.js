(()=>{var e,t={946:(e,t,r)=>{"use strict";const o=window.wp.element,n=window.wp.blocks;r(184);const s=window.wp.i18n,l=window.wp.components,a=window.wp.blockEditor,i=JSON.parse('{"u2":"crosswinds-blocks/basic-grid-item"}');(0,n.registerBlockType)(i.u2,{icon:{src:(0,o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},(0,o.createElement)("path",{fill:"#1b1930",class:"fa-primary",d:"M48 104C48 90.75 58.75 80 72 80C85.25 80 96 90.75 96 104C96 117.3 85.25 128 72 128C58.75 128 48 117.3 48 104zM352 104C352 90.75 362.7 80 376 80C389.3 80 400 90.75 400 104C400 117.3 389.3 128 376 128C362.7 128 352 117.3 352 104zM96 408C96 421.3 85.25 432 72 432C58.75 432 48 421.3 48 408C48 394.7 58.75 384 72 384C85.25 384 96 394.7 96 408zM352 408C352 394.7 362.7 384 376 384C389.3 384 400 394.7 400 408C400 421.3 389.3 432 376 432C362.7 432 352 421.3 352 408z"}),(0,o.createElement)("path",{fill:"#3e7ea8",class:"fa-secondary",d:"M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM72 80C58.75 80 48 90.75 48 104C48 117.3 58.75 128 72 128C85.25 128 96 117.3 96 104C96 90.75 85.25 80 72 80zM376 128C389.3 128 400 117.3 400 104C400 90.75 389.3 80 376 80C362.7 80 352 90.75 352 104C352 117.3 362.7 128 376 128zM72 384C58.75 384 48 394.7 48 408C48 421.3 58.75 432 72 432C85.25 432 96 421.3 96 408C96 394.7 85.25 384 72 384zM376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384C362.7 384 352 394.7 352 408C352 421.3 362.7 432 376 432z"}))},edit:function(e){const{attributes:t,setAttributes:r}=e,{innerLayout:n}=t,i=[{value:"normal",label:(0,s.__)("Normal Spacing","crosswinds-blocks")},{value:"equal",label:(0,s.__)("Equal Spacing","crosswinds-blocks")},{value:"center",label:(0,s.__)("Center Align","crosswinds-blocks")},{value:"bottom",label:(0,s.__)("All Bottom","crosswinds-blocks")},{value:"last-bottom",label:(0,s.__)("Last Item at Bottom","crosswinds-blocks")}],c=(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.InspectorControls,null,(0,o.createElement)(l.PanelBody,{title:(0,s.__)("Grid Item Settings","crosswinds-blocks")},(0,o.createElement)(l.SelectControl,{label:(0,s.__)("Inner Layout","crosswinds-blocks"),value:n,options:i,onChange:e=>r({innerLayout:e})})))),u=(0,a.useBlockProps)({className:n+"-layout"}),p=(0,a.useInnerBlocksProps)(u,{template:[["core/heading",{level:2,placeholder:(0,s.__)("Insert your heading here...","crosswinds-blocks")}],["core/paragraph",{placeholder:(0,s.__)("Write some description text here...","crosswinds-blocks")}]]});return(0,o.createElement)(o.Fragment,null,c,(0,o.createElement)("div",p))},save:function(e){const{innerLayout:t}=e.attributes;return(0,o.createElement)("div",a.useBlockProps.save({className:t+"-layout"}),(0,o.createElement)(a.InnerBlocks.Content,null))}})},184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)o.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,n,s)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,n,s]=e[u],a=!0,i=0;i<r.length;i++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={266:0,859:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[l,a,i]=r,c=0;if(l.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(i)var u=i(o)}for(t&&t(r);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},r=globalThis.webpackChunkstarter_block=globalThis.webpackChunkstarter_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[859],(()=>o(946)));n=o.O(n)})();
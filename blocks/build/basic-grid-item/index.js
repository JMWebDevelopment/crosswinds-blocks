(()=>{var e,n={946:(e,n,o)=>{"use strict";const t=window.wp.element,l=window.wp.blocks;var s=o(184),a=o.n(s);const i=window.wp.i18n,r=window.wp.components,c=window.wp.blockEditor,p=JSON.parse('{"u2":"crosswinds-blocks/basic-grid-item"}');(0,l.registerBlockType)(p.u2,{icon:{src:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},(0,t.createElement)("path",{fill:"#1b1930",class:"fa-primary",d:"M48 104C48 90.75 58.75 80 72 80C85.25 80 96 90.75 96 104C96 117.3 85.25 128 72 128C58.75 128 48 117.3 48 104zM352 104C352 90.75 362.7 80 376 80C389.3 80 400 90.75 400 104C400 117.3 389.3 128 376 128C362.7 128 352 117.3 352 104zM96 408C96 421.3 85.25 432 72 432C58.75 432 48 421.3 48 408C48 394.7 58.75 384 72 384C85.25 384 96 394.7 96 408zM352 408C352 394.7 362.7 384 376 384C389.3 384 400 394.7 400 408C400 421.3 389.3 432 376 432C362.7 432 352 421.3 352 408z"}),(0,t.createElement)("path",{fill:"#3e7ea8",class:"fa-secondary",d:"M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM72 80C58.75 80 48 90.75 48 104C48 117.3 58.75 128 72 128C85.25 128 96 117.3 96 104C96 90.75 85.25 80 72 80zM376 128C389.3 128 400 117.3 400 104C400 90.75 389.3 80 376 80C362.7 80 352 90.75 352 104C352 117.3 362.7 128 376 128zM72 384C58.75 384 48 394.7 48 408C48 421.3 58.75 432 72 432C85.25 432 96 421.3 96 408C96 394.7 85.25 384 72 384zM376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384C362.7 384 352 394.7 352 408C352 421.3 362.7 432 376 432z"}))},edit:function(e){const{attributes:n,setAttributes:o,context:l}=e,{innerLayout:s,gridColumnSpanDesktop:p,gridRowSpanDesktop:m,gridColumnSpanTablet:u,gridRowSpanTablet:b,gridColumnSpanMobile:d,gridRowSpanMobile:w}=n,{numDesktopColumns:C,numTabletColumns:g,numMobileColumns:k}=l,h=[{value:"normal",label:(0,i.__)("Normal Spacing","crosswinds-blocks")},{value:"equal",label:(0,i.__)("Equal Spacing","crosswinds-blocks")},{value:"center",label:(0,i.__)("Center Align","crosswinds-blocks")},{value:"bottom",label:(0,i.__)("All Bottom","crosswinds-blocks")},{value:"last-bottom",label:(0,i.__)("Last Item at Bottom","crosswinds-blocks")}],v=(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,i.__)("Grid Item Settings","crosswinds-blocks")},(0,t.createElement)(r.SelectControl,{label:(0,i.__)("Inner Layout","crosswinds-blocks"),value:s,options:h,onChange:e=>o({innerLayout:e})})),(0,t.createElement)(r.PanelBody,{title:(0,i.__)("Advanced Grid Item Settings","crosswinds-blocks"),initialOpen:!1},(0,t.createElement)(r.RangeControl,{label:(0,i.__)("Desktop Column Span","crosswinds-blocks"),help:(0,i.__)("How many columns shout this grid item span at desktop screensizes.","crosswinds-blocks"),onChange:e=>o({gridColumnSpanDesktop:e}),value:p||"",min:1,max:C,initialPosition:C,allowReset:!0,resetFallbackValue:1}),(0,t.createElement)(r.RangeControl,{label:(0,i.__)("Desktop Row Span","crosswinds-blocks"),help:(0,i.__)("How many rows shout this grid item span at desktop screensizes.","crosswinds-blocks"),onChange:e=>o({gridRowSpanDesktop:e}),value:m||"",min:1,max:100,initialPosition:m,allowReset:!0,resetFallbackValue:1}),(0,t.createElement)(r.RangeControl,{label:(0,i.__)("Tablet Column Span","crosswinds-blocks"),help:(0,i.__)("How many columns shout this grid item span at tablet screensizes.","crosswinds-blocks"),onChange:e=>o({gridColumnSpanTablet:e}),value:u||"",min:1,max:g,initialPosition:u,allowReset:!0,resetFallbackValue:1}),(0,t.createElement)(r.RangeControl,{label:(0,i.__)("Tablet Row Span","crosswinds-blocks"),help:(0,i.__)("How many rows shout this grid item span at tablet screensizes.","crosswinds-blocks"),onChange:e=>o({gridRowSpanTablet:e}),value:b||"",min:1,max:100,initialPosition:b,allowReset:!0,resetFallbackValue:1}),(0,t.createElement)(r.RangeControl,{label:(0,i.__)("Mobile Column Span","crosswinds-blocks"),help:(0,i.__)("How many columns shout this grid item span at mobile screensizes.","crosswinds-blocks"),onChange:e=>o({gridColumnSpanMobile:e}),value:d||"",min:1,max:k,initialPosition:d,allowReset:!0,resetFallbackValue:1}),(0,t.createElement)(r.RangeControl,{label:(0,i.__)("Mobile Row Span","crosswinds-blocks"),help:(0,i.__)("How many rows shout this grid item span at mobile screensizes.","crosswinds-blocks"),onChange:e=>o({gridRowSpanMobile:e}),value:w||"",min:1,max:100,initialPosition:w,allowReset:!0,resetFallbackValue:1})))),_=a()(`item-span-${p}-desktop-columns`,`item-span-${m}-desktop-row`,`item-span-${u}-tablet-columns`,`item-span-${b}-tablet-row`,`item-span-${d}-mobile-columns`,`item-span-${w}-mobile-row`,`${s}-layout`),S=(0,c.useBlockProps)({className:_}),f=(0,c.useInnerBlocksProps)(S,{template:[["core/group",{cbUseFlex:!0,cbFillHeight:!0,cbInnerLayout:"normal"}]]});return(0,t.createElement)(t.Fragment,null,v,(0,t.createElement)("div",f))},save:function(e){const{innerLayout:n,gridColumnSpanDesktop:o,gridRowSpanDesktop:l,gridColumnSpanTablet:s,gridRowSpanTablet:i,gridColumnSpanMobile:r,gridRowSpanMobile:p}=e.attributes,m=a()(`item-span-${o}-desktop-columns`,`item-span-${l}-desktop-row`,`item-span-${s}-tablet-columns`,`item-span-${i}-tablet-row`,`item-span-${r}-mobile-columns`,`item-span-${p}-mobile-row`,`${n}-layout`);return(0,t.createElement)("div",c.useBlockProps.save({className:m}),(0,t.createElement)(c.InnerBlocks.Content,null))}})},184:(e,n)=>{var o;!function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)){if(o.length){var a=l.apply(null,o);a&&e.push(a)}}else if("object"===s){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)t.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(n,[]))||(e.exports=o)}()}},o={};function t(e){var l=o[e];if(void 0!==l)return l.exports;var s=o[e]={exports:{}};return n[e](s,s.exports,t),s.exports}t.m=n,e=[],t.O=(n,o,l,s)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,l,s]=e[p],i=!0,r=0;r<o.length;r++)(!1&s||a>=s)&&Object.keys(t.O).every((e=>t.O[e](o[r])))?o.splice(r--,1):(i=!1,s<a&&(a=s));if(i){e.splice(p--,1);var c=l();void 0!==c&&(n=c)}}return n}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[o,l,s]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={266:0,859:0};t.O.j=n=>0===e[n];var n=(n,o)=>{var l,s,[a,i,r]=o,c=0;if(a.some((n=>0!==e[n]))){for(l in i)t.o(i,l)&&(t.m[l]=i[l]);if(r)var p=r(t)}for(n&&n(o);c<a.length;c++)s=a[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(p)},o=globalThis.webpackChunkstarter_block=globalThis.webpackChunkstarter_block||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var l=t.O(void 0,[859],(()=>t(946)));l=t.O(l)})();
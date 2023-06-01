(()=>{var e,n={589:(e,n,l)=>{"use strict";const o=window.wp.element,a=window.wp.blocks;var t=l(184),r=l.n(t);const s=window.wp.i18n,i=window.wp.components,c=window.wp.blockEditor,u=JSON.parse('{"u2":"crosswinds-blocks/basic-grid"}');(0,a.registerBlockType)(u.u2,{icon:{src:(0,o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},(0,o.createElement)("path",{fill:"#1b1930",class:"fa-primary",d:"M0 72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40C17.91 160 0 142.1 0 120V72zM0 392C0 369.9 17.91 352 40 352H88C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392zM288 280C288 302.1 270.1 320 248 320H200C177.9 320 160 302.1 160 280V232C160 209.9 177.9 192 200 192H248C270.1 192 288 209.9 288 232V280zM320 72C320 49.91 337.9 32 360 32H408C430.1 32 448 49.91 448 72V120C448 142.1 430.1 160 408 160H360C337.9 160 320 142.1 320 120V72zM448 440C448 462.1 430.1 480 408 480H360C337.9 480 320 462.1 320 440V392C320 369.9 337.9 352 360 352H408C430.1 352 448 369.9 448 392V440z"}),(0,o.createElement)("path",{fill:"#3e7ea8",class:"fa-secondary",d:"M248 32C270.1 32 288 49.91 288 72V120C288 142.1 270.1 160 248 160H200C177.9 160 160 142.1 160 120V72C160 49.91 177.9 32 200 32H248zM88 192C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88zM160 392C160 369.9 177.9 352 200 352H248C270.1 352 288 369.9 288 392V440C288 462.1 270.1 480 248 480H200C177.9 480 160 462.1 160 440V392zM408 192C430.1 192 448 209.9 448 232V280C448 302.1 430.1 320 408 320H360C337.9 320 320 302.1 320 280V232C320 209.9 337.9 192 360 192H408z"}))},edit:function(e){const{attributes:n,setAttributes:l}=e,{numDesktopColumns:a,numTabletColumns:t,numMobileColumns:u,gridGap:m,gridSameGap:p,gridColumnGap:d,gridRowGap:C}=n;let g,b;!1===p?(g=(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.RangeControl,{label:(0,s.__)("Grid Column Gap","crosswinds-blocks"),onChange:e=>l({gridColumnGap:e}),value:d||"",min:0,max:100,initialPosition:30,allowReset:!0,resetFallbackValue:30}),(0,o.createElement)(i.RangeControl,{label:(0,s.__)("Grid Row Gap","crosswinds-blocks"),onChange:e=>l({gridRowGap:e}),value:C||"",min:0,max:100,initialPosition:30,allowReset:!0,resetFallbackValue:30})),b={gridColumnGap:d+"px",gridRowGap:C+"px"}):(g=(0,o.createElement)(i.RangeControl,{label:(0,s.__)("Grid Gap","crosswinds-blocks"),onChange:e=>l({gridGap:e}),value:m||"",min:0,max:100,initialPosition:30,allowReset:!0,resetFallbackValue:30}),b={gridColumnGap:m+"px",gridRowGap:m+"px"});const w=r()(`basic-grid-has-${a}-desktop-columns`,`basic-grid-has-${t}-tablet-columns`,`basic-grid-has-${u}-mobile-columns`),v=(0,c.useBlockProps)({className:w,style:b}),k=(0,c.useInnerBlocksProps)(v,{allowedBlocks:["crosswinds-blocks/basic-grid-item"]}),h=(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.InspectorControls,null,(0,o.createElement)(i.PanelBody,{title:(0,s.__)("Basic Grid Settings","crosswinds-blocks")},(0,o.createElement)(i.RangeControl,{label:(0,s.__)("Desktop Columns","crosswinds-blocks"),onChange:e=>l({numDesktopColumns:e}),value:a||"",min:1,max:12,initialPosition:3,allowReset:!0,resetFallbackValue:3}),(0,o.createElement)(i.RangeControl,{label:(0,s.__)("Tablet Columns","crosswinds-blocks"),onChange:e=>l({numTabletColumns:e}),value:t||"",min:1,max:12,initialPosition:2,allowReset:!0,resetFallbackValue:2}),(0,o.createElement)(i.RangeControl,{label:(0,s.__)("Mobile Columns","crosswinds-blocks"),onChange:e=>l({numMobileColumns:e}),value:u||"",min:1,max:12,initialPosition:1,allowReset:!0,resetFallbackValue:1})),(0,o.createElement)(i.PanelBody,{title:(0,s.__)("Grid Spacing Settings","crosswinds-blocks")},(0,o.createElement)(i.ToggleControl,{label:(0,s.__)("Use Same Spacing for Columns and Rows?","crosswinds-blocks"),onChange:()=>l({gridSameGap:!p}),checked:p}),g)));return(0,o.createElement)(o.Fragment,null,h,(0,o.createElement)("div",k))},save:function(e){const{attributes:n}=e,{numDesktopColumns:l,numTabletColumns:a,numMobileColumns:t,gridGap:s,gridSameGap:i,gridColumnGap:u,gridRowGap:m}=n;let p;p=!1===i?{gridColumnGap:u+"px",gridRowGap:m+"px"}:{gridColumnGap:s+"px",gridRowGap:s+"px"};const d=r()(`basic-grid-has-${l}-desktop-columns`,`basic-grid-has-${a}-tablet-columns`,`basic-grid-has-${t}-mobile-columns`);return(0,o.createElement)("div",c.useBlockProps.save({className:d,style:p}),(0,o.createElement)(c.InnerBlocks.Content,null))}})},184:(e,n)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var t=typeof l;if("string"===t||"number"===t)e.push(l);else if(Array.isArray(l)){if(l.length){var r=a.apply(null,l);r&&e.push(r)}}else if("object"===t){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var s in l)o.call(l,s)&&l[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(n,[]))||(e.exports=l)}()}},l={};function o(e){var a=l[e];if(void 0!==a)return a.exports;var t=l[e]={exports:{}};return n[e](t,t.exports,o),t.exports}o.m=n,e=[],o.O=(n,l,a,t)=>{if(!l){var r=1/0;for(u=0;u<e.length;u++){for(var[l,a,t]=e[u],s=!0,i=0;i<l.length;i++)(!1&t||r>=t)&&Object.keys(o.O).every((e=>o.O[e](l[i])))?l.splice(i--,1):(s=!1,t<r&&(r=t));if(s){e.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}t=t||0;for(var u=e.length;u>0&&e[u-1][2]>t;u--)e[u]=e[u-1];e[u]=[l,a,t]},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var l in n)o.o(n,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={927:0,466:0};o.O.j=n=>0===e[n];var n=(n,l)=>{var a,t,[r,s,i]=l,c=0;if(r.some((n=>0!==e[n]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(i)var u=i(o)}for(n&&n(l);c<r.length;c++)t=r[c],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(u)},l=globalThis.webpackChunkstarter_block=globalThis.webpackChunkstarter_block||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))})();var a=o.O(void 0,[466],(()=>o(589)));a=o.O(a)})();
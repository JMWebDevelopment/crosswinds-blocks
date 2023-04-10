(()=>{var e,t={333:(e,t,n)=>{"use strict";const o=window.wp.element,s=window.wp.blocks;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}var l=n(184),a=n.n(l);const i=window.wp.data,c=window.wp.i18n,p=window.wp.blockEditor,u=window.wp.components,d=window.wp.coreData,m=[["core/post-title"],["core/post-date"],["core/post-excerpt"]];function b(){const e=(0,p.useInnerBlocksProps)({className:"wp-block-post"},{template:m,__unstableDisableLayoutClassNames:!0});return(0,o.createElement)("div",e)}const v=(0,o.memo)((function(e){let{blocks:t,blockContextId:n,isHidden:s,setActiveBlockContextId:l}=e;const a=(0,p.__experimentalUseBlockPreview)({blocks:t,props:{className:"wp-block-post"}}),i=()=>{l(n)},c={display:s?"none":void 0};return(0,o.createElement)("div",r({},a,{tabIndex:0,role:"button",onClick:i,onKeyPress:i,style:c}))})),f=JSON.parse('{"u2":"crosswinds-blocks/related-posts"}');(0,s.registerBlockType)(f.u2,{icon:{src:(0,o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},(0,o.createElement)("path",{fill:"#1b1930",d:"M160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64z"}),(0,o.createElement)("path",{fill:"#3e7ea8",d:"M0 224C0 188.7 28.65 160 64 160H128V288C128 341 170.1 384 224 384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224z"}))},edit:function(e){let{clientId:t,attributes:n,setAttributes:s,__unstableLayoutClassNames:r}=e;const{numColumns:l,numPosts:m}=n,[f,w]=(0,o.useState)(),{posts:g,blocks:k}=(0,i.useSelect)((e=>{const{getEntityRecords:n}=e(d.store),{getBlocks:o}=e(p.store);return{posts:n("postType","post",{per_page:m}),blocks:o(t)}}),[t]),h=(0,o.useMemo)((()=>g?.map((e=>({postType:e.type,postId:e.id})))),[g]),y=(0,p.useBlockProps)({className:a()({[`columns-${l}`]:!0})});if(!g)return(0,o.createElement)("p",y,(0,o.createElement)(u.Spinner,null));if(!g.length)return(0,o.createElement)("p",y," ",(0,c.__)("No results found."));const C=(0,o.createElement)(o.Fragment,null,(0,o.createElement)(p.InspectorControls,null,(0,o.createElement)(u.PanelBody,{title:(0,c.__)("Related Posts Settings","crosswinds-blocks")},(0,o.createElement)("div",{className:"related-posts-settings__width"},(0,o.createElement)(u.RangeControl,{label:(0,c.__)("Number of related posts","crosswinds-blocks"),onChange:e=>function(e){s({numPosts:e})}(e),value:m||"",min:1,max:10,initialPosition:3,allowReset:!0,resetFallbackValue:3})),(0,o.createElement)("div",{className:"related-posts-settings__speed"},(0,o.createElement)(u.RangeControl,{label:(0,c.__)("Columns","crosswinds-blocks"),onChange:e=>s({numColumns:e}),value:l||"",min:1,max:4,initialPosition:1,allowReset:!0,resetFallbackValue:1})))));return(0,o.createElement)(o.Fragment,null,C,(0,o.createElement)("div",y,h&&h.map((e=>(0,o.createElement)(p.BlockContextProvider,{key:e.postId,value:e},e.postId===(f||h[0]?.postId)?(0,o.createElement)(b,null):null,(0,o.createElement)(v,{blocks:k,blockContextId:e.postId,setActiveBlockContextId:w,isHidden:e.postId===(f||h[0]?.postId)}))))))},save:function(){return(0,o.createElement)(p.InnerBlocks.Content,null)}})},184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var l=s.apply(null,n);l&&e.push(l)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},n={};function o(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,s,r)=>{if(!n){var l=1/0;for(p=0;p<e.length;p++){for(var[n,s,r]=e[p],a=!0,i=0;i<n.length;i++)(!1&r||l>=r)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(a=!1,r<l&&(l=r));if(a){e.splice(p--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,s,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={697:0,748:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var s,r,[l,a,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(i)var p=i(o)}for(t&&t(n);c<l.length;c++)r=l[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(p)},n=globalThis.webpackChunkstarter_block=globalThis.webpackChunkstarter_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=o.O(void 0,[748],(()=>o(333)));s=o.O(s)})();
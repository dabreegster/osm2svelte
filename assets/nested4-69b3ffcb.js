import{X as Bt,R as k,Y as $,Z as Zt,S as N,i as j,s as q,k as A,z as F,_ as T,l as G,o as X,$ as lt,a0 as ft,e as z,a1 as kt,t as _,G as nt,g as y,H as it,h as B,C as Ot,J as At,d as O,K as Nt,M as jt,N as qt,c as C,m as w,j as L,a2 as at,L as Mt,W as Pt,b as _t,a as bt,p as tt,f as yt,I as et,V as Tt}from"./OverpassSelector-5e168ca4.js";const ht=Symbol.for("svelte-maplibre");function J(){return Zt(ht)}function Ut(){return Bt(ht,{map:k(null),source:$(null),layer:$(null),popupTarget:$(null),cluster:k(),loadedImages:k(new Set),minzoom:k(0),maxzoom:k(24),layerEvent:k(null)})}function Wt(n,t,i){let o;const{map:f}=J();A(n,f,u=>i(4,o=u));let{position:e="top-left"}=t,{container:r=void 0}=t,s=null;return F(()=>{o!=null&&o.loaded()&&s&&o.removeControl(s)}),n.$$set=u=>{"position"in u&&i(1,e=u.position),"container"in u&&i(2,r=u.container)},n.$$.update=()=>{if(n.$$.dirty&30&&o&&!s){let u;typeof r=="string"?u=document.querySelector(r)??void 0:u=r,i(3,s=new T.FullscreenControl({container:u})),o.addControl(s,e)}},[f,e,r,s,o]}class Et extends N{constructor(t){super(),j(this,t,Wt,null,q,{position:1,container:2})}}function Dt(n,t,i){let o;const{map:f}=J();A(n,f,m=>i(8,o=m));let{position:e="top-left"}=t,{positionOptions:r=void 0}=t,{fitBoundsOptions:s=void 0}=t,{trackUserLocation:u=!1}=t,{showAccuracyCircle:a=!0}=t,{showUserLocation:c=!0}=t,d=null;return F(()=>{o!=null&&o.loaded()&&d&&o.removeControl(d)}),n.$$set=m=>{"position"in m&&i(1,e=m.position),"positionOptions"in m&&i(2,r=m.positionOptions),"fitBoundsOptions"in m&&i(3,s=m.fitBoundsOptions),"trackUserLocation"in m&&i(4,u=m.trackUserLocation),"showAccuracyCircle"in m&&i(5,a=m.showAccuracyCircle),"showUserLocation"in m&&i(6,c=m.showUserLocation)},n.$$.update=()=>{n.$$.dirty&510&&o&&!d&&(i(7,d=new T.GeolocateControl({positionOptions:r,fitBoundsOptions:s,trackUserLocation:u,showAccuracyCircle:a,showUserLocation:c})),o.addControl(d,e))},[f,e,r,s,u,a,c,d,o]}class Rt extends N{constructor(t){super(),j(this,t,Dt,null,q,{position:1,positionOptions:2,fitBoundsOptions:3,trackUserLocation:4,showAccuracyCircle:5,showUserLocation:6})}}var ot=rt;function rt(n,t){return n===t||n!==n&&t!==t?!0:typeof n!=typeof t||{}.toString.call(n)!={}.toString.call(t)||n!==Object(n)||!n?!1:Array.isArray(n)?ut(n,t):{}.toString.call(n)=="[object Set]"?ut(Array.from(n),Array.from(t)):{}.toString.call(n)=="[object Object]"?Xt(n,t):Gt(n,t)}function Gt(n,t){return n.toString()===t.toString()}function ut(n,t){var i=n.length;if(i!=t.length)return!1;for(var o=0;o<i;o++)if(!rt(n[o],t[o]))return!1;return!0}function Xt(n,t){var i=Object.keys(n),o=i.length;if(o!=Object.keys(t).length)return!1;for(var f=0;f<o;f++){var e=i[f];if(!(t.hasOwnProperty(e)&&rt(n[e],t[e])))return!1}return!0}function Ft(n,t,i){let o;const{map:f}=J();A(n,f,c=>i(6,o=c));let{position:e="top-left"}=t,{showCompass:r=!0}=t,{showZoom:s=!0}=t,{visualizePitch:u=!1}=t,a=null;return F(()=>{o!=null&&o.loaded()&&a&&o.removeControl(a)}),n.$$set=c=>{"position"in c&&i(1,e=c.position),"showCompass"in c&&i(2,r=c.showCompass),"showZoom"in c&&i(3,s=c.showZoom),"visualizePitch"in c&&i(4,u=c.visualizePitch)},n.$$.update=()=>{n.$$.dirty&126&&o&&!a&&(i(5,a=new T.NavigationControl({showCompass:r,showZoom:s,visualizePitch:u})),o.addControl(a,e))},[f,e,r,s,u,a,o]}class Jt extends N{constructor(t){super(),j(this,t,Ft,null,q,{position:1,showCompass:2,showZoom:3,visualizePitch:4})}}function Kt(n,t,i){let o;const{map:f}=J();A(n,f,a=>i(5,o=a));let{position:e="bottom-left"}=t,{maxWidth:r=void 0}=t,{unit:s="metric"}=t,u=null;return F(()=>{o!=null&&o.loaded()&&u&&o.removeControl(u)}),n.$$set=a=>{"position"in a&&i(1,e=a.position),"maxWidth"in a&&i(2,r=a.maxWidth),"unit"in a&&i(3,s=a.unit)},n.$$.update=()=>{n.$$.dirty&62&&o&&!u&&(i(4,u=new T.ScaleControl({maxWidth:r,unit:s})),o.addControl(u,e))},[f,e,r,s,u,o]}class Yt extends N{constructor(t){super(),j(this,t,Kt,null,q,{position:1,maxWidth:2,unit:3})}}const Ht=n=>({map:n&8,loadedImages:n&16,allImagesLoaded:n&32}),ct=n=>({map:n[3],loadedImages:n[4],allImagesLoaded:n[5]});function mt(n){let t,i,o=n[2]&&dt(n);const f=n[27].default,e=At(f,n,n[26],ct);return{c(){o&&o.c(),t=O(),e&&e.c()},m(r,s){o&&o.m(r,s),z(r,t,s),e&&e.m(r,s),i=!0},p(r,s){r[2]?o?(o.p(r,s),s&4&&_(o,1)):(o=dt(r),o.c(),_(o,1),o.m(t.parentNode,t)):o&&(nt(),y(o,1,1,()=>{o=null}),it()),e&&e.p&&(!i||s&67108920)&&Nt(e,f,r,r[26],i?qt(f,r[26],s,Ht):jt(r[26]),ct)},i(r){i||(_(o),_(e,r),i=!0)},o(r){y(o),y(e,r),i=!1},d(r){r&&B(t),o&&o.d(r),e&&e.d(r)}}}function dt(n){let t,i,o,f,e,r,s,u;return t=new Jt({props:{position:n[6]}}),o=new Rt({props:{position:n[6],fitBoundsOptions:{maxZoom:12}}}),e=new Et({props:{position:n[6]}}),s=new Yt({props:{position:n[6]}}),{c(){C(t.$$.fragment),i=O(),C(o.$$.fragment),f=O(),C(e.$$.fragment),r=O(),C(s.$$.fragment)},m(a,c){w(t,a,c),z(a,i,c),w(o,a,c),z(a,f,c),w(e,a,c),z(a,r,c),w(s,a,c),u=!0},p(a,c){const d={};c&64&&(d.position=a[6]),t.$set(d);const m={};c&64&&(m.position=a[6]),o.$set(m);const b={};c&64&&(b.position=a[6]),e.$set(b);const Z={};c&64&&(Z.position=a[6]),s.$set(Z)},i(a){u||(_(t.$$.fragment,a),_(o.$$.fragment,a),_(e.$$.fragment,a),_(s.$$.fragment,a),u=!0)},o(a){y(t.$$.fragment,a),y(o.$$.fragment,a),y(e.$$.fragment,a),y(s.$$.fragment,a),u=!1},d(a){a&&(B(i),B(f),B(r)),L(t,a),L(o,a),L(e,a),L(s,a)}}}function Vt(n){let t,i,o,f,e,r=n[3]&&n[0]&&mt(n);return{c(){t=G("div"),r&&r.c(),X(t,"class",i=lt(n[1])+" svelte-p00lfq"),ft(t,"expand-map",!n[1])},m(s,u){z(s,t,u),r&&r.m(t,null),o=!0,f||(e=kt(n[9].call(null,t)),f=!0)},p(s,[u]){s[3]&&s[0]?r?(r.p(s,u),u&9&&_(r,1)):(r=mt(s),r.c(),_(r,1),r.m(t,null)):r&&(nt(),y(r,1,1,()=>{r=null}),it()),(!o||u&2&&i!==(i=lt(s[1])+" svelte-p00lfq"))&&X(t,"class",i),(!o||u&2)&&ft(t,"expand-map",!s[1])},i(s){o||(_(r),o=!0)},o(s){y(r),o=!1},d(s){s&&B(t),r&&r.d(),f=!1,e()}}}function Qt(n,t,i){let o,f,e,r,{$$slots:s={},$$scope:u}=t,{map:a=null}=t,{class:c=void 0}=t,{style:d}=t,{center:m=[0,0]}=t,{zoom:b=1}=t,{pitch:Z=0}=t,{bearing:K=0}=t,{bounds:S=void 0}=t,{loaded:M=!1}=t,{minZoom:Y=0}=t,{maxZoom:H=22}=t,{interactive:V=!0}=t,{attributionControl:Q=!0}=t,{preserveDrawingBuffer:I=!1}=t,{maxBounds:p=void 0}=t,{images:U=[]}=t,{standardControls:W=!1}=t,{filterLayers:E=void 0}=t,{transformRequest:v=void 0}=t;const h=Ot(),{map:D,loadedImages:R}=Ut();A(n,D,l=>i(3,e=l)),A(n,R,l=>i(4,r=l));let x=new Set;function St(l){e!=null&&e.loaded()&&("url"in l?(x.add(l.id),e.loadImage(l.url,(g,P)=>{x.delete(l.id),g?h("error",g):P&&(e==null||e.addImage(l.id,P,l.options),r.add(l.id),R.set(r))})):(e.addImage(l.id,l.data,l.options),r.add(l.id),R.set(r)))}function zt(l){return at(D,e=new T.Map({container:l,style:d,center:m,zoom:b,pitch:Z,bearing:K,minZoom:Y,maxZoom:H,interactive:V,preserveDrawingBuffer:I,maxBounds:p,bounds:S,attributionControl:Q,transformRequest:v}),e),e.on("load",g=>{i(0,M=!0),h("load",e)}),e.on("error",g=>h("error",{...g,map:e})),e.on("movestart",g=>h("movestart",{...g,map:e})),e.on("moveend",g=>{i(10,m=g.target.getCenter()),i(11,b=g.target.getZoom()),i(12,S=g.target.getBounds()),h("moveend",{...g,map:e})}),e.on("zoomstart",g=>h("zoomstart",{...g,map:e})),e.on("zoom",g=>{i(11,b=g.target.getZoom()),h("zoom",{...g,map:e})}),e.on("zoomend",g=>{i(11,b=g.target.getZoom()),h("zoomend",{...g,map:e})}),e.on("styledata",g=>{if(e&&E){const P=e.getStyle().layers;if(P)for(let st of P)E(st)||e.setLayoutProperty(st.id,"visibility","none")}h("styledata",{...g,map:e})}),{destroy(){i(0,M=!1),e==null||e.remove(),at(D,e=null,e)}}}return n.$$set=l=>{"map"in l&&i(13,a=l.map),"class"in l&&i(1,c=l.class),"style"in l&&i(14,d=l.style),"center"in l&&i(10,m=l.center),"zoom"in l&&i(11,b=l.zoom),"pitch"in l&&i(15,Z=l.pitch),"bearing"in l&&i(16,K=l.bearing),"bounds"in l&&i(12,S=l.bounds),"loaded"in l&&i(0,M=l.loaded),"minZoom"in l&&i(17,Y=l.minZoom),"maxZoom"in l&&i(18,H=l.maxZoom),"interactive"in l&&i(19,V=l.interactive),"attributionControl"in l&&i(20,Q=l.attributionControl),"preserveDrawingBuffer"in l&&i(21,I=l.preserveDrawingBuffer),"maxBounds"in l&&i(22,p=l.maxBounds),"images"in l&&i(23,U=l.images),"standardControls"in l&&i(2,W=l.standardControls),"filterLayers"in l&&i(24,E=l.filterLayers),"transformRequest"in l&&i(25,v=l.transformRequest),"$$scope"in l&&i(26,u=l.$$scope)},n.$$.update=()=>{if(n.$$.dirty&4&&i(6,o=typeof W=="boolean"?void 0:W),n.$$.dirty&8&&i(13,a=e),n.$$.dirty&8388617&&M&&e!=null&&e.loaded())for(let l of U)!x.has(l.id)&&!e.hasImage(l.id)&&St(l);n.$$.dirty&8388624&&i(5,f=U.every(l=>r.has(l.id))),n.$$.dirty&1032&&m&&!ot(m,e==null?void 0:e.getCenter())&&(e==null||e.panTo(m)),n.$$.dirty&2056&&b&&!ot(b,e==null?void 0:e.getZoom())&&(e==null||e.zoomTo(b)),n.$$.dirty&4104&&S&&!ot(S,e==null?void 0:e.getBounds())&&(e==null||e.fitBounds(S))},[M,c,W,e,r,f,o,D,R,zt,m,b,S,a,d,Z,K,Y,H,V,Q,I,p,U,E,v,u,s]}class It extends N{constructor(t){super(),j(this,t,Qt,Vt,q,{map:13,class:1,style:14,center:10,zoom:11,pitch:15,bearing:16,bounds:12,loaded:0,minZoom:17,maxZoom:18,interactive:19,attributionControl:20,preserveDrawingBuffer:21,maxBounds:22,images:23,standardControls:2,filterLayers:24,transformRequest:25})}}function gt(n){let t,i;return t=new Tt({props:{map:n[0]}}),t.$on("load",Ct),t.$on("resetToNone",wt),t.$on("error",Lt),{c(){C(t.$$.fragment)},m(o,f){w(t,o,f),i=!0},p(o,f){const e={};f&1&&(e.map=o[0]),t.$set(e)},i(o){i||(_(t.$$.fragment,o),i=!0)},o(o){y(t.$$.fragment,o),i=!1},d(o){L(t,o)}}}function pt(n){let t,i,o,f,e,r,s;function u(d){n[4](d)}let a={};n[1]!==void 0&&(a.testCase=n[1]),f=new Pt({props:a}),_t.push(()=>bt(f,"testCase",u)),f.$on("load",Ct),f.$on("resetToNone",wt),f.$on("error",Lt);let c=n[0]&&gt(n);return{c(){t=G("div"),i=G("h1"),i.textContent="Maps for Cats",o=O(),C(f.$$.fragment),r=O(),c&&c.c(),X(t,"slot","left")},m(d,m){z(d,t,m),tt(t,i),tt(t,o),w(f,t,null),tt(t,r),c&&c.m(t,null),s=!0},p(d,m){const b={};!e&&m&2&&(e=!0,b.testCase=d[1],yt(()=>e=!1)),f.$set(b),d[0]?c?(c.p(d,m),m&1&&_(c,1)):(c=gt(d),c.c(),_(c,1),c.m(t,null)):c&&(nt(),y(c,1,1,()=>{c=null}),it())},i(d){s||(_(f.$$.fragment,d),_(c),s=!0)},o(d){y(f.$$.fragment,d),y(c),s=!1},d(d){d&&B(t),L(f),c&&c.d()}}}function vt(n){let t,i,o,f;function e(s){n[3](s)}let r={style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo",center:[-.1095,51.5076],zoom:13};return n[0]!==void 0&&(r.map=n[0]),i=new It({props:r}),_t.push(()=>bt(i,"map",e)),i.$on("load",n[2]),{c(){t=G("div"),C(i.$$.fragment),X(t,"slot","main"),et(t,"position","relative"),et(t,"width","100%"),et(t,"height","100vh")},m(s,u){z(s,t,u),w(i,t,null),f=!0},p(s,u){const a={};!o&&u&1&&(o=!0,a.map=s[0],yt(()=>o=!1)),i.$set(a)},i(s){f||(_(i.$$.fragment,s),f=!0)},o(s){y(i.$$.fragment,s),f=!1},d(s){s&&B(t),L(i)}}}function xt(n){let t,i;return t=new Mt({props:{$$slots:{main:[vt],left:[pt]},$$scope:{ctx:n}}}),{c(){C(t.$$.fragment)},m(o,f){w(t,o,f),i=!0},p(o,[f]){const e={};f&35&&(e.$$scope={dirty:f,ctx:o}),t.$set(e)},i(o){i||(_(t.$$.fragment,o),i=!0)},o(o){y(t.$$.fragment,o),i=!1},d(o){L(t,o)}}}function Ct(n){console.log(`got osm ${n.detail.osmXml.length}`)}function wt(n){console.log("reset to nil")}function Lt(n){window.alert(`Something broke: ${n.detail}`)}function $t(n,t,i){let o,f="none";function e(){for(let u of o.getStyle().layers)(u.id.startsWith("road_")||u.id.startsWith("bridge_"))&&o.setLayoutProperty(u.id,"visibility","none")}function r(u){o=u,i(0,o)}function s(u){f=u,i(1,f)}return[o,f,e,r,s]}class te extends N{constructor(t){super(),j(this,t,$t,xt,q,{})}}new te({target:document.getElementById("app")});

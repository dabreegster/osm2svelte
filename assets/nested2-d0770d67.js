import{S as P,i as q,s as x,d as b,c as h,f as p,m as k,t as d,h as y,j as m,k as w,l as C,n as $,o as S,p as j,r as c,u as z,q as B,y as I,z as E,L as F,v as G,w as N,x as V}from"./maplibre-gl-a16e463a.js";import{L as W,m as A,c as D,e as T,A as H,I as J,M as K,i as O,T as Q,a as U}from"./AppSwitcher-fa42139a.js";function X(i){let e;return{c(){e=$("p"),e.textContent="Click a road"},m(n,t){p(n,e,t)},p:S,d(n){n&&m(e)}}}function Y(i){let e,n=i[0].features.length+"",t,r;return{c(){e=$("p"),t=j(n),r=j(" buildings onscreen")},m(s,o){p(s,e,o),c(e,t),c(e,r)},p(s,o){o&1&&n!==(n=s[0].features.length+"")&&z(t,n)},d(s){s&&m(e)}}}function Z(i){let e,n,t;function r(l,a){return l[1]?Y:X}let s=r(i),o=s(i);return n=new W({props:{source:"building-hitboxes",gj:i[0],layerStyle:i[2]}}),{c(){o.c(),e=b(),h(n.$$.fragment)},m(l,a){o.m(l,a),p(l,e,a),k(n,l,a),t=!0},p(l,[a]){s===(s=r(l))&&o?o.p(l,a):(o.d(1),o=s(l),o&&(o.c(),o.m(e.parentNode,e)));const _={};a&1&&(_.gj=l[0]),n.$set(_)},i(l){t||(d(n.$$.fragment,l),t=!0)},o(l){y(n.$$.fragment,l),t=!1},d(l){l&&m(e),o.d(l),w(n,l)}}}function ee(i,e,n){let t,r;C(i,A,l=>n(3,t=l)),C(i,D,l=>n(1,r=l));let s=T(),o={type:"fill",paint:{"fill-color":"blue"}};return i.$$.update=()=>{if(i.$$.dirty&11){if(n(0,s=T()),r)for(let l of t.queryRenderedFeatures())l.layer.id=="building-3d"&&s.features.push(l);n(0,s),n(1,r),n(3,t)}},[s,r,o,t]}class te extends P{constructor(e){super(),q(this,e,ee,Z,x,{})}}function ne(i){let e,n,t,r,s,o,l,a,_,L,v;return{c(){e=$("label"),n=$("input"),t=j(`
  Basemap roads`),r=b(),s=$("br"),o=b(),l=$("label"),a=$("input"),_=j(`
  Basemap buildings`),B(n,"type","checkbox"),B(a,"type","checkbox")},m(f,u){p(f,e,u),c(e,n),n.checked=i[0],c(e,t),p(f,r,u),p(f,s,u),p(f,o,u),p(f,l,u),c(l,a),a.checked=i[1],c(l,_),L||(v=[I(n,"change",i[3]),I(a,"change",i[4])],L=!0)},p(f,[u]){u&1&&(n.checked=f[0]),u&2&&(a.checked=f[1])},i:S,o:S,d(f){f&&(m(e),m(r),m(s),m(o),m(l)),L=!1,E(v)}}}function re(i,e,n){let t;C(i,A,a=>n(2,t=a));let r=!0,s=!0;function o(){r=this.checked,n(0,r)}function l(){s=this.checked,n(1,s)}return i.$$.update=()=>{if(i.$$.dirty&5&&t){let a=r?"visible":"none";for(let _ of t.getStyle().layers)_.id.startsWith("road_")&&t.setLayoutProperty(_.id,"visibility",a)}if(i.$$.dirty&6&&t){let a=s?"visible":"none";t.setLayoutProperty("building","visibility",a),t.setLayoutProperty("building-3d","visibility",a)}},[r,s,t,o,l]}class le extends P{constructor(e){super(),q(this,e,re,ne,x,{})}}function R(i){let e,n;return e=new te({}),{c(){h(e.$$.fragment)},m(t,r){k(e,t,r),n=!0},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function se(i){let e,n,t,r,s,o,l,a,_,L,v,f;r=new H({}),a=new J({});let u=i[0]&&R();return{c(){e=$("div"),n=$("h1"),n.textContent="osm2streets road width tool",t=b(),h(r.$$.fragment),s=b(),o=$("hr"),l=b(),h(a.$$.fragment),_=b(),L=$("hr"),v=b(),u&&u.c(),B(e,"slot","left")},m(g,M){p(g,e,M),c(e,n),c(e,t),k(r,e,null),c(e,s),c(e,o),c(e,l),k(a,e,null),c(e,_),c(e,L),c(e,v),u&&u.m(e,null),f=!0},p(g,M){g[0]?u?M&1&&d(u,1):(u=R(),u.c(),d(u,1),u.m(e,null)):u&&(N(),y(u,1,1,()=>{u=null}),V())},i(g){f||(d(r.$$.fragment,g),d(a.$$.fragment,g),d(u),f=!0)},o(g){y(r.$$.fragment,g),y(a.$$.fragment,g),y(u),f=!1},d(g){g&&m(e),w(r),w(a),u&&u.d()}}}function ie(i){let e,n,t,r,s,o;return e=new U({}),s=new le({}),{c(){h(e.$$.fragment),n=b(),t=$("hr"),r=b(),h(s.$$.fragment)},m(l,a){k(e,l,a),p(l,n,a),p(l,t,a),p(l,r,a),k(s,l,a),o=!0},p:S,i(l){o||(d(e.$$.fragment,l),d(s.$$.fragment,l),o=!0)},o(l){y(e.$$.fragment,l),y(s.$$.fragment,l),o=!1},d(l){l&&(m(n),m(t),m(r)),w(e,l),w(s,l)}}}function ae(i){let e,n;return e=new Q({props:{$$slots:{default:[ie]},$$scope:{ctx:i}}}),{c(){h(e.$$.fragment)},m(t,r){k(e,t,r),n=!0},p(t,r){const s={};r&2&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function oe(i){let e,n,t;return n=new K({props:{$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){e=$("div"),h(n.$$.fragment),B(e,"slot","main")},m(r,s){p(r,e,s),k(n,e,null),t=!0},p(r,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:r}),n.$set(o)},i(r){t||(d(n.$$.fragment,r),t=!0)},o(r){y(n.$$.fragment,r),t=!1},d(r){r&&m(e),w(n)}}}function ue(i){let e,n;return e=new F({props:{$$slots:{main:[oe],left:[se]},$$scope:{ctx:i}}}),{c(){h(e.$$.fragment)},m(t,r){k(e,t,r),n=!0},p(t,[r]){const s={};r&3&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function fe(i,e,n){let t;return C(i,A,r=>n(0,t=r)),G(async()=>{await O()}),[t]}class ce extends P{constructor(e){super(),q(this,e,fe,ue,x,{})}}new ce({target:document.getElementById("app")});

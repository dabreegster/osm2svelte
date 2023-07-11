import{S as R,i as D,s as K,b as z,a as B,c as J,d as F,e as V,m as L,f as _,g as G,t as v,h as S,j as m,k as j,l as Q,n as w,o as X,p as O,q as N,r as h,u as I,L as Y,v as Z,w as x,x as ee}from"./maplibre-gl-a16e463a.js";import{L as te,n as U,e as P,f as re,A as ne,I as se,M as le,i as ae,T as oe,a as ie}from"./AppSwitcher-fa42139a.js";function ue(l){const e=l.slice(),r=e[0]||e[1];return e[8]=r,e}function fe(l){let e;return{c(){e=w("p"),e.textContent="Hover on a road to see its details"},m(r,t){_(r,e,t)},p:X,d(r){r&&m(e)}}}function E(l){let e,r,t,s,o=l[8].properties.osm_id+"",$,b,d,y,k,u=l[8].properties.weight+"",p,a,n,i,g,M=JSON.stringify(JSON.parse(l[8].properties.osm_tags),null,"  ")+"",W,A,T,C=JSON.stringify(JSON.parse(l[8].properties.lane_specs_ltr),null,"  ")+"",q;return{c(){e=w("br"),r=F(),t=w("a"),s=O("Open OSM way "),$=O(o),d=F(),y=w("br"),k=O(`
  Weight: `),p=O(u),a=F(),n=w("br"),i=O(`
  Tags:
  `),g=w("pre"),W=O(M),A=O(`
  Lanes:
  `),T=w("pre"),q=O(C),N(t,"href",b=`http://openstreetmap.org/way/${l[8].properties.osm_id}`),N(t,"target","_blank"),N(t,"rel","noreferrer"),N(g,"class","svelte-y0uczf"),N(T,"class","svelte-y0uczf")},m(f,c){_(f,e,c),_(f,r,c),_(f,t,c),h(t,s),h(t,$),_(f,d,c),_(f,y,c),_(f,k,c),_(f,p,c),_(f,a,c),_(f,n,c),_(f,i,c),_(f,g,c),h(g,W),_(f,A,c),_(f,T,c),h(T,q)},p(f,c){c&3&&o!==(o=f[8].properties.osm_id+"")&&I($,o),c&3&&b!==(b=`http://openstreetmap.org/way/${f[8].properties.osm_id}`)&&N(t,"href",b),c&3&&u!==(u=f[8].properties.weight+"")&&I(p,u),c&3&&M!==(M=JSON.stringify(JSON.parse(f[8].properties.osm_tags),null,"  ")+"")&&I(W,M),c&3&&C!==(C=JSON.stringify(JSON.parse(f[8].properties.lane_specs_ltr),null,"  ")+"")&&I(q,C)},d(f){f&&(m(e),m(r),m(t),m(d),m(y),m(k),m(p),m(a),m(n),m(i),m(g),m(A),m(T))}}}function pe(l){let e,r,t,s,o,$;function b(n){l[4](n)}function d(n){l[5](n)}let y={source:"road-weights",gj:l[2],layerStyle:l[3],interactive:!0};l[0]!==void 0&&(y.clickedFeature=l[0]),l[1]!==void 0&&(y.hoveredFeature=l[1]),e=new te({props:y}),z.push(()=>B(e,"clickedFeature",b)),z.push(()=>B(e,"hoveredFeature",d));function k(n,i){return n[0]||n[1]?E:fe}function u(n,i){return i===E?ue(n):n}let p=k(l),a=p(u(l,p));return{c(){J(e.$$.fragment),s=F(),a.c(),o=V()},m(n,i){L(e,n,i),_(n,s,i),a.m(n,i),_(n,o,i),$=!0},p(n,[i]){const g={};i&4&&(g.gj=n[2]),!r&&i&1&&(r=!0,g.clickedFeature=n[0],G(()=>r=!1)),!t&&i&2&&(t=!0,g.hoveredFeature=n[1],G(()=>t=!1)),e.$set(g),p===(p=k(n))&&a?a.p(u(n,p),i):(a.d(1),a=p(u(n,p)),a&&(a.c(),a.m(o.parentNode,o)))},i(n){$||(v(e.$$.fragment,n),$=!0)},o(n){S(e.$$.fragment,n),$=!1},d(n){n&&(m(s),m(o)),j(e,n),a.d(n)}}}function ce(l){return l.highway_type=="primary"?.8:.3}function _e(l,e,r){let t;Q(l,U,u=>r(6,t=u));let s,o,$=P(),b={type:"fill",paint:{"fill-color":["interpolate",["linear"],["get","weight"],0,"blue",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],"fill-opacity":re("hover",.8,.4)}};function d(){let u=P();if(!t)return u;let p=JSON.parse(t.toGeojsonPlain()),a=JSON.parse(t.toJson());for(let[n,i]of a.roads){let g={highway_type:i.highway_type,lane_specs_ltr:i.lane_specs_ltr,osm_id:void 0,osm_tags:{},weight:0};i.osm_ids.length==1&&(g.osm_id=i.osm_ids[0],g.osm_tags=JSON.parse(t.getOsmTagsForWay(BigInt(g.osm_id)))),g.weight=ce(g),u.features.push({type:"Feature",properties:g,geometry:p.features.find(M=>n==M.properties.id).geometry})}return u}function y(u){s=u,r(0,s)}function k(u){o=u,r(1,o)}return r(2,$=d()),[s,o,$,b,y,k]}class me extends R{constructor(e){super(),D(this,e,_e,pe,K,{})}}function H(l){let e,r;return e=new me({}),{c(){J(e.$$.fragment)},m(t,s){L(e,t,s),r=!0},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function $e(l){let e,r,t,s,o,$,b,d,y,k,u,p;s=new ne({}),d=new se({});let a=l[0]&&H();return{c(){e=w("div"),r=w("h1"),r.textContent="osm2streets route profile tool",t=F(),J(s.$$.fragment),o=F(),$=w("hr"),b=F(),J(d.$$.fragment),y=F(),k=w("hr"),u=F(),a&&a.c(),N(e,"slot","left")},m(n,i){_(n,e,i),h(e,r),h(e,t),L(s,e,null),h(e,o),h(e,$),h(e,b),L(d,e,null),h(e,y),h(e,k),h(e,u),a&&a.m(e,null),p=!0},p(n,i){n[0]?a?i&1&&v(a,1):(a=H(),a.c(),v(a,1),a.m(e,null)):a&&(x(),S(a,1,1,()=>{a=null}),ee())},i(n){p||(v(s.$$.fragment,n),v(d.$$.fragment,n),v(a),p=!0)},o(n){S(s.$$.fragment,n),S(d.$$.fragment,n),S(a),p=!1},d(n){n&&m(e),j(s),j(d),a&&a.d()}}}function ge(l){let e,r;return e=new ie({}),{c(){J(e.$$.fragment)},m(t,s){L(e,t,s),r=!0},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function de(l){let e,r;return e=new oe({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){J(e.$$.fragment)},m(t,s){L(e,t,s),r=!0},p(t,s){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function ye(l){let e,r,t;return r=new le({props:{$$slots:{default:[de]},$$scope:{ctx:l}}}),{c(){e=w("div"),J(r.$$.fragment),N(e,"slot","main")},m(s,o){_(s,e,o),L(r,e,null),t=!0},p(s,o){const $={};o&2&&($.$$scope={dirty:o,ctx:s}),r.$set($)},i(s){t||(v(r.$$.fragment,s),t=!0)},o(s){S(r.$$.fragment,s),t=!1},d(s){s&&m(e),j(r)}}}function he(l){let e,r;return e=new Y({props:{$$slots:{main:[ye],left:[$e]},$$scope:{ctx:l}}}),{c(){J(e.$$.fragment)},m(t,s){L(e,t,s),r=!0},p(t,[s]){const o={};s&3&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function we(l,e,r){let t;return Q(l,U,s=>r(0,t=s)),Z(async()=>{await ae()}),[t]}class be extends R{constructor(e){super(),D(this,e,we,he,K,{})}}new be({target:document.getElementById("app")});

import{S as D,i as K,s as Q,b as W,a as z,d as M,c as J,H as V,m as L,e as d,j as q,t as S,f as F,k as $,l as C,n as U,o as w,v as X,p as N,q as j,r as b,z as I,L as Y,C as Z,g as x,h as ee}from"./OverpassSelector-c7abaf02.js";import{a as te,n as A,j as B,k as re,e as ne,A as se,I as oe,M as le,i as ie,f as ae}from"./MainLayers-49047439.js";import{T as ue}from"./TopLeftPanel-bdeee378.js";function pe(s){const e=s.slice(),r=e[0]||e[1];return e[8]=r,e}function fe(s){let e;return{c(){e=w("p"),e.textContent="Hover on a road to see its details"},m(r,t){d(r,e,t)},p:X,d(r){r&&$(e)}}}function H(s){let e,r,t,n,i=s[8].properties.osm_id+"",u,k,y,h,v,p=s[8].properties.weight+"",g,f,o,a,l,c=JSON.stringify(JSON.parse(s[8].properties.osm_tags),null,"  ")+"",O,P,T,G=JSON.stringify(JSON.parse(s[8].properties.lane_specs_ltr),null,"  ")+"",R;return{c(){e=w("br"),r=J(),t=w("a"),n=N("Open OSM way "),u=N(i),y=J(),h=w("br"),v=N(`
  Weight: `),g=N(p),f=J(),o=w("br"),a=N(`
  Tags:
  `),l=w("pre"),O=N(c),P=N(`
  Lanes:
  `),T=w("pre"),R=N(G),j(t,"href",k=`http://openstreetmap.org/way/${s[8].properties.osm_id}`),j(t,"target","_blank"),j(t,"rel","noreferrer"),j(l,"class","svelte-y0uczf"),j(T,"class","svelte-y0uczf")},m(_,m){d(_,e,m),d(_,r,m),d(_,t,m),b(t,n),b(t,u),d(_,y,m),d(_,h,m),d(_,v,m),d(_,g,m),d(_,f,m),d(_,o,m),d(_,a,m),d(_,l,m),b(l,O),d(_,P,m),d(_,T,m),b(T,R)},p(_,m){m&3&&i!==(i=_[8].properties.osm_id+"")&&I(u,i),m&3&&k!==(k=`http://openstreetmap.org/way/${_[8].properties.osm_id}`)&&j(t,"href",k),m&3&&p!==(p=_[8].properties.weight+"")&&I(g,p),m&3&&c!==(c=JSON.stringify(JSON.parse(_[8].properties.osm_tags),null,"  ")+"")&&I(O,c),m&3&&G!==(G=JSON.stringify(JSON.parse(_[8].properties.lane_specs_ltr),null,"  ")+"")&&I(R,G)},d(_){_&&($(e),$(r),$(t),$(y),$(h),$(v),$(g),$(f),$(o),$(a),$(l),$(P),$(T))}}}function ce(s){let e,r,t,n,i,u;function k(o){s[4](o)}function y(o){s[5](o)}let h={source:"road-weights",gj:s[2],layerStyle:s[3],interactive:!0};s[0]!==void 0&&(h.clickedFeature=s[0]),s[1]!==void 0&&(h.hoveredFeature=s[1]),e=new te({props:h}),W.push(()=>z(e,"clickedFeature",k)),W.push(()=>z(e,"hoveredFeature",y));function v(o,a){return o[0]||o[1]?H:fe}function p(o,a){return a===H?pe(o):o}let g=v(s),f=g(p(s,g));return{c(){M(e.$$.fragment),n=J(),f.c(),i=V()},m(o,a){L(e,o,a),d(o,n,a),f.m(o,a),d(o,i,a),u=!0},p(o,[a]){const l={};a&4&&(l.gj=o[2]),!r&&a&1&&(r=!0,l.clickedFeature=o[0],q(()=>r=!1)),!t&&a&2&&(t=!0,l.hoveredFeature=o[1],q(()=>t=!1)),e.$set(l),g===(g=v(o))&&f?f.p(p(o,g),a):(f.d(1),f=g(p(o,g)),f&&(f.c(),f.m(i.parentNode,i)))},i(o){u||(S(e.$$.fragment,o),u=!0)},o(o){F(e.$$.fragment,o),u=!1},d(o){o&&($(n),$(i)),C(e,o),f.d(o)}}}function _e(s){return s.highway_type=="primary"?.8:.3}function me(s,e,r){let t;U(s,A,p=>r(6,t=p));let n,i,u=B(),k={type:"fill",paint:{"fill-color":["interpolate",["linear"],["get","weight"],0,"blue",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],"fill-opacity":re("hover",.8,.4)}};function y(){let p=B();if(!t)return p;let g=JSON.parse(t.toGeojsonPlain()),f=JSON.parse(t.toJson());for(let[o,a]of f.roads){let l={highway_type:a.highway_type,lane_specs_ltr:a.lane_specs_ltr,osm_id:void 0,osm_tags:{},weight:0};a.osm_ids.length==1&&(l.osm_id=a.osm_ids[0],l.osm_tags=JSON.parse(t.getOsmTagsForWay(BigInt(l.osm_id)))),l.weight=_e(l),p.features.push({type:"Feature",properties:l,geometry:g.features.find(c=>o==c.properties.id).geometry})}return p}function h(p){n=p,r(0,n)}function v(p){i=p,r(1,i)}return r(2,u=y()),[n,i,u,k,h,v]}class de extends D{constructor(e){super(),K(this,e,me,ce,Q,{})}}function E(s){let e,r;return e=new de({}),{c(){M(e.$$.fragment)},m(t,n){L(e,t,n),r=!0},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function $e(s){let e,r,t,n,i,u,k,y,h,v,p,g,f;n=new se({});function o(c){s[2](c)}let a={};s[0]!==void 0&&(a.imported=s[0]),y=new oe({props:a}),W.push(()=>z(y,"imported",o));let l=s[1]&&E();return{c(){e=w("div"),r=w("h1"),r.textContent="osm2streets route profile tool",t=J(),M(n.$$.fragment),i=J(),u=w("hr"),k=J(),M(y.$$.fragment),v=J(),p=w("hr"),g=J(),l&&l.c(),j(e,"slot","left")},m(c,O){d(c,e,O),b(e,r),b(e,t),L(n,e,null),b(e,i),b(e,u),b(e,k),L(y,e,null),b(e,v),b(e,p),b(e,g),l&&l.m(e,null),f=!0},p(c,O){const P={};!h&&O&1&&(h=!0,P.imported=c[0],q(()=>h=!1)),y.$set(P),c[1]?l?O&2&&S(l,1):(l=E(),l.c(),S(l,1),l.m(e,null)):l&&(x(),F(l,1,1,()=>{l=null}),ee())},i(c){f||(S(n.$$.fragment,c),S(y.$$.fragment,c),S(l),f=!0)},o(c){F(n.$$.fragment,c),F(y.$$.fragment,c),F(l),f=!1},d(c){c&&$(e),C(n),C(y),l&&l.d()}}}function ge(s){let e,r;return e=new ae({}),{c(){M(e.$$.fragment)},m(t,n){L(e,t,n),r=!0},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function ye(s){let e,r;return e=new ue({props:{$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){M(e.$$.fragment)},m(t,n){L(e,t,n),r=!0},p(t,n){const i={};n&8&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function he(s){let e,r,t;return r=new le({props:{$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){e=w("div"),M(r.$$.fragment),j(e,"slot","main")},m(n,i){d(n,e,i),L(r,e,null),t=!0},p(n,i){const u={};i&8&&(u.$$scope={dirty:i,ctx:n}),r.$set(u)},i(n){t||(S(r.$$.fragment,n),t=!0)},o(n){F(r.$$.fragment,n),t=!1},d(n){n&&$(e),C(r)}}}function be(s){let e,r;return e=new Y({props:{$$slots:{main:[he],left:[$e]},$$scope:{ctx:s}}}),{c(){M(e.$$.fragment)},m(t,n){L(e,t,n),r=!0},p(t,[n]){const i={};n&11&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function we(s,e,r){let t;U(s,A,u=>r(1,t=u));let n={kind:"nothing"};Z(async()=>{await ie()});function i(u){n=u,r(0,n)}return s.$$.update=()=>{s.$$.dirty&1&&n.kind=="done"&&(A.set(n.network),ne.set(n.boundaryGJ))},[n,t,i]}class ke extends D{constructor(e){super(),K(this,e,we,be,Q,{})}}new ke({target:document.getElementById("app")});

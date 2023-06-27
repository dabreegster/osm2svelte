import{S as Q,i as U,s as V,a2 as Y,j as T,k as z,o as j,n as N,e as D,v as G,a as b,y as B,t as k,b as F,d as h,z as M,F as X,G as A,a3 as E,a4 as K,l as O,E as Z,m as I,p as L,r as J,x as C,M as x,N as ee,O as te,Y as re,P as se,Q as ne,R as ie,g as oe,c as le,T as ae,U as pe,V as ue,W as fe,X as me}from"./SelectImportArea-74e9ea6f.js";import{O as _e}from"./Osm2streetsSettings-133426d8.js";function ge(n){const e=n.slice(),r=e[0]||e[1];return e[8]=r,e}function ce(n){let e;return{c(){e=O("p"),e.textContent="Hover on a road to see its details"},m(r,t){b(r,e,t)},p:Z,d(r){r&&h(e)}}}function q(n){let e,r,t,s,i=n[8].properties.osm_id+"",l,w,v,c,d,_=n[8].properties.weight+"",f,y,o,u,$,P=JSON.stringify(JSON.parse(n[8].properties.osm_tags),null,"  ")+"",R,g,a,S=JSON.stringify(JSON.parse(n[8].properties.lane_specs_ltr),null,"  ")+"",W;return{c(){e=O("br"),r=N(),t=O("a"),s=I("Open OSM way "),l=I(i),v=N(),c=O("br"),d=I(`
  Weight: `),f=I(_),y=N(),o=O("br"),u=I(`
  Tags:
  `),$=O("pre"),R=I(P),g=I(`
  Lanes:
  `),a=O("pre"),W=I(S),L(t,"href",w=`http://openstreetmap.org/way/${n[8].properties.osm_id}`),L(t,"target","_blank"),L(t,"rel","noreferrer"),L($,"class","svelte-y0uczf"),L(a,"class","svelte-y0uczf")},m(p,m){b(p,e,m),b(p,r,m),b(p,t,m),J(t,s),J(t,l),b(p,v,m),b(p,c,m),b(p,d,m),b(p,f,m),b(p,y,m),b(p,o,m),b(p,u,m),b(p,$,m),J($,R),b(p,g,m),b(p,a,m),J(a,W)},p(p,m){m&3&&i!==(i=p[8].properties.osm_id+"")&&C(l,i),m&3&&w!==(w=`http://openstreetmap.org/way/${p[8].properties.osm_id}`)&&L(t,"href",w),m&3&&_!==(_=p[8].properties.weight+"")&&C(f,_),m&3&&P!==(P=JSON.stringify(JSON.parse(p[8].properties.osm_tags),null,"  ")+"")&&C(R,P),m&3&&S!==(S=JSON.stringify(JSON.parse(p[8].properties.lane_specs_ltr),null,"  ")+"")&&C(W,S)},d(p){p&&(h(e),h(r),h(t),h(v),h(c),h(d),h(f),h(y),h(o),h(u),h($),h(g),h(a))}}}function de(n){let e,r,t,s,i,l;function w(o){n[4](o)}function v(o){n[5](o)}let c={source:"road-weights",gj:n[2],layerStyle:n[3],interactive:!0};n[0]!==void 0&&(c.clickedFeature=n[0]),n[1]!==void 0&&(c.hoveredFeature=n[1]),e=new Y({props:c}),T.push(()=>z(e,"clickedFeature",w)),T.push(()=>z(e,"hoveredFeature",v));function d(o,u){return o[0]||o[1]?q:ce}function _(o,u){return u===q?ge(o):o}let f=d(n),y=f(_(n,f));return{c(){j(e.$$.fragment),s=N(),y.c(),i=D()},m(o,u){G(e,o,u),b(o,s,u),y.m(o,u),b(o,i,u),l=!0},p(o,[u]){const $={};u&4&&($.gj=o[2]),!r&&u&1&&(r=!0,$.clickedFeature=o[0],B(()=>r=!1)),!t&&u&2&&(t=!0,$.hoveredFeature=o[1],B(()=>t=!1)),e.$set($),f===(f=d(o))&&y?y.p(_(o,f),u):(y.d(1),y=f(_(o,f)),y&&(y.c(),y.m(i.parentNode,i)))},i(o){l||(k(e.$$.fragment,o),l=!0)},o(o){F(e.$$.fragment,o),l=!1},d(o){o&&(h(s),h(i)),M(e,o),y.d(o)}}}function $e(n){return n.highway_type=="primary"?.8:.3}function ye(n,e,r){let t;X(n,A,_=>r(6,t=_));let s,i,l=E(),w={type:"fill",paint:{"fill-color":["interpolate",["linear"],["get","weight"],0,"blue",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],"fill-opacity":K("hover",.8,.4)}};function v(){let _=E();if(!t)return _;let f=JSON.parse(t.toGeojsonPlain()),y=JSON.parse(t.toJson());for(let[o,u]of y.roads){let $={highway_type:u.highway_type,lane_specs_ltr:u.lane_specs_ltr,osm_id:void 0,osm_tags:{},weight:0};u.osm_ids.length==1&&($.osm_id=u.osm_ids[0],$.osm_tags=JSON.parse(t.getOsmTagsForWay(BigInt($.osm_id)))),$.weight=$e($),_.features.push({type:"Feature",properties:$,geometry:f.features.find(P=>o==P.properties.id).geometry})}return _}function c(_){s=_,r(0,s)}function d(_){i=_,r(1,i)}return r(2,l=v()),[s,i,l,w,c,d]}class be extends Q{constructor(e){super(),U(this,e,ye,de,V,{})}}function H(n){let e,r;return e=new be({}),{c(){j(e.$$.fragment)},m(t,s){G(e,t,s),r=!0},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function he(n){let e,r,t,s,i,l,w,v,c,d,_,f,y,o;s=new se({});function u(a){n[5](a)}let $={};n[1]!==void 0&&($.settings=n[1]),l=new _e({props:$}),T.push(()=>z(l,"settings",u));function P(a){n[6](a)}let R={settings:n[1]};n[0]!==void 0&&(R.imported=n[0]),c=new ne({props:R}),T.push(()=>z(c,"imported",P)),f=new ie({props:{imported:n[0]}});let g=n[3]&&H();return{c(){e=O("div"),r=O("h1"),r.textContent="osm2streets route profile tool",t=N(),j(s.$$.fragment),i=N(),j(l.$$.fragment),v=N(),j(c.$$.fragment),_=N(),j(f.$$.fragment),y=N(),g&&g.c(),L(e,"slot","left")},m(a,S){b(a,e,S),J(e,r),J(e,t),G(s,e,null),J(e,i),G(l,e,null),J(e,v),G(c,e,null),J(e,_),G(f,e,null),J(e,y),g&&g.m(e,null),o=!0},p(a,S){const W={};!w&&S&2&&(w=!0,W.settings=a[1],B(()=>w=!1)),l.$set(W);const p={};S&2&&(p.settings=a[1]),!d&&S&1&&(d=!0,p.imported=a[0],B(()=>d=!1)),c.$set(p);const m={};S&1&&(m.imported=a[0]),f.$set(m),a[3]?g?S&8&&k(g,1):(g=H(),g.c(),k(g,1),g.m(e,null)):g&&(oe(),F(g,1,1,()=>{g=null}),le())},i(a){o||(k(s.$$.fragment,a),k(l.$$.fragment,a),k(c.$$.fragment,a),k(f.$$.fragment,a),k(g),o=!0)},o(a){F(s.$$.fragment,a),F(l.$$.fragment,a),F(c.$$.fragment,a),F(f.$$.fragment,a),F(g),o=!1},d(a){a&&h(e),M(s),M(l),M(c),M(f),g&&g.d()}}}function we(n){let e,r,t,s;return e=new fe({}),e.$on("polygon",n[4]),t=new me({props:{layers:n[2]}}),{c(){j(e.$$.fragment),r=N(),j(t.$$.fragment)},m(i,l){G(e,i,l),b(i,r,l),G(t,i,l),s=!0},p(i,l){const w={};l&4&&(w.layers=i[2]),t.$set(w)},i(i){s||(k(e.$$.fragment,i),k(t.$$.fragment,i),s=!0)},o(i){F(e.$$.fragment,i),F(t.$$.fragment,i),s=!1},d(i){i&&h(r),M(e,i),M(t,i)}}}function ke(n){let e,r,t;return r=new ae({props:{$$slots:{default:[we]},$$scope:{ctx:n}}}),{c(){e=O("div"),j(r.$$.fragment),L(e,"slot","main")},m(s,i){b(s,e,i),G(r,e,null),t=!0},p(s,i){const l={};i&135&&(l.$$scope={dirty:i,ctx:s}),r.$set(l)},i(s){t||(k(r.$$.fragment,s),t=!0)},o(s){F(r.$$.fragment,s),t=!1},d(s){s&&h(e),M(r)}}}function ve(n){let e,r;return e=new x({props:{$$slots:{main:[ke],left:[he]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},m(t,s){G(e,t,s),r=!0},p(t,[s]){const i={};s&143&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function Se(n,e,r){let t;X(n,A,d=>r(3,t=d));let s={kind:"nothing"},i,l=[];ee(async()=>{await pe()});const w=d=>ue(d,s,i);function v(d){i=d,r(1,i)}function c(d){s=d,r(0,s)}return n.$$.update=()=>{n.$$.dirty&1&&s.kind=="done"&&(A.set(s.network),te.set(s.boundaryGJ),r(2,l=re(s.network,s.boundaryGJ)))},[s,i,l,t,w,v,c]}class Fe extends Q{constructor(e){super(),U(this,e,Se,ve,V,{})}}new Fe({target:document.getElementById("app")});

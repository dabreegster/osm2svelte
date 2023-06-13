import{S as E,i as K,s as Q,X as Y,h as T,j as B,n as j,m as N,e as U,u as G,a as b,x as q,t as v,b as F,y as I,d as w,D as X,G as z,W as A,Y as V,k as O,C as Z,l as M,o as P,q as J,w as W,L as x,F as ee,H as te,I as re,K as se,M as ne,N as ie,g as oe,c as le,O as ae,P as fe,Q as pe,R as ue,T as me}from"./SelectImportArea-365bce0a.js";import{O as _e}from"./Osm2streetsSettings-ca3e82b6.js";function ge(n){const e=n.slice(),r=e[0]||e[1];return e[8]=r,e}function $e(n){let e;return{c(){e=O("p"),e.textContent="Hover on a road to see its details"},m(r,t){b(r,e,t)},p:Z,d(r){r&&w(e)}}}function H(n){let e,r,t,s,i=n[8].properties.osm_id+"",a,k,h,$,c,_=n[8].properties.weight+"",u,y,o,p,d,L=JSON.stringify(JSON.parse(n[8].properties.osm_tags),null,"  ")+"",C,g,f,S=JSON.stringify(JSON.parse(n[8].properties.lane_specs_ltr),null,"  ")+"",R;return{c(){e=O("br"),r=N(),t=O("a"),s=M("Open OSM way "),a=M(i),h=N(),$=O("br"),c=M(`
  Weight: `),u=M(_),y=N(),o=O("br"),p=M(`
  Tags:
  `),d=O("pre"),C=M(L),g=M(`
  Lanes:
  `),f=O("pre"),R=M(S),P(t,"href",k=`http://openstreetmap.org/way/${n[8].properties.osm_id}`),P(t,"target","_blank"),P(t,"rel","noreferrer"),P(d,"class","svelte-y0uczf"),P(f,"class","svelte-y0uczf")},m(l,m){b(l,e,m),b(l,r,m),b(l,t,m),J(t,s),J(t,a),b(l,h,m),b(l,$,m),b(l,c,m),b(l,u,m),b(l,y,m),b(l,o,m),b(l,p,m),b(l,d,m),J(d,C),b(l,g,m),b(l,f,m),J(f,R)},p(l,m){m&3&&i!==(i=l[8].properties.osm_id+"")&&W(a,i),m&3&&k!==(k=`http://openstreetmap.org/way/${l[8].properties.osm_id}`)&&P(t,"href",k),m&3&&_!==(_=l[8].properties.weight+"")&&W(u,_),m&3&&L!==(L=JSON.stringify(JSON.parse(l[8].properties.osm_tags),null,"  ")+"")&&W(C,L),m&3&&S!==(S=JSON.stringify(JSON.parse(l[8].properties.lane_specs_ltr),null,"  ")+"")&&W(R,S)},d(l){l&&w(e),l&&w(r),l&&w(t),l&&w(h),l&&w($),l&&w(c),l&&w(u),l&&w(y),l&&w(o),l&&w(p),l&&w(d),l&&w(g),l&&w(f)}}}function ce(n){let e,r,t,s,i,a;function k(o){n[4](o)}function h(o){n[5](o)}let $={source:"road-weights",gj:n[2],layerStyle:n[3],interactive:!0};n[0]!==void 0&&($.clickedFeature=n[0]),n[1]!==void 0&&($.hoveredFeature=n[1]),e=new Y({props:$}),T.push(()=>B(e,"clickedFeature",k)),T.push(()=>B(e,"hoveredFeature",h));function c(o,p){return o[0]||o[1]?H:$e}function _(o,p){return p===H?ge(o):o}let u=c(n),y=u(_(n,u));return{c(){j(e.$$.fragment),s=N(),y.c(),i=U()},m(o,p){G(e,o,p),b(o,s,p),y.m(o,p),b(o,i,p),a=!0},p(o,[p]){const d={};p&4&&(d.gj=o[2]),!r&&p&1&&(r=!0,d.clickedFeature=o[0],q(()=>r=!1)),!t&&p&2&&(t=!0,d.hoveredFeature=o[1],q(()=>t=!1)),e.$set(d),u===(u=c(o))&&y?y.p(_(o,u),p):(y.d(1),y=u(_(o,u)),y&&(y.c(),y.m(i.parentNode,i)))},i(o){a||(v(e.$$.fragment,o),a=!0)},o(o){F(e.$$.fragment,o),a=!1},d(o){I(e,o),o&&w(s),y.d(o),o&&w(i)}}}function de(n){return n.highway_type=="primary"?.8:.3}function ye(n,e,r){let t;X(n,z,_=>r(6,t=_));let s,i,a=A(),k={type:"fill",paint:{"fill-color":["interpolate",["linear"],["get","weight"],0,"blue",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],"fill-opacity":V("hover",.8,.4)}};function h(){let _=A();if(!t)return _;let u=JSON.parse(t.toGeojsonPlain()),y=JSON.parse(t.toJson());for(let[o,p]of y.roads){let d={highway_type:p.highway_type,lane_specs_ltr:p.lane_specs_ltr,osm_id:void 0,osm_tags:{},weight:0};p.osm_ids.length==1&&(d.osm_id=p.osm_ids[0],d.osm_tags=JSON.parse(t.getOsmTagsForWay(BigInt(d.osm_id)))),d.weight=de(d),_.features.push({type:"Feature",properties:d,geometry:u.features.find(L=>o==L.properties.id).geometry})}return _}function $(_){s=_,r(0,s)}function c(_){i=_,r(1,i)}return r(2,a=h()),[s,i,a,k,$,c]}class be extends E{constructor(e){super(),K(this,e,ye,ce,Q,{})}}function D(n){let e,r;return e=new be({}),{c(){j(e.$$.fragment)},m(t,s){G(e,t,s),r=!0},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function we(n){let e,r,t,s,i,a,k,h,$,c,_,u,y,o;s=new se({});function p(f){n[5](f)}let d={};n[1]!==void 0&&(d.settings=n[1]),a=new _e({props:d}),T.push(()=>B(a,"settings",p));function L(f){n[6](f)}let C={settings:n[1]};n[0]!==void 0&&(C.imported=n[0]),$=new ne({props:C}),T.push(()=>B($,"imported",L)),u=new ie({props:{imported:n[0]}});let g=n[3]&&D();return{c(){e=O("div"),r=O("h1"),r.textContent="osm2streets route profile tool",t=N(),j(s.$$.fragment),i=N(),j(a.$$.fragment),h=N(),j($.$$.fragment),_=N(),j(u.$$.fragment),y=N(),g&&g.c(),P(e,"slot","left")},m(f,S){b(f,e,S),J(e,r),J(e,t),G(s,e,null),J(e,i),G(a,e,null),J(e,h),G($,e,null),J(e,_),G(u,e,null),J(e,y),g&&g.m(e,null),o=!0},p(f,S){const R={};!k&&S&2&&(k=!0,R.settings=f[1],q(()=>k=!1)),a.$set(R);const l={};S&2&&(l.settings=f[1]),!c&&S&1&&(c=!0,l.imported=f[0],q(()=>c=!1)),$.$set(l);const m={};S&1&&(m.imported=f[0]),u.$set(m),f[3]?g?S&8&&v(g,1):(g=D(),g.c(),v(g,1),g.m(e,null)):g&&(oe(),F(g,1,1,()=>{g=null}),le())},i(f){o||(v(s.$$.fragment,f),v(a.$$.fragment,f),v($.$$.fragment,f),v(u.$$.fragment,f),v(g),o=!0)},o(f){F(s.$$.fragment,f),F(a.$$.fragment,f),F($.$$.fragment,f),F(u.$$.fragment,f),F(g),o=!1},d(f){f&&w(e),I(s),I(a),I($),I(u),g&&g.d()}}}function ke(n){let e,r,t,s;return e=new ue({}),e.$on("polygon",n[4]),t=new me({props:{layers:n[2]}}),{c(){j(e.$$.fragment),r=N(),j(t.$$.fragment)},m(i,a){G(e,i,a),b(i,r,a),G(t,i,a),s=!0},p(i,a){const k={};a&4&&(k.layers=i[2]),t.$set(k)},i(i){s||(v(e.$$.fragment,i),v(t.$$.fragment,i),s=!0)},o(i){F(e.$$.fragment,i),F(t.$$.fragment,i),s=!1},d(i){I(e,i),i&&w(r),I(t,i)}}}function ve(n){let e,r,t;return r=new ae({props:{$$slots:{default:[ke]},$$scope:{ctx:n}}}),{c(){e=O("div"),j(r.$$.fragment),P(e,"slot","main")},m(s,i){b(s,e,i),G(r,e,null),t=!0},p(s,i){const a={};i&135&&(a.$$scope={dirty:i,ctx:s}),r.$set(a)},i(s){t||(v(r.$$.fragment,s),t=!0)},o(s){F(r.$$.fragment,s),t=!1},d(s){s&&w(e),I(r)}}}function he(n){let e,r;return e=new x({props:{$$slots:{main:[ve],left:[we]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},m(t,s){G(e,t,s),r=!0},p(t,[s]){const i={};s&143&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function Se(n,e,r){let t;X(n,z,c=>r(3,t=c));let s={kind:"nothing"},i,a=[];ee(async()=>{await fe()});const k=c=>pe(c,s,i);function h(c){i=c,r(1,i)}function $(c){s=c,r(0,s)}return n.$$.update=()=>{n.$$.dirty&1&&s.kind=="done"&&(z.set(s.network),te.set(s.boundaryGJ),r(2,a=re(s.network,s.boundaryGJ)))},[s,i,a,t,k,h,$]}class Fe extends E{constructor(e){super(),K(this,e,Se,he,Q,{})}}new Fe({target:document.getElementById("app")});

import{S as U,i as V,s as X,e as ke,a as h,t as O,g as $e,b as M,c as we,d as $,f as ae,h as Y,j as x,k as y,l as j,m as L,n as q,o as P,p as ye,q as g,r as ue,u as B,v as T,w as K,x as ne,y as J,z as se,A as be,B as ve,C as Ce,D as Q,E as F,F as Le,G as Se,L as Ie,H as Oe}from"./maplibre-gl-d0269db5.js";import{e as Z,n as H,m as Ee,c as Ge,a as Me,b as pe,A as Pe,B as je,I as qe,M as Be,i as Je,d as Ae,S as De,L as Ne,f as ze,g as Te}from"./SelectImportArea-7b14db0e.js";import{O as Fe}from"./Osm2streetsSettings-37090808.js";function fe(s,t,n){const e=s.slice();return e[8]=t[n],e[10]=n,e}function ce(s){let t,n,e,o,l,i=s[1]+1+"",r,f,m=s[0].length+"",k,c,a,_,u,C,w,E,d,G,A,R,b,ee,D,te,oe,W=Z(s[0]),S=[];for(let p=0;p<W.length;p+=1)S[p]=_e(fe(s,W,p));function le(p){s[7](p)}var z=s[2].content;function re(p){let v={gj:p[2].gj,downloadable:!0};return p[2].show!==void 0&&(v.show=p[2].show),{props:v}}return z&&(b=ae(z,re(s)),Y.push(()=>x(b,"show",le))),{c(){t=y("div"),n=y("button"),e=j("Previous"),l=L(),r=j(i),f=j(" / "),k=j(m),c=L(),a=y("button"),_=j("Next"),C=L(),w=y("div"),E=y("select");for(let p=0;p<S.length;p+=1)S[p].c();d=L(),G=y("div"),A=y("input"),R=L(),b&&q(b.$$.fragment),P(n,"type","button"),n.disabled=o=s[1]==0,P(a,"type","button"),a.disabled=u=s[1]==s[0].length-1,s[1]===void 0&&ye(()=>s[5].call(E)),P(A,"type","checkbox")},m(p,v){h(p,t,v),g(t,n),g(n,e),g(t,l),g(t,r),g(t,f),g(t,k),g(t,c),g(t,a),g(a,_),h(p,C,v),h(p,w,v),g(w,E);for(let N=0;N<S.length;N+=1)S[N]&&S[N].m(E,null);ue(E,s[1],!0),h(p,d,v),h(p,G,v),g(G,A),A.checked=s[2].show,g(G,R),b&&B(b,G,null),D=!0,te||(oe=[T(n,"click",s[3]),T(a,"click",s[4]),T(E,"change",s[5]),T(A,"change",s[6])],te=!0)},p(p,v){if((!D||v&2&&o!==(o=p[1]==0))&&(n.disabled=o),(!D||v&2)&&i!==(i=p[1]+1+"")&&K(r,i),(!D||v&1)&&m!==(m=p[0].length+"")&&K(k,m),(!D||v&3&&u!==(u=p[1]==p[0].length-1))&&(a.disabled=u),v&1){W=Z(p[0]);let I;for(I=0;I<W.length;I+=1){const ie=fe(p,W,I);S[I]?S[I].p(ie,v):(S[I]=_e(ie),S[I].c(),S[I].m(E,null))}for(;I<S.length;I+=1)S[I].d(1);S.length=W.length}v&2&&ue(E,p[1]),v&4&&(A.checked=p[2].show);const N={};if(v&4&&(N.gj=p[2].gj),!ee&&v&4&&(ee=!0,N.show=p[2].show,ne(()=>ee=!1)),v&4&&z!==(z=p[2].content)){if(b){$e();const I=b;M(I.$$.fragment,1,0,()=>{J(I,1)}),we()}z?(b=ae(z,re(p)),Y.push(()=>x(b,"show",le)),q(b.$$.fragment),O(b.$$.fragment,1),B(b,G,null)):b=null}else z&&b.$set(N)},i(p){D||(b&&O(b.$$.fragment,p),D=!0)},o(p){b&&M(b.$$.fragment,p),D=!1},d(p){p&&($(t),$(C),$(w),$(d),$(G)),se(S,p),b&&J(b),te=!1,be(oe)}}}function _e(s){let t,n=s[8].label+"",e;return{c(){t=y("option"),e=j(n),t.__value=s[10],ve(t,t.__value)},m(o,l){h(o,t,l),g(t,e)},p(o,l){l&1&&n!==(n=o[8].label+"")&&K(e,n)},d(o){o&&$(t)}}}function He(s){let t,n,e=s[0].length>0&&ce(s);return{c(){e&&e.c(),t=ke()},m(o,l){e&&e.m(o,l),h(o,t,l),n=!0},p(o,[l]){o[0].length>0?e?(e.p(o,l),l&1&&O(e,1)):(e=ce(o),e.c(),O(e,1),e.m(t.parentNode,t)):e&&($e(),M(e,1,1,()=>{e=null}),we())},i(o){n||(O(e),n=!0)},o(o){M(e),n=!1},d(o){o&&$(t),e&&e.d(o)}}}function Re(s,t,n){let e,{layers:o}=t,l=0;const i=()=>n(1,l--,l),r=()=>n(1,l++,l);function f(){l=Ce(this),n(1,l)}function m(){e.show=this.checked,n(2,e),n(0,o),n(1,l)}function k(c){s.$$.not_equal(e.show,c)&&(e.show=c,n(2,e),n(0,o),n(1,l))}return s.$$set=c=>{"layers"in c&&n(0,o=c.layers)},s.$$.update=()=>{s.$$.dirty&3&&n(2,e=o[l])},[o,l,e,i,r,f,m,k]}class We extends U{constructor(t){super(),V(this,t,Re,He,X,{layers:0})}}function me(s,t,n){const e=s.slice();return e[4]=t[n],e}function de(s){let t,n=s[4]+"",e,o,l;return{c(){t=y("a"),e=j(n),l=j(","),P(t,"href",o="https://www.openstreetmap.org/node/"+s[4]),P(t,"target","_blank")},m(i,r){h(i,t,r),g(t,e),h(i,l,r)},p(i,r){r&1&&n!==(n=i[4]+"")&&K(e,n),r&1&&o!==(o="https://www.openstreetmap.org/node/"+i[4])&&P(t,"href",o)},d(i){i&&($(t),$(l))}}}function Ze(s){let t,n,e,o,l,i,r,f,m,k=Z(s[0].properties.osm_node_ids),c=[];for(let a=0;a<k.length;a+=1)c[a]=de(me(s,k,a));return{c(){t=y("pre"),t.textContent=`${JSON.stringify(s[1],null,"  ")}`,n=L(),e=y("div"),o=j(`OSM nodes:
  `);for(let a=0;a<c.length;a+=1)c[a].c();l=L(),i=y("div"),r=y("button"),r.textContent="Collapse intersection",P(r,"type","button")},m(a,_){h(a,t,_),h(a,n,_),h(a,e,_),g(e,o);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(e,null);h(a,l,_),h(a,i,_),g(i,r),f||(m=T(r,"click",s[2]),f=!0)},p(a,[_]){if(_&1){k=Z(a[0].properties.osm_node_ids);let u;for(u=0;u<k.length;u+=1){const C=me(a,k,u);c[u]?c[u].p(C,_):(c[u]=de(C),c[u].c(),c[u].m(e,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=k.length}},i:Q,o:Q,d(a){a&&($(t),$(n),$(e),$(l),$(i)),se(c,a),f=!1,m()}}}function Ke(s,t,n){let e;F(s,H,r=>n(3,e=r));let{intersection:o}=t,l=structuredClone(o.properties);delete l.osm_node_ids;function i(){e.collapseIntersection(o.properties.id),H.set(e)}return s.$$set=r=>{"intersection"in r&&n(0,o=r.intersection)},[o,l,i]}class Qe extends U{constructor(t){super(),V(this,t,Ke,Ze,X,{intersection:0})}}function ge(s,t,n){const e=s.slice();return e[5]=t[n],e}function he(s){let t,n=s[5]+"",e,o,l;return{c(){t=y("a"),e=j(n),l=j(","),P(t,"href",o="https://www.openstreetmap.org/way/"+s[5]),P(t,"target","_blank")},m(i,r){h(i,t,r),g(t,e),h(i,l,r)},p(i,r){r&1&&n!==(n=i[5]+"")&&K(e,n),r&1&&o!==(o="https://www.openstreetmap.org/way/"+i[5])&&P(t,"href",o)},d(i){i&&($(t),$(l))}}}function Ue(s){let t,n,e,o,l,i,r,f,m,k,c,a=Z(s[0].properties.osm_way_ids),_=[];for(let u=0;u<a.length;u+=1)_[u]=he(ge(s,a,u));return{c(){t=y("pre"),t.textContent=`${JSON.stringify(s[1],null,"  ")}`,n=L(),e=y("div"),o=j(`OSM ways:
  `);for(let u=0;u<_.length;u+=1)_[u].c();l=L(),i=y("div"),r=y("button"),r.textContent="Collapse short road",f=L(),m=y("button"),m.textContent="Zip side-path",P(r,"type","button"),P(m,"type","button")},m(u,C){h(u,t,C),h(u,n,C),h(u,e,C),g(e,o);for(let w=0;w<_.length;w+=1)_[w]&&_[w].m(e,null);h(u,l,C),h(u,i,C),g(i,r),g(i,f),g(i,m),k||(c=[T(r,"click",s[2]),T(m,"click",s[3])],k=!0)},p(u,[C]){if(C&1){a=Z(u[0].properties.osm_way_ids);let w;for(w=0;w<a.length;w+=1){const E=ge(u,a,w);_[w]?_[w].p(E,C):(_[w]=he(E),_[w].c(),_[w].m(e,null))}for(;w<_.length;w+=1)_[w].d(1);_.length=a.length}},i:Q,o:Q,d(u){u&&($(t),$(n),$(e),$(l),$(i)),se(_,u),k=!1,be(c)}}}function Ve(s,t,n){let e;F(s,H,f=>n(4,e=f));let{lane:o}=t,l=structuredClone(o.properties);delete l.osm_way_ids;function i(){e.collapseShortRoad(o.properties.rod),H.set(e)}function r(){e.zipSidepath(o.properties.rod),H.set(e)}return s.$$set=f=>{"lane"in f&&n(0,o=f.lane)},[o,l,i,r]}class Xe extends U{constructor(t){super(),V(this,t,Ve,Ue,X,{lane:0})}}function Ye(s,t,n){let e,o,l;F(s,Ee,r=>n(0,e=r)),F(s,Ge,r=>n(1,o=r)),F(s,Me,r=>n(2,l=r));let i=new Le.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});return Se(()=>{i.remove()}),s.$$.update=()=>{if(s.$$.dirty&7)if(l){let r=document.createElement("div");new Xe({target:r,props:{lane:l}});let f=l.geometry.coordinates[0][0];i.setLngLat(f).setDOMContent(r).addTo(e)}else if(o){let r=document.createElement("div");new Qe({target:r,props:{intersection:o}});let f=o.geometry.coordinates[0][0];i.setLngLat(f).setDOMContent(r).addTo(e)}else i.remove()},[e,o,l]}class xe extends U{constructor(t){super(),V(this,t,Ye,null,X,{})}}function et(s){let t,n,e,o,l,i,r,f,m,k,c,a,_;o=new Pe({});function u(d){s[7](d)}let C={};s[1]!==void 0&&(C.settings=s[1]),i=new Fe({props:C}),Y.push(()=>x(i,"settings",u));function w(d){s[8](d)}let E={settings:s[1]};return s[0]!==void 0&&(E.imported=s[0]),m=new je({props:E}),Y.push(()=>x(m,"imported",w)),a=new qe({props:{imported:s[0]}}),{c(){t=y("div"),n=y("h1"),n.textContent="osm2streets Street Explorer",e=L(),q(o.$$.fragment),l=L(),q(i.$$.fragment),f=L(),q(m.$$.fragment),c=L(),q(a.$$.fragment),P(t,"slot","left")},m(d,G){h(d,t,G),g(t,n),g(t,e),B(o,t,null),g(t,l),B(i,t,null),g(t,f),B(m,t,null),g(t,c),B(a,t,null),_=!0},p(d,G){const A={};!r&&G&2&&(r=!0,A.settings=d[1],ne(()=>r=!1)),i.$set(A);const R={};G&2&&(R.settings=d[1]),!k&&G&1&&(k=!0,R.imported=d[0],ne(()=>k=!1)),m.$set(R);const b={};G&1&&(b.imported=d[0]),a.$set(b)},i(d){_||(O(o.$$.fragment,d),O(i.$$.fragment,d),O(m.$$.fragment,d),O(a.$$.fragment,d),_=!0)},o(d){M(o.$$.fragment,d),M(i.$$.fragment,d),M(m.$$.fragment,d),M(a.$$.fragment,d),_=!1},d(d){d&&$(t),J(o),J(i),J(m),J(a)}}}function tt(s){let t,n;return t=new We({props:{layers:s[3]}}),{c(){q(t.$$.fragment)},m(e,o){B(t,e,o),n=!0},p:Q,i(e){n||(O(t.$$.fragment,e),n=!0)},o(e){M(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function nt(s){let t,n,e,o,l,i;return t=new De({}),t.$on("polygon",s[6]),e=new Ne({props:{layers:s[2],$$slots:{default:[tt]},$$scope:{ctx:s}}}),l=new xe({}),{c(){q(t.$$.fragment),n=L(),q(e.$$.fragment),o=L(),q(l.$$.fragment)},m(r,f){B(t,r,f),h(r,n,f),B(e,r,f),h(r,o,f),B(l,r,f),i=!0},p(r,f){const m={};f&4&&(m.layers=r[2]),f&512&&(m.$$scope={dirty:f,ctx:r}),e.$set(m)},i(r){i||(O(t.$$.fragment,r),O(e.$$.fragment,r),O(l.$$.fragment,r),i=!0)},o(r){M(t.$$.fragment,r),M(e.$$.fragment,r),M(l.$$.fragment,r),i=!1},d(r){r&&($(n),$(o)),J(t,r),J(e,r),J(l,r)}}}function st(s){let t,n,e;return n=new Be({props:{$$slots:{default:[nt]},$$scope:{ctx:s}}}),{c(){t=y("div"),q(n.$$.fragment),P(t,"slot","main")},m(o,l){h(o,t,l),B(n,t,null),e=!0},p(o,l){const i={};l&519&&(i.$$scope={dirty:l,ctx:o}),n.$set(i)},i(o){e||(O(n.$$.fragment,o),e=!0)},o(o){M(n.$$.fragment,o),e=!1},d(o){o&&$(t),J(n)}}}function ot(s){let t,n;return t=new Ie({props:{$$slots:{main:[st],left:[et]},$$scope:{ctx:s}}}),{c(){q(t.$$.fragment)},m(e,o){B(t,e,o),n=!0},p(e,[o]){const l={};o&519&&(l.$$scope={dirty:o,ctx:e}),t.$set(l)},i(e){n||(O(t.$$.fragment,e),n=!0)},o(e){M(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function lt(s,t,n){let e,o;F(s,H,a=>n(4,e=a)),F(s,pe,a=>n(5,o=a));let l={kind:"nothing"},i,r=[],f=[];Oe(async()=>{await Je()});const m=a=>Ae(a,l,i);function k(a){i=a,n(1,i)}function c(a){l=a,n(0,l)}return s.$$.update=()=>{s.$$.dirty&1&&l.kind=="done"&&(H.set(l.network),pe.set(l.boundaryGJ)),s.$$.dirty&48&&e&&o&&n(2,r=ze(e,o).concat(Te()))},[l,i,r,f,e,o,m,k,c]}class rt extends U{constructor(t){super(),V(this,t,lt,ot,X,{})}}new rt({target:document.getElementById("app")});

import{S as U,i as V,s as X,e as be,a as h,t as I,g as he,b as M,c as $e,d as $,f as ie,h as Z,j as Y,k as y,l as J,m as L,n as j,o as P,p as ke,q as g,r as ue,u as q,v as T,w as K,x as te,y as N,z as ne,A as we,B as ye,C as Q,D as R,E as W,F as ve,G as Ce,H as Le,I as Se,J as Oe,L as Ie,K as Ee,M as ae,N as Ge,O as Me,P as Pe,Q as Je,R as je,T as qe,U as Ne,V as Be,W as De,X as ze}from"./SelectImportArea-8248d6fd.js";import{O as Ae}from"./Osm2streetsSettings-cf212ea8.js";function fe(s,t,n){const e=s.slice();return e[8]=t[n],e[10]=n,e}function pe(s){let t,n,e,o,r,i=s[1]+1+"",l,p,m=s[0].length+"",k,c,u,_,a,C,w,E,d,G,B,F,b,x,D,ee,se,H=s[0],S=[];for(let f=0;f<H.length;f+=1)S[f]=ce(fe(s,H,f));function oe(f){s[7](f)}var A=s[2].content;function le(f){let v={gj:f[2].gj,downloadable:!0};return f[2].show!==void 0&&(v.show=f[2].show),{props:v}}return A&&(b=ie(A,le(s)),Z.push(()=>Y(b,"show",oe))),{c(){t=y("div"),n=y("button"),e=J("Previous"),r=L(),l=J(i),p=J(" / "),k=J(m),c=L(),u=y("button"),_=J("Next"),C=L(),w=y("div"),E=y("select");for(let f=0;f<S.length;f+=1)S[f].c();d=L(),G=y("div"),B=y("input"),F=L(),b&&j(b.$$.fragment),P(n,"type","button"),n.disabled=o=s[1]==0,P(u,"type","button"),u.disabled=a=s[1]==s[0].length-1,s[1]===void 0&&ke(()=>s[5].call(E)),P(B,"type","checkbox")},m(f,v){h(f,t,v),g(t,n),g(n,e),g(t,r),g(t,l),g(t,p),g(t,k),g(t,c),g(t,u),g(u,_),h(f,C,v),h(f,w,v),g(w,E);for(let z=0;z<S.length;z+=1)S[z]&&S[z].m(E,null);ue(E,s[1],!0),h(f,d,v),h(f,G,v),g(G,B),B.checked=s[2].show,g(G,F),b&&q(b,G,null),D=!0,ee||(se=[T(n,"click",s[3]),T(u,"click",s[4]),T(E,"change",s[5]),T(B,"change",s[6])],ee=!0)},p(f,v){if((!D||v&2&&o!==(o=f[1]==0))&&(n.disabled=o),(!D||v&2)&&i!==(i=f[1]+1+"")&&K(l,i),(!D||v&1)&&m!==(m=f[0].length+"")&&K(k,m),(!D||v&3&&a!==(a=f[1]==f[0].length-1))&&(u.disabled=a),v&1){H=f[0];let O;for(O=0;O<H.length;O+=1){const re=fe(f,H,O);S[O]?S[O].p(re,v):(S[O]=ce(re),S[O].c(),S[O].m(E,null))}for(;O<S.length;O+=1)S[O].d(1);S.length=H.length}v&2&&ue(E,f[1]),v&4&&(B.checked=f[2].show);const z={};if(v&4&&(z.gj=f[2].gj),!x&&v&4&&(x=!0,z.show=f[2].show,te(()=>x=!1)),v&4&&A!==(A=f[2].content)){if(b){he();const O=b;M(O.$$.fragment,1,0,()=>{N(O,1)}),$e()}A?(b=ie(A,le(f)),Z.push(()=>Y(b,"show",oe)),j(b.$$.fragment),I(b.$$.fragment,1),q(b,G,null)):b=null}else A&&b.$set(z)},i(f){D||(b&&I(b.$$.fragment,f),D=!0)},o(f){b&&M(b.$$.fragment,f),D=!1},d(f){f&&$(t),f&&$(C),f&&$(w),ne(S,f),f&&$(d),f&&$(G),b&&N(b),ee=!1,we(se)}}}function ce(s){let t,n=s[8].label+"",e;return{c(){t=y("option"),e=J(n),t.__value=s[10],t.value=t.__value},m(o,r){h(o,t,r),g(t,e)},p(o,r){r&1&&n!==(n=o[8].label+"")&&K(e,n)},d(o){o&&$(t)}}}function Te(s){let t,n,e=s[0].length>0&&pe(s);return{c(){e&&e.c(),t=be()},m(o,r){e&&e.m(o,r),h(o,t,r),n=!0},p(o,[r]){o[0].length>0?e?(e.p(o,r),r&1&&I(e,1)):(e=pe(o),e.c(),I(e,1),e.m(t.parentNode,t)):e&&(he(),M(e,1,1,()=>{e=null}),$e())},i(o){n||(I(e),n=!0)},o(o){M(e),n=!1},d(o){e&&e.d(o),o&&$(t)}}}function Re(s,t,n){let e,{layers:o}=t,r=0;const i=()=>n(1,r--,r),l=()=>n(1,r++,r);function p(){r=ye(this),n(1,r)}function m(){e.show=this.checked,n(2,e),n(0,o),n(1,r)}function k(c){s.$$.not_equal(e.show,c)&&(e.show=c,n(2,e),n(0,o),n(1,r))}return s.$$set=c=>{"layers"in c&&n(0,o=c.layers)},s.$$.update=()=>{s.$$.dirty&3&&n(2,e=o[r])},[o,r,e,i,l,p,m,k]}class We extends U{constructor(t){super(),V(this,t,Re,Te,X,{layers:0})}}function _e(s,t,n){const e=s.slice();return e[4]=t[n],e}function me(s){let t,n=s[4]+"",e,o,r;return{c(){t=y("a"),e=J(n),r=J(","),P(t,"href",o="https://www.openstreetmap.org/node/"+s[4]),P(t,"target","_blank")},m(i,l){h(i,t,l),g(t,e),h(i,r,l)},p(i,l){l&1&&n!==(n=i[4]+"")&&K(e,n),l&1&&o!==(o="https://www.openstreetmap.org/node/"+i[4])&&P(t,"href",o)},d(i){i&&$(t),i&&$(r)}}}function Fe(s){let t,n,e,o,r,i,l,p,m,k=s[0].properties.osm_node_ids,c=[];for(let u=0;u<k.length;u+=1)c[u]=me(_e(s,k,u));return{c(){t=y("pre"),t.textContent=`${JSON.stringify(s[1],null,"  ")}`,n=L(),e=y("div"),o=J(`OSM nodes:
  `);for(let u=0;u<c.length;u+=1)c[u].c();r=L(),i=y("div"),l=y("button"),l.textContent="Collapse intersection",P(l,"type","button")},m(u,_){h(u,t,_),h(u,n,_),h(u,e,_),g(e,o);for(let a=0;a<c.length;a+=1)c[a]&&c[a].m(e,null);h(u,r,_),h(u,i,_),g(i,l),p||(m=T(l,"click",s[2]),p=!0)},p(u,[_]){if(_&1){k=u[0].properties.osm_node_ids;let a;for(a=0;a<k.length;a+=1){const C=_e(u,k,a);c[a]?c[a].p(C,_):(c[a]=me(C),c[a].c(),c[a].m(e,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=k.length}},i:Q,o:Q,d(u){u&&$(t),u&&$(n),u&&$(e),ne(c,u),u&&$(r),u&&$(i),p=!1,m()}}}function He(s,t,n){let e;R(s,W,l=>n(3,e=l));let{intersection:o}=t,r=structuredClone(o.properties);delete r.osm_node_ids;function i(){e.collapseIntersection(o.properties.id),W.set(e)}return s.$$set=l=>{"intersection"in l&&n(0,o=l.intersection)},[o,r,i]}class Ke extends U{constructor(t){super(),V(this,t,He,Fe,X,{intersection:0})}}function de(s,t,n){const e=s.slice();return e[5]=t[n],e}function ge(s){let t,n=s[5]+"",e,o,r;return{c(){t=y("a"),e=J(n),r=J(","),P(t,"href",o="https://www.openstreetmap.org/way/"+s[5]),P(t,"target","_blank")},m(i,l){h(i,t,l),g(t,e),h(i,r,l)},p(i,l){l&1&&n!==(n=i[5]+"")&&K(e,n),l&1&&o!==(o="https://www.openstreetmap.org/way/"+i[5])&&P(t,"href",o)},d(i){i&&$(t),i&&$(r)}}}function Qe(s){let t,n,e,o,r,i,l,p,m,k,c,u=s[0].properties.osm_way_ids,_=[];for(let a=0;a<u.length;a+=1)_[a]=ge(de(s,u,a));return{c(){t=y("pre"),t.textContent=`${JSON.stringify(s[1],null,"  ")}`,n=L(),e=y("div"),o=J(`OSM ways:
  `);for(let a=0;a<_.length;a+=1)_[a].c();r=L(),i=y("div"),l=y("button"),l.textContent="Collapse short road",p=L(),m=y("button"),m.textContent="Zip side-path",P(l,"type","button"),P(m,"type","button")},m(a,C){h(a,t,C),h(a,n,C),h(a,e,C),g(e,o);for(let w=0;w<_.length;w+=1)_[w]&&_[w].m(e,null);h(a,r,C),h(a,i,C),g(i,l),g(i,p),g(i,m),k||(c=[T(l,"click",s[2]),T(m,"click",s[3])],k=!0)},p(a,[C]){if(C&1){u=a[0].properties.osm_way_ids;let w;for(w=0;w<u.length;w+=1){const E=de(a,u,w);_[w]?_[w].p(E,C):(_[w]=ge(E),_[w].c(),_[w].m(e,null))}for(;w<_.length;w+=1)_[w].d(1);_.length=u.length}},i:Q,o:Q,d(a){a&&$(t),a&&$(n),a&&$(e),ne(_,a),a&&$(r),a&&$(i),k=!1,we(c)}}}function Ue(s,t,n){let e;R(s,W,p=>n(4,e=p));let{lane:o}=t,r=structuredClone(o.properties);delete r.osm_way_ids;function i(){e.collapseShortRoad(o.properties.rod),W.set(e)}function l(){e.zipSidepath(o.properties.rod),W.set(e)}return s.$$set=p=>{"lane"in p&&n(0,o=p.lane)},[o,r,i,l]}class Ve extends U{constructor(t){super(),V(this,t,Ue,Qe,X,{lane:0})}}function Xe(s,t,n){let e,o,r;R(s,ve,l=>n(0,e=l)),R(s,Ce,l=>n(1,o=l)),R(s,Le,l=>n(2,r=l));let i=new Se.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});return Oe(()=>{i.remove()}),s.$$.update=()=>{if(s.$$.dirty&7)if(r){let l=document.createElement("div");new Ve({target:l,props:{lane:r}});let p=r.geometry.coordinates[0][0];i.setLngLat(p).setDOMContent(l).addTo(e)}else if(o){let l=document.createElement("div");new Ke({target:l,props:{intersection:o}});let p=o.geometry.coordinates[0][0];i.setLngLat(p).setDOMContent(l).addTo(e)}else i.remove()},[e,o,r]}class Ze extends U{constructor(t){super(),V(this,t,Xe,null,X,{})}}function Ye(s){let t,n,e,o,r,i,l,p,m,k,c,u,_;o=new Ge({});function a(d){s[7](d)}let C={};s[1]!==void 0&&(C.settings=s[1]),i=new Ae({props:C}),Z.push(()=>Y(i,"settings",a));function w(d){s[8](d)}let E={settings:s[1]};return s[0]!==void 0&&(E.imported=s[0]),m=new Me({props:E}),Z.push(()=>Y(m,"imported",w)),u=new Pe({props:{imported:s[0]}}),{c(){t=y("div"),n=y("h1"),n.textContent="osm2streets Street Explorer",e=L(),j(o.$$.fragment),r=L(),j(i.$$.fragment),p=L(),j(m.$$.fragment),c=L(),j(u.$$.fragment),P(t,"slot","left")},m(d,G){h(d,t,G),g(t,n),g(t,e),q(o,t,null),g(t,r),q(i,t,null),g(t,p),q(m,t,null),g(t,c),q(u,t,null),_=!0},p(d,G){const B={};!l&&G&2&&(l=!0,B.settings=d[1],te(()=>l=!1)),i.$set(B);const F={};G&2&&(F.settings=d[1]),!k&&G&1&&(k=!0,F.imported=d[0],te(()=>k=!1)),m.$set(F);const b={};G&1&&(b.imported=d[0]),u.$set(b)},i(d){_||(I(o.$$.fragment,d),I(i.$$.fragment,d),I(m.$$.fragment,d),I(u.$$.fragment,d),_=!0)},o(d){M(o.$$.fragment,d),M(i.$$.fragment,d),M(m.$$.fragment,d),M(u.$$.fragment,d),_=!1},d(d){d&&$(t),N(o),N(i),N(m),N(u)}}}function xe(s){let t,n;return t=new We({props:{layers:s[3]}}),{c(){j(t.$$.fragment)},m(e,o){q(t,e,o),n=!0},p:Q,i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){M(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function et(s){let t,n,e,o,r,i;return t=new Ne({}),t.$on("polygon",s[6]),e=new Be({props:{layers:s[2],$$slots:{default:[xe]},$$scope:{ctx:s}}}),r=new Ze({}),{c(){j(t.$$.fragment),n=L(),j(e.$$.fragment),o=L(),j(r.$$.fragment)},m(l,p){q(t,l,p),h(l,n,p),q(e,l,p),h(l,o,p),q(r,l,p),i=!0},p(l,p){const m={};p&4&&(m.layers=l[2]),p&512&&(m.$$scope={dirty:p,ctx:l}),e.$set(m)},i(l){i||(I(t.$$.fragment,l),I(e.$$.fragment,l),I(r.$$.fragment,l),i=!0)},o(l){M(t.$$.fragment,l),M(e.$$.fragment,l),M(r.$$.fragment,l),i=!1},d(l){N(t,l),l&&$(n),N(e,l),l&&$(o),N(r,l)}}}function tt(s){let t,n,e;return n=new Je({props:{$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){t=y("div"),j(n.$$.fragment),P(t,"slot","main")},m(o,r){h(o,t,r),q(n,t,null),e=!0},p(o,r){const i={};r&519&&(i.$$scope={dirty:r,ctx:o}),n.$set(i)},i(o){e||(I(n.$$.fragment,o),e=!0)},o(o){M(n.$$.fragment,o),e=!1},d(o){o&&$(t),N(n)}}}function nt(s){let t,n;return t=new Ie({props:{$$slots:{main:[tt],left:[Ye]},$$scope:{ctx:s}}}),{c(){j(t.$$.fragment)},m(e,o){q(t,e,o),n=!0},p(e,[o]){const r={};o&519&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){M(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function st(s,t,n){let e,o;R(s,W,u=>n(4,e=u)),R(s,ae,u=>n(5,o=u));let r={kind:"nothing"},i,l=[],p=[];Ee(async()=>{await je()});const m=u=>qe(u,r,i);function k(u){i=u,n(1,i)}function c(u){r=u,n(0,r)}return s.$$.update=()=>{s.$$.dirty&1&&r.kind=="done"&&(W.set(r.network),ae.set(r.boundaryGJ)),s.$$.dirty&48&&e&&o&&n(2,l=De(e,o).concat(ze()))},[r,i,l,p,e,o,m,k,c]}class ot extends U{constructor(t){super(),V(this,t,st,nt,X,{})}}new ot({target:document.getElementById("app")});

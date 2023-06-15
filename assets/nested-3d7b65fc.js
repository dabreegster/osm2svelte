import{S as D,i as J,s as O,e as q,a as w,C as M,d as h,D as A,E as H,l as S,k as b,o as k,q as l,w as N,L as P,n as u,u as f,t as m,b as c,y as d,F as j,G as z,H as F,I as K,K as Q,M as R,h as U,j as V,N as X,m as y,x as Y,O as Z,P as x,Q as ee,R as te,T as ne}from"./SelectImportArea-365bce0a.js";function re(o){let e;return{c(){e=S("Click a road to edit")},m(a,r){w(a,e,r)},p:M,d(a){a&&h(e)}}}function ae(o){let e,a,r,t;return{c(){e=b("a"),a=S("Way "),r=S(o[0]),k(e,"href",t="http://openstreetmap.org/way/"+o[0]),k(e,"target","_blank")},m(n,s){w(n,e,s),l(e,a),l(e,r)},p(n,s){s&1&&N(r,n[0]),s&1&&t!==(t="http://openstreetmap.org/way/"+n[0])&&k(e,"href",t)},d(n){n&&h(e)}}}function se(o){let e;function a(n,s){return n[0]?ae:re}let r=a(o),t=r(o);return{c(){t.c(),e=q()},m(n,s){t.m(n,s),w(n,e,s)},p(n,[s]){r===(r=a(n))&&t?t.p(n,s):(t.d(1),t=r(n),t&&(t.c(),t.m(e.parentNode,e)))},i:M,o:M,d(n){t.d(n),n&&h(e)}}}function oe(o,e,a){let r;A(o,H,n=>a(1,r=n));let t;return o.$$.update=()=>{o.$$.dirty&2&&(r?r.properties.osm_way_ids.length!=1?window.alert("This road doesn't match up with one OSM way; you can't edit it"):a(0,t=r.properties.osm_way_ids[0]):a(0,t=null))},[t,r]}class ie extends D{constructor(e){super(),J(this,e,oe,se,O,{})}}function le(o){let e,a,r,t,n,s,p,_,$,G,g,I,v,L;t=new Q({});function W(i){o[4](i)}let E={settings:o[2]};return o[0]!==void 0&&(E.imported=o[0]),s=new R({props:E}),U.push(()=>V(s,"imported",W)),$=new X({props:{imported:o[0]}}),g=new ie({}),{c(){e=b("div"),a=b("h1"),a.textContent="osm2streets lane editor",r=y(),u(t.$$.fragment),n=y(),u(s.$$.fragment),_=y(),u($.$$.fragment),G=y(),u(g.$$.fragment),I=y(),v=b("div"),v.innerHTML=`<strong>Warnings:</strong> 
      <ul><li><strong>This tool is an early experiment</strong></li> 
        <li>Don&#39;t use this tool without understanding OSM tagging</li> 
        <li>Be careful around sidepaths, footways, and dual carriageways</li> 
        <li>Don&#39;t edit a way that&#39;s partly clipped</li></ul>`,k(e,"slot","left")},m(i,C){w(i,e,C),l(e,a),l(e,r),f(t,e,null),l(e,n),f(s,e,null),l(e,_),f($,e,null),l(e,G),f(g,e,null),l(e,I),l(e,v),L=!0},p(i,C){const T={};!p&&C&1&&(p=!0,T.imported=i[0],Y(()=>p=!1)),s.$set(T);const B={};C&1&&(B.imported=i[0]),$.$set(B)},i(i){L||(m(t.$$.fragment,i),m(s.$$.fragment,i),m($.$$.fragment,i),m(g.$$.fragment,i),L=!0)},o(i){c(t.$$.fragment,i),c(s.$$.fragment,i),c($.$$.fragment,i),c(g.$$.fragment,i),L=!1},d(i){i&&h(e),d(t),d(s),d($),d(g)}}}function pe(o){let e,a,r,t;return e=new te({}),e.$on("polygon",o[3]),r=new ne({props:{layers:o[1],showControls:!1}}),{c(){u(e.$$.fragment),a=y(),u(r.$$.fragment)},m(n,s){f(e,n,s),w(n,a,s),f(r,n,s),t=!0},p(n,s){const p={};s&2&&(p.layers=n[1]),r.$set(p)},i(n){t||(m(e.$$.fragment,n),m(r.$$.fragment,n),t=!0)},o(n){c(e.$$.fragment,n),c(r.$$.fragment,n),t=!1},d(n){d(e,n),n&&h(a),d(r,n)}}}function ue(o){let e,a,r;return a=new Z({props:{$$slots:{default:[pe]},$$scope:{ctx:o}}}),{c(){e=b("div"),u(a.$$.fragment),k(e,"slot","main")},m(t,n){w(t,e,n),f(a,e,null),r=!0},p(t,n){const s={};n&35&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)},i(t){r||(m(a.$$.fragment,t),r=!0)},o(t){c(a.$$.fragment,t),r=!1},d(t){t&&h(e),d(a)}}}function fe(o){let e,a;return e=new P({props:{$$slots:{main:[ue],left:[le]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},m(r,t){f(e,r,t),a=!0},p(r,[t]){const n={};t&35&&(n.$$scope={dirty:t,ctx:r}),e.$set(n)},i(r){a||(m(e.$$.fragment,r),a=!0)},o(r){c(e.$$.fragment,r),a=!1},d(r){d(e,r)}}}function me(o,e,a){let r={debug_each_step:!1,dual_carriageway_experiment:!1,sidepath_zipping_experiment:!1,inferred_sidewalks:!1,osm2lanes:!1},t={kind:"nothing"},n=[];j(async()=>{await x()});const s=_=>ee(_,t,r);function p(_){t=_,a(0,t)}return o.$$.update=()=>{o.$$.dirty&1&&t.kind=="done"&&(z.set(t.network),F.set(t.boundaryGJ),a(1,n=K(t.network,t.boundaryGJ)))},[t,n,r,s,p]}class ce extends D{constructor(e){super(),J(this,e,me,fe,O,{})}}new ce({target:document.getElementById("app")});

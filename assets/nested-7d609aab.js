import{S as G,i as J,s as M,k as h,l as D,m as w,o as E,a as $,q as g,v as T,w as X,D as O,d as k,E as I,A as K,I as Z,B,n as W,e as Q,u as S,g as U,b,c as V,t as v,y as C,h as Y,L as x,H as ee,j as te,x as ne}from"./maplibre-gl-d0269db5.js";import{n as j,h as le,e as q,u as re,j as se,a as oe,k as ae,b as z,A as ie,B as ue,I as fe,M as pe,i as de,d as ce,S as me,L as _e,f as ye}from"./SelectImportArea-7b14db0e.js";function ge(o){let e,n=o[0].size+"",t,l,s,r,i,m;return{c(){e=h("div"),t=D(n),l=D(" ways edited"),s=w(),r=h("button"),r.textContent="Download .osc",E(r,"type","button")},m(p,c){$(p,e,c),g(e,t),g(e,l),$(p,s,c),$(p,r,c),i||(m=T(r,"click",o[1]),i=!0)},p(p,[c]){c&1&&n!==(n=p[0].size+"")&&X(t,n)},i:O,o:O,d(p){p&&(k(e),k(s),k(r)),i=!1,m()}}}function $e(o,e,n){let t;I(o,j,i=>n(3,t=i));let l=new Set;function s(i){l.add(i.detail),n(0,l)}function r(){let i=`<osmChange version="0.6" generator="osm2streets">
`;i+=`<create/>
`,i+=`<modify>
`;for(let m of l)i+=t.wayToXml(m),i+=`
`;i+=`</modify>
`,i+="</osmChange>",le("lane_edits.osc",i)}return[l,r,s]}class ke extends G{constructor(e){super(),J(this,e,$e,ge,M,{handleEditedWay:2})}get handleEditedWay(){return this.$$.ctx[2]}}function H(o,e,n){const t=o.slice();return t[11]=e[n],t[12]=e,t[13]=n,t}function P(o,e){let n,t,l,s,r,i,m,p,c,a,d,f;function u(){e[5].call(l,e[12],e[13])}function _(){e[6].call(i,e[12],e[13])}function A(){return e[7](e[11])}return{key:o,first:null,c(){n=h("tr"),t=h("td"),l=h("input"),s=w(),r=h("td"),i=h("input"),m=w(),p=h("td"),c=h("button"),c.textContent="Delete",a=w(),E(l,"type","text"),E(i,"type","text"),E(c,"type","button"),this.first=n},m(y,L){$(y,n,L),g(n,t),g(t,l),B(l,e[11].key),g(n,s),g(n,r),g(r,i),B(i,e[11].value),g(n,m),g(n,p),g(p,c),g(n,a),d||(f=[T(l,"input",u),T(i,"input",_),T(c,"click",A)],d=!0)},p(y,L){e=y,L&1&&l.value!==e[11].key&&B(l,e[11].key),L&1&&i.value!==e[11].value&&B(i,e[11].value)},d(y){y&&k(n),d=!1,K(f)}}}function he(o){let e,n,t=[],l=new Map,s,r,i,m,p,c,a=q(o[0]);const d=f=>f[11].id;for(let f=0;f<a.length;f+=1){let u=H(o,a,f),_=d(u);l.set(_,t[f]=P(_,u))}return{c(){e=h("table"),n=h("tbody");for(let f=0;f<t.length;f+=1)t[f].c();s=w(),r=h("button"),r.textContent="Add new tag",i=w(),m=h("button"),m.textContent="Recalculate",E(r,"type","button"),E(m,"type","button")},m(f,u){$(f,e,u),g(e,n);for(let _=0;_<t.length;_+=1)t[_]&&t[_].m(n,null);$(f,s,u),$(f,r,u),$(f,i,u),$(f,m,u),p||(c=[T(r,"click",o[2]),T(m,"click",o[3])],p=!0)},p(f,[u]){u&3&&(a=q(f[0]),t=re(t,u,d,1,f,a,l,n,se,P,null,H))},i:O,o:O,d(f){f&&(k(e),k(s),k(r),k(i),k(m));for(let u=0;u<t.length;u+=1)t[u].d();p=!1,K(c)}}}function we(o,e,n){let t;I(o,j,u=>n(9,t=u));let l=Z(),{way:s}=e,r=[],i=0;for(let[u,_]of Object.entries(JSON.parse(t.getOsmTagsForWay(s))))r.push({id:i++,key:u,value:_});function m(u){n(0,r=r.filter(_=>_.id!=u))}function p(){r.push({id:i++,key:"",value:""}),n(0,r)}function c(){let u={};for(let _ of r)_.key&&_.value&&(u[_.key]=_.value);t.overwriteOsmTagsForWay(s,JSON.stringify(u)),j.set(t),l("editedWay",s)}function a(u,_){u[_].key=this.value,n(0,r)}function d(u,_){u[_].value=this.value,n(0,r)}const f=u=>m(u.id);return o.$$set=u=>{"way"in u&&n(4,s=u.way)},[r,m,p,c,s,a,d,f]}class be extends G{constructor(e){super(),J(this,e,we,he,M,{way:4})}}function ve(o){let e;return{c(){e=D("Click a road to edit")},m(n,t){$(n,e,t)},p:O,i:O,o:O,d(n){n&&k(e)}}}function We(o){let e,n,t,l,s,r,i,m=o[0],p,c;r=new ae({props:{source:"current-way",gj:o[2],layerStyle:o[3]}});let a=R(o);return{c(){e=h("a"),n=D("Way "),t=D(o[0]),s=w(),W(r.$$.fragment),i=w(),a.c(),p=Q(),E(e,"href",l="http://openstreetmap.org/way/"+o[0]),E(e,"target","_blank")},m(d,f){$(d,e,f),g(e,n),g(e,t),$(d,s,f),S(r,d,f),$(d,i,f),a.m(d,f),$(d,p,f),c=!0},p(d,f){(!c||f&1)&&X(t,d[0]),(!c||f&1&&l!==(l="http://openstreetmap.org/way/"+d[0]))&&E(e,"href",l);const u={};f&4&&(u.gj=d[2]),r.$set(u),f&1&&M(m,m=d[0])?(U(),b(a,1,1,O),V(),a=R(d),a.c(),v(a,1),a.m(p.parentNode,p)):a.p(d,f)},i(d){c||(v(r.$$.fragment,d),v(a),c=!0)},o(d){b(r.$$.fragment,d),b(a),c=!1},d(d){d&&(k(e),k(s),k(i),k(p)),C(r,d),a.d(d)}}}function R(o){let e,n;return e=new be({props:{way:o[0]}}),e.$on("editedWay",o[7]),{c(){W(e.$$.fragment)},m(t,l){S(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.way=t[0]),e.$set(s)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Se(o){let e,n,t,l,s,r,i={};e=new ke({props:i}),o[6](e);const m=[We,ve],p=[];function c(a,d){return a[0]?0:1}return t=c(o),l=p[t]=m[t](o),{c(){W(e.$$.fragment),n=w(),l.c(),s=Q()},m(a,d){S(e,a,d),$(a,n,d),p[t].m(a,d),$(a,s,d),r=!0},p(a,[d]){const f={};e.$set(f);let u=t;t=c(a),t===u?p[t].p(a,d):(U(),b(p[u],1,1,()=>{p[u]=null}),V(),l=p[t],l?l.p(a,d):(l=p[t]=m[t](a),l.c()),v(l,1),l.m(s.parentNode,s))},i(a){r||(v(e.$$.fragment,a),v(l),r=!0)},o(a){b(e.$$.fragment,a),b(l),r=!1},d(a){a&&(k(n),k(s)),o[6](null),C(e,a),p[t].d(a)}}}function Ce(o,e,n){let t,l;I(o,j,a=>n(4,t=a)),I(o,oe,a=>n(5,l=a));let s,r,i,m={type:"fill",paint:{"fill-color":"red","fill-opacity":.3}};function p(a){Y[a?"unshift":"push"](()=>{s=a,n(1,s)})}const c=a=>s.handleEditedWay(a);return o.$$.update=()=>{o.$$.dirty&49&&(n(0,r=null),n(2,i=null),l?l.properties.osm_way_ids.length!=1?window.alert("This road doesn't match up with one OSM way; you can't edit it"):(n(0,r=BigInt(l.properties.osm_way_ids[0])),n(2,i=JSON.parse(t.getGeometryForWay(r)))):(n(0,r=null),n(2,i=null)))},[r,s,i,m,t,l,p,c]}class Ee extends G{constructor(e){super(),J(this,e,Ce,Se,M,{})}}function Le(o){let e,n,t,l,s,r,i,m,p,c,a,d,f,u;l=new ie({});function _(y){o[6](y)}let A={settings:o[2]};return o[0]!==void 0&&(A.imported=o[0]),r=new ue({props:A}),Y.push(()=>te(r,"imported",_)),p=new fe({props:{imported:o[0]}}),a=new Ee({}),{c(){e=h("div"),n=h("h1"),n.textContent="osm2streets lane editor",t=w(),W(l.$$.fragment),s=w(),W(r.$$.fragment),m=w(),W(p.$$.fragment),c=w(),W(a.$$.fragment),d=w(),f=h("div"),f.innerHTML="<strong>Warnings:</strong> <ul><li><strong>This tool is an early experiment</strong></li> <li>Don&#39;t use this tool without understanding OSM tagging</li> <li>Be careful around sidepaths, footways, and dual carriageways</li> <li>Don&#39;t edit a way that&#39;s partly clipped</li></ul>",E(e,"slot","left")},m(y,L){$(y,e,L),g(e,n),g(e,t),S(l,e,null),g(e,s),S(r,e,null),g(e,m),S(p,e,null),g(e,c),S(a,e,null),g(e,d),g(e,f),u=!0},p(y,L){const N={};!i&&L&1&&(i=!0,N.imported=y[0],ne(()=>i=!1)),r.$set(N);const F={};L&1&&(F.imported=y[0]),p.$set(F)},i(y){u||(v(l.$$.fragment,y),v(r.$$.fragment,y),v(p.$$.fragment,y),v(a.$$.fragment,y),u=!0)},o(y){b(l.$$.fragment,y),b(r.$$.fragment,y),b(p.$$.fragment,y),b(a.$$.fragment,y),u=!1},d(y){y&&k(e),C(l),C(r),C(p),C(a)}}}function Oe(o){let e,n,t,l;return e=new me({}),e.$on("polygon",o[5]),t=new _e({props:{layers:o[1],showControls:!1}}),{c(){W(e.$$.fragment),n=w(),W(t.$$.fragment)},m(s,r){S(e,s,r),$(s,n,r),S(t,s,r),l=!0},p(s,r){const i={};r&2&&(i.layers=s[1]),t.$set(i)},i(s){l||(v(e.$$.fragment,s),v(t.$$.fragment,s),l=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),l=!1},d(s){s&&k(n),C(e,s),C(t,s)}}}function Te(o){let e,n,t;return n=new pe({props:{$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){e=h("div"),W(n.$$.fragment),E(e,"slot","main")},m(l,s){$(l,e,s),S(n,e,null),t=!0},p(l,s){const r={};s&131&&(r.$$scope={dirty:s,ctx:l}),n.$set(r)},i(l){t||(v(n.$$.fragment,l),t=!0)},o(l){b(n.$$.fragment,l),t=!1},d(l){l&&k(e),C(n)}}}function Ie(o){let e,n;return e=new x({props:{$$slots:{main:[Te],left:[Le]},$$scope:{ctx:o}}}),{c(){W(e.$$.fragment)},m(t,l){S(e,t,l),n=!0},p(t,[l]){const s={};l&131&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function je(o,e,n){let t,l;I(o,z,c=>n(3,t=c)),I(o,j,c=>n(4,l=c));let s={debug_each_step:!1,dual_carriageway_experiment:!1,sidepath_zipping_experiment:!1,inferred_sidewalks:!1,osm2lanes:!1},r={kind:"nothing"},i=[];ee(async()=>{await de()});const m=c=>ce(c,r,s);function p(c){r=c,n(0,r)}return o.$$.update=()=>{o.$$.dirty&1&&r.kind=="done"&&(j.set(r.network),z.set(r.boundaryGJ)),o.$$.dirty&24&&l&&t&&n(1,i=ye(l,t))},[r,i,s,t,l,m,p]}class De extends G{constructor(e){super(),J(this,e,je,Ie,M,{})}}new De({target:document.getElementById("app")});

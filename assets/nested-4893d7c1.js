import{S as N,i as B,s as j,l as w,m as M,n as h,p as E,a as $,r as g,w as L,x as H,E as T,d as k,F as G,G as J,_ as Z,f as A,$ as x,a0 as ee,B as Q,a1 as te,C as I,o as v,e as U,v as C,g as V,b,c as Y,t as W,z as S,J as ne,j as K,a2 as le,M as re,N as se,O as q,P as oe,Q as ae,k as ie,R as ue,y as fe,T as pe,U as de,V as ce,W as me,X as _e,Y as ye}from"./SelectImportArea-74e9ea6f.js";function ge(o){let e,n=o[0].size+"",t,l,s,r,i,m;return{c(){e=w("div"),t=M(n),l=M(" ways edited"),s=h(),r=w("button"),r.textContent="Download .osc",E(r,"type","button")},m(p,c){$(p,e,c),g(e,t),g(e,l),$(p,s,c),$(p,r,c),i||(m=L(r,"click",o[1]),i=!0)},p(p,[c]){c&1&&n!==(n=p[0].size+"")&&H(t,n)},i:T,o:T,d(p){p&&(k(e),k(s),k(r)),i=!1,m()}}}function $e(o,e,n){let t;G(o,J,i=>n(3,t=i));let l=new Set;function s(i){l.add(i.detail),n(0,l)}function r(){let i=`<osmChange version="0.6" generator="osm2streets">
`;i+=`<create/>
`,i+=`<modify>
`;for(let m of l)i+=t.wayToXml(m),i+=`
`;i+=`</modify>
`,i+="</osmChange>",Z("lane_edits.osc",i)}return[l,r,s]}class ke extends N{constructor(e){super(),B(this,e,$e,ge,j,{handleEditedWay:2})}get handleEditedWay(){return this.$$.ctx[2]}}function P(o,e,n){const t=o.slice();return t[11]=e[n],t[12]=e,t[13]=n,t}function R(o,e){let n,t,l,s,r,i,m,p,c,a,d,f;function u(){e[5].call(l,e[12],e[13])}function _(){e[6].call(i,e[12],e[13])}function D(){return e[7](e[11])}return{key:o,first:null,c(){n=w("tr"),t=w("td"),l=w("input"),s=h(),r=w("td"),i=w("input"),m=h(),p=w("td"),c=w("button"),c.textContent="Delete",a=h(),E(l,"type","text"),E(i,"type","text"),E(c,"type","button"),this.first=n},m(y,O){$(y,n,O),g(n,t),g(t,l),I(l,e[11].key),g(n,s),g(n,r),g(r,i),I(i,e[11].value),g(n,m),g(n,p),g(p,c),g(n,a),d||(f=[L(l,"input",u),L(i,"input",_),L(c,"click",D)],d=!0)},p(y,O){e=y,O&1&&l.value!==e[11].key&&I(l,e[11].key),O&1&&i.value!==e[11].value&&I(i,e[11].value)},d(y){y&&k(n),d=!1,Q(f)}}}function we(o){let e,n,t=[],l=new Map,s,r,i,m,p,c,a=A(o[0]);const d=f=>f[11].id;for(let f=0;f<a.length;f+=1){let u=P(o,a,f),_=d(u);l.set(_,t[f]=R(_,u))}return{c(){e=w("table"),n=w("tbody");for(let f=0;f<t.length;f+=1)t[f].c();s=h(),r=w("button"),r.textContent="Add new tag",i=h(),m=w("button"),m.textContent="Recalculate",E(r,"type","button"),E(m,"type","button")},m(f,u){$(f,e,u),g(e,n);for(let _=0;_<t.length;_+=1)t[_]&&t[_].m(n,null);$(f,s,u),$(f,r,u),$(f,i,u),$(f,m,u),p||(c=[L(r,"click",o[2]),L(m,"click",o[3])],p=!0)},p(f,[u]){u&3&&(a=A(f[0]),t=x(t,u,d,1,f,a,l,n,ee,R,null,P))},i:T,o:T,d(f){f&&(k(e),k(s),k(r),k(i),k(m));for(let u=0;u<t.length;u+=1)t[u].d();p=!1,Q(c)}}}function he(o,e,n){let t;G(o,J,u=>n(9,t=u));let l=te(),{way:s}=e,r=[],i=0;for(let[u,_]of Object.entries(JSON.parse(t.getOsmTagsForWay(s))))r.push({id:i++,key:u,value:_});function m(u){n(0,r=r.filter(_=>_.id!=u))}function p(){r.push({id:i++,key:"",value:""}),n(0,r)}function c(){let u={};for(let _ of r)_.key&&_.value&&(u[_.key]=_.value);t.overwriteOsmTagsForWay(s,JSON.stringify(u)),J.set(t),l("editedWay",s)}function a(u,_){u[_].key=this.value,n(0,r)}function d(u,_){u[_].value=this.value,n(0,r)}const f=u=>m(u.id);return o.$$set=u=>{"way"in u&&n(4,s=u.way)},[r,m,p,c,s,a,d,f]}class be extends N{constructor(e){super(),B(this,e,he,we,j,{way:4})}}function We(o){let e;return{c(){e=M("Click a road to edit")},m(n,t){$(n,e,t)},p:T,i:T,o:T,d(n){n&&k(e)}}}function ve(o){let e,n,t,l,s,r,i,m=o[0],p,c;r=new le({props:{source:"current-way",gj:o[2],layerStyle:o[3]}});let a=X(o);return{c(){e=w("a"),n=M("Way "),t=M(o[0]),s=h(),v(r.$$.fragment),i=h(),a.c(),p=U(),E(e,"href",l="http://openstreetmap.org/way/"+o[0]),E(e,"target","_blank")},m(d,f){$(d,e,f),g(e,n),g(e,t),$(d,s,f),C(r,d,f),$(d,i,f),a.m(d,f),$(d,p,f),c=!0},p(d,f){(!c||f&1)&&H(t,d[0]),(!c||f&1&&l!==(l="http://openstreetmap.org/way/"+d[0]))&&E(e,"href",l);const u={};f&4&&(u.gj=d[2]),r.$set(u),f&1&&j(m,m=d[0])?(V(),b(a,1,1,T),Y(),a=X(d),a.c(),W(a,1),a.m(p.parentNode,p)):a.p(d,f)},i(d){c||(W(r.$$.fragment,d),W(a),c=!0)},o(d){b(r.$$.fragment,d),b(a),c=!1},d(d){d&&(k(e),k(s),k(i),k(p)),S(r,d),a.d(d)}}}function X(o){let e,n;return e=new be({props:{way:o[0]}}),e.$on("editedWay",o[7]),{c(){v(e.$$.fragment)},m(t,l){C(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.way=t[0]),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function Ce(o){let e,n,t,l,s,r,i={};e=new ke({props:i}),o[6](e);const m=[ve,We],p=[];function c(a,d){return a[0]?0:1}return t=c(o),l=p[t]=m[t](o),{c(){v(e.$$.fragment),n=h(),l.c(),s=U()},m(a,d){C(e,a,d),$(a,n,d),p[t].m(a,d),$(a,s,d),r=!0},p(a,[d]){const f={};e.$set(f);let u=t;t=c(a),t===u?p[t].p(a,d):(V(),b(p[u],1,1,()=>{p[u]=null}),Y(),l=p[t],l?l.p(a,d):(l=p[t]=m[t](a),l.c()),W(l,1),l.m(s.parentNode,s))},i(a){r||(W(e.$$.fragment,a),W(l),r=!0)},o(a){b(e.$$.fragment,a),b(l),r=!1},d(a){a&&(k(n),k(s)),o[6](null),S(e,a),p[t].d(a)}}}function Se(o,e,n){let t,l;G(o,J,a=>n(4,t=a)),G(o,ne,a=>n(5,l=a));let s,r,i,m={type:"fill",paint:{"fill-color":"red","fill-opacity":.3}};function p(a){K[a?"unshift":"push"](()=>{s=a,n(1,s)})}const c=a=>s.handleEditedWay(a);return o.$$.update=()=>{o.$$.dirty&49&&(n(0,r=null),n(2,i=null),l?l.properties.osm_way_ids.length!=1?window.alert("This road doesn't match up with one OSM way; you can't edit it"):(n(0,r=BigInt(l.properties.osm_way_ids[0])),n(2,i=JSON.parse(t.getGeometryForWay(r)))):(n(0,r=null),n(2,i=null)))},[r,s,i,m,t,l,p,c]}class Ee extends N{constructor(e){super(),B(this,e,Se,Ce,j,{})}}function Oe(o){let e,n,t,l,s,r,i,m,p,c,a,d,f,u;l=new oe({});function _(y){o[6](y)}let D={settings:o[2]};return o[0]!==void 0&&(D.imported=o[0]),r=new ae({props:D}),K.push(()=>ie(r,"imported",_)),p=new ue({props:{imported:o[0]}}),a=new Ee({}),{c(){e=w("div"),n=w("h1"),n.textContent="osm2streets lane editor",t=h(),v(l.$$.fragment),s=h(),v(r.$$.fragment),m=h(),v(p.$$.fragment),c=h(),v(a.$$.fragment),d=h(),f=w("div"),f.innerHTML="<strong>Warnings:</strong> <ul><li><strong>This tool is an early experiment</strong></li> <li>Don&#39;t use this tool without understanding OSM tagging</li> <li>Be careful around sidepaths, footways, and dual carriageways</li> <li>Don&#39;t edit a way that&#39;s partly clipped</li></ul>",E(e,"slot","left")},m(y,O){$(y,e,O),g(e,n),g(e,t),C(l,e,null),g(e,s),C(r,e,null),g(e,m),C(p,e,null),g(e,c),C(a,e,null),g(e,d),g(e,f),u=!0},p(y,O){const F={};!i&&O&1&&(i=!0,F.imported=y[0],fe(()=>i=!1)),r.$set(F);const z={};O&1&&(z.imported=y[0]),p.$set(z)},i(y){u||(W(l.$$.fragment,y),W(r.$$.fragment,y),W(p.$$.fragment,y),W(a.$$.fragment,y),u=!0)},o(y){b(l.$$.fragment,y),b(r.$$.fragment,y),b(p.$$.fragment,y),b(a.$$.fragment,y),u=!1},d(y){y&&k(e),S(l),S(r),S(p),S(a)}}}function Te(o){let e,n,t,l;return e=new me({}),e.$on("polygon",o[5]),t=new _e({props:{layers:o[1],showControls:!1}}),{c(){v(e.$$.fragment),n=h(),v(t.$$.fragment)},m(s,r){C(e,s,r),$(s,n,r),C(t,s,r),l=!0},p(s,r){const i={};r&2&&(i.layers=s[1]),t.$set(i)},i(s){l||(W(e.$$.fragment,s),W(t.$$.fragment,s),l=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),l=!1},d(s){s&&k(n),S(e,s),S(t,s)}}}function Le(o){let e,n,t;return n=new pe({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),{c(){e=w("div"),v(n.$$.fragment),E(e,"slot","main")},m(l,s){$(l,e,s),C(n,e,null),t=!0},p(l,s){const r={};s&131&&(r.$$scope={dirty:s,ctx:l}),n.$set(r)},i(l){t||(W(n.$$.fragment,l),t=!0)},o(l){b(n.$$.fragment,l),t=!1},d(l){l&&k(e),S(n)}}}function Ge(o){let e,n;return e=new re({props:{$$slots:{main:[Le],left:[Oe]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},m(t,l){C(e,t,l),n=!0},p(t,[l]){const s={};l&131&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function Je(o,e,n){let t,l;G(o,q,c=>n(3,t=c)),G(o,J,c=>n(4,l=c));let s={debug_each_step:!1,dual_carriageway_experiment:!1,sidepath_zipping_experiment:!1,inferred_sidewalks:!1,osm2lanes:!1},r={kind:"nothing"},i=[];se(async()=>{await de()});const m=c=>ce(c,r,s);function p(c){r=c,n(0,r)}return o.$$.update=()=>{o.$$.dirty&1&&r.kind=="done"&&(J.set(r.network),q.set(r.boundaryGJ)),o.$$.dirty&24&&l&&t&&n(1,i=ye(l,t))},[r,i,s,t,l,m,p]}class Me extends N{constructor(e){super(),B(this,e,Je,Ge,j,{})}}new Me({target:document.getElementById("app")});

import{S as z,i as q,s as V,o as h,p as W,F as ne,O as nt,e as G,r as g,P as Ie,u as I,v as Q,k as O,A as Ae,Q as rt,R as ee,q as $,t as y,g as oe,f as k,h as se,C as Xe,w as Se,B as Ze,J as ot,K as st,M as it,N as lt,b as U,T as at,U as _t,c as F,V as ut,W as ft,a as Z,d as E,m as P,j as H,l as R,n as B,z as He}from"./OverpassSelector-c7abaf02.js";let u;const K=new Array(128).fill(void 0);K.push(void 0,null,!0,!1);function m(r){return K[r]}let de=K.length;function ct(r){r<132||(K[r]=de,de=r)}function me(r){const e=m(r);return ct(r),e}const Ke=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ke.decode();let _e=null;function ye(){return(_e===null||_e.byteLength===0)&&(_e=new Uint8Array(u.memory.buffer)),_e}function M(r,e){return Ke.decode(ye().subarray(r,r+e))}function A(r){de===K.length&&K.push(K.length+1);const e=de;return de=K[e],K[e]=r,e}function Ce(r){return r==null}let ue=null;function dt(){return(ue===null||ue.byteLength===0)&&(ue=new Float64Array(u.memory.buffer)),ue}let fe=null;function w(){return(fe===null||fe.byteLength===0)&&(fe=new Int32Array(u.memory.buffer)),fe}let x=0;const he=new TextEncoder("utf-8"),gt=typeof he.encodeInto=="function"?function(r,e){return he.encodeInto(r,e)}:function(r,e){const n=he.encode(r);return e.set(n),{read:r.length,written:n.length}};function re(r,e,n){if(n===void 0){const _=he.encode(r),i=e(_.length);return ye().subarray(i,i+_.length).set(_),x=_.length,i}let t=r.length,o=e(t);const s=ye();let a=0;for(;a<t;a++){const _=r.charCodeAt(a);if(_>127)break;s[o+a]=_}if(a!==t){a!==0&&(r=r.slice(a)),o=n(o,t,t=a+r.length*3);const _=ye().subarray(o+a,o+t),i=gt(r,_);a+=i.written}return x=a,o}function Fe(r){const e=typeof r;if(e=="number"||e=="boolean"||r==null)return`${r}`;if(e=="string")return`"${r}"`;if(e=="symbol"){const o=r.description;return o==null?"Symbol":`Symbol(${o})`}if(e=="function"){const o=r.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(r)){const o=r.length;let s="[";o>0&&(s+=Fe(r[0]));for(let a=1;a<o;a++)s+=", "+Fe(r[a]);return s+="]",s}const n=/\[object ([^\]]+)\]/.exec(toString.call(r));let t;if(n.length>1)t=n[1];else return toString.call(r);if(t=="Object")try{return"Object("+JSON.stringify(r)+")"}catch{return"Object"}return r instanceof Error?`${r.name}: ${r.message}
${r.stack}`:t}let ce=null;function bt(){return(ce===null||ce.byteLength===0)&&(ce=new Uint32Array(u.memory.buffer)),ce}function pt(r,e){const t=bt().subarray(r/4,r/4+e),o=[];for(let s=0;s<t.length;s++)o.push(me(t[s]));return o}function te(r,e){try{return r.apply(this,e)}catch(n){u.__wbindgen_exn_store(A(n))}}class Ee{static __wrap(e){const n=Object.create(Ee.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();u.__wbg_jsdebugstreets_free(e)}getLabel(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsdebugstreets_getLabel(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];return M(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}getNetwork(){const e=u.jsdebugstreets_getNetwork(this.ptr);return me(e)}toDebugGeojson(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsdebugstreets_toDebugGeojson(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];let o;return e!==0&&(o=M(e,n).slice(),u.__wbindgen_free(e,n*1)),o}finally{u.__wbindgen_add_to_stack_pointer(16)}}}class ge{static __wrap(e){const n=Object.create(ge.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();u.__wbg_jsstreetnetwork_free(e)}constructor(e,n,t){try{const _=u.__wbindgen_add_to_stack_pointer(-16),i=re(e,u.__wbindgen_malloc,u.__wbindgen_realloc),l=x,f=re(n,u.__wbindgen_malloc,u.__wbindgen_realloc),c=x;u.jsstreetnetwork_new(_,i,l,f,c,A(t));var o=w()[_/4+0],s=w()[_/4+1],a=w()[_/4+2];if(a)throw me(s);return ge.__wrap(o)}finally{u.__wbindgen_add_to_stack_pointer(16)}}toGeojsonPlain(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_toGeojsonPlain(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];return M(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}toLanePolygonsGeojson(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_toLanePolygonsGeojson(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];return M(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}toLaneMarkingsGeojson(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_toLaneMarkingsGeojson(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];return M(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}toIntersectionMarkingsGeojson(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_toIntersectionMarkingsGeojson(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];return M(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}toGraphviz(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_toGraphviz(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];return M(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}getDebugSteps(){try{const o=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_getDebugSteps(o,this.ptr);var e=w()[o/4+0],n=w()[o/4+1],t=pt(e,n).slice();return u.__wbindgen_free(e,n*4),t}finally{u.__wbindgen_add_to_stack_pointer(16)}}debugClockwiseOrderingGeojson(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_debugClockwiseOrderingGeojson(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];return M(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}debugClockwiseOrderingForIntersectionGeojson(e){try{const o=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_debugClockwiseOrderingForIntersectionGeojson(o,this.ptr,e);var n=w()[o/4+0],t=w()[o/4+1];return M(n,t)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(n,t)}}debugMovementsFromLaneGeojson(e,n){try{const s=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_debugMovementsFromLaneGeojson(s,this.ptr,e,n);var t=w()[s/4+0],o=w()[s/4+1];return M(t,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(t,o)}}debugRoadsConnectedToIntersectionGeojson(e){try{const o=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_debugRoadsConnectedToIntersectionGeojson(o,this.ptr,e);var n=w()[o/4+0],t=w()[o/4+1];return M(n,t)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(n,t)}}getOsmTagsForWay(e){try{const o=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_getOsmTagsForWay(o,this.ptr,e);var n=w()[o/4+0],t=w()[o/4+1];return M(n,t)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(n,t)}}toJson(){try{const t=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_toJson(t,this.ptr);var e=w()[t/4+0],n=w()[t/4+1];return M(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}getGeometryForWay(e){try{const o=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_getGeometryForWay(o,this.ptr,e);var n=w()[o/4+0],t=w()[o/4+1];return M(n,t)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(n,t)}}wayToXml(e){try{const o=u.__wbindgen_add_to_stack_pointer(-16);u.jsstreetnetwork_wayToXml(o,this.ptr,e);var n=w()[o/4+0],t=w()[o/4+1];return M(n,t)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(n,t)}}overwriteOsmTagsForWay(e,n){const t=re(n,u.__wbindgen_malloc,u.__wbindgen_realloc),o=x;u.jsstreetnetwork_overwriteOsmTagsForWay(this.ptr,e,t,o)}collapseShortRoad(e){u.jsstreetnetwork_collapseShortRoad(this.ptr,e)}collapseIntersection(e){u.jsstreetnetwork_collapseIntersection(this.ptr,e)}zipSidepath(e){u.jsstreetnetwork_zipSidepath(this.ptr,e)}}async function wt(r,e){if(typeof Response=="function"&&r instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,e)}catch(t){if(r.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}const n=await r.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(r,e);return n instanceof WebAssembly.Instance?{instance:n,module:r}:n}}function yt(){const r={};return r.wbg={},r.wbg.__wbg_jsdebugstreets_new=function(e){const n=Ee.__wrap(e);return A(n)},r.wbg.__wbindgen_boolean_get=function(e){const n=m(e);return typeof n=="boolean"?n?1:0:2},r.wbg.__wbindgen_object_drop_ref=function(e){me(e)},r.wbg.__wbindgen_is_object=function(e){const n=m(e);return typeof n=="object"&&n!==null},r.wbg.__wbindgen_is_undefined=function(e){return m(e)===void 0},r.wbg.__wbindgen_in=function(e,n){return m(e)in m(n)},r.wbg.__wbg_jsstreetnetwork_new=function(e){const n=ge.__wrap(e);return A(n)},r.wbg.__wbindgen_string_new=function(e,n){const t=M(e,n);return A(t)},r.wbg.__wbindgen_error_new=function(e,n){const t=new Error(M(e,n));return A(t)},r.wbg.__wbindgen_jsval_loose_eq=function(e,n){return m(e)==m(n)},r.wbg.__wbindgen_number_get=function(e,n){const t=m(n),o=typeof t=="number"?t:void 0;dt()[e/8+1]=Ce(o)?0:o,w()[e/4+0]=!Ce(o)},r.wbg.__wbindgen_string_get=function(e,n){const t=m(n),o=typeof t=="string"?t:void 0;var s=Ce(o)?0:re(o,u.__wbindgen_malloc,u.__wbindgen_realloc),a=x;w()[e/4+1]=a,w()[e/4+0]=s},r.wbg.__wbindgen_object_clone_ref=function(e){const n=m(e);return A(n)},r.wbg.__wbg_getwithrefkey_5e6d9547403deab8=function(e,n){const t=m(e)[m(n)];return A(t)},r.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return A(e)},r.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const t=m(n).stack,o=re(t,u.__wbindgen_malloc,u.__wbindgen_realloc),s=x;w()[e/4+1]=s,w()[e/4+0]=o},r.wbg.__wbg_error_f851667af71bcfc6=function(e,n){try{console.error(M(e,n))}finally{u.__wbindgen_free(e,n)}},r.wbg.__wbg_now_c644db5194be8437=function(e){return m(e).now()},r.wbg.__wbg_debug_8db2eed1bf6c1e2a=function(e){console.debug(m(e))},r.wbg.__wbg_error_fe807da27c4a4ced=function(e){console.error(m(e))},r.wbg.__wbg_info_9e6db45ac337c3b5=function(e){console.info(m(e))},r.wbg.__wbg_log_7bb108d119bafbc1=function(e){console.log(m(e))},r.wbg.__wbg_warn_e57696dbb3977030=function(e){console.warn(m(e))},r.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(e,n){const t=new Function(M(e,n));return A(t)},r.wbg.__wbg_get_baf4855f9a986186=function(){return te(function(e,n){const t=Reflect.get(m(e),m(n));return A(t)},arguments)},r.wbg.__wbg_call_95d1ea488d03e4e8=function(){return te(function(e,n){const t=m(e).call(m(n));return A(t)},arguments)},r.wbg.__wbg_self_e7c1f827057f6584=function(){return te(function(){const e=self.self;return A(e)},arguments)},r.wbg.__wbg_window_a09ec664e14b1b81=function(){return te(function(){const e=window.window;return A(e)},arguments)},r.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return te(function(){const e=globalThis.globalThis;return A(e)},arguments)},r.wbg.__wbg_global_c85a9259e621f3db=function(){return te(function(){const e=global.global;return A(e)},arguments)},r.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(e){let n;try{n=m(e)instanceof ArrayBuffer}catch{n=!1}return n},r.wbg.__wbg_buffer_cf65c07de34b9a08=function(e){const n=m(e).buffer;return A(n)},r.wbg.__wbg_new_537b7341ce90bb31=function(e){const n=new Uint8Array(m(e));return A(n)},r.wbg.__wbg_set_17499e8aa4003ebd=function(e,n,t){m(e).set(m(n),t>>>0)},r.wbg.__wbg_length_27a2afe8ab42b09f=function(e){return m(e).length},r.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(e){let n;try{n=m(e)instanceof Uint8Array}catch{n=!1}return n},r.wbg.__wbindgen_debug_string=function(e,n){const t=Fe(m(n)),o=re(t,u.__wbindgen_malloc,u.__wbindgen_realloc),s=x;w()[e/4+1]=s,w()[e/4+0]=o},r.wbg.__wbindgen_throw=function(e,n){throw new Error(M(e,n))},r.wbg.__wbindgen_memory=function(){const e=u.memory;return A(e)},r}function ht(r,e){return u=r.exports,mt.__wbindgen_wasm_module=e,ue=null,fe=null,ce=null,_e=null,u}async function mt(r){typeof r>"u"&&(r="/osm2svelte/assets/osm2streets_js_bg.wasm");const e=yt();(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=fetch(r));const{instance:n,module:t}=await wt(await r,e);return ht(n,t)}function kt(r){let e,n,t,o,s,a,_,i,l;return{c(){e=h("div"),n=W(`App:
  `),t=h("select"),o=h("option"),o.textContent="Street Explorer",s=h("option"),s.textContent="Lane editor",a=h("option"),a.textContent="Route profile tool",_=h("option"),_.textContent="Road width tool",o.__value="index.html",ne(o,o.__value),s.__value="lane_editor.html",ne(s,s.__value),a.__value="route_profile.html",ne(a,a.__value),_.__value="thicken_roads.html",ne(_,_.__value),r[0]===void 0&&nt(()=>r[2].call(t))},m(f,c){G(f,e,c),g(e,n),g(e,t),g(t,o),g(t,s),g(t,a),g(t,_),Ie(t,r[0],!0),i||(l=[I(t,"change",r[2]),I(t,"change",r[1])],i=!0)},p(f,[c]){c&1&&Ie(t,f[0])},i:Q,o:Q,d(f){f&&O(e),i=!1,Ae(l)}}}function vt(r,e,n){let t=window.location.pathname.split("/").pop()||"index.html",o=t;function s(){o!=t&&(window.location.href=o)}function a(){o=rt(this),n(0,o)}return[o,s,a]}class en extends z{constructor(e){super(),q(this,e,vt,kt,V,{})}}const be=ee(null),ie=ee(null),Qe=ee(null),Le=ee(null),$e=ee(null),Me=ee(null),Ge=ee(null);ie.subscribe(r=>{Le.set(null),$e.set(null),Me.set(null),Ge.set(null)});function Te(r){let e;const n=r[3].default,t=ot(n,r,r[2],null);return{c(){t&&t.c()},m(o,s){t&&t.m(o,s),e=!0},p(o,s){t&&t.p&&(!e||s&4)&&st(t,n,o,o[2],e?lt(n,o[2],s,null):it(o[2]),null)},i(o){e||(y(t,o),e=!0)},o(o){k(t,o),e=!1},d(o){t&&t.d(o)}}}function jt(r){let e,n,t=r[1]&&Te(r);return{c(){e=h("div"),t&&t.c(),$(e,"class","map svelte-12dpf1u")},m(o,s){G(o,e,s),t&&t.m(e,null),r[4](e),n=!0},p(o,[s]){o[1]?t?(t.p(o,s),s&2&&y(t,1)):(t=Te(o),t.c(),y(t,1),t.m(e,null)):t&&(oe(),k(t,1,1,()=>{t=null}),se())},i(o){n||(y(t),n=!0)},o(o){k(t),n=!1},d(o){o&&O(e),t&&t.d(),r[4](null)}}}function St(r,e,n){let{$$slots:t={},$$scope:o}=e,s,a,_=!1;Xe(()=>{s=new Se.Map({container:a,style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo",hash:!0}),s.addControl(new Se.ScaleControl({})),s.addControl(new Se.NavigationControl({}),"bottom-right"),s.on("load",()=>{n(1,_=!0),be.set(s)}),new ResizeObserver(()=>{s.resize()}).observe(a)}),Ze(()=>{s.remove()});function i(l){U[l?"unshift":"push"](()=>{a=l,n(0,a)})}return r.$$set=l=>{"$$scope"in l&&n(2,o=l.$$scope)},[a,_,o,t,i]}class tn extends z{constructor(e){super(),q(this,e,St,jt,V,{})}}function Ye(r,e,n){if(r!==null)for(var t,o,s,a,_,i,l,f=0,c=0,d,v=r.type,S=v==="FeatureCollection",C=v==="Feature",N=S?r.features.length:1,b=0;b<N;b++){l=S?r.features[b].geometry:C?r.geometry:r,d=l?l.type==="GeometryCollection":!1,_=d?l.geometries.length:1;for(var L=0;L<_;L++){var p=0,j=0;if(a=d?l.geometries[L]:l,a!==null){i=a.coordinates;var D=a.type;switch(f=n&&(D==="Polygon"||D==="MultiPolygon")?1:0,D){case null:break;case"Point":if(e(i,c,b,p,j)===!1)return!1;c++,p++;break;case"LineString":case"MultiPoint":for(t=0;t<i.length;t++){if(e(i[t],c,b,p,j)===!1)return!1;c++,D==="MultiPoint"&&p++}D==="LineString"&&p++;break;case"Polygon":case"MultiLineString":for(t=0;t<i.length;t++){for(o=0;o<i[t].length-f;o++){if(e(i[t][o],c,b,p,j)===!1)return!1;c++}D==="MultiLineString"&&p++,D==="Polygon"&&j++}D==="Polygon"&&p++;break;case"MultiPolygon":for(t=0;t<i.length;t++){for(j=0,o=0;o<i[t].length;o++){for(s=0;s<i[t][o].length-f;s++){if(e(i[t][o][s],c,b,p,j)===!1)return!1;c++}j++}p++}break;case"GeometryCollection":for(t=0;t<a.geometries.length;t++)if(Ye(a.geometries[t],e,n)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Oe(r){var e=[1/0,1/0,-1/0,-1/0];return Ye(r,function(n){e[0]>n[0]&&(e[0]=n[0]),e[1]>n[1]&&(e[1]=n[1]),e[2]<n[0]&&(e[2]=n[0]),e[3]<n[1]&&(e[3]=n[1])}),e}Oe.default=Oe;function ke(r,e,n){let t=["case"];for(let[o,s]of Object.entries(e))t.push(["==",["get",r],o]),t.push(s);return t.push(n),t}function xe(r,e,n){return["case",["boolean",["feature-state",r],!1],n,e]}function nn(){return{type:"FeatureCollection",features:[]}}function et(r){return Oe(r)}function Ct(r){let e=at(be),n,t=!1;for(let o=Je.length-1;o>=0;o--){let s=Je[o];if(s==r){t=!0;break}e.getLayer(s)&&(n=s)}if(!t)throw new Error(`Layer ID ${r} not defined in layerZorder`);return n}const Je=["boundary-layer","lane-polygons-layer","intersection-polygons-layer","lane-markings-layer","intersection-markings-layer","movements-layer","connected-roads-layer","road-weights-layer","current-way-layer","building-hitboxes-layer","road_label"];function tt(r,e){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8, "+encodeURIComponent(e)),n.setAttribute("download",r),document.body.appendChild(n),n.click(),document.body.removeChild(n)}function Ft(r){let e,n,t,o,s,a,_,i,l,f,c,d,v,S,C,N,b,L,p,j,D,le,T,Pe,Re,ae,J,Ne,ve,je,De;return ve=_t(r[6][0]),{c(){e=h("details"),n=h("summary"),n.textContent="Processing Options",t=F(),o=h("label"),s=h("input"),a=W(`
    Debug each transformation step`),_=F(),i=h("label"),l=h("input"),f=W(`
    Enable dual carriageway experiment`),c=F(),d=h("label"),v=h("input"),S=W(`
    Enable sidepath zipping experiment`),C=F(),N=h("label"),b=h("input"),L=W(`
    Enable osm2lanes experiment`),p=F(),j=h("div"),D=W(`Sidewalks:
    `),le=h("label"),T=h("input"),Pe=W(`
      use mapped footways`),Re=F(),ae=h("label"),J=h("input"),Ne=W(`
      infer on roads`),$(n,"class","svelte-fio7ln"),$(s,"type","checkbox"),$(o,"class","svelte-fio7ln"),$(l,"type","checkbox"),$(i,"class","svelte-fio7ln"),$(v,"type","checkbox"),$(d,"class","svelte-fio7ln"),$(b,"type","checkbox"),$(N,"class","svelte-fio7ln"),$(T,"type","radio"),T.__value=!1,ne(T,T.__value),$(le,"class","svelte-fio7ln"),$(J,"type","radio"),J.__value=!0,ne(J,J.__value),$(ae,"class","svelte-fio7ln"),$(j,"class","svelte-fio7ln"),$(e,"class","svelte-fio7ln"),ve.p(T,J)},m(X,Y){G(X,e,Y),g(e,n),g(e,t),g(e,o),g(o,s),s.checked=r[0].debug_each_step,g(o,a),g(e,_),g(e,i),g(i,l),l.checked=r[0].dual_carriageway_experiment,g(i,f),g(e,c),g(e,d),g(d,v),v.checked=r[0].sidepath_zipping_experiment,g(d,S),g(e,C),g(e,N),g(N,b),b.checked=r[0].osm2lanes,g(N,L),g(e,p),g(e,j),g(j,D),g(j,le),g(le,T),T.checked=T.__value===r[0].inferred_sidewalks,g(le,Pe),g(j,Re),g(j,ae),g(ae,J),J.checked=J.__value===r[0].inferred_sidewalks,g(ae,Ne),je||(De=[I(s,"change",r[1]),I(l,"change",r[2]),I(v,"change",r[3]),I(b,"change",r[4]),I(T,"change",r[5]),I(J,"change",r[7])],je=!0)},p(X,[Y]){Y&1&&(s.checked=X[0].debug_each_step),Y&1&&(l.checked=X[0].dual_carriageway_experiment),Y&1&&(v.checked=X[0].sidepath_zipping_experiment),Y&1&&(b.checked=X[0].osm2lanes),Y&1&&(T.checked=T.__value===X[0].inferred_sidewalks),Y&1&&(J.checked=J.__value===X[0].inferred_sidewalks)},i:Q,o:Q,d(X){X&&O(e),ve.r(),je=!1,Ae(De)}}}function Lt(r,e,n){let{settings:t={debug_each_step:!1,dual_carriageway_experiment:!1,sidepath_zipping_experiment:!1,inferred_sidewalks:!1,osm2lanes:!1}}=e;const o=[[]];function s(){t.debug_each_step=this.checked,n(0,t)}function a(){t.dual_carriageway_experiment=this.checked,n(0,t)}function _(){t.sidepath_zipping_experiment=this.checked,n(0,t)}function i(){t.osm2lanes=this.checked,n(0,t)}function l(){t.inferred_sidewalks=this.__value,n(0,t)}function f(){t.inferred_sidewalks=this.__value,n(0,t)}return r.$$set=c=>{"settings"in c&&n(0,t=c.settings)},[t,s,a,_,i,l,o,f]}class $t extends z{constructor(e){super(),q(this,e,Lt,Ft,V,{settings:0})}}function Mt(r){let e,n,t,o,s,a,_,i;return{c(){e=h("div"),n=h("button"),n.textContent="Update OSM data",t=F(),o=h("button"),o.textContent="Download osm.xml",s=F(),a=h("button"),a.textContent="Reset view",$(n,"type","button"),$(o,"type","button"),$(a,"type","button")},m(l,f){G(l,e,f),g(e,n),g(e,t),g(e,o),g(e,s),g(e,a),_||(i=[I(n,"click",r[5]),I(o,"click",r[4]),I(a,"click",r[6])],_=!0)},p:Q,d(l){l&&O(e),_=!1,Ae(i)}}}function Gt(r){let e,n,t=r[0].msg+"",o;return{c(){e=h("p"),n=W("Error: "),o=W(t)},m(s,a){G(s,e,a),g(e,n),g(e,o)},p(s,a){a&1&&t!==(t=s[0].msg+"")&&He(o,t)},d(s){s&&O(e)}}}function Ot(r){let e;return{c(){e=h("p"),e.textContent="Use the polygon tool to select an area to import"},m(n,t){G(n,e,t)},p:Q,d(n){n&&O(e)}}}function At(r){let e,n,t,o,s,a,_,i,l,f,c={map:r[3]};e=new ut({props:c}),r[10](e),e.$on("load",r[7]),e.$on("resetToNone",r[8]),e.$on("error",r[9]),s=new ft({}),s.$on("load",r[7]),s.$on("resetToNone",r[8]),s.$on("error",r[9]);function d(b,L){if(b[0].kind==="nothing")return Ot;if(b[0].kind==="error")return Gt;if(b[0].kind==="done")return Mt}let v=d(r),S=v&&v(r);function C(b){r[11](b)}let N={};return r[1]!==void 0&&(N.settings=r[1]),i=new $t({props:N}),U.push(()=>Z(i,"settings",C)),{c(){E(e.$$.fragment),n=F(),t=h("fieldset"),o=h("legend"),E(s.$$.fragment),a=F(),S&&S.c(),_=F(),E(i.$$.fragment)},m(b,L){P(e,b,L),G(b,n,L),G(b,t,L),g(t,o),P(s,o,null),g(t,a),S&&S.m(t,null),G(b,_,L),P(i,b,L),f=!0},p(b,[L]){const p={};L&8&&(p.map=b[3]),e.$set(p),v===(v=d(b))&&S?S.p(b,L):(S&&S.d(1),S=v&&v(b),S&&(S.c(),S.m(t,null)));const j={};!l&&L&2&&(l=!0,j.settings=b[1],H(()=>l=!1)),i.$set(j)},i(b){f||(y(e.$$.fragment,b),y(s.$$.fragment,b),y(i.$$.fragment,b),f=!0)},o(b){k(e.$$.fragment,b),k(s.$$.fragment,b),k(i.$$.fragment,b),f=!1},d(b){b&&(O(n),O(t),O(_)),r[10](null),R(e,b),R(s),S&&S.d(),R(i,b)}}}function Et(r,e,n){let t;B(r,be,C=>n(3,t=C));let o={kind:"nothing"},s,a;function _(){o.kind==="done"&&tt("osm.xml",o.osmInput)}async function i(){o.kind==="done"&&a.importPolygon(o.boundaryGJ)}function l(){o.kind==="done"&&t.fitBounds(et(o.boundaryGJ),{animate:!1,padding:10})}function f(C){try{let N=new ge(C.detail.osmXML,JSON.stringify(C.detail.boundaryGj),s);n(0,o={kind:"done",boundaryGJ:C.detail.boundaryGj,osmInput:C.detail.osmXML,network:N}),ie.set(o.network),Qe.set(o.boundaryGJ)}catch(N){n(0,o={kind:"error",msg:N.toString()})}}function c(C){n(0,o={kind:"nothing"})}function d(C){n(0,o={kind:"error",msg:C.detail})}function v(C){U[C?"unshift":"push"](()=>{a=C,n(2,a)})}function S(C){s=C,n(1,s)}return[o,s,a,t,_,i,l,f,c,d,v,S]}class rn extends z{constructor(e){super(),q(this,e,Et,At,V,{})}}function Pt(r,e,n){let t;B(r,be,p=>n(7,t=p));let{source:o}=e,{show:s=!0}=e,{gj:a}=e,{layerStyle:_}=e,{interactive:i=!1}=e,{hoveredFeature:l=null}=e,{clickedFeature:f=null}=e,c,d,v=`${o}-layer`;Xe(()=>{S(),t.addSource(o,{type:"geojson",data:a}),t.addLayer({id:v,source:o,..._},Ct(v)),s||t.setLayoutProperty(v,"visibility","none"),i&&(t.on("mousemove",v,C),t.on("mouseleave",v,N),t.on("click",b))}),Ze(()=>{i&&(t.off("mousemove",C),t.off("mouseleave",N),t.off("click",b),L()),t.getLayer(v)&&t.removeLayer(v),t.removeSource(o)});function S(){if("features"in a)for(let[p,j]of a.features.entries())j.id=p+1}function C(p){p.features.length>0&&c!=p.features[0].id&&(L(),c=p.features[0].id,t.setFeatureState({source:o,id:c},{hover:!0}),"features"in a&&n(0,l=a.features.find(j=>j.id==c)))}function N(){L(),n(0,l=null),c=void 0}function b(p){f!==null&&t.setFeatureState({source:o,id:d},{clicked:!1});let j=t.queryRenderedFeatures(p.point,{layers:[v]});j.length==1?(d=j[0].id,t.setFeatureState({source:o,id:d},{clicked:!0}),"features"in a&&n(1,f=a.features.find(D=>D.id==d))):(n(1,f=null),d=void 0)}function L(){c!==void 0&&t.setFeatureState({source:o,id:c},{hover:!1})}return r.$$set=p=>{"source"in p&&n(2,o=p.source),"show"in p&&n(3,s=p.show),"gj"in p&&n(4,a=p.gj),"layerStyle"in p&&n(5,_=p.layerStyle),"interactive"in p&&n(6,i=p.interactive),"hoveredFeature"in p&&n(0,l=p.hoveredFeature),"clickedFeature"in p&&n(1,f=p.clickedFeature)},r.$$.update=()=>{if(r.$$.dirty&148){let p=t.getSource(o);p&&(console.log(`GeoJSON data for ${o} changed, updating`),p.setData(a))}r.$$.dirty&136&&t.getLayer(v)&&t.setLayoutProperty(v,"visibility",s?"visible":"none")},[l,f,o,s,a,_,i,t]}class pe extends z{constructor(e){super(),q(this,e,Pt,null,V,{source:2,show:3,gj:4,layerStyle:5,interactive:6,hoveredFeature:0,clickedFeature:1})}}function We(r){let e,n,t,o,s;return{c(){e=h("button"),n=W("Download"),$(e,"type","button"),e.disabled=t=!r[1]},m(a,_){G(a,e,_),g(e,n),o||(s=I(e,"click",r[4]),o=!0)},p(a,_){_&2&&t!==(t=!a[1])&&(e.disabled=t)},d(a){a&&O(e),o=!1,s()}}}function Rt(r){let e,n,t,o,s,a,_,i,l=r[3]&&We(r);return{c(){e=h("div"),n=h("label"),t=h("input"),o=F(),s=W(r[2]),a=F(),l&&l.c(),$(t,"type","checkbox")},m(f,c){G(f,e,c),g(e,n),g(n,t),t.checked=r[0],g(n,o),g(n,s),g(e,a),l&&l.m(e,null),_||(i=I(t,"change",r[5]),_=!0)},p(f,[c]){c&1&&(t.checked=f[0]),c&4&&He(s,f[2]),f[3]?l?l.p(f,c):(l=We(f),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:Q,o:Q,d(f){f&&O(e),l&&l.d(),_=!1,i()}}}function Nt(r,e,n){let{gj:t}=e,{name:o}=e,{show:s}=e,{downloadable:a=!0}=e;function _(){tt(`${o}.geojson`,JSON.stringify(t))}function i(){s=this.checked,n(0,s)}return r.$$set=l=>{"gj"in l&&n(1,t=l.gj),"name"in l&&n(2,o=l.name),"show"in l&&n(0,s=l.show),"downloadable"in l&&n(3,a=l.downloadable)},[s,t,o,a,_,i]}class we extends z{constructor(e){super(),q(this,e,Nt,Rt,V,{gj:1,name:2,show:0,downloadable:3})}}function Be(r){let e,n;return e=new pe({props:{source:"boundary",gj:r[0],layerStyle:r[2],show:r[1]}}),{c(){E(e.$$.fragment)},m(t,o){P(e,t,o),n=!0},p(t,o){const s={};o&1&&(s.gj=t[0]),o&2&&(s.show=t[1]),e.$set(s)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Dt(r){let e,n,t,o,s=r[0]&&Be(r);function a(i){r[5](i)}let _={gj:r[0],name:"Boundary"};return r[1]!==void 0&&(_.show=r[1]),n=new we({props:_}),U.push(()=>Z(n,"show",a)),{c(){s&&s.c(),e=F(),E(n.$$.fragment)},m(i,l){s&&s.m(i,l),G(i,e,l),P(n,i,l),o=!0},p(i,[l]){i[0]?s?(s.p(i,l),l&1&&y(s,1)):(s=Be(i),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(oe(),k(s,1,1,()=>{s=null}),se());const f={};l&1&&(f.gj=i[0]),!t&&l&2&&(t=!0,f.show=i[1],H(()=>t=!1)),n.$set(f)},i(i){o||(y(s),y(n.$$.fragment,i),o=!0)},o(i){k(s),k(n.$$.fragment,i),o=!1},d(i){i&&O(e),s&&s.d(i),R(n,i)}}}function It(r,e,n){let t,o;B(r,be,l=>n(3,t=l)),B(r,Qe,l=>n(4,o=l));let s,a=!0,_={type:"line",paint:{"line-color":"blue","line-width":4}};function i(l){a=l,n(1,a)}return r.$$.update=()=>{r.$$.dirty&25&&o&&(n(0,s=structuredClone(o)),t.fitBounds(et(s),{animate:!1,padding:10}))},[s,a,_,t,o,i]}class Tt extends z{constructor(e){super(),q(this,e,It,Dt,V,{})}}function Ue(r){let e,n;return e=new pe({props:{source:"intersection-markings",gj:r[0],layerStyle:r[2],show:r[1]}}),{c(){E(e.$$.fragment)},m(t,o){P(e,t,o),n=!0},p(t,o){const s={};o&1&&(s.gj=t[0]),o&2&&(s.show=t[1]),e.$set(s)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Jt(r){let e,n,t,o,s=r[0]&&Ue(r);function a(i){r[4](i)}let _={gj:r[0],name:"Intersection markings"};return r[1]!==void 0&&(_.show=r[1]),n=new we({props:_}),U.push(()=>Z(n,"show",a)),{c(){s&&s.c(),e=F(),E(n.$$.fragment)},m(i,l){s&&s.m(i,l),G(i,e,l),P(n,i,l),o=!0},p(i,[l]){i[0]?s?(s.p(i,l),l&1&&y(s,1)):(s=Ue(i),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(oe(),k(s,1,1,()=>{s=null}),se());const f={};l&1&&(f.gj=i[0]),!t&&l&2&&(t=!0,f.show=i[1],H(()=>t=!1)),n.$set(f)},i(i){o||(y(s),y(n.$$.fragment,i),o=!0)},o(i){k(s),k(n.$$.fragment,i),o=!1},d(i){i&&O(e),s&&s.d(i),R(n,i)}}}function Wt(r,e,n){let t;B(r,ie,i=>n(3,t=i));let o,s=!0,a={type:"fill",paint:{"fill-color":ke("type",{"sidewalk corner":"#CCCCCC"},"red"),"fill-opacity":.9}};function _(i){s=i,n(1,s)}return r.$$.update=()=>{r.$$.dirty&8&&t&&n(0,o=JSON.parse(t.toIntersectionMarkingsGeojson()))},[o,s,a,t,_]}class Bt extends z{constructor(e){super(),q(this,e,Wt,Jt,V,{})}}function ze(r){let e,n,t,o;function s(i){r[6](i)}function a(i){r[7](i)}let _={source:"intersection-polygons",gj:r[0],layerStyle:r[4],interactive:!0,show:r[1]};return r[2]!==void 0&&(_.hoveredFeature=r[2]),r[3]!==void 0&&(_.clickedFeature=r[3]),e=new pe({props:_}),U.push(()=>Z(e,"hoveredFeature",s)),U.push(()=>Z(e,"clickedFeature",a)),{c(){E(e.$$.fragment)},m(i,l){P(e,i,l),o=!0},p(i,l){const f={};l&1&&(f.gj=i[0]),l&2&&(f.show=i[1]),!n&&l&4&&(n=!0,f.hoveredFeature=i[2],H(()=>n=!1)),!t&&l&8&&(t=!0,f.clickedFeature=i[3],H(()=>t=!1)),e.$set(f)},i(i){o||(y(e.$$.fragment,i),o=!0)},o(i){k(e.$$.fragment,i),o=!1},d(i){R(e,i)}}}function Ut(r){let e,n,t,o,s=r[0]&&ze(r);function a(i){r[8](i)}let _={gj:r[0],name:"Intersection polygons"};return r[1]!==void 0&&(_.show=r[1]),n=new we({props:_}),U.push(()=>Z(n,"show",a)),{c(){s&&s.c(),e=F(),E(n.$$.fragment)},m(i,l){s&&s.m(i,l),G(i,e,l),P(n,i,l),o=!0},p(i,[l]){i[0]?s?(s.p(i,l),l&1&&y(s,1)):(s=ze(i),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(oe(),k(s,1,1,()=>{s=null}),se());const f={};l&1&&(f.gj=i[0]),!t&&l&2&&(t=!0,f.show=i[1],H(()=>t=!1)),n.$set(f)},i(i){o||(y(s),y(n.$$.fragment,i),o=!0)},o(i){k(s),k(n.$$.fragment,i),o=!1},d(i){i&&O(e),s&&s.d(i),R(n,i)}}}function zt(r,e,n){let t,o,s;B(r,ie,d=>n(5,t=d)),B(r,Me,d=>n(2,o=d)),B(r,Ge,d=>n(3,s=d));let a,_=!0,i={type:"fill",filter:["==",["get","type"],"intersection"],paint:{"fill-color":ke("intersection_kind",{Connection:"#666",Intersection:"#966",Terminus:"#999",MapEdge:"#696"},"#666"),"fill-opacity":xe("hover",.9,.4)}};function l(d){o=d,Me.set(o)}function f(d){s=d,Ge.set(s)}function c(d){_=d,n(1,_)}return r.$$.update=()=>{r.$$.dirty&32&&t&&n(0,a=JSON.parse(t.toGeojsonPlain()))},[a,_,o,s,i,t,l,f,c]}class qt extends z{constructor(e){super(),q(this,e,zt,Ut,V,{})}}function qe(r){let e,n;return e=new pe({props:{source:"lane-markings",gj:r[0],layerStyle:r[2],show:r[1]}}),{c(){E(e.$$.fragment)},m(t,o){P(e,t,o),n=!0},p(t,o){const s={};o&1&&(s.gj=t[0]),o&2&&(s.show=t[1]),e.$set(s)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Vt(r){let e,n,t,o,s=r[0]&&qe(r);function a(i){r[4](i)}let _={gj:r[0],name:"Lane markings "};return r[1]!==void 0&&(_.show=r[1]),n=new we({props:_}),U.push(()=>Z(n,"show",a)),{c(){s&&s.c(),e=F(),E(n.$$.fragment)},m(i,l){s&&s.m(i,l),G(i,e,l),P(n,i,l),o=!0},p(i,[l]){i[0]?s?(s.p(i,l),l&1&&y(s,1)):(s=qe(i),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(oe(),k(s,1,1,()=>{s=null}),se());const f={};l&1&&(f.gj=i[0]),!t&&l&2&&(t=!0,f.show=i[1],H(()=>t=!1)),n.$set(f)},i(i){o||(y(s),y(n.$$.fragment,i),o=!0)},o(i){k(s),k(n.$$.fragment,i),o=!1},d(i){i&&O(e),s&&s.d(i),R(n,i)}}}function Xt(r,e,n){let t;B(r,ie,i=>n(3,t=i));let o,s=!0,a={type:"fill",paint:{"fill-color":ke("type",{"center line":"yellow","lane separator":"white","lane arrow":"white","buffer edge":"white","buffer stripe":"white","vehicle stop line":"white","bike stop line":"green"},"red"),"fill-opacity":.9}};function _(i){s=i,n(1,s)}return r.$$.update=()=>{r.$$.dirty&8&&t&&n(0,o=JSON.parse(t.toLaneMarkingsGeojson()))},[o,s,a,t,_]}class Zt extends z{constructor(e){super(),q(this,e,Xt,Vt,V,{})}}function Ve(r){let e,n,t,o;function s(i){r[6](i)}function a(i){r[7](i)}let _={source:"lane-polygons",gj:r[0],layerStyle:r[4],interactive:!0,show:r[1]};return r[2]!==void 0&&(_.clickedFeature=r[2]),r[3]!==void 0&&(_.hoveredFeature=r[3]),e=new pe({props:_}),U.push(()=>Z(e,"clickedFeature",s)),U.push(()=>Z(e,"hoveredFeature",a)),{c(){E(e.$$.fragment)},m(i,l){P(e,i,l),o=!0},p(i,l){const f={};l&1&&(f.gj=i[0]),l&2&&(f.show=i[1]),!n&&l&4&&(n=!0,f.clickedFeature=i[2],H(()=>n=!1)),!t&&l&8&&(t=!0,f.hoveredFeature=i[3],H(()=>t=!1)),e.$set(f)},i(i){o||(y(e.$$.fragment,i),o=!0)},o(i){k(e.$$.fragment,i),o=!1},d(i){R(e,i)}}}function Ht(r){let e,n,t,o,s=r[0]&&Ve(r);function a(i){r[8](i)}let _={gj:r[0],name:"Lane polygons"};return r[1]!==void 0&&(_.show=r[1]),n=new we({props:_}),U.push(()=>Z(n,"show",a)),{c(){s&&s.c(),e=F(),E(n.$$.fragment)},m(i,l){s&&s.m(i,l),G(i,e,l),P(n,i,l),o=!0},p(i,[l]){i[0]?s?(s.p(i,l),l&1&&y(s,1)):(s=Ve(i),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(oe(),k(s,1,1,()=>{s=null}),se());const f={};l&1&&(f.gj=i[0]),!t&&l&2&&(t=!0,f.show=i[1],H(()=>t=!1)),n.$set(f)},i(i){o||(y(s),y(n.$$.fragment,i),o=!0)},o(i){k(s),k(n.$$.fragment,i),o=!1},d(i){i&&O(e),s&&s.d(i),R(n,i)}}}function Kt(r,e,n){let t,o,s;B(r,ie,d=>n(5,t=d)),B(r,Le,d=>n(2,o=d)),B(r,$e,d=>n(3,s=d));let a,_=!0,i={type:"fill",paint:{"fill-color":ke("type",{Driving:"black",Parking:"#333333",Sidewalk:"#CCCCCC",Shoulder:"#CCCCCC",Biking:"#0F7D4B",Bus:"#BE4A4C",SharedLeftTurn:"black",Construction:"#FF6D00",LightRail:"#844204",Footway:"#DDDDE8",SharedUse:"#E5E1BB","Buffer(Planters)":"#555555"},"red"),"fill-opacity":xe("hover",.9,.4)}};function l(d){o=d,Le.set(o)}function f(d){s=d,$e.set(s)}function c(d){_=d,n(1,_)}return r.$$.update=()=>{r.$$.dirty&32&&t&&n(0,a=JSON.parse(t.toLanePolygonsGeojson()))},[a,_,o,s,i,t,l,f,c]}class Qt extends z{constructor(e){super(),q(this,e,Kt,Ht,V,{})}}function Yt(r){let e,n,t,o,s,a,_,i,l,f;return e=new Tt({}),t=new qt({}),s=new Bt({}),_=new Qt({}),l=new Zt({}),{c(){E(e.$$.fragment),n=F(),E(t.$$.fragment),o=F(),E(s.$$.fragment),a=F(),E(_.$$.fragment),i=F(),E(l.$$.fragment)},m(c,d){P(e,c,d),G(c,n,d),P(t,c,d),G(c,o,d),P(s,c,d),G(c,a,d),P(_,c,d),G(c,i,d),P(l,c,d),f=!0},p:Q,i(c){f||(y(e.$$.fragment,c),y(t.$$.fragment,c),y(s.$$.fragment,c),y(_.$$.fragment,c),y(l.$$.fragment,c),f=!0)},o(c){k(e.$$.fragment,c),k(t.$$.fragment,c),k(s.$$.fragment,c),k(_.$$.fragment,c),k(l.$$.fragment,c),f=!1},d(c){c&&(O(n),O(o),O(a),O(i)),R(e,c),R(t,c),R(s,c),R(_,c),R(l,c)}}}class on extends z{constructor(e){super(),q(this,e,null,Yt,V,{})}}export{en as A,rn as I,we as L,tn as M,pe as a,$e as b,Ge as c,Le as d,on as e,tt as f,nn as g,Me as h,mt as i,xe as j,be as m,ie as n};

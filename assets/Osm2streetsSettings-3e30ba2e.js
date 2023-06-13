import{S as K,i as L,s as M,Z as N,f as l,m as b,t as g,y as a,a as Q,g as e,E as v,n as J,d as R,G as T}from"./SelectImportArea-6fc1d495.js";function U(s){let t,i,n,h,r,O,x,o,u,C,w,y,m,G,P,z,k,Z,j,f,A,S,_,B,F,E,c,H,q,D,I;return q=N(s[6][0]),{c(){t=l("details"),i=l("summary"),i.textContent="Processing Options",n=b(),h=l("label"),r=l("input"),O=g(`
    Debug each transformation step`),x=b(),o=l("label"),u=l("input"),C=g(`
    Enable dual carriageway experiment`),w=b(),y=l("label"),m=l("input"),G=g(`
    Enable sidepath zipping experiment`),P=b(),z=l("label"),k=l("input"),Z=g(`
    Enable osm2lanes experiment`),j=b(),f=l("div"),A=g(`Sidewalks:
    `),S=l("label"),_=l("input"),B=g(`
      use mapped footways`),F=b(),E=l("label"),c=l("input"),H=g(`
      infer on roads`),a(i,"class","svelte-fio7ln"),a(r,"type","checkbox"),a(h,"class","svelte-fio7ln"),a(u,"type","checkbox"),a(o,"class","svelte-fio7ln"),a(m,"type","checkbox"),a(y,"class","svelte-fio7ln"),a(k,"type","checkbox"),a(z,"class","svelte-fio7ln"),a(_,"type","radio"),_.__value=!1,_.value=_.__value,a(S,"class","svelte-fio7ln"),a(c,"type","radio"),c.__value=!0,c.value=c.__value,a(E,"class","svelte-fio7ln"),a(f,"class","svelte-fio7ln"),a(t,"class","svelte-fio7ln"),q.p(_,c)},m(p,d){Q(p,t,d),e(t,i),e(t,n),e(t,h),e(h,r),r.checked=s[0].debug_each_step,e(h,O),e(t,x),e(t,o),e(o,u),u.checked=s[0].dual_carriageway_experiment,e(o,C),e(t,w),e(t,y),e(y,m),m.checked=s[0].sidepath_zipping_experiment,e(y,G),e(t,P),e(t,z),e(z,k),k.checked=s[0].osm2lanes,e(z,Z),e(t,j),e(t,f),e(f,A),e(f,S),e(S,_),_.checked=_.__value===s[0].inferred_sidewalks,e(S,B),e(f,F),e(f,E),e(E,c),c.checked=c.__value===s[0].inferred_sidewalks,e(E,H),D||(I=[v(r,"change",s[1]),v(u,"change",s[2]),v(m,"change",s[3]),v(k,"change",s[4]),v(_,"change",s[5]),v(c,"change",s[7])],D=!0)},p(p,[d]){d&1&&(r.checked=p[0].debug_each_step),d&1&&(u.checked=p[0].dual_carriageway_experiment),d&1&&(m.checked=p[0].sidepath_zipping_experiment),d&1&&(k.checked=p[0].osm2lanes),d&1&&(_.checked=_.__value===p[0].inferred_sidewalks),d&1&&(c.checked=c.__value===p[0].inferred_sidewalks)},i:J,o:J,d(p){p&&R(t),q.r(),D=!1,T(I)}}}function V(s,t,i){let{settings:n={debug_each_step:!1,dual_carriageway_experiment:!1,sidepath_zipping_experiment:!1,inferred_sidewalks:!1,osm2lanes:!1}}=t;const h=[[]];function r(){n.debug_each_step=this.checked,i(0,n)}function O(){n.dual_carriageway_experiment=this.checked,i(0,n)}function x(){n.sidepath_zipping_experiment=this.checked,i(0,n)}function o(){n.osm2lanes=this.checked,i(0,n)}function u(){n.inferred_sidewalks=this.__value,i(0,n)}function C(){n.inferred_sidewalks=this.__value,i(0,n)}return s.$$set=w=>{"settings"in w&&i(0,n=w.settings)},[n,r,O,x,o,u,h,C]}class X extends K{constructor(t){super(),L(this,t,V,U,M,{settings:0})}}export{X as O};
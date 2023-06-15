import{S as K,i as L,s as M,Y as N,k as n,m as b,l as g,o as a,a as Q,q as e,v,C as J,d as R,A as T}from"./SelectImportArea-8c969054.js";function U(s){let t,i,l,h,r,C,E,o,u,q,w,y,m,D,P,z,k,Y,j,f,B,S,_,F,G,O,c,H,x,A,I;return x=N(s[6][0]),{c(){t=n("details"),i=n("summary"),i.textContent="Processing Options",l=b(),h=n("label"),r=n("input"),C=g(`
    Debug each transformation step`),E=b(),o=n("label"),u=n("input"),q=g(`
    Enable dual carriageway experiment`),w=b(),y=n("label"),m=n("input"),D=g(`
    Enable sidepath zipping experiment`),P=b(),z=n("label"),k=n("input"),Y=g(`
    Enable osm2lanes experiment`),j=b(),f=n("div"),B=g(`Sidewalks:
    `),S=n("label"),_=n("input"),F=g(`
      use mapped footways`),G=b(),O=n("label"),c=n("input"),H=g(`
      infer on roads`),a(i,"class","svelte-fio7ln"),a(r,"type","checkbox"),a(h,"class","svelte-fio7ln"),a(u,"type","checkbox"),a(o,"class","svelte-fio7ln"),a(m,"type","checkbox"),a(y,"class","svelte-fio7ln"),a(k,"type","checkbox"),a(z,"class","svelte-fio7ln"),a(_,"type","radio"),_.__value=!1,_.value=_.__value,a(S,"class","svelte-fio7ln"),a(c,"type","radio"),c.__value=!0,c.value=c.__value,a(O,"class","svelte-fio7ln"),a(f,"class","svelte-fio7ln"),a(t,"class","svelte-fio7ln"),x.p(_,c)},m(p,d){Q(p,t,d),e(t,i),e(t,l),e(t,h),e(h,r),r.checked=s[0].debug_each_step,e(h,C),e(t,E),e(t,o),e(o,u),u.checked=s[0].dual_carriageway_experiment,e(o,q),e(t,w),e(t,y),e(y,m),m.checked=s[0].sidepath_zipping_experiment,e(y,D),e(t,P),e(t,z),e(z,k),k.checked=s[0].osm2lanes,e(z,Y),e(t,j),e(t,f),e(f,B),e(f,S),e(S,_),_.checked=_.__value===s[0].inferred_sidewalks,e(S,F),e(f,G),e(f,O),e(O,c),c.checked=c.__value===s[0].inferred_sidewalks,e(O,H),A||(I=[v(r,"change",s[1]),v(u,"change",s[2]),v(m,"change",s[3]),v(k,"change",s[4]),v(_,"change",s[5]),v(c,"change",s[7])],A=!0)},p(p,[d]){d&1&&(r.checked=p[0].debug_each_step),d&1&&(u.checked=p[0].dual_carriageway_experiment),d&1&&(m.checked=p[0].sidepath_zipping_experiment),d&1&&(k.checked=p[0].osm2lanes),d&1&&(_.checked=_.__value===p[0].inferred_sidewalks),d&1&&(c.checked=c.__value===p[0].inferred_sidewalks)},i:J,o:J,d(p){p&&R(t),x.r(),A=!1,T(I)}}}function V(s,t,i){let{settings:l={debug_each_step:!1,dual_carriageway_experiment:!1,sidepath_zipping_experiment:!1,inferred_sidewalks:!1,osm2lanes:!1}}=t;const h=[[]];function r(){l.debug_each_step=this.checked,i(0,l)}function C(){l.dual_carriageway_experiment=this.checked,i(0,l)}function E(){l.sidepath_zipping_experiment=this.checked,i(0,l)}function o(){l.osm2lanes=this.checked,i(0,l)}function u(){l.inferred_sidewalks=this.__value,i(0,l)}function q(){l.inferred_sidewalks=this.__value,i(0,l)}return s.$$set=w=>{"settings"in w&&i(0,l=w.settings)},[l,r,C,E,o,u,h,q]}class X extends K{constructor(t){super(),L(this,t,V,U,M,{settings:0})}}export{X as O};
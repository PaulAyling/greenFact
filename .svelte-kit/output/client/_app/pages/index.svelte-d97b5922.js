import{S as j,i as L,s as S,e as w,t as V,k as H,c as D,a as T,h as C,d as g,m as B,b as m,g as O,J as u,K as ie,j as J,n as P,L as fe,M as W,N as X,x as F,y as M,z as N,O as Y,r as R,p as A,C as U,f as z,o as ue,q as de}from"../chunks/index-bc051554.js";/* empty css                    */function le(l,e,a){const t=l.slice();return t[6]=e[a],t}function se(l){let e,a,t=l[6].shortname+"",n,c,r,i=l[6].dnoregion+"",s,o,d,v,_=l[6].intensity.index+"",p,x,h,f,b;function k(){return l[5](l[6])}return{c(){e=w("tr"),a=w("th"),n=V(t),c=H(),r=w("th"),s=V(i),o=H(),d=w("th"),v=w("div"),p=V(_),h=H(),this.h()},l(I){e=D(I,"TR",{class:!0});var y=T(e);a=D(y,"TH",{scope:!0,class:!0});var E=T(a);n=C(E,t),E.forEach(g),c=B(y),r=D(y,"TH",{scope:!0,class:!0});var $=T(r);s=C($,i),$.forEach(g),o=B(y),d=D(y,"TH",{scope:!0,class:!0});var q=T(d);v=D(q,"DIV",{class:!0});var G=T(v);p=C(G,_),G.forEach(g),q.forEach(g),h=B(y),y.forEach(g),this.h()},h(){m(a,"scope","col"),m(a,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"),m(r,"scope","col"),m(r,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"),m(v,"class",x="text-gray-800 text-center p-2 "+l[2](l[6].intensity.index)),m(d,"scope","col"),m(d,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"),m(e,"class","hover:bg-gray-100 dark:hover:bg-gray-700")},m(I,y){O(I,e,y),u(e,a),u(a,n),u(e,c),u(e,r),u(r,s),u(e,o),u(e,d),u(d,v),u(v,p),u(e,h),f||(b=ie(e,"click",k),f=!0)},p(I,y){l=I,y&1&&t!==(t=l[6].shortname+"")&&J(n,t),y&1&&i!==(i=l[6].dnoregion+"")&&J(s,i),y&1&&_!==(_=l[6].intensity.index+"")&&J(p,_),y&1&&x!==(x="text-gray-800 text-center p-2 "+l[2](l[6].intensity.index))&&m(v,"class",x)},d(I){I&&g(e),f=!1,b()}}}function he(l){let e,a=l[0],t=[];for(let n=0;n<a.length;n+=1)t[n]=se(le(l,a,n));return{c(){e=w("tbody");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=D(n,"TBODY",{class:!0});var c=T(e);for(let r=0;r<t.length;r+=1)t[r].l(c);c.forEach(g),this.h()},h(){m(e,"class","bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 cursor-pointer ")},m(n,c){O(n,e,c);for(let r=0;r<t.length;r+=1)t[r].m(e,null)},p(n,[c]){if(c&7){a=n[0];let r;for(r=0;r<a.length;r+=1){const i=le(n,a,r);t[r]?t[r].p(i,c):(t[r]=se(i),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=a.length}},i:P,o:P,d(n){n&&g(e),fe(t,n)}}}function ge(l,e,a){let{carbonData:t}=e,{viewTable:n}=e,{chartData:c}=e;const r=o=>{a(3,n=!n),a(4,c=o)},i=o=>(console.log("colBand running.....ARG:",o),o=="low"?(console.log("intesity fiunc:",o,"rounded green"),"rounded bg-green-500"):o=="very low"?"rounded bg-green-200":o=="moderate"?"rounded bg-yellow-400":"rounded bg-red-400"),s=o=>r(o);return l.$$set=o=>{"carbonData"in o&&a(0,t=o.carbonData),"viewTable"in o&&a(3,n=o.viewTable),"chartData"in o&&a(4,c=o.chartData)},[t,r,i,n,c,s]}class _e extends j{constructor(e){super();L(this,e,ge,he,S,{carbonData:0,viewTable:3,chartData:4})}}function ve(l){let e,a,t=l[0]?"":"X",n,c,r;return{c(){e=w("button"),a=w("p"),n=V(t),this.h()},l(i){e=D(i,"BUTTON",{class:!0});var s=T(e);a=D(s,"P",{class:!0});var o=T(a);n=C(o,t),o.forEach(g),s.forEach(g),this.h()},h(){m(a,"class","align-top text-right"),m(e,"class","text-2xl text-blue-200 hover:text-red-400 active:text-red-300 ")},m(i,s){O(i,e,s),u(e,a),u(a,n),c||(r=ie(e,"click",l[2]),c=!0)},p(i,[s]){s&1&&t!==(t=i[0]?"":"X")&&J(n,t)},i:P,o:P,d(i){i&&g(e),c=!1,r()}}}function be(l,e,a){let{viewTable:t}=e;const n=()=>{a(0,t=!t),console.log("viewTable",t)},c=()=>n();return l.$$set=r=>{"viewTable"in r&&a(0,t=r.viewTable)},[t,n,c]}class me extends j{constructor(e){super();L(this,e,be,ve,S,{viewTable:0})}}function pe(l){let e,a,t=(l[0]?"Carbon Intensity Data":l[1].dnoregion)+"",n,c,r,i,s,o,d;function v(p){l[2](p)}let _={};return l[0]!==void 0&&(_.viewTable=l[0]),s=new me({props:_}),W.push(()=>X(s,"viewTable",v)),{c(){e=w("header"),a=w("div"),n=V(t),c=H(),r=w("hr"),i=H(),F(s.$$.fragment),this.h()},l(p){e=D(p,"HEADER",{class:!0});var x=T(e);a=D(x,"DIV",{class:!0});var h=T(a);n=C(h,t),c=B(h),r=D(h,"HR",{class:!0}),h.forEach(g),i=B(x),M(s.$$.fragment,x),x.forEach(g),this.h()},h(){m(r,"class","mt-4"),m(a,"class","text-4xl text-blue-400 font-bold text-center w-full"),m(e,"class","flex flex-row justify-end items-start")},m(p,x){O(p,e,x),u(e,a),u(a,n),u(a,c),u(a,r),u(e,i),N(s,e,null),d=!0},p(p,[x]){(!d||x&3)&&t!==(t=(p[0]?"Carbon Intensity Data":p[1].dnoregion)+"")&&J(n,t);const h={};!o&&x&1&&(o=!0,h.viewTable=p[0],Y(()=>o=!1)),s.$set(h)},i(p){d||(R(s.$$.fragment,p),d=!0)},o(p){A(s.$$.fragment,p),d=!1},d(p){p&&g(e),U(s)}}}function we(l,e,a){let{viewTable:t}=e,{chartData:n}=e;function c(r){t=r,a(0,t)}return l.$$set=r=>{"viewTable"in r&&a(0,t=r.viewTable),"chartData"in r&&a(1,n=r.chartData)},[t,n,c]}class De extends j{constructor(e){super();L(this,e,we,pe,S,{viewTable:0,chartData:1})}}function ye(l){let e,a,t,n,c,r,i=l[0].intensity.forecast+"",s,o,d,v,_,p,x,h;return{c(){e=w("header"),a=w("div"),t=w("h2"),n=V("Current Carbon Intensity"),c=H(),r=w("div"),s=V(i),o=H(),d=w("div"),v=V("gCO"),_=w("sub"),p=V("2"),x=V(`/kWh
        
        `),h=w("hr"),this.h()},l(f){e=D(f,"HEADER",{class:!0});var b=T(e);a=D(b,"DIV",{});var k=T(a);t=D(k,"H2",{class:!0});var I=T(t);n=C(I,"Current Carbon Intensity"),I.forEach(g),k.forEach(g),c=B(b),r=D(b,"DIV",{class:!0});var y=T(r);s=C(y,i),y.forEach(g),o=B(b),d=D(b,"DIV",{class:!0});var E=T(d);v=C(E,"gCO"),_=D(E,"SUB",{});var $=T(_);p=C($,"2"),$.forEach(g),x=C(E,`/kWh
        
        `),h=D(E,"HR",{class:!0}),E.forEach(g),b.forEach(g),this.h()},h(){m(t,"class","text-blue-400 text-center font-bold p-3"),m(r,"class","text-4xl text-orange-300 text-center font-bold divide-solid"),m(h,"class","mt-10"),m(d,"class","text-gray-300 text-center font-bold divide-solid"),m(e,"class","flex flex-col")},m(f,b){O(f,e,b),u(e,a),u(a,t),u(t,n),u(e,c),u(e,r),u(r,s),u(e,o),u(e,d),u(d,v),u(d,_),u(_,p),u(d,x),u(d,h)},p(f,[b]){b&1&&i!==(i=f[0].intensity.forecast+"")&&J(s,i)},i:P,o:P,d(f){f&&g(e)}}}function Te(l,e,a){let{chartData:t}=e;return l.$$set=n=>{"chartData"in n&&a(0,t=n.chartData)},[t]}class xe extends j{constructor(e){super();L(this,e,Te,ye,S,{chartData:0})}}function ke(l){let e,a;return{c(){e=w("div"),a=w("div"),this.h()},l(t){e=D(t,"DIV",{class:!0});var n=T(e);a=D(n,"DIV",{class:!0,style:!0}),T(a).forEach(g),n.forEach(g),this.h()},h(){m(a,"class","piechart svelte-zhv8z"),z(a,"--f0_biomass",l[0]),z(a,"--f1_coal",l[1]),z(a,"--f2_imports",l[2]),z(a,"--f3_gas",l[3]),z(a,"--f4_nuclear",l[4]),z(a,"--f5_other",l[5]),z(a,"--f6_hydro",l[6]),z(a,"--f7_solar",l[7]),z(a,"--f8_wind",l[8]),m(e,"class","flex flex-row justify-right pt-20 mb-10")},m(t,n){O(t,e,n),u(e,a)},p:P,i:P,o:P,d(t){t&&g(e)}}}function Ee(l,e,a){let{cssParams:t}=e;const n=t[0],c=t[1],r=t[2],i=t[3],s=t[4],o=t[5],d=t[6],v=t[7],_=t[8];return l.$$set=p=>{"cssParams"in p&&a(9,t=p.cssParams)},[n,c,r,i,s,o,d,v,_,t]}class $e extends j{constructor(e){super();L(this,e,Ee,ke,S,{cssParams:9})}}function Ie(l){let e;return{c(){e=w("div"),this.h()},l(a){e=D(a,"DIV",{style:!0,class:!0}),T(e).forEach(g),this.h()},h(){z(e,"--color",l[0]),m(e,"class","svelte-17wbsl3")},m(a,t){O(a,e,t)},p(a,[t]){t&1&&z(e,"--color",a[0])},i:P,o:P,d(a){a&&g(e)}}}function Ve(l,e,a){let{color:t}=e;return l.$$set=n=>{"color"in n&&a(0,t=n.color)},[t]}class Ce extends j{constructor(e){super();L(this,e,Ve,Ie,S,{color:0})}}function He(l){let e,a,t,n,c,r,i,s,o,d;return n=new Ce({props:{color:l[2]}}),{c(){e=w("tr"),a=w("th"),t=w("div"),F(n.$$.fragment),c=w("div"),r=V(l[0]),i=H(),s=w("th"),o=V(l[1]),this.h()},l(v){e=D(v,"TR",{});var _=T(e);a=D(_,"TH",{scope:!0,class:!0});var p=T(a);t=D(p,"DIV",{class:!0});var x=T(t);M(n.$$.fragment,x),c=D(x,"DIV",{class:!0});var h=T(c);r=C(h,l[0]),h.forEach(g),x.forEach(g),p.forEach(g),i=B(_),s=D(_,"TH",{scope:!0,class:!0});var f=T(s);o=C(f,l[1]),f.forEach(g),_.forEach(g),this.h()},h(){m(c,"class","pl-2"),m(t,"class","flex flex-row"),m(a,"scope","col"),m(a,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"),m(s,"scope","col"),m(s,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400")},m(v,_){O(v,e,_),u(e,a),u(a,t),N(n,t,null),u(t,c),u(c,r),u(e,i),u(e,s),u(s,o),d=!0},p(v,[_]){const p={};_&4&&(p.color=v[2]),n.$set(p),(!d||_&1)&&J(r,v[0]),(!d||_&2)&&J(o,v[1])},i(v){d||(R(n.$$.fragment,v),d=!0)},o(v){A(n.$$.fragment,v),d=!1},d(v){v&&g(e),U(n)}}}function Be(l,e,a){let{fuel:t}=e,{perc:n}=e,{color:c}=e;return l.$$set=r=>{"fuel"in r&&a(0,t=r.fuel),"perc"in r&&a(1,n=r.perc),"color"in r&&a(2,c=r.color)},[t,n,c]}class Re extends j{constructor(e){super();L(this,e,Be,He,S,{fuel:0,perc:1,color:2})}}function oe(l,e,a){const t=l.slice();return t[4]=e[a],t}function ce(l){let e,a;return e=new Re({props:{fuel:l[4].fuel,perc:l[4].perc,color:l[4].color}}),{c(){F(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){N(e,t,n),a=!0},p:P,i(t){a||(R(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function Pe(l){let e,a,t,n,c,r,i,s,o,d,v,_,p,x,h,f,b=l[0],k=[];for(let y=0;y<b.length;y+=1)k[y]=ce(oe(l,b,y));const I=y=>A(k[y],1,1,()=>{k[y]=null});return{c(){e=w("div"),a=w("div"),t=w("div"),n=w("div"),c=w("div"),r=w("table"),i=w("thead"),s=w("tr"),o=w("th"),d=V("Type"),v=H(),_=w("th"),p=V("%"),x=H(),h=w("tbody");for(let y=0;y<k.length;y+=1)k[y].c();this.h()},l(y){e=D(y,"DIV",{});var E=T(e);a=D(E,"DIV",{class:!0});var $=T(a);t=D($,"DIV",{class:!0});var q=T(t);n=D(q,"DIV",{class:!0});var G=T(n);c=D(G,"DIV",{class:!0});var ee=T(c);r=D(ee,"TABLE",{class:!0});var K=T(r);i=D(K,"THEAD",{class:!0});var te=T(i);s=D(te,"TR",{});var Z=T(s);o=D(Z,"TH",{scope:!0,class:!0});var ae=T(o);d=C(ae,"Type"),ae.forEach(g),v=B(Z),_=D(Z,"TH",{scope:!0,class:!0});var re=T(_);p=C(re,"%"),re.forEach(g),Z.forEach(g),te.forEach(g),x=B(K),h=D(K,"TBODY",{class:!0});var ne=T(h);for(let Q=0;Q<k.length;Q+=1)k[Q].l(ne);ne.forEach(g),K.forEach(g),ee.forEach(g),G.forEach(g),q.forEach(g),$.forEach(g),E.forEach(g),this.h()},h(){m(o,"scope","col"),m(o,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase dark:text-white-400"),m(_,"scope","col"),m(_,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase dark:text-white-400"),m(i,"class","bg-gray-100 dark:bg-blue-400 "),m(h,"class","bg-white divide-y divide-blue-200 cursor-pointer "),m(r,"class","min-w-full"),m(c,"class","overflow-hidden "),m(n,"class","inline-block min-w-full align-middle"),m(t,"class","overflow-x-auto sm:rounded-lg"),m(a,"class","flex flex-col mt-10")},m(y,E){O(y,e,E),u(e,a),u(a,t),u(t,n),u(n,c),u(c,r),u(r,i),u(i,s),u(s,o),u(o,d),u(s,v),u(s,_),u(_,p),u(r,x),u(r,h);for(let $=0;$<k.length;$+=1)k[$].m(h,null);f=!0},p(y,[E]){if(E&1){b=y[0];let $;for($=0;$<b.length;$+=1){const q=oe(y,b,$);k[$]?(k[$].p(q,E),R(k[$],1)):(k[$]=ce(q),k[$].c(),R(k[$],1),k[$].m(h,null))}for(ue(),$=b.length;$<k.length;$+=1)I($);de()}},i(y){if(!f){for(let E=0;E<b.length;E+=1)R(k[E]);f=!0}},o(y){k=k.filter(Boolean);for(let E=0;E<k.length;E+=1)A(k[E]);f=!1},d(y){y&&g(e),fe(k,y)}}}function Ae(l,e,a){let{chartData:t}=e;const n=t.generationmix;console.log("legendRaw",n);const r=(i=>{let s=[];const o=["orange","gray","lightgray","blue","yellow","#778899","purple","red","orange"];for(let d=0;d<i.length;d++){const v={fuel:i[d].fuel,perc:i[d].perc,color:o[d]};s.push(v)}return s})(n);return console.log("legend",r),l.$$set=i=>{"chartData"in i&&a(1,t=i.chartData)},[r,t]}class Oe extends j{constructor(e){super();L(this,e,Ae,Pe,S,{chartData:1})}}function je(l){let e,a,t,n,c,r,i,s;return a=new xe({props:{chartData:l[0]}}),c=new $e({props:{cssParams:l[1]}}),i=new Oe({props:{chartData:l[0]}}),{c(){e=w("main"),F(a.$$.fragment),t=H(),n=w("div"),F(c.$$.fragment),r=H(),F(i.$$.fragment),this.h()},l(o){e=D(o,"MAIN",{class:!0});var d=T(e);M(a.$$.fragment,d),t=B(d),n=D(d,"DIV",{class:!0});var v=T(n);M(c.$$.fragment,v),r=B(v),M(i.$$.fragment,v),v.forEach(g),d.forEach(g),this.h()},h(){m(n,"class","flex flex-row justify-between "),m(e,"class","mb-20")},m(o,d){O(o,e,d),N(a,e,null),u(e,t),u(e,n),N(c,n,null),u(n,r),N(i,n,null),s=!0},p(o,[d]){const v={};d&1&&(v.chartData=o[0]),a.$set(v);const _={};d&1&&(_.chartData=o[0]),i.$set(_)},i(o){s||(R(a.$$.fragment,o),R(c.$$.fragment,o),R(i.$$.fragment,o),s=!0)},o(o){A(a.$$.fragment,o),A(c.$$.fragment,o),A(i.$$.fragment,o),s=!1},d(o){o&&g(e),U(a),U(c),U(i)}}}function Le(l,e,a){let{chartData:t}=e;const n=t.generationmix,r=(i=>{const o=(x=>{let h=[];for(let f=0;f<x.length;f++){let b=parseFloat(x[f].perc)/100*360;h.push(b)}return h})(i),v=(x=>{let h=[];for(let f=0;f<x.length;f++){let b;f==0?b=x[f]:b=x[f]+parseFloat(h[f-1]),h.push(b)}return h})(o);return(x=>{const h=b=>b=="0"?"0":b+"deg";let f=[];for(let b=0;b<x.length;b++){const k=parseInt(x[b]),I=String(k),y=h(I);let E;b==0?(E="0 "+y,f.push(E)):(E=h(String(parseInt(x[b-1])))+" "+y,f.push(E))}return f})(v)})(n);return console.log("Chart Data",t),l.$$set=i=>{"chartData"in i&&a(0,t=i.chartData)},[t,r]}class Se extends j{constructor(e){super();L(this,e,Le,je,S,{chartData:0})}}function ze(l){let e,a,t,n,c,r,i,s,o,d;return{c(){e=w("thead"),a=w("tr"),t=w("th"),n=V("shortname"),c=H(),r=w("th"),i=V("dnoregion"),s=H(),o=w("th"),d=V("intensity"),this.h()},l(v){e=D(v,"THEAD",{class:!0});var _=T(e);a=D(_,"TR",{});var p=T(a);t=D(p,"TH",{scope:!0,class:!0});var x=T(t);n=C(x,"shortname"),x.forEach(g),c=B(p),r=D(p,"TH",{scope:!0,class:!0});var h=T(r);i=C(h,"dnoregion"),h.forEach(g),s=B(p),o=D(p,"TH",{scope:!0,class:!0});var f=T(o);d=C(f,"intensity"),f.forEach(g),p.forEach(g),_.forEach(g),this.h()},h(){m(t,"scope","col"),m(t,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"),m(r,"scope","col"),m(r,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"),m(o,"scope","col"),m(o,"class","py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"),m(e,"class","bg-gray-100 dark:bg-gray-700")},m(v,_){O(v,e,_),u(e,a),u(a,t),u(t,n),u(a,c),u(a,r),u(r,i),u(a,s),u(a,o),u(o,d)},p:P,i:P,o:P,d(v){v&&g(e)}}}class Fe extends j{constructor(e){super();L(this,e,null,ze,S,{})}}function Me(l){let e,a;return e=new Se({props:{chartData:l[1]}}),{c(){F(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){N(e,t,n),a=!0},p(t,n){const c={};n&2&&(c.chartData=t[1]),e.$set(c)},i(t){a||(R(e.$$.fragment,t),a=!0)},o(t){A(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}function Ne(l){let e,a,t,n,c,r,i,s,o,d,v;r=new Fe({});function _(h){l[3](h)}function p(h){l[4](h)}let x={carbonData:l[2]};return l[0]!==void 0&&(x.viewTable=l[0]),l[1]!==void 0&&(x.chartData=l[1]),s=new _e({props:x}),W.push(()=>X(s,"viewTable",_)),W.push(()=>X(s,"chartData",p)),{c(){e=w("div"),a=w("div"),t=w("div"),n=w("div"),c=w("table"),F(r.$$.fragment),i=H(),F(s.$$.fragment),this.h()},l(h){e=D(h,"DIV",{class:!0});var f=T(e);a=D(f,"DIV",{class:!0});var b=T(a);t=D(b,"DIV",{class:!0});var k=T(t);n=D(k,"DIV",{class:!0});var I=T(n);c=D(I,"TABLE",{class:!0});var y=T(c);M(r.$$.fragment,y),i=B(y),M(s.$$.fragment,y),y.forEach(g),I.forEach(g),k.forEach(g),b.forEach(g),f.forEach(g),this.h()},h(){m(c,"class","min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"),m(n,"class","overflow-hidden "),m(t,"class","inline-block min-w-full align-middle"),m(a,"class","overflow-x-auto sm:rounded-lg"),m(e,"class","flex flex-col")},m(h,f){O(h,e,f),u(e,a),u(a,t),u(t,n),u(n,c),N(r,c,null),u(c,i),N(s,c,null),v=!0},p(h,f){const b={};f&4&&(b.carbonData=h[2]),!o&&f&1&&(o=!0,b.viewTable=h[0],Y(()=>o=!1)),!d&&f&2&&(d=!0,b.chartData=h[1],Y(()=>d=!1)),s.$set(b)},i(h){v||(R(r.$$.fragment,h),R(s.$$.fragment,h),v=!0)},o(h){A(r.$$.fragment,h),A(s.$$.fragment,h),v=!1},d(h){h&&g(e),U(r),U(s)}}}function Ue(l){let e,a,t,n;const c=[Ne,Me],r=[];function i(s,o){return s[0]?0:1}return a=i(l),t=r[a]=c[a](l),{c(){e=w("div"),t.c()},l(s){e=D(s,"DIV",{});var o=T(e);t.l(o),o.forEach(g)},m(s,o){O(s,e,o),r[a].m(e,null),n=!0},p(s,[o]){let d=a;a=i(s),a===d?r[a].p(s,o):(ue(),A(r[d],1,1,()=>{r[d]=null}),de(),t=r[a],t?t.p(s,o):(t=r[a]=c[a](s),t.c()),R(t,1),t.m(e,null))},i(s){n||(R(t),n=!0)},o(s){A(t),n=!1},d(s){s&&g(e),r[a].d()}}}function qe(l,e,a){let{carbonData:t}=e,{viewTable:n}=e,{chartData:c}=e;function r(s){n=s,a(0,n)}function i(s){c=s,a(1,c)}return l.$$set=s=>{"carbonData"in s&&a(2,t=s.carbonData),"viewTable"in s&&a(0,n=s.viewTable),"chartData"in s&&a(1,c=s.chartData)},[n,c,t,r,i]}class Je extends j{constructor(e){super();L(this,e,qe,Ue,S,{carbonData:2,viewTable:0,chartData:1})}}function We(l){let e,a,t,n,c,r,i,s,o;function d(f){l[3](f)}function v(f){l[4](f)}let _={};l[1]!==void 0&&(_.viewTable=l[1]),l[2]!==void 0&&(_.chartData=l[2]),a=new De({props:_}),W.push(()=>X(a,"viewTable",d)),W.push(()=>X(a,"chartData",v));function p(f){l[5](f)}function x(f){l[6](f)}let h={carbonData:l[0]};return l[1]!==void 0&&(h.viewTable=l[1]),l[2]!==void 0&&(h.chartData=l[2]),r=new Je({props:h}),W.push(()=>X(r,"viewTable",p)),W.push(()=>X(r,"chartData",x)),{c(){e=w("div"),F(a.$$.fragment),c=H(),F(r.$$.fragment),this.h()},l(f){e=D(f,"DIV",{class:!0});var b=T(e);M(a.$$.fragment,b),c=B(b),M(r.$$.fragment,b),b.forEach(g),this.h()},h(){m(e,"class","max-w-2xl mx-auto p-3")},m(f,b){O(f,e,b),N(a,e,null),u(e,c),N(r,e,null),o=!0},p(f,[b]){const k={};!t&&b&2&&(t=!0,k.viewTable=f[1],Y(()=>t=!1)),!n&&b&4&&(n=!0,k.chartData=f[2],Y(()=>n=!1)),a.$set(k);const I={};b&1&&(I.carbonData=f[0]),!i&&b&2&&(i=!0,I.viewTable=f[1],Y(()=>i=!1)),!s&&b&4&&(s=!0,I.chartData=f[2],Y(()=>s=!1)),r.$set(I)},i(f){o||(R(a.$$.fragment,f),R(r.$$.fragment,f),o=!0)},o(f){A(a.$$.fragment,f),A(r.$$.fragment,f),o=!1},d(f){f&&g(e),U(a),U(r)}}}function Xe(l,e,a){var t=[];async function n(){const p=await(await fetch("https://api.carbonintensity.org.uk/regional/intensity/source/2022-02-14T18:00:00.000Z/fw24h")).json();return a(0,t=p.data[0].regions),console.log("Fetched Data:",t),p.data[0].regions}(async()=>{try{a(0,t=await n())}catch(_){console.log("error",_)}})();let r=!0,i=[];function s(_){r=_,a(1,r)}function o(_){i=_,a(2,i)}function d(_){r=_,a(1,r)}function v(_){i=_,a(2,i)}return[t,r,i,s,o,d,v]}class Ke extends j{constructor(e){super();L(this,e,Xe,We,S,{})}}export{Ke as default};

self.uhooks=function(e){"use strict";var t=Promise;let n=null,s=new Set;const c=e=>{const{$:t,r:n,h:s}=e;i(n)&&(u.get(s).delete(e),n()),i(e.r=t())&&u.get(s).add(e)},o=()=>{const e=s;s=new Set,e.forEach((({h:e,c:t,a:n,e:s})=>{s&&e.apply(t,n)}))},u=new WeakMap,r=[],a=[];function h(e,t){return e!==this[t]}const l=()=>n,i=e=>"function"==typeof e,f=new t((e=>e()));function p(e){const{_:t,value:n}=this;n!==e&&(this._=new Set,this.value=e,t.forEach((({h:e,c:t,a:n})=>{e.apply(t,n)})))}const d=(e,t)=>{const n=l(),{i:s,s:c}=n;return s!==c.length&&t&&!t.some(h,c[s]._)||(c[s]={$:e(),_:t}),c[n.i++].$},g=e=>(t,n)=>{const s=l(),{i:c,s:o,h:r}=s,a=c===o.length;s.i++,a&&(u.has(r)||u.set(r,new Set),o[c]={$:t,_:n,r:null,h:r}),(a||!n||n.some(h,o[c]._))&&e.push(o[c]),o[c].$=t,o[c]._=n},E=g(r),$=g(a),_=(e,t)=>i(t)?t(e):t,v=(e,t,n)=>{const c=l(),{i:u,s:r}=c;u===r.length&&r.push({$:i(n)?n(t):_(void 0,t),set:t=>{r[u].$=e(r[u].$,t),(e=>{s.has(e)||(e.e=1,s.add(e),f.then(o))})(c)}});const{$:a,set:h}=r[c.i++];return[a,h]};return e.createContext=e=>({_:new Set,provide:p,value:e}),e.dropEffect=e=>{const t=u.get(e);t&&f.then((()=>{t.forEach((e=>{e.r(),e.r=null})),t.clear()}))},e.hasEffect=e=>u.has(e),e.hooked=e=>{const t={h:s,c:null,a:null,e:0,i:0,s:[]};return s;function s(){const s=n;n=t,t.e=t.i=0;try{return e.apply(t.c=this,t.a=arguments)}finally{n=s,r.length&&f.then(r.forEach.bind(r.splice(0),c)),a.length&&a.splice(0).forEach(c)}}},e.useCallback=(e,t)=>d((()=>e),t),e.useContext=({_:e,value:t})=>(e.add(l()),t),e.useEffect=E,e.useLayoutEffect=$,e.useMemo=d,e.useReducer=v,e.useRef=e=>{const t=l(),{i:n,s:s}=t;return n===s.length&&s.push({current:e}),s[t.i++]},e.useState=e=>v(_,e),e.wait=f,e}({});

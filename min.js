self.uhooks=function(n){"use strict";var t="function"==typeof Promise?Promise:function(n){var t,e=[],u=0;return n((function(n){t=n,u=1,e.splice(0).forEach(r)})),{then:r};function r(n){return u?setTimeout(n,0,t):e.push(n),this}},e=null,u=null,r=null,i=new Set,o=new WeakMap,c=new t((function(n){return n()})),f=function(n){var t=n.$,e=n.r,u=n.h;d(e)&&(s.get(u).delete(n),e()),d(n.r=t())&&s.get(u).add(n)},a=function(){var n=i;i=new Set,n.forEach(_)},s=new WeakMap,h=[],l=[];function v(n,t){return n!==this[t]}var p=function(){var n=o.get(r);return n.a=e,n.c=u,n},d=function(n){return"function"==typeof n},_=function(n){n.i=0,n.h.apply(n.c,n.a)};function g(n){var t=this._;this.value!==n&&(this._=new Set,this.value=n,t.forEach(_))}var E=function(n,t){var e=p(),u=e.i,r=e.s;return u===r.length?r.push({$:n(),_:t}):t&&!t.some(v,r[u]._)||(r[u]={$:n(),_:t}),r[e.i++].$},$=function(n){return function(t,e){var u=p(),r=u.i,i=u.s,o=u.h,c=r===i.length;c&&(s.has(o)||s.set(o,new Set),i.push({$:t,_:e,r:null,h:o}));var f=i[u.i++];(c||!e||e.some(v,f._))&&n.push(f)}},w=$(h),y=$(l),m=function(n,t){return d(t)?t(n):t},S=function(n,t,e){var u=p(),r=u.i,o=u.s;r===o.length&&o.push({$:d(e)?e(t):m(void 0,t),set:function(t){o[r].$=n(o[r].$,t),function(n){i.has(n)||(i.add(n),c.then(a))}(u)}});var f=o[u.i++];return[f.$,f.set]};return n.createContext=function(n){return{_:new Set,provide:g,value:n}},n.dropEffect=function(n){var t=s.get(n);t&&c.then((function(){t.forEach((function(n){n.r(),n.r=null})),t.clear()}))},n.hasEffect=function(n){return s.has(n)},n.hooked=function(n){return o.set(t,{a:e,c:u,h:t,i:0,s:[]}),t;function t(){var i=e,o=u,a=r;e=arguments,u=this,r=t;try{return n.apply(u,e)}finally{e=i,u=o,r=a,h.length&&c.then(h.forEach.bind(h.splice(0),f)),l.length&&l.splice(0).forEach(f)}}},n.useCallback=function(n,t){return E((function(){return n}),t)},n.useContext=function(n){var t=n._,e=n.value;return t.add(p()),e},n.useEffect=w,n.useLayoutEffect=y,n.useMemo=E,n.useReducer=S,n.useRef=function(n){var t=p(),e=t.i,u=t.s;return e===u.length&&u.push({current:n}),u[t.i++]},n.useState=function(n){return S(m,n)},Object.defineProperty(n,"__esModule",{value:!0}),n}({});
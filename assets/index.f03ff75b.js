(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function P(){}function Ye(e){return e()}function Ne(){return Object.create(null)}function ne(e){e.forEach(Ye)}function ve(e){return typeof e=="function"}function se(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}let ie;function oe(e,n){return ie||(ie=document.createElement("a")),ie.href=n,e===ie.href}function ct(e){return Object.keys(e).length===0}function lt(e,...n){if(e==null)return P;const t=e.subscribe(...n);return t.unsubscribe?()=>t.unsubscribe():t}function q(e,n,t){e.$$.on_destroy.push(lt(n,t))}function ke(e,n,t){return e.set(t),n}const Ke=typeof window<"u";let We=Ke?()=>window.performance.now():()=>Date.now(),Ue=Ke?e=>requestAnimationFrame(e):P;const v=new Set;function Ve(e){v.forEach(n=>{n.c(e)||(v.delete(n),n.f())}),v.size!==0&&Ue(Ve)}function ut(e){let n;return v.size===0&&Ue(Ve),{promise:new Promise(t=>{v.add(n={c:e,f:t})}),abort(){v.delete(n)}}}function D(e,n){e.appendChild(n)}function ye(e,n,t){e.insertBefore(n,t||null)}function re(e){e.parentNode.removeChild(e)}function R(e){return document.createElement(e)}function dt(e){return document.createTextNode(e)}function Ce(){return dt(" ")}function G(e,n,t,s){return e.addEventListener(n,t,s),()=>e.removeEventListener(n,t,s)}function f(e,n,t){t==null?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function mt(e){return Array.from(e.childNodes)}function H(e,n,t){e.classList[t?"add":"remove"](n)}let te;function $(e){te=e}function gt(){if(!te)throw new Error("Function called outside component initialization");return te}function yt(e){gt().$$.on_mount.push(e)}const Q=[],ue=[],ce=[],Ge=[],ht=Promise.resolve();let Se=!1;function pt(){Se||(Se=!0,ht.then(Ze))}function Te(e){ce.push(e)}const Ee=new Set;let ae=0;function Ze(){const e=te;do{for(;ae<Q.length;){const n=Q[ae];ae++,$(n),bt(n.$$)}for($(null),Q.length=0,ae=0;ue.length;)ue.pop()();for(let n=0;n<ce.length;n+=1){const t=ce[n];Ee.has(t)||(Ee.add(t),t())}ce.length=0}while(Q.length);for(;Ge.length;)Ge.pop()();Se=!1,Ee.clear(),$(e)}function bt(e){if(e.fragment!==null){e.update(),ne(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(Te)}}const le=new Set;let _t;function de(e,n){e&&e.i&&(le.delete(e),e.i(n))}function je(e,n,t,s){if(e&&e.o){if(le.has(e))return;le.add(e),_t.c.push(()=>{le.delete(e),s&&(t&&e.d(1),s())}),e.o(n)}else s&&s()}const wt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Le(e){e&&e.c()}function me(e,n,t,s){const{fragment:r,after_update:i}=e.$$;r&&r.m(n,t),s||Te(()=>{const l=e.$$.on_mount.map(Ye).filter(ve);e.$$.on_destroy?e.$$.on_destroy.push(...l):ne(l),e.$$.on_mount=[]}),i.forEach(Te)}function ge(e,n){const t=e.$$;t.fragment!==null&&(ne(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function xt(e,n){e.$$.dirty[0]===-1&&(Q.push(e),pt(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function he(e,n,t,s,r,i,l,u=[-1]){const d=te;$(e);const a=e.$$={fragment:null,ctx:[],props:i,update:P,not_equal:r,bound:Ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:Ne(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(a.root);let w=!1;if(a.ctx=t?t(e,n.props||{},(b,x,...E)=>{const k=E.length?E[0]:x;return a.ctx&&r(a.ctx[b],a.ctx[b]=k)&&(!a.skip_bound&&a.bound[b]&&a.bound[b](k),w&&xt(e,b)),x}):[],a.update(),w=!0,ne(a.before_update),a.fragment=s?s(a.ctx):!1,n.target){if(n.hydrate){const b=mt(n.target);a.fragment&&a.fragment.l(b),b.forEach(re)}else a.fragment&&a.fragment.c();n.intro&&de(e.$$.fragment),me(e,n.target,n.anchor,n.customElement),Ze()}$(d)}class pe{$destroy(){ge(this,1),this.$destroy=P}$on(n,t){if(!ve(t))return P;const s=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return s.push(t),()=>{const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}$set(n){this.$$set&&!ct(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const X=[];function kt(e,n){return{subscribe:Oe(e,n).subscribe}}function Oe(e,n=P){let t;const s=new Set;function r(u){if(se(e,u)&&(e=u,t)){const d=!X.length;for(const a of s)a[1](),X.push(a,e);if(d){for(let a=0;a<X.length;a+=2)X[a][0](X[a+1]);X.length=0}}}function i(u){r(u(e))}function l(u,d=P){const a=[u,d];return s.add(a),s.size===1&&(t=n(r)||P),u(e),()=>{s.delete(a),s.size===0&&(t(),t=null)}}return{set:r,update:i,subscribe:l}}function He(e){return Object.prototype.toString.call(e)==="[object Date]"}function Pe(e,n,t,s){if(typeof t=="number"||He(t)){const r=s-t,i=(t-n)/(e.dt||1/60),l=e.opts.stiffness*r,u=e.opts.damping*i,d=(l-u)*e.inv_mass,a=(i+d)*e.dt;return Math.abs(a)<e.opts.precision&&Math.abs(r)<e.opts.precision?s:(e.settled=!1,He(t)?new Date(t.getTime()+a):t+a)}else{if(Array.isArray(t))return t.map((r,i)=>Pe(e,n[i],t[i],s[i]));if(typeof t=="object"){const r={};for(const i in t)r[i]=Pe(e,n[i],t[i],s[i]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function Y(e,n={}){const t=Oe(e),{stiffness:s=.15,damping:r=.8,precision:i=.01}=n;let l,u,d,a=e,w=e,b=1,x=0,E=!1;function k(m,S={}){w=m;const A=d={};return e==null||S.hard||M.stiffness>=1&&M.damping>=1?(E=!0,l=We(),a=m,t.set(e=w),Promise.resolve()):(S.soft&&(x=1/((S.soft===!0?.5:+S.soft)*60),b=0),u||(l=We(),E=!1,u=ut(c=>{if(E)return E=!1,u=null,!1;b=Math.min(b+x,1);const g={inv_mass:b,opts:M,settled:!0,dt:(c-l)*60/1e3},B=Pe(g,a,e,w);return l=c,a=e,t.set(e=B),g.settled&&(u=null),!g.settled})),new Promise(c=>{u.promise.then(()=>{A===d&&c()})}))}const M={set:k,update:(m,S)=>k(m(w,e),S),subscribe:t.subscribe,stiffness:s,damping:r,precision:i};return M}const fe=Oe(void 0),be=function(e){return e?{alpha:e.alpha,beta:e.beta,gamma:e.gamma}:{alpha:0,beta:0,gamma:0}},Xe=e=>{const n=be(e);return{absolute:n,relative:{alpha:n.alpha-ee.alpha,beta:n.beta-ee.beta,gamma:n.gamma-ee.gamma}}};let ze=!0,ee=be();const Ct=()=>{ze=!0,ee=be()},Et=kt(Xe(),function(n){const t=function(s){ze&&(ze=!1,ee=be(s));const r=Xe(s);n(r)};return window.addEventListener("deviceorientation",t,!0),function(){window.removeEventListener("deviceorientation",t,!0)}}),j=(e,n=3)=>parseFloat(e.toFixed(n)),Me=(e,n=-20,t=20)=>Math.min(Math.max(e,n),t);function Mt(e){let n,t;return{c(){n=R("div"),f(n,"class",t="card__glare "+e[0]+" "+e[1]+" svelte-y0attf")},m(s,r){ye(s,n,r)},p(s,[r]){r&3&&t!==(t="card__glare "+s[0]+" "+s[1]+" svelte-y0attf")&&f(n,"class",t)},i:P,o:P,d(s){s&&re(n)}}}function St(e,n,t){let{subtypes:s="basic"}=n,{rarity:r="common"}=n;return e.$$set=i=>{"subtypes"in i&&t(0,s=i.subtypes),"rarity"in i&&t(1,r=i.rarity)},[s,r]}class Tt extends pe{constructor(n){super(),he(this,n,St,Mt,se,{subtypes:0,rarity:1})}}function jt(e){let n,t;return{c(){n=R("div"),f(n,"class",t="card__shine "+e[0]+" "+e[1]+" svelte-8e4zv4")},m(s,r){ye(s,n,r)},p(s,[r]){r&3&&t!==(t="card__shine "+s[0]+" "+s[1]+" svelte-8e4zv4")&&f(n,"class",t)},i:P,o:P,d(s){s&&re(n)}}}function Lt(e,n,t){let{subtypes:s="basic"}=n,{supertype:r="pok\xE9mon"}=n;return e.$$set=i=>{"subtypes"in i&&t(0,s=i.subtypes),"supertype"in i&&t(1,r=i.supertype)},[s,r]}class Pt extends pe{constructor(n){super(),he(this,n,Lt,jt,se,{subtypes:0,supertype:1})}}const{window:zt}=wt;function Ot(e){let n,t,s,r,i,l,u,d,a,w,b,x,E,k,M,m,S,A;return x=new Pt({props:{subtypes:e[1],supertype:e[2]}}),k=new Tt({props:{subtypes:e[1],rarity:e[3]}}),{c(){n=R("div"),t=R("div"),s=R("button"),r=R("img"),l=Ce(),u=R("div"),d=R("img"),b=Ce(),Le(x.$$.fragment),E=Ce(),Le(k.$$.fragment),f(r,"class","card__back svelte-166jv0z"),oe(r.src,i=e[5])||f(r,"src",i),f(r,"alt","The back of a Pokemon Card, a Pokeball in the center with Pokemon logo above and below"),f(r,"loading","lazy"),f(r,"width","660"),f(r,"height","921"),oe(d.src,a=e[8])||f(d,"src",a),f(d,"alt",w="Front design of the "+e[6]+" Pokemon Card, with the stats and info around the edge"),f(d,"loading","lazy"),f(d,"width","660"),f(d,"height","921"),f(d,"class","svelte-166jv0z"),f(u,"class","card__front svelte-166jv0z"),f(s,"class","card__rotator svelte-166jv0z"),f(s,"aria-label",M="Expand the Pokemon Card; "+e[6]+"."),f(s,"tabindex","0"),f(t,"class","card__translater svelte-166jv0z"),f(n,"class","card svelte-166jv0z"),f(n,"data-number",e[0]),f(n,"data-subtypes",e[1]),f(n,"data-supertype",e[2]),f(n,"data-rarity",e[3]),f(n,"data-gallery",e[4]),f(n,"style",e[16]),H(n,"active",e[10]),H(n,"interacting",e[11]),H(n,"loading",e[12])},m(c,g){ye(c,n,g),D(n,t),D(t,s),D(s,r),D(s,l),D(s,u),D(u,d),D(u,b),me(x,u,null),D(u,E),me(k,u,null),e[36](s),e[37](n),m=!0,S||(A=[G(zt,"scroll",e[24]),G(d,"load",e[25]),G(s,"click",e[22]),G(s,"pointermove",e[20]),G(s,"mouseout",e[21]),G(s,"blur",e[23])],S=!0)},p(c,g){(!m||g[0]&32&&!oe(r.src,i=c[5]))&&f(r,"src",i),(!m||g[0]&256&&!oe(d.src,a=c[8]))&&f(d,"src",a),(!m||g[0]&64&&w!==(w="Front design of the "+c[6]+" Pokemon Card, with the stats and info around the edge"))&&f(d,"alt",w);const B={};g[0]&2&&(B.subtypes=c[1]),g[0]&4&&(B.supertype=c[2]),x.$set(B);const N={};g[0]&2&&(N.subtypes=c[1]),g[0]&8&&(N.rarity=c[3]),k.$set(N),(!m||g[0]&64&&M!==(M="Expand the Pokemon Card; "+c[6]+"."))&&f(s,"aria-label",M),(!m||g[0]&1)&&f(n,"data-number",c[0]),(!m||g[0]&2)&&f(n,"data-subtypes",c[1]),(!m||g[0]&4)&&f(n,"data-supertype",c[2]),(!m||g[0]&8)&&f(n,"data-rarity",c[3]),(!m||g[0]&16)&&f(n,"data-gallery",c[4]),(!m||g[0]&65536)&&f(n,"style",c[16]),(!m||g[0]&1024)&&H(n,"active",c[10]),(!m||g[0]&2048)&&H(n,"interacting",c[11]),(!m||g[0]&4096)&&H(n,"loading",c[12])},i(c){m||(de(x.$$.fragment,c),de(k.$$.fragment,c),m=!0)},o(c){je(x.$$.fragment,c),je(k.$$.fragment,c),m=!1},d(c){c&&re(n),ge(x),ge(k),e[36](null),e[37](null),S=!1,ne(A)}}}function Rt(e,n,t){let s,r,i,l,u,d,a,w,b;q(e,Et,o=>t(28,r=o)),q(e,fe,o=>t(29,i=o));let{back_img:x="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"}=n,{img:E=""}=n,{name:k=""}=n,{number:M="0"}=n,{subtypes:m="basic"}=n,{supertype:S="pok\xE9mon"}=n,{rarity:A="common"}=n,{gallery:c=!1}=n,{showcase:g=!1}=n,B=E.startsWith("http")?"":"https://images.pokemontcg.io/",N="";const Je=Math.floor(Math.random()*1500);setTimeout(()=>{t(8,N=B+E)},20);let z,_e,Re,K=!1,F=!1,Ae=!0,De=!0,U=document.visibilityState==="visible";const T={stiffness:.066,damping:.25},we={stiffness:.033,damping:.45};let y=Y({x:0,y:0},T);q(e,y,o=>t(33,a=o));let h=Y({x:50,y:50,o:0},T);q(e,h,o=>t(30,l=o));let p=Y({x:50,y:50},T);q(e,p,o=>t(31,u=o));let V=Y({x:0,y:0},we);q(e,V,o=>t(32,d=o));let Z=Y({x:0,y:0},we);q(e,Z,o=>t(35,b=o));let J=Y(1,we);q(e,J,o=>t(34,w=o));let xe,qe,Be,Fe=!0;const Qe=o=>{if(Fe&&(clearTimeout(Be),clearTimeout(qe),clearInterval(xe),Fe=!1),U&&i&&i!==z)return t(11,F=!1);t(11,F=!0),o.type==="touchmove"&&(o.clientX=o.touches[0].clientX,o.clientY=o.touches[0].clientY);const _=o.target.getBoundingClientRect(),C={x:o.clientX-_.left,y:o.clientY-_.top},L={x:j(100/_.width*C.x),y:j(100/_.height*C.y)},I={x:L.x-50,y:L.y-50};t(15,p.stiffness=T.stiffness,p),t(15,p.damping=T.damping,p),p.set({x:j(50+L.x/4-12.5),y:j(50+L.y/3-16.67)}),t(13,y.stiffness=T.stiffness,y),t(13,y.damping=T.damping,y),y.set({x:j(-(I.x/3.5)),y:j(I.y/2)}),t(14,h.stiffness=T.stiffness,h),t(14,h.damping=T.damping,h),h.set({x:L.x,y:L.y,o:1})},W=(o,O=500)=>{setTimeout(function(){t(11,F=!1),t(13,y.stiffness=.01,y),t(13,y.damping=.06,y),y.set({x:0,y:0},{soft:1}),t(14,h.stiffness=.01,h),t(14,h.damping=.06,h),h.set({x:50,y:50,o:0},{soft:1}),t(15,p.stiffness=.01,p),t(15,p.damping=.06,p),p.set({x:50,y:50},{soft:1})},O)},$e=o=>{i&&i===z?ke(fe,i=void 0,i):(ke(fe,i=z,i),Ct())},et=o=>{W(),ke(fe,i=void 0,i)},tt=o=>{clearTimeout(Re),Re=setTimeout(()=>{i&&i===z&&Ie()},300)},Ie=()=>{const o=z.getBoundingClientRect(),O=document.documentElement,_={x:j(O.clientWidth/2-o.x-o.width/2),y:j(O.clientHeight/2-o.y-o.height/2)};Z.set({x:_.x,y:_.y})},nt=()=>{const o=z.getBoundingClientRect();let O=100,_=window.innerWidth/o.width*.9,C=window.innerHeight/o.height*.9,L=1.75;Ie(),Ae&&(O=1e3,V.set({x:360,y:0})),Ae=!1,J.set(Math.min(_,C,L)),W(null,O)},st=()=>{J.set(1,{soft:!0}),Z.set({x:0,y:0},{soft:!0}),V.set({x:0,y:0},{soft:!0}),W(null,100)},rt=()=>{W(null,0),J.set(1,{hard:!0}),Z.set({x:0,y:0},{hard:!0}),V.set({x:0,y:0},{hard:!0}),y.set({x:0,y:0},{hard:!0})},it=o=>{t(12,De=!1)},ot=o=>{const O=o.relative.gamma,_=o.relative.beta,C={x:16,y:18},L={x:Me(O,-C.x,C.x),y:Me(_,-C.y,C.y)},I={x:50+L.x/(C.x*2)*100,y:50+L.y/(C.y*2)*100};t(15,p.stiffness=T.stiffness,p),t(15,p.damping=T.damping,p),p.set({x:j(50+(C.x*2*((50- -I.x)/100)-C.x*2)),y:j(50+(C.y*2*((50+I.y)/100)-C.y*2))}),t(13,y.stiffness=T.stiffness,y),t(13,y.damping=T.damping,y),y.set({x:j(L.x*-1),y:j(L.y)}),t(14,h.stiffness=T.stiffness,h),t(14,h.damping=T.damping,h),h.set({x:j(I.x),y:j(I.y),o:1})};document.addEventListener("visibilitychange",o=>{U=document.visibilityState==="visible",U||rt()}),yt(()=>{if(g&&U){let _=0;qe=setTimeout(()=>{if(t(11,F=!0),t(10,K=!0),t(13,y.stiffness=.02,y),t(13,y.damping=.5,y),t(14,h.stiffness=.02,h),t(14,h.damping=.5,h),t(15,p.stiffness=.02,p),t(15,p.damping=.5,p),U)xe=setInterval(function(){_+=.05,y.set({x:Math.sin(_)*25,y:Math.cos(_)*25}),h.set({x:55+Math.sin(_)*55,y:55+Math.cos(_)*55,o:.8}),p.set({x:20+Math.sin(_)*20,y:20+Math.cos(_)*20})},20),Be=setTimeout(()=>{clearInterval(xe),W(null,0)},4e3);else{t(11,F=!1),t(10,K=!1);return}},2e3)}});function at(o){ue[o?"unshift":"push"](()=>{_e=o,t(9,_e)})}function ft(o){ue[o?"unshift":"push"](()=>{z=o,t(7,z)})}return e.$$set=o=>{"back_img"in o&&t(5,x=o.back_img),"img"in o&&t(26,E=o.img),"name"in o&&t(6,k=o.name),"number"in o&&t(0,M=o.number),"subtypes"in o&&t(1,m=o.subtypes),"supertype"in o&&t(2,S=o.supertype),"rarity"in o&&t(3,A=o.rarity),"gallery"in o&&t(4,c=o.gallery),"showcase"in o&&t(27,g=o.showcase)},e.$$.update=()=>{e.$$.dirty[0]&536871040&&(i&&i===z?(nt(),t(10,K=!0)):(st(),t(10,K=!1))),e.$$.dirty[0]&1073741824|e.$$.dirty[1]&31&&t(16,s=`
		--mx: ${l.x}%;
		--my: ${l.y}%;
		--tx: ${b.x}px;
		--ty: ${b.y}px;
		--s: ${w};
		--o: ${l.o};
		--rx: ${a.x+d.x}deg;
		--ry: ${a.y+d.y}deg;
		--pos: ${u.x}% ${u.y}%;
		--posx: ${u.x}%;
		--posy: ${u.y}%;
		--hyp: ${Me(Math.sqrt((l.y-50)*(l.y-50)+(l.x-50)*(l.x-50))/50,0,1)};
    --galaxybg: center ${Je}px;
	`),e.$$.dirty[0]&15&&(t(3,A=A.toLowerCase()),t(2,S=S.toLowerCase()),t(0,M=M.toLowerCase()),t(4,c=M.startsWith("tg")),Array.isArray(m)&&t(1,m=m.join(" ").toLowerCase())),e.$$.dirty[0]&805306496&&i&&i===z&&(t(11,F=!0),ot(r))},[M,m,S,A,c,x,k,z,N,_e,K,F,De,y,h,p,s,V,Z,J,Qe,W,$e,et,tt,it,E,g,r,i,l,u,d,a,w,b,at,ft]}class At extends pe{constructor(n){super(),he(this,n,Rt,Ot,se,{back_img:5,img:26,name:6,number:0,subtypes:1,supertype:2,rarity:3,gallery:4,showcase:27},null,[-1,-1])}}function Dt(e){let n,t,s,r;return s=new At({props:{name:"Squirtle",img:"https://i.imgur.com/CqZ1op3.png",number:"33",supertype:"Pok\xE9mon",subtypes:["Basic"],rarity:"Rare Ultra",showcase:!0}}),{c(){n=R("main"),t=R("div"),Le(s.$$.fragment),f(t,"class","showcase")},m(i,l){ye(i,n,l),D(n,t),me(s,t,null),r=!0},p:P,i(i){r||(de(s.$$.fragment,i),r=!0)},o(i){je(s.$$.fragment,i),r=!1},d(i){i&&re(n),ge(s)}}}class qt extends pe{constructor(n){super(),he(this,n,null,Dt,se,{})}}new qt({target:document.getElementById("app")});

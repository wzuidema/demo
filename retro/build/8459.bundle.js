(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8459,7415],{57415:(t,e,s)=>{"use strict";s.r(e),s.d(e,{IDocumentProviderFactory:()=>r,ProviderMock:()=>c,WebSocketProviderWithLocks:()=>l});var n=s(90355),i=s(8263),a=s(49e3),o=s(23406);class l extends i.V{constructor(t){super(t.url,t.guid,t.ymodel.ydoc,{awareness:t.ymodel.awareness}),this._currentLockRequest=null,this._initialContentRequest=null,this.messageHandlers[127]=(t,e,s,n,i)=>{const o=a.Jl(e),l=this._currentLockRequest;this._currentLockRequest=null,l&&l.resolve(o)},this.messageHandlers[125]=(t,e,s,i,o)=>{const l=a.iU(e);l.byteLength>0&&setTimeout((()=>{n.NG(this.doc,l)}),0);const c=this._initialContentRequest;this._initialContentRequest=null,c&&c.resolve(l.byteLength>0)},this.isInitialized=!1,this.onConnectionStatus=this.onConnectionStatus.bind(this),this.on("status",this.onConnectionStatus)}requestInitialContent(){if(this._initialContentRequest)return this._initialContentRequest.promise;let t,e;const s=new Promise(((s,n)=>{t=s,e=n}));return this._initialContentRequest={promise:s,resolve:t,reject:e},this._sendMessage(new Uint8Array([125])),setTimeout((()=>t(!1)),1e3),s}async onConnectionStatus(t){if(this.isInitialized&&"connected"===t.status){const t=await this.acquireLock();await this.requestInitialContent()||this.putInitializedState(),this.releaseLock(t)}}putInitializedState(){const t=o.Mf();o.uE(t,124),o.HK(t,n.D$(this.doc)),this._sendMessage(o._f(t)),this.isInitialized=!0}acquireLock(){if(this._currentLockRequest)return this._currentLockRequest.promise;this._sendMessage(new Uint8Array([127]));const t=setInterval((()=>{this.wsconnected&&this._sendMessage(new Uint8Array([127]))}),500);let e,s;const n=new Promise(((t,n)=>{e=t,s=n}));this._currentLockRequest={promise:n,resolve:e,reject:s};const i=()=>{clearInterval(t)};return n.then(i,i),n}releaseLock(t){const e=o.Mf();o.uE(e,126),o.Ep(e,t),this._sendMessage(o._f(e))}_sendMessage(t){const e=()=>{setTimeout((()=>{this.wsconnected?this.ws.send(t):this.once("status",e)}),0)};e()}}class c{requestInitialContent(){return Promise.resolve(!1)}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(t){}destroy(){}}const r=new(s(66065).Token)("@jupyterlab/docprovider:IDocumentProviderFactory")},6493:(t,e,s)=>{"use strict";s.d(e,{GL:()=>r,Ag:()=>h,xq:()=>u,oy:()=>d});var n=s(23406),i=s(49e3),a=s(40870),o=s(21332),l=s(75736),c=s(91985);class r extends l.y{constructor(t){super(),this.doc=t,this.clientID=t.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval((()=>{const t=a.ZG();null!==this.getLocalState()&&15e3<=t-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const e=[];this.meta.forEach(((s,n)=>{n!==this.clientID&&3e4<=t-s.lastUpdated&&this.states.has(n)&&e.push(n)})),e.length>0&&h(this,e,"timeout")}),o.GW(3e3)),t.on("destroy",(()=>{this.destroy()})),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(t){const e=this.clientID,s=this.meta.get(e),n=void 0===s?0:s.clock+1,i=this.states.get(e);null===t?this.states.delete(e):this.states.set(e,t),this.meta.set(e,{clock:n,lastUpdated:a.ZG()});const o=[],l=[],r=[],h=[];null===t?h.push(e):null==i?null!=t&&o.push(e):(l.push(e),c.Hi(i,t)||r.push(e)),(o.length>0||r.length>0||h.length>0)&&this.emit("change",[{added:o,updated:r,removed:h},"local"]),this.emit("update",[{added:o,updated:l,removed:h},"local"])}setLocalStateField(t,e){const s=this.getLocalState();null!==s&&this.setLocalState({...s,[t]:e})}getStates(){return this.states}}const h=(t,e,s)=>{const n=[];for(let s=0;s<e.length;s++){const i=e[s];if(t.states.has(i)){if(t.states.delete(i),i===t.clientID){const e=t.meta.get(i);t.meta.set(i,{clock:e.clock+1,lastUpdated:a.ZG()})}n.push(i)}}n.length>0&&(t.emit("change",[{added:[],updated:[],removed:n},s]),t.emit("update",[{added:[],updated:[],removed:n},s]))},u=(t,e,s=t.states)=>{const i=e.length,a=n.Mf();n.uE(a,i);for(let o=0;o<i;o++){const i=e[o],l=s.get(i)||null,c=t.meta.get(i).clock;n.uE(a,i),n.uE(a,c),n.uw(a,JSON.stringify(l))}return n._f(a)},d=(t,e,s)=>{const n=i.l1(e),o=a.ZG(),l=[],r=[],h=[],u=[],d=i.yg(n);for(let e=0;e<d;e++){const e=i.yg(n);let s=i.yg(n);const a=JSON.parse(i.kf(n)),d=t.meta.get(e),g=t.states.get(e),p=void 0===d?0:d.clock;(p<s||p===s&&null===a&&t.states.has(e))&&(null===a?e===t.clientID&&null!=t.getLocalState()?s++:t.states.delete(e):t.states.set(e,a),t.meta.set(e,{clock:s,lastUpdated:o}),void 0===d&&null!==a?l.push(e):void 0!==d&&null===a?u.push(e):null!==a&&(c.Hi(a,g)||h.push(e),r.push(e)))}(l.length>0||h.length>0||u.length>0)&&t.emit("change",[{added:l,updated:h,removed:u},s]),(l.length>0||r.length>0||u.length>0)&&t.emit("update",[{added:l,updated:r,removed:u},s])}}}]);
//# sourceMappingURL=8459.bundle.js.map
(()=>{"use strict";var e={256:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.handleClick=void 0,n.handleClick=(e,n,t,r)=>{let i;switch(r.action){case"more-info":i=new Event("hass-more-info",{composed:!0}),i.detail={entityId:r.entity||t.entity},console.log(i),e.dispatchEvent(i);break;case"navigate":if(!r.navigation_path)return;history.pushState(null,"",r.navigation_path),i=new Event("location-changed",{composed:!0}),i.detail={replace:!1},window.dispatchEvent(i);break;case"call-service":if(!r.service)return;const[s,o]=r.service.split(".",2),a={...r.service_data};n.callService(s,o,a)}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var s=n[r]={exports:{}};return e[r](s,s.exports,t),s.exports}(()=>{var e,n,r,i,s=t(256);function o(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const a=window.LitElement||Object.getPrototypeOf(customElements.get("ha-panel-lovelace")||customElements.get("hc-lovelace")),{html:c,css:l}=a.prototype;customElements.define("custom-person-card",class extends a{static get properties(){return{hass:{},config:{}}}handleTap(e,n){(0,s.handleClick)(this,this._hass,this.config,{action:"more-info",entity:n})}setConfig(e){if(!e.entities)throw new Error("You need to define entities");this.config=e}_toggle(e){this.hass.callService("homeassistant","toggle",{entity_id:e.entity_id})}static get styles(){return l(e||(e=o(["\n      ha-card {\n        background: none;\n        border: none;\n        box-shadow: none;\n        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',sans-serif;\n        padding-left: 8px;\n        padding-right: 8px;\n      }\n\n      .grrd-person-title {\n        font-size: 15px;\n      }\n\n      .grrd-person {\n        display: flex;\n      }\n\n      .grrd-person > .grrd-chip + .grrd-chip {\n        margin-left: 1rem;\n      }\n\n      .grrd-chip {\n        align-items: center;\n        background-color: var(--card-background-color);\n        border: thin solid var(--primary-color);\n        border-radius: 25px;\n        cursor: pointer;\n        display: flex;\n        font-weight: bold;\n        height: 40px;\n        justify-content: flex-start;\n        line-height: 40px;\n        padding: 0 1rem 0 1px;\n        overflow: hidden;\n        width: auto;\n      }\n\n      .grrd-chip > img {\n        border-radius: 50%;\n        height: auto;\n        margin-right: 1rem;\n        width: 37px;\n      }\n    "])))}renderPeople(e){const t=Object.keys(e),{language:i,resources:s}=this.hass,a=s[i];return c(n||(n=o(["\n      ","\n    "])),t.map((n=>"home"!==e[n].state&&"unknown"!==e[n].state?c(r||(r=o(['\n            <div class="grrd-chip" @click="@click=','">\n              <img src="','" />\n              ',"\n            </div>\n            "])),(e=>this.handleTap(e,n)),e[n].attributes.entity_picture,"home"!==e[n].state&&"not_home"===e[n].state?a["component.person.state._.not_home"]:e[n].state):"")))}render(){const e=this.hass,{entities:n}=this.config,t=new RegExp("^(".concat(n.toString().replaceAll(",","|"),")$")),r=Object.keys(e.states).filter((e=>null!==e.match(t))).reduce(((n,t)=>Object.assign(n,{[t]:e.states[t]})),{});let s=!0;return Object.keys(r).map((e=>"home"!==r[e].state?s=!1:"")),s?"":c(i||(i=o(['\n      <ha-card>\n        <p class="grrd-person-title"><strong>Familia</strong></p>\n        <div class="grrd-person">\n          ',"\n        </div>\n      </ha-card>\n    "])),this.renderPeople(r))}})})()})();
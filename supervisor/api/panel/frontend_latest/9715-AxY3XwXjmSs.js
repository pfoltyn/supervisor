"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9715],{39715:(e,t,i)=>{i.r(t),i.d(t,{HaFormInteger:()=>l});var a=i(17463),n=i(68144),s=i(14243),r=i(47181);i(92197);let l=(0,a.Z)([(0,s.Mo)("ha-form-integer")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.IO)("ha-textfield ha-slider")],key:"_input",value:void 0},{kind:"field",key:"_lastValue",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){var e;return void 0!==this.schema.valueMin&&void 0!==this.schema.valueMax&&this.schema.valueMax-this.schema.valueMin<256?n.dy` <div> ${this.label} <div class="flex"> ${this.schema.required?"":n.dy` <ha-checkbox @change="${this._handleCheckboxChange}" .checked="${void 0!==this.data}" .disabled="${this.disabled}"></ha-checkbox> `} <ha-slider pin ignore-bar-touch .value="${this._value}" .min="${this.schema.valueMin}" .max="${this.schema.valueMax}" .disabled="${this.disabled||void 0===this.data&&!this.schema.required}" @change="${this._valueChanged}"></ha-slider> </div> ${this.helper?n.dy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} </div> `:n.dy` <ha-textfield type="number" inputMode="numeric" .label="${this.label}" .helper="${this.helper}" helperPersistent .value="${void 0!==this.data?this.data:""}" .disabled="${this.disabled}" .required="${this.schema.required}" .autoValidate="${this.schema.required}" .suffix="${null===(e=this.schema.description)||void 0===e?void 0:e.suffix}" .validationMessage="${this.schema.required?"Required":void 0}" @input="${this._valueChanged}"></ha-textfield> `}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!("valueMin"in this.schema&&"valueMax"in this.schema||!this.schema.required))}},{kind:"get",key:"_value",value:function(){var e,t;return void 0!==this.data?this.data:this.schema.required?void 0!==(null===(e=this.schema.description)||void 0===e?void 0:e.suggested_value)&&null!==(null===(t=this.schema.description)||void 0===t?void 0:t.suggested_value)||this.schema.default||this.schema.valueMin||0:this.schema.valueMin||0}},{kind:"method",key:"_handleCheckboxChange",value:function(e){let t;if(e.target.checked)for(const e of[this._lastValue,null===(i=this.schema.description)||void 0===i?void 0:i.suggested_value,this.schema.default,0]){var i;if(void 0!==e){t=e;break}}else this._lastValue=this.data;(0,r.B)(this,"value-changed",{value:t})}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.target,i=t.value;let a;if(""!==i&&(a=parseInt(String(i))),this.data!==a)(0,r.B)(this,"value-changed",{value:a});else{const e=void 0===a?"":String(a);t.value!==e&&(t.value=e)}}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host([own-margin]){margin-bottom:5px}.flex{display:flex}ha-slider{flex:1}ha-textfield{display:block}`}}]}}),n.oi)},92197:(e,t,i)=>{i(28138);const a=customElements.get("paper-slider");let n;customElements.define("ha-slider",class extends a{static get template(){if(!n){n=a.template.cloneNode(!0);n.content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n\n            .pin > .slider-knob > .slider-knob-inner {\n              font-size:  var(--ha-slider-pin-font-size, 15px);\n              line-height: normal;\n              cursor: pointer;\n            }\n\n            .disabled.ring > .slider-knob > .slider-knob-inner {\n              background-color: var(--paper-slider-disabled-knob-color, var(--disabled-text-color));\n              border: 2px solid var(--paper-slider-disabled-knob-color, var(--disabled-text-color));\n            }\n\n            .pin > .slider-knob > .slider-knob-inner::before {\n              top: unset;\n              margin-left: unset;\n\n              bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n              left: 50%;\n              width: 2.6em;\n              height: 2.6em;\n\n              -webkit-transform-origin: left bottom;\n              transform-origin: left bottom;\n              -webkit-transform: rotate(-45deg) scale(0) translate(0);\n              transform: rotate(-45deg) scale(0) translate(0);\n            }\n\n            .pin.expand > .slider-knob > .slider-knob-inner::before {\n              -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n              transform: rotate(-45deg) scale(1) translate(7px, -7px);\n            }\n\n            .pin > .slider-knob > .slider-knob-inner::after {\n              top: unset;\n              font-size: unset;\n\n              bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n              left: 50%;\n              margin-left: -1.3em;\n              width: 2.6em;\n              height: 2.5em;\n\n              -webkit-transform-origin: center bottom;\n              transform-origin: center bottom;\n              -webkit-transform: scale(0) translate(0);\n              transform: scale(0) translate(0);\n            }\n\n            .pin.expand > .slider-knob > .slider-knob-inner::after {\n              -webkit-transform: scale(1) translate(0, -10px);\n              transform: scale(1) translate(0, -10px);\n            }\n\n            .slider-input {\n              width: 54px;\n            }\n        '))}return n}_setImmediateValue(e){super._setImmediateValue(this.step>=1?Math.round(e):Math.round(100*e)/100)}_calcStep(e){if(!this.step)return parseFloat(e);const t=Math.round((e-this.min)/this.step),i=this.step.toString(),a=i.indexOf(".");if(-1!==a){const e=10**(i.length-a-1);return Math.round((t*this.step+this.min)*e)/e}return t*this.step+this.min}})}}]);
//# sourceMappingURL=9715-AxY3XwXjmSs.js.map
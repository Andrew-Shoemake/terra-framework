(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1032:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___23YxA","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___3qIhu","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___3Uv7G","tab-content":"TabsTemplate-module__tab-content___2tpdx"}},1042:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(5)),i=a(n(2)),o=a(n(1032)),u=r.default.bind(o.default),d={isLabelHidden:i.default.bool,label:i.default.string,id:i.default.string},f=function(e){var t=e.isLabelHidden,n=e.label,a=e.id;return l.default.createElement("div",{className:u("tab-content"),id:a},t?l.default.createElement("h3",{className:"truncationHeader"},n):null,"Content for"," ",l.default.createElement("i",null,n))};f.propTypes=d;var s=f;t.default=s},1045:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var l=d(n(0)),r=d(n(2)),i=d(n(129)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(163));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var l=m(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var h={children:r.default.node,onChange:r.default.func,onResize:r.default.func,tiny:r.default.element,small:r.default.element,medium:r.default.element,large:r.default.element,huge:r.default.element,enormous:r.default.element,responsiveTo:r.default.oneOf(["window","parent"])},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,a,r=c(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=r.call(this)).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new i.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,a=t.onResize,l=t.tiny,r=t.small,i=t.medium,u=t.large,d=t.huge,f=t.enormous;a&&a(e);var s,c=(0,o.activeBreakpointForSize)(e);n&&c!==this.breakpoint&&n(c),this.breakpoint=c,(l||r||i||u||d||f)&&(s=e>=o.default.enormous&&f?"enormous":e>=o.default.huge&&d?"huge":e>=o.default.large&&u?"large":e>=o.default.medium&&i?"medium":e>=o.default.small&&r?"small":"tiny",this.state.element!==s&&this.setState({element:s}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:l.default.createElement(l.default.Fragment,null,"parent"===n&&!this.container&&l.default.createElement("div",{ref:this.setContainer}),t)}}])&&f(t.prototype,n),a&&f(t,a),u}(l.default.Component);y.propTypes=h,y.defaultProps={responsiveTo:"parent"};var v=y;t.default=v},1098:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(5)),i=a(n(2)),o=a(n(1068)),u=a(n(1042)),d=a(n(1032)),f=r.default.bind(d.default),s={fill:i.default.bool,tabFill:i.default.bool,id:i.default.string,containerClassName:i.default.string,responsiveTo:i.default.string},c=function(e){return l.default.createElement("div",{className:f(e.containerClassName),id:"tabs-container"},l.default.createElement(o.default,{tabFill:e.tabFill,fill:e.fill,id:e.id,responsiveTo:e.responsiveTo},l.default.createElement(o.default.Pane,{label:"Tab 1",key:"Tab1",id:"tab1"},l.default.createElement(u.default,{label:"Tab 1",id:"tab1Content"})),l.default.createElement(o.default.Pane,{label:"Tab 2",key:"Tab2",id:"tab2"},l.default.createElement(u.default,{label:"Tab 2",id:"tab2Content"})),l.default.createElement(o.default.Pane,{label:"Disabled Tab",key:"disabled",id:"disabled",isDisabled:!0}),l.default.createElement(o.default.Pane,{label:"Tab 4",key:"Tab4",id:"tab4"},l.default.createElement(u.default,{label:"Tab 4",id:"tab4Content"})),l.default.createElement(o.default.Pane,{label:"Tab 5",key:"Tab5",id:"tab5"},l.default.createElement(u.default,{label:"Tab 5",id:"tab5Content"})),l.default.createElement(o.default.Pane,{label:"Tab 6",key:"Tab6",id:"tab6"},l.default.createElement(u.default,{label:"Tab 6",id:"tab6Content"})),l.default.createElement(o.default.Pane,{label:"Tab 7",key:"Tab7",id:"tab7"},l.default.createElement(u.default,{label:"Tab 7",id:"tab7Content"})),l.default.createElement(o.default.Pane,{label:"Tab 8 with longer text that should truncate",key:"Tab8",id:"tab8"},l.default.createElement(u.default,{label:"Tab 8",id:"tab8Content"})),l.default.createElement(o.default.Pane,{label:"Tab 9",key:"Tab9",id:"tab9"},l.default.createElement(u.default,{label:"Tab 9",id:"tab9Content"})),l.default.createElement(o.default.Pane,{label:"Tab 10",key:"Tab10",id:"tab10"},l.default.createElement(u.default,{label:"Tab 10",id:"tab10Content"})),l.default.createElement(o.default.Pane,{label:"Tab 11",key:"Tab11",id:"tab11"},l.default.createElement(u.default,{label:"Tab 11",id:"tab11Content"})),l.default.createElement(o.default.Pane,{label:"Tab 12",key:"Tab12",id:"tab12"},l.default.createElement(u.default,{label:"Tab 12",id:"tab12Content"}))))};c.propTypes=s,c.defaultProps={containerClassName:"content-wrapper-default",responsiveTo:"parent"};var b=c;t.default=b},2096:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(1098));t.default=function(){return l.default.createElement(r.default,{tabFill:!0})}}}]);
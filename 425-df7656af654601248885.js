(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{1394:function(e,t,n){"use strict";n.r(t),t.default={"test-popup-area":"BoundedPopupCommon-test-module__test-popup-area___29xqX","popup-text":"BoundedPopupCommon-test-module__popup-text___Gdc-F"}},1766:function(e,t,n){"use strict";var u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(21)),a=u(n(24)),r=u(n(28)),l=u(n(29)),d=u(n(30)),i=u(n(0)),s=u(n(2));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(u,arguments,o)}else n=u.apply(this,arguments);return(0,l.default)(this,n)}}var c=function(e){(0,r.default)(n,e);var t=f(n);function n(){return(0,o.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"render",value:function(){return this.props.closeButtonRequired?i.default.createElement("p",null,"There is no Header and popup is Bounded"):i.default.createElement("p",null,"This is the content of the popup")}}]),n}(i.default.Component);c.propTypes={closeButtonRequired:s.default.bool},c.defaultProps={closeButtonRequired:!1};var p=c;t.default=p},2064:function(e,t,n){"use strict";var u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(21)),a=u(n(24)),r=u(n(31)),l=u(n(28)),d=u(n(29)),i=u(n(30)),s=u(n(0)),f=u(n(5)),c=u(n(127)),p=u(n(1766)),h=u(n(1394));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;n=Reflect.construct(u,arguments,o)}else n=u.apply(this,arguments);return(0,d.default)(this,n)}}var y=f.default.bind(h.default),B=function(e){(0,l.default)(n,e);var t=v(n);function n(e){var u;return(0,o.default)(this,n),(u=t.call(this,e)).handleButtonClick=u.handleButtonClick.bind((0,r.default)(u)),u.handleRequestClose=u.handleRequestClose.bind((0,r.default)(u)),u.setButtonNode=u.setButtonNode.bind((0,r.default)(u)),u.getButtonNode=u.getButtonNode.bind((0,r.default)(u)),u.setParentNode=u.setParentNode.bind((0,r.default)(u)),u.getParentNode=u.getParentNode.bind((0,r.default)(u)),u.state={open:!0},u}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return s.default.createElement("div",{id:"test-popup-area",className:y("test-popup-area"),ref:this.setParentNode},s.default.createElement(c.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"240",contentWidth:"320",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode,isHeaderDisabled:!0},s.default.createElement(p.default,null)),s.default.createElement("button",{type:"button",id:"bounded-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Bounded Popup"))}}]),n}(s.default.Component);t.default=B}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{2021:function(e,t,n){"use strict";var u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(21)),l=u(n(24)),o=u(n(31)),d=u(n(28)),i=u(n(29)),s=u(n(30)),r=u(n(0)),c=u(n(336));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(u,arguments,a)}else n=u.apply(this,arguments);return(0,i.default)(this,n)}}var m=function(e){(0,d.default)(n,e);var t=f(n);function n(e){var u;return(0,a.default)(this,n),(u=t.call(this,e)).handleButtonClick=u.handleButtonClick.bind((0,o.default)(u)),u.handleRequestClose=u.handleRequestClose.bind((0,o.default)(u)),u.setButtonNode=u.setButtonNode.bind((0,o.default)(u)),u.getButtonNode=u.getButtonNode.bind((0,o.default)(u)),u.state={open:!1},u}return(0,l.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("div",null,"This menu has a nested submenu with long Default and sub-menu title. When the Nested Menu item is clicked as submenu should replace the initial menu. There should be a header with a back button and a title of Nested Menu."),r.default.createElement(c.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose,headerTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},r.default.createElement(c.default.Item,{text:"Default 1",key:"1",className:"TestInitialMenuContent"}),r.default.createElement(c.default.Item,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",key:"2",className:"TestNestedMenu",subMenuItems:[r.default.createElement(c.default.Item,{text:"Default 2.1",key:"2.1",className:"TestNestedMenuContent"})]}),r.default.createElement(c.default.Item,{text:"Default 3",key:"3"}),r.default.createElement(c.default.Item,{text:"Default 4",key:"4"}),r.default.createElement(c.default.Item,{text:"Default 5",key:"5"})),r.default.createElement("button",{type:"button",id:"sub-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),n}(r.default.Component);t.default=m}}]);
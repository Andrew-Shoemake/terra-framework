(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{2025:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(21)),u=l(n(24)),c=l(n(31)),r=l(n(28)),i=l(n(29)),o=l(n(30)),f=l(n(0)),d=l(n(2)),s=l(n(336));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,o.default)(e);if(t){var a=(0,o.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,i.default)(this,n)}}var v={isSelectableMenu:d.default.bool},p=function(e){(0,r.default)(n,e);var t=h(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).state={isSelected:!1},l.handleSelection=l.handleSelection.bind((0,c.default)(l)),l}return(0,u.default)(n,[{key:"getChildContext",value:function(){return{isSelectableMenu:!0}}},{key:"handleSelection",value:function(e,t){this.setState({isSelected:t})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("div",{id:"isSelected"},f.default.createElement("h3",null,"Item is selected:",this.state.isSelected?"yes":"no")),f.default.createElement("ul",{role:"menu"},f.default.createElement(s.default.Item,{text:"Selectable Menu Item",key:"1",className:"TestSelectableItem",isSelectable:!0,onChange:this.handleSelection})))}}]),n}(f.default.Component);p.childContextTypes=v;var S=p;t.default=S}}]);
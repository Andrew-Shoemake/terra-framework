(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{1009:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.SlidePanelPositions=t.default=void 0;var a=l(n(17)),o=l(n(23)),i=l(n(21)),r=l(n(24)),u=l(n(31)),s=l(n(28)),d=l(n(29)),c=l(n(30)),f=l(n(0)),p=l(n(2)),m=l(n(10)),_=l(n(5)),h=l(n(7)),v=l(n(1016));function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,d.default)(this,n)}}var b=_.default.bind(v.default),y={START:"start",END:"end"};t.SlidePanelPositions=y;var g={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},S={panelBehavior:"overlay",panelPosition:y.END,panelSize:"small"},O=function(e){(0,s.default)(n,e);var t=P(n);function n(e){var l;return(0,i.default)(this,n),(l=t.call(this,e)).setPanelNode=l.setPanelNode.bind((0,u.default)(l)),l.mainNode=f.default.createRef(),l}return(0,r.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,n=e.mainAriaLabel,l=e.mainContent,i=e.panelContent,r=e.panelBehavior,u=e.panelPosition,s=e.panelSize,d=e.isFullscreen,c=e.isOpen,p=e.fill,_=(0,o.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),h=this.context,v=(0,m.default)(b("slide-panel",{"is-open":c},{"is-fullscreen":d},{fill:p},h.className),_.className),P=f.default.createElement("div",{className:b(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",ref:this.setPanelNode},i),g=f.default.createElement("div",{className:b("main"),key:"main",tabIndex:"-1","aria-label":n,ref:this.mainNode},l),S=u===y.START?f.default.createElement(f.default.Fragment,null,P,g):f.default.createElement(f.default.Fragment,null,g,P);return f.default.createElement("div",(0,a.default)({},_,{className:v,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":u,"data-slide-panel-panel-size":s}),S)}}]),n}(f.default.Component);O.propTypes=g,O.defaultProps=S,O.contextType=h.default;var N=O;t.default=N},1016:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___3PlGc","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___2R-RA","slide-panel":"SlidePanel-module__slide-panel___3p50s",main:"SlidePanel-module__main___148ym",panel:"SlidePanel-module__panel___3U_Ba","is-open":"SlidePanel-module__is-open___2oBW3","is-fullscreen":"SlidePanel-module__is-fullscreen___2b64E",fill:"SlidePanel-module__fill___1cmXh"}},1084:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___2tOmz","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___3cz5N","main-content":"SlidePanelDocCommon-test-module__main-content___2y5xj","panel-content":"SlidePanelDocCommon-test-module__panel-content___95-83","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___Lhxw2",button:"SlidePanelDocCommon-test-module__button___3sOc1"}},2082:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(21)),o=l(n(24)),i=l(n(31)),r=l(n(28)),u=l(n(29)),s=l(n(30)),d=l(n(0)),c=l(n(5)),f=l(n(1009)),p=l(n(1084));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,u.default)(this,n)}}var _=c.default.bind(p.default),h=function(e){(0,r.default)(n,e);var t=m(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).state={panelIsOpen:!1},l.handlePanelToggle=l.handlePanelToggle.bind((0,i.default)(l)),l}return(0,o.default)(n,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return d.default.createElement("div",{className:_("content-wrapper-toggle")},d.default.createElement(f.default,{id:"test-slide",mainContent:d.default.createElement("div",{className:_("main-content")},d.default.createElement("button",{type:"button",id:"test-toggle",className:_("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:d.default.createElement("div",{id:"panel-content",className:_("panel-content")},d.default.createElement("button",{id:"focus-button",type:"button",className:_("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}]),n}(d.default.Component);t.default=h}}]);
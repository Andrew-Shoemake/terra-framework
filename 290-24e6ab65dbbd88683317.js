(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1009:function(e,n,l){"use strict";var t=l(6);Object.defineProperty(n,"__esModule",{value:!0}),n.SlidePanelPositions=n.default=void 0;var a=t(l(17)),i=t(l(23)),o=t(l(21)),r=t(l(24)),s=t(l(31)),d=t(l(28)),u=t(l(29)),c=t(l(30)),p=t(l(0)),f=t(l(2)),_=t(l(10)),m=t(l(5)),h=t(l(7)),v=t(l(1016));function P(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,t=(0,c.default)(e);if(n){var a=(0,c.default)(this).constructor;l=Reflect.construct(t,arguments,a)}else l=t.apply(this,arguments);return(0,u.default)(this,l)}}var b=m.default.bind(v.default),S={START:"start",END:"end"};n.SlidePanelPositions=S;var N={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool},y={panelBehavior:"overlay",panelPosition:S.END,panelSize:"small"},O=function(e){(0,d.default)(l,e);var n=P(l);function l(e){var t;return(0,o.default)(this,l),(t=n.call(this,e)).setPanelNode=t.setPanelNode.bind((0,s.default)(t)),t.mainNode=p.default.createRef(),t}return(0,r.default)(l,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,n=e.panelAriaLabel,l=e.mainAriaLabel,t=e.mainContent,o=e.panelContent,r=e.panelBehavior,s=e.panelPosition,d=e.panelSize,u=e.isFullscreen,c=e.isOpen,f=e.fill,m=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),h=this.context,v=(0,_.default)(b("slide-panel",{"is-open":c},{"is-fullscreen":u},{fill:f},h.className),m.className),P=p.default.createElement("div",{className:b(["panel"]),key:"panel",tabIndex:"-1","aria-label":n,"aria-hidden":c?"false":"true",ref:this.setPanelNode},o),N=p.default.createElement("div",{className:b("main"),key:"main",tabIndex:"-1","aria-label":l,ref:this.mainNode},t),y=s===S.START?p.default.createElement(p.default.Fragment,null,P,N):p.default.createElement(p.default.Fragment,null,N,P);return p.default.createElement("div",(0,a.default)({},m,{className:v,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":s,"data-slide-panel-panel-size":d}),y)}}]),l}(p.default.Component);O.propTypes=N,O.defaultProps=y,O.contextType=h.default;var w=O;n.default=w},1016:function(e,n,l){"use strict";l.r(n),n.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___3PlGc","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___2R-RA","slide-panel":"SlidePanel-module__slide-panel___3p50s",main:"SlidePanel-module__main___148ym",panel:"SlidePanel-module__panel___3U_Ba","is-open":"SlidePanel-module__is-open___2oBW3","is-fullscreen":"SlidePanel-module__is-fullscreen___2b64E",fill:"SlidePanel-module__fill___1cmXh"}},1084:function(e,n,l){"use strict";l.r(n),n.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___2tOmz","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___3cz5N","main-content":"SlidePanelDocCommon-test-module__main-content___2y5xj","panel-content":"SlidePanelDocCommon-test-module__panel-content___95-83","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___Lhxw2",button:"SlidePanelDocCommon-test-module__button___3sOc1"}},2081:function(e,n,l){"use strict";var t=l(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(l(0)),i=t(l(5)),o=t(l(1009)),r=t(l(1084)),s=i.default.bind(r.default),d=function(){return a.default.createElement("div",{className:s("content-wrapper-large")},a.default.createElement(o.default,{mainContent:a.default.createElement("div",{className:s("main-content")}),panelContent:a.default.createElement("div",{className:s("panel-content")}),panelBehavior:"squish",panelSize:"large",isOpen:!0,fill:!0}))};n.default=d}}]);
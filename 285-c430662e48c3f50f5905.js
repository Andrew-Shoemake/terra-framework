(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1009:function(e,l,t){"use strict";var n=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.SlidePanelPositions=l.default=void 0;var a=n(t(17)),i=n(t(23)),u=n(t(21)),r=n(t(24)),o=n(t(31)),d=n(t(28)),m=n(t(29)),s=n(t(30)),c=n(t(0)),f=n(t(2)),p=n(t(10)),E=n(t(5)),v=n(t(7)),_=n(t(1016));function h(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,s.default)(e);if(l){var a=(0,s.default)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return(0,m.default)(this,t)}}var I=E.default.bind(_.default),P={START:"start",END:"end"};l.SlidePanelPositions=P;var b={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool},y={panelBehavior:"overlay",panelPosition:P.END,panelSize:"small"},O=function(e){(0,d.default)(t,e);var l=h(t);function t(e){var n;return(0,u.default)(this,t),(n=l.call(this,e)).setPanelNode=n.setPanelNode.bind((0,o.default)(n)),n.mainNode=c.default.createRef(),n}return(0,r.default)(t,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,l=e.panelAriaLabel,t=e.mainAriaLabel,n=e.mainContent,u=e.panelContent,r=e.panelBehavior,o=e.panelPosition,d=e.panelSize,m=e.isFullscreen,s=e.isOpen,f=e.fill,E=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),v=this.context,_=(0,p.default)(I("slide-panel",{"is-open":s},{"is-fullscreen":m},{fill:f},v.className),E.className),h=c.default.createElement("div",{className:I(["panel"]),key:"panel",tabIndex:"-1","aria-label":l,"aria-hidden":s?"false":"true",ref:this.setPanelNode},u),b=c.default.createElement("div",{className:I("main"),key:"main",tabIndex:"-1","aria-label":t,ref:this.mainNode},n),y=o===P.START?c.default.createElement(c.default.Fragment,null,h,b):c.default.createElement(c.default.Fragment,null,b,h);return c.default.createElement("div",(0,a.default)({},E,{className:_,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":o,"data-slide-panel-panel-size":d}),y)}}]),t}(c.default.Component);O.propTypes=b,O.defaultProps=y,O.contextType=v.default;var S=O;l.default=S},1016:function(e,l,t){"use strict";t.r(l),l.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___3PlGc","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___2R-RA","slide-panel":"SlidePanel-module__slide-panel___3p50s",main:"SlidePanel-module__main___148ym",panel:"SlidePanel-module__panel___3U_Ba","is-open":"SlidePanel-module__is-open___2oBW3","is-fullscreen":"SlidePanel-module__is-fullscreen___2b64E",fill:"SlidePanel-module__fill___1cmXh"}},1022:function(e,l,t){"use strict";var n=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},1023:function(e,l,t){"use strict";var n=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},1430:function(e,l,t){"use strict";var n=t(12),a=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=a(t(0)),u=n(t(1009)),r=a(t(1022)),o=a(t(1023)),d=function(){return i.default.createElement(u.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(o.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.END,panelSize:"small",isOpen:!0})};l.default=d}}]);
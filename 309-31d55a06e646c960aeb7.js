(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1102:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a),l=n(982),d=n.n(l),r=function(e){var t=e.url;return i.a.createElement(d.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-layout",name:"terra-application-layout",version:"5.51.0",url:t})}},1779:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(17),i=n.n(a),l=n(23),d=n.n(l),r=(n(0),n(333)),m=n(1102),o={};function c(e){var t=e.components,n=d()(e,["components"]);return Object(r.mdx)("wrapper",i()({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(m.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-application-layout"},"Terra Application Layout"),Object(r.mdx)("p",null,"In addition to the ApplicationLayout component, the package exports an ",Object(r.mdx)("inlineCode",{parentName:"p"},"Utils")," object that contains a variety of helper functions and prop type declarations. Included are:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"propTypes")," - An object containing prop type definitions for the configuration objects used by the ApplicationLayout."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"helpers")," - An object containing helper functions to aid in the creation of ApplicationLayout content."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"utilityHelpers")," - An object containing helper functions specifically for the creation of Utility menu configuration.")),Object(r.mdx)("h2",{id:"proptypes"},"propTypes"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"layoutConifgPropType")," - Shape for the ",Object(r.mdx)("inlineCode",{parentName:"li"},"layoutConfig")," prop provided to components within the ApplicationLayout."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"nameConfigPropType")," - Shape for ApplicationLayout's ",Object(r.mdx)("inlineCode",{parentName:"li"},"nameConfig")," prop."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"navigationItemsPropType")," - Shape for ApplicationLayout's ",Object(r.mdx)("inlineCode",{parentName:"li"},"navigationItems")," prop."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"utilityConfigPropType")," - Shape for ApplicationLayout's ",Object(r.mdx)("inlineCode",{parentName:"li"},"utilityConfig")," prop.")),Object(r.mdx)("h2",{id:"helpers"},"helpers"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"isSizeCompact")," - A function that determines whether or not the given size is considered ",Object(r.mdx)("inlineCode",{parentName:"li"},"compact")," or not. This can be used to synchronize component rendering with responsive changes to the ApplicationLayout.")),Object(r.mdx)("h3",{id:"utilityhelpers"},"utilityHelpers"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"getDefaultUtilityItems"))),Object(r.mdx)("p",null,"A function that generates an array containing the Terra-standard set of utility menu items. This array and its contents match the ",Object(r.mdx)("inlineCode",{parentName:"p"},"menuItems")," prop expected by ",Object(r.mdx)("inlineCode",{parentName:"p"},"terra-utility")," components and can be provided to them directly."),Object(r.mdx)("p",null,"An ",Object(r.mdx)("inlineCode",{parentName:"p"},"intl")," parameter is required to generate the items, as the translated titles for the default configuration must be retrieved from it. Also required is an object containing user information, as the default menu configuration is user-centric. Finally, additional menu configuration items can be provided to be merged with the default items."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"defaultKeys")," - The set of menu item keys used by the default utility configuration. Values from this object should be used inside custom item configurations as ",Object(r.mdx)("inlineCode",{parentName:"li"},"parentKey")," values to appropriately locate the custom items. When selected, selectable items will trigger the ",Object(r.mdx)("inlineCode",{parentName:"li"},"utilityConfig"),"'s ",Object(r.mdx)("inlineCode",{parentName:"li"},"onChange")," function with their associated item key.")),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:null},"Keys"),Object(r.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"MENU")),Object(r.mdx)("td",{parentName:"tr",align:null},"Menu page with ",Object(r.mdx)("inlineCode",{parentName:"td"},"USER_INFORMATION"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"SETTINGS"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"HELP"),", and ",Object(r.mdx)("inlineCode",{parentName:"td"},"LOG_OUT")," as child items.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"USER_INFORMATION")),Object(r.mdx)("td",{parentName:"tr",align:null},"Menu page with a ",Object(r.mdx)("inlineCode",{parentName:"td"},"CHANGE_PHOTO")," child item.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"CHANGE_PHOTO")),Object(r.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"SETTINGS")),Object(r.mdx)("td",{parentName:"tr",align:null},"Menu page with ",Object(r.mdx)("inlineCode",{parentName:"td"},"APPEARANCE")," and ",Object(r.mdx)("inlineCode",{parentName:"td"},"SECURITY")," child items.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"APPEARANCE")),Object(r.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"SECURITY")),Object(r.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"HELP")),Object(r.mdx)("td",{parentName:"tr",align:null},"Menu page with ",Object(r.mdx)("inlineCode",{parentName:"td"},"GETTING_STARTED"),", ",Object(r.mdx)("inlineCode",{parentName:"td"},"ABOUT"),", and ",Object(r.mdx)("inlineCode",{parentName:"td"},"TERMS_OF_USE")," child items.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"GETTING_STARTED")),Object(r.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"ABOUT")),Object(r.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"TERMS_OF_USE")),Object(r.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:null},Object(r.mdx)("inlineCode",{parentName:"td"},"LOG_OUT")),Object(r.mdx)("td",{parentName:"tr",align:null},"Selectable item.")))),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { Utils } from 'terra-application-layout';\nimport Avatar from 'terra-avatar';\n\nconst intl = {}; // Intl should be retrieved from context\n\nconst userData = {\n  name: 'Person, Joe',\n  detail: 'Example Person',\n  photo: <Avatar alt=\"Doe, John\"/>,\n};\n\nconst customUtilityItems = [{\n  key: 'additional-1',\n  title: 'Drill-in Item',\n  childKeys: [\n    'additional-sub-1',\n    'additional-sub-2',\n  ],\n  parentKey: Utils.utilityHelpers.defaultKeys.MENU,\n}, {\n  key: 'additional-sub-1',\n  title: 'Addtional Item 1 - Sub 1',\n  parentKey: 'additional-1',\n}, {\n  key: 'additional-sub-2',\n  title: 'Addtional Item 1 - Sub 2',\n  parentKey: 'additional-1',\n}, {\n  key: 'additional-2',\n  title: 'Custom Checkbox Item',\n  isSelectable: true,\n  parentKey: Utils.utilityHelpers.defaultKeys.MENU,\n}, {\n  key: 'additional-3',\n  contentLocation: Utils.utilityHelpers.locations.FOOTER,\n  title: 'Custom Footer',\n  parentKey: Utils.utilityHelpers.defaultKeys.MENU,\n}];\n\nconst menuItems = Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems);\n\nconst utilityConfig = {\n  title: 'Doe, John',\n  accessory: <Avatar alt=\"Doe, John\" />,\n  menuItems: menuItems,\n  initialSelectedKey: 'menu',\n  onChange: (event, itemData, disclose) => {\n    /**\n     * This function will be called when items are selected within the utility menu.\n     * The disclose parameter is provided for convenience, but any presentation method\n     * could be used to handle that menu content selection.\n     */\n  },\n};\n")))}c.isMDXComponent=!0},982:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(2)),l=r(n(5)),d=r(n(983));function r(e){return e&&e.__esModule?e:{default:e}}var m=l.default.bind(d.default),o={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var t=e.src,n=e.name,i=e.url,l=e.version,d=a.default.createElement("a",{className:m("badge"),href:i||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:m("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:m("badge-version")},"v".concat(l))),r=t?a.default.createElement("a",{className:m("badge"),href:t},a.default.createElement("span",{className:m("badge-name")},"github"),a.default.createElement("span",{className:m("badge-version")},"source")):void 0;return a.default.createElement("div",{className:m("badge-container")},d,r)};c.propTypes=o;var p=c;t.default=p},983:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);
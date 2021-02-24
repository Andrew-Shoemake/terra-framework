(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1156:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var r=n(0),t=n.n(r),o=n(982),s=n.n(o),d=function(e){var a=e.url;return t.a.createElement(s.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-modal-manager",name:"terra-modal-manager",version:"6.49.0",url:a})}},1801:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return i}));var r=n(17),t=n.n(r),o=n(23),s=n.n(o),d=(n(0),n(333)),c=n(1156),l={};function i(e){var a=e.components,n=s()(e,["components"]);return Object(d.mdx)("wrapper",t()({},l,n,{components:a,mdxType:"MDXLayout"}),Object(d.mdx)(c.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"terra-modal-manager---upgrade-guide"},"Terra Modal Manager - Upgrade Guide"),Object(d.mdx)("h2",{id:"upgrading-from-v3x-to-v4x"},"Upgrading from v3.x to v4.x"),Object(d.mdx)("p",null,"With the release of terra-disclosure-manager v3.x, the ModalManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. "),Object(d.mdx)("p",null,"The below example code details the changes necessary to interact with terra-modal-manager v4.x."),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-diff"},"/**\n * v3.x to v4.x\n */\n import Base from 'terra-base';\n import ModalManager from 'terra-modal-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Modal\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <ModalManager>\n       <MyComponent />\n     </ModalManager>\n   </Base>\n );\n")))}i.isMDXComponent=!0},982:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=d(n(0)),t=d(n(2)),o=d(n(5)),s=d(n(983));function d(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(s.default),l={name:t.default.string.isRequired,src:t.default.string,url:t.default.string,version:t.default.string.isRequired},i=function(e){var a=e.src,n=e.name,t=e.url,o=e.version,s=r.default.createElement("a",{className:c("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:c("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(o))),d=a?r.default.createElement("a",{className:c("badge"),href:a},r.default.createElement("span",{className:c("badge-name")},"github"),r.default.createElement("span",{className:c("badge-version")},"source")):void 0;return r.default.createElement("div",{className:c("badge-container")},s,d)};i.propTypes=l;var p=i;a.default=p},983:function(e,a,n){"use strict";n.r(a),a.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);
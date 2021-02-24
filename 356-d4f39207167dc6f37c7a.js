(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1158:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),i=a.n(n),o=a(982),r=a.n(o),d=function(e){var t=e.url;return i.a.createElement(r.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-notification-dialog",name:"terra-notification-dialog",version:"4.10.0",url:t})}},1803:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(17),i=a.n(n),o=a(23),r=a.n(o),d=(a(0),a(333)),l=a(1158),c={};function m(e){var t=e.components,a=r()(e,["components"]);return Object(d.mdx)("wrapper",i()({},c,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(l.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"terra-notification-dialog-upgrade-guide"},"Terra Notification Dialog Upgrade Guide"),Object(d.mdx)("h2",{id:"upgrading-from-version-3-to-version-4"},"Upgrading from version 3 to version 4"),Object(d.mdx)("p",null,"The latest changes to the Notification Dialog reflect risk vs non-risk situations on when a dialog is presented and we have changed the variants provided by the Notification Dialog to reflect these. To align with standards, the ability to change the header and dialog icon is no longer available for the defined variant types. The ",Object(d.mdx)("inlineCode",{parentName:"p"},"custom")," variant will need to be used if the predefined signal word and icon combination for a variant does not meet your needs."),Object(d.mdx)("h3",{id:"new-props"},"New Props"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Added ",Object(d.mdx)("inlineCode",{parentName:"li"},"dialogTitle")," prop"),Object(d.mdx)("li",{parentName:"ul"},"Added ",Object(d.mdx)("inlineCode",{parentName:"li"},"custom")," prop which accepts an object of keys",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"signalWord")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"iconClassName"))))),Object(d.mdx)("h3",{id:"changed-props"},"Changed Props"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"variant")," prop is now required and the supported values have changes. The previous variants were ",Object(d.mdx)("inlineCode",{parentName:"li"},"alert"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"warning"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"error"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"success"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"info"),", and ",Object(d.mdx)("inlineCode",{parentName:"li"},"custom"),". The new variants are ",Object(d.mdx)("inlineCode",{parentName:"li"},"hazard-high"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"hazard-medium"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"hazard-low"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"error"),", and ",Object(d.mdx)("inlineCode",{parentName:"li"},"custom"),". The mappings from the v3 variants to the v4 variants are as follows:",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"alert")," -> ",Object(d.mdx)("inlineCode",{parentName:"li"},"hazard-high")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"warning")," -> ",Object(d.mdx)("inlineCode",{parentName:"li"},"hazard-medium")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"info")," -> ",Object(d.mdx)("inlineCode",{parentName:"li"},"hazard-low")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"error")," and ",Object(d.mdx)("inlineCode",{parentName:"li"},"custom")," - these are the same."),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"success")," - this variant has been removed.")))),Object(d.mdx)("h3",{id:"removed-props"},"Removed Props"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Removed ",Object(d.mdx)("inlineCode",{parentName:"li"},"title")," - use ",Object(d.mdx)("inlineCode",{parentName:"li"},"dialogTitle")," prop instead"),Object(d.mdx)("li",{parentName:"ul"},"Removed ",Object(d.mdx)("inlineCode",{parentName:"li"},"header")," - create a custom notification dialog if a custom signal word is needed"),Object(d.mdx)("li",{parentName:"ul"},"Removed ",Object(d.mdx)("inlineCode",{parentName:"li"},"customIcon")," - use ",Object(d.mdx)("inlineCode",{parentName:"li"},"custom.iconClassName")," prop instead"),Object(d.mdx)("li",{parentName:"ul"},"Removed ",Object(d.mdx)("inlineCode",{parentName:"li"},"primaryAction")," - use ",Object(d.mdx)("inlineCode",{parentName:"li"},"acceptAction")," prop instead"),Object(d.mdx)("li",{parentName:"ul"},"Removed ",Object(d.mdx)("inlineCode",{parentName:"li"},"secondaryAction")," - use ",Object(d.mdx)("inlineCode",{parentName:"li"},"acceptAction")," prop instead"),Object(d.mdx)("li",{parentName:"ul"},"Removed ",Object(d.mdx)("inlineCode",{parentName:"li"},"message")," - use ",Object(d.mdx)("inlineCode",{parentName:"li"},"startMessage")," prop instead"),Object(d.mdx)("li",{parentName:"ul"},"Removed ",Object(d.mdx)("inlineCode",{parentName:"li"},"isOpen")," - render NotificationDialog when it should be open")),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-diff"},"import NotificationDialog from 'terra-notification-dialog';\n\nconst Dialog = () => {\n  const [showDialog, setShowDialog] = React.useState(true);\n\n  return (\n+   {showDialog && <NotificationDialog\n-   <NotificationDialog\n-     isOpen\n      variant=\"error\"\n..\n")),Object(d.mdx)("h3",{id:"removed-notificationdialogvariants-export"},"Removed NotificationDialogVariants Export"),Object(d.mdx)("p",null,"The NotificationDialogVariants export was removed. Use the variant string instead."),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-diff"},"- import NotificationDialog, { NotificationDialogVariants } from 'terra-notification-dialog';\n+ import NotificationDialog from 'terra-notification-dialog';\n\nconst Dialog = () => {\n  return (\n    <NotificationDialog\n-     variant={NotificationDialogVariants.ERROR}\n+     variant=\"error\"\n..\n")),Object(d.mdx)("h3",{id:"changes-to-creating-custom-dialogs"},"Changes to Creating Custom Dialogs"),Object(d.mdx)("p",null,"Use the prop ",Object(d.mdx)("inlineCode",{parentName:"p"},"custom")," to create a custom Notification Dialog and provided"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"a keyword to the ",Object(d.mdx)("inlineCode",{parentName:"li"},"signalWord")," prop - previously referenced as header prop"),Object(d.mdx)("li",{parentName:"ul"},"a icon as a background-image style via the ",Object(d.mdx)("inlineCode",{parentName:"li"},"iconClassName")," prop - previously provided as a React component using customIcon prop")),Object(d.mdx)("p",null,"Not providing these pieces will render a Custom Notification dialog with space allocated for the missing pieces."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Note:")," by choosing to create a custom Notification Dialog, you are responsible for providing an icon that is themed correctly in the terra-default-theme, orion-fusion-theme and in the clinical-lowlight-theme. See Terra's ",Object(d.mdx)("a",{parentName:"p",href:"/terra-framework/guides/terra-application/theme-strategy"},"Theme Strategy Guide")," for more information."),Object(d.mdx)("h4",{id:"componentjsx"},"Component.jsx"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-diff"},"  import NotificationDialog from 'terra-notification-dialog';\n- import MyIcon from './MyIcon';\n+ import ThemeContext from 'terra-theme-context';\n+ import classnamesBind from 'classnames/bind';\n\n+ import styles from './Component.module.scss';\n+ cx = classnamesBind.bind(styles);\n\nconst Dialog = () => {\n+ const theme = React.useContext(ThemeContext);\n\n  return (\n    <NotificationDialog\n      variant=\"custom\"\n-     header=\"Issue\"\n-     customIcon={<MyIcon />}\n+     custom={{\n+       signalWord: 'Issue',\n+       iconClassName: cx('my-icon', theme.className)\n+     }}\n      dialogTitle=\"There was an issue when you saved.\"\n      startMessage=\"Please resumbit the form to save your progress.\"\n      acceptAction={{\n        text: 'OK',\n        onClick: handleCloseModal,\n      }}\n    />\n  );\n };\n")),Object(d.mdx)("h4",{id:"componentmodulescss"},"Component.module.scss"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-diff"},"+ @import '~terra-mixins/lib/Mixins';\n\n:local {\n+  .my-icon { \n+    background: var(--example-custom-icon-background, inline-svg(\"...\"));\n+  }\n\n+  .orion-fusion-theme {\n+    @include terra-inline-svg-var('--example-custom-icon-background', \"...\");\n+  }\n\n+  .clinical-lowlight-theme {\n+    @include terra-inline-svg-var('--example-custom-icon-background', \"...\");\n+  }\n}\n")),Object(d.mdx)("h3",{id:"added-layout-for-rendering-lists-with-content-prop"},"Added Layout for Rendering Lists with content Prop"),Object(d.mdx)("p",null,"The Notification Dialog provides has added the ",Object(d.mdx)("inlineCode",{parentName:"p"},"ContentLayoutAsList")," layout component to be used with the ",Object(d.mdx)("inlineCode",{parentName:"p"},"content")," prop. This layout renders a list of strings with styles that align with the Notification Dialog. Usage like:"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-diff"},"- import NotificationDialog from 'terra-notification-dialog';\n+ import NotificationDialog, { ContentLayoutAsList } from 'terra-notification-dialog';\n\nconst Dialog = () => (\n  <NotificationDialog\n    variant=\"hazard-low\"\n    dialogTitle=\"Medical Dose Not Selected\"\n    startMessage=\"There are multiple dose options:\"\n-   content={() => {\n-     <ul>\n-       <li key='hazard-low-1'>200 mg every 3 hours</li>\n-       <li key='hazard-low-2'>400 mg ever 6 hours</li>\n-     </ul>\n-   }}\n+   content={(\n+     <ContentLayoutAsList\n+        items={['200 mg every 3 hours', '400 mg ever 6 hours']}\n+     />\n+   )}\n    endMessage=\"Please specify the dose and frequency to order the medication.\"\n    acceptAction={{\n      text: 'OK',\n      onClick: handleCloseModal,\n    }}\n  />\n);\n")),Object(d.mdx)("h3",{id:"added-data-attributes-for-testing"},"Added Data Attributes for Testing"),Object(d.mdx)("p",null,"The data attribute, ",Object(d.mdx)("inlineCode",{parentName:"p"},"data-terra-notification-dialog"),", was added to assist with validating the Notification Dialog was presented. This can be used like:"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-diff"},"  it('opens a notification dialog', () => {\n    browser.click('#triggerNotificationDialog');\n-   expect(browser.isExisting('[class*=\"notification-dialog\"]')).to.be.true;\n-   expect(browser.hasFocus('[class*=\"notification-dialog\"]')).to.be.true;\n+   expect(browser.isExisting('[data-terra-notification-dialog]')).to.be.true;\n+   expect(browser.hasFocus('[data-terra-notification-dialog]')).to.be.true;\n    Terra.validates.element();\n  });\n")),Object(d.mdx)("p",null,"The data attribute, ",Object(d.mdx)("inlineCode",{parentName:"p"},"data-terra-notification-dialog-button")," was added to assist with selecting the accept and reject buttons when writing browser tests:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"use ",Object(d.mdx)("inlineCode",{parentName:"li"},'data-terra-notification-dialog-button="accept"')," to select the accept button"),Object(d.mdx)("li",{parentName:"ul"},"use ",Object(d.mdx)("inlineCode",{parentName:"li"},'data-terra-notification-dialog-button="reject"')," to select the reject button")),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-diff"},"  it('rejects the notification dialog', () => {\n-   browser.click('[class*=\"notification-dialog-inner-wrapper\"] button:last-child');\n+   browser.click('[data-terra-notification-dialog-button=\"reject\"]');\n    Terra.validates.element('rejected', { selector: '#root' });\n  });\n")),Object(d.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),Object(d.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(d.mdx)("h4",{id:"renamed"},"Renamed"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Previous"),Object(d.mdx)("th",{parentName:"tr",align:null},"New"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-background"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-background")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-border-radius"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-border-radius")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-small-horizontal-inset"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-small-horizontal-inset")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-body-background-color"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-body-background-color")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-body-padding"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-body-padding")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-header-background-color"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-header-background-color")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-header-border-bottom"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-header-border-bottom")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-header-font-size"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-header-font-size")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-header-padding"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-header-padding")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-footer-background-color"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-footer-background-color")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-footer-border-top"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-footer-border-top")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--notification-dialog-footer-font-size"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-footer-font-size")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-alert-icon"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-alert-icon-background")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-medium-icon"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-medium-icon-background")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-low-icon"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-hazard-low-icon-background")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-success-icon"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-success-icon-background")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-error-icon"),Object(d.mdx)("td",{parentName:"tr",align:null},"--terra-notification-dialog-error-icon-background")))),Object(d.mdx)("h4",{id:"added"},"Added"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"--terra-notification-dialog-icon-height"),Object(d.mdx)("li",{parentName:"ul"},"--terra-notification-dialog-icon-width")))}m.isMDXComponent=!0},982:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),i=d(a(2)),o=d(a(5)),r=d(a(983));function d(e){return e&&e.__esModule?e:{default:e}}var l=o.default.bind(r.default),c={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},m=function(e){var t=e.src,a=e.name,i=e.url,o=e.version,r=n.default.createElement("a",{className:l("badge"),href:i||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},n.default.createElement("span",{className:l("badge-name")},i?"package":"npm"),n.default.createElement("span",{className:l("badge-version")},"v".concat(o))),d=t?n.default.createElement("a",{className:l("badge"),href:t},n.default.createElement("span",{className:l("badge-name")},"github"),n.default.createElement("span",{className:l("badge-version")},"source")):void 0;return n.default.createElement("div",{className:l("badge-container")},r,d)};m.propTypes=c;var s=m;t.default=s},983:function(e,t,a){"use strict";a.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);
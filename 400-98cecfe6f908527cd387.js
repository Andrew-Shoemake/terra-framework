(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t(0),l=t.n(o),a=t(982),i=t.n(a),r=function(e){var n=e.url;return l.a.createElement(i.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-collapsible-menu-view",name:"terra-collapsible-menu-view",version:"6.49.0",url:n})}},1531:function(e,n,t){"use strict";var o=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=o(t(21)),a=o(t(24)),i=o(t(31)),r=o(t(28)),u=o(t(29)),s=o(t(30)),p=o(t(0)),c=o(t(1187)),d=o(t(1188)),m=o(t(1189)),f=o(t(1121)),b=o(t(1086)),y=o(t(1073)),x=o(t(1072)),h=o(t(1061));function w(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=(0,s.default)(e);if(n){var l=(0,s.default)(this).constructor;t=Reflect.construct(o,arguments,l)}else t=o.apply(this,arguments);return(0,u.default)(this,t)}}var O=function(e){(0,r.default)(t,e);var n=w(t);function t(e){var o;return(0,l.default)(this,t),(o=n.call(this,e)).handleDisplayTypeChange=o.handleDisplayTypeChange.bind((0,i.default)(o)),o.handleToggleOneOnChange=o.handleToggleOneOnChange.bind((0,i.default)(o)),o.handleToggleTwoOnChange=o.handleToggleTwoOnChange.bind((0,i.default)(o)),o.state={toggle1Selection:!1,toggle2Selection:!1,displayType:"tableView"},o}return(0,a.default)(t,[{key:"handleToggleOneOnChange",value:function(e,n){this.setState({toggle1Selection:n})}},{key:"handleToggleTwoOnChange",value:function(e,n){this.setState({toggle2Selection:n})}},{key:"handleDisplayTypeChange",value:function(e,n){this.setState({displayType:n})}},{key:"render",value:function(){return p.default.createElement(h.default,null,p.default.createElement(h.default.Toggle,{text:"Toggle Item 1",key:"toggle1",shouldCloseOnClick:!1,onChange:this.handleToggleOneOnChange,isSelected:this.state.toggle1Selection,isSelectable:!1}),p.default.createElement(h.default.Toggle,{text:"Toggle Item 2",key:"toggle2",shouldCloseOnClick:!1,onChange:this.handleToggleTwoOnChange,isSelected:this.state.toggle2Selection,isDisabled:!0}),p.default.createElement(h.default.Divider,{key:"Divider1"}),p.default.createElement(h.default.Item,{text:"Menu Button 1",key:"MenuButton1",shouldCloseOnClick:!1,subMenuItems:[p.default.createElement(h.default.Item,{text:"Default Item 1",key:"defaultItem1"}),p.default.createElement(h.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),p.default.createElement(h.default.Item,{text:"Menu Button 2",key:"MenuButton 2",isDisabled:!0,shouldCloseOnClick:!1,subMenuItems:[p.default.createElement(h.default.Item,{text:"Default Item 1",key:"defaultItem1"}),p.default.createElement(h.default.Item,{text:"Default Item 2",key:"defaultItem2",isDisabled:!0})]}),p.default.createElement(h.default.Divider,{key:"Divider2"}),p.default.createElement(h.default.ItemGroup,{key:"ViewTypeSelection",selectedKeys:[this.state.displayType],onChange:this.handleDisplayTypeChange},p.default.createElement(h.default.Item,{icon:p.default.createElement(c.default,null),text:"Table View",key:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"tableView"===this.state.displayType}),p.default.createElement(h.default.Item,{icon:p.default.createElement(d.default,null),text:"Expanded View",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"expandedView"===this.state.displayType}),p.default.createElement(h.default.Item,{icon:p.default.createElement(m.default,null),text:"Trending View",key:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"trendingView"===this.state.displayType,isDisabled:!0})),p.default.createElement(h.default.Divider,{key:"Divider3"}),p.default.createElement(h.default.Item,{icon:p.default.createElement(f.default,null),text:"Send Message",key:"send",isIconOnly:!0}),p.default.createElement(h.default.ItemGroup,{key:"messageActionGroup"},p.default.createElement(h.default.Item,{icon:p.default.createElement(b.default,null),text:"Print Message",key:"print",isIconOnly:!0}),p.default.createElement(h.default.Item,{icon:p.default.createElement(y.default,null),text:"Move Message to Folder...",key:"move",isIconOnly:!0,isDisabled:!0}),p.default.createElement(h.default.Item,{icon:p.default.createElement(x.default,null),text:"Trash Message",key:"trash",isIconOnly:!0})),p.default.createElement(h.default.Divider,{key:"Divider4"}),p.default.createElement(h.default.Item,{text:"Button 1",key:"button1"}),p.default.createElement(h.default.Item,{text:"Button 2",key:"button2",isDisabled:!0}),p.default.createElement(h.default.Item,{text:"Button 3",key:"button3"}),p.default.createElement(h.default.Item,{text:"Button 4",key:"button4"}))}}]),t}(p.default.Component);n.default=O},1546:function(e,n,t){"use strict";var o=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=o(t(21)),a=o(t(24)),i=o(t(31)),r=o(t(28)),u=o(t(29)),s=o(t(30)),p=o(t(0)),c=o(t(1187)),d=o(t(1188)),m=o(t(1189)),f=o(t(1061));function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=(0,s.default)(e);if(n){var l=(0,s.default)(this).constructor;t=Reflect.construct(o,arguments,l)}else t=o.apply(this,arguments);return(0,u.default)(this,t)}}var y=function(e){(0,r.default)(t,e);var n=b(t);function t(e){var o;return(0,l.default)(this,t),(o=n.call(this,e)).handleDisplayTypeChange=o.handleDisplayTypeChange.bind((0,i.default)(o)),o.state={displayType:"tableView"},o}return(0,a.default)(t,[{key:"handleDisplayTypeChange",value:function(e,n){this.setState({displayType:n})}},{key:"render",value:function(){return p.default.createElement(f.default,{alwaysCollapsedMenuItems:[p.default.createElement(f.default.Item,{text:"Always Collapsed Button 1",key:"collapsedButton1"}),p.default.createElement(f.default.Item,{text:"Always Collapsed Button 2",key:"collapsedButton2"}),p.default.createElement(f.default.Item,{text:"Always Collapsed Button 3",key:"collapsedButton3"})]},p.default.createElement(f.default.Item,{text:"Collapsible Button 1",key:"button1"}),p.default.createElement(f.default.Item,{text:"Collapsible Button 2",key:"button2"}),p.default.createElement(f.default.Divider,{key:"divider1"}),p.default.createElement(f.default.ItemGroup,{key:"ViewTypeSelection",selectedKeys:[this.state.displayType],onChange:this.handleDisplayTypeChange},p.default.createElement(f.default.Item,{icon:p.default.createElement(c.default,null),text:"Table View",key:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"tableView"===this.state.displayType}),p.default.createElement(f.default.Item,{icon:p.default.createElement(d.default,null),text:"Expanded View",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"expandedView"===this.state.displayType}),p.default.createElement(f.default.Item,{icon:p.default.createElement(m.default,null),text:"Trending View",key:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"trendingView"===this.state.displayType})))}}]),t}(p.default.Component);n.default=y},2149:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var o=t(17),l=t.n(o),a=t(23),i=t.n(a),r=t(0),u=t.n(r),s=t(333),p=t(1142),c=t(993),d=t.n(c),m=function(){return Object(s.mdx)(d.a,{rows:[{name:"children",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Item/ItemGroup/Divider elements to display in the view. Items that will fit in the space available will\ndisplay face-up the remainder will be rolled into a menu"))}return n.isMDXComponent=!0,n({})}},{name:"menuWidth",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"enum"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "160",\n "240",\n "320",\n "640",\n "960",\n "1280",\n "1760",\n "auto"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"A string representation of the width in px, limited to:\n160, 240, 320, 640, 960, 1280, 1760, or auto"))}return n.isMDXComponent=!0,n({})}},{name:"boundingRef",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Bounding container for the menu, will use window if no value provided."))}return n.isMDXComponent=!0,n({})}},{name:"alwaysCollapsedMenuItems",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"arrayOf"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "element"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"[]",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Puts items under the collapsed (more) menu. More button will be always shown if at least one item is populated here."))}return n.isMDXComponent=!0,n({})}}]})},f=function(){return Object(s.mdx)(d.a,{rows:[{name:"text",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Sets the item's text"))}return n.isMDXComponent=!0,n({})}},{name:"boundingRef",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Bounding container for the menu, will use window if no value provided."))}return n.isMDXComponent=!0,n({})}},{name:"icon",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"An optional icon. Nested inline with the text when provided"))}return n.isMDXComponent=!0,n({})}},{name:"isIconOnly",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Indicates if only the icon should display when item is face-up. (Text should still be given to be displayed when item is in the menu)"))}return n.isMDXComponent=!0,n({})}},{name:"isReversed",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Reverses the position of the icon and text"))}return n.isMDXComponent=!0,n({})}},{name:"isSelected",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Indicates if the item start as selected when placed in a button group"))}return n.isMDXComponent=!0,n({})}},{name:"isDisabled",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Indicates if the item should be disabled."))}return n.isMDXComponent=!0,n({})}},{name:"shouldCloseOnClick",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"true",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Indicates that clicking on this item while displayed inside a menu should close the menu."))}return n.isMDXComponent=!0,n({})}},{name:"subMenuItems",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"arrayOf"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "element"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"List of Menu.Items to display in a submenu when this item is selected."))}return n.isMDXComponent=!0,n({})}},{name:"onClick",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Callback function for when the item is clicked"))}return n.isMDXComponent=!0,n({})}},{name:"menuWidth",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"enum"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "160",\n "240",\n "320",\n "640",\n "960",\n "1280",\n "1760",\n "auto"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"A string representation of the width in px, limited to:\n160, 240, 320, 640, 960, 1280, 1760, or auto"))}return n.isMDXComponent=!0,n({})}}]})},b=function(){return Object(s.mdx)(d.a,{rows:[{name:"onChange",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Callback function that is called when the group's selection state changes"))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"CollapsibleMenuView.Items to be grouped together"))}return n.isMDXComponent=!0,n({})}},{name:"selectedKeys",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"arrayOf"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": "string"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"[]",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"A list of keys of the CollapsibleMenuView.Items that should be selected."))}return n.isMDXComponent=!0,n({})}}]})},y=function(){return Object(s.mdx)(d.a,{rows:[{name:"text",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Sets the item's text"))}return n.isMDXComponent=!0,n({})}},{name:"isSelected",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Indicates if the item is selected."))}return n.isMDXComponent=!0,n({})}},{name:"onChange",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Callback function for when selection state changes. Is called with event and isSelected parameters"))}return n.isMDXComponent=!0,n({})}},{name:"isSelectable",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"true",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Indicates that the toggle should be selectable"))}return n.isMDXComponent=!0,n({})}},{name:"isDisabled",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Indicates if the toggle should be disabled."))}return n.isMDXComponent=!0,n({})}},{name:"shouldCloseOnClick",type:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"true",description:function(){var e={};function n(n){var t=n.components,o=i()(n,["components"]);return Object(s.mdx)("wrapper",l()({},e,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"Indicates that clicking on this item while displayed inside a menu should close the menu"))}return n.isMDXComponent=!0,n({})}}]})},x=t(1531),h=t.n(x),w={};function O(e){var n=e.components,t=i()(e,["components"]);return Object(s.mdx)("wrapper",l()({},w,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconTable from \'terra-icon/lib/icon/IconTable\';\nimport IconFlowsheet from \'terra-icon/lib/icon/IconFlowsheet\';\nimport IconVisualization from \'terra-icon/lib/icon/IconVisualization\';\nimport IconSend from \'terra-icon/lib/icon/IconSend\';\nimport IconPrinter from \'terra-icon/lib/icon/IconPrinter\';\nimport IconFolder from \'terra-icon/lib/icon/IconFolder\';\nimport IconTrash from \'terra-icon/lib/icon/IconTrash\';\nimport CollapsibleMenuView from \'terra-collapsible-menu-view\';\n\nclass CollapsibleMenuViewDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleDisplayTypeChange = this.handleDisplayTypeChange.bind(this);\n    this.handleToggleOneOnChange = this.handleToggleOneOnChange.bind(this);\n    this.handleToggleTwoOnChange = this.handleToggleTwoOnChange.bind(this);\n    this.state = {\n      toggle1Selection: false,\n      toggle2Selection: false,\n      displayType: \'tableView\',\n    };\n  }\n\n  handleToggleOneOnChange(event, isSelected) {\n    this.setState({ toggle1Selection: isSelected });\n  }\n\n  handleToggleTwoOnChange(event, isSelected) {\n    this.setState({ toggle2Selection: isSelected });\n  }\n\n  handleDisplayTypeChange(event, selectedKey) {\n    this.setState({ displayType: selectedKey });\n  }\n\n  render() {\n    return (\n      <CollapsibleMenuView>\n        <CollapsibleMenuView.Toggle\n          text="Toggle Item 1"\n          key="toggle1"\n          shouldCloseOnClick={false}\n          onChange={this.handleToggleOneOnChange}\n          isSelected={this.state.toggle1Selection}\n          isSelectable={false}\n        />\n        <CollapsibleMenuView.Toggle\n          text="Toggle Item 2"\n          key="toggle2"\n          shouldCloseOnClick={false}\n          onChange={this.handleToggleTwoOnChange}\n          isSelected={this.state.toggle2Selection}\n          isDisabled\n        />\n        <CollapsibleMenuView.Divider key="Divider1" />\n        <CollapsibleMenuView.Item\n          text="Menu Button 1"\n          key="MenuButton1"\n          shouldCloseOnClick={false}\n          subMenuItems={[\n            <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,\n            <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,\n          ]}\n        />\n        <CollapsibleMenuView.Item\n          text="Menu Button 2"\n          key="MenuButton 2"\n          isDisabled\n          shouldCloseOnClick={false}\n          subMenuItems={[\n            <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,\n            <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" isDisabled />,\n          ]}\n        />\n        <CollapsibleMenuView.Divider key="Divider2" />\n        <CollapsibleMenuView.ItemGroup key="ViewTypeSelection" selectedKeys={[this.state.displayType]} onChange={this.handleDisplayTypeChange}>\n          <CollapsibleMenuView.Item\n            icon={<IconTable />}\n            text="Table View"\n            key="tableView"\n            isIconOnly\n            shouldCloseOnClick={false}\n            isSelected={this.state.displayType === \'tableView\'}\n          />\n          <CollapsibleMenuView.Item\n            icon={<IconFlowsheet />}\n            text="Expanded View"\n            key="expandedView"\n            isIconOnly\n            shouldCloseOnClick={false}\n            isSelected={this.state.displayType === \'expandedView\'}\n          />\n          <CollapsibleMenuView.Item\n            icon={<IconVisualization />}\n            text="Trending View"\n            key="trendingView"\n            isIconOnly\n            shouldCloseOnClick={false}\n            isSelected={this.state.displayType === \'trendingView\'}\n            isDisabled\n          />\n        </CollapsibleMenuView.ItemGroup>\n        <CollapsibleMenuView.Divider key="Divider3" />\n        <CollapsibleMenuView.Item icon={<IconSend />} text="Send Message" key="send" isIconOnly />\n        <CollapsibleMenuView.ItemGroup key="messageActionGroup">\n          <CollapsibleMenuView.Item icon={<IconPrinter />} text="Print Message" key="print" isIconOnly />\n          <CollapsibleMenuView.Item icon={<IconFolder />} text="Move Message to Folder..." key="move" isIconOnly isDisabled />\n          <CollapsibleMenuView.Item icon={<IconTrash />} text="Trash Message" key="trash" isIconOnly />\n        </CollapsibleMenuView.ItemGroup>\n        <CollapsibleMenuView.Divider key="Divider4" />\n        <CollapsibleMenuView.Item text="Button 1" key="button1" />\n        <CollapsibleMenuView.Item text="Button 2" key="button2" isDisabled />\n        <CollapsibleMenuView.Item text="Button 3" key="button3" />\n        <CollapsibleMenuView.Item text="Button 4" key="button4" />\n      </CollapsibleMenuView>\n    );\n  }\n}\n\nexport default CollapsibleMenuViewDemo;\n\n')))}O.isMDXComponent=!0;var C=t(984),g=t.n(C),M=function(e){var n=e.title,t=e.description,o=e.isExpanded;return u.a.createElement(g.a,{title:n||"Collapsible Menu View Demo",description:t,example:u.a.createElement(h.a,null),exampleSrc:u.a.createElement(O,null),isExpanded:o})},v=t(1546),j=t.n(v),I={};function D(e){var n=e.components,t=i()(e,["components"]);return Object(s.mdx)("wrapper",l()({},I,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconTable from \'terra-icon/lib/icon/IconTable\';\nimport IconFlowsheet from \'terra-icon/lib/icon/IconFlowsheet\';\nimport IconVisualization from \'terra-icon/lib/icon/IconVisualization\';\nimport CollapsibleMenuView from \'terra-collapsible-menu-view\';\n\nclass AlwaysCollapsedMenuItemsDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleDisplayTypeChange = this.handleDisplayTypeChange.bind(this);\n    this.state = {\n      displayType: \'tableView\',\n    };\n  }\n\n  handleDisplayTypeChange(event, selectedKey) {\n    this.setState({ displayType: selectedKey });\n  }\n\n  render() {\n    return (\n      <CollapsibleMenuView\n        alwaysCollapsedMenuItems={[\n          <CollapsibleMenuView.Item text="Always Collapsed Button 1" key="collapsedButton1" />,\n          <CollapsibleMenuView.Item text="Always Collapsed Button 2" key="collapsedButton2" />,\n          <CollapsibleMenuView.Item text="Always Collapsed Button 3" key="collapsedButton3" />,\n        ]}\n      >\n        <CollapsibleMenuView.Item text="Collapsible Button 1" key="button1" />\n        <CollapsibleMenuView.Item text="Collapsible Button 2" key="button2" />\n        <CollapsibleMenuView.Divider key="divider1" />\n        <CollapsibleMenuView.ItemGroup key="ViewTypeSelection" selectedKeys={[this.state.displayType]} onChange={this.handleDisplayTypeChange}>\n          <CollapsibleMenuView.Item\n            icon={<IconTable />}\n            text="Table View"\n            key="tableView"\n            isIconOnly\n            shouldCloseOnClick={false}\n            isSelected={this.state.displayType === \'tableView\'}\n          />\n          <CollapsibleMenuView.Item\n            icon={<IconFlowsheet />}\n            text="Expanded View"\n            key="expandedView"\n            isIconOnly\n            shouldCloseOnClick={false}\n            isSelected={this.state.displayType === \'expandedView\'}\n          />\n          <CollapsibleMenuView.Item\n            icon={<IconVisualization />}\n            text="Trending View"\n            key="trendingView"\n            isIconOnly\n            shouldCloseOnClick={false}\n            isSelected={this.state.displayType === \'trendingView\'}\n          />\n        </CollapsibleMenuView.ItemGroup>\n      </CollapsibleMenuView>\n    );\n  }\n}\n\nexport default AlwaysCollapsedMenuItemsDemo;\n\n')))}D.isMDXComponent=!0;var T=function(e){var n=e.title,t=e.description,o=e.isExpanded;return u.a.createElement(g.a,{title:n||"Always Collapsed Menu Items Demo",description:t,example:u.a.createElement(j.a,null),exampleSrc:u.a.createElement(D,null),isExpanded:o})},V={};function k(e){var n=e.components,t=i()(e,["components"]);return Object(s.mdx)("wrapper",l()({},V,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)(p.a,{mdxType:"Badge"}),Object(s.mdx)("h1",{id:"terra-collapsible-menu-view"},"Terra Collapsible Menu View"),Object(s.mdx)("p",null,"The collapsible menu view is a mechanism that can be used in toolbar scenarios where actionable items will be displayed face-up and flex based on the space available. Any items that can not fit in the available space will be rolled into an ellipsis menu."),Object(s.mdx)("p",null,"CollapsibleMenuView.Item will flex between a button when displayed face-up and a Menu.Item when in a menu. An item can have an onClick action and/or contain menuItems that will be displayed in a menu when clicked (they will be displayed in a submenu if the item is rolled into the ellipsis menu)"),Object(s.mdx)("p",null,"CollapsibleMenuView.Toggle will flex between a checkbox with a label when displayed face-up and a selectable Menu.Item when in a menu."),Object(s.mdx)("p",null,"CollapsibleMenuView.ItemGroup will flex between a button group when displayed face-up and a Menu.ItemGroup when rolled into the ellipsis menu. A selectable ItemGroup will have toggle style selection. An Item group that is not selectable will have its children roll into the ellipsis menu as non selectable Menu.Items."),Object(s.mdx)("p",null,"CollapsibleMenuView.Divider will flex between a vertical divider when displayed face-up and a Menu.Divider when in a menu."),Object(s.mdx)("p",null,"To pre-populate the collapsible menu view with menu items that always remain collapsed, use the ",Object(s.mdx)("inlineCode",{parentName:"p"},"alwaysCollapsedMenuItems")," prop."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm install terra-collapsible-menu-view"))))),Object(s.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(s.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(s.mdx)("table",null,Object(s.mdx)("thead",{parentName:"table"},Object(s.mdx)("tr",{parentName:"thead"},Object(s.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(s.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(s.mdx)("tbody",{parentName:"table"},Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"react"),Object(s.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(s.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(s.mdx)("tr",{parentName:"tbody"},Object(s.mdx)("td",{parentName:"tr",align:null},"react-intl"),Object(s.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import CollapsibleMenuView from 'terra-collapsible-menu-view';\n")),Object(s.mdx)("h2",{id:"component-features"},"Component Features"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(M,{title:"CollapsibleMenuView Example",mdxType:"BasicView"}),Object(s.mdx)(T,{title:"Always collapsed menu items",mdxType:"AlwaysCollapsedMenuItemsDemo"}),Object(s.mdx)("h2",{id:"collapsible-menu-view-props"},"Collapsible Menu View props"),Object(s.mdx)(m,{mdxType:"CollapsibleMenuViewProps"}),Object(s.mdx)("h2",{id:"collapsiblemenuviewitem-props"},"CollapsibleMenuView.Item props"),Object(s.mdx)(f,{mdxType:"CollapsibleMenuViewItemProps"}),Object(s.mdx)("h2",{id:"collapsiblemenuviewitemgroup-props"},"CollapsibleMenuView.ItemGroup props"),Object(s.mdx)(b,{mdxType:"CollapsibleMenuViewItemGroupProps"}),Object(s.mdx)("h2",{id:"collapsiblemenuviewtoggle-props"},"CollapsibleMenuView.Toggle props"),Object(s.mdx)(y,{mdxType:"CollapsibleMenuViewToggleProps"}))}k.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,d=l["".concat(s,".").concat(f)]||l[f]||b[f]||a;return n?r.a.createElement(d,u(u({ref:t},i),{},{components:n})):r.a.createElement(d,u({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=n[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(107)),s={title:"Installation",slug:"/how/installation"},u={unversionedId:"how/installation",id:"how/installation",isDocsHomePage:!1,title:"Installation",description:"This section assumes installing docusaurus-protobuffet in an existing Docusaurus project. For those without an existing project, you can use docusaurus-protobuffet-init to scaffold a Docusaurus project with this preset installed.",source:"@site/docs/how/installation.md",slug:"/how/installation",permalink:"/docusaurus-protobuffet/docs/how/installation",editUrl:"https://github.com/AnthonyBobsin/docusaurus-protobuffet/edit/master/website/docs/how/installation.md",version:"current",sidebar:"docs",previous:{title:"Packages",permalink:"/docusaurus-protobuffet/docs/how/packages"},next:{title:"Usage",permalink:"/docusaurus-protobuffet/docs/how/usage"}},c=[],i={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section assumes installing ",Object(a.b)("a",{parentName:"p",href:"https://github.com/AnthonyBobsin/docusaurus-protobuffet/tree/master/packages/docusaurus-protobuffet"},Object(a.b)("inlineCode",{parentName:"a"},"docusaurus-protobuffet"))," in an existing Docusaurus project. For those without an existing project, you can use ",Object(a.b)("a",{parentName:"p",href:"/docs/how/usage#docusaurus-protobuffet-init"},Object(a.b)("inlineCode",{parentName:"a"},"docusaurus-protobuffet-init"))," to scaffold a Docusaurus project with this preset installed."),Object(a.b)("p",null,"NOTE: These commands should be run from your Docusaurus project directory."),Object(a.b)("p",null,"Install this preset."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install --save docusaurus-protobuffet\n")),Object(a.b)("p",null,"Generate a JSON representation of your Protobuf files. This depends on the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/pseudomuto/protoc-gen-doc"},Object(a.b)("inlineCode",{parentName:"a"},"protoc-gen-doc"))," compiler plugin. Find details and installation steps in the ",Object(a.b)("a",{parentName:"p",href:"/docs/how/usage#generating-the-filedescriptorspath-file"},"usage section"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"protoc --doc_out=./fixtures --doc_opt=json,proto_workspace.json protos/**/*.proto\n")),Object(a.b)("p",null,"Add the preset to your project's ",Object(a.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file. View the ",Object(a.b)("a",{parentName:"p",href:"/docs/how/usage#configuration"},"configuration section")," for all available options."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// file: docusaurus.config.js\nmodule.exports = {\n  // ...\n  presets: [\n    [\n      'docusaurus-protobuffet',\n      {\n        protobuffet: {\n          fileDescriptorsPath: './fixtures/proto_workspace.json'\n        }\n      }\n    ]\n  ],\n  // ...\n}\n")),Object(a.b)("p",null,"Invoke the CLI command ",Object(a.b)("a",{parentName:"p",href:"/docs/how/usage#generate-proto-docs"},Object(a.b)("inlineCode",{parentName:"a"},"generate-proto-docs"))," to generate your MDX doc files."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx docusaurus generate-proto-docs\n")),Object(a.b)("p",null,"Update your ",Object(a.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to link to your new documentation from the navbar. You will need to configure one of the generated doc files as the route. A homepage will be introduced to replace this in the future."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// file: docusaurus.config.js\nmodule.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // ...\n        {\n          to: 'protodocs/Booking.proto',\n          activeBasePath: 'protodocs',\n          label: 'Protodocs',\n          position: 'left',\n        }\n        // ...\n      ]\n    }\n  }\n}\n")),Object(a.b)("p",null,"Boot up your Docusaurus server to view the new Protobuf documentation space."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm run start\n")))}p.isMDXComponent=!0}}]);
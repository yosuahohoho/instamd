(this.webpackJsonpinstamd=this.webpackJsonpinstamd||[]).push([[0],{33:function(e,n,a){e.exports=a(77)},38:function(e,n,a){},58:function(e,n){},77:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(31),o=a.n(l),m=(a(38),function(){return r.a.createElement("header",null,r.a.createElement("h2",null,"InstaMD"))}),c=a(8),i=a(13),s=a.n(i),u=a(32),d=a.n(u),w=function(e){var n=e.name,a=e.handleChangeName;return r.a.createElement("div",{className:"document__name"},r.a.createElement("label",{htmlFor:"name"},"Document Name"),r.a.createElement("input",{type:"text",value:n,onChange:a,name:"name",placeholder:"untitled.md"}))},h=function(e){return r.a.createElement("div",{className:"document__toolbar"},e.children)},k=function(e){var n=e.url,a=e.fileName;return r.a.createElement("a",{href:n,className:"download__link",alt:"download",download:a||"untitled.md"},"Download")},p=function(e){var n=e.markdown,a=e.url,t=e.fileName,l=e.handleChangeMarkdown,o=e.handleResetMarkdown;return r.a.createElement("div",{className:"markdown"},r.a.createElement(h,null,r.a.createElement("p",{className:"document__toolbar__title"},"Markdown"),r.a.createElement("div",{className:"document__toolbar__buttons"},r.a.createElement(k,{url:a,fileName:t}),r.a.createElement("button",{onClick:o},"Reset"))),r.a.createElement("textarea",{value:n,onChange:l,className:"markdown__textarea",id:"editor"}))},E=function(e){var n=e.preview;return r.a.createElement("div",{className:"preview"},r.a.createElement(h,null,r.a.createElement("p",{className:"document__toolbar__title"},"Preview")),r.a.createElement("div",{className:"preview__textarea",id:"preview"},n))};s.a.setOptions({gfm:!0,breaks:!0,sanitize:!0});var f=function(){var e=function(e){var n=Object(t.useState)(sessionStorage.getItem(e)||"# InstaMD - Simple Markdown Previewer\n## What is Markdown?\n\nMarkdown is a lightweight markup language with plain text formatting syntax.\n  \nLearn more about Markdown:\n  \n* [Wikipedia](https://en.wikipedia.org/wiki/Markdown)\n* [Github Mastering Markdown](https://guides.github.com/features/mastering-markdown/)\n\n## Text Style\nI'm normal\n**I'm Bold**\n*I'm Italic*\n\n## Image\n![Unsplash Image](https://source.unsplash.com/random/150x100)\n\n## Blockquotes\nAs Captain Turtlesie said:\n\n> Slow and steady is a key for learning.\n\n## Inline Code\nI think you should use an\n`<div>` element here instead.\n\n## Code Block\n```javascript\nconsole.log('Hello mark down!')\n```\n\n## Tables\nMonster | Country\n------------ | -------------\nGojira | Japan\nButo Ijo | Indonesia\nHydra | Greece \n"),a=Object(c.a)(n,2),r=a[0],l=a[1];return Object(t.useEffect)((function(){sessionStorage.setItem(e,r)})),[r,l]}("data"),n=Object(c.a)(e,2),a=n[0],l=n[1],o=Object(t.useState)(""),m=Object(c.a)(o,2),i=m[0],u=m[1];return r.a.createElement("main",{className:"document"},r.a.createElement(w,{name:i,handleChangeName:function(e){u(e.target.value)}}),r.a.createElement("div",{className:"document__workspace"},r.a.createElement(p,{markdown:a,url:function(){var e=new Blob([a],{type:"text/markdown"});return window.URL.createObjectURL(e)}(),fileName:i,handleChangeMarkdown:function(e){l(e.target.value)},handleResetMarkdown:function(){l("")}}),r.a.createElement(E,{preview:d()(s()(a))})))},v=function(){return r.a.createElement("footer",null,r.a.createElement("small",null,"2019\xa9yosuahohoho"))};var g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m,null),r.a.createElement(f,null),r.a.createElement(v,null))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b0415b92.chunk.js.map
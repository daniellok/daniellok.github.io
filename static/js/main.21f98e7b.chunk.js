(this["webpackJsonpdaniellok.github.io"]=this["webpackJsonpdaniellok.github.io"]||[]).push([[0],{13:function(e,t,a){e.exports=a(30)},28:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(8),a(3)),i=a(4),s=a(6),u=a(5),p=a(7),h=a(2);function m(e){var t=e.suggestion;return r.a.createElement("div",{className:"navbar-suggestion",onClick:function(){return Object(h.b)(t.route)}},r.a.createElement("pre",null,t.displayName))}var d=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"makeSuggestion",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{displayName:null!=t?t:e,route:e}}},{key:"render",value:function(){var e=this,t=b[this.props.path],a=t.parent,n=null!=a?b[a]:null,l=null!=n?this.makeSuggestion(a,".. ("+n.name+")"):null,c=t.children.map((function(t){return e.makeSuggestion(t)}));return null!=l&&c.unshift(l),r.a.createElement("div",{className:"navbar-suggestions-wrapper"},c.map((function(e){return r.a.createElement(m,{key:e.route,suggestion:e})})))}}]),t}(r.a.PureComponent),v=(a(26),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._handleChange=function(e){a.setState({text:e.target.value})},a._handleSelect=function(e){a.setState({index:e.target.selectionStart})},a._toggleCaret=function(e){a.navRef.current.focus(),a.setState({renderCaret:e})},a.state={errorMessage:"",index:0,text:"",renderCaret:!1},a.navRef=r.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"updateStateText",value:function(e,t,a){var n=e.slice(0,t),r=e.slice(t);return"Backspace"===a?n.slice(0,-1)+r:"Delete"===a?n+r.slice(1):n+a+r}},{key:"renderCaret",value:function(e){var t=" ".repeat(e);return r.a.createElement("div",{className:"caret-display"},r.a.createElement("pre",null,t),r.a.createElement("pre",{className:"navbar-caret"}," "))}},{key:"render",value:function(){var e=this,t=this.state,a=t.errorMessage,n=t.text,l=t.index,c=t.renderCaret?this.renderCaret(l):null;return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-input-wrapper",tabIndex:1,onBlur:function(){return e._toggleCaret(!1)},onFocus:function(){return e._toggleCaret(!0)}},r.a.createElement("pre",{className:"navbar-path"},"~"+this.props.path),r.a.createElement("pre",null," $ cd "),r.a.createElement("input",{className:"navbar-input",ref:this.navRef,type:"text",value:n,onChange:this._handleChange,onSelect:this._handleSelect}),c),""!==a&&r.a.createElement("div",{className:"navbar-error-message"},r.a.createElement("pre",null,a)),r.a.createElement(d,{path:this.props.path}))}}]),t}(r.a.PureComponent)),g=(a(28),a(29),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{path:"/"}),r.a.createElement("header",{className:"App-header"},"Home page under construction"))}),f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{path:"/other/"}),r.a.createElement("header",{className:"App-header"},"Other page under construction too"))};var E=function(){return r.a.createElement(h.a,null,r.a.createElement(g,{path:"/"}),r.a.createElement(f,{path:"/other/"}))},b={"/":{name:"home",parent:null,children:["/other/"]},"/other/":{name:"other",parent:"/",children:[]}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.21f98e7b.chunk.js.map
(this["webpackJsonpdaniellok.github.io"]=this["webpackJsonpdaniellok.github.io"]||[]).push([[0],{14:function(e,t,a){e.exports=a(31)},29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=(a(8),a(13)),i=a(3),l=a(4),u=a(6),h=a(5),p=a(7),d=a(1);function m(e){var t=e.suggestion;return r.a.createElement("div",{className:"navbar-suggestion",onClick:function(){return Object(d.b)(t.route)}},r.a.createElement("pre",null,t.displayName))}var g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"makeSuggestion",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{displayName:null!=t?t:e,route:e}}},{key:"render",value:function(){var e=this,t=x[this.props.path],a=t.parent,n=null!=a?x[a]:null,c=null!=n?this.makeSuggestion(a,".. ("+n.name+")"):null,o=t.children.map((function(t){return e.makeSuggestion(t)}));return null!=c&&o.unshift(c),r.a.createElement("div",{className:"navbar-suggestions-wrapper"},o.map((function(e){return r.a.createElement(m,{key:e.route,suggestion:e})})))}}]),t}(r.a.PureComponent),f=a(27),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e)))._handleEnter=function(e){"Enter"===e.key&&a.parsePath(a.state.text)},a._handleChange=function(e){e.target.value.length>30||a.setState({text:e.target.value})},a._handleSelect=function(e){a.setState({index:e.target.selectionStart})},a._toggleCaret=function(e){e&&a.navRef.current.focus(),a.setState({renderCaret:e})},a.state={errorMessage:"",index:0,text:"",renderCaret:!1},a.navRef=r.a.createRef(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"parsePath",value:function(e){var t;if(0!==e.length){t="~"===e||"home"===e?"/":e.startsWith("/")||e.startsWith("~/")?"/"+e.slice(1):this.props.path+e;var a=f.normalize(t);a.endsWith("/")||(a+="/"),console.log(a),y.includes(a)?a!==this.props.path?Object(d.b)(a):this.setState({index:0,text:"",errorMessage:""}):this.setState({errorMessage:"cd: no such file or directory ".concat(this.state.text)})}}},{key:"updateStateText",value:function(e,t,a){var n=e.slice(0,t),r=e.slice(t);return"Backspace"===a?n.slice(0,-1)+r:"Delete"===a?n+r.slice(1):n+a+r}},{key:"calculateGradientStops",value:function(e,t){var a=e.length+1;return[t/a*100,(t+1)/a*100]}},{key:"render",value:function(){var e=this,t=this.state,a=t.errorMessage,n=t.text,c=t.index,o=t.renderCaret,i=this.calculateGradientStops(n,c),l=Object(s.a)(i,2),u=l[0],h=l[1];return console.log(o,u,h),r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-input-wrapper",tabIndex:1,onBlur:function(){return e._toggleCaret(!1)},onFocus:function(){return e._toggleCaret(!0)}},r.a.createElement("pre",{className:"navbar-path"},"~"+this.props.path),r.a.createElement("pre",null," $ cd "),r.a.createElement("input",{className:"navbar-input",ref:this.navRef,type:"text",style:{background:o?"linear-gradient(\n                to right, \n                #071630 0%, \n                #071630 ".concat(u,"%, \n                #f569ff ").concat(u,"%, \n                #f569ff ").concat(h,"%, \n                #071630 ").concat(h,"%, \n                #071630 100%\n              )"):"#071630",minWidth:12*(n.length+1),maxWidth:12*(n.length+1)},value:n,onChange:this._handleChange,onSelect:this._handleSelect,onKeyPress:this._handleEnter})),""!==a&&r.a.createElement("div",{className:"navbar-error-message"},r.a.createElement("pre",null,a)),r.a.createElement(g,{path:this.props.path}))}}]),t}(r.a.PureComponent),b=(a(29),a(30),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{path:"/"}),r.a.createElement("header",{className:"App-header"},"Home page under construction"))}),E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{path:"/other/"}),r.a.createElement("header",{className:"App-header"},"Other page under construction too"))};var k=function(){return r.a.createElement(d.a,null,r.a.createElement(b,{path:"/"}),r.a.createElement(E,{path:"/other/"}))},y=["/","/other/"],x={"/":{name:"home",parent:null,children:["/other/"]},"/other/":{name:"other",parent:"/",children:[]}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.845d41e7.chunk.js.map
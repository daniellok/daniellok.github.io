(this["webpackJsonpdaniellok.github.io"]=this["webpackJsonpdaniellok.github.io"]||[]).push([[0],{13:function(e,t,a){e.exports=a(30)},28:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),s=(a(8),a(3)),i=a(4),o=a(6),u=a(5),p=a(7),m=a(1);function h(e){var t=e.suggestion;return r.a.createElement("div",{className:"navbar-suggestion",onClick:function(){return Object(m.b)(t.route)}},r.a.createElement("pre",null,t.displayName))}var d=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"makeSuggestion",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{displayName:null!=t?t:e,route:e}}},{key:"render",value:function(){var e=this,t=k[this.props.path],a=t.parent,n=null!=a?k[a]:null,l=null!=n?this.makeSuggestion(a,".. ("+n.name+")"):null,c=t.children.map((function(t){return e.makeSuggestion(t)}));return null!=l&&c.unshift(l),r.a.createElement("div",{className:"navbar-suggestions-wrapper"},c.map((function(e){return r.a.createElement(h,{key:e.route,suggestion:e})})))}}]),t}(r.a.PureComponent),f=a(26),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e)))._handleKeyDown=function(e){e.preventDefault();var t=e.key;switch(t){case"ArrowLeft":a.setState((function(e){return{index:Math.max(0,e.index-1)}}));break;case"ArrowRight":a.setState((function(e){return{index:Math.min(e.text.length,e.index+1)}}));break;case"ArrowUp":a.setState((function(e){return{index:0}}));break;case"ArrowDown":a.setState((function(e){return{index:e.text.length}}));break;case"Enter":var n,r=a.state.text;"/"!==(n="/"===r[0]||"~"===r[0]?f.normalize("/"+r.slice(1)):f.normalize(a.props.path+r))[n.length-1]&&(n+="/"),x.includes(n)?(a.setState({errorMessage:"",index:0,text:""}),n!==a.props.path&&Object(m.b)(n)):a.setState({errorMessage:"cd: no such file or directory: "+n,index:0,text:""});break;case"Escape":a.navRef.current.blur();break;default:var l;if(1===t.length)l=a.state.index+1;else if("Backspace"===t)l=a.state.index-1;else{if("Delete"!==t)break;l=a.state.index}a.setState({index:l,text:a.updateStateText(a.state.text,a.state.index,t)})}},a._toggleCaret=function(e){a.setState({renderCaret:e})},a.state={errorMessage:"",index:0,text:"",renderCaret:!1},a.navRef=r.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"updateStateText",value:function(e,t,a){var n=e.slice(0,t),r=e.slice(t);return"Backspace"===a?n.slice(0,-1)+r:"Delete"===a?n+r.slice(1):n+a+r}},{key:"renderCaret",value:function(e,t){if(t===e.length)return r.a.createElement(r.a.Fragment,null,r.a.createElement("pre",null,e),r.a.createElement("pre",{className:"navbar-caret"}," "));var a=e.slice(0,t),n=e.charAt(t),l=e.slice(t+1);return console.log(a,n,l),r.a.createElement(r.a.Fragment,null,r.a.createElement("pre",null,a),r.a.createElement("pre",{className:"navbar-caret"},n),r.a.createElement("pre",null,l))}},{key:"render",value:function(){var e=this,t=this.state,a=t.errorMessage,n=t.text,l=t.index,c=t.renderCaret?this.renderCaret(n,l):r.a.createElement("pre",null,n);return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-input",tabIndex:1,ref:this.navRef,onBlur:function(){return e._toggleCaret(!1)},onFocus:function(){return e._toggleCaret(!0)},onKeyDown:this._handleKeyDown},r.a.createElement("pre",{className:"navbar-path"},"~"+this.props.path),r.a.createElement("pre",null," $ cd "),c),""!==a&&r.a.createElement("div",{className:"navbar-error-message"},r.a.createElement("pre",null,a)),r.a.createElement(d,{path:this.props.path}))}}]),t}(r.a.PureComponent),v=(a(28),a(29),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{path:"/"}),r.a.createElement("header",{className:"App-header"},"Home page under construction"))}),b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{path:"/other/"}),r.a.createElement("header",{className:"App-header"},"Other page under construction too"))};var E=function(){return r.a.createElement(m.a,null,r.a.createElement(v,{path:"/"}),r.a.createElement(b,{path:"/other/"}))},x=["/","/other/"],k={"/":{name:"home",parent:null,children:["/other/"]},"/other/":{name:"other",parent:"/",children:[]}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.0186550c.chunk.js.map
(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),s=n.n(r),a=(n(12),n(4)),o=n(5),i=n(7),h=n(6),l=n(0),b=function(e){var t=e.name,n=e.email,c=e.id;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5 tc",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(c,"?200*200"),alt:"Robot"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){e.searchField;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"search robot",onChange:t})})},u=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",height:"800px",border:"5px solid black"},children:e.children})},f=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.searchfield,n=e.robots,c=n.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));return n.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(u,{children:Object(l.jsx)(d,{robots:c})})]}):Object(l.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component)),g=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))});s.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(f,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.6b03ce6b.chunk.js.map
(this["webpackJsonptodo-front"]=this["webpackJsonptodo-front"]||[]).push([[0],{12:function(t,e,n){},27:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e),n.d(e,"ConfigureStore",(function(){return N}));var r=n(0),i=n(13),c=n.n(i),a=(n(27),n(4)),o=n(5),d=n(8),u=n(7),s=(n(12),n(6)),l=n(35),j=n(2),b=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).handleSubmit=function(e){e.preventDefault();var n=t.getTitle.value,r={id:Math.floor(100*Math.random()),title:n,editing:!1};t.props.dispatch({type:"ADD_TODO",data:r}),t.getTitle.value=""},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("form",{className:"todo-form",onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{placeholder:"Add todo",ref:function(e){return t.getTitle=e}}),Object(j.jsx)(l.a,{children:"Add"})]})}}]),n}(r.Component),p=Object(s.b)()(b),O=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).handleEdit=function(e){e.preventDefault();var n={newTitle:t.getTitle.value};t.props.dispatch({type:"UPDATE",id:t.props.todo.id,data:n})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("form",{onSubmit:this.handleEdit,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("input",{type:"text",name:"title",style:{height:"40px"},ref:function(e){return t.getTitle=e},defaultValue:this.props.todo.title})}),Object(j.jsx)("button",{className:"button-item",children:"Upgrade"}),Object(j.jsx)("button",{className:"button-item",type:"button",onClick:function(){return t.props.dispatch({type:"DELETE_TODO",id:t.props.todo.id})},children:"Delete"})]})})}}]),n}(r.Component),h=Object(s.b)()(O),f=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:this.props.todo.title}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return t.props.dispatch({type:"EDIT_TODO",id:t.props.todo.id})},children:"Edit"})})]})}}]),n}(r.Component),v=Object(s.b)()(f),m=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:this.props.todos.map((function(t){return Object(j.jsx)("div",{children:t.editing?Object(j.jsx)(h,{todo:t},t.id):Object(j.jsx)(v,{todo:t},t.id)},t.id)}))})}}]),n}(r.Component),x=Object(s.b)((function(t){return{todos:t.todos}}))(m),g=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).handleSubmit=function(e){e.preventDefault();t.getTitle.value},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Todo App"}),Object(j.jsx)(p,{}),Object(j.jsx)(x,{})]})}}]),n}(r.Component),y=n(10),D=n(11),T="ADD_TODO",E="EDIT_TODO",w="UPDATE",A="DELETE_TODO",k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return t.concat([e.data]);case A:return t.filter((function(t){return t.id!==e.id}));case E:return t.map((function(t){return t.id===e.id?Object(D.a)(Object(D.a)({},t),{},{editing:!t.editing}):t}));case w:return t.map((function(t){return t.id===e.id?Object(D.a)(Object(D.a)({},t),{},{name:e.data.newName,title:e.data.newTitle,description:e.data.newDescription,image:e.data.newImage,editing:!t.editing}):t}));default:return t}},C=n(21),S=n(22),_=n.n(S),N=function(){return Object(y.d)(Object(y.c)({todos:k}),Object(y.a)(C.a,_.a))},I=N();c.a.render(Object(j.jsx)(s.a,{store:I,children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.599ccd0f.chunk.js.map
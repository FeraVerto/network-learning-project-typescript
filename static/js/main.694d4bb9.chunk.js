(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,s,t){"use strict";t.r(s);var a=t(1),n=t(0),c=t.n(n),i=t(24),r=t.n(i),o=(t(76),t(77),t(54)),l=t.n(o),d=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:l.a.site_name,children:"Spacebook"})})},j=t(14),u=t.n(j),m=t(16),b=t.p+"static/media/astronaut.cbb62ce6.png",f=t.p+"static/media/dialogs.1a5e5f2e.png",g=t.p+"static/media/photo.bf857649.png",O=t.p+"static/media/news.3350a595.png",p=t.p+"static/media/setting.9ed628b6.png",h=t.p+"static/media/users.ed5e25fc.png",x=function(e){return Object(a.jsx)("nav",{className:u.a.nav,children:Object(a.jsxs)("ul",{className:u.a.nav_list,children:[Object(a.jsx)("li",{className:u.a.nav_item,children:Object(a.jsxs)(m.b,{className:u.a.nav_item_link,to:"/profile",activeClassName:u.a.active,children:[Object(a.jsx)("img",{src:b,alt:"profile"}),Object(a.jsx)("span",{children:"Profile"})]})}),Object(a.jsx)("li",{className:u.a.nav_item,children:Object(a.jsxs)(m.b,{className:u.a.nav_item_link,to:"/dialogs",children:[Object(a.jsx)("img",{src:f,alt:""}),Object(a.jsx)("span",{children:"Dialogs"})]})}),Object(a.jsx)("li",{className:u.a.nav_item,children:Object(a.jsxs)(m.b,{className:u.a.nav_item_link,to:"/news",href:"#",children:[Object(a.jsx)("img",{src:g,alt:"profile"}),Object(a.jsx)("span",{children:"Photo"})]})}),Object(a.jsx)("li",{className:u.a.nav_item,children:Object(a.jsxs)(m.b,{className:u.a.nav_item_link,to:"/music",children:[Object(a.jsx)("img",{src:O,alt:"profile"}),Object(a.jsx)("span",{children:"News"})]})}),Object(a.jsx)("li",{className:u.a.nav_item,children:Object(a.jsxs)(m.b,{className:u.a.nav_item_link,to:"/settings",children:[Object(a.jsx)("img",{src:p,alt:"profile"}),Object(a.jsx)("span",{children:"Settings"})]})}),Object(a.jsx)("li",{className:u.a.nav_item,children:Object(a.jsxs)(m.b,{className:u.a.nav_item_link,to:"/users",children:[Object(a.jsx)("img",{src:h,alt:"profile"}),Object(a.jsx)("span",{children:"Users"})]})})]})})},_=t(55),v=t.n(_),w=t(37),N=t(5),A="ADD_POST",P="UPDATE_NEW_POST_TEXT",E={posts:[{id:1,message:"\u042d\u0442\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0441\u0434\u043e\u0445\u043d\u0438 \u0438\u043b\u0438 \u0443\u043c\u0440\u0438!",like:25},{id:2,message:"\u0418\u043b\u0438 \u0441\u0434\u043e\u0445\u043d\u0438",like:40},{id:3,message:"\u0418\u043b\u0438 \u0443\u043c\u0440\u0438",like:1}],newPostText:""};var T=t(39),k=t.n(T),M=t(123),C=t(124),U=t(122),y=t(119),S=t(120),I=function(e){return Object(a.jsxs)("div",{className:k.a.post_block,children:[Object(a.jsxs)("div",{className:k.a.post,children:[Object(a.jsx)(M.a,{src:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg",alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),Object(a.jsx)(C.a,{control:Object(a.jsx)(U.a,{icon:Object(a.jsx)(y.a,{}),checkedIcon:Object(a.jsx)(S.a,{}),name:"checkedH"}),label:e.like})]}),Object(a.jsx)("div",{className:k.a.post_text,children:e.message})]})},D=t(27),z=t.n(D),R=t(125),W=t(19),Y=Object(W.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:A})},onPostChange:function(s){e(function(e){return{type:P,text:e}}(s))}}}))((function(e){var s=e.posts.map((function(e){return Object(a.jsx)(I,{id:e.id,message:e.message,like:e.like},e.id)})),t=c.a.createRef();return Object(a.jsx)("div",{className:z.a.my_post,children:Object(a.jsxs)("div",{className:z.a.posts_block,children:[Object(a.jsxs)("div",{className:z.a.posts,children:[Object(a.jsx)(R.a,{ref:t,rows:5,value:e.newPostText,onChange:function(){e.onPostChange(t.current?t.current.value:"----")},"aria-label":"empty textarea",placeholder:"Empty",className:z.a.posts_textarea}),Object(a.jsx)("div",{className:z.a.button_block,children:Object(a.jsx)("button",{className:z.a.posts_button,onClick:function(){e.addPost()},children:"Add post"})})]}),Object(a.jsx)("div",{children:s})]})})})),Q=function(){return Object(a.jsx)("main",{className:v.a.main_profile,children:Object(a.jsx)(Y,{})})},q=t(7),L=function(){return Object(a.jsx)("div",{children:"Dialogs"})},K=function(){return Object(a.jsx)("div",{children:"Music"})},J="ADD_MESSAGE",Z="UPDATE_NEW_MESSAGE_TEXT",G={messages:[{id:1,name:"\u041e\u043d",textMessage:"Hello"},{id:2,name:"\u0422\u044b",textMessage:"Hello"},{id:1,name:"\u041e\u043d",textMessage:"\u0422\u044b \u0442\u0430\u043a\u0430\u044f \u0445\u043e\u0440\u043e\u0448\u0430\u044f! \u0422\u044b \u0434\u0430\u0436\u0435 \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u0441\u0430\u0445\u0430\u0440!"},{id:2,name:"\u0422\u044b",textMessage:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}],newMessageText:""};var V=t(23),X=t.n(V),H=t(121),B=function(e){var s=e.messages.map((function(e){return Object(a.jsxs)("div",{className:X.a.dialog_body,children:[Object(a.jsxs)("div",{className:1===e.id?X.a.message_one:"",children:[Object(a.jsx)("div",{children:1===e.id?e.name:null}),Object(a.jsx)("div",{children:1===e.id?e.textMessage:null})]}),Object(a.jsxs)("div",{className:2===e.id?X.a.message_two:"",children:[Object(a.jsx)("div",{children:2===e.id?e.name:null}),Object(a.jsx)("div",{children:2===e.id?e.textMessage:null})]})]},e.id)})),t=c.a.createRef();return Object(a.jsxs)("div",{className:X.a.dialog_window,children:[Object(a.jsxs)("div",{className:X.a.dialog_header,children:[Object(a.jsx)(m.b,{to:"/dialogs",children:Object(a.jsx)(H.a,{variant:"contained",color:"default",children:"Exit"})}),Object(a.jsx)("div",{children:"Avatar + name"})]}),s,Object(a.jsxs)("div",{className:X.a.dialog_footer,children:[Object(a.jsx)(R.a,{ref:t,rows:5,value:e.newMessageText,onChange:function(){e.onChangeMessage(t.current?t.current.value:"----")},"aria-label":"empty textarea",placeholder:"Empty",className:X.a.dialog_footer_textarea}),Object(a.jsx)(H.a,{fullWidth:!0,onClick:function(){e.addMessage()},variant:"contained",color:"default",className:X.a.button,children:"Send"})]})]})},F=Object(W.b)((function(e){return{messages:e.messagesPage.messages,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(){e({type:J})},onChangeMessage:function(s){e({type:Z,word:s})}}}))(B),$=t(25),ee=t.n($),se=function(e){return Object(a.jsx)(m.b,{className:ee.a.link,to:"/messages/"+e.id,children:Object(a.jsxs)("li",{className:ee.a.item,children:[Object(a.jsx)(M.a,{alt:"Remy Sharp",src:e.avatar}),Object(a.jsxs)("div",{className:ee.a.message,children:[Object(a.jsx)("div",{className:ee.a.user_name,children:e.name}),Object(a.jsx)("div",{className:ee.a.last_message,children:e.lastMessage})]})]})})},te=function(e){var s=e.dialogs.map((function(e){return Object(a.jsx)(se,{id:e.id,name:e.name,lastMessage:e.lastMessage,avatar:e.avatar},e.id)}));return Object(a.jsx)("ul",{className:ee.a.list,children:s})},ae=Object(W.b)((function(e){return{dialogs:e.dialogsPage.dialogs}}),(function(e){return{}}))(te),ne=t(60),ce=t(61),ie=t(65),re=t(64),oe=t(15),le=t.n(oe),de=t(44),je=t.n(de),ue=function(e){Object(ie.a)(t,e);var s=Object(re.a)(t);function t(){var e;Object(ne.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=s.call.apply(s,[this].concat(n))).onPageChanged=function(s){e.props.setCurrentPage(s),je.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(s,"&count=").concat(e.props.pageSize)).then((function(s){e.props.setUsers(s.data.items)}))},e}return Object(ce.a)(t,[{key:"componentDidMount",value:function(){var e=this;je.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(s){e.props.setUsers(s.data.items),e.props.setTotalUsersCount(s.data.totalCount)}))}},{key:"render",value:function(){for(var e=this,s=Math.ceil(this.props.totalUsersCount/this.props.pageSize),t=[],n=1;n<s;n++)t.push(n);return Object(a.jsxs)("div",{className:le.a.users,children:[Object(a.jsx)("div",{className:le.a.users_paginator,children:t.map((function(s){return Object(a.jsx)("span",{onClick:function(t){return e.onPageChanged(s)},className:e.props.currentPage===s?le.a.selectPage:le.a.page,children:s})}))}),Object(a.jsx)("div",{className:le.a.users_list,children:this.props.users.map((function(s){return Object(a.jsxs)("div",{className:le.a.user,children:[Object(a.jsx)("div",{className:le.a.user_avatar,children:Object(a.jsx)(M.a,{variant:"square",className:le.a.avatar,src:null!==s.photos.small?s.photos.small:"".concat("data:image/png;base64,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"),alt:s.name})}),Object(a.jsx)("div",{className:le.a.button_followed,children:s.followed?Object(a.jsx)("button",{className:le.a.follow_unfollow_button,onClick:function(){return e.props.unfollow(s.id)},children:"Unfollow"}):Object(a.jsx)("button",{className:le.a.follow_unfollow_button,onClick:function(){return e.props.follow(s.id)},children:"Follow"})}),Object(a.jsx)("div",{className:le.a.user_info,children:Object(a.jsxs)("div",{className:le.a.user_info_name,children:[Object(a.jsx)("div",{className:le.a.user_name,children:s.name}),Object(a.jsx)("div",{className:le.a.user_status,children:s.status})]})})]},s.id)}))})]})}}]),t}(c.a.Component),me="FOLLOW",be="UNFOLLOW",fe="SET_USERS",ge="SET_CURRENT_PAGE",Oe="SET_TOTAL_USERS_COUNT",pe={users:[],pageSize:50,totalUsersCount:0,currentPage:2};var he=Object(W.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage}}),(function(e){return{follow:function(s){e(function(e){return{type:me,id:e}}(s))},unfollow:function(s){e(function(e){return{type:be,id:e}}(s))},setUsers:function(s){e(function(e){return{type:fe,users:e}}(s))},setCurrentPage:function(s){e({type:ge,currentPage:s})},setTotalUsersCount:function(s){e(function(e){return{type:Oe,totalCount:e}}(s))}}}))(ue),xe=t(62),_e=t.n(xe),ve=Object(W.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))((function(e){e.friends.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(M.a,{className:_e.a.avatar,src:e.avatar,alt:e.name})},e.id)}));return Object(a.jsx)("div",{})})),we=t(63),Ne=t.n(we),Ae=t.p+"static/media/avatar.7a200511.jpg",Pe=function(){return Object(a.jsxs)("div",{className:Ne.a.profile_info,children:[Object(a.jsx)("img",{src:Ae,alt:"",width:"180",height:"180"}),Object(a.jsx)("div",{children:"\u0418\u043c\u044f"}),Object(a.jsx)("div",{children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(a.jsx)("div",{children:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430"}),Object(a.jsx)("div",{children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})]})},Ee=function(){return Object(a.jsxs)("div",{className:"app-wrapper grid-container",children:[Object(a.jsxs)("div",{className:"profile_navbar",children:[Object(a.jsx)(Pe,{}),Object(a.jsx)(x,{})]}),Object(a.jsxs)("div",{className:"app-wrapper-content",children:[Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(d,{})}),Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("div",{className:"main_content",children:[Object(a.jsx)(q.a,{path:"/profile",render:function(){return Object(a.jsx)(Q,{})}}),Object(a.jsx)(q.a,{path:"/dialogs",render:function(){return Object(a.jsx)(ae,{})}}),Object(a.jsx)(q.a,{path:"/messages",render:function(){return Object(a.jsx)(F,{})}}),Object(a.jsx)(q.a,{exact:!0,path:"/news",render:function(){return Object(a.jsx)(L,{})}}),Object(a.jsx)(q.a,{path:"/music",render:function(){return Object(a.jsx)(K,{})}}),Object(a.jsx)(q.a,{path:"/users",render:function(){return Object(a.jsx)(he,{})}})]}),Object(a.jsx)("div",{className:"main_content_friends",children:"Friends"})]})]}),Object(a.jsx)(ve,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}var ke=t(34),Me={dialogs:[{id:1,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-1",lastMessage:"\u041f\u0440\u0438\u0432\u0435\u0442!",avatar:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"},{id:2,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-2",lastMessage:"\u0425\u043e\u0447\u0443 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0442\u0435\u0431\u0435 \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u0441\u0438\u0434\u044f \u043d\u0430 \u0434\u0438\u0432\u0430\u043d\u0435",avatar:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"},{id:3,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-3",lastMessage:"\u0421\u043a\u0438\u043d\u044c \u0444\u043e\u0442\u043a\u0438",avatar:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"},{id:4,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-4",lastMessage:"\u0421\u043e\u0442\u043a\u0443 \u043a\u043e\u0433\u0434\u0430 \u0432\u0435\u0440\u043d\u0435\u0448\u044c?",avatar:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"},{id:5,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-5",lastMessage:"\u0416\u0440\u0430\u0442\u044c \u043e\u0445\u043e\u0442\u0430",avatar:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"}]};var Ce={friends:[{id:1,name:"\u0414\u0440\u0443\u0433-1",avatar:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"},{id:2,name:"\u0414\u0440\u0443\u0433-2",avatar:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"},{id:3,name:"\u0414\u0440\u0443\u0433-3",avatar:"https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"}]},Ue=Object(ke.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case A:return Object(N.a)(Object(N.a)({},e),{},{posts:[{id:5,message:e.newPostText,like:25}].concat(Object(w.a)(e.posts)),newPostText:""});case P:return Object(N.a)(Object(N.a)({},e),{},{newPostText:s.text});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return e},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case J:return Object(N.a)(Object(N.a)({},e),{},{messages:[].concat(Object(w.a)(e.messages),[{id:2,name:"\u0422\u044b",textMessage:e.newMessageText}]),newMessageText:""});case Z:return Object(N.a)(Object(N.a)({},e),{},{newMessageText:s.word});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case me:return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return s.id===e.id?Object(N.a)(Object(N.a)({},e),{},{followed:!0}):e}))});case be:return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return s.id===e.id?Object(N.a)(Object(N.a)({},e),{},{followed:!1}):e}))});case fe:return Object(N.a)(Object(N.a)({},e),{},{users:s.users});case ge:return Object(N.a)(Object(N.a)({},e),{},{currentPage:s.currentPage});case Oe:return Object(N.a)(Object(N.a)({},e),{},{totalUsersCount:s.totalCount});default:return e}}}),ye=Object(ke.c)(Ue);r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(m.a,{children:Object(a.jsx)(W.a,{store:ye,children:Object(a.jsx)(Ee,{})})})}),document.getElementById("root")),Te(),Te()},14:function(e,s,t){e.exports={nav:"Navbar_nav__2G49n",nav_list:"Navbar_nav_list__195P5",nav_item:"Navbar_nav_item__l_UkN",nav_item_link:"Navbar_nav_item_link__2kja5"}},15:function(e,s,t){e.exports={users:"Users_users__2Whu_",users_list:"Users_users_list__3DzG6",user:"Users_user__12P5P",user_avatar:"Users_user_avatar__1PI_a",avatar:"Users_avatar__28Uw_",follow_unfollow_button:"Users_follow_unfollow_button__2kgTj",user_info:"Users_user_info__jMX1k",user_info_name:"Users_user_info_name__YGCc9",user_name:"Users_user_name__1Vq5z",users_paginator:"Users_users_paginator__tUK27",selectPage:"Users_selectPage__1IFpW",page:"Users_page__1UlAf"}},23:function(e,s,t){e.exports={dialog_window:"Messages_dialog_window__NGXtj",dialog_header:"Messages_dialog_header__2NTHl",dialog_footer:"Messages_dialog_footer__3sNge",button:"Messages_button__B4QTR",dialog_footer_textarea:"Messages_dialog_footer_textarea__2wUAq",dialog_body:"Messages_dialog_body__eTCSO",message_one:"Messages_message_one__158ii",message_two:"Messages_message_two__1bHxW"}},25:function(e,s,t){e.exports={list:"Dialogs_list__2o-TF",item:"Dialogs_item__1Rw8z",message:"Dialogs_message__1qS-S"}},27:function(e,s,t){e.exports={posts:"MyPosts_posts__3hM2t",button_block:"MyPosts_button_block__awp2T",posts_textarea:"MyPosts_posts_textarea__3kZWx",posts_button:"MyPosts_posts_button__192L8"}},39:function(e,s,t){e.exports={post_block:"MyPost_post_block__1cDSp",post:"MyPost_post__1TfQL",post_text:"MyPost_post_text__3GQ1t"}},54:function(e,s,t){e.exports={site_name:"Header_site_name__1fFFR"}},55:function(e,s,t){e.exports={main_profile:"Profile_main_profile__2-65N"}},62:function(e,s,t){e.exports={friends_block:"Friends_friends_block__1T6CQ"}},63:function(e,s,t){e.exports={profile_info:"ProfileInfo_profile_info__142Ew"}},76:function(e,s,t){},77:function(e,s,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.694d4bb9.chunk.js.map
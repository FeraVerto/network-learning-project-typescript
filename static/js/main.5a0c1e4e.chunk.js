(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{102:function(e,t,n){e.exports={site_name:"Header_site_name__1fFFR",login:"Header_login__31kC2"}},103:function(e,t,n){e.exports={h1:"Login_h1__3d9UL",formSummaryError:"Login_formSummaryError__3l-5r"}},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(3),a=n(38),s=n(0),o=(n(1),n(105)),c=n.n(o),i=function(e){var t=e.style,n=e.children,o=e.onChange,i=Object(a.a)(e,["style","children","onChange"]);return console.log("Button",t),Object(s.jsx)("button",Object(r.a)(Object(r.a)({className:c.a.button+" "+t,onChange:o},i),{},{children:n}))}},105:function(e,t,n){e.exports={button:"Button_button__20FYT",background:"Button_background__3R9h_"}},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var r,a=n(143),s=n.n(a);!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.captchaIsRequired=10]="captchaIsRequired"}(r||(r={}));var o=s.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"60b88672-b40f-4a98-87f4-2eaf9580a4aa"}}),c={getUsers:function(e,t){return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUsersPage:function(e,t){return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),i.getProfile(e)},follow:function(e){return o.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(e))},unfollow:function(e){return o.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e))}},i={getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),o.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return o.get("profile/status/"+e)},updateStatus:function(e){return o.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),o.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfile:function(e){return o.put("/profile",e)}},u={me:function(){return o.get("auth/me").then((function(e){return e.data}))},login:function(e,t,n,r){return o.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return o.delete("/auth/login").then((function(e){return e.data}))}}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n(41),s=n.n(a),o=(n(1),function(e){return Object(r.jsx)("div",{children:null!==e.profile&&Object(r.jsxs)("ul",{className:s.a.list,children:[Object(r.jsx)("li",{className:s.a.item,children:Object(r.jsx)("span",{className:s.a.item_fullName,children:Object(r.jsx)("b",{children:e.profile.fullName})})}),e.profile.lookingForAJobDescription&&Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{children:"Description:"}),e.profile.lookingForAJobDescription]}),e.profile.lookingForAJob&&Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{children:"lookingForAJob:"}),e.profile.lookingForAJob]}),e.profile.aboutMe&&Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{children:"AboutMe:"}),e.profile.aboutMe]})]})})})},16:function(e,t,n){e.exports={users:"Users_users__2Whu_",users_list:"Users_users_list__3DzG6",user:"Users_user__12P5P",user_avatar:"Users_user_avatar__1PI_a",avatar:"Users_avatar__28Uw_",follow_unfollow_button:"Users_follow_unfollow_button__2kgTj",user_info:"Users_user_info__jMX1k",user_info_name:"Users_user_info_name__YGCc9",user_name:"Users_user_name__1Vq5z"}},176:function(e,t,n){},177:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(38),s=n(0),o=(n(1),n(98)),c=n.n(o),i=function(e){var t=e.meta,n=t.error,r=t.touched,o=e.children,i=(Object(a.a)(e,["meta","children"]),n&&r);return Object(s.jsxs)("div",{className:c.a.formControl+" "+(i?c.a.error:""),children:[Object(s.jsx)("div",{children:o}),i&&Object(s.jsx)("span",{children:n})]})},u=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(s.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(s.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},28:function(e,t,n){e.exports={dialog_window:"Messages_dialog_window__NGXtj",dialog_header:"Messages_dialog_header__2NTHl",dialog_footer:"Messages_dialog_footer__3sNge",button:"Messages_button__B4QTR",dialog_footer_textarea:"Messages_dialog_footer_textarea__2wUAq",dialog_body:"Messages_dialog_body__eTCSO",message_one:"Messages_message_one__158ii",message_two:"Messages_message_two__1bHxW",button_message:"Messages_button_message__3j5yC"}},303:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),o=n(64),c=n.n(o),i=(n(176),n(43)),u=n(44),l=n(47),d=n(46),j=(n(177),n(40)),f=n.n(j),b=n(17),p=function(e){return Object(r.jsx)("li",{className:f.a.nav_item,children:Object(r.jsx)(b.b,{className:f.a.nav_item_link,to:e.to,activeClassName:f.a.active,children:Object(r.jsx)("span",{children:e.item})})})},m=function(){return Object(r.jsx)("nav",{className:f.a.nav,children:Object(r.jsxs)("ul",{className:f.a.nav_list,children:[Object(r.jsx)(p,{to:"/profile",item:"Profile"}),Object(r.jsx)(p,{to:"/dialogs",item:"Dialogs"}),Object(r.jsx)(p,{to:"/news",item:"News"}),Object(r.jsx)(p,{to:"/music",item:"Music"}),Object(r.jsx)(p,{to:"/settings",item:"Settings"}),Object(r.jsx)(p,{to:"/users",item:"Users"})]})})},h=n(12),g=function(){return Object(r.jsx)("div",{children:"Dialogs"})},O=function(){return Object(r.jsx)("div",{children:"Music"})},_=n(39),x=n(3),v="samurai-network/message/ADD_MESSAGE",w={messages:[{id:1,name:"\u041e\u043d",textMessage:"Hello"},{id:2,name:"\u0422\u044b",textMessage:"Hello"},{id:1,name:"\u041e\u043d",textMessage:"\u0422\u044b \u0442\u0430\u043a\u0430\u044f \u0445\u043e\u0440\u043e\u0448\u0430\u044f! \u0422\u044b \u0434\u0430\u0436\u0435 \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u0441\u0430\u0445\u0430\u0440!"},{id:2,name:"\u0422\u044b",textMessage:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}]},P=n(28),N=n.n(P),k=n(136),y=n(137),S=n(22),C=n(55),M=n(104),I=(Object(C.a)(50),function(e){var t=e.messages,n=e.addMessage,a=t.map((function(e){return Object(r.jsxs)("div",{className:N.a.dialog_body,children:[Object(r.jsxs)("div",{className:1===e.id?N.a.message_one:"",children:[Object(r.jsx)("div",{children:1===e.id?e.name:null}),Object(r.jsx)("div",{children:1===e.id?e.textMessage:null})]}),Object(r.jsxs)("div",{className:2===e.id?N.a.message_two:"",children:[Object(r.jsx)("div",{children:2===e.id?e.name:null}),Object(r.jsx)("div",{children:2===e.id?e.textMessage:null})]})]},e.id)}));return Object(r.jsxs)("div",{className:N.a.dialog_window,children:[Object(r.jsxs)("div",{className:N.a.dialog_header,children:[Object(r.jsx)(b.b,{to:"/dialogs"}),Object(r.jsx)("div",{children:"Avatar + name"})]}),a,Object(r.jsx)(U,{onSubmit:function(e){n(e.newMessageText)}})]})}),U=Object(y.a)({form:"newMessageText"})((function(e){var t=e.handleSubmit;return Object(r.jsx)("form",{onSubmit:t,children:Object(r.jsxs)("div",{className:N.a.dialog_footer,children:[Object(r.jsx)(k.a,{component:S.b,name:"newMessageText",placeholder:"fake layout",className:N.a.dialog_footer_textarea}),Object(r.jsx)(M.a,{style:N.a.button_message,children:"Send"})]})})})),F=n(13),T=Object(F.b)((function(e){return{messages:e.messagesPage.messages}}),{addMessage:function(e){return{type:v,newMessageText:e}}})(I),E=n(62),A=n.n(E),D=Object(F.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))((function(e){var t=e.friends.map((function(e){return Object(r.jsxs)("li",{className:A.a.friends_item,children:[Object(r.jsx)("div",{className:A.a.friends_item_photo,children:Object(r.jsx)("img",{width:50,height:50,className:A.a.avatar,src:e.avatar,alt:e.name})}),Object(r.jsx)("span",{children:e.name})]},e.id)}));return Object(r.jsx)("ul",{className:A.a.friends_list,children:t})})),z=n(102),L=n.n(z),R=n(45),G=function(e){var t=e.photo,n=e.logoutTC,a=e.isAuth,s=e.login;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:L.a.site_name,children:[Object(r.jsx)("span",{children:"S"}),"pacebook"]}),Object(r.jsxs)("div",{className:L.a.login,children:[""===t.small?Object(r.jsx)("img",{src:R.a,width:"40px",height:"40px",alt:"avatar"}):Object(r.jsx)("img",{src:t.small,width:"40px",height:"40px",alt:"avatar"}),a?Object(r.jsxs)("div",{children:[s," - ",Object(r.jsx)("button",{onClick:n,children:"Log out"})]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})]})]})},J=n(7),W=n.n(J),H=n(14),B=n(11),q=n(27),Y="samurai-network/auth/SET_USER_DATA",V="samurai-network/auth/SET_USER_PHOTO",Q={id:null,email:null,login:null,isAuth:!1,photo:{small:"",large:""}},X=function(e,t,n,r){return{type:Y,payload:{id:e,email:t,login:n,isAuth:r}}},K=function(){return function(){var e=Object(H.a)(W.a.mark((function e(t){var n,r,a,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.b.me();case 2:(n=e.sent).resultCode===B.a.Success&&(r=n.data.id,a=n.data.email,s=n.data.login,t(X(r,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};console.log("getUserAuthData",K());var Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){return Object(r.jsx)(G,Object(x.a)({},e.props))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUserPhoto(e)}}]),n}(s.a.Component),$=Object(h.f)(Z),ee=Object(F.b)((function(e){return{id:e.auth.id,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth,photo:e.auth.photo}}),{getUserPhoto:function(e){return function(e){}},logoutTC:function(){return function(){var e=Object(H.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.b.logout();case 2:e.sent.resultCode===B.a.Success&&t(X(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})($),te=n(103),ne=n.n(te),re=Object(F.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:function(e,t,n,r){return function(){var a=Object(H.a)(W.a.mark((function a(s){var o,c;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,B.b.login(e,t,n,r);case 2:(o=a.sent).resultCode===B.a.Success?s(K()):(c=o.messages.length>0?o.messages[0]:"Some error",s(Object(q.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(h.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:ne.a.h1,children:"Login"}),Object(r.jsx)(ae,{onSubmit:function(t){e.loginTC(t.email,t.password,t.rememberMe,t.captcha)}})]})})),ae=Object(y.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{component:S.a,placeholder:"Login",name:"email",validate:[C.b]})}),Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{component:S.a,placeholder:"Password",name:"password",validate:[C.b],type:"password"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(k.a,{component:S.a,type:"checkbox",name:"rememberMe"}),"remember me"]}),n&&Object(r.jsx)("div",{className:ne.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),se=n(10),oe=n(54),ce={dialogs:[{id:1,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-1",lastMessage:"\u041f\u0440\u0438\u0432\u0435\u0442!",avatar:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png"},{id:2,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-2",lastMessage:"\u0425\u043e\u0447\u0443 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0442\u0435\u0431\u0435 \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u0441\u0438\u0434\u044f \u043d\u0430 \u0434\u0438\u0432\u0430\u043d\u0435",avatar:"https://www.liga.net/images/general/2019/02/14/20190214174624-8569.png"},{id:3,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-3",lastMessage:"\u0421\u043a\u0438\u043d\u044c \u0444\u043e\u0442\u043a\u0438",avatar:"https://bugaga.ru/uploads/posts/2019-10/1569918369_lica-3.jpg"},{id:4,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-4",lastMessage:"\u0421\u043e\u0442\u043a\u0443 \u043a\u043e\u0433\u0434\u0430 \u0432\u0435\u0440\u043d\u0435\u0448\u044c?",avatar:"https://the-steppe.com/new_loc_2/files/Molya/fake-person-twitter-tesla.webp"},{id:5,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-5",lastMessage:"\u0416\u0440\u0430\u0442\u044c \u043e\u0445\u043e\u0442\u0430",avatar:"https://texterra.ru/upload/img/10-08-2019/1.jpg"}]};var ie={friends:[{id:1,name:"\u0414\u0440\u0443\u0433-1",avatar:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png"},{id:2,name:"\u0414\u0440\u0443\u0433-2",avatar:"https://www.liga.net/images/general/2019/02/14/20190214174624-8569.png"},{id:3,name:"\u0414\u0440\u0443\u0433-3",avatar:"https://bugaga.ru/uploads/posts/2019-10/1569918369_lica-3.jpg"},{id:4,name:"\u0414\u0440\u0443\u0433-1",avatar:"https://the-steppe.com/new_loc_2/files/Molya/fake-person-twitter-tesla.webp"},{id:5,name:"\u0414\u0440\u0443\u0433-2",avatar:"https://texterra.ru/upload/img/10-08-2019/1.jpg"},{id:6,name:"\u0414\u0440\u0443\u0433-3",avatar:"https://cs9.pikabu.ru/post_img/big/2019/05/12/5/1557646415132392289.png"}]},ue=function(e,t,n,r){return e.map((function(e){return t===e[n]?Object(x.a)(Object(x.a)({},e),r):e}))},le="samurai-network/users/FOLLOW",de="samurai-network/users/UNFOLLOW",je="samurai-network/users/SET_USERS",fe="samurai-network/users/SET_CURRENT_PAGE",be="samurai-network/users/SET_TOTAL_USERS_COUNT",pe="samurai-network/users/TOGGLE_IS_FETCHING",me="samurai-network/users/TOGGLE_FOLLOWING_PROGRESS",he={users:[],pageSize:50,totalUsersCount:0,currentPage:2,isFetching:!1,followingInProgress:[]},ge=function(e){return{type:le,id:e}},Oe=function(e){return{type:de,id:e}},_e=function(e){return{type:pe,isFetching:e}},xe=function(e,t){return{type:me,isFetching:e,userId:t}},ve=function(){var e=Object(H.a)(W.a.mark((function e(t,n,r,a){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(xe(!0,t)),e.next=3,r(t);case 3:e.sent.data.resultCode===B.a.Success&&n(a(t)),n(xe(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),we=n(144),Pe=n(138),Ne="samurai-network/app/INITIALIZED_SUCCESS",ke={initialized:!1},ye=Object(se.c)({profilePage:oe.d,dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce;return e},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(x.a)(Object(x.a)({},e),{},{messages:[].concat(Object(_.a)(e.messages),[{id:2,name:"\u0422\u044b",textMessage:t.newMessageText}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(x.a)(Object(x.a)({},e),{},{users:ue(e.users,t.id,"id",{followed:!0})});case de:return Object(x.a)(Object(x.a)({},e),{},{users:ue(e.users,t.id,"id",{followed:!1})});case je:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case fe:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case be:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.totalCount});case pe:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case me:return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):Object(_.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(x.a)(Object(x.a)({},e),t.payload);case V:return Object(x.a)(Object(x.a)({},e),t.data);default:return e}},form:Pe.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(x.a)(Object(x.a)({},e),{},{initialized:!0});default:return e}}}),Se=Object(se.e)(ye,Object(se.a)(we.a)),Ce=n(37),Me=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(Ce.a,{}),children:Object(r.jsx)(e,Object(x.a)({},t))})}},Ie=n(73),Ue=n(33),Fe=n.n(Ue),Te=Object(y.a)({form:"edit-profile"})((function(e){var t=e.profile,n=(e.isOwner,e.handleSubmit),a=e.savePhoto,s=e.error;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:Fe.a.avatar,children:Object(r.jsx)("img",{src:t.photos.large||R.a,alt:"user avatar",width:"180",height:"180"})}),Object(r.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&a(e.target.files[0])}}),Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("span",{className:Fe.a.item_form,children:[" fullName:",Object(r.jsx)(k.a,{component:S.a,name:"fullName",placeholder:"Full name"})]}),Object(r.jsxs)("div",{className:Fe.a.item_form,children:[" lookingForAJobDescription:",Object(r.jsx)(k.a,{component:S.a,name:"lookingForAJobDescription",placeholder:"Empty"})]}),Object(r.jsxs)("div",{className:Fe.a.item_form,children:[" lookingForAJob:",Object(r.jsx)(k.a,{component:S.a,name:"lookingForAJob",placeholder:"Empty",type:"checkbox"})]}),Object(r.jsxs)("div",{className:Fe.a.item_form,children:[" AboutMe:",Object(r.jsx)(k.a,{component:S.b,name:"aboutMe",placeholder:"Empty"})]}),Object(r.jsxs)("div",{className:Fe.a.info_contacts,children:["contacts:",Object.keys(t.contacts).map((function(e){return Object(r.jsxs)("div",{children:[e,Object(r.jsx)(k.a,{component:S.a,name:"contacts."+e,placeholder:"Empty"},e)]})}))]}),s&&Object(r.jsx)("div",{className:Fe.a.formSummaryError,children:s}),Object(r.jsx)("button",{children:"Save"})]})]})})),Ee=n(135),Ae=Object(h.f)((function(e){var t=e.savePhoto,n=e.match,s=e.history,o=Object(F.d)((function(e){return e.profilePage.profile})),c=Object(F.d)((function(e){return e.auth.id})),i=Object(a.useState)(!1),u=Object(Ie.a)(i,2),l=u[0],d=u[1],j=Object(F.c)(),f=n.params.userId;return Object(a.useEffect)((function(){j(Object(oe.c)(f))}),[]),f||(f=c)||s.push("/login"),Object(r.jsx)("div",{children:l?Object(r.jsx)("div",{children:Object(r.jsx)(Te,{initialValues:o,isOwner:n.params.userId,profile:o,onSubmit:function(e){j(Object(oe.f)(e)),d(!l)},savePhoto:t,setEditMode:d,editMode:l})}):Object(r.jsxs)("div",{children:[Object(r.jsx)(Ee.a,{profile:o}),Object(r.jsx)("button",{onClick:function(){return d(!l)},children:"Edit"})]})})})),De=n(145),ze=Object(De.a)((function(e){return e.usersPage.users}),(function(e){return e})),Le=function(e){return e.usersPage.pageSize},Re=function(e){return e.usersPage.totalUsersCount},Ge=function(e){return e.usersPage.currentPage},Je=function(e){return e.usersPage.isFetching},We=function(e){return e.usersPage.followingInProgress},He=n(16),Be=n.n(He),qe=n(76),Ye=n(63),Ve=n.n(Ye),Qe=n(302),Xe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,o=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,u=Math.ceil(t/n),l=[],d=1;d<u;d++)l.push(d);var j=Math.ceil(u/i),f=Object(a.useState)(1),b=Object(Ie.a)(f,2),p=b[0],m=b[1],h=(p-1)*i+1,g=p*i;return Object(r.jsxs)("div",{className:Ve.a.users_paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){m(p-1)},children:"PREV"}),l.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(r.jsx)("div",{className:Ve.a.number,children:Object(r.jsx)("span",{className:Qe(Object(qe.a)({},Ve.a.selectPage,s===e),Ve.a.pageNumber),onClick:function(){o(e)},children:e},e)})})),j>p&&Object(r.jsx)("button",{onClick:function(){m(p+1)},children:"NEXT"})]})},Ke=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return Object(r.jsx)("div",{className:Be.a.users,children:Object(r.jsxs)("div",{className:Be.a.user,children:[Object(r.jsx)("div",{className:Be.a.user_avatar,children:Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{className:Be.a.avatar,src:null!==t.photos.large?t.photos.large:"".concat(R.a),alt:t.name})})}),Object(r.jsx)("div",{className:Be.a.button_followed,children:t.followed?Object(r.jsx)("button",{className:Be.a.follow_unfollow_button,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{className:Be.a.follow_unfollow_button,disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})}),Object(r.jsx)("div",{className:Be.a.user_info,children:Object(r.jsxs)("div",{className:Be.a.user_info_name,children:[Object(r.jsx)("div",{className:Be.a.user_name,children:t.name}),Object(r.jsx)("div",{className:Be.a.user_status,children:t.status})]})})]},t.id)})},Ze=function(e){var t=e.users,n=e.totalUsersCount,a=e.pageSize,s=e.currentPage,o=e.onPageChanged,c=e.followingInProgress,i=e.unfollow,u=e.follow;return Object(r.jsxs)("div",{className:Be.a.users,children:[Object(r.jsx)(Xe,{currentPage:s,onPageChanged:o,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{className:Be.a.users_list,children:t.map((function(e){return Object(r.jsx)(Ke,{user:e,followingInProgress:c,unfollow:i,follow:u},e.id)}))})]})},$e=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e.render=function(){return Object(r.jsxs)(r.Fragment,{children:[e.props.isFetching?Object(r.jsx)(Ce.a,{}):null,Object(r.jsx)(Ze,{users:e.props.users,follow:e.props.follow,unfollow:e.props.unfollow,pageSize:e.props.pageSize,totalUsersCount:e.props.totalUsersCount,currentPage:e.props.currentPage,onPageChanged:e.onPageChanged,followingInProgress:e.props.followingInProgress})]})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}}]),n}(s.a.Component),et=Object(h.f)($e),tt=Object(F.b)((function(e){return{users:ze(e),pageSize:Le(e),totalUsersCount:Re(e),currentPage:Ge(e),isFetching:Je(e),followingInProgress:We(e)}}),{follow:function(e){return function(){var t=Object(H.a)(W.a.mark((function t(n){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ve(e,n,B.d.follow.bind(B.d),ge);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(H.a)(W.a.mark((function t(n){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ve(e,n,B.d.unfollow.bind(B.d),Oe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(H.a)(W.a.mark((function n(r,a){var s;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(_e(!0)),r({type:fe,currentPage:e}),n.next=4,B.d.getUsers(e,t);case 4:s=n.sent,r((o=s.items,{type:je,users:o})),r((a=s.totalCount,{type:be,totalCount:a})),r(_e(!1));case 8:case"end":return n.stop()}var a,o}),n)})));return function(e,t){return n.apply(this,arguments)}}()}})(et),nt=s.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,352))})),rt=s.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(4)]).then(n.bind(null,351))})),at=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)("header",{className:"header",children:Object(r.jsx)(ee,{})}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)("main",{className:"content",children:[Object(r.jsx)("div",{className:"",children:Object(r.jsx)(m,{})}),Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(Ce.a,{}),children:Object(r.jsx)("div",{className:"main_content",children:Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(h.a,{to:"/profile"})}}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:Me(rt)}),Object(r.jsx)(h.b,{path:"/dialogs",render:Me(nt)}),Object(r.jsx)(h.b,{path:"/messages",render:function(){return Object(r.jsx)(T,{})}}),Object(r.jsx)(h.b,{path:"/news",render:function(){return Object(r.jsx)(g,{})}}),Object(r.jsx)(h.b,{path:"/music",render:function(){return Object(r.jsx)(O,{})}}),Object(r.jsx)(h.b,{path:"/users",render:function(){return Object(r.jsx)(tt,{})}}),Object(r.jsx)(h.b,{path:"/settings",render:function(){return Object(r.jsx)(Ae,{})}}),Object(r.jsx)(h.b,{path:"/login",component:function(){return Object(r.jsx)(re,{})}}),Object(r.jsx)(h.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})}),Object(r.jsx)("div",{className:"main_content_friends",children:Object(r.jsx)(D,{})})]})})]}):Object(r.jsx)(Ce.a,{})}}]),n}(s.a.Component),st=Object(se.d)(Object(F.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(H.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(K());case 2:n=e.sent,Promise.all([n]).then((function(){return t({type:Ne})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(at)),ot=function(){return Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b.a,{children:Object(r.jsx)(F.a,{store:Se,children:Object(r.jsx)(st,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}c.a.render(Object(r.jsx)(ot,{}),document.getElementById("root")),ct(),ct()},33:function(e,t,n){e.exports={item_form:"ProfileInfoForm_item_form__3nt98",info_contacts:"ProfileInfoForm_info_contacts__2Qd81",formSummaryError:"ProfileInfoForm_formSummaryError__1uWbT"}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=(n(1),n.p+"static/media/preloader.02e8bfc4.svg"),s=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("img",{src:a,alt:"preloader"})})}},40:function(e,t,n){e.exports={nav:"Navbar_nav__2G49n",nav_list:"Navbar_nav_list__195P5",nav_item:"Navbar_nav_item__l_UkN",nav_item_link:"Navbar_nav_item_link__2kja5"}},41:function(e,t,n){e.exports={list:"ProfileInfoDescription_list__3P-_a",item:"ProfileInfoDescription_item__14t3s",item_fullName:"ProfileInfoDescription_item_fullName__1hW3I"}},45:function(e,t,n){"use strict";t.a=n.p+"static/media/ufo-2.3c1ecb26.png"},54:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return x})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return P}));var r=n(7),a=n.n(r),s=n(14),o=n(39),c=n(3),i=n(11),u=n(27),l="samurai-network/profile/ADD_POST",d="samurai-network/profile/SET_PROFILE_INFO",j="samurai-network/profile/SET_STATUS",f="samurai-network/profile/UPDATE_STATUS",b="samurai-network/profile/SAVE_PHOTO",p={posts:[{id:1,message:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u044b\u043b \u0447\u0443\u0434\u0435\u0441\u043d\u044b\u0439 \u0434\u0435\u043d\u044c!",like:25},{id:2,message:"\u042f \u043f\u043e\u043a\u0443\u0448\u0430\u043b \u0438 \u043f\u043e\u0441\u043f\u0430\u043b",like:40},{id:3,message:"\u041d\u043e \u043d\u0435 \u0432\u044b\u0441\u043f\u0430\u043b\u0441\u044f",like:1}],profile:null,status:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{posts:[{id:5,message:t.newPostText,like:25}].concat(Object(o.a)(e.posts))});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case j:case f:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case b:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photo})});default:return e}},h=function(e){return{type:l,newPostText:e}},g=function(e){return{type:f,status:e}},O=function(e){return{type:b,photo:e}},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n({type:d,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getStatus(e);case 2:r=t.sent,n((a=r.data,{type:j,status:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.updateStatus(e);case 2:t.sent.data.resultCode===i.a.Success&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.savePhoto(e);case 2:(r=t.sent).data.resultCode===i.a.Success&&(console.log("res.data.data",r.data.data),n(O(r.data.data)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.id,t.next=3,i.c.updateProfile(e);case 3:if((o=t.sent).data.resultCode!==i.a.Success){t.next=8;break}n(_(s)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},62:function(e,t,n){e.exports={friends_list:"Friends_friends_list__3NkUf",friends_item:"Friends_friends_item__1J0bI",friends_item_photo:"Friends_friends_item_photo__3P5pY",avatar:"Friends_avatar__3Qndj"}},63:function(e,t,n){e.exports={users_paginator:"Paginator_users_paginator__2NMhY",selectPage:"Paginator_selectPage__BqcPI",page:"Paginator_page__3OIl6"}},98:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue"}}},[[303,2,3]]]);
//# sourceMappingURL=main.5a0c1e4e.chunk.js.map
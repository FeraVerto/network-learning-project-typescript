(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},110:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue"}},114:function(e,t,n){e.exports={site_name:"Header_site_name__1fFFR",login:"Header_login__31kC2"}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var r,a=n(149),s=n.n(a);!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.captchaIsRequired=10]="captchaIsRequired"}(r||(r={}));var o=s.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"60b88672-b40f-4a98-87f4-2eaf9580a4aa"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return o.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n,"&friend=").concat(r)).then((function(e){return e.data}))},getUsersPage:function(e,t){return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),i.getProfile(e)},follow:function(e){return o.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(e))},unfollow:function(e){return o.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e))}},i={getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),o.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return o.get("profile/status/"+e)},updateStatus:function(e){return o.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),o.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfile:function(e){return o.put("/profile",e)}},u={me:function(){return o.get("auth/me").then((function(e){return e.data}))},login:function(e,t,n,r){return o.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return o.delete("/auth/login").then((function(e){return e.data}))}}},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n(47),s=n.n(a),o=(n(0),function(e){return Object(r.jsx)("div",{children:null!==e.profile&&Object(r.jsxs)("ul",{className:s.a.list,children:[Object(r.jsx)("li",{className:s.a.item,children:Object(r.jsx)("span",{className:s.a.item_fullName,children:Object(r.jsx)("b",{children:e.profile.fullName})})}),e.profile.lookingForAJobDescription&&Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{children:"Description:"}),e.profile.lookingForAJobDescription]}),e.profile.lookingForAJob&&Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{children:"looking For A Job:"}),e.profile.lookingForAJob]}),e.profile.aboutMe&&Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{children:"About   Me:"}),e.profile.aboutMe]})]})})})},15:function(e,t,n){e.exports={form:"ProfileInfoForm_form__1TAwG",form_block:"ProfileInfoForm_form_block__4C_ct",form_block_info:"ProfileInfoForm_form_block_info__1nIge",form_block_contacts:"ProfileInfoForm_form_block_contacts__3Vg1F",item_form_aboutMe:"ProfileInfoForm_item_form_aboutMe__1Nz51",item_form_job:"ProfileInfoForm_item_form_job__21u5V",item_form:"ProfileInfoForm_item_form__3nt98",item:"ProfileInfoForm_item__2-GhK",info_contacts:"ProfileInfoForm_info_contacts__2Qd81",item_contact:"ProfileInfoForm_item_contact__2sU3F",formSummaryError:"ProfileInfoForm_formSummaryError__1uWbT"}},185:function(e,t,n){},186:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(3),a=n(44),s=n(1),o=(n(0),n(82)),c=n.n(o),i=function(e){var t=e.style,n=e.children,o=e.onChange,i=e.onClick,u=Object(a.a)(e,["style","children","onChange","onClick"]);return console.log("Button",t),Object(s.jsx)("button",Object(r.a)(Object(r.a)({className:c.a.button+" "+t,onChange:o,onClick:i},u),{},{children:n}))}},20:function(e,t,n){e.exports={users:"Users_users__2Whu_",users_list:"Users_users_list__3DzG6",user:"Users_user__12P5P",user_avatar:"Users_user_avatar__1PI_a",avatar:"Users_avatar__28Uw_",follow_unfollow_button:"Users_follow_unfollow_button__2kgTj",user_info:"Users_user_info__jMX1k",user_info_name:"Users_user_info_name__YGCc9",user_name:"Users_user_name__1Vq5z"}},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(44),s=n(1),o=(n(0),n(110)),c=n.n(o),i=function(e){var t=e.meta,n=t.error,r=t.touched,o=e.children,i=(Object(a.a)(e,["meta","children"]),n&&r);return Object(s.jsxs)("div",{className:c.a.formControl+" "+(i?c.a.error:""),children:[Object(s.jsx)("div",{children:o}),i&&Object(s.jsx)("span",{children:n})]})},u=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(s.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(s.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},306:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),s=n.n(a),o=n(71),c=n.n(o),i=(n(185),n(49)),u=n(50),l=n(53),d=n(52),f=(n(186),n(46)),j=n.n(f),m=n(18),b=function(e){return Object(r.jsx)("li",{className:j.a.nav_item,children:Object(r.jsx)(m.b,{className:j.a.nav_item_link,to:e.to,activeClassName:j.a.active,children:Object(r.jsx)("span",{children:e.item})})})},p=function(){return Object(r.jsx)("nav",{className:j.a.nav,children:Object(r.jsxs)("ul",{className:j.a.nav_list,children:[Object(r.jsx)(b,{to:"/profile",item:"Profile"}),Object(r.jsx)(b,{to:"/dialogs",item:"Dialogs"}),Object(r.jsx)(b,{to:"/friends",item:"Friends"}),Object(r.jsx)(b,{to:"/settings",item:"Settings"}),Object(r.jsx)(b,{to:"/users",item:"Users"})]})})},_=n(13),h=n(45),g=n(3),O="samurai-network/message/ADD_MESSAGE",x={messages:[{id:1,name:"\u041e\u043d",textMessage:"Hello"},{id:2,name:"\u0422\u044b",textMessage:"Hello"},{id:1,name:"\u041e\u043d",textMessage:"\u0422\u044b \u0442\u0430\u043a\u0430\u044f \u0445\u043e\u0440\u043e\u0448\u0430\u044f! \u0422\u044b \u0434\u0430\u0436\u0435 \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u0441\u0430\u0445\u0430\u0440!"},{id:2,name:"\u0422\u044b",textMessage:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041f\u0440\u0438\u0445\u043e\u0434\u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}]},v=n(32),w=n.n(v),N=n(144),P=n(145),S=n(26),k=n(19),y=function(e){var t=e.messages,n=e.addMessage,a=t.map((function(e){return Object(r.jsxs)("div",{className:w.a.dialog_body,children:[Object(r.jsxs)("div",{className:1===e.id?w.a.message_one:"",children:[Object(r.jsx)("div",{children:1===e.id?e.name:null}),Object(r.jsx)("div",{children:1===e.id?e.textMessage:null})]}),Object(r.jsxs)("div",{className:2===e.id?w.a.message_two:"",children:[Object(r.jsx)("div",{children:2===e.id?e.name:null}),Object(r.jsx)("div",{children:2===e.id?e.textMessage:null})]})]},e.id)}));return Object(r.jsxs)("div",{className:w.a.dialog_window,children:[Object(r.jsxs)("div",{className:w.a.dialog_header,children:[Object(r.jsx)(m.b,{to:"/dialogs",children:Object(r.jsx)(m.b,{className:w.a.button,to:"/dialogs",children:"Exit"})}),Object(r.jsx)("div",{children:"Avatar + name"})]}),a,Object(r.jsx)(C,{onSubmit:function(e){n(e.newMessageText)}})]})},C=Object(P.a)({form:"newMessageText"})((function(e){var t=e.handleSubmit;return Object(r.jsx)("form",{onSubmit:t,children:Object(r.jsxs)("div",{className:w.a.dialog_footer,children:[Object(r.jsx)(N.a,{component:S.b,name:"newMessageText",placeholder:"fake layout",className:w.a.dialog_footer_textarea}),Object(r.jsx)(k.a,{style:w.a.button_message,children:"Send"})]})})})),F=n(10),I=Object(F.b)((function(e){return{messages:e.messagesPage.messages}}),{addMessage:function(e){return{type:O,newMessageText:e}}})(y),M=n(69),U=n.n(M),T=Object(F.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))((function(e){var t=e.friends.map((function(e){return Object(r.jsxs)("li",{className:U.a.friends_item,children:[Object(r.jsx)("div",{className:U.a.friends_item_photo,children:Object(r.jsx)("img",{width:50,height:50,className:U.a.avatar,src:e.avatar,alt:e.name})}),Object(r.jsx)("span",{children:e.name})]},e.id)}));return Object(r.jsx)("ul",{className:U.a.friends_list,children:t})})),E=n(114),A=n.n(E),z=n(84),L=n(82),D=n.n(L),R=function(e){var t=e.photo,n=e.logoutTC,a=e.isAuth,s=e.login;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:A.a.site_name,children:[Object(r.jsx)("span",{children:"S"}),"pacebook"]}),Object(r.jsxs)("div",{className:A.a.login,children:[""===t.small?Object(r.jsx)("img",{src:z.a,width:"40px",height:"40px",alt:"avatar"}):Object(r.jsx)("img",{src:t.small,width:"40px",height:"40px",alt:"avatar"}),a?Object(r.jsxs)("div",{children:[s," ",Object(r.jsx)(k.a,{onClick:n,children:"Log out"})]}):Object(r.jsx)(m.b,{className:D.a.button,to:"/login",children:"Login"})]})]})},G=n(7),J=n.n(G),W=n(16),H=n(12),V=n(34),q="samurai-network/auth/SET_USER_DATA",B="samurai-network/auth/SET_USER_PHOTO",Y={id:null,email:null,login:null,isAuth:!1,photo:{small:"",large:""}},X=function(e,t,n,r){return{type:q,payload:{id:e,email:t,login:n,isAuth:r}}},Q=function(){return function(){var e=Object(W.a)(J.a.mark((function e(t){var n,r,a,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.b.me();case 2:(n=e.sent).resultCode===H.a.Success&&(r=n.data.id,a=n.data.email,s=n.data.login,t(X(r,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};console.log("getUserAuthData",Q());var K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).render=function(){return Object(r.jsx)(R,Object(g.a)({},e.props))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUserPhoto(e)}}]),n}(s.a.Component),Z=Object(_.f)(K),$=Object(F.b)((function(e){return{id:e.auth.id,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth,photo:e.auth.photo}}),{getUserPhoto:function(e){return function(e){}},logoutTC:function(){return function(){var e=Object(W.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.b.logout();case 2:e.sent.resultCode===H.a.Success&&t(X(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Z),ee=n(36),te=n.n(ee),ne=n(107),re=Object(F.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:function(e,t,n,r){return function(){var a=Object(W.a)(J.a.mark((function a(s){var o,c;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,H.b.login(e,t,n,r);case 2:(o=a.sent).resultCode===H.a.Success?s(Q()):(c=o.messages.length>0?o.messages[0]:"Some error",s(Object(V.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(_.a,{to:"/profile"}):Object(r.jsxs)("div",{className:te.a.login,children:[Object(r.jsx)("h1",{className:te.a.h1,children:"Login"}),Object(r.jsx)(ae,{onSubmit:function(t){e.loginTC(t.email,t.password,t.rememberMe,t.captcha)}})]})})),ae=Object(P.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{className:te.a.form,onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(N.a,{component:S.a,placeholder:"Login",name:"email",validate:[ne.b],className:te.a.item})}),Object(r.jsx)("div",{children:Object(r.jsx)(N.a,{component:S.a,placeholder:"Password",name:"password",validate:[ne.b],type:"password",className:te.a.item})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(N.a,{component:S.a,type:"checkbox",name:"rememberMe",className:te.a.item}),"remember me"]}),n&&Object(r.jsx)("div",{className:te.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{style:te.a.button_login,children:"Login"})})]})})),se=n(11),oe=n(62),ce={dialogs:[{id:1,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-1",lastMessage:"\u041f\u0440\u0438\u0432\u0435\u0442!",avatar:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png"},{id:2,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-2",lastMessage:"\u0425\u043e\u0447\u0443 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0442\u0435\u0431\u0435 \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u0441\u0438\u0434\u044f \u043d\u0430 \u0434\u0438\u0432\u0430\u043d\u0435",avatar:"https://www.liga.net/images/general/2019/02/14/20190214174624-8569.png"},{id:3,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-3",lastMessage:"\u0421\u043a\u0438\u043d\u044c \u0444\u043e\u0442\u043a\u0438",avatar:"https://bugaga.ru/uploads/posts/2019-10/1569918369_lica-3.jpg"},{id:4,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-4",lastMessage:"\u0421\u043e\u0442\u043a\u0443 \u043a\u043e\u0433\u0434\u0430 \u0432\u0435\u0440\u043d\u0435\u0448\u044c?",avatar:"https://the-steppe.com/new_loc_2/files/Molya/fake-person-twitter-tesla.webp"},{id:5,name:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a-5",lastMessage:"\u0416\u0440\u0430\u0442\u044c \u043e\u0445\u043e\u0442\u0430",avatar:"https://texterra.ru/upload/img/10-08-2019/1.jpg"}]};var ie={friends:[{id:1,name:"\u0414\u0440\u0443\u0433-1",avatar:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png"},{id:2,name:"\u0414\u0440\u0443\u0433-2",avatar:"https://www.liga.net/images/general/2019/02/14/20190214174624-8569.png"},{id:3,name:"\u0414\u0440\u0443\u0433-3",avatar:"https://bugaga.ru/uploads/posts/2019-10/1569918369_lica-3.jpg"},{id:4,name:"\u0414\u0440\u0443\u0433-1",avatar:"https://the-steppe.com/new_loc_2/files/Molya/fake-person-twitter-tesla.webp"},{id:5,name:"\u0414\u0440\u0443\u0433-2",avatar:"https://texterra.ru/upload/img/10-08-2019/1.jpg"},{id:6,name:"\u0414\u0440\u0443\u0433-3",avatar:"https://cs9.pikabu.ru/post_img/big/2019/05/12/5/1557646415132392289.png"}]},ue=function(e,t,n,r){return e.map((function(e){return t===e[n]?Object(g.a)(Object(g.a)({},e),r):e}))},le="samurai-network/users/FOLLOW",de="samurai-network/users/UNFOLLOW",fe="samurai-network/users/SET_USERS",je="samurai-network/users/SET_CURRENT_PAGE",me="samurai-network/users/SET_TOTAL_USERS_COUNT",be="samurai-network/users/TOGGLE_IS_FETCHING",pe="samurai-network/users/TOGGLE_FOLLOWING_PROGRESS",_e="samurai-network/users/SET_FILTER",he={users:[],pageSize:20,totalUsersCount:0,currentPage:2,isFetching:!1,followingInProgress:[],searchOption:""},ge=function(e){return{type:le,id:e}},Oe=function(e){return{type:de,id:e}},xe=function(e){return{type:be,isFetching:e}},ve=function(e,t){return{type:pe,isFetching:e,userId:t}},we=function(e){return{type:_e,term:e}},Ne=function(){var e=Object(W.a)(J.a.mark((function e(t,n,r,a){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(ve(!0,t)),e.next=3,r(t);case 3:e.sent.data.resultCode===H.a.Success&&n(a(t)),n(ve(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Pe=n(150),Se=n(146),ke="samurai-network/app/INITIALIZED_SUCCESS",ye={initialized:!1},Ce=Object(se.c)({profilePage:oe.d,dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce;return e},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(g.a)(Object(g.a)({},e),{},{messages:[].concat(Object(h.a)(e.messages),[{id:2,name:"\u0422\u044b",textMessage:t.newMessageText}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(g.a)(Object(g.a)({},e),{},{users:ue(e.users,t.id,"id",{followed:!0})});case de:return Object(g.a)(Object(g.a)({},e),{},{users:ue(e.users,t.id,"id",{followed:!1})});case fe:return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case je:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case me:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalCount});case be:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case pe:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(h.a)(e.followingInProgress),[t.userId]):Object(h.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});case _e:return Object(g.a)(Object(g.a)({},e),{},{searchOption:t.term});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(g.a)(Object(g.a)({},e),t.payload);case B:return Object(g.a)(Object(g.a)({},e),t.data);default:return e}},form:Se.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}}}),Fe=Object(se.e)(Ce,Object(se.a)(Pe.a)),Ie=n(43),Me=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(Ie.a,{}),children:Object(r.jsx)(e,Object(g.a)({},t))})}},Ue=n(81),Te=n(15),Ee=n.n(Te),Ae=Object(P.a)({form:"edit-profile"})((function(e){var t=e.profile,n=(e.isOwner,e.handleSubmit),a=(e.savePhoto,e.error);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{className:Ee.a.form,onSubmit:n,children:[Object(r.jsxs)("div",{className:Ee.a.form_block,children:[Object(r.jsxs)("div",{className:Ee.a.form_block_info,children:[Object(r.jsxs)("div",{className:Ee.a.item_form,children:[" full Name:",Object(r.jsx)(N.a,{component:S.a,name:"fullName",placeholder:"Full name",className:"".concat(Ee.a.item_form_fullName," ").concat(Ee.a.item)})]}),Object(r.jsxs)("div",{className:Ee.a.item_form,children:[" looking For A Job Description:",Object(r.jsx)(N.a,{component:S.a,name:"lookingForAJobDescription",placeholder:"Empty",className:"".concat(Ee.a.item_form_description," ").concat(Ee.a.item)})]}),Object(r.jsxs)("div",{className:Ee.a.item_form,children:[" About Me:",Object(r.jsx)(N.a,{component:S.b,name:"aboutMe",placeholder:"Empty",className:"".concat(Ee.a.item_form_aboutMe," ").concat(Ee.a.item)})]}),Object(r.jsxs)("div",{className:Ee.a.item_form,children:[" looking For A Job:",Object(r.jsx)(N.a,{component:S.a,name:"lookingForAJob",placeholder:"Empty",type:"checkbox",className:"".concat(Ee.a.item_form_job," ").concat(Ee.a.item)})]})]}),Object(r.jsx)("div",{className:Ee.a.form_block_contacts,children:Object(r.jsx)("div",{children:Object.keys(t.contacts).map((function(e){return Object(r.jsxs)("div",{className:Ee.a.item_form,children:[e,Object(r.jsx)(N.a,{component:S.a,name:"contacts."+e,placeholder:"Empty",className:Ee.a.item},e)]})}))})})]}),Object(r.jsx)(k.a,{children:"Save"}),a&&Object(r.jsx)("div",{className:Ee.a.formSummaryError,children:a})]})})})),ze=n(143),Le=n(57),De=n.n(Le),Re=Object(_.f)((function(e){var t=e.savePhoto,n=e.match,s=e.history,o=Object(F.d)((function(e){return e.profilePage.profile})),c=Object(F.d)((function(e){return e.auth.id})),i=Object(a.useState)(!1),u=Object(Ue.a)(i,2),l=u[0],d=u[1],f=Object(F.c)(),j=n.params.userId;return Object(a.useEffect)((function(){f(Object(oe.c)(j))}),[]),j||(j=c)||s.push("/login"),Object(r.jsx)("div",{className:De.a.settings,children:l?Object(r.jsx)("div",{className:De.a.settings_form,children:Object(r.jsx)(Ae,{initialValues:o,isOwner:n.params.userId,profile:o,onSubmit:function(e){f(Object(oe.f)(e)),d(!l)},savePhoto:t,setEditMode:d,editMode:l})}):Object(r.jsxs)("div",{className:De.a.settings_info,children:[Object(r.jsx)("div",{className:De.a.settings_info_description,children:Object(r.jsx)(ze.a,{profile:o})}),Object(r.jsx)(k.a,{style:De.a.button_width,onClick:function(){return d(!l)},children:"Edit"})]})})})),Ge=n(151),Je=Object(Ge.a)((function(e){return e.usersPage.users}),(function(e){return e})),We=function(e){return e.usersPage.pageSize},He=function(e){return e.usersPage.totalUsersCount},Ve=function(e){return e.usersPage.currentPage},qe=function(e){return e.usersPage.isFetching},Be=function(e){return e.usersPage.followingInProgress},Ye=function(e){return e.usersPage.searchOption},Xe=n(20),Qe=n.n(Xe),Ke=n(86),Ze=n(70),$e=n.n(Ze),et=n(307),tt=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,o=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,u=Math.ceil(t/n),l=[],d=1;d<u;d++)l.push(d);var f=Math.ceil(u/i),j=Object(a.useState)(1),m=Object(Ue.a)(j,2),b=m[0],p=m[1],_=(b-1)*i+1,h=b*i;return Object(r.jsxs)("div",{className:$e.a.users_paginator,children:[f>1&&Object(r.jsx)(k.a,{onClick:function(){p(b-1)},children:"PREV"}),l.filter((function(e){return e>=_&&e<=h})).map((function(e){return Object(r.jsx)("div",{className:$e.a.number,children:Object(r.jsx)("button",{className:et(Object(Ke.a)({},$e.a.selectPage,s===e),$e.a.pageNumber),onClick:function(){o(e)},children:e},e)})})),f>b&&Object(r.jsx)(k.a,{onClick:function(){p(b+1)},children:"NEXT"})]})},nt=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return Object(r.jsx)("div",{className:Qe.a.users,children:Object(r.jsxs)("div",{className:Qe.a.user,children:[Object(r.jsx)("div",{className:Qe.a.user_avatar,children:Object(r.jsx)(m.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{className:Qe.a.avatar,src:null!==t.photos.large?t.photos.large:"".concat(z.a),alt:t.name})})}),Object(r.jsx)("div",{className:Qe.a.button_followed,children:t.followed?Object(r.jsx)("button",{className:Qe.a.follow_unfollow_button,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{className:Qe.a.follow_unfollow_button,disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})}),Object(r.jsx)("div",{className:Qe.a.user_info,children:Object(r.jsxs)("div",{className:Qe.a.user_info_name,children:[Object(r.jsx)("div",{className:Qe.a.user_name,children:t.name}),Object(r.jsx)("div",{className:Qe.a.user_status,children:t.status})]})})]},t.id)})},rt=n(154),at=n(91),st=n.n(at),ot=function(e){var t=Object(rt.a)({initialValues:{term:""},onSubmit:function(t){e.onSearch(t)}});return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,className:st.a.search_form,children:[Object(r.jsx)("input",{id:"term",name:"term",type:"text",onChange:t.handleChange,value:t.values.term,className:st.a.search_input}),Object(r.jsx)(k.a,{style:st.a.search_button,children:"Search"})]})},ct=function(e){var t=e.users,n=e.totalUsersCount,a=e.pageSize,s=e.currentPage,o=e.onPageChanged,c=e.followingInProgress,i=e.unfollow,u=e.follow,l=e.onSearch;return Object(r.jsxs)("div",{className:Qe.a.users,children:[Object(r.jsx)(ot,{onSearch:l}),Object(r.jsx)("div",{className:Qe.a.users_list,children:t.map((function(e){return Object(r.jsx)(nt,{user:e,followingInProgress:c,unfollow:i,follow:u},e.id)}))}),Object(r.jsx)(tt,{currentPage:s,onPageChanged:o,totalItemsCount:n,pageSize:a})]})},it=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n,e.props.searchOption)},e.onSearch=function(t){e.props.getUsers(1,e.props.pageSize,t.term)},e.render=function(){return Object(r.jsxs)(r.Fragment,{children:[e.props.isFetching?Object(r.jsx)(Ie.a,{}):null,Object(r.jsx)(ct,{users:e.props.users,follow:e.props.follow,unfollow:e.props.unfollow,pageSize:e.props.pageSize,totalUsersCount:e.props.totalUsersCount,currentPage:e.props.currentPage,onPageChanged:e.onPageChanged,followingInProgress:e.props.followingInProgress,onSearch:e.onSearch})]})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n,this.props.searchOption)}}]),n}(s.a.Component),ut=Object(_.f)(it),lt=Object(F.b)((function(e){return{users:Je(e),pageSize:We(e),totalUsersCount:He(e),currentPage:Ve(e),isFetching:qe(e),followingInProgress:Be(e),searchOption:Ye(e)}}),{follow:function(e){return function(){var t=Object(W.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ne(e,n,H.d.follow.bind(H.d),ge);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(W.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ne(e,n,H.d.unfollow.bind(H.d),Oe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t,n,r){return function(){var r=Object(W.a)(J.a.mark((function r(a,s){var o;return J.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(xe(!0)),a({type:je,currentPage:e}),a(we(n)),r.next=5,H.d.getUsers(e,t,n);case 5:o=r.sent,console.log("requestUsers",o),a((c=o.items,{type:fe,users:c})),a((s=o.totalCount,{type:me,totalCount:s})),a(xe(!1));case 10:case"end":return r.stop()}var s,c}),r)})));return function(e,t){return r.apply(this,arguments)}}()}})(ut),dt=function(e){Object(F.c)();Object(a.useEffect)((function(){}));var t=Object(F.d)((function(e){return e.usersPage.users}));return console.log("friends",t),Object(r.jsx)("div",{})},ft=s.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,357))})),jt=s.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(4)]).then(n.bind(null,356))})),mt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)("header",{className:"header",children:Object(r.jsx)($,{})}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)("main",{className:"content",children:[Object(r.jsx)("div",{className:"",children:Object(r.jsx)(p,{})}),Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(Ie.a,{}),children:Object(r.jsx)("div",{className:"main_content",children:Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(_.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(_.a,{to:"/profile"})}}),Object(r.jsx)(_.b,{path:"/profile/:userId?",render:Me(jt)}),Object(r.jsx)(_.b,{path:"/dialogs",render:Me(ft)}),Object(r.jsx)(_.b,{path:"/friends",component:function(){return Object(r.jsx)(dt,{})}}),Object(r.jsx)(_.b,{path:"/messages",render:function(){return Object(r.jsx)(I,{})}}),Object(r.jsx)(_.b,{path:"/users",render:function(){return Object(r.jsx)(lt,{})}}),Object(r.jsx)(_.b,{path:"/settings",render:function(){return Object(r.jsx)(Re,{})}}),Object(r.jsx)(_.b,{path:"/login",component:function(){return Object(r.jsx)(re,{})}}),Object(r.jsx)(_.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})}),Object(r.jsx)("div",{className:"main_content_friends",children:Object(r.jsx)(T,{})})]})})]}):Object(r.jsx)(Ie.a,{})}}]),n}(s.a.Component),bt=Object(se.d)(Object(F.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(W.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Q());case 2:n=e.sent,Promise.all([n]).then((function(){return t({type:ke})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(mt)),pt=function(){return Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m.a,{children:Object(r.jsx)(F.a,{store:Fe,children:Object(r.jsx)(bt,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _t(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}c.a.render(Object(r.jsx)(pt,{}),document.getElementById("root")),_t(),_t()},32:function(e,t,n){e.exports={dialog_window:"Messages_dialog_window__NGXtj",dialog_header:"Messages_dialog_header__2NTHl",dialog_footer:"Messages_dialog_footer__3sNge",button:"Messages_button__B4QTR",dialog_footer_textarea:"Messages_dialog_footer_textarea__2wUAq",dialog_body:"Messages_dialog_body__eTCSO",message_one:"Messages_message_one__158ii",message_two:"Messages_message_two__1bHxW",button_message:"Messages_button_message__3j5yC"}},36:function(e,t,n){e.exports={h1:"Login_h1__3d9UL",form:"Login_form__3xFWW",item:"Login_item__2Z20d",formSummaryError:"Login_formSummaryError__3l-5r",button_login:"Login_button_login__2yThS"}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),a=(n(0),n.p+"static/media/preloader.02e8bfc4.svg"),s=(n(306),function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("img",{src:a,alt:"preloader"})})})},46:function(e,t,n){e.exports={nav:"Navbar_nav__2G49n",nav_list:"Navbar_nav_list__195P5",nav_item:"Navbar_nav_item__l_UkN",nav_item_link:"Navbar_nav_item_link__2kja5"}},47:function(e,t,n){e.exports={list:"ProfileInfoDescription_list__3P-_a",item:"ProfileInfoDescription_item__14t3s",item_fullName:"ProfileInfoDescription_item_fullName__1hW3I"}},57:function(e,t,n){e.exports={settings:"Settings_settings__VMqiu",settings_info:"Settings_settings_info__3sAFs",settings_info_description:"Settings_settings_info_description__3MwYH",button_width:"Settings_button_width__2YfXV"}},62:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return _})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return x})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return N}));var r=n(7),a=n.n(r),s=n(16),o=n(45),c=n(3),i=n(12),u=n(34),l="samurai-network/profile/ADD_POST",d="samurai-network/profile/SET_PROFILE_INFO",f="samurai-network/profile/SET_STATUS",j="samurai-network/profile/UPDATE_STATUS",m="samurai-network/profile/SAVE_PHOTO",b={posts:[{id:1,message:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u044b\u043b \u0447\u0443\u0434\u0435\u0441\u043d\u044b\u0439 \u0434\u0435\u043d\u044c!",like:25},{id:2,message:"\u042f \u043f\u043e\u043a\u0443\u0448\u0430\u043b \u0438 \u043f\u043e\u0441\u043f\u0430\u043b",like:40},{id:3,message:"\u041d\u043e \u043d\u0435 \u0432\u044b\u0441\u043f\u0430\u043b\u0441\u044f",like:1}],profile:null,status:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{posts:[{id:5,message:t.newPostText,like:25}].concat(Object(o.a)(e.posts))});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case f:case j:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case m:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photo})});default:return e}},_=function(e){return{type:l,newPostText:e}},h=function(e){return{type:j,status:e}},g=function(e){return{type:m,photo:e}},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n({type:d,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getStatus(e);case 2:r=t.sent,n((a=r.data,{type:f,status:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.updateStatus(e);case 2:t.sent.data.resultCode===i.a.Success&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.savePhoto(e);case 2:(r=t.sent).data.resultCode===i.a.Success&&(console.log("res.data.data",r.data.data),n(g(r.data.data)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.id,t.next=3,i.c.updateProfile(e);case 3:if((o=t.sent).data.resultCode!==i.a.Success){t.next=8;break}n(O(s)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},69:function(e,t,n){e.exports={friends_list:"Friends_friends_list__3NkUf",friends_item:"Friends_friends_item__1J0bI",friends_item_photo:"Friends_friends_item_photo__3P5pY",avatar:"Friends_avatar__3Qndj"}},70:function(e,t,n){e.exports={users_paginator:"Paginator_users_paginator__2NMhY",page:"Paginator_page__3OIl6",pageNumber:"Paginator_pageNumber__2135a",selectPage:"Paginator_selectPage__BqcPI"}},82:function(e,t,n){e.exports={button:"Button_button__20FYT",background:"Button_background__3R9h_"}},84:function(e,t,n){"use strict";t.a=n.p+"static/media/ufo-2.3c1ecb26.png"},91:function(e,t,n){e.exports={search_form:"UserSearch_search_form__2mdu8",search_input:"UserSearch_search_input__39ReR",search_button:"UserSearch_search_button__nTuw7"}}},[[308,2,3]]]);
//# sourceMappingURL=main.3ee1c1c9.chunk.js.map
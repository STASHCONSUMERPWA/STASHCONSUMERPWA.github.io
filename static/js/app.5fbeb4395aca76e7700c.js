webpackJsonp([1],{"5wlR":function(t,e){},"8iYk":function(t,e){},DXZv:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),s=a("1mcD"),n=a.n(s),i=a("It2I"),o=a.n(i),c=(a("3VHS"),a("Dd8w")),l=a.n(c),u=a("NYxO"),m={name:"GeneralHeader",computed:l()({},Object(u.b)(["isAuthenticated","currentCart"]))},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("\n      STASH\n    ")]),t._v(" "),t.isAuthenticated?a("ul",{staticClass:"nav navbar-nav pull-xs-right"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"wallet"}}},[a("i",{staticClass:"ion-cash"}),t._v("  "),a("b",[t._v("SGD 20")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"inbox"}}},[a("b",[a("i",{staticClass:"ion-ios-email-outline"})])])],1),t._v(" "),t.currentCart.length>=1?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"cart"}}},[a("b",{staticClass:"currentCart"},[a("i",{staticClass:"ion-android-cart"})])])],1):t._e()]):t._e()],1)])},staticRenderFns:[]};var v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("footer",[e("div",{staticClass:"container"},[e("router-link",{staticClass:"logo-font",attrs:{to:{name:"home",params:{}}}},[this._v("\n        STASH\n      ")]),this._v(" "),e("span",{staticClass:"attribution"},[this._v("\n        A project made by customer for you\n      ")])],1)])])},staticRenderFns:[]},p={name:"App",components:{GeneralHeader:a("VU/8")(m,d,!1,function(t){a("vvZK")},"data-v-6f564165",null).exports,GeneralFooter:a("VU/8")({name:"GeneralFooter"},v,!1,null,null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("GeneralHeader"),this._v(" "),e("div",{staticClass:"container_"},[e("router-view")],1),this._v(" "),e("GeneralFooter")],1)},staticRenderFns:[]};var h,_,g,C=a("VU/8")(p,f,!1,function(t){a("5wlR")},"data-v-698ab0b8",null).exports,w=a("//Fk"),b=a.n(w),x=a("/ocq"),S=a("bOdI"),y=a.n(S),U=a("mtWM"),E=a.n(U),T=a("Rf8U"),A=a.n(T),F=function(){return window.localStorage.getItem("id_token")},R=function(t){window.localStorage.setItem("id_token",t)},k=function(){window.localStorage.removeItem("id_token")},N="https://conduit.productionready.io/api",D={init:function(){r.a.use(A.a,E.a),r.a.axios.defaults.baseURL=N},setHeader:function(){r.a.axios.defaults.headers.common.Authorization="Token "+F()},query:function(t,e){return r.a.axios.get(t,e).catch(function(t){throw new Error("[STASH] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.a.axios.get(t+"/"+e).catch(function(t){throw new Error("[STASH] ApiService "+t)})},post:function(t,e){return r.a.axios.post(""+t,e)},update:function(t,e,a){return r.a.axios.put(t+"/"+e,a)},put:function(t,e){return r.a.axios.put(""+t,e)},delete:function(t){return r.a.axios.delete(t).catch(function(t){throw new Error("[STASH] ApiService "+t)})}},$=D,G="auth/SET_AUTH",I={state:{errors:null,user:{},isAuthenticated:!!F()},actions:(h={},y()(h,"auth/LOGIN",function(t,e){return new b.a(function(a){$.post("users/login",{user:e}).then(function(e){var r=e.data;t.commit(G,r.user),a(r)}).catch(function(e){var a=e.response;t.commit("setError",a.data.errors)})})}),y()(h,"auth/LOGOUT",function(t){t.commit("auth/PURGE_AUTH")}),y()(h,"auth/REGISTER",function(t,e){return new b.a(function(a,r){$.post("users",{user:e}).then(function(e){var r=e.data;t.commit(G,r.user),a(r)}).catch(function(e){var a=e.response;t.commit("setError",a.data.errors),r(a)})})}),y()(h,"auth/CHECK_AUTH",function(t){if(!F())return t.commit("auth/PURGE_AUTH"),!1;$.setHeader(),$.get("user").then(function(e){var a=e.data;t.commit(G,a.user)}).catch(function(e){var a=e.response;t.commit("setError",a.data.errors)})}),y()(h,"auth/UPDATE_USER",function(t,e){var a=e.email,r=e.username,s=e.password,n=e.image,i={email:a,username:r,bio:e.bio,image:n};return s&&(i.password=s),$.put("user",i).then(function(e){var a=e.data;return t.commit(G,a.user),a})}),h),mutations:(_={},y()(_,"setError",function(t,e){t.errors=e}),y()(_,G,function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},R(t.user.token)}),y()(_,"auth/PURGE_AUTH",function(t){t.isAuthenticated=!1,t.user={},t.errors={},k()}),_),getters:{currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}}},O={state:{errors:null,currentCart:{merchant:{},items:[]}},actions:y()({},"cart/SUBMIT_CART",function(t,e){return 0}),mutations:(g={},y()(g,"setError",function(t,e){t.errors=e}),y()(g,"cart/ADD_TO_CART",function(t,e){t.currentCart.items.push({item:e}),t.errors={}}),y()(g,"cart/REMOVE_FROM_CART",function(t){t.currentCart.items={},t.errors={}}),g),getters:{currentCart:function(t){return t.currentCart}}};r.a.use(u.a);var H=new u.a.Store({modules:{auth:I,cart:O}}),P={name:"viewLogin",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,e){var a=this;this.$store.dispatch("auth/LOGIN",{email:t,password:e}).then(function(){return a.$router.push({name:"home"})})}},computed:l()({},Object(u.c)({errors:function(t){return t.auth.errors}}))},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-page"},[a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[a("h1",{staticClass:"text-xs-center"},[t._v("Sign in")]),t._v(" "),a("p",{staticClass:"text-xs-center"},[a("router-link",{attrs:{to:{name:"register"}}},[t._v("\n            Need an account?\n          ")])],1),t._v(" "),t.errors?a("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,r){return a("li",{key:r},[t._v(t._s(r)+" "+t._s(t._f("error")(e)))])}),0):t._e(),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(t.email,t.password)}}},[a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("fieldset",{staticClass:"form-group"},[a("router-link",{attrs:{to:{name:"forget_password",params:{}}}},[t._v("\n              or click here to reset password\n            ")])],1),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n            Sign in\n          ")])])])])])])},staticRenderFns:[]},L=a("VU/8")(P,M,!1,null,null,null).exports,V={name:"viewRegister",data:function(){return{username:"",email:"",password:""}},computed:l()({},Object(u.c)({errors:function(t){return t.auth.errors}})),methods:{onSubmit:function(){var t=this;this.$store.dispatch("auth/REGISTER",{email:this.email,password:this.password,username:this.username}).then(function(){return t.$router.push({name:"home"})})}}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth-page"},[a("div",{staticClass:"container page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[a("h1",{staticClass:"text-xs-center"},[t._v("Sign up")]),t._v(" "),a("p",{staticClass:"text-xs-center"},[a("router-link",{attrs:{to:{name:"login"}}},[t._v("\n            Have an account?\n          ")])],1),t._v(" "),t.errors?a("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,r){return a("li",{key:r},[t._v(t._s(r)+" "+t._s(t._f("error")(e)))])}),0):t._e(),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("fieldset",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n            Sign up\n          ")])])])])])])},staticRenderFns:[]},j=a("VU/8")(V,B,!1,null,null,null).exports,Y={name:"viewHome",data:function(){return{merchants:[{id:1,image:"https://via.placeholder.com/220",name:"Thirsty Guys",tags:["Food Court","Bubble Tea","Beverages"],address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0},{id:1,image:"https://via.placeholder.com/220",name:"Gohan Gohan",tags:["Food Court","Curry","Rice"],address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!1},{id:1,image:"https://via.placeholder.com/220",name:"Nasi Club",tags:["Food Court","Rice","Lemak"],address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0},{id:1,image:"https://via.placeholder.com/220",name:"Serious Salads",tags:["Food Court","Healthy","Salad"],address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0},{id:1,image:"https://via.placeholder.com/220",name:"Daily Bowl",tags:["Food Court","Salad","Quinoa"],address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0},{id:1,image:"https://via.placeholder.com/220",name:"Test Merchant",tags:["Food Court","Salad","Quinoa"],address:"Faculty of Science S16, NUS",distance:.67,currentDiscount:.67,currentlyOp:!0}]}},computed:l()({},Object(u.c)({errors:function(t){return t.auth.errors}}))},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("div",{staticClass:"container page"},[a("br"),t._m(0),a("br"),t._v(" "),a("div",{staticClass:"row justify-content-center"},t._l(t.merchants,function(e,r){return a("div",{key:r,staticClass:"col-xs-6 col-md-3 itemGrid"},[a("router-link",{staticClass:"merchantCard",attrs:{to:{name:"merchant",params:{mID:e.id,mName:e.name}}}},[a("div",{staticClass:"merchantImage"},[e.currentlyOp?t._e():a("div",{staticClass:"notOpOverlay"},[a("div",{staticClass:"text"},[t._v("Closed")])]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{src:e.image}})]),t._v(" "),a("small",t._l(e.tags,function(r,s){return a("span",{key:s,staticClass:"merchantTags"},[t._v("\n              "+t._s(r)+"\n              "),s!=e.tags.length-1?a("span",[t._v(" - ")]):t._e()])}),0),a("br"),t._v(" "),a("b",[t._v(t._s(e.name.toUpperCase()))]),a("br"),t._v(" "),a("span",[t._v(t._s(e.address))]),a("br")])],1)}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("b",[this._v("Food and Beverage")])])}]};var K=a("VU/8")(Y,q,!1,function(t){a("Xepo")},"data-v-ebc160f2",null).exports,W={name:"viewSettings",computed:l()({},Object(u.b)(["currentUser"])),methods:{updateSettings:function(){var t=this;this.$store.dispatch(UPDATE_USER,this.currentUser).then(function(){t.$router.push({name:"home"})})},logout:function(){var t=this;this.$store.dispatch("auth/LOGOUT").then(function(){t.$router.push({name:"home"})})}}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h1",[t._v("Settings")]),a("hr"),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.updateSettings()}}},[a("fieldset",[a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tName\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.username,expression:"currentUser.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your username"},domProps:{value:t.currentUser.username},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"username",e.target.value)}}})]),a("br"),t._v(" "),a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tEmail\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.email,expression:"currentUser.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.currentUser.email},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"email",e.target.value)}}})]),a("br"),t._v(" "),a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tPasssword\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.password,expression:"currentUser.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.currentUser.password},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"password",e.target.value)}}})]),a("br"),t._v(" "),a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tRepeat Passsword\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.password,expression:"currentUser.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.currentUser.password},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"password",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n\t\t\t\t\t\tUpdate Settings\n\t\t\t\t\t")])])]),t._v(" "),a("hr"),t._v(" "),a("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("\n\t\t\t\tLogout\n\t\t\t")])])])])},staticRenderFns:[]},X=a("VU/8")(W,z,!1,null,null,null).exports,Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h1",[t._v("Forget password")]),t._v(" "),a("form",[a("fieldset",[a("fieldset",{staticClass:"form-group"},[t._v("\n\t\t\t\t\t\tEmail\n\t\t\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.email,expression:"currentUser.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.currentUser.email},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"email",e.target.value)}}})]),a("br"),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n\t\t\t\t\t\tForget password\n\t\t\t\t\t")])])])])])])},staticRenderFns:[]},J=a("VU/8")({name:"viewForgetPasswordRequest"},Z,!1,null,null,null).exports,Q={name:"viewWallet",data:function(){return{}},computed:l()({},Object(u.b)(["currentUser"])),methods:{gotoTopUpWallet:function(){this.$router.push({name:"walletTopUp"})}}},tt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h4",[t._v("Hi "),a("span",{staticClass:"text-uppercase font-weight-bold"},[t._v(t._s(t.currentUser.username))]),t._v("! "),a("small",[t._v(" Your wallet credit balance:")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"text-xs-center"},[a("h1",{staticClass:"text-xs-center font-weight-bold"},[t._v("SGD 20")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-xl",on:{click:t.gotoTopUpWallet}},[a("i",{staticClass:"ion-ios-plus-outline"}),a("span",[t._v(" Top Up Balance")])])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("p",[t._v("Last transactions:")]),t._v(" "),t._m(0),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"text-xs-center"},[a("router-link",{staticClass:"btn btn-secondary btn-md",attrs:{exact:"",to:{name:"settings"}}},[a("i",{staticClass:"ion-gear-a"}),t._v(" Settings\n        ")])],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Merchant")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Date Time")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Mark")]),t._v(" "),a("td",[t._v("SGD 20")]),t._v(" "),a("td",[t._v("18 Dec 2019 19:23")])]),t._v(" "),a("tr",[a("td",[t._v("Jacob")]),t._v(" "),a("td",[t._v("SGD 20")]),t._v(" "),a("td",[t._v("18 Dec 2019 19:23")])]),t._v(" "),a("tr",[a("td",[t._v("Larry")]),t._v(" "),a("td",[t._v("SGD 20")]),t._v(" "),a("td",[t._v("18 Dec 2019 19:23")])])])])}]};var et=a("VU/8")(Q,tt,!1,function(t){a("8iYk")},"data-v-0e81bcde",null).exports,at={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[this._v("\n      You are viewing top up wallet page\n    ")])])])}]};var rt=a("VU/8")({name:"viewTopUpWallet",data:function(){return{}}},at,!1,function(t){a("S0hu")},"data-v-37a3f539",null).exports,st={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("br"),t._v(" "),a("h1",[t._v("Inbox")]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"merchantImg"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/73"}})]),t._v(" "),a("td",[a("p",[a("b",[t._v("Thirsty Guys - Faculty of Science")])]),t._v(" "),a("p",[t._v("Test123")])])]),t._v(" "),a("tr",[a("td",{staticClass:"merchantImg"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/73"}})]),t._v(" "),a("td",[a("p",[a("b",[t._v("Thirsty Guys - Faculty of Science")])]),t._v(" "),a("p",[t._v("Test123")])])]),t._v(" "),a("tr",[a("td",{staticClass:"merchantImg"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/73"}})]),t._v(" "),a("td",[a("p",[a("b",[t._v("Thirsty Guys - Faculty of Science")])]),t._v(" "),a("p",[t._v("Test123")])])]),t._v(" "),a("tr",[a("td",{staticClass:"merchantImg"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/73"}})]),t._v(" "),a("td",[a("p",[a("b",[t._v("Thirsty Guys - Faculty of Science")])]),t._v(" "),a("p",[t._v("Test123")])])])])])])])])}]};var nt=a("VU/8")({name:"viewInbox",data:function(){return{}}},st,!1,function(t){a("DXZv")},"data-v-6013fa5e",null).exports,it={name:"MenuCategory",props:{categoryName:{type:String,required:!0},items:{type:Array,required:!0}},data:function(){return{toggledMenu:!1}},methods:{toggleCategory:function(){this.toggledMenu=!this.toggledMenu},checkItem:function(t){console.log(String(t)),this.$store.commit("cart/ADD_TO_CART",String(t))}}},ot={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"menuCategory",on:{click:function(e){return t.toggleCategory()}}},[a("h4",{staticClass:"text-uppercase"},[t.toggledMenu?a("i",{staticClass:"ion-arrow-down-b"}):t._e(),t.toggledMenu?t._e():a("i",{staticClass:"ion-arrow-right-b"}),t._v("  "+t._s(t.categoryName))])]),t._v(" "),t.toggledMenu?a("div",{staticClass:"menuList",attrs:{transition:"expand"}},t._l(t.items,function(e,r){return a("div",{key:r,staticClass:"item",on:{click:function(a){return t.checkItem(e.id)}}},[a("div",{staticClass:"row itemContent"},[t._m(0,!0),t._v(" "),a("div",{staticClass:"col-xs-6 text-uppercase"},[a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v("\n              "+t._s(e.name)+"\n            ")])]),t._v(" "),a("div",{staticClass:"col-xs-3"},[t._v("\n            SGD "+t._s(e.price)+"\n          ")])]),t._v(" "),r!=t.items.length-1?a("hr"):t._e()])}),0):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-3"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://via.placeholder.com/100"}})])}]};var ct={name:"viewMerchant",components:{MenuCategory:a("VU/8")(it,ot,!1,function(t){a("zEN/")},"data-v-5bf920a5",null).exports},computed:{mID:function(){return this.$route.params.mID},mName:function(){return this.$route.params.mName}},data:function(){return{isPageLoading:!1,name:"Thirsty Guys",address:"Faculty of Science S16 NUS",image:"https://via.placeholder.com/1200x500",isOpen:!0,menu:[{name:"Food",menuList:[{id:1,name:"Sunny side egg",price:2},{id:2,name:"Rice and Beef Brisket",price:12.7}]},{name:"Beverages",menuList:[{id:3,name:"Ice Lemon Kopi",price:3.25},{id:4,name:"Ice Lemon Tea",price:3.2}]}]}}},lt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.isPageLoading?a("div",[a("div",{staticClass:"col-xs-12"},[t._v("\n\t\t\tLoading "+t._s(t.mName)+"'s data\n\t\t")])]):t._e(),t._v(" "),t.isPageLoading?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("img",{staticClass:"img-fluid",attrs:{src:t.image}}),t._v(" "),a("h2",[a("b",[t._v(t._s(t.name))])]),t._v(" "),a("p",[t._v(t._s(t.address))]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("h4",{staticClass:"text-xs-center font-weight-bold"},[t._v("MENU")]),t._v(" "),a("hr",{staticClass:"mb-0"}),t._v(" "),t._l(t.menu,function(e,r){return a("div",{key:r,attrs:{classs:"categoryList"}},[a("MenuCategory",{staticClass:"menuCategory",attrs:{categoryName:e.name,items:e.menuList}}),t._v(" "),a("hr",{staticClass:"margin0"})],1)})],2)])])},staticRenderFns:[]};var ut=a("VU/8")(ct,lt,!1,function(t){a("m5BB")},"data-v-7a927fe2",null).exports,mt={name:"viewCart",data:function(){return{}},computed:l()({},Object(u.b)(["currentCart"]))},dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"col-xs-12"},[this._v("\n    You are viewing Cart page with "+this._s(this.currentCart.length)+" items\n  ")])])},staticRenderFns:[]};var vt=a("VU/8")(mt,dt,!1,function(t){a("cIox")},"data-v-7ee7f2c4",null).exports;r.a.use(x.a);var pt=new x.a({routes:[{path:"/",redirect:"/home"},{name:"login",path:"/login",component:L},{name:"register",path:"/register",component:j},{name:"home",path:"/home",component:K,meta:{requiresAuth:!0}},{name:"settings",path:"/settings",component:X,meta:{requiresAuth:!0}},{name:"merchant",path:"/merchant/:mID/:mName",component:ut,props:!0,meta:{requiresAuth:!0}},{name:"inbox",path:"/inbox",component:nt},{name:"wallet",path:"/wallet",component:et},{name:"walletTopUp",path:"/wallet/topup",component:rt},{name:"cart",path:"/cart",component:vt},{name:"forget_password",path:"/forget_password",component:J},{name:"NotFound",path:"*",redirect:"/"}]});pt.beforeEach(function(t,e,a){var r=t.matched.some(function(t){return t.meta.requiresAuth}),s=["login","register","forget_password"].includes(t.name);r?b.a.all([H.dispatch("auth/CHECK_AUTH")]).then(function(t){0==t[0]&&a("login")}):b.a.all([H.dispatch("auth/CHECK_AUTH")]).then(function(t){0==t[0]?a():s?a("home"):a()}),a()});var ft=pt,ht=a("Eoz/"),_t=a.n(ht),gt={currentCoordinates:function(){navigator;return new b.a(function(t,e){navigator.geolocation.getCurrentPosition(function(e){var a=e.coords;return t(a)},function(t){return e(t)})})}};a.d(e,"db",function(){return Ct}),r.a.use(n.a),r.a.config.productionTip=!1,$.init(),console.log(gt.currentCoordinates()),r.a.filter("date",function(t){return _t()(new Date(t),"MMMM D, YYYY")}),r.a.filter("error",function(t){return""+t[0]}),o.a.initializeApp({projectId:"vue-app-fb29a",messagingSenderId:"972401469784"});var Ct=o.a.firestore();new r.a({el:"#app",router:ft,store:H,components:{App:C},template:"<App/>"})},S0hu:function(t,e){},Xepo:function(t,e){},cIox:function(t,e){},m5BB:function(t,e){},vvZK:function(t,e){},"zEN/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5fbeb4395aca76e7700c.js.map
webpackJsonp([0],[,,,,,,,,,,,function(t,n,e){"use strict";var i=e(2),s=e(88),a=e(69),o=e.n(a),r=e(74),c=e.n(r),u=e(71),l=e.n(u),p=e(73),d=e.n(p),_=e(72),h=e.n(_),v=e(68),f=e.n(v),m=e(70),w=e.n(m),g=e(67),C=e.n(g);i.a.use(s.a),n.a=new s.a({routes:[{path:"/",component:o.a},{path:"/my",component:d.a},{path:"/joke-img",component:l.a},{path:"/luck",component:h.a},{path:"/today",component:c.a},{path:"/eg",component:f.a},{path:"/ip",component:w.a},{path:"/cn-eg",component:C.a}]})},function(t,n,e){e(54);var i=e(0)(e(31),e(82),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(64),s=e.n(i),a=e(43);n.default={name:"app",store:a.a,components:{footerTab:s.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={computed:{home:function(){return this.$store.state.home},my:function(){return this.$store.state.my}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={mounted:function(){var t=this;this.$http.post(this.apiUrl,{showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid},{emulateJSON:!0}).then(function(n){t.data=n.data.showapi_res_body.pagebean.contentlist.splice(1,3)})},data:function(){return{apiUrl:"http://route.showapi.com/109-35",showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",showapi_appid:"35517",data:""}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={mounted:function(){},data:function(){return{apiUrl:"http://route.showapi.com/32-9",showapi_sign:"30112badab7b42aaae848f67f2bf3352",showapi_appid:"38548",data:"",trans:"",text:""}},created:function(){this.$store.dispatch("inOther")},methods:{goTrans:function(){var t=this;this.$http.post(this.apiUrl,{showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid,q:this.text},{emulateJSON:!0}).then(function(n){console.log(n.showapi_res_body),t.trans=n.data.showapi_res_body.basic.explains})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={mounted:function(){var t=this;this.$http.post(this.apiUrl,{showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid,count:5},{emulateJSON:!0}).then(function(n){t.data=n.data.showapi_res_body.data})},data:function(){return{apiUrl:"http://route.showapi.com/1211-1",showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",showapi_appid:"35517",data:""}},created:function(){this.$store.dispatch("inOther")}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(63),s=e.n(i),a=e(65),o=e.n(a),r=e(66),c=e.n(r);n.default={name:"home",components:{banner:s.a,navBox:o.a,news:c.a},created:function(){this.$store.dispatch("inHome")}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={mounted:function(){var t=this;this.$http.post(this.apiUrl,{showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid},{emulateJSON:!0}).then(function(n){t.data=n.data.showapi_res_body})},data:function(){return{apiUrl:"http://route.showapi.com/632-1",showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",showapi_appid:"35517",data:""}},created:function(){this.$store.dispatch("inOther")}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={mounted:function(){var t=this;this.$http.post(this.apiUrl,{showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid},{emulateJSON:!0}).then(function(n){t.data=n.data.showapi_res_body.contentlist})},created:function(){this.$store.dispatch("inOther")},data:function(){return{apiUrl:"http://route.showapi.com/341-2",showapi_sign:"43fcba4165904aefb911d0f0488f042a",showapi_appid:"37993",data:""}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={mounted:function(){var t=this;this.$http.post(this.apiUrl,{showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid},{emulateJSON:!0}).then(function(n){t.data=n.data.showapi_res_body})},created:function(){this.$store.dispatch("inOther")},data:function(){return{apiUrl:"http://route.showapi.com/856-1",showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",showapi_appid:"35517",data:""}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"my",created:function(){this.$store.dispatch("inMy")}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={mounted:function(){var t=this;this.$http.post(this.apiUrl,{showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid},{emulateJSON:!0}).then(function(n){t.data=n.data.showapi_res_body.list})},created:function(){this.$store.dispatch("inOther")},data:function(){return{apiUrl:"http://route.showapi.com/119-42",showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",showapi_appid:"35517",data:""}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),s=e(12),a=e.n(s),o=e(11),r=e(13),c=e(10),u=e.n(c);i.a.use(r.a),i.a.prototype.axios=u.a,i.a.config.productionTip=!1,i.a.config.debug=!0,i.a.http.options.emulateHTTP=!0,new i.a({el:"#app",router:o.a,axios:u.a,template:"<App/>",components:{App:a.a}})},function(t,n,e){"use strict";var i=e(2),s=e(90);i.a.use(s.a);var a={home:!0,my:!1,data:""},o={IN_HOME:function(t){t.home=!0,t.my=!1},IN_MY:function(t){t.home=!1,t.my=!0},IN_OTHER:function(t){t.home=!1,t.my=!1}},r={inHome:function(t){return(0,t.commit)("IN_HOME")},inMy:function(t){return(0,t.commit)("IN_MY")},inOther:function(t){return(0,t.commit)("IN_OTHER")}};n.a=new s.a.Store({state:a,mutations:o,actions:r})},,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,function(t,n,e){t.exports=e.p+"static/img/banner1.2c4bae5.jpg"},function(t,n,e){e(56);var i=e(0)(null,e(84),null,null);t.exports=i.exports},function(t,n,e){e(50);var i=e(0)(e(32),e(78),null,null);t.exports=i.exports},function(t,n,e){e(58);var i=e(0)(null,e(86),null,null);t.exports=i.exports},function(t,n,e){e(59);var i=e(0)(e(33),e(87),null,null);t.exports=i.exports},function(t,n,e){e(52);var i=e(0)(e(34),e(80),null,null);t.exports=i.exports},function(t,n,e){e(47);var i=e(0)(e(35),e(75),null,null);t.exports=i.exports},function(t,n,e){e(53);var i=e(0)(e(36),e(81),null,null);t.exports=i.exports},function(t,n,e){e(49);var i=e(0)(e(37),e(77),null,null);t.exports=i.exports},function(t,n,e){e(55);var i=e(0)(e(38),e(83),"data-v-7481c3a5",null);t.exports=i.exports},function(t,n,e){e(48);var i=e(0)(e(39),e(76),null,null);t.exports=i.exports},function(t,n,e){e(51);var i=e(0)(e(40),e(79),null,null);t.exports=i.exports},function(t,n,e){e(57);var i=e(0)(e(41),e(85),null,null);t.exports=i.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("\n    每天五条英语\n  ")]),t._v(" "),t._l(t.data,function(n){return e("div",{staticClass:"content-item"},[t._v("\n    "+t._s(n.english)+" "),e("br"),t._v("\n    "+t._s(n.chinese)+"\n  ")])})],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("\n    今日运气\n  ")]),t._v(" "),e("div",{staticClass:"content-item"},[t._v("\n    冲煞："+t._s(t.data.chongsha)+"\n  ")]),t._v(" "),e("div",{staticClass:"content-item"},[t._v("\n    运势："+t._s(t.data.jrhh)+"\n  ")]),t._v(" "),e("div",{staticClass:"content-item"},[t._v("\n    宜："+t._s(t.data.yi)+"\n  ")]),t._v(" "),e("div",{staticClass:"content-item"},[t._v("\n    星座："+t._s(t.data.xingzuo)+"\n  ")]),t._v(" "),e("div",{staticClass:"content-item"},[t._v("\n    日："+t._s(t.data.zhiri)+"\n  ")])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("\n    获取当前ip地址\n  ")]),t._v(" "),e("div",[e("div",{staticClass:"ip-content"},[t._v("\n      地区：\n      "+t._s(t.data.en_name)+" "+t._s(t.data.city)+" "),e("br"),e("br"),t._v("\n      互联网服务提供商：\n      "+t._s(t.data.isp)+" "),e("br"),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"show-ip"},[t._v("\n        ip地址：\n        "+t._s(t.data.ip)+"\n      ")])])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav-box"},[e("p",{staticClass:"nav-list"},[e("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e("i",{class:[t.home?"index1":"index"]})]),t._v(" "),e("router-link",{staticClass:"nav-item",attrs:{to:"/my"}},[e("i",{class:[t.my?"my1":"my"]})])],1)])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my"},[e("div",{staticClass:"my-head"},[e("div",{staticClass:"my-logo"}),t._v(" "),e("span",{staticClass:"my-name"},[t._v("aclrioe")])]),t._v(" "),e("div",{staticClass:"my-detail"},[t._v("\n    github:  "),e("a",{attrs:{href:"https://github.com/aclrioe"}},[t._v("https://github.com/aclrioe")]),t._v(" "),e("br"),e("br"),t._v("\n    E-mail: aclrioe@gmail.com\n    "),e("br"),t._v(" "),e("br"),t._v("\n    QQ: 741419855\n    "),e("br"),t._v(" "),e("br")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("\n    翻译\n  ")]),t._v(" "),e("div",{staticClass:"contentB"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input-text",attrs:{type:"text",placeholder:"输入英文/汉字"},domProps:{value:t.text},on:{input:function(n){n.target.composing||(t.text=n.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"button",on:{click:function(n){t.goTrans()}}},[t._v("\n      立即翻译\n    ")]),t._v(" "),e("div",{staticClass:"show-content"},t._l(t.trans,function(n){return e("p",[t._v("\n        "+t._s(n)+"  "),e("br")])}))])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"home_title"},[t._v("\n    Application\n  ")]),t._v(" "),e("banner"),t._v(" "),e("navBox"),t._v(" "),e("news")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view"),t._v(" "),e("footerTab")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("\n    搞笑图片\n  ")]),t._v(" "),t._l(t.data,function(n){return e("div",{staticClass:"content-img"},[e("div",{staticClass:"img-title"},[t._v("\n      "+t._s(n.title)+"\n    ")]),t._v(" "),e("img",{attrs:{src:n.img}})])})],2)},staticRenderFns:[]}},function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"nav-banner"},[i("img",{attrs:{src:e(62)}})])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("\n    历史上的今天\n  ")]),t._v(" "),t._l(t.data,function(n){return e("div",{staticClass:"content-item"},[t._v("\n    "+t._s(n.title)+"\n    "),e("img",{staticClass:"item-img",attrs:{src:n.img}})])})],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box clearfix"},[e("router-link",{staticClass:"item",attrs:{to:"/luck"}},[e("i",{staticClass:"luck"}),t._v("\n    运势\n  ")]),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/joke-img"}},[e("i",{staticClass:"joke-img"}),t._v("\n    笑一笑\n  ")]),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/today"}},[e("i",{staticClass:"today"}),t._v("\n    今天\n  ")]),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/eg"}},[e("i",{staticClass:"eg"}),t._v("\n    英文励志\n  ")]),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/ip"}},[e("i",{staticClass:"ip"}),t._v("\n    获得IP\n  ")]),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/cn-eg"}},[e("i",{staticClass:"cn-eg"}),t._v("\n    翻译\n  ")]),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"other"}),t._v("\n    敬请期待\n  ")]),t._v(" "),e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"other"}),t._v("\n    敬请期待\n  ")])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"news"},t._l(t.data,function(n){return e("div",{staticClass:"news-item"},[e("div",{staticClass:"news-title"},[t._v(t._s(n.title))]),t._v(" "),n.imageurls[0]?e("img",{staticClass:"news-img",attrs:{src:n.imageurls[0].url}}):t._e(),t._v(" "),e("div",{staticClass:"news-time"},[t._v(t._s(n.pubDate))])])}))},staticRenderFns:[]}},,,,function(t,n){}],[42]);
//# sourceMappingURL=app.17a4c1764fc149b2e982.js.map
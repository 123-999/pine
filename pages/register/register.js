(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"23ba":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,u,r,a){try{var s=t[r](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(i,u)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(i,u){var a=t.apply(e,n);function s(t){r(a,i,u,s,o,"next",t)}function o(t){r(a,i,u,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{huiyuanxingbieOptions:[],huiyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=a(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],n=t.getStorageSync("loginTable"),this.tableName=n,"huiyuan"==this.tableName&&(this.huiyuanxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.huiyuanxingbieOptions[0]),this.styleChange();case 5:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{huiyuanxingbieChange:function(t){this.huiyuanxingbieIndex=t.target.value,this.ruleForm.xingbie=this.huiyuanxingbieOptions[this.huiyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=a(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.huiyuanzhanghao||"huiyuan"!=this.tableName){t.next=3;break}return this.$utils.msg("会员账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"huiyuan"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("huiyuan"!=this.tableName||!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){t.next=9;break}return this.$utils.msg("手机号码应输入手机格式"),t.abrupt("return");case 9:if("huiyuan"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){t.next=12;break}return this.$utils.msg("余额应输入数字"),t.abrupt("return");case 12:return t.next=14,this.$api.register("".concat(this.tableName),this.ruleForm);case 14:this.$utils.msgBack("注册成功");case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("543d")["default"])},3873:function(t,e,n){"use strict";n.r(e);var i=n("23ba"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a},"519b":function(t,e,n){"use strict";var i,u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"80bf":function(t,e,n){},a80c4:function(t,e,n){"use strict";n.r(e);var i=n("519b"),u=n("3873");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("be9e");var a,s=n("f0c5"),o=Object(s["a"])(u["default"],i["b"],i["c"],!1,null,"c348ceaa",null,!1,i["a"],a);e["default"]=o.exports},bd0c:function(t,e,n){"use strict";(function(t){n("78e1"),n("921b");i(n("66fd"));var e=i(n("a80c4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},be9e:function(t,e,n){"use strict";var i=n("80bf"),u=n.n(i);u.a}},[["bd0c","common/runtime","common/vendor"]]]);
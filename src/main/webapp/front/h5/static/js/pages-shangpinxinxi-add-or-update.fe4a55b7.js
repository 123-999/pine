(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangpinxinxi-add-or-update"],{"565d":function(e,t,i){"use strict";i.r(t);var r=i("7a77"),n=i("f9f4");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("ec7c");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"72027abe",null,!1,r["a"],o);t["default"]=l.exports},"7a77":function(e,t,i){"use strict";var r={"w-picker":i("e2b1").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("商品编号")]),i("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.shangpinbianhao))])],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("商品名称")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:e.ruleForm.shangpinmingcheng,callback:function(t){e.$set(e.ruleForm,"shangpinmingcheng",t)},expression:"ruleForm.shangpinmingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(252, 252, 252, 1)",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(21, 20, 20, 1)",textAlign:"left"}},[e._v("商品分类")]),i("v-uni-picker",{attrs:{value:e.shangpinfenleiIndex,range:e.shangpinfenleiOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.shangpinfenleiChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(20, 19, 19, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.shangpinfenlei?e.ruleForm.shangpinfenlei:"请选择商品分类"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shangpintupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[e._v("商品图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.shangpintupian?i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.shangpintupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("发布时间")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"发布时间"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleTab("fabushijian")}},model:{value:e.ruleForm.fabushijian,callback:function(t){e.$set(e.ruleForm,"fabushijian",t)},expression:"ruleForm.fabushijian"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("价格")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.price,placeholder:"价格"},model:{value:e.ruleForm.price,callback:function(t){e.$set(e.ruleForm,"price",t)},expression:"ruleForm.price"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("单限")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.onelimittimes,placeholder:"单限"},model:{value:e.ruleForm.onelimittimes,callback:function(t){e.$set(e.ruleForm,"onelimittimes",t)},expression:"ruleForm.onelimittimes"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("库存")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.alllimittimes,placeholder:"库存"},model:{value:e.ruleForm.alllimittimes,callback:function(t){e.$set(e.ruleForm,"alllimittimes",t)},expression:"ruleForm.alllimittimes"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(28, 27, 27, 1)",textAlign:"left"}},[e._v("商品详情")]),i("v-uni-textarea",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"商品详情"},model:{value:e.ruleForm.shangpinxiangqing,callback:function(t){e.$set(e.ruleForm,"shangpinxiangqing",t)},expression:"ruleForm.shangpinxiangqing"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("w-picker",{ref:"fabushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.fabushijianConfirm.apply(void 0,arguments)}}})],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},"9b8a":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-72027abe]{padding:%?20?%}.content[data-v-72027abe]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-72027abe]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-72027abe]{width:%?180?%}.avator[data-v-72027abe]{width:%?150?%;height:%?60?%}.right-input[data-v-72027abe]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-72027abe]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-72027abe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-72027abe]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-72027abe]{border:0}.cu-form-group uni-input[data-v-72027abe]{padding:0 %?30?%}.uni-input[data-v-72027abe]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-72027abe]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-72027abe]::after{line-height:%?88?%}.select .uni-input[data-v-72027abe]{line-height:%?88?%}.input .right-input[data-v-72027abe]{line-height:%?88?%}',""]),e.exports=t},c955:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("96cf");var n=r(i("3b8d")),a=r(i("e2b1")),o={data:function(){return{ruleForm:{shangpinbianhao:this.getUUID(),shangpinmingcheng:"",shangpinfenlei:"",shangpintupian:"",shangpinxiangqing:"",fabushijian:"",price:"",onelimittimes:"",alllimittimes:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpinfenlei:!1,shangpintupian:!1,shangpinxiangqing:!1,fabushijian:!1,clicknum:!1,price:!1,onelimittimes:!1,alllimittimes:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:return r=e.sent,this.user=r.data,e.next=8,this.$api.option("shangpinleibie","shangpinleibie",{});case 8:if(r=e.sent,this.shangpinfenleiOptions=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=18;break}return this.ruleForm.id=t.id,e.next=16,this.$api.info("shangpinxinxi",this.ruleForm.id);case 16:r=e.sent,this.ruleForm=r.data;case 18:if(!t.cross){e.next=65;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 21:if((e.t1=e.t0()).done){e.next=65;break}if(a=e.t1.value,"shangpinbianhao"!=a){e.next=27;break}return this.ruleForm.shangpinbianhao=n[a],this.ro.shangpinbianhao=!0,e.abrupt("continue",21);case 27:if("shangpinmingcheng"!=a){e.next=31;break}return this.ruleForm.shangpinmingcheng=n[a],this.ro.shangpinmingcheng=!0,e.abrupt("continue",21);case 31:if("shangpinfenlei"!=a){e.next=35;break}return this.ruleForm.shangpinfenlei=n[a],this.ro.shangpinfenlei=!0,e.abrupt("continue",21);case 35:if("shangpintupian"!=a){e.next=39;break}return this.ruleForm.shangpintupian=n[a],this.ro.shangpintupian=!0,e.abrupt("continue",21);case 39:if("shangpinxiangqing"!=a){e.next=43;break}return this.ruleForm.shangpinxiangqing=n[a],this.ro.shangpinxiangqing=!0,e.abrupt("continue",21);case 43:if("fabushijian"!=a){e.next=47;break}return this.ruleForm.fabushijian=n[a],this.ro.fabushijian=!0,e.abrupt("continue",21);case 47:if("clicknum"!=a){e.next=51;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,e.abrupt("continue",21);case 51:if("price"!=a){e.next=55;break}return this.ruleForm.price=n[a],this.ro.price=!0,e.abrupt("continue",21);case 55:if("onelimittimes"!=a){e.next=59;break}return this.ruleForm.onelimittimes=n[a],this.ro.onelimittimes=!0,e.abrupt("continue",21);case 59:if("alllimittimes"!=a){e.next=63;break}return this.ruleForm.alllimittimes=n[a],this.ro.alllimittimes=!0,e.abrupt("continue",21);case 63:e.next=21;break;case 65:this.styleChange();case 66:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},shangpinfenleiChange:function(e){this.shangpinfenleiIndex=e.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},shangpintupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.shangpintupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=3;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 3:if(this.ruleForm.price){e.next=6;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=9;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 9:if(!this.ruleForm.onelimittimes||this.$validate.isIntNumer(this.ruleForm.onelimittimes)){e.next=12;break}return this.$utils.msg("单限应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.alllimittimes||this.$validate.isIntNumer(this.ruleForm.alllimittimes)){e.next=15;break}return this.$utils.msg("库存应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.id){e.next=20;break}return e.next=18,this.$api.update("shangpinxinxi",this.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,this.$api.add("shangpinxinxi",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(i,"-").concat(r,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o},e1c0:function(e,t,i){var r=i("9b8a");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("5c355dd4",r,!0,{sourceMap:!1,shadowMode:!1})},ec7c:function(e,t,i){"use strict";var r=i("e1c0"),n=i.n(r);n.a},f9f4:function(e,t,i){"use strict";i.r(t);var r=i("c955"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a}}]);
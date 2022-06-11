(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/shop-order-confirm/shop-order-confirm"],{

/***/ 89:
/*!*******************************************************************************************************************************************************!*\
  !*** D:/workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/main.js?{"page":"pages%2Fshop-order-confirm%2Fshop-order-confirm"} ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _shopOrderConfirm = _interopRequireDefault(__webpack_require__(/*! ./pages/shop-order-confirm/shop-order-confirm.vue */ 90));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_shopOrderConfirm.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 90:
/*!************************************************************************************************************************************!*\
  !*** D:/workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/pages/shop-order-confirm/shop-order-confirm.vue ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-order-confirm.vue?vue&type=template&id=261f9fbb& */ 91);
/* harmony import */ var _shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop-order-confirm.vue?vue&type=script&lang=js& */ 93);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _shop_order_confirm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-order-confirm.vue?vue&type=style&index=0&lang=scss& */ 95);
/* harmony import */ var _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/pages/shop-order-confirm/shop-order-confirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/*!*******************************************************************************************************************************************************************!*\
  !*** D:/workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/pages/shop-order-confirm/shop-order-confirm.vue?vue&type=template&id=261f9fbb& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop-order-confirm.vue?vue&type=template&id=261f9fbb& */ 92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_template_id_261f9fbb___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 92:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/pages/shop-order-confirm/shop-order-confirm.vue?vue&type=template&id=261f9fbb& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 93:
/*!*************************************************************************************************************************************************************!*\
  !*** D:/workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/pages/shop-order-confirm/shop-order-confirm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop-order-confirm.vue?vue&type=script&lang=js& */ 94);
/* harmony import */ var _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/pages/shop-order-confirm/shop-order-confirm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 35));

















































var _config = __webpack_require__(/*! ../../utils/config.js */ 38);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =



{
  data: function data() {
    return {
      user: {},
      orderGoods: {},
      address: {},
      total: 0,
      type: 1,
      seat: 0,
      isShowAddress: 0 };

  },
  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {var i, address, userid, nickname, temp_address;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              this.type = options.type;
              this.seat = options.seat;
              // 获取订单信息，座位信息
              this.orderGoods = uni.getStorageSync('orderGoods');
              if (this.seat != 1) {
                for (i = 0; i < this.orderGoods.length; i++) {
                  if (this.total == 0) {
                    this.total = parseFloat(this.orderGoods[i].price) * this.orderGoods[i].buynumber;
                  } else {
                    this.total = parseFloat(this.total) + parseFloat(this.orderGoods[i].price) * this.orderGoods[i].buynumber;
                    this.address = this.orderGoods[0].address;
                  }
                }
              } else {
                this.total = parseFloat(this.orderGoods[0].total);
              }
              this.total = this.total.toFixed(2);_context.next = 7;return (

                uni.getStorageSync('address'));case 7:address = _context.sent;
              userid = uni.getStorageSync("userid");
              nickname = uni.getStorageSync("nickname");
              if (typeof address == undefined || address == null || !address.address) {
                this.isShowAddress = 1;
                temp_address = {};
                temp_address.name = '';
                temp_address.phone = '';
                temp_address.address = '';
                this.address = temp_address;
              } else {
                this.address = address;
              }case 11:case "end":return _context.stop();}}}, _callee, this);}));function onLoad(_x) {return _onLoad.apply(this, arguments);}return onLoad;}(),

  onShow: function () {var _onShow = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var userid, nickname, table, res, address, temp_address;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              userid = uni.getStorageSync("userid");
              nickname = uni.getStorageSync("nickname");

              table = uni.getStorageSync("nowTable");_context2.next = 5;return (
                this.$api.session(table));case 5:res = _context2.sent;
              this.user = res.data;
              address = uni.getStorageSync('address');
              // console.log('---address2---',address);
              if (!(this.seat != 1)) {_context2.next = 17;break;}if (!(
              address && this.user.id == userid)) {_context2.next = 13;break;}
              this.address = uni.getStorageSync('address');_context2.next = 17;break;case 13:_context2.next = 15;return (

                this.$api.defaultAddress(userid));case 15:res = _context2.sent;
              this.address = res.data;case 17:



              if (typeof address == undefined || address == null || !address.address) {
                this.isShowAddress = 1;
                temp_address = {};
                temp_address.name = '';
                temp_address.phone = '';
                temp_address.address = '';
                this.address = temp_address;
              }

              // console.log('address',this.address);
            case 18:case "end":return _context2.stop();}}}, _callee2, this);}));function onShow() {return _onShow.apply(this, arguments);}return onShow;}(),
  methods: {
    onSubmitTap: function () {var _onSubmitTap = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var _this, table;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                _this = this;if (!(
                _this.seat != 1 && !_this.address.address)) {_context4.next = 4;break;}
                _this.$utils.msg("\u8BF7\u9009\u62E9\u5730\u5740");return _context4.abrupt("return");case 4:


                table = uni.getStorageSync("nowTable");
                uni.showModal({
                  title: '提示',
                  content: '是否确认支付',
                  success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {var type, isSuccess, orderStatus, i, _res, order, buynumber;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!
                              res.confirm) {_context3.next = 58;break;}
                              // 订单类型
                              type = _this.type;
                              isSuccess = true;
                              orderStatus = '已支付';if (!(
                              type == 1)) {_context3.next = 8;break;}
                              if (_this.user.money - _this.total < 0) {
                                _this.$utils.msg('余额不足，请先充值');
                                isSuccess = false;
                                orderStatus = '未支付';
                              }_context3.next = 13;break;case 8:if (!(
                              type == 2)) {_context3.next = 13;break;}if (!(
                              _this.user.jifen - _this.total < 0)) {_context3.next = 13;break;}
                              _this.$utils.msg('积分不足，兑换商品失败');
                              isSuccess = false;return _context3.abrupt("return");case 13:



                              i = 0;case 14:if (!(i < _this.orderGoods.length)) {_context3.next = 44;break;}if (!(


                              _this.orderGoods[i].tablename == "shangpinxinxi")) {_context3.next = 33;break;}_context3.next = 18;return (

                                _this.$api.info('shangpinxinxi', _this.orderGoods[i].goodid));case 18:_res = _context3.sent;if (!(

                              _res.data.onelimittimes > 0)) {_context3.next = 24;break;}if (!(

                              _this.orderGoods[i].buynumber > _res.data.onelimittimes)) {_context3.next = 24;break;}
                              _this.$utils.msg("".concat(_this.orderGoods[i].goodname, "\u8D85\u8FC7\u53EF\u8D2D\u4E70\u6570\u91CF"));
                              isSuccess = false;return _context3.abrupt("break", 44);case 24:if (!(




                              _res.data.alllimittimes < _this.orderGoods[i].buynumber)) {_context3.next = 30;break;}
                              _this.$utils.msg("".concat(_this.orderGoods[i].goodname, "\u5DF2\u552E\u7F44"));
                              isSuccess = false;return _context3.abrupt("break", 44);case 30:


                              if (_this.seat != 1) {
                                _res.data.alllimittimes = _res.data.alllimittimes - _this.orderGoods[i].buynumber;
                              } else {
                                _res.data.selected = _res.data.selected + "," + _this.orderGoods[i].activeSeat;
                              }
                              // 库存充足则减少库存数量
                              _context3.next = 33;return _this.$api.update("shangpinxinxi", _res.data);case 33:


                              order = {
                                orderid: _this.$utils.genTradeNo(),
                                tablename: _this.orderGoods[i].tablename,
                                userid: _this.user.id,
                                goodid: _this.orderGoods[i].goodid,
                                goodname: _this.orderGoods[i].goodname,
                                picture: _this.orderGoods[i].picture,
                                buynumber: _this.orderGoods[i].buynumber,
                                discountprice: _this.orderGoods[i].price,
                                price: _this.orderGoods[i].price,
                                total: _this.orderGoods[i].price * _this.orderGoods[i].buynumber,
                                discounttotal: _this.orderGoods[i].price * _this.orderGoods[i].buynumber,
                                type: type,
                                address: _this.address.address,
                                tel: _this.address.phone,
                                consignee: _this.address.name,
                                status: orderStatus };

                              if (_this.seat == 1) {
                                order['address'] = _this.address;
                                buynumber = _this.address.split(",").length;
                                order['buynumber'] = buynumber;
                                order['total'] = _this.orderGoods[i].price * buynumber;
                                order['discounttotal'] = _this.orderGoods[i].price * buynumber;
                              }
                              // 添加订单
                              _context3.next = 37;return _this.$api.add('orders', order);case 37:if (!
                              _this.orderGoods[i].id) {_context3.next = 41;break;}_context3.next = 40;return (

                                _this.$api.del('cart', JSON.stringify([_this.orderGoods[i].id])));case 40:
                              uni.removeStorageSync("cart".concat(_this.orderGoods[i].goodid).concat(_this.user.id));case 41:i++;_context3.next = 14;break;case 44:if (!


                              isSuccess) {_context3.next = 58;break;}if (!(
                              type == 1)) {_context3.next = 53;break;}
                              _this.$utils.msgBack('支付成功');
                              // 减少余额
                              _this.user.money = _this.user.money - _this.total;
                              if (_this.user.jifen || _this.user.jifen == 0) {
                                _this.user.jifen = parseFloat(_this.user.jifen) + parseFloat(_this.total);
                              }_context3.next = 51;return (
                                _this.$api.update(table, _this.user));case 51:_context3.next = 58;break;case 53:if (!(
                              type == 2)) {_context3.next = 58;break;}
                              _this.$utils.msgBack('兑换成功');
                              // 减少积分
                              _this.user.jifen = _this.user.jifen - _this.total;_context3.next = 58;return (
                                _this.$api.update(table, _this.user));case 58:case "end":return _context3.stop();}}}, _callee3);}));function success(_x2) {return _success.apply(this, arguments);}return success;}() });case 6:case "end":return _context4.stop();}}}, _callee4, this);}));function onSubmitTap() {return _onSubmitTap.apply(this, arguments);}return onSubmitTap;}(),






    onAddressTap: function onAddressTap() {
      this.$utils.jump('../shop-address/shop-address');
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 95:
/*!**********************************************************************************************************************************************************************!*\
  !*** D:/workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/pages/shop-order-confirm/shop-order-confirm.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-2!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../../softInstall/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop-order-confirm.vue?vue&type=style&index=0&lang=scss& */ 96);
/* harmony import */ var _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _softInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_2_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_softInstall_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_order_confirm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 96:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspace/bizproject/dianshan/325项目源码/项目源码/ssm6i524/src/main/webapp/front/pages/shop-order-confirm/shop-order-confirm.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[89,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shop-order-confirm/shop-order-confirm.js.map
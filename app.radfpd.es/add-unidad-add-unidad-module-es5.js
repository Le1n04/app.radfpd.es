(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-unidad-add-unidad-module"], {
    /***/
    "9K/4":
    /*!******************************************************************************************!*\
      !*** ./src/app/entidades/datos-entidad/unidades/add-unidad/add-unidad-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: AddUnidadRoutingModule */

    /***/
    function K4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUnidadRoutingModule", function () {
        return AddUnidadRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_unidad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-unidad.component */
      "1Q09");

      var routes = [{
        path: '',
        component: _add_unidad_component__WEBPACK_IMPORTED_MODULE_2__["AddUnidadComponent"]
      }];

      var AddUnidadRoutingModule = function AddUnidadRoutingModule() {
        _classCallCheck(this, AddUnidadRoutingModule);
      };

      AddUnidadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddUnidadRoutingModule
      });
      AddUnidadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddUnidadRoutingModule_Factory(t) {
          return new (t || AddUnidadRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddUnidadRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUnidadRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Ux96":
    /*!**********************************************************************************!*\
      !*** ./src/app/entidades/datos-entidad/unidades/add-unidad/add-unidad.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: AddUnidadModule */

    /***/
    function Ux96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUnidadModule", function () {
        return AddUnidadModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _add_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-unidad-routing.module */
      "9K/4");
      /* harmony import */


      var _add_unidad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-unidad.component */
      "1Q09");
      /* harmony import */


      var src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/crud-material/crud-material.module */
      "ah4G");

      var AddUnidadModule = function AddUnidadModule() {
        _classCallCheck(this, AddUnidadModule);
      };

      AddUnidadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddUnidadModule
      });
      AddUnidadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddUnidadModule_Factory(t) {
          return new (t || AddUnidadModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddUnidadRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddUnidadModule, {
          declarations: [_add_unidad_component__WEBPACK_IMPORTED_MODULE_3__["AddUnidadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddUnidadRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUnidadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_add_unidad_component__WEBPACK_IMPORTED_MODULE_3__["AddUnidadComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddUnidadRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=add-unidad-add-unidad-module-es5.js.map
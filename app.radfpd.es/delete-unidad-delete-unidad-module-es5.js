(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-unidad-delete-unidad-module"], {
    /***/
    "8jil":
    /*!************************************************************************************************!*\
      !*** ./src/app/entidades/datos-entidad/unidades/delete-unidad/delete-unidad-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: DeleteUnidadRoutingModule */

    /***/
    function jil(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteUnidadRoutingModule", function () {
        return DeleteUnidadRoutingModule;
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


      var _delete_unidad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./delete-unidad.component */
      "GUrN");

      var routes = [{
        path: '',
        component: _delete_unidad_component__WEBPACK_IMPORTED_MODULE_2__["DeleteUnidadComponent"]
      }];

      var DeleteUnidadRoutingModule = function DeleteUnidadRoutingModule() {
        _classCallCheck(this, DeleteUnidadRoutingModule);
      };

      DeleteUnidadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DeleteUnidadRoutingModule
      });
      DeleteUnidadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DeleteUnidadRoutingModule_Factory(t) {
          return new (t || DeleteUnidadRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeleteUnidadRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteUnidadRoutingModule, [{
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
    "DOvP":
    /*!****************************************************************************************!*\
      !*** ./src/app/entidades/datos-entidad/unidades/delete-unidad/delete-unidad.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: DeleteUnidadModule */

    /***/
    function DOvP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteUnidadModule", function () {
        return DeleteUnidadModule;
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


      var _delete_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./delete-unidad-routing.module */
      "8jil");
      /* harmony import */


      var _delete_unidad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./delete-unidad.component */
      "GUrN");
      /* harmony import */


      var src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/crud-material/crud-material.module */
      "ah4G");

      var DeleteUnidadModule = function DeleteUnidadModule() {
        _classCallCheck(this, DeleteUnidadModule);
      };

      DeleteUnidadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DeleteUnidadModule
      });
      DeleteUnidadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DeleteUnidadModule_Factory(t) {
          return new (t || DeleteUnidadModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delete_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeleteUnidadRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeleteUnidadModule, {
          declarations: [_delete_unidad_component__WEBPACK_IMPORTED_MODULE_3__["DeleteUnidadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delete_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeleteUnidadRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteUnidadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_delete_unidad_component__WEBPACK_IMPORTED_MODULE_3__["DeleteUnidadComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delete_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeleteUnidadRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=delete-unidad-delete-unidad-module-es5.js.map
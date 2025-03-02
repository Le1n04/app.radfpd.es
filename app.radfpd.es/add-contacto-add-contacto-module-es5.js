(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-contacto-add-contacto-module"], {
    /***/
    "AaId":
    /*!***********************************************************************************************!*\
      !*** ./src/app/entidades/datos-entidad/contactos-entidad/add-contacto/add-contacto.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AddContactoModule */

    /***/
    function AaId(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddContactoModule", function () {
        return AddContactoModule;
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


      var _add_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-contacto-routing.module */
      "kDIw");
      /* harmony import */


      var _add_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-contacto.component */
      "EL9k");
      /* harmony import */


      var src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/crud-material/crud-material.module */
      "ah4G");

      var AddContactoModule = function AddContactoModule() {
        _classCallCheck(this, AddContactoModule);
      };

      AddContactoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddContactoModule
      });
      AddContactoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddContactoModule_Factory(t) {
          return new (t || AddContactoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddContactoRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddContactoModule, {
          declarations: [_add_contacto_component__WEBPACK_IMPORTED_MODULE_3__["AddContactoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddContactoRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddContactoModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_add_contacto_component__WEBPACK_IMPORTED_MODULE_3__["AddContactoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddContactoRoutingModule"], src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kDIw":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/entidades/datos-entidad/contactos-entidad/add-contacto/add-contacto-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: AddContactoRoutingModule */

    /***/
    function kDIw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddContactoRoutingModule", function () {
        return AddContactoRoutingModule;
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


      var _add_contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-contacto.component */
      "EL9k");

      var routes = [{
        path: '',
        component: _add_contacto_component__WEBPACK_IMPORTED_MODULE_2__["AddContactoComponent"]
      }];

      var AddContactoRoutingModule = function AddContactoRoutingModule() {
        _classCallCheck(this, AddContactoRoutingModule);
      };

      AddContactoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddContactoRoutingModule
      });
      AddContactoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddContactoRoutingModule_Factory(t) {
          return new (t || AddContactoRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddContactoRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddContactoRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=add-contacto-add-contacto-module-es5.js.map
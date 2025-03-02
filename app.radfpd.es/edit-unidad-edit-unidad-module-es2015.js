(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-unidad-edit-unidad-module"],{

/***/ "Ypt7":
/*!********************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/unidades/edit-unidad/edit-unidad-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: EditUnidadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUnidadRoutingModule", function() { return EditUnidadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_unidad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-unidad.component */ "fHkp");





const routes = [{ path: '', component: _edit_unidad_component__WEBPACK_IMPORTED_MODULE_2__["EditUnidadComponent"] }];
class EditUnidadRoutingModule {
}
EditUnidadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditUnidadRoutingModule });
EditUnidadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditUnidadRoutingModule_Factory(t) { return new (t || EditUnidadRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditUnidadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUnidadRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "o+td":
/*!************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/unidades/edit-unidad/edit-unidad.module.ts ***!
  \************************************************************************************/
/*! exports provided: EditUnidadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUnidadModule", function() { return EditUnidadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-unidad-routing.module */ "Ypt7");
/* harmony import */ var _edit_unidad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-unidad.component */ "fHkp");
/* harmony import */ var src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/crud-material/crud-material.module */ "ah4G");






class EditUnidadModule {
}
EditUnidadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditUnidadModule });
EditUnidadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditUnidadModule_Factory(t) { return new (t || EditUnidadModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _edit_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditUnidadRoutingModule"],
            src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditUnidadModule, { declarations: [_edit_unidad_component__WEBPACK_IMPORTED_MODULE_3__["EditUnidadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _edit_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditUnidadRoutingModule"],
        src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUnidadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_edit_unidad_component__WEBPACK_IMPORTED_MODULE_3__["EditUnidadComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _edit_unidad_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditUnidadRoutingModule"],
                    src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=edit-unidad-edit-unidad-module-es2015.js.map
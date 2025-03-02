(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-contacto-edit-contacto-module"],{

/***/ "n9eb":
/*!*********************************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/contactos-entidad/edit-contacto/edit-contacto-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EditContactoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactoRoutingModule", function() { return EditContactoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-contacto.component */ "UtqR");





const routes = [{ path: '', component: _edit_contacto_component__WEBPACK_IMPORTED_MODULE_2__["EditContactoComponent"] }];
class EditContactoRoutingModule {
}
EditContactoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditContactoRoutingModule });
EditContactoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditContactoRoutingModule_Factory(t) { return new (t || EditContactoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditContactoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditContactoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rS0u":
/*!*************************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/contactos-entidad/edit-contacto/edit-contacto.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditContactoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactoModule", function() { return EditContactoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-contacto-routing.module */ "n9eb");
/* harmony import */ var _edit_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-contacto.component */ "UtqR");
/* harmony import */ var src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/crud-material/crud-material.module */ "ah4G");






class EditContactoModule {
}
EditContactoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditContactoModule });
EditContactoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditContactoModule_Factory(t) { return new (t || EditContactoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _edit_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditContactoRoutingModule"],
            src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditContactoModule, { declarations: [_edit_contacto_component__WEBPACK_IMPORTED_MODULE_3__["EditContactoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _edit_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditContactoRoutingModule"],
        src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditContactoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_edit_contacto_component__WEBPACK_IMPORTED_MODULE_3__["EditContactoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _edit_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditContactoRoutingModule"],
                    src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=edit-contacto-edit-contacto-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-contacto-delete-contacto-module"],{

/***/ "7tcf":
/*!*************************************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/contactos-entidad/delete-contacto/delete-contacto-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DeleteContactoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteContactoRoutingModule", function() { return DeleteContactoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delete_contacto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-contacto.component */ "LG+F");





const routes = [{ path: '', component: _delete_contacto_component__WEBPACK_IMPORTED_MODULE_2__["DeleteContactoComponent"] }];
class DeleteContactoRoutingModule {
}
DeleteContactoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeleteContactoRoutingModule });
DeleteContactoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeleteContactoRoutingModule_Factory(t) { return new (t || DeleteContactoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeleteContactoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteContactoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KsEN":
/*!*****************************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/contactos-entidad/delete-contacto/delete-contacto.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DeleteContactoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteContactoModule", function() { return DeleteContactoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _delete_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-contacto-routing.module */ "7tcf");
/* harmony import */ var _delete_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-contacto.component */ "LG+F");
/* harmony import */ var src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/crud-material/crud-material.module */ "ah4G");






class DeleteContactoModule {
}
DeleteContactoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeleteContactoModule });
DeleteContactoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeleteContactoModule_Factory(t) { return new (t || DeleteContactoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _delete_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeleteContactoRoutingModule"],
            src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeleteContactoModule, { declarations: [_delete_contacto_component__WEBPACK_IMPORTED_MODULE_3__["DeleteContactoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _delete_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeleteContactoRoutingModule"],
        src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteContactoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_delete_contacto_component__WEBPACK_IMPORTED_MODULE_3__["DeleteContactoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _delete_contacto_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeleteContactoRoutingModule"],
                    src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=delete-contacto-delete-contacto-module-es2015.js.map
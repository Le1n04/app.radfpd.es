(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-asistente-add-asistente-module"],{

/***/ "cCOH":
/*!**************************************************************************************************!*\
  !*** ./src/app/reuniones/datos-reunion/asistentes/add-asistente/add-asistente-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddAsistenteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAsistenteRoutingModule", function() { return AddAsistenteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_asistente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-asistente.component */ "JrXS");





const routes = [{ path: '', component: _add_asistente_component__WEBPACK_IMPORTED_MODULE_2__["AddAsistenteComponent"] }];
class AddAsistenteRoutingModule {
}
AddAsistenteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddAsistenteRoutingModule });
AddAsistenteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddAsistenteRoutingModule_Factory(t) { return new (t || AddAsistenteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddAsistenteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAsistenteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jlky":
/*!******************************************************************************************!*\
  !*** ./src/app/reuniones/datos-reunion/asistentes/add-asistente/add-asistente.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AddAsistenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAsistenteModule", function() { return AddAsistenteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_asistente_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-asistente-routing.module */ "cCOH");
/* harmony import */ var _add_asistente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-asistente.component */ "JrXS");
/* harmony import */ var src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/crud-material/crud-material.module */ "ah4G");






class AddAsistenteModule {
}
AddAsistenteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddAsistenteModule });
AddAsistenteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddAsistenteModule_Factory(t) { return new (t || AddAsistenteModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _add_asistente_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddAsistenteRoutingModule"],
            src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddAsistenteModule, { declarations: [_add_asistente_component__WEBPACK_IMPORTED_MODULE_3__["AddAsistenteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _add_asistente_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddAsistenteRoutingModule"],
        src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAsistenteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_asistente_component__WEBPACK_IMPORTED_MODULE_3__["AddAsistenteComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _add_asistente_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddAsistenteRoutingModule"],
                    src_app_modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=add-asistente-add-asistente-module-es2015.js.map
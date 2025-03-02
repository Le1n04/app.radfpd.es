(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["objetivo-objetivo-module"],{

/***/ "EUER":
/*!************************************************************************!*\
  !*** ./src/app/reuniones/datos-reunion/objetivo/objetivo.component.ts ***!
  \************************************************************************/
/*! exports provided: ObjetivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivoComponent", function() { return ObjetivoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/messages */ "Xksa");
/* harmony import */ var src_app_shared_editor_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/editor-config */ "6rgx");
/* harmony import */ var _datos_reunion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datos-reunion.component */ "2/A8");
/* harmony import */ var src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/reuniones.service */ "5hAj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "mUB+");










class ObjetivoComponent {
    constructor(datosReunion, reunionService) {
        this.datosReunion = datosReunion;
        this.reunionService = reunionService;
        this.editorConfig = src_app_shared_editor_config__WEBPACK_IMPORTED_MODULE_3__["editorConfig"];
    }
    ngOnInit() {
        this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_2__["ENTIDAD_REUNION"];
        this.setForm();
        this.objetivoForm.valueChanges.subscribe(form => {
            this.reunionService.setObjetivoReunion(form);
        });
    }
    setForm() {
        this.objetivoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id_reunion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.id_reunion, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            objetivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.objetivo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnDestroy() {
        //this.editor.destroy();
    }
}
ObjetivoComponent.ɵfac = function ObjetivoComponent_Factory(t) { return new (t || ObjetivoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datos_reunion_component__WEBPACK_IMPORTED_MODULE_4__["DatosReunionComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__["ReunionesService"])); };
ObjetivoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObjetivoComponent, selectors: [["app-objetivo"]], decls: 6, vars: 3, consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["formControlName", "objetivo", "required", "", 3, "config"]], template: function ObjetivoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "angular-editor", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Objetivos: ", ctx.ENTIDAD, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.objetivoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.editorConfig);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 10em;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  margin-left: 0.75em;\n}\n\n .mat-dialog-actions {\n  display: block;\n  text-align: center;\n}\n\n.importe[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-icon.incidencia[_ngcontent-%COMP%] {\n  color: #f18f1f;\n}\n\nmat-icon.predcio[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.ultimo[_ngcontent-%COMP%] {\n  margin-bottom: 4em !important;\n}\n\n.musical[_ngcontent-%COMP%] {\n  color: #f18f1f;\n}\n\n.imagenPortada[_ngcontent-%COMP%] {\n  width: 20em;\n}\n\n.alineado[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1bmlvbmVzL2RhdG9zLXJldW5pb24vb2JqZXRpdm8vb2JqZXRpdm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9yZXVuaW9uZXMvZGF0b3MtcmV1bmlvbi9vYmpldGl2by9vYmpldGl2by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIC8vd2lkdGg6IDU1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMGVtO1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMC43NWVtO1xufVxuXG46Om5nLWRlZXAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbXBvcnRlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWljb24uaW5jaWRlbmNpYSB7XG4gICAgY29sb3I6IHJnYigyNDEsIDE0MywgMzEpO1xufVxuXG5tYXQtaWNvbi5wcmVkY2lvOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51bHRpbW8ge1xuICAgIG1hcmdpbi1ib3R0b206IDRlbSAhaW1wb3J0YW50O1xufVxuXG4ubXVzaWNhbCB7XG4gICAgY29sb3I6IHJnYigyNDEsIDE0MywgMzEpO1xufVxuXG4uaW1hZ2VuUG9ydGFkYSB7XG4gICAgd2lkdGg6IDIwZW07XG59XG5cbi5hbGluZWFkbyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjetivoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-objetivo',
                templateUrl: './objetivo.component.html',
                styleUrls: ['./objetivo.component.scss']
            }]
    }], function () { return [{ type: _datos_reunion_component__WEBPACK_IMPORTED_MODULE_4__["DatosReunionComponent"] }, { type: src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__["ReunionesService"] }]; }, null); })();


/***/ }),

/***/ "WMzO":
/*!*********************************************************************!*\
  !*** ./src/app/reuniones/datos-reunion/objetivo/objetivo.module.ts ***!
  \*********************************************************************/
/*! exports provided: ObjetivoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivoModule", function() { return ObjetivoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _objetivo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objetivo-routing.module */ "jhSY");
/* harmony import */ var _objetivo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objetivo.component */ "EUER");
/* harmony import */ var _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/crud-material/crud-material.module */ "ah4G");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/angular-editor */ "mUB+");







class ObjetivoModule {
}
ObjetivoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ObjetivoModule });
ObjetivoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ObjetivoModule_Factory(t) { return new (t || ObjetivoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _objetivo_routing_module__WEBPACK_IMPORTED_MODULE_2__["ObjetivoRoutingModule"],
            _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ObjetivoModule, { declarations: [_objetivo_component__WEBPACK_IMPORTED_MODULE_3__["ObjetivoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _objetivo_routing_module__WEBPACK_IMPORTED_MODULE_2__["ObjetivoRoutingModule"],
        _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"],
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjetivoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_objetivo_component__WEBPACK_IMPORTED_MODULE_3__["ObjetivoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _objetivo_routing_module__WEBPACK_IMPORTED_MODULE_2__["ObjetivoRoutingModule"],
                    _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"],
                    _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jhSY":
/*!*****************************************************************************!*\
  !*** ./src/app/reuniones/datos-reunion/objetivo/objetivo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ObjetivoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetivoRoutingModule", function() { return ObjetivoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _objetivo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objetivo.component */ "EUER");





const routes = [{ path: '', component: _objetivo_component__WEBPACK_IMPORTED_MODULE_2__["ObjetivoComponent"] }];
class ObjetivoRoutingModule {
}
ObjetivoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ObjetivoRoutingModule });
ObjetivoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ObjetivoRoutingModule_Factory(t) { return new (t || ObjetivoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ObjetivoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjetivoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=objetivo-objetivo-module-es2015.js.map
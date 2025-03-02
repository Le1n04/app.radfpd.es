(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unidades-unidades-module"],{

/***/ "1Q09":
/*!*************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/unidades/add-unidad/add-unidad.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddUnidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnidadComponent", function() { return AddUnidadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/messages */ "Xksa");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/unidades.service */ "d/co");
/* harmony import */ var src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ciclos.service */ "KafX");
/* harmony import */ var src_app_services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/unidades-dual.service */ "92VL");
/* harmony import */ var src_app_services_motivos_nodual_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/motivos-nodual.service */ "+hd0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



















function AddUnidadComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idC_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idC_r3.id_ciclo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idC_r3.ciclo, " ");
} }
function AddUnidadComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idUD_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idUD_r4.id_unidad_dual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idUD_r4.unidad_dual, " ");
} }
function AddUnidadComponent_div_24_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idMN_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idMN_r6.id_motivo_nodual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idMN_r6.motivo_nodual, " ");
} }
function AddUnidadComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Motivo no Dual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sin motivo no Dual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddUnidadComponent_div_24_mat_option_7_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.motivos_nodual);
} }
class AddUnidadComponent {
    constructor(dialogRef, snackBar, servicioUnidades, servicioCiclos, servicioUnidadesDual, servicioMotivosNodual, idEntidad) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.servicioUnidades = servicioUnidades;
        this.servicioCiclos = servicioCiclos;
        this.servicioUnidadesDual = servicioUnidadesDual;
        this.servicioMotivosNodual = servicioMotivosNodual;
        this.idEntidad = idEntidad;
        this.esDual = true;
    }
    ngOnInit() {
        this.unidadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id_entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.idEntidad, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id_ciclo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            unidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            plazas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id_unidad_dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id_motivo_nodual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["ENTIDAD_UNIDAD"];
        this.getCiclos();
        this.getUnidadesDual();
        this.getMotivosNodual(this.idEntidad);
    }
    confirmAdd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.unidadForm.valid) {
                const unidad = this.unidadForm.value;
                const RESPONSE = yield this.servicioUnidades.addUnidad(unidad).toPromise();
                if (RESPONSE.ok) {
                    this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
                    this.dialogRef.close({ ok: RESPONSE.ok, data: RESPONSE.data });
                }
                else {
                    this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
                }
            }
            else {
                this.snackBar.open(src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["INVALID_FORM"], src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
            }
        });
    }
    getCiclos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.servicioCiclos.getAllCiclos().toPromise();
            if (RESPONSE.ok) {
                this.ciclos = RESPONSE.data;
            }
        });
    }
    getUnidadesDual() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.servicioUnidadesDual.getAllUnidadesDual().toPromise();
            if (RESPONSE.ok) {
                this.unidades_dual = RESPONSE.data;
            }
        });
    }
    getMotivosNodual(idEntidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.servicioMotivosNodual.get(idEntidad).toPromise();
            if (RESPONSE.ok) {
                this.motivos_nodual = RESPONSE.data;
            }
        });
    }
    onNoClick() {
        this.dialogRef.close({ ok: false });
    }
    unidadDual(ud) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.esDual = (ud > 1);
            console.log(this.esDual);
        });
    }
}
AddUnidadComponent.ɵfac = function AddUnidadComponent_Factory(t) { return new (t || AddUnidadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__["CiclosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_8__["UnidadesDualService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_motivos_nodual_service__WEBPACK_IMPORTED_MODULE_9__["MotivosNodualService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
AddUnidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddUnidadComponent, selectors: [["app-add-unidad"]], decls: 33, vars: 6, consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["formControlName", "id_ciclo", "required", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["color", "accent"], ["matInput", "", "placeholder", "Unidad", "formControlName", "unidad", "name", "unidad", "maxlength", "100", "required", ""], ["matInput", "", "placeholder", "Plazas", "formControlName", "plazas", "name", "plazas", "maxlength", "100", "required", ""], ["formControlName", "id_unidad_dual", "required", "", 3, "valueChange"], ["class", "form", 4, "ngIf"], ["matInput", "", "placeholder", "Observaciones", "formControlName", "observaciones", "name", "Observaciones"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "onSubmit", "type", "submit", 3, "disabled", "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"], [3, "value"], ["formControlName", "id_motivo_nodual"]], template: function AddUnidadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ciclo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sin ciclo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddUnidadComponent_mat_option_11_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u00BFUnidad Dual?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AddUnidadComponent_Template_mat_select_valueChange_22_listener($event) { return ctx.unidadDual($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddUnidadComponent_mat_option_23_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddUnidadComponent_div_24_Template, 8, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddUnidadComponent_Template_button_click_29_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddUnidadComponent_Template_button_click_31_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Nuevo ", ctx.ENTIDAD, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.unidadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ciclos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.unidades_dual);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.esDual);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.unidadForm.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  min-width: 30em;\n  text-align: center;\n  padding-top: 10px;\n}\n\ndiv.mat-dialog-actions[_ngcontent-%COMP%] {\n  width: 12em;\n  margin: auto;\n}\n\n.radioButton[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1em;\n  padding-left: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aWRhZGVzL2RhdG9zLWVudGlkYWQvdW5pZGFkZXMvYWRkLXVuaWRhZC9hZGQtdW5pZGFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lbnRpZGFkZXMvZGF0b3MtZW50aWRhZC91bmlkYWRlcy9hZGQtdW5pZGFkL2FkZC11bmlkYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4td2lkdGg6IDMwZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5kaXYubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICB3aWR0aDogMTJlbTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5yYWRpb0J1dHRvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddUnidadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-unidad',
                templateUrl: './add-unidad.component.html',
                styleUrls: ['./add-unidad.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"] }, { type: src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__["CiclosService"] }, { type: src_app_services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_8__["UnidadesDualService"] }, { type: src_app_services_motivos_nodual_service__WEBPACK_IMPORTED_MODULE_9__["MotivosNodualService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Bm/3":
/*!*********************************************!*\
  !*** ./src/app/unidades/unidades.module.ts ***!
  \*********************************************/
/*! exports provided: UnidadesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesModule", function() { return UnidadesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _unidades_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unidades-routing.module */ "OKB9");
/* harmony import */ var _unidades_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unidades.component */ "Sffv");
/* harmony import */ var _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/crud-material/crud-material.module */ "ah4G");






class UnidadesModule {
}
UnidadesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnidadesModule });
UnidadesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnidadesModule_Factory(t) { return new (t || UnidadesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _unidades_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesRoutingModule"],
            _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnidadesModule, { declarations: [_unidades_component__WEBPACK_IMPORTED_MODULE_3__["UnidadesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _unidades_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesRoutingModule"],
        _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_unidades_component__WEBPACK_IMPORTED_MODULE_3__["UnidadesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _unidades_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesRoutingModule"],
                    _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GUrN":
/*!*******************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/unidades/delete-unidad/delete-unidad.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeleteUnidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUnidadComponent", function() { return DeleteUnidadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/messages */ "Xksa");
/* harmony import */ var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/unidades.service */ "d/co");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class DeleteUnidadComponent {
    constructor(dialogRef, unidad, servicioUnidad, snackBar) {
        this.dialogRef = dialogRef;
        this.unidad = unidad;
        this.servicioUnidad = servicioUnidad;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_3__["ENTIDAD_CONTACTO"];
    }
    onNoClick() {
        this.dialogRef.close({ ok: false });
    }
    confirmDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.servicioUnidad.deleteUnidad(this.unidad.id_unidad).toPromise();
            if (RESPONSE.ok) {
                this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], { duration: 5000 });
                this.dialogRef.close({ ok: RESPONSE.ok, data: RESPONSE.data });
            }
            else {
                this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], { duration: 5000 });
            }
        });
    }
}
DeleteUnidadComponent.ɵfac = function DeleteUnidadComponent_Factory(t) { return new (t || DeleteUnidadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__["UnidadesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
DeleteUnidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteUnidadComponent, selectors: [["app-delete-unidad"]], decls: 13, vars: 5, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "id", "deleteEntidad", 3, "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"]], template: function DeleteUnidadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteUnidadComponent_Template_button_click_9_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteUnidadComponent_Template_button_click_11_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00BFSeguro que deseas eliminar este ", ctx.ENTIDAD, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Id: ", ctx.unidad.id_unidad, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.ENTIDAD, ": ", ctx.unidad.unidad, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Eliminar ", ctx.ENTIDAD, "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGlkYWRlcy9kYXRvcy1lbnRpZGFkL3VuaWRhZGVzL2RlbGV0ZS11bmlkYWQvZGVsZXRlLXVuaWRhZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteUnidadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-delete-unidad',
                templateUrl: './delete-unidad.component.html',
                styleUrls: ['./delete-unidad.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_4__["UnidadesService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Hw+l":
/*!*********************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/unidades/unidades.module.ts ***!
  \*********************************************************************/
/*! exports provided: UnidadesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesModule", function() { return UnidadesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _unidades_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unidades-routing.module */ "zMJZ");
/* harmony import */ var _unidades_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unidades.component */ "RKB+");
/* harmony import */ var _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/crud-material/crud-material.module */ "ah4G");






class UnidadesModule {
}
UnidadesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnidadesModule });
UnidadesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnidadesModule_Factory(t) { return new (t || UnidadesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _unidades_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesRoutingModule"],
            _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnidadesModule, { declarations: [_unidades_component__WEBPACK_IMPORTED_MODULE_3__["UnidadesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _unidades_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesRoutingModule"],
        _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_unidades_component__WEBPACK_IMPORTED_MODULE_3__["UnidadesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _unidades_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesRoutingModule"],
                    _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "OKB9":
/*!*****************************************************!*\
  !*** ./src/app/unidades/unidades-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UnidadesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesRoutingModule", function() { return UnidadesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _unidades_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unidades.component */ "Sffv");





const routes = [{ path: '', component: _unidades_component__WEBPACK_IMPORTED_MODULE_2__["UnidadesComponent"] }];
class UnidadesRoutingModule {
}
UnidadesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnidadesRoutingModule });
UnidadesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnidadesRoutingModule_Factory(t) { return new (t || UnidadesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnidadesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "RKB+":
/*!************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/unidades/unidades.component.ts ***!
  \************************************************************************/
/*! exports provided: UnidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesComponent", function() { return UnidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_unidad_add_unidad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-unidad/add-unidad.component */ "1Q09");
/* harmony import */ var _edit_unidad_edit_unidad_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-unidad/edit-unidad.component */ "fHkp");
/* harmony import */ var _delete_unidad_delete_unidad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete-unidad/delete-unidad.component */ "GUrN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/unidades.service */ "d/co");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _services_entidades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/entidades.service */ "DrcZ");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





















function UnidadesComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.idUnidadFilter);
} }
function UnidadesComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r17.id_unidad, " ");
} }
function UnidadesComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.idCicloFilter);
} }
function UnidadesComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r18.fk_ciclo, "");
} }
function UnidadesComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r4.unidadFilter);
} }
function UnidadesComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r19.unidad, "");
} }
function UnidadesComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r6.plazasFilter);
} }
function UnidadesComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r20.plazas, "");
} }
function UnidadesComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r8.idUnidadDualFilter);
} }
function UnidadesComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r21.fk_unidad_dual, "");
} }
function UnidadesComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r10.idMotivoNodualFilter);
} }
function UnidadesComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r22.fk_motivo_nodual, "");
} }
function UnidadesComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesComponent_th_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.addUnidad(ctx_r23.entidad.id_entidad); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnidadesComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesComponent_td_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const unidades_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.editUnidad(unidades_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " mode_edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesComponent_td_26_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const unidades_r25 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.deleteUnidad(unidades_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnidadesComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 28);
} }
function UnidadesComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 29);
} }
const _c0 = function () { return [5, 10, 25]; };
class UnidadesComponent {
    constructor(dialog, unidadesService, overlay, entidadService) {
        this.dialog = dialog;
        this.unidadesService = unidadesService;
        this.overlay = overlay;
        this.entidadService = entidadService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.idUnidadFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idCicloFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.unidadFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.plazasFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idUnidadDualFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idMotivoNodualFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.filterValues = { id_unidad: '', id_ciclo: '', unidad: '', plazas: '', id_unidad_dual: '', id_motivo_nodual: '' };
    }
    ngOnInit() {
        this.entidad = this.entidadService.entidad;
        this.getUnidades(this.entidad);
        //this.createFilter();
        //this.onChanges();
    }
    getUnidades(entidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.unidadesService.getUnidades(entidad.id_entidad).toPromise();
            this.permises = RESPONSE.permises;
            if (RESPONSE.ok) {
                this.unidadesService.unidad = RESPONSE.data;
                this.displayedColumns = ['id_ciclo', 'unidad', 'plazas', 'id_unidad_dual', 'id_motivo_nodual', 'actions'];
                this.dataSource.data = this.unidadesService.unidad;
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.dataSource.filterPredicate = this.createFilter();
                this.onChanges();
            }
        });
    }
    addUnidad(idEntidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_add_unidad_add_unidad_component__WEBPACK_IMPORTED_MODULE_6__["AddUnidadComponent"], { data: idEntidad, scrollStrategy: this.overlay.scrollStrategies.noop() });
            const RESULT = yield dialogRef.afterClosed().toPromise();
            if (RESULT) {
                if (RESULT.ok) {
                    this.ngOnInit();
                }
            }
        });
    }
    editUnidad(unidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_edit_unidad_edit_unidad_component__WEBPACK_IMPORTED_MODULE_7__["EditUnidadComponent"], { data: unidad, scrollStrategy: this.overlay.scrollStrategies.noop() });
            const RESULT = yield dialogRef.afterClosed().toPromise();
            if (RESULT) {
                if (RESULT.ok) {
                    this.ngOnInit();
                }
            }
        });
    }
    deleteUnidad(unidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_delete_unidad_delete_unidad_component__WEBPACK_IMPORTED_MODULE_8__["DeleteUnidadComponent"], { data: unidad, scrollStrategy: this.overlay.scrollStrategies.noop() });
            const RESULT = yield dialogRef.afterClosed().toPromise();
            if (RESULT) {
                if (RESULT.ok) {
                    this.ngOnInit();
                }
            }
        });
    }
    createFilter() {
        const filterFunction = (unidad, filter) => {
            const searchTerms = JSON.parse(filter);
            return unidad.id_unidad.toString().indexOf(searchTerms.id_unidad) !== -1
                && unidad.fk_ciclo.toLowerCase().indexOf(searchTerms.fk_ciclo.toLowerCase()) !== -1
                && unidad.unidad.toLowerCase().indexOf(searchTerms.unidad.toLowerCase()) !== -1
                && unidad.plazas.toString().indexOf(searchTerms.plazas.toLowerCase()) !== -1
                && unidad.fk_unidad_dual.toLowerCase().indexOf(searchTerms.fk_unidad_dual.toLowerCase()) !== -1
                && unidad.fk_motivo_nodual.toLowerCase().indexOf(searchTerms.fk_motivo_nodual.toLowerCase()) !== -1;
            // TODO Arreglar esto
        };
        return filterFunction;
    }
    onChanges() {
        this.idUnidadFilter.valueChanges.subscribe(value => {
            this.filterValues.id_unidad = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idCicloFilter.valueChanges
            .subscribe(value => {
            this.filterValues.id_ciclo = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.unidadFilter.valueChanges
            .subscribe(value => {
            this.filterValues.unidad = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.plazasFilter.valueChanges
            .subscribe(value => {
            this.filterValues.plazas = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idUnidadDualFilter.valueChanges
            .subscribe(value => {
            this.filterValues.id_unidad_dual = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idMotivoNodualFilter.valueChanges
            .subscribe(value => {
            this.filterValues.id_motivo_nodual = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
    }
}
UnidadesComponent.ɵfac = function UnidadesComponent_Factory(t) { return new (t || UnidadesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_10__["UnidadesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_entidades_service__WEBPACK_IMPORTED_MODULE_12__["EntidadesService"])); };
UnidadesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnidadesComponent, selectors: [["app-unidades"]], viewQuery: function UnidadesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 31, vars: 7, consts: [[1, "container"], ["mat-dialog-title", ""], [1, "example-container", "mat-elevation-z8"], [1, "example-table-container"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_unidad"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id_ciclo"], ["matColumnDef", "unidad"], ["matColumnDef", "plazas"], ["matColumnDef", "id_unidad_dual"], ["matColumnDef", "id_motivo_nodual"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", ""], ["matInput", "", "placeholder", "Id", 3, "formControl"], ["mat-sort-header", ""], ["mat-cell", ""], ["matInput", "", "placeholder", "Ciclo", 3, "formControl"], ["matInput", "", "placeholder", "Unidad", 3, "formControl"], ["matInput", "", "placeholder", "Plazas", 3, "formControl"], ["matInput", "", "placeholder", "Dual?", 3, "formControl"], ["matInput", "", "placeholder", "Motivo no Dual", 3, "formControl"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function UnidadesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UnidadesComponent_th_7_Template, 3, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UnidadesComponent_td_8_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UnidadesComponent_th_10_Template, 3, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UnidadesComponent_td_11_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UnidadesComponent_th_13_Template, 3, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UnidadesComponent_td_14_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UnidadesComponent_th_16_Template, 3, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UnidadesComponent_td_17_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UnidadesComponent_th_19_Template, 3, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UnidadesComponent_td_20_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UnidadesComponent_th_22_Template, 3, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UnidadesComponent_td_23_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UnidadesComponent_th_25_Template, 4, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UnidadesComponent_td_26_Template, 7, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UnidadesComponent_tr_27_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UnidadesComponent_tr_28_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-paginator", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ciclos de ", ctx.entidad.entidad, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 10em;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.mat-dialog-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.mat-column-id_ciclo[_ngcontent-%COMP%] {\n  width: 35% !important;\n  padding-right: 1em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-unidad[_ngcontent-%COMP%] {\n  width: 10% !important;\n  padding-right: 4em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-plazas[_ngcontent-%COMP%] {\n  width: 10% !important;\n  padding-right: 4em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-id_unidad_dual[_ngcontent-%COMP%] {\n  width: 5% !important;\n  padding-right: 4em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-id_motivo_nodual[_ngcontent-%COMP%] {\n  width: 25% !important;\n  padding-right: 1em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 2em !important;\n  padding-right: 0em !important;\n  word-wrap: break-word !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aWRhZGVzL2RhdG9zLWVudGlkYWQvdW5pZGFkZXMvdW5pZGFkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQURKOztBQUlBO0VBQ0ksb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvZW50aWRhZGVzL2RhdG9zLWVudGlkYWQvdW5pZGFkZXMvdW5pZGFkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAvL3dpZHRoOiA1NWVtO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtY29sdW1uLWlkX2NpY2xvIHtcbiAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMWVtICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tdW5pZGFkIHtcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNGVtICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tcGxhemFzIHtcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNGVtICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4taWRfdW5pZGFkX2R1YWwge1xuICAgIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWlkX21vdGl2b19ub2R1YWwge1xuICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW0gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgICB3aWR0aDogMmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMGVtICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnidadesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-unidades',
                templateUrl: './unidades.component.html',
                styleUrls: ['./unidades.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_10__["UnidadesService"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"] }, { type: _services_entidades_service__WEBPACK_IMPORTED_MODULE_12__["EntidadesService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "Sffv":
/*!************************************************!*\
  !*** ./src/app/unidades/unidades.component.ts ***!
  \************************************************/
/*! exports provided: UnidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesComponent", function() { return UnidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_unidades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/unidades.service */ "d/co");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");






// import { AddUnidadComponent } from './add-unidad/add-unidad.component';
// import { EditUnidadComponent } from './edit-unidad/edit-unidad.component';
// import { DeleteUnidadComponent } from './delete-unidad/delete-unidad.component';













function UnidadesComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.idUnidadFilter);
} }
function UnidadesComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r25.id_unidad, " ");
} }
function UnidadesComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.idEntidadFilter);
} }
function UnidadesComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r26.fk_entidad, "");
} }
function UnidadesComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r4.idCicloFilter);
} }
function UnidadesComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r27.fk_ciclo, "");
} }
function UnidadesComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r6.unidadFilter);
} }
function UnidadesComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r28.unidad, "");
} }
function UnidadesComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r8.plazasFilter);
} }
function UnidadesComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r29.plazas, "");
} }
function UnidadesComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r10.idUnidadDualFilter);
} }
function UnidadesComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r30.fk_unidad_dual, "");
} }
function UnidadesComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r12.idMotivoNodualFilter);
} }
function UnidadesComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r31.fk_motivo_nodual, "");
} }
function UnidadesComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r14.idZonaFilter);
} }
function UnidadesComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r32.fk_zona, "");
} }
function UnidadesComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r16.idProvinciaFilter);
} }
function UnidadesComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r33.fk_provincia, "");
} }
function UnidadesComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r18.idTipoEntidadFilter);
} }
function UnidadesComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidades_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidades_r34.fk_tipo_entidad, "");
} }
function UnidadesComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesComponent_th_34_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.addUnidad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " add_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnidadesComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesComponent_td_35_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const unidades_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.editUnidad(unidades_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " mode_edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesComponent_td_35_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const unidades_r37 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.deleteUnidad(unidades_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnidadesComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 34);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function UnidadesComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesComponent_tr_37_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const row_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.selection.select(row_r41); })("dblclick", function UnidadesComponent_tr_37_Template_tr_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const row_r41 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.editUnidad(row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r23.selection.isSelected(row_r41)));
} }
const _c1 = function () { return [5, 10, 25]; };
class UnidadesComponent {
    constructor(dialog, unidadesService, overlay) {
        this.dialog = dialog;
        this.unidadesService = unidadesService;
        this.overlay = overlay;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.idEntidadFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idUnidadFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idCicloFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.unidadFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.plazasFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idUnidadDualFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idMotivoNodualFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idZonaFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idProvinciaFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.idTipoEntidadFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.filterValues = { id_unidad: '', fk_entidad: '', fk_ciclo: '', unidad: '', plazas: '', fk_unidad_dual: '', fk_motivo_nodual: '', fk_zona: '', fk_provincia: '', fk_tipo_entidad: '' };
    }
    ngOnInit() {
        this.getUnidades();
        //this.createFilter();
        //this.onChanges();
    }
    getUnidades() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.unidadesService.getAllUnidades().toPromise();
            this.permises = RESPONSE.permises;
            if (RESPONSE.ok) {
                this.unidadesService.unidad = RESPONSE.data;
                this.displayedColumns = ['fk_entidad', 'fk_ciclo', 'unidad', 'plazas', 'fk_unidad_dual', 'fk_motivo_nodual', 'fk_zona', 'fk_provincia', 'fk_tipo_entidad', 'actions'];
                this.dataSource.data = this.unidadesService.unidad;
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.dataSource.filterPredicate = this.createFilter();
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](false, [this.unidad]);
                this.onChanges();
            }
        });
    }
    addUnidad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const dialogRef = this.dialog.open(AddUnidadComponent, { scrollStrategy: this.overlay.scrollStrategies.noop(), disableClose: true });
            // const RESULT = await dialogRef.afterClosed().toPromise();
            // if (RESULT) {
            //   if (RESULT.ok) {
            //     //this.unidadesService.unidad.push(RESULT.data);
            //     //this.dataSource.data = this.unidadesService.unidad;
            //     this.ngOnInit();
            //   }
            // }  
        });
    }
    editUnidad(unidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const dialogRef = this.dialog.open(EditUnidadComponent, { data: unidad, scrollStrategy: this.overlay.scrollStrategies.noop(), disableClose: true });
            // const RESULT = await dialogRef.afterClosed().toPromise();
            // if (RESULT) {
            //   if (RESULT.ok) {
            //     //this.unidadesService.editUnidad(RESULT.data);
            //     //this.dataSource.data = this.unidadesService.unidad;
            //     this.ngOnInit();
            //   }
            // }  
        });
    }
    deleteUnidad(unidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const dialogRef = this.dialog.open(DeleteUnidadComponent, { data: unidad, scrollStrategy: this.overlay.scrollStrategies.noop() });
            // const RESULT = await dialogRef.afterClosed().toPromise();
            // if (RESULT) {
            //   if (RESULT.ok) {
            //     //this.unidadesService.deleteUnidad(RESULT.data);
            //     //this.dataSource.data = this.unidadesService.unidad;
            //     this.ngOnInit();
            //   }
            // }
        });
    }
    createFilter() {
        const filterFunction = (unidad, filter) => {
            const searchTerms = JSON.parse(filter);
            return unidad.id_unidad.toString().indexOf(searchTerms.id_unidad) !== -1
                && unidad.fk_entidad.toLowerCase().indexOf(searchTerms.fk_entidad.toLowerCase()) !== -1
                && unidad.fk_ciclo.toLowerCase().indexOf(searchTerms.fk_ciclo.toLowerCase()) !== -1
                && unidad.unidad.toLowerCase().indexOf(searchTerms.unidad.toLowerCase()) !== -1
                && unidad.plazas.toString().indexOf(searchTerms.plazas.toLowerCase()) !== -1
                && unidad.fk_unidad_dual.toLowerCase().indexOf(searchTerms.fk_unidad_dual.toLowerCase()) !== -1
                && unidad.fk_motivo_nodual.toLowerCase().indexOf(searchTerms.fk_motivo_nodual.toLowerCase()) !== -1
                && unidad.fk_zona.toLowerCase().indexOf(searchTerms.fk_zona.toLowerCase()) !== -1
                && unidad.fk_provincia.toLowerCase().indexOf(searchTerms.fk_provincia.toLowerCase()) !== -1
                && unidad.fk_tipo_entidad.toLowerCase().indexOf(searchTerms.fk_tipo_entidad.toLowerCase()) !== -1;
            // TODO Arreglar esto
        };
        return filterFunction;
    }
    onChanges() {
        this.idUnidadFilter.valueChanges.subscribe(value => {
            this.filterValues.id_unidad = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idEntidadFilter.valueChanges
            .subscribe(value => {
            this.filterValues.fk_entidad = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idCicloFilter.valueChanges
            .subscribe(value => {
            this.filterValues.fk_ciclo = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.unidadFilter.valueChanges
            .subscribe(value => {
            this.filterValues.unidad = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.plazasFilter.valueChanges
            .subscribe(value => {
            this.filterValues.plazas = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idUnidadDualFilter.valueChanges
            .subscribe(value => {
            this.filterValues.fk_unidad_dual = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idMotivoNodualFilter.valueChanges
            .subscribe(value => {
            this.filterValues.fk_motivo_nodual = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idZonaFilter.valueChanges
            .subscribe(value => {
            this.filterValues.fk_zona = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idProvinciaFilter.valueChanges
            .subscribe(value => {
            this.filterValues.fk_provincia = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
        this.idTipoEntidadFilter.valueChanges
            .subscribe(value => {
            this.filterValues.fk_tipo_entidad = value;
            this.dataSource.filter = JSON.stringify(this.filterValues);
        });
    }
}
UnidadesComponent.ɵfac = function UnidadesComponent_Factory(t) { return new (t || UnidadesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_unidades_service__WEBPACK_IMPORTED_MODULE_8__["UnidadesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"])); };
UnidadesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnidadesComponent, selectors: [["app-unidades"]], viewQuery: function UnidadesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 40, vars: 6, consts: [[1, "example-container", "mat-elevation-z8"], [1, "example-table-container"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_unidad"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fk_entidad"], ["matColumnDef", "fk_ciclo"], ["matColumnDef", "unidad"], ["matColumnDef", "plazas"], ["matColumnDef", "fk_unidad_dual"], ["matColumnDef", "fk_motivo_nodual"], ["matColumnDef", "fk_zona"], ["matColumnDef", "fk_provincia"], ["matColumnDef", "fk_tipo_entidad"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "dblclick", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", ""], ["matInput", "", "placeholder", "Id", 3, "formControl"], ["mat-sort-header", ""], ["mat-cell", ""], ["matInput", "", "placeholder", "Entidad", 3, "formControl"], ["matInput", "", "placeholder", "Ciclo", 3, "formControl"], ["matInput", "", "placeholder", "Unidad", 3, "formControl"], ["matInput", "", "placeholder", "Plazas", 3, "formControl"], ["matInput", "", "placeholder", "Dual?", 3, "formControl"], ["matInput", "", "placeholder", "Motivo no Dual", 3, "formControl"], ["matInput", "", "placeholder", "Zona", 3, "formControl"], ["matInput", "", "placeholder", "Provincia", 3, "formControl"], ["matInput", "", "placeholder", "Tipo Entidad", 3, "formControl"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "dblclick"]], template: function UnidadesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UnidadesComponent_th_4_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UnidadesComponent_td_5_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UnidadesComponent_th_7_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UnidadesComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UnidadesComponent_th_10_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UnidadesComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UnidadesComponent_th_13_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UnidadesComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UnidadesComponent_th_16_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UnidadesComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UnidadesComponent_th_19_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UnidadesComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UnidadesComponent_th_22_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UnidadesComponent_td_23_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UnidadesComponent_th_25_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UnidadesComponent_td_26_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UnidadesComponent_th_28_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UnidadesComponent_td_29_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](30, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, UnidadesComponent_th_31_Template, 3, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, UnidadesComponent_td_32_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](33, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UnidadesComponent_th_34_Template, 4, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, UnidadesComponent_td_35_Template, 7, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UnidadesComponent_tr_36_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, UnidadesComponent_tr_37_Template, 1, 3, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "mat-paginator", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]], styles: [".mat-column-fk_entidad[_ngcontent-%COMP%] {\n  width: 15% !important;\n  padding-right: 2em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-fk_ciclo[_ngcontent-%COMP%] {\n  width: 20% !important;\n  padding-right: 1em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-unidad[_ngcontent-%COMP%] {\n  width: 6% !important;\n  padding-right: 4em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-plazas[_ngcontent-%COMP%] {\n  width: 6% !important;\n  padding-right: 4em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-fk_unidad_dual[_ngcontent-%COMP%] {\n  width: 8% !important;\n  padding-right: 3em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-fk_motivo_nodual[_ngcontent-%COMP%] {\n  width: 12% !important;\n  padding-right: 3em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-fk_zona[_ngcontent-%COMP%] {\n  width: 9% !important;\n  padding-right: 3em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-fk_provincia[_ngcontent-%COMP%] {\n  width: 9% !important;\n  padding-right: 3em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-fk_tipo_entidad[_ngcontent-%COMP%] {\n  width: 9% !important;\n  padding-right: 3em !important;\n  word-wrap: break-word !important;\n}\n\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 4em !important;\n  padding-right: 0em !important;\n  word-wrap: break-word !important;\n}\n\n.selected[_ngcontent-%COMP%]   .mat-cell.blanco[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.selected[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  background-color: #726dfeaf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pZGFkZXMvdW5pZGFkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdW5pZGFkZXMvdW5pZGFkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1ma19lbnRpZGFkIHtcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMmVtICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tZmtfY2ljbG8ge1xuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW0gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi11bmlkYWQge1xuICAgIHdpZHRoOiA2JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLXBsYXphcyB7XG4gICAgd2lkdGg6IDYlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNGVtICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tZmtfdW5pZGFkX2R1YWwge1xuICAgIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWZrX21vdGl2b19ub2R1YWwge1xuICAgIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW0gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1ma196b25hIHtcbiAgICB3aWR0aDogOSUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW0gIWltcG9ydGFudDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1ma19wcm92aW5jaWEge1xuICAgIHdpZHRoOiA5JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWZrX3RpcG9fZW50aWRhZCB7XG4gICAgd2lkdGg6IDklICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogM2VtICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tYWN0aW9ucyB7XG4gICAgd2lkdGg6IDRlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBlbSAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RlZCAubWF0LWNlbGwuYmxhbmNvIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RlZCAubWF0LWNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjZkZmVhZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnidadesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-unidades',
                templateUrl: './unidades.component.html',
                styleUrls: ['./unidades.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _services_unidades_service__WEBPACK_IMPORTED_MODULE_8__["UnidadesService"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "d/co":
/*!**********************************************!*\
  !*** ./src/app/services/unidades.service.ts ***!
  \**********************************************/
/*! exports provided: UnidadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesService", function() { return UnidadesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'unidad';
class UnidadesService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getUnidades(idEntidad) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?entidad=${idEntidad}`, { headers: this.commonService.headers });
    }
    getAllUnidades() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addUnidad(unidad) {
        const body = JSON.stringify(unidad);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editUnidad(unidad) {
        const body = JSON.stringify(unidad);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteUnidad(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
UnidadesService.ɵfac = function UnidadesService_Factory(t) { return new (t || UnidadesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
UnidadesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnidadesService, factory: UnidadesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "fHkp":
/*!***************************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/unidades/edit-unidad/edit-unidad.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditUnidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUnidadComponent", function() { return EditUnidadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/messages */ "Xksa");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/unidades.service */ "d/co");
/* harmony import */ var src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ciclos.service */ "KafX");
/* harmony import */ var src_app_services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/unidades-dual.service */ "92VL");
/* harmony import */ var src_app_services_motivos_nodual_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/motivos-nodual.service */ "+hd0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



















function EditUnidadComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idC_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idC_r3.id_ciclo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idC_r3.ciclo, " ");
} }
function EditUnidadComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idUD_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idUD_r4.id_unidad_dual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idUD_r4.unidad_dual, " ");
} }
function EditUnidadComponent_div_24_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idMN_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idMN_r6.id_motivo_nodual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idMN_r6.motivo_nodual, " ");
} }
function EditUnidadComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Motivo no Dual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sin motivo no Dual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditUnidadComponent_div_24_mat_option_7_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.motivos_nodual);
} }
class EditUnidadComponent {
    constructor(dialogRef, snackBar, servicioUnidades, unidad, servicioCiclos, servicioUnidadesDual, servicioMotivosNodual) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.servicioUnidades = servicioUnidades;
        this.unidad = unidad;
        this.servicioCiclos = servicioCiclos;
        this.servicioUnidadesDual = servicioUnidadesDual;
        this.servicioMotivosNodual = servicioMotivosNodual;
        this.esDual = true;
    }
    ngOnInit() {
        this.setForm();
        //this.setFilter();
    }
    setForm() {
        this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["ENTIDAD_UNIDAD"];
        this.unidadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id_unidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidad.id_unidad, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id_entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidad.id_entidad, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id_ciclo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidad.id_ciclo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            unidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidad.unidad, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            plazas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidad.plazas, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id_unidad_dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidad.id_unidad_dual, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id_motivo_nodual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.unidad.id_motivo_nodual),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.unidadDual(this.unidad.id_unidad_dual);
        this.getCiclos();
        this.getUnidadesDual();
        this.getMotivosNodual(this.unidad.id_entidad);
    }
    confirmEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.unidad);
            if (this.unidadForm.valid) {
                const unidadForm = this.unidadForm.value;
                const RESPONSE = yield this.servicioUnidades.editUnidad(unidadForm).toPromise();
                if (RESPONSE.ok) {
                    this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
                    this.dialogRef.close({ ok: RESPONSE.ok, data: RESPONSE.data });
                }
                else {
                    this.snackBar.open(RESPONSE.message, src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
                }
            }
            else {
                this.snackBar.open(src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["ERROR"], src_app_shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
            }
        });
    }
    getCiclos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.servicioCiclos.getAllCiclos().toPromise();
            if (RESPONSE.ok) {
                this.ciclos = RESPONSE.data;
            }
        });
    }
    getUnidadesDual() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.servicioUnidadesDual.getAllUnidadesDual().toPromise();
            if (RESPONSE.ok) {
                this.unidades_dual = RESPONSE.data;
            }
        });
    }
    getMotivosNodual(idEntidad) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.servicioMotivosNodual.get(idEntidad).toPromise();
            if (RESPONSE.ok) {
                this.motivos_nodual = RESPONSE.data;
            }
        });
    }
    onNoClick() {
        this.dialogRef.close({ ok: false });
    }
    unidadDual(ud) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.esDual = (ud > 1);
            console.log(this.esDual);
        });
    }
}
EditUnidadComponent.ɵfac = function EditUnidadComponent_Factory(t) { return new (t || EditUnidadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__["CiclosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_8__["UnidadesDualService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_motivos_nodual_service__WEBPACK_IMPORTED_MODULE_9__["MotivosNodualService"])); };
EditUnidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditUnidadComponent, selectors: [["app-edit-unidad"]], decls: 33, vars: 6, consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["formControlName", "id_ciclo", "required", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["color", "accent"], ["matInput", "", "placeholder", "Unidad", "formControlName", "unidad", "name", "unidad", "maxlength", "100", "required", ""], ["matInput", "", "placeholder", "Plazas", "formControlName", "plazas", "name", "plazas", "maxlength", "100", "required", ""], ["formControlName", "id_unidad_dual", "required", "", 3, "valueChange"], ["class", "form", 4, "ngIf"], ["matInput", "", "placeholder", "Observaciones", "formControlName", "observaciones", "name", "Observaciones"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "onSubmit", "type", "submit", 3, "disabled", "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"], [3, "value"], ["formControlName", "id_motivo_nodual"]], template: function EditUnidadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ciclo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sin ciclo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EditUnidadComponent_mat_option_11_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u00BFUnidad Dual?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function EditUnidadComponent_Template_mat_select_valueChange_22_listener($event) { return ctx.unidadDual($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, EditUnidadComponent_mat_option_23_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, EditUnidadComponent_div_24_Template, 8, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUnidadComponent_Template_button_click_29_listener() { return ctx.confirmEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUnidadComponent_Template_button_click_31_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Editar ", ctx.ENTIDAD, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.unidadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ciclos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.unidades_dual);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.esDual);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.unidadForm.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  min-width: 30em;\n  text-align: center;\n  padding-top: 10px;\n}\n\ndiv.mat-dialog-actions[_ngcontent-%COMP%] {\n  width: 12em;\n  margin: auto;\n}\n\n.radioButton[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1em;\n  padding-left: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aWRhZGVzL2RhdG9zLWVudGlkYWQvdW5pZGFkZXMvZWRpdC11bmlkYWQvZWRpdC11bmlkYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2VudGlkYWRlcy9kYXRvcy1lbnRpZGFkL3VuaWRhZGVzL2VkaXQtdW5pZGFkL2VkaXQtdW5pZGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWluLXdpZHRoOiAzMGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuZGl2Lm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgd2lkdGg6IDEyZW07XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmFkaW9CdXR0b257XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditUnidadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-unidad',
                templateUrl: './edit-unidad.component.html',
                styleUrls: ['./edit-unidad.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: src_app_services_unidades_service__WEBPACK_IMPORTED_MODULE_6__["UnidadesService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_ciclos_service__WEBPACK_IMPORTED_MODULE_7__["CiclosService"] }, { type: src_app_services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_8__["UnidadesDualService"] }, { type: src_app_services_motivos_nodual_service__WEBPACK_IMPORTED_MODULE_9__["MotivosNodualService"] }]; }, null); })();


/***/ }),

/***/ "zMJZ":
/*!*****************************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/unidades/unidades-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UnidadesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesRoutingModule", function() { return UnidadesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _unidades_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unidades.component */ "RKB+");





const routes = [
    { path: '', component: _unidades_component__WEBPACK_IMPORTED_MODULE_2__["UnidadesComponent"] },
    {
        path: 'add-unidad',
        loadChildren: () => __webpack_require__.e(/*! import() | add-unidad-add-unidad-module */ "add-unidad-add-unidad-module").then(__webpack_require__.bind(null, /*! ./add-unidad/add-unidad.module */ "Ux96")).then(m => m.AddUnidadModule)
    },
    {
        path: 'edit-unidad',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-unidad-edit-unidad-module */ "edit-unidad-edit-unidad-module").then(__webpack_require__.bind(null, /*! ./edit-unidad/edit-unidad.module */ "o+td")).then(m => m.EditUnidadModule)
    },
    {
        path: 'delete-unidad',
        loadChildren: () => __webpack_require__.e(/*! import() | delete-unidad-delete-unidad-module */ "delete-unidad-delete-unidad-module").then(__webpack_require__.bind(null, /*! ./delete-unidad/delete-unidad.module */ "DOvP")).then(m => m.DeleteUnidadModule)
    },
];
class UnidadesRoutingModule {
}
UnidadesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnidadesRoutingModule });
UnidadesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnidadesRoutingModule_Factory(t) { return new (t || UnidadesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnidadesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=unidades-unidades-module-es2015.js.map
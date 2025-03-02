(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/sge/src/main.ts */"zUnb");


/***/ }),

/***/ "2/A8":
/*!********************************************************************!*\
  !*** ./src/app/reuniones/datos-reunion/datos-reunion.component.ts ***!
  \********************************************************************/
/*! exports provided: DatosReunionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosReunionComponent", function() { return DatosReunionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/messages */ "Xksa");
/* harmony import */ var _services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reuniones.service */ "5hAj");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













class DatosReunionComponent {
    constructor(router, datosEditarReunion, reunionService, snackBar, dialogRef) {
        this.router = router;
        this.datosEditarReunion = datosEditarReunion;
        this.reunionService = reunionService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.lastRoute = '';
    }
    ngOnInit() {
        this.rutaSeleccionada = this.router.url.substring(1);
        this.rutaSeleccionada = this.rutaSeleccionada.split('/')[0];
        this.router.navigate([`/${this.rutaSeleccionada}`, { outlets: { sidebar: 'datos-basicos-reunion' } }]);
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationStart"] && e.snapshot.outlet !== this.lastRoute) {
                this.lastRoute = this.rutaSeleccionada;
                this.outlet.deactivate();
            }
        });
        this.reunionService.setReunion(this.datosEditarReunion.reunion);
    }
    navega(ruta) {
        this.router.navigate([`/${this.rutaSeleccionada}`, { outlets: { sidebar: ruta } }]);
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.reunionService.editReunion(this.reunionService.reunion).toPromise();
            if (RESPONSE.ok) {
                this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
                this.dialogRef.close({ ok: RESPONSE.ok, reunion: this.datosEditarReunion.reunion });
                //this.reunionService.reuniones = (await this.reunionService.getAllReuniones().toPromise()).data;
            }
            else {
                this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
            }
        });
    }
    onNoClick() {
        this.dialogRef.close({ reunion: this.datosEditarReunion.reunion });
    }
}
DatosReunionComponent.ɵfac = function DatosReunionComponent_Factory(t) { return new (t || DatosReunionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__["ReunionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
DatosReunionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatosReunionComponent, selectors: [["app-datos-reunion"]], viewQuery: function DatosReunionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
    } }, decls: 17, vars: 0, consts: [[1, "example-container"], ["mode", "side", "opened", ""], ["mat-list-item", "", 3, "click"], ["mat-button", "", 1, "save", 3, "click"], ["mat-button", "", 1, "onNoClick", 3, "click"], ["name", "sidebar"]], template: function DatosReunionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosReunionComponent_Template_mat_list_item_click_3_listener() { return ctx.navega("datos-basicos-reunion"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Reuni\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosReunionComponent_Template_mat_list_item_click_5_listener() { return ctx.navega("asistentes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Asistentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosReunionComponent_Template_mat_list_item_click_7_listener() { return ctx.navega("objetivo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Objetivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosReunionComponent_Template_mat_list_item_click_9_listener() { return ctx.navega("resultado"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Resultado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosReunionComponent_Template_button_click_11_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosReunionComponent_Template_button_click_13_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "router-outlet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".example-container[_ngcontent-%COMP%] {\n  min-height: 650px !important;\n  max-height: 24em !important;\n  background-color: white;\n}\n\nmat-nav-list[_ngcontent-%COMP%] {\n  height: 37em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1bmlvbmVzL2RhdG9zLXJldW5pb24vZGF0b3MtcmV1bmlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDRCQUFBO0VBQ0EsMkJBQUE7RUFFQSx1QkFBQTtBQURKOztBQVFBO0VBQ0ksWUFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvcmV1bmlvbmVzL2RhdG9zLXJldW5pb24vZGF0b3MtcmV1bmlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgLy93aWR0aDogNjZlbTtcbiAgICBtaW4taGVpZ2h0OiA2NTBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDI0ZW0gIWltcG9ydGFudDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8vIC5zYXZlIHtcbi8vICAgICBtYXJnaW4tdG9wOiAxZW1cbi8vIH1cbm1hdC1uYXYtbGlzdCB7XG4gICAgaGVpZ2h0OiAzN2VtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatosReunionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-datos-reunion',
                templateUrl: './datos-reunion.component.html',
                styleUrls: ['./datos-reunion.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__["ReunionesService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, { outlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], { static: false }]
        }] }); })();


/***/ }),

/***/ "5hAj":
/*!***********************************************!*\
  !*** ./src/app/services/reuniones.service.ts ***!
  \***********************************************/
/*! exports provided: ReunionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReunionesService", function() { return ReunionesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'reunion';
class ReunionesService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    setReunion(reunion) {
        this.reunion = reunion;
    }
    setDatosBasicosReunion(formReunion) {
        this.reunion.id_reunion = formReunion.id_reunion;
        this.reunion.id_contacto = formReunion.id_contacto;
        this.reunion.reunion = formReunion.reunion;
        this.reunion.id_modo_reunion = formReunion.id_modo_reunion;
        this.reunion.id_motivo_reunion = formReunion.id_motivo_reunion;
        this.reunion.id_entidad_target = formReunion.id_entidad_target;
        this.reunion.id_zona = formReunion.id_zona;
        //this.reunion.objetivo = formReunion.objetivo;
        //this.reunion.resultado = formReunion.resultado;
        this.reunion.fecha = formReunion.fecha;
        this.reunion.hora_inicio = formReunion.hora_inicio;
        this.reunion.ubicacion = formReunion.ubicacion;
        this.reunion.localidad = formReunion.localidad;
        this.reunion.observaciones = formReunion.observaciones;
    }
    setObjetivoReunion(formReunion) {
        this.reunion.objetivo = formReunion.objetivo;
    }
    setResultadoReunion(formReunion) {
        this.reunion.resultado = formReunion.resultado;
    }
    getReunion(idReunion) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${idReunion}`, { headers: this.commonService.headers });
    }
    getAllReuniones() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addReunion(reunion) {
        const body = JSON.stringify(reunion);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editReunion(reunion) {
        const body = JSON.stringify(reunion);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteReunion(idReunion) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${idReunion}`, { headers: this.commonService.headers });
    }
    getInforme(idReunion) {
        const ROUTE_INFORME = 'informe';
        let params = ``;
        params = `?route=${ROUTE_INFORME}&id=${idReunion}`;
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php${params}`, { headers: this.commonService.headers });
    }
}
ReunionesService.ɵfac = function ReunionesService_Factory(t) { return new (t || ReunionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
ReunionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReunionesService, factory: ReunionesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReunionesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, URL_BASE, URL_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_BASE", function() { return URL_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_API", function() { return URL_API; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
const URL_BASE = 'http://79.72.63.217';
const URL_API = `${URL_BASE}/api/private`;


/***/ }),

/***/ "CpO+":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.component */ "EtQq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









class NavbarModule {
}
NavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavbarModule });
NavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavbarModule_Factory(t) { return new (t || NavbarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavbarModule, { declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ],
                exports: [
                    _navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "DrcZ":
/*!***********************************************!*\
  !*** ./src/app/services/entidades.service.ts ***!
  \***********************************************/
/*! exports provided: EntidadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntidadesService", function() { return EntidadesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'entidad';
class EntidadesService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    setEntidad(entidad) {
        this.entidad = entidad;
    }
    setDatosBasicosEntidad(formEntidad) {
        this.entidad.id_entidad = formEntidad.id_entidad;
        this.entidad.entidad = formEntidad.entidad;
        this.entidad.id_zona = formEntidad.id_zona;
        this.entidad.id_contacto = formEntidad.id_contacto;
        this.entidad.id_tipo_entidad = formEntidad.id_tipo_entidad;
        this.entidad.direccion = formEntidad.direccion;
        this.entidad.cp = formEntidad.cp;
        this.entidad.localidad = formEntidad.localidad;
        this.entidad.id_provincia = formEntidad.id_provincia;
        this.entidad.telefono = formEntidad.telefono;
        this.entidad.email = formEntidad.email;
        this.entidad.web = formEntidad.web;
        this.entidad.codigo = formEntidad.codigo;
        this.entidad.observaciones = formEntidad.observaciones;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllEntidades() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getContactos(idEntidades) {
        const ROUTE = 'obtener_contactos';
        const ID_ENTIDADES = JSON.stringify(idEntidades);
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${ID_ENTIDADES}&route=${ROUTE}`, { headers: this.commonService.headers });
    }
    addEntidad(entidad) {
        const body = JSON.stringify(entidad);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editEntidad(entidad) {
        const body = JSON.stringify(entidad);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteEntidad(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
EntidadesService.ɵfac = function EntidadesService_Factory(t) { return new (t || EntidadesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
EntidadesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EntidadesService, factory: EntidadesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntidadesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/menu.service */ "Gi7S");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");











function NavbarComponent_li_21_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_21_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const opcion_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.actualizarVistaNavbar(opcion_r4.opcion); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opcion_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", opcion_r4.opcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../", opcion_r4.accion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", opcion_r4.texto_tooltip)("matTooltipPosition", "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", opcion_r4.opcion, "");
} }
function NavbarComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const grupo_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.almacenarGrupo(grupo_r1.grupo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-menu", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NavbarComponent_li_21_button_5_Template, 2, 5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grupo_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](grupo_r1.grupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", grupo_r1.opciones);
} }
class NavbarComponent {
    constructor(menuService, authService, router) {
        this.menuService = menuService;
        this.authService = authService;
        this.router = router;
        this.getMenu();
    }
    ngOnInit() {
        this.username = localStorage.getItem('usuario');
        this.grupo = localStorage.getItem('ultimoGrupo');
        this.vista = localStorage.getItem('ultimaOpcion');
    }
    salir() {
        this.authService.doLogout()
            .subscribe(response => { });
        this.router.navigate(['home']);
    }
    getMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.menuService.getMenu().toPromise();
            this.menu = RESPONSE.data;
        });
    }
    almacenarGrupo(grupo) {
        localStorage.setItem('ultimoGrupo', grupo);
    }
    actualizarVistaNavbar(opcion) {
        this.grupo = localStorage.getItem('ultimoGrupo');
        localStorage.setItem('ultimaOpcion', opcion);
        this.vista = opcion;
    }
    goPerfil() {
        localStorage.setItem('ultimoGrupo', 'Inicio');
        localStorage.setItem('ultimaOpcion', 'Perfil');
        this.router.navigate(['perfil']);
        this.ngOnInit();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 22, vars: 4, consts: [[1, "herramientas"], [1, "logo"], ["src", "assets/icono-ja.png", "onerror", "this.style.display='none'"], [1, "navbar"], [1, "vistaactual"], [1, "usuario"], ["id", "goPerfil", 1, "todo", 3, "click"], [1, "icono"], [1, "subcontenido"], ["id", "salir", 1, "todo", 3, "click"], ["id", "navbarNavDropdown", 1, "menu_opciones"], [1, "navbar-nav", "ulpermenu"], [4, "ngFor", "ngForOf"], ["mat-button", "", "id", "almacenarGrupo", 1, "opcionesNav", 3, "matMenuTriggerFor", "click"], ["app", ""], ["mat-menu-item", "", "id", "actualizarVistaNavbar", "href", "#", 3, "id", "matTooltip", "matTooltipPosition", "routerLink", "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "id", "actualizarVistaNavbar", "href", "#", 3, "id", "matTooltip", "matTooltipPosition", "routerLink", "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_7_listener() { return ctx.goPerfil(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_13_listener() { return ctx.salir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NavbarComponent_li_21_Template, 6, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.grupo, " > ", ctx.vista, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".herramientas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  \n  font-size: medium;\n  display: flex;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  color: #556269;\n}\n\n.herramientas[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto !important;\n  height: 40px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.vistaactual[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #000000;\n  margin-left: 20px;\n  font-size: medium;\n  padding-top: 2px;\n  transform: translateY(50%);\n}\n\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%] {\n  color: inherit;\n  background: transparent;\n}\n\n.usuario[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  transform: translateY(50%);\n}\n\n.todo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.herramientas[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n  \n  padding-top: 4px;\n  padding-left: 15px;\n  background: #ffffff;\n  color: white;\n  width: 100%;\n  display: inline-flex;\n  min-height: 48px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.menu_opciones[_ngcontent-%COMP%] {\n  background: #736DFE;\n  \n  color: white;\n  height: 36px;\n  transform: translateY(-25%);\n  margin-top: 10px;\n  font-size: small;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\ndiv#navbarNavDropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:active {\n  background-color: white;\n}\n\na#navbarDropdownMenuLink[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out 0s;\n}\n\nul.navbar-nav.ulpermenu[_ngcontent-%COMP%] {\n  display: -webkit-box;\n}\n\nli.nav-item.dropdown.lipermenu.ng-star-inserted[_ngcontent-%COMP%] {\n  margin-left: 23px;\n}\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  background: #e8e4f1;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #e4d0ff !important;\n}\n\nli[_ngcontent-%COMP%] {\n  display: inline;\n  text-align: center;\n}\n\nli.nav-item.dropdown.lipermenu[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 100px;\n  padding: 0px 20px;\n  line-height: 45px;\n  border-right: 1px solid #a5a8a9;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.subcontenido[_ngcontent-%COMP%] {\n  padding: 1px 35px 0px 13px;\n}\n\n.opcionesNav[_ngcontent-%COMP%] {\n  border: 0px solid !important;\n}\n\n.opcionesNav.ayuda[_ngcontent-%COMP%] {\n  position: absolute !important;\n  right: 34px !important;\n}\n\nmat-dialog[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBRUEsY0FBQTtFQUtBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBTkY7O0FBVUE7OztFQUdFLGNBQUE7RUFDQSx1QkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFFQSxVQUFBO0VBQ0EsMEJBQUE7QUFSRjs7QUFZQTtFQUNFLGVBQUE7QUFURjs7QUFZQTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUdBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLHFCQUFBO0FBVkY7O0FBYUE7RUFDRSxtQkN6RWtCO0VEMEVsQixzRkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxnQkFBQTtBQVhGOztBQWNBO0VBQ0UsWUFBQTtBQVhGOztBQWNBO0VBQ0UsdUJBQUE7QUFYRjs7QUFjQTtFQUtFLG1DQUFBO0FBWEY7O0FBY0E7RUFDRSxvQkFBQTtBQVhGOztBQWNBO0VBQ0UsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLG1CQUFBO0FBWEY7O0FBY0E7RUFDRSw4QkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFYRjs7QUFjQTtFQUNFLHNCQUFBO0FBWEY7O0FBY0E7RUFDRSwwQkFBQTtBQVhGOztBQWNBO0VBQ0UsNEJBQUE7QUFYRjs7QUFjQTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUFYRjs7QUFjQTtFQUNFLFVBQUE7QUFYRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG4uaGVycmFtaWVudGFzIGRpdiB7XG4gIC8qIGNvbG9yOiByZ2IoMTI3LCAxODAsIDEzMCk7ICovXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNTU2MjY5O1xufVxuXG4uaGVycmFtaWVudGFzIGltZyB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm5hdmJhcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZpc3RhYWN0dWFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlOztcbiAgLy8gd2lkdGg6IDUwMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLy8gdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICAvLyBwYWRkaW5nOiAyMHB4O1xuICAvLyBtYXJnaW46IGF1dG87XG4gIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhNWE4YTk7XG59XG5cbi5tYXQtYnV0dG9uLFxuLm1hdC1pY29uLWJ1dHRvbixcbi5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi51c3VhcmlvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtYXJnaW46IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAvLyBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4udG9kbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlcnJhbWllbnRhcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgLyogaGVpZ2h0OiA1MCU7ICovXG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm1lbnVfb3BjaW9uZXMge1xuICBiYWNrZ3JvdW5kOiAkbmFyYW5qYS1tb25zYWx2ZXo7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI1NSwwLDAsMCksIHJnYmEoMCwgMTMwLCAyMjksIDEpKTsqL1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMzZweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xuICAvLyBwYWRkaW5nLXRvcDogLTFweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5kaXYjbmF2YmFyTmF2RHJvcGRvd24gYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmEjbmF2YmFyRHJvcGRvd25NZW51TGluayB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG51bC5uYXZiYXItbmF2LnVscGVybWVudSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xufVxuXG5saS5uYXYtaXRlbS5kcm9wZG93bi5saXBlcm1lbnUubmctc3Rhci1pbnNlcnRlZCB7XG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xufVxuXG4uZHJvcGRvd24tbWVudS5zaG93IHtcbiAgYmFja2dyb3VuZDogI2U4ZTRmMTtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTRkMGZmICFpbXBvcnRhbnQ7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpLm5hdi1pdGVtLmRyb3Bkb3duLmxpcGVybWVudSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmxvZ28ge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhNWE4YTk7XG59XG5cbi5sb2dvIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zdWJjb250ZW5pZG8ge1xuICBwYWRkaW5nOiAxcHggMzVweCAwcHggMTNweDtcbn1cblxuLm9wY2lvbmVzTmF2IHtcbiAgYm9yZGVyOiAwcHggc29saWQgIWltcG9ydGFudDtcbn1cblxuLm9wY2lvbmVzTmF2LmF5dWRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1kaWFsb2cge1xuICB3aWR0aDogNTAlO1xufVxuIiwiXG4kbmFyYW5qYS1tb25zYWx2ZXo6ICM3MzZERkU7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "Gi7S":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





class MenuService {
    // headers: any;
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        // console.log('tengo el token ' + this.cookieService.get('token'));
        // this.headers = new HttpHeaders({
        //   'Content-Type':  'application/json',
        //   'Authorization': `Bearer ${this.cookieService.get('token')}`
        // });
    }
    getMenu() {
        // const headers = this.commonService.headers;
        // const headers = new HttpHeaders({
        //   'Content-Type':  'application/json',
        //   'Authorization': `Bearer ${this.cookieService.get('token')}`
        // });
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/navegacion.php`, { headers: this.commonService.headers });
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "JSOo":
/*!******************************************!*\
  !*** ./src/app/shared/common.service.ts ***!
  \******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");




class CommonService {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        });
        // console.log(this.cookieService.get('token'));
    }
    static divideEvenly(numerator, minPartSize) {
        if (numerator / minPartSize < 2) {
            return [numerator];
        }
        return [minPartSize].concat(this.divideEvenly(numerator - minPartSize, minPartSize));
    }
    static divideCurrencyEvenly(numerator, divisor) {
        const minPartSize = +(numerator / divisor).toFixed(2);
        return this.divideEvenly(numerator * 100, minPartSize * 100).map(v => {
            return (v / 100).toFixed(2);
        });
    }
    // devuelve la fecha en formato YYYY-MM-DD (string) teniendo en cuenta el UTC para las zonas horarias
    static fechaFormateada(inputDeFecha) {
        return new Date(new Date(inputDeFecha).getTime() - (new Date(inputDeFecha).getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
    }
    getHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        });
    }
    base64toPDF(data, id) {
        const bufferArray = this.base64ToArrayBuffer(data);
        const blobStore = new Blob([bufferArray], { type: 'application/pdf' });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blobStore);
            return;
        }
        data = window.URL.createObjectURL(blobStore);
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.href = data;
        link.download = `${id}.pdf`;
        link.click();
        window.URL.revokeObjectURL(data);
        link.remove();
    }
    base64ToArrayBuffer(data) {
        const bString = window.atob(data);
        const bLength = bString.length;
        const bytes = new Uint8Array(bLength);
        for (let i = 0; i < bLength; i++) {
            const ascii = bString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    }
    fechaFormateada(inputDeFecha) {
        if (inputDeFecha) {
            return new Date(new Date(inputDeFecha).getTime() - (new Date(inputDeFecha).getTimezoneOffset() * 60000))
                .toISOString()
                .split('T')[0];
        }
        else {
            return null;
        }
    }
}
CommonService.fill = (n, x) => Array(n).fill(x);
CommonService.concat = (xs, ys) => xs.concat(ys);
CommonService.quotrem = (n, d) => [Math.floor(n / d),
    Math.floor(n % d)
];
CommonService.distribute = (p, d, n) => {
    const e = Math.pow(10, p);
    const [q, r] = CommonService.quotrem(n * e, d);
    return CommonService.concat(CommonService.fill(r, (q + 1) / e), CommonService.fill(d - r, q / e));
};
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");









function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, 
    // private activeRoute: ActivatedRoute,
    router) {
        this.authService = authService;
        this.router = router;
        this.title = 'AppRADFPD';
        this.isDisplayNavbar = false;
        this.canDisplayNavbar();
    }
    canDisplayNavbar() {
        // console.log(new NavigationStart(0, 'http://localhost:4200/') instanceof NavigationStart);
        this.router.events.subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Navigation started.
                // console.log('cambio de url');
                this.rutaRelativa = event.url;
                const response = yield this.authService.isAuthenticated(this.rutaRelativa);
                if (response) {
                    this.isDisplayNavbar = true;
                }
            }
        }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rutaRelativa !== "/home" && ctx.rutaRelativa !== "/" && ctx.isDisplayNavbar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.auth.isAuthenticated(state.url);
            if (!response) {
                this.router.navigate(['/home']);
            }
            return response;
        });
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Xksa":
/*!************************************!*\
  !*** ./src/app/shared/messages.ts ***!
  \************************************/
/*! exports provided: ERROR, CLOSE, INVALID_FORM, ENTIDAD_MOTIVO_REUNION, ENTIDAD_MODO_REUNION, ENTIDAD_ZONA, ENTIDAD_TIPO_ENTIDAD, ENTIDAD_CONTACTO, ENTIDAD_ENTIDAD, ENTIDAD_REUNION, ENTIDAD_ASISTENTE, ENTIDAD_FAMILIA, ENTIDAD_UNIDAD, ENTIDAD_CICLO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE", function() { return CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_FORM", function() { return INVALID_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_MOTIVO_REUNION", function() { return ENTIDAD_MOTIVO_REUNION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_MODO_REUNION", function() { return ENTIDAD_MODO_REUNION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_ZONA", function() { return ENTIDAD_ZONA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_TIPO_ENTIDAD", function() { return ENTIDAD_TIPO_ENTIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_CONTACTO", function() { return ENTIDAD_CONTACTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_ENTIDAD", function() { return ENTIDAD_ENTIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_REUNION", function() { return ENTIDAD_REUNION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_ASISTENTE", function() { return ENTIDAD_ASISTENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_FAMILIA", function() { return ENTIDAD_FAMILIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_UNIDAD", function() { return ENTIDAD_UNIDAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTIDAD_CICLO", function() { return ENTIDAD_CICLO; });
const ERROR = 'Ocurrió un fallo';
const CLOSE = 'Cerrar';
const INVALID_FORM = 'El formulario no es válido';
// Entidades
const ENTIDAD_MOTIVO_REUNION = "Motivo de Reunión";
const ENTIDAD_MODO_REUNION = "Modo de Reunión";
const ENTIDAD_ZONA = "Zona";
const ENTIDAD_TIPO_ENTIDAD = "Tipo de Entidad";
const ENTIDAD_CONTACTO = "Contacto";
const ENTIDAD_ENTIDAD = "Entidad";
const ENTIDAD_REUNION = "Reunión/Evento";
const ENTIDAD_ASISTENTE = "Asistente";
const ENTIDAD_FAMILIA = "Familia";
const ENTIDAD_UNIDAD = "Ciclo Formativo";
const ENTIDAD_CICLO = "Ciclo Formativo";


/***/ }),

/***/ "YqGX":
/*!********************************************************!*\
  !*** ./src/app/shared/footer/footer-routing.module.ts ***!
  \********************************************************/
/*! exports provided: FooterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRoutingModule", function() { return FooterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "jQpT");





const routes = [{ path: '', component: _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"] }];
class FooterRoutingModule {
}
FooterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterRoutingModule });
FooterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterRoutingModule_Factory(t) { return new (t || FooterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "CpO+");
/* harmony import */ var _shared_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/interceptor.service */ "mcEE");
/* harmony import */ var _app_shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/shared/footer/footer.module */ "cNqA");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _entidades_datos_entidad_datos_entidad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entidades/datos-entidad/datos-entidad.component */ "gkmA");
/* harmony import */ var _reuniones_datos_reunion_datos_reunion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reuniones/datos-reunion/datos-reunion.component */ "2/A8");















// import { NgxLoadingXModule, POSITION, SPINNER, NgxLoadingXConfig } from 'ngx-loading-x';
// const ngxLoadingXConfig: NgxLoadingXConfig = {
//   show: false,
//   bgBlur: 2,
//   bgColor: 'rgba(40, 40, 40, 0.5)',
//   bgOpacity: 5,
//   bgLogoUrl: '',
//   bgLogoUrlPosition: POSITION.topLeft,
//   bgLogoUrlSize: 100,
//   spinnerType: SPINNER.wanderingCubes,
//   spinnerSize: 120,
//   spinnerColor: '#dd0031',
//   spinnerPosition: POSITION.centerCenter,
// }
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _shared_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"], multi: true },
        _entidades_datos_entidad_datos_entidad_component__WEBPACK_IMPORTED_MODULE_12__["DatosEntidadComponent"],
        _reuniones_datos_reunion_datos_reunion_component__WEBPACK_IMPORTED_MODULE_13__["DatosReunionComponent"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
            _app_shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]
            // NgxLoadingXModule.forRoot(ngxLoadingXConfig)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
        _app_shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]
        // NgxLoadingXModule.forRoot(ngxLoadingXConfig)
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
                    _app_shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"]
                    // NgxLoadingXModule.forRoot(ngxLoadingXConfig)
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _shared_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"], multi: true },
                    _entidades_datos_entidad_datos_entidad_component__WEBPACK_IMPORTED_MODULE_12__["DatosEntidadComponent"],
                    _reuniones_datos_reunion_datos_reunion_component__WEBPACK_IMPORTED_MODULE_13__["DatosReunionComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-routing.module */ "YqGX");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "jQpT");





class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _footer_routing_module__WEBPACK_IMPORTED_MODULE_2__["FooterRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _footer_routing_module__WEBPACK_IMPORTED_MODULE_2__["FooterRoutingModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _footer_routing_module__WEBPACK_IMPORTED_MODULE_2__["FooterRoutingModule"]
                ],
                exports: [
                    _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "gkmA":
/*!********************************************************************!*\
  !*** ./src/app/entidades/datos-entidad/datos-entidad.component.ts ***!
  \********************************************************************/
/*! exports provided: DatosEntidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosEntidadComponent", function() { return DatosEntidadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/messages */ "Xksa");
/* harmony import */ var _services_entidades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/entidades.service */ "DrcZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













class DatosEntidadComponent {
    constructor(router, datosEditarEntidad, entidadService, snackBar, dialogRef) {
        this.router = router;
        this.datosEditarEntidad = datosEditarEntidad;
        this.entidadService = entidadService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.lastRoute = '';
    }
    ngOnInit() {
        this.rutaSeleccionada = this.router.url.substring(1);
        this.rutaSeleccionada = this.rutaSeleccionada.split('/')[0];
        this.router.navigate([`/${this.rutaSeleccionada}`, { outlets: { sidebar: 'datos-basicos-entidad' } }]);
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationStart"] && e.snapshot.outlet !== this.lastRoute) {
                this.lastRoute = this.rutaSeleccionada;
                this.outlet.deactivate();
            }
        });
        this.entidadService.setEntidad(this.datosEditarEntidad.entidad);
    }
    navega(ruta) {
        this.router.navigate([`/${this.rutaSeleccionada}`, { outlets: { sidebar: ruta } }]);
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const RESPONSE = yield this.entidadService.editEntidad(this.entidadService.entidad).toPromise();
            if (RESPONSE.ok) {
                this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
                this.dialogRef.close({ ok: RESPONSE.ok, entidad: this.datosEditarEntidad.entidad });
                //this.entidadService.entidades = (await this.entidadService.getAllEntidades().toPromise()).data;
            }
            else {
                this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], { duration: 5000 });
            }
        });
    }
    onNoClick() {
        this.dialogRef.close({ entidad: this.datosEditarEntidad.entidad });
    }
}
DatosEntidadComponent.ɵfac = function DatosEntidadComponent_Factory(t) { return new (t || DatosEntidadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_entidades_service__WEBPACK_IMPORTED_MODULE_5__["EntidadesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
DatosEntidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatosEntidadComponent, selectors: [["app-datos-entidad"]], viewQuery: function DatosEntidadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
    } }, decls: 15, vars: 0, consts: [[1, "datos-entidad-container"], ["mode", "side", "opened", ""], ["mat-list-item", "", 3, "click"], ["mat-button", "", 1, "save", 3, "click"], ["mat-button", "", 1, "onNoClick", 3, "click"], ["name", "sidebar"]], template: function DatosEntidadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosEntidadComponent_Template_mat_list_item_click_3_listener() { return ctx.navega("datos-basicos-entidad"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Entidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosEntidadComponent_Template_mat_list_item_click_5_listener() { return ctx.navega("contactos-entidad"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Contactos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosEntidadComponent_Template_mat_list_item_click_7_listener() { return ctx.navega("unidades"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Ciclos Formativos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosEntidadComponent_Template_button_click_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatosEntidadComponent_Template_button_click_11_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "router-outlet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".datos-entidad-container[_ngcontent-%COMP%] {\n  min-height: 40em !important;\n  max-height: 40em !important;\n  background-color: white;\n}\n\nmat-nav-list[_ngcontent-%COMP%] {\n  height: 37em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aWRhZGVzL2RhdG9zLWVudGlkYWQvZGF0b3MtZW50aWRhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUFKOztBQU9BO0VBQ0ksWUFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvZW50aWRhZGVzL2RhdG9zLWVudGlkYWQvZGF0b3MtZW50aWRhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRvcy1lbnRpZGFkLWNvbnRhaW5lciB7XG4gICAgLy93aWR0aDogNzNlbTtcbiAgICBtaW4taGVpZ2h0OiA0MGVtICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNDBlbSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLy8gLnNhdmUge1xuLy8gICAgIG1hcmdpbi10b3A6IDFlbVxuLy8gfVxubWF0LW5hdi1saXN0IHtcbiAgICBoZWlnaHQ6IDM3ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatosEntidadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-datos-entidad',
                templateUrl: './datos-entidad.component.html',
                styleUrls: ['./datos-entidad.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_entidades_service__WEBPACK_IMPORTED_MODULE_5__["EntidadesService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, { outlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], { static: false }]
        }] }); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.yyyy = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 1, consts: [[1, "page-footer", "font-small", "blue"], [1, "footer-copyright", "text-center", "py-3", "color-corporativo"], ["href", "https://radfpd.es/", "target", "_blank", 1, "color-corporativo-azul"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " RADFPD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.yyyy, " Copyright: ");
    } }, styles: [".footer-copyright[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 1.5em;\n}\n\n.color-corporativo[_ngcontent-%COMP%] {\n  color: #f05923;\n}\n\n.color-corporativo-azul[_ngcontent-%COMP%] {\n  color: #0082e5;\n}\n\nfooter[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 20px !important;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0Usd0lBQUE7RUFDQSwyQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1jb3B5cmlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG4uY29sb3ItY29ycG9yYXRpdm8ge1xuICAgIGNvbG9yOiAjZjA1OTIzO1xufVxuXG4uY29sb3ItY29ycG9yYXRpdm8tYXp1bCB7XG4gICAgY29sb3I6IzAwODJlNTtcbn1cblxuZm9vdGVye1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");







class AuthService {
    constructor(http, cookieService, commonService) {
        this.http = http;
        this.cookieService = cookieService;
        this.commonService = commonService;
    }
    doLogin(data) {
        const body = JSON.stringify(data);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_API"]}/login.php`, body);
    }
    isAuthenticated(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let rutaSeleccionada;
            const promise = new Promise((resolve, reject) => {
                rutaSeleccionada = url.substring(1);
                rutaSeleccionada = rutaSeleccionada.split('/')[0];
                this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_API"]}/check_usuarios.php?ruta=${rutaSeleccionada}`, { headers: this.commonService.getHeaders() })
                    .subscribe((response) => {
                    resolve(response.ok);
                });
            });
            return promise;
        });
    }
    doLogout() {
        const body = new FormData();
        const usuario = localStorage.getItem('usuario');
        body.append('user', usuario);
        this.cookieService.deleteAll();
        localStorage.clear();
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_API"]}/logout.php`, body);
    }
    resetPassword(formularioCorreo) {
        const body = JSON.stringify(formularioCorreo);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_API"]}/olvidar_pwd.php`, body, { headers: this.commonService.headers });
    }
    checkPassToken(tokenPasswd) {
        const body = JSON.stringify({ token: tokenPasswd });
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_API"]}/check_token_passwd.php`, body);
    }
    generateNewPass(data) {
        const body = JSON.stringify(data);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["URL_API"]}/reset_pass.php`, body);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "mcEE":
/*!***********************************************!*\
  !*** ./src/app/shared/interceptor.service.ts ***!
  \***********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");




// import { JwtHelperService } from '@auth0/angular-jwt';
class AuthInterceptor {
    constructor(auth, cookieService) {
        this.auth = auth;
        this.cookieService = cookieService;
    }
    intercept(request, next) {
        // if (this.auth.isAuthenticated()) {
        //   const headers = request.headers.set('Pollito de Troya', `Bearer ${this.cookieService.get('token')}`);
        //   return next.handle(request.clone({ headers }));
        // }
        // if (this.jwtService.isTokenExpired()) {
        //   // TODO: Refrescar token si está expirado.
        // }
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");





const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule)
    },
    {
        path: 'grupos',
        loadChildren: () => Promise.all(/*! import() | grupos-grupos-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("grupos-grupos-module")]).then(__webpack_require__.bind(null, /*! ./grupos/grupos.module */ "ZjLv")).then(m => m.GruposModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'opciones',
        loadChildren: () => Promise.all(/*! import() | opciones-opciones-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("opciones-opciones-module")]).then(__webpack_require__.bind(null, /*! ./opciones/opciones.module */ "12xl")).then(m => m.OpcionesModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'roles',
        loadChildren: () => Promise.all(/*! import() | roles-roles-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("roles-roles-module")]).then(__webpack_require__.bind(null, /*! ./roles/roles.module */ "ESCD")).then(m => m.RolesModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'roles-menu',
        loadChildren: () => Promise.all(/*! import() | roles-menu-roles-menu-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("roles-menu-roles-menu-module")]).then(__webpack_require__.bind(null, /*! ./roles-menu/roles-menu.module */ "cUcC")).then(m => m.RolesMenuModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'usuarios',
        loadChildren: () => Promise.all(/*! import() | usuarios-usuarios-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("usuarios-usuarios-module")]).then(__webpack_require__.bind(null, /*! ./usuarios/usuarios.module */ "0G8V")).then(m => m.UsuariosModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'perfil',
        loadChildren: () => Promise.all(/*! import() | perfil-perfil-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("perfil-perfil-module")]).then(__webpack_require__.bind(null, /*! ./perfil/perfil.module */ "ZEuG")).then(m => m.PerfilModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'logs',
        loadChildren: () => Promise.all(/*! import() | logs-logs-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("logs-logs-module")]).then(__webpack_require__.bind(null, /*! ./logs/logs.module */ "pQIV")).then(m => m.LogsModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'inicio',
        loadChildren: () => Promise.all(/*! import() | inicio-inicio-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("inicio-inicio-module")]).then(__webpack_require__.bind(null, /*! ./inicio/inicio.module */ "MpVM")).then(m => m.InicioModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'footer',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./shared/footer/footer.module */ "cNqA")).then(m => m.FooterModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { path: 'motivos-reunion', loadChildren: () => Promise.all(/*! import() | motivos-reunion-motivos-reunion-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("motivos-reunion-motivos-reunion-module")]).then(__webpack_require__.bind(null, /*! ./motivos-reunion/motivos-reunion.module */ "sV9e")).then(m => m.MotivosReunionModule) },
    { path: 'modos-reunion', loadChildren: () => Promise.all(/*! import() | modos-reunion-modos-reunion-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("modos-reunion-modos-reunion-module")]).then(__webpack_require__.bind(null, /*! ./modos-reunion/modos-reunion.module */ "LqJu")).then(m => m.ModosReunionModule) },
    { path: 'zonas', loadChildren: () => Promise.all(/*! import() | zonas-zonas-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("zonas-zonas-module")]).then(__webpack_require__.bind(null, /*! ./zonas/zonas.module */ "iIxd")).then(m => m.ZonasModule) },
    { path: 'tipos-entidad', loadChildren: () => Promise.all(/*! import() | tipos-entidad-tipos-entidad-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("tipos-entidad-tipos-entidad-module")]).then(__webpack_require__.bind(null, /*! ./tipos-entidad/tipos-entidad.module */ "oBpF")).then(m => m.TiposEntidadModule) },
    { path: 'contactos', loadChildren: () => Promise.all(/*! import() | contactos-contactos-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("contactos-contactos-module")]).then(__webpack_require__.bind(null, /*! ./contactos/contactos.module */ "uAx7")).then(m => m.ContactosModule) },
    { path: 'entidades', loadChildren: () => Promise.all(/*! import() | entidades-entidades-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("entidades-entidades-module")]).then(__webpack_require__.bind(null, /*! ./entidades/entidades.module */ "5bAz")).then(m => m.EntidadesModule) },
    { path: 'reuniones', loadChildren: () => Promise.all(/*! import() | reuniones-reuniones-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("reuniones-reuniones-module")]).then(__webpack_require__.bind(null, /*! ./reuniones/reuniones.module */ "53tf")).then(m => m.ReunionesModule) },
    { path: 'familias', loadChildren: () => Promise.all(/*! import() | familias-familias-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("familias-familias-module")]).then(__webpack_require__.bind(null, /*! ./familias/familias.module */ "ndpJ")).then(m => m.FamiliasModule) },
    { path: 'niveles', loadChildren: () => Promise.all(/*! import() | niveles-niveles-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("niveles-niveles-module")]).then(__webpack_require__.bind(null, /*! ./niveles/niveles.module */ "AWlZ")).then(m => m.NivelesModule) },
    { path: 'unidades-dual', loadChildren: () => Promise.all(/*! import() | unidades-dual-unidades-dual-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("unidades-dual-unidades-dual-module")]).then(__webpack_require__.bind(null, /*! ./unidades-dual/unidades-dual.module */ "dRTf")).then(m => m.UnidadesDualModule) },
    { path: 'ciclos', loadChildren: () => Promise.all(/*! import() | ciclos-ciclos-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("ciclos-ciclos-module")]).then(__webpack_require__.bind(null, /*! ./ciclos/ciclos.module */ "MpFz")).then(m => m.CiclosModule) },
    //  { path: 'unidades', loadChildren: () => import('./entidades/datos-entidad/unidades/unidades.module').then(m => m.UnidadesModule) },
    { path: 'motivos-nodual', loadChildren: () => Promise.all(/*! import() | motivos-nodual-motivos-nodual-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("motivos-nodual-motivos-nodual-module")]).then(__webpack_require__.bind(null, /*! ./motivos-nodual/motivos-nodual.module */ "diRc")).then(m => m.MotivosNodualModule) },
    { path: 'unidades', loadChildren: () => Promise.all(/*! import() | unidades-unidades-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("common"), __webpack_require__.e("unidades-unidades-module")]).then(__webpack_require__.bind(null, /*! ./unidades/unidades.module */ "Bm/3")).then(m => m.UnidadesModule) },
    //  { path: 'ciclos-entidad', loadChildren: () => import('./entidades/datos-entidad/ciclos-entidad/ciclos-entidad.module').then(m => m.CiclosEntidadModule) },
    //  { path: 'contactos-entidad', loadChildren: () => import('./entidades/datos-entidad/contactos-entidad/contactos-entidad.module').then(m => m.ContactosEntidadModule) },
    //  { path: 'datos-basicos-entidad', loadChildren: () => import('./entidades/datos-entidad/datos-basicos-entidad/datos-basicos-entidad.module').then(m => m.DatosBasicosEntidadModule) },
    //  { path: 'datos-entidad', loadChildren: () => import('./entidades/datos-entidad/datos-entidad.module').then(m => m.DatosEntidadModule) },
    //  { path: 'add-asistente', loadChildren: () => import('./reuniones/datos-reunion/asistentes/add-asistente/add-asistente.module').then(m => m.AddAsistenteModule) },
    {
        path: '**',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~ciclos-ciclos-module~contactos-contactos-module~entidades-entidades-module~familias-familias~87c33caf"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
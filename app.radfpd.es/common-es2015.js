(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+hd0":
/*!****************************************************!*\
  !*** ./src/app/services/motivos-nodual.service.ts ***!
  \****************************************************/
/*! exports provided: MotivosNodualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivosNodualService", function() { return MotivosNodualService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'motivo_nodual';
class MotivosNodualService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get(idEntidad) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?entidad=${idEntidad}`, { headers: this.commonService.headers });
    }
    getAllMotivosNodual() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addMotivoNodual(motivoNodual) {
        const body = JSON.stringify(motivoNodual);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editMotivoNodual(motivoNodual) {
        const body = JSON.stringify(motivoNodual);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteMotivoNodual(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
MotivosNodualService.ɵfac = function MotivosNodualService_Factory(t) { return new (t || MotivosNodualService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
MotivosNodualService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MotivosNodualService, factory: MotivosNodualService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MotivosNodualService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "0ceX":
/*!*******************************************!*\
  !*** ./src/app/services/roles.service.ts ***!
  \*******************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'rol';
class RolesService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getAllRoles() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addRol(rol) {
        const body = JSON.stringify(rol);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editRol(rol) {
        const body = JSON.stringify(rol);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteRol(idRol) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${idRol}`, { headers: this.commonService.headers });
    }
    removeRol(idRol) {
        this.roles = this.roles.filter(rol => {
            return Number(rol.id_rol) !== Number(idRol);
        });
    }
    updateRol(rol) {
        let index = null;
        this.roles.filter((rolFilter, indexFilter) => {
            if (rol.id_rol === rolFilter.id_rol) {
                index = indexFilter;
            }
        });
        if (index) {
            this.roles[index] = rol;
        }
    }
}
RolesService.ɵfac = function RolesService_Factory(t) { return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RolesService, factory: RolesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "92VL":
/*!***************************************************!*\
  !*** ./src/app/services/unidades-dual.service.ts ***!
  \***************************************************/
/*! exports provided: UnidadesDualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadesDualService", function() { return UnidadesDualService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'unidad_dual';
class UnidadesDualService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllUnidadesDual() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addUnidadDual(unidadDual) {
        const body = JSON.stringify(unidadDual);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editUnidadDual(unidadDual) {
        const body = JSON.stringify(unidadDual);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteUnidadDual(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
UnidadesDualService.ɵfac = function UnidadesDualService_Factory(t) { return new (t || UnidadesDualService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
UnidadesDualService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnidadesDualService, factory: UnidadesDualService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesDualService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "KafX":
/*!********************************************!*\
  !*** ./src/app/services/ciclos.service.ts ***!
  \********************************************/
/*! exports provided: CiclosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiclosService", function() { return CiclosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'ciclo';
class CiclosService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllCiclos() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addCiclo(ciclo) {
        const body = JSON.stringify(ciclo);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editCiclo(ciclo) {
        const body = JSON.stringify(ciclo);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteCiclo(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
CiclosService.ɵfac = function CiclosService_Factory(t) { return new (t || CiclosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
CiclosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CiclosService, factory: CiclosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CiclosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "QzrE":
/*!*******************************************!*\
  !*** ./src/app/services/zonas.service.ts ***!
  \*******************************************/
/*! exports provided: ZonasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonasService", function() { return ZonasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'zona';
class ZonasService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllZonas() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addZona(zona) {
        const body = JSON.stringify(zona);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editZona(zona) {
        const body = JSON.stringify(zona);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteZona(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
ZonasService.ɵfac = function ZonasService_Factory(t) { return new (t || ZonasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
ZonasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ZonasService, factory: ZonasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZonasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "Y+et":
/*!*****************************************************!*\
  !*** ./src/app/services/motivos-reunion.service.ts ***!
  \*****************************************************/
/*! exports provided: MotivosReunionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivosReunionService", function() { return MotivosReunionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'motivo_reunion';
class MotivosReunionService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllMotivosReunion() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addMotivoReunion(motivoReunion) {
        const body = JSON.stringify(motivoReunion);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editMotivoReunion(motivoReunion) {
        const body = JSON.stringify(motivoReunion);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteMotivoReunion(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
MotivosReunionService.ɵfac = function MotivosReunionService_Factory(t) { return new (t || MotivosReunionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
MotivosReunionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MotivosReunionService, factory: MotivosReunionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MotivosReunionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "am6X":
/*!***********************************************!*\
  !*** ./src/app/services/contactos.service.ts ***!
  \***********************************************/
/*! exports provided: ContactosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactosService", function() { return ContactosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'contacto';
class ContactosService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    /*
      get() {
        return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, { headers: this.commonService.headers });
      }
    */
    getContactosEntidad(idEntidad) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?entidad=${idEntidad}`, { headers: this.commonService.headers });
    }
    getAllContactos() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    // Se trae todos los contactos que no están ya en la reunión como asistentes
    getContactosDisponibles(idReunion) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?reunion=${idReunion}`, { headers: this.commonService.headers });
    }
    // Marcada la Entidad de la DG a fuego como entidad=1
    getAllDinamizadores() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?entidad=1`, { headers: this.commonService.headers });
    }
    addContacto(contacto) {
        const body = JSON.stringify(contacto);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editContacto(contacto) {
        const body = JSON.stringify(contacto);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteContacto(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
ContactosService.ɵfac = function ContactosService_Factory(t) { return new (t || ContactosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
ContactosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactosService, factory: ContactosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "dnsR":
/*!*********************************************!*\
  !*** ./src/app/services/niveles.service.ts ***!
  \*********************************************/
/*! exports provided: NivelesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NivelesService", function() { return NivelesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'nivel';
class NivelesService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllNiveles() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addMotivoReunion(nivel) {
        const body = JSON.stringify(nivel);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editMotivoReunion(nivel) {
        const body = JSON.stringify(nivel);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteMotivoReunion(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
NivelesService.ɵfac = function NivelesService_Factory(t) { return new (t || NivelesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
NivelesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NivelesService, factory: NivelesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NivelesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "dtOv":
/*!********************************************!*\
  !*** ./src/app/services/grupos.service.ts ***!
  \********************************************/
/*! exports provided: GruposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposService", function() { return GruposService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'grupo';
class GruposService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getAllGrupos() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addGrupo(grupo) {
        const body = JSON.stringify(grupo);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editGrupo(grupo) {
        const body = JSON.stringify(grupo);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteGrupo(idGrupoMenu) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${idGrupoMenu}`, { headers: this.commonService.headers });
    }
    removeGrupo(idGrupo) {
        this.grupos = this.grupos.filter(grupo => {
            return Number(grupo.id_grupo_menu) !== Number(idGrupo);
        });
    }
    updateGrupo(grupo) {
        let index = null;
        this.grupos.filter((grupoFilter, indexFilter) => {
            if (grupo.id_grupo_menu === grupoFilter.id_grupo_menu) {
                index = indexFilter;
            }
        });
        if (index) {
            this.grupos[index] = grupo;
        }
    }
}
GruposService.ɵfac = function GruposService_Factory(t) { return new (t || GruposService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
GruposService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GruposService, factory: GruposService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruposService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "du+7":
/*!***************************************************!*\
  !*** ./src/app/services/modos-reunion.service.ts ***!
  \***************************************************/
/*! exports provided: ModosReunionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModosReunionService", function() { return ModosReunionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'modo_reunion';
class ModosReunionService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllModosReunion() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addModoReunion(modoReunion) {
        const body = JSON.stringify(modoReunion);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editModoReunion(modoReunion) {
        const body = JSON.stringify(modoReunion);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteModoReunion(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
ModosReunionService.ɵfac = function ModosReunionService_Factory(t) { return new (t || ModosReunionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
ModosReunionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModosReunionService, factory: ModosReunionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModosReunionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "fUJ1":
/*!***************************************************!*\
  !*** ./src/app/services/tipos-entidad.service.ts ***!
  \***************************************************/
/*! exports provided: TiposEntidadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposEntidadService", function() { return TiposEntidadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'tipo_entidad';
class TiposEntidadService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllTiposEntidad() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addTipoEntidad(tipoEntidad) {
        const body = JSON.stringify(tipoEntidad);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editTipoEntidad(tipoEntidad) {
        const body = JSON.stringify(tipoEntidad);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteTipoEntidad(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
TiposEntidadService.ɵfac = function TiposEntidadService_Factory(t) { return new (t || TiposEntidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
TiposEntidadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TiposEntidadService, factory: TiposEntidadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TiposEntidadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "kxEN":
/*!**********************************************!*\
  !*** ./src/app/services/opciones.service.ts ***!
  \**********************************************/
/*! exports provided: OpcionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcionesService", function() { return OpcionesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'opcion';
class OpcionesService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getAllOpciones() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addOpcion(opcion) {
        const body = JSON.stringify(opcion);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers, });
    }
    editOpcion(opcion) {
        const body = JSON.stringify(opcion);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers, });
    }
    deleteOpcion(idOpcionMenu) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${idOpcionMenu}`, { headers: this.commonService.headers, });
    }
    removeOpcion(idOpcion) {
        this.opciones = this.opciones.filter(opcion => {
            return Number(opcion.id_opcion_menu) !== Number(idOpcion);
        });
    }
    updateOpcion(opcion) {
        let index = null;
        this.opciones.filter((opcionFilter, indexFilter) => {
            if (opcion.id_opcion_menu === opcionFilter.id_opcion_menu) {
                index = indexFilter;
            }
        });
        if (index) {
            this.opciones[index] = opcion;
        }
    }
}
OpcionesService.ɵfac = function OpcionesService_Factory(t) { return new (t || OpcionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
OpcionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OpcionesService, factory: OpcionesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcionesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "on2l":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'usuario';
class UsuarioService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getAllUsuarios() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addUsuario(usuario) {
        const body = JSON.stringify(usuario);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editUsuario(usuario, route) {
        const body = JSON.stringify(usuario);
        if (route) {
            route = `?route=${route}`;
        }
        else {
            route = '';
        }
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php${route}`, body, { headers: this.commonService.headers });
    }
    deleteUsuario(usuario) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${usuario.id_usuario}`, { headers: this.commonService.headers });
    }
    removeUsuario(idUser) {
        this.usuarios = this.usuarios.filter(usuario => {
            return Number(usuario.id_usuario) !== Number(idUser);
        });
    }
    updateUsuario(usuario) {
        let index = null;
        this.usuarios.filter((usuarioFilter, indexFilter) => {
            if (usuario.id_usuario === usuarioFilter.id_usuario) {
                index = indexFilter;
            }
        });
        if (index) {
            this.usuarios[index] = usuario;
        }
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "xMg3":
/*!************************************************!*\
  !*** ./src/app/services/provincias.service.ts ***!
  \************************************************/
/*! exports provided: ProvinciasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinciasService", function() { return ProvinciasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'provincia';
class ProvinciasService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllProvincias() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
}
ProvinciasService.ɵfac = function ProvinciasService_Factory(t) { return new (t || ProvinciasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
ProvinciasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProvinciasService, factory: ProvinciasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProvinciasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "y0zT":
/*!**********************************************!*\
  !*** ./src/app/services/familias.service.ts ***!
  \**********************************************/
/*! exports provided: FamiliasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliasService", function() { return FamiliasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/common.service */ "JSOo");





const ENDPOINT = 'familia';
class FamiliasService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    get() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    getAllFamilias() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, { headers: this.commonService.headers });
    }
    addFamilia(familia) {
        const body = JSON.stringify(familia);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    editFamilia(familia) {
        const body = JSON.stringify(familia);
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
    }
    deleteFamilia(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"]}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
    }
}
FamiliasService.ɵfac = function FamiliasService_Factory(t) { return new (t || FamiliasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
FamiliasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FamiliasService, factory: FamiliasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamiliasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
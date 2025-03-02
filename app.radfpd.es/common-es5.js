(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "+hd0":
    /*!****************************************************!*\
      !*** ./src/app/services/motivos-nodual.service.ts ***!
      \****************************************************/

    /*! exports provided: MotivosNodualService */

    /***/
    function hd0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MotivosNodualService", function () {
        return MotivosNodualService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'motivo_nodual';

      var MotivosNodualService = /*#__PURE__*/function () {
        function MotivosNodualService(http, commonService) {
          _classCallCheck(this, MotivosNodualService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(MotivosNodualService, [{
          key: "get",
          value: function get(idEntidad) {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?entidad=").concat(idEntidad), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllMotivosNodual",
          value: function getAllMotivosNodual() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addMotivoNodual",
          value: function addMotivoNodual(motivoNodual) {
            var body = JSON.stringify(motivoNodual);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editMotivoNodual",
          value: function editMotivoNodual(motivoNodual) {
            var body = JSON.stringify(motivoNodual);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteMotivoNodual",
          value: function deleteMotivoNodual(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return MotivosNodualService;
      }();

      MotivosNodualService.ɵfac = function MotivosNodualService_Factory(t) {
        return new (t || MotivosNodualService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      MotivosNodualService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MotivosNodualService,
        factory: MotivosNodualService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MotivosNodualService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0ceX":
    /*!*******************************************!*\
      !*** ./src/app/services/roles.service.ts ***!
      \*******************************************/

    /*! exports provided: RolesService */

    /***/
    function ceX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesService", function () {
        return RolesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'rol';

      var RolesService = /*#__PURE__*/function () {
        function RolesService(http, commonService) {
          _classCallCheck(this, RolesService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(RolesService, [{
          key: "getAllRoles",
          value: function getAllRoles() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addRol",
          value: function addRol(rol) {
            var body = JSON.stringify(rol);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editRol",
          value: function editRol(rol) {
            var body = JSON.stringify(rol);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteRol",
          value: function deleteRol(idRol) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(idRol), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "removeRol",
          value: function removeRol(idRol) {
            this.roles = this.roles.filter(function (rol) {
              return Number(rol.id_rol) !== Number(idRol);
            });
          }
        }, {
          key: "updateRol",
          value: function updateRol(rol) {
            var index = null;
            this.roles.filter(function (rolFilter, indexFilter) {
              if (rol.id_rol === rolFilter.id_rol) {
                index = indexFilter;
              }
            });

            if (index) {
              this.roles[index] = rol;
            }
          }
        }]);

        return RolesService;
      }();

      RolesService.ɵfac = function RolesService_Factory(t) {
        return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RolesService,
        factory: RolesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "92VL":
    /*!***************************************************!*\
      !*** ./src/app/services/unidades-dual.service.ts ***!
      \***************************************************/

    /*! exports provided: UnidadesDualService */

    /***/
    function VL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadesDualService", function () {
        return UnidadesDualService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'unidad_dual';

      var UnidadesDualService = /*#__PURE__*/function () {
        function UnidadesDualService(http, commonService) {
          _classCallCheck(this, UnidadesDualService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(UnidadesDualService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllUnidadesDual",
          value: function getAllUnidadesDual() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addUnidadDual",
          value: function addUnidadDual(unidadDual) {
            var body = JSON.stringify(unidadDual);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editUnidadDual",
          value: function editUnidadDual(unidadDual) {
            var body = JSON.stringify(unidadDual);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteUnidadDual",
          value: function deleteUnidadDual(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return UnidadesDualService;
      }();

      UnidadesDualService.ɵfac = function UnidadesDualService_Factory(t) {
        return new (t || UnidadesDualService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      UnidadesDualService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UnidadesDualService,
        factory: UnidadesDualService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesDualService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KafX":
    /*!********************************************!*\
      !*** ./src/app/services/ciclos.service.ts ***!
      \********************************************/

    /*! exports provided: CiclosService */

    /***/
    function KafX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CiclosService", function () {
        return CiclosService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'ciclo';

      var CiclosService = /*#__PURE__*/function () {
        function CiclosService(http, commonService) {
          _classCallCheck(this, CiclosService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(CiclosService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllCiclos",
          value: function getAllCiclos() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addCiclo",
          value: function addCiclo(ciclo) {
            var body = JSON.stringify(ciclo);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editCiclo",
          value: function editCiclo(ciclo) {
            var body = JSON.stringify(ciclo);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteCiclo",
          value: function deleteCiclo(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return CiclosService;
      }();

      CiclosService.ɵfac = function CiclosService_Factory(t) {
        return new (t || CiclosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      CiclosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CiclosService,
        factory: CiclosService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CiclosService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QzrE":
    /*!*******************************************!*\
      !*** ./src/app/services/zonas.service.ts ***!
      \*******************************************/

    /*! exports provided: ZonasService */

    /***/
    function QzrE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZonasService", function () {
        return ZonasService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'zona';

      var ZonasService = /*#__PURE__*/function () {
        function ZonasService(http, commonService) {
          _classCallCheck(this, ZonasService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(ZonasService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllZonas",
          value: function getAllZonas() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addZona",
          value: function addZona(zona) {
            var body = JSON.stringify(zona);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editZona",
          value: function editZona(zona) {
            var body = JSON.stringify(zona);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteZona",
          value: function deleteZona(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return ZonasService;
      }();

      ZonasService.ɵfac = function ZonasService_Factory(t) {
        return new (t || ZonasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ZonasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ZonasService,
        factory: ZonasService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZonasService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Y+et":
    /*!*****************************************************!*\
      !*** ./src/app/services/motivos-reunion.service.ts ***!
      \*****************************************************/

    /*! exports provided: MotivosReunionService */

    /***/
    function YEt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MotivosReunionService", function () {
        return MotivosReunionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'motivo_reunion';

      var MotivosReunionService = /*#__PURE__*/function () {
        function MotivosReunionService(http, commonService) {
          _classCallCheck(this, MotivosReunionService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(MotivosReunionService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllMotivosReunion",
          value: function getAllMotivosReunion() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addMotivoReunion",
          value: function addMotivoReunion(motivoReunion) {
            var body = JSON.stringify(motivoReunion);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editMotivoReunion",
          value: function editMotivoReunion(motivoReunion) {
            var body = JSON.stringify(motivoReunion);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteMotivoReunion",
          value: function deleteMotivoReunion(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return MotivosReunionService;
      }();

      MotivosReunionService.ɵfac = function MotivosReunionService_Factory(t) {
        return new (t || MotivosReunionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      MotivosReunionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MotivosReunionService,
        factory: MotivosReunionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MotivosReunionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "am6X":
    /*!***********************************************!*\
      !*** ./src/app/services/contactos.service.ts ***!
      \***********************************************/

    /*! exports provided: ContactosService */

    /***/
    function am6X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactosService", function () {
        return ContactosService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'contacto';

      var ContactosService = /*#__PURE__*/function () {
        function ContactosService(http, commonService) {
          _classCallCheck(this, ContactosService);

          this.http = http;
          this.commonService = commonService;
        }
        /*
          get() {
            return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, { headers: this.commonService.headers });
          }
        */


        _createClass(ContactosService, [{
          key: "getContactosEntidad",
          value: function getContactosEntidad(idEntidad) {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?entidad=").concat(idEntidad), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllContactos",
          value: function getAllContactos() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          } // Se trae todos los contactos que no están ya en la reunión como asistentes

        }, {
          key: "getContactosDisponibles",
          value: function getContactosDisponibles(idReunion) {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?reunion=").concat(idReunion), {
              headers: this.commonService.headers
            });
          } // Marcada la Entidad de la DG a fuego como entidad=1

        }, {
          key: "getAllDinamizadores",
          value: function getAllDinamizadores() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?entidad=1"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addContacto",
          value: function addContacto(contacto) {
            var body = JSON.stringify(contacto);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editContacto",
          value: function editContacto(contacto) {
            var body = JSON.stringify(contacto);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteContacto",
          value: function deleteContacto(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return ContactosService;
      }();

      ContactosService.ɵfac = function ContactosService_Factory(t) {
        return new (t || ContactosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ContactosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ContactosService,
        factory: ContactosService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactosService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dnsR":
    /*!*********************************************!*\
      !*** ./src/app/services/niveles.service.ts ***!
      \*********************************************/

    /*! exports provided: NivelesService */

    /***/
    function dnsR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NivelesService", function () {
        return NivelesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'nivel';

      var NivelesService = /*#__PURE__*/function () {
        function NivelesService(http, commonService) {
          _classCallCheck(this, NivelesService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(NivelesService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllNiveles",
          value: function getAllNiveles() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addMotivoReunion",
          value: function addMotivoReunion(nivel) {
            var body = JSON.stringify(nivel);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editMotivoReunion",
          value: function editMotivoReunion(nivel) {
            var body = JSON.stringify(nivel);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteMotivoReunion",
          value: function deleteMotivoReunion(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return NivelesService;
      }();

      NivelesService.ɵfac = function NivelesService_Factory(t) {
        return new (t || NivelesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      NivelesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NivelesService,
        factory: NivelesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NivelesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dtOv":
    /*!********************************************!*\
      !*** ./src/app/services/grupos.service.ts ***!
      \********************************************/

    /*! exports provided: GruposService */

    /***/
    function dtOv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GruposService", function () {
        return GruposService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'grupo';

      var GruposService = /*#__PURE__*/function () {
        function GruposService(http, commonService) {
          _classCallCheck(this, GruposService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(GruposService, [{
          key: "getAllGrupos",
          value: function getAllGrupos() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addGrupo",
          value: function addGrupo(grupo) {
            var body = JSON.stringify(grupo);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editGrupo",
          value: function editGrupo(grupo) {
            var body = JSON.stringify(grupo);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteGrupo",
          value: function deleteGrupo(idGrupoMenu) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(idGrupoMenu), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "removeGrupo",
          value: function removeGrupo(idGrupo) {
            this.grupos = this.grupos.filter(function (grupo) {
              return Number(grupo.id_grupo_menu) !== Number(idGrupo);
            });
          }
        }, {
          key: "updateGrupo",
          value: function updateGrupo(grupo) {
            var index = null;
            this.grupos.filter(function (grupoFilter, indexFilter) {
              if (grupo.id_grupo_menu === grupoFilter.id_grupo_menu) {
                index = indexFilter;
              }
            });

            if (index) {
              this.grupos[index] = grupo;
            }
          }
        }]);

        return GruposService;
      }();

      GruposService.ɵfac = function GruposService_Factory(t) {
        return new (t || GruposService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      GruposService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GruposService,
        factory: GruposService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GruposService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "du+7":
    /*!***************************************************!*\
      !*** ./src/app/services/modos-reunion.service.ts ***!
      \***************************************************/

    /*! exports provided: ModosReunionService */

    /***/
    function du7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModosReunionService", function () {
        return ModosReunionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'modo_reunion';

      var ModosReunionService = /*#__PURE__*/function () {
        function ModosReunionService(http, commonService) {
          _classCallCheck(this, ModosReunionService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(ModosReunionService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllModosReunion",
          value: function getAllModosReunion() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addModoReunion",
          value: function addModoReunion(modoReunion) {
            var body = JSON.stringify(modoReunion);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editModoReunion",
          value: function editModoReunion(modoReunion) {
            var body = JSON.stringify(modoReunion);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteModoReunion",
          value: function deleteModoReunion(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return ModosReunionService;
      }();

      ModosReunionService.ɵfac = function ModosReunionService_Factory(t) {
        return new (t || ModosReunionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ModosReunionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ModosReunionService,
        factory: ModosReunionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModosReunionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fUJ1":
    /*!***************************************************!*\
      !*** ./src/app/services/tipos-entidad.service.ts ***!
      \***************************************************/

    /*! exports provided: TiposEntidadService */

    /***/
    function fUJ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TiposEntidadService", function () {
        return TiposEntidadService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'tipo_entidad';

      var TiposEntidadService = /*#__PURE__*/function () {
        function TiposEntidadService(http, commonService) {
          _classCallCheck(this, TiposEntidadService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(TiposEntidadService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllTiposEntidad",
          value: function getAllTiposEntidad() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addTipoEntidad",
          value: function addTipoEntidad(tipoEntidad) {
            var body = JSON.stringify(tipoEntidad);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editTipoEntidad",
          value: function editTipoEntidad(tipoEntidad) {
            var body = JSON.stringify(tipoEntidad);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteTipoEntidad",
          value: function deleteTipoEntidad(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return TiposEntidadService;
      }();

      TiposEntidadService.ɵfac = function TiposEntidadService_Factory(t) {
        return new (t || TiposEntidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      TiposEntidadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TiposEntidadService,
        factory: TiposEntidadService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TiposEntidadService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kxEN":
    /*!**********************************************!*\
      !*** ./src/app/services/opciones.service.ts ***!
      \**********************************************/

    /*! exports provided: OpcionesService */

    /***/
    function kxEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpcionesService", function () {
        return OpcionesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'opcion';

      var OpcionesService = /*#__PURE__*/function () {
        function OpcionesService(http, commonService) {
          _classCallCheck(this, OpcionesService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(OpcionesService, [{
          key: "getAllOpciones",
          value: function getAllOpciones() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addOpcion",
          value: function addOpcion(opcion) {
            var body = JSON.stringify(opcion);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editOpcion",
          value: function editOpcion(opcion) {
            var body = JSON.stringify(opcion);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteOpcion",
          value: function deleteOpcion(idOpcionMenu) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(idOpcionMenu), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "removeOpcion",
          value: function removeOpcion(idOpcion) {
            this.opciones = this.opciones.filter(function (opcion) {
              return Number(opcion.id_opcion_menu) !== Number(idOpcion);
            });
          }
        }, {
          key: "updateOpcion",
          value: function updateOpcion(opcion) {
            var index = null;
            this.opciones.filter(function (opcionFilter, indexFilter) {
              if (opcion.id_opcion_menu === opcionFilter.id_opcion_menu) {
                index = indexFilter;
              }
            });

            if (index) {
              this.opciones[index] = opcion;
            }
          }
        }]);

        return OpcionesService;
      }();

      OpcionesService.ɵfac = function OpcionesService_Factory(t) {
        return new (t || OpcionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      OpcionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OpcionesService,
        factory: OpcionesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcionesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "on2l":
    /*!*********************************************!*\
      !*** ./src/app/services/usuario.service.ts ***!
      \*********************************************/

    /*! exports provided: UsuarioService */

    /***/
    function on2l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
        return UsuarioService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'usuario';

      var UsuarioService = /*#__PURE__*/function () {
        function UsuarioService(http, commonService) {
          _classCallCheck(this, UsuarioService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(UsuarioService, [{
          key: "getAllUsuarios",
          value: function getAllUsuarios() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addUsuario",
          value: function addUsuario(usuario) {
            var body = JSON.stringify(usuario);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editUsuario",
          value: function editUsuario(usuario, route) {
            var body = JSON.stringify(usuario);

            if (route) {
              route = "?route=".concat(route);
            } else {
              route = '';
            }

            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php").concat(route), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteUsuario",
          value: function deleteUsuario(usuario) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(usuario.id_usuario), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "removeUsuario",
          value: function removeUsuario(idUser) {
            this.usuarios = this.usuarios.filter(function (usuario) {
              return Number(usuario.id_usuario) !== Number(idUser);
            });
          }
        }, {
          key: "updateUsuario",
          value: function updateUsuario(usuario) {
            var index = null;
            this.usuarios.filter(function (usuarioFilter, indexFilter) {
              if (usuario.id_usuario === usuarioFilter.id_usuario) {
                index = indexFilter;
              }
            });

            if (index) {
              this.usuarios[index] = usuario;
            }
          }
        }]);

        return UsuarioService;
      }();

      UsuarioService.ɵfac = function UsuarioService_Factory(t) {
        return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsuarioService,
        factory: UsuarioService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xMg3":
    /*!************************************************!*\
      !*** ./src/app/services/provincias.service.ts ***!
      \************************************************/

    /*! exports provided: ProvinciasService */

    /***/
    function xMg3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProvinciasService", function () {
        return ProvinciasService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'provincia';

      var ProvinciasService = /*#__PURE__*/function () {
        function ProvinciasService(http, commonService) {
          _classCallCheck(this, ProvinciasService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(ProvinciasService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllProvincias",
          value: function getAllProvincias() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }]);

        return ProvinciasService;
      }();

      ProvinciasService.ɵfac = function ProvinciasService_Factory(t) {
        return new (t || ProvinciasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      ProvinciasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProvinciasService,
        factory: ProvinciasService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProvinciasService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "y0zT":
    /*!**********************************************!*\
      !*** ./src/app/services/familias.service.ts ***!
      \**********************************************/

    /*! exports provided: FamiliasService */

    /***/
    function y0zT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FamiliasService", function () {
        return FamiliasService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/common.service */
      "JSOo");

      var ENDPOINT = 'familia';

      var FamiliasService = /*#__PURE__*/function () {
        function FamiliasService(http, commonService) {
          _classCallCheck(this, FamiliasService);

          this.http = http;
          this.commonService = commonService;
        }

        _createClass(FamiliasService, [{
          key: "get",
          value: function get() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "getAllFamilias",
          value: function getAllFamilias() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "addFamilia",
          value: function addFamilia(familia) {
            var body = JSON.stringify(familia);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "editFamilia",
          value: function editFamilia(familia) {
            var body = JSON.stringify(familia);
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php"), body, {
              headers: this.commonService.headers
            });
          }
        }, {
          key: "deleteFamilia",
          value: function deleteFamilia(id) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["URL_API"], "/").concat(ENDPOINT, ".php?id=").concat(id), {
              headers: this.commonService.headers
            });
          }
        }]);

        return FamiliasService;
      }();

      FamiliasService.ɵfac = function FamiliasService_Factory(t) {
        return new (t || FamiliasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      FamiliasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FamiliasService,
        factory: FamiliasService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamiliasService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _shared_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datos-basicos-reunion-datos-basicos-reunion-module"], {
    /***/
    "4p1Q":
    /*!**************************************************************************************************!*\
      !*** ./src/app/reuniones/datos-reunion/datos-basicos-reunion/datos-basicos-reunion.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: DatosBasicosReunionComponent */

    /***/
    function p1Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatosBasicosReunionComponent", function () {
        return DatosBasicosReunionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/messages */
      "Xksa");
      /* harmony import */


      var _datos_reunion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../datos-reunion.component */
      "2/A8");
      /* harmony import */


      var src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/reuniones.service */
      "5hAj");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DatosBasicosReunionComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idC_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", idC_r5.id_contacto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idC_r5.nombre_completo, " ");
        }
      }

      function DatosBasicosReunionComponent_mat_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idModR_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", idModR_r6.id_modo_reunion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idModR_r6.modo_reunion, " ");
        }
      }

      function DatosBasicosReunionComponent_mat_option_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idMotR_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", idMotR_r7.id_motivo_reunion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idMotR_r7.motivo_reunion, " ");
        }
      }

      function DatosBasicosReunionComponent_mat_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idET_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", idET_r8.id_entidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idET_r8.entidad, " ");
        }
      }

      function DatosBasicosReunionComponent_mat_option_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idZ_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", idZ_r9.id_zona);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idZ_r9.zona, " ");
        }
      }

      var DatosBasicosReunionComponent = /*#__PURE__*/function () {
        function DatosBasicosReunionComponent(datosReunion, reunionService) {
          _classCallCheck(this, DatosBasicosReunionComponent);

          this.datosReunion = datosReunion;
          this.reunionService = reunionService;
          this.zonas = this.datosReunion.datosEditarReunion.zonas;
          this.modos_reunion = this.datosReunion.datosEditarReunion.modosReunion;
          this.motivos_reunion = this.datosReunion.datosEditarReunion.motivosReunion;
          this.entidades_target = this.datosReunion.datosEditarReunion.entidades;
          this.contactos = this.datosReunion.datosEditarReunion.contactos;
        }

        _createClass(DatosBasicosReunionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_2__["ENTIDAD_REUNION"];
            this.setForm();
            this.datosBasicosForm.valueChanges.subscribe(function (form) {
              _this.reunionService.setDatosBasicosReunion(form);
            });
          }
        }, {
          key: "setForm",
          value: function setForm() {
            this.datosBasicosForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              id_reunion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.id_reunion, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              reunion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.reunion, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              id_contacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.id_contacto, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              id_modo_reunion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.id_modo_reunion, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              id_motivo_reunion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.id_motivo_reunion, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              id_entidad_target: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.id_entidad_target, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              id_zona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.id_zona, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.fecha, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              hora_inicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.hora_inicio, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              hora_fin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.hora_fin, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              ubicacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.ubicacion),
              localidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.localidad),
              observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.observaciones)
            });
          }
        }]);

        return DatosBasicosReunionComponent;
      }();

      DatosBasicosReunionComponent.ɵfac = function DatosBasicosReunionComponent_Factory(t) {
        return new (t || DatosBasicosReunionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datos_reunion_component__WEBPACK_IMPORTED_MODULE_3__["DatosReunionComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_4__["ReunionesService"]));
      };

      DatosBasicosReunionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatosBasicosReunionComponent,
        selectors: [["app-datos-basicos"]],
        decls: 65,
        vars: 7,
        consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["color", "accent"], ["matInput", "", "placeholder", "Reuni\xF3n", "formControlName", "reunion", "name", "reunion", "maxlength", "100", "required", ""], ["formControlName", "id_contacto", "required", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "matInput", "", "placeholder", "Fecha", "formControlName", "fecha", "name", "fecha", "maxlength", "100", "required", ""], ["type", "time", "matInput", "", "placeholder", "Hora Inicio", "formControlName", "hora_inicio", "name", "hora_inicio", "maxlength", "100", "required", ""], ["type", "time", "matInput", "", "placeholder", "Hora Fin", "formControlName", "hora_fin", "name", "hora_fin", "maxlength", "100", "required", ""], ["matInput", "", "placeholder", "Ubicaci\xF3n", "formControlName", "ubicacion", "name", "ubicacion", "maxlength", "100"], ["matInput", "", "placeholder", "Localidad", "formControlName", "localidad", "name", "localidad", "maxlength", "100", "required", ""], ["formControlName", "id_modo_reunion", "required", ""], ["formControlName", "id_motivo_reunion", "required", ""], ["formControlName", "id_entidad_target"], ["formControlName", "id_zona", "required", ""], ["matInput", "", "placeholder", "Observaciones", "formControlName", "observaciones", "name", "Observaciones"], [3, "value"]],
        template: function DatosBasicosReunionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dinamizador");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sin dinamizador");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DatosBasicosReunionComponent_mat_option_14_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Modo Reuni\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sin modo reunion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DatosBasicosReunionComponent_mat_option_37_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Motivo Reuni\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sin motivo reunion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DatosBasicosReunionComponent_mat_option_45_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Entidad Target");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sin entidad target");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DatosBasicosReunionComponent_mat_option_53_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Zona");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sin zona");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DatosBasicosReunionComponent_mat_option_61_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "textarea", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Editar ", ctx.ENTIDAD, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.datosBasicosForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactos);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modos_reunion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.motivos_reunion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entidades_target);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zonas);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 52em;\n  text-align: center;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n .mat-dialog-actions {\n  display: block;\n  text-align: center;\n}\n\n.importe[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-icon.incidencia[_ngcontent-%COMP%] {\n  color: #f18f1f;\n}\n\nmat-icon.predcio[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.ultimo[_ngcontent-%COMP%] {\n  margin-bottom: 4em !important;\n}\n\n.musical[_ngcontent-%COMP%] {\n  color: #f18f1f;\n}\n\n.imagenPortada[_ngcontent-%COMP%] {\n  width: 20em;\n}\n\n.alineado[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1bmlvbmVzL2RhdG9zLXJldW5pb24vZGF0b3MtYmFzaWNvcy1yZXVuaW9uL2RhdG9zLWJhc2ljb3MtcmV1bmlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtBQUFKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9yZXVuaW9uZXMvZGF0b3MtcmV1bmlvbi9kYXRvcy1iYXNpY29zLXJldW5pb24vZGF0b3MtYmFzaWNvcy1yZXVuaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUyZW07XG4gICAgLy9oZWlnaHQ6IDYwZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vcGFkZGluZy1ib3R0b206IDEwZW07XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuOjpuZy1kZWVwLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1wb3J0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1pY29uLmluY2lkZW5jaWEge1xuICAgIGNvbG9yOiByZ2IoMjQxLCAxNDMsIDMxKTtcbn1cblxubWF0LWljb24ucHJlZGNpbzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udWx0aW1vIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0ZW0gIWltcG9ydGFudDtcbn1cblxuLm11c2ljYWwge1xuICAgIGNvbG9yOiByZ2IoMjQxLCAxNDMsIDMxKTtcbn1cblxuLmltYWdlblBvcnRhZGEge1xuICAgIHdpZHRoOiAyMGVtO1xufVxuXG4uYWxpbmVhZG8ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatosBasicosReunionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-datos-basicos',
            templateUrl: './datos-basicos-reunion.component.html',
            styleUrls: ['./datos-basicos-reunion.component.scss']
          }]
        }], function () {
          return [{
            type: _datos_reunion_component__WEBPACK_IMPORTED_MODULE_3__["DatosReunionComponent"]
          }, {
            type: src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_4__["ReunionesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JU/a":
    /*!***********************************************************************************************!*\
      !*** ./src/app/reuniones/datos-reunion/datos-basicos-reunion/datos-basicos-reunion.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: DatosBasicosReunionModule */

    /***/
    function JUA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatosBasicosReunionModule", function () {
        return DatosBasicosReunionModule;
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


      var _datos_basicos_reunion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./datos-basicos-reunion-routing.module */
      "dk0w");
      /* harmony import */


      var _datos_basicos_reunion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./datos-basicos-reunion.component */
      "4p1Q");
      /* harmony import */


      var _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../modules/crud-material/crud-material.module */
      "ah4G");

      var DatosBasicosReunionModule = function DatosBasicosReunionModule() {
        _classCallCheck(this, DatosBasicosReunionModule);
      };

      DatosBasicosReunionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DatosBasicosReunionModule
      });
      DatosBasicosReunionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DatosBasicosReunionModule_Factory(t) {
          return new (t || DatosBasicosReunionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _datos_basicos_reunion_routing_module__WEBPACK_IMPORTED_MODULE_2__["DatosBasicosReunionRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DatosBasicosReunionModule, {
          declarations: [_datos_basicos_reunion_component__WEBPACK_IMPORTED_MODULE_3__["DatosBasicosReunionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _datos_basicos_reunion_routing_module__WEBPACK_IMPORTED_MODULE_2__["DatosBasicosReunionRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatosBasicosReunionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_datos_basicos_reunion_component__WEBPACK_IMPORTED_MODULE_3__["DatosBasicosReunionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _datos_basicos_reunion_routing_module__WEBPACK_IMPORTED_MODULE_2__["DatosBasicosReunionRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dk0w":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/reuniones/datos-reunion/datos-basicos-reunion/datos-basicos-reunion-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: DatosBasicosReunionRoutingModule */

    /***/
    function dk0w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatosBasicosReunionRoutingModule", function () {
        return DatosBasicosReunionRoutingModule;
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


      var _datos_basicos_reunion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./datos-basicos-reunion.component */
      "4p1Q");

      var routes = [{
        path: '',
        component: _datos_basicos_reunion_component__WEBPACK_IMPORTED_MODULE_2__["DatosBasicosReunionComponent"]
      }];

      var DatosBasicosReunionRoutingModule = function DatosBasicosReunionRoutingModule() {
        _classCallCheck(this, DatosBasicosReunionRoutingModule);
      };

      DatosBasicosReunionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DatosBasicosReunionRoutingModule
      });
      DatosBasicosReunionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DatosBasicosReunionRoutingModule_Factory(t) {
          return new (t || DatosBasicosReunionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DatosBasicosReunionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatosBasicosReunionRoutingModule, [{
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
//# sourceMappingURL=datos-basicos-reunion-datos-basicos-reunion-module-es5.js.map
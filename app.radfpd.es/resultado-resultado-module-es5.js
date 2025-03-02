(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultado-resultado-module"], {
    /***/
    "4ak0":
    /*!**************************************************************************!*\
      !*** ./src/app/reuniones/datos-reunion/resultado/resultado.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ResultadoComponent */

    /***/
    function ak0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultadoComponent", function () {
        return ResultadoComponent;
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


      var src_app_shared_editor_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/editor-config */
      "6rgx");
      /* harmony import */


      var _datos_reunion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../datos-reunion.component */
      "2/A8");
      /* harmony import */


      var src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/reuniones.service */
      "5hAj");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @kolkov/angular-editor */
      "mUB+");

      var ResultadoComponent = /*#__PURE__*/function () {
        function ResultadoComponent(datosReunion, reunionService) {
          _classCallCheck(this, ResultadoComponent);

          this.datosReunion = datosReunion;
          this.reunionService = reunionService;
          this.editorConfig = src_app_shared_editor_config__WEBPACK_IMPORTED_MODULE_3__["editorConfig"];
        }

        _createClass(ResultadoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.ENTIDAD = src_app_shared_messages__WEBPACK_IMPORTED_MODULE_2__["ENTIDAD_REUNION"];
            this.setForm();
            this.resultadoForm.valueChanges.subscribe(function (form) {
              _this.reunionService.setResultadoReunion(form);
            });
          }
        }, {
          key: "setForm",
          value: function setForm() {
            this.resultadoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              id_reunion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.id_reunion, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              resultado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.reunionService.reunion.resultado, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//this.editor.destroy();
          }
        }]);

        return ResultadoComponent;
      }();

      ResultadoComponent.ɵfac = function ResultadoComponent_Factory(t) {
        return new (t || ResultadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datos_reunion_component__WEBPACK_IMPORTED_MODULE_4__["DatosReunionComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__["ReunionesService"]));
      };

      ResultadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResultadoComponent,
        selectors: [["app-resultado"]],
        decls: 6,
        vars: 3,
        consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["formControlName", "resultado", "required", "", 3, "config"]],
        template: function ResultadoComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resultados: ", ctx.ENTIDAD, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resultadoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.editorConfig);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: [".container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 10em;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  margin-left: 0.75em;\n}\n\n .mat-dialog-actions {\n  display: block;\n  text-align: center;\n}\n\n.importe[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-icon.incidencia[_ngcontent-%COMP%] {\n  color: #f18f1f;\n}\n\nmat-icon.predcio[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.ultimo[_ngcontent-%COMP%] {\n  margin-bottom: 4em !important;\n}\n\n.musical[_ngcontent-%COMP%] {\n  color: #f18f1f;\n}\n\n.imagenPortada[_ngcontent-%COMP%] {\n  width: 20em;\n}\n\n.alineado[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1bmlvbmVzL2RhdG9zLXJldW5pb24vcmVzdWx0YWRvL3Jlc3VsdGFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3JldW5pb25lcy9kYXRvcy1yZXVuaW9uL3Jlc3VsdGFkby9yZXN1bHRhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAvL3dpZHRoOiA1M2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcbn1cblxuOjpuZy1kZWVwLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1wb3J0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1pY29uLmluY2lkZW5jaWEge1xuICAgIGNvbG9yOiByZ2IoMjQxLCAxNDMsIDMxKTtcbn1cblxubWF0LWljb24ucHJlZGNpbzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udWx0aW1vIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0ZW0gIWltcG9ydGFudDtcbn1cblxuLm11c2ljYWwge1xuICAgIGNvbG9yOiByZ2IoMjQxLCAxNDMsIDMxKTtcbn1cblxuLmltYWdlblBvcnRhZGEge1xuICAgIHdpZHRoOiAyMGVtO1xufVxuXG4uYWxpbmVhZG8ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultadoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-resultado',
            templateUrl: './resultado.component.html',
            styleUrls: ['./resultado.component.scss']
          }]
        }], function () {
          return [{
            type: _datos_reunion_component__WEBPACK_IMPORTED_MODULE_4__["DatosReunionComponent"]
          }, {
            type: src_app_services_reuniones_service__WEBPACK_IMPORTED_MODULE_5__["ReunionesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QO/t":
    /*!***********************************************************************!*\
      !*** ./src/app/reuniones/datos-reunion/resultado/resultado.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ResultadoModule */

    /***/
    function QOT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultadoModule", function () {
        return ResultadoModule;
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


      var _resultado_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./resultado-routing.module */
      "u1WA");
      /* harmony import */


      var _resultado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./resultado.component */
      "4ak0");
      /* harmony import */


      var _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../modules/crud-material/crud-material.module */
      "ah4G");
      /* harmony import */


      var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @kolkov/angular-editor */
      "mUB+");

      var ResultadoModule = function ResultadoModule() {
        _classCallCheck(this, ResultadoModule);
      };

      ResultadoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ResultadoModule
      });
      ResultadoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ResultadoModule_Factory(t) {
          return new (t || ResultadoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _resultado_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResultadoRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResultadoModule, {
          declarations: [_resultado_component__WEBPACK_IMPORTED_MODULE_3__["ResultadoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _resultado_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResultadoRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultadoModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_resultado_component__WEBPACK_IMPORTED_MODULE_3__["ResultadoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _resultado_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResultadoRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "u1WA":
    /*!*******************************************************************************!*\
      !*** ./src/app/reuniones/datos-reunion/resultado/resultado-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ResultadoRoutingModule */

    /***/
    function u1WA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultadoRoutingModule", function () {
        return ResultadoRoutingModule;
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


      var _resultado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./resultado.component */
      "4ak0");

      var routes = [{
        path: '',
        component: _resultado_component__WEBPACK_IMPORTED_MODULE_2__["ResultadoComponent"]
      }];

      var ResultadoRoutingModule = function ResultadoRoutingModule() {
        _classCallCheck(this, ResultadoRoutingModule);
      };

      ResultadoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ResultadoRoutingModule
      });
      ResultadoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ResultadoRoutingModule_Factory(t) {
          return new (t || ResultadoRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResultadoRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultadoRoutingModule, [{
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
//# sourceMappingURL=resultado-resultado-module-es5.js.map
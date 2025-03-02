(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opciones-opciones-module"], {
    /***/
    "12xl":
    /*!*********************************************!*\
      !*** ./src/app/opciones/opciones.module.ts ***!
      \*********************************************/

    /*! exports provided: OpcionesModule */

    /***/
    function xl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpcionesModule", function () {
        return OpcionesModule;
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


      var _opciones_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./opciones-routing.module */
      "PUw8");
      /* harmony import */


      var _opciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./opciones.component */
      "jn2L");
      /* harmony import */


      var _add_opcion_add_opcion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-opcion/add-opcion.component */
      "DYSA");
      /* harmony import */


      var _edit_opcion_edit_opcion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-opcion/edit-opcion.component */
      "67Uc");
      /* harmony import */


      var _delete_opcion_delete_opcion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./delete-opcion/delete-opcion.component */
      "Jt3u");
      /* harmony import */


      var _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../modules/crud-material/crud-material.module */
      "ah4G");

      var OpcionesModule = function OpcionesModule() {
        _classCallCheck(this, OpcionesModule);
      };

      OpcionesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OpcionesModule
      });
      OpcionesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OpcionesModule_Factory(t) {
          return new (t || OpcionesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _opciones_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpcionesRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_7__["CrudMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OpcionesModule, {
          declarations: [_opciones_component__WEBPACK_IMPORTED_MODULE_3__["OpcionesComponent"], _add_opcion_add_opcion_component__WEBPACK_IMPORTED_MODULE_4__["AddOpcionComponent"], _edit_opcion_edit_opcion_component__WEBPACK_IMPORTED_MODULE_5__["EditOpcionComponent"], _delete_opcion_delete_opcion_component__WEBPACK_IMPORTED_MODULE_6__["DeleteOpcionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _opciones_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpcionesRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_7__["CrudMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcionesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_opciones_component__WEBPACK_IMPORTED_MODULE_3__["OpcionesComponent"], _add_opcion_add_opcion_component__WEBPACK_IMPORTED_MODULE_4__["AddOpcionComponent"], _edit_opcion_edit_opcion_component__WEBPACK_IMPORTED_MODULE_5__["EditOpcionComponent"], _delete_opcion_delete_opcion_component__WEBPACK_IMPORTED_MODULE_6__["DeleteOpcionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _opciones_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpcionesRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_7__["CrudMaterialModule"]],
            entryComponents: [_add_opcion_add_opcion_component__WEBPACK_IMPORTED_MODULE_4__["AddOpcionComponent"], _edit_opcion_edit_opcion_component__WEBPACK_IMPORTED_MODULE_5__["EditOpcionComponent"], _delete_opcion_delete_opcion_component__WEBPACK_IMPORTED_MODULE_6__["DeleteOpcionComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "67Uc":
    /*!***************************************************************!*\
      !*** ./src/app/opciones/edit-opcion/edit-opcion.component.ts ***!
      \***************************************************************/

    /*! exports provided: EditOpcionComponent */

    /***/
    function Uc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditOpcionComponent", function () {
        return EditOpcionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/messages */
      "Xksa");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/opciones.service */
      "kxEN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV"); // import { Opcion } from 'src/app/shared/interfaces/opcion';


      var EditOpcionComponent = /*#__PURE__*/function () {
        function EditOpcionComponent(dialogRef, snackBar, servicioOpciones, opcion) {
          _classCallCheck(this, EditOpcionComponent);

          this.dialogRef = dialogRef;
          this.snackBar = snackBar;
          this.servicioOpciones = servicioOpciones;
          this.opcion = opcion;
        }

        _createClass(EditOpcionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.opcionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              id_opcion_menu: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.opcion.id_opcion_menu, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              opcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.opcion.opcion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              accion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.opcion.accion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              texto_tooltip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.opcion.texto_tooltip),
              observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.opcion.observaciones)
            });
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var opcion, RESPONSE;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.opcionForm.valid) {
                        _context.next = 8;
                        break;
                      }

                      opcion = this.opcionForm.value;
                      _context.next = 4;
                      return this.servicioOpciones.editOpcion(opcion).toPromise();

                    case 4:
                      RESPONSE = _context.sent;

                      if (RESPONSE.ok) {
                        this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                          duration: 5000
                        });
                        this.dialogRef.close({
                          ok: RESPONSE.ok,
                          data: RESPONSE.data
                        });
                      } else {
                        this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                          duration: 5000
                        });
                      }

                      _context.next = 9;
                      break;

                    case 8:
                      this.snackBar.open(_shared_messages__WEBPACK_IMPORTED_MODULE_4__["INVALID_FORM"], _shared_messages__WEBPACK_IMPORTED_MODULE_4__["CLOSE"], {
                        duration: 5000
                      });

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close({
              ok: false
            });
          }
        }]);

        return EditOpcionComponent;
      }();

      EditOpcionComponent.ɵfac = function EditOpcionComponent_Factory(t) {
        return new (t || EditOpcionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_6__["OpcionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditOpcionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EditOpcionComponent,
        selectors: [["app-edit-opcion"]],
        decls: 21,
        vars: 2,
        consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["color", "accent"], ["matInput", "", "placeholder", "Opci\xF3n", "formControlName", "opcion", "name", "opcion", "maxlength", "100", "required", ""], ["matInput", "", "placeholder", "Acci\xF3n", "formControlName", "accion", "name", "accion", "maxlength", "100", "required", ""], ["matInput", "", "placeholder", "Tooltip men\xFA", "formControlName", "texto_tooltip", "name", "texto_tooltip", "maxlength", "255"], ["matInput", "", "placeholder", "Observaciones", "formControlName", "observaciones", "name", "observaciones"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "onSubmit", "type", "submit", 3, "disabled", "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"]],
        template: function EditOpcionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Editar opci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditOpcionComponent_Template_button_click_17_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Guardar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditOpcionComponent_Template_button_click_19_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cancelar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.opcionForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.opcionForm.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 18em;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 18em;\n  text-align: center;\n  padding-top: 10px;\n}\n\ndiv.mat-dialog-actions[_ngcontent-%COMP%] {\n  width: 12em;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BjaW9uZXMvZWRpdC1vcGNpb24vZWRpdC1vcGNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL29wY2lvbmVzL2VkaXQtb3BjaW9uL2VkaXQtb3BjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMThlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDE4ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5kaXYubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICB3aWR0aDogMTJlbTtcbiAgICBtYXJnaW46IGF1dG87XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditOpcionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-edit-opcion',
            templateUrl: './edit-opcion.component.html',
            styleUrls: ['./edit-opcion.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_6__["OpcionesService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "DYSA":
    /*!*************************************************************!*\
      !*** ./src/app/opciones/add-opcion/add-opcion.component.ts ***!
      \*************************************************************/

    /*! exports provided: AddOpcionComponent */

    /***/
    function DYSA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOpcionComponent", function () {
        return AddOpcionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/messages */
      "Xksa");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/opciones.service */
      "kxEN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV"); // import {URL_API} from '../../../environments/environment';


      var AddOpcionComponent = /*#__PURE__*/function () {
        function AddOpcionComponent(dialogRef, snackBar, servicioOpciones) {
          _classCallCheck(this, AddOpcionComponent);

          this.dialogRef = dialogRef;
          this.snackBar = snackBar;
          this.servicioOpciones = servicioOpciones;
        }

        _createClass(AddOpcionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.opcionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              opcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              accion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              texto_tooltip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
              observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
            });
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var opcion, RESPONSE;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.opcionForm.valid) {
                        _context2.next = 8;
                        break;
                      }

                      opcion = this.opcionForm.value;
                      _context2.next = 4;
                      return this.servicioOpciones.addOpcion(opcion).toPromise();

                    case 4:
                      RESPONSE = _context2.sent;

                      if (RESPONSE.ok) {
                        this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], {
                          duration: 5000
                        });
                        this.dialogRef.close({
                          ok: RESPONSE.ok,
                          data: RESPONSE.data
                        });
                      } else {
                        this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], {
                          duration: 5000
                        });
                      }

                      _context2.next = 9;
                      break;

                    case 8:
                      this.snackBar.open(_shared_messages__WEBPACK_IMPORTED_MODULE_3__["INVALID_FORM"], _shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], {
                        duration: 5000
                      });

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close({
              ok: false
            });
          }
        }]);

        return AddOpcionComponent;
      }();

      AddOpcionComponent.ɵfac = function AddOpcionComponent_Factory(t) {
        return new (t || AddOpcionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_6__["OpcionesService"]));
      };

      AddOpcionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddOpcionComponent,
        selectors: [["app-add-opcion"]],
        decls: 21,
        vars: 2,
        consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-dialog-content", 3, "formGroup"], [1, "form"], ["color", "accent"], ["matInput", "", "placeholder", "Opci\xF3n", "formControlName", "opcion", "name", "opcion", "maxlength", "100", "required", ""], ["matInput", "", "placeholder", "Acci\xF3n", "formControlName", "accion", "name", "accion", "maxlength", "100", "required", ""], ["matInput", "", "placeholder", "Tooltip men\xFA", "formControlName", "texto_tooltip", "name", "texto_tooltip", "maxlength", "255"], ["matInput", "", "placeholder", "Observaciones", "formControlName", "observaciones", "name", "observaciones"], ["mat-dialog-actions", ""], ["mat-button", "", "id", "onSubmit", "type", "submit", 3, "disabled", "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"]],
        template: function AddOpcionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "A\xF1adir opci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddOpcionComponent_Template_button_click_17_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Guardar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddOpcionComponent_Template_button_click_19_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cancelar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.opcionForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.opcionForm.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 18em;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 18em;\n  text-align: center;\n  padding-top: 10px;\n}\n\ndiv.mat-dialog-actions[_ngcontent-%COMP%] {\n  width: 12em;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BjaW9uZXMvYWRkLW9wY2lvbi9hZGQtb3BjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vcGNpb25lcy9hZGQtb3BjaW9uL2FkZC1vcGNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxOGVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMThlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmRpdi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgIHdpZHRoOiAxMmVtO1xuICAgIG1hcmdpbjogYXV0bztcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddOpcionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-opcion',
            templateUrl: './add-opcion.component.html',
            styleUrls: ['./add-opcion.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_6__["OpcionesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Jt3u":
    /*!*******************************************************************!*\
      !*** ./src/app/opciones/delete-opcion/delete-opcion.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DeleteOpcionComponent */

    /***/
    function Jt3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteOpcionComponent", function () {
        return DeleteOpcionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/messages */
      "Xksa");
      /* harmony import */


      var src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/opciones.service */
      "kxEN");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var DeleteOpcionComponent = /*#__PURE__*/function () {
        function DeleteOpcionComponent(dialogRef, opcion, servicioOpciones, snackBar) {
          _classCallCheck(this, DeleteOpcionComponent);

          this.dialogRef = dialogRef;
          this.opcion = opcion;
          this.servicioOpciones = servicioOpciones;
          this.snackBar = snackBar;
        }

        _createClass(DeleteOpcionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close({
              ok: false
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var RESPONSE;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.servicioOpciones.deleteOpcion(this.opcion.id_opcion_menu).toPromise();

                    case 2:
                      RESPONSE = _context3.sent;

                      if (RESPONSE.ok) {
                        this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], {
                          duration: 5000
                        });
                        this.dialogRef.close({
                          ok: RESPONSE.ok,
                          data: RESPONSE.data
                        });
                      } else {
                        this.snackBar.open(RESPONSE.message, _shared_messages__WEBPACK_IMPORTED_MODULE_3__["CLOSE"], {
                          duration: 5000
                        });
                      }

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return DeleteOpcionComponent;
      }();

      DeleteOpcionComponent.ɵfac = function DeleteOpcionComponent_Factory(t) {
        return new (t || DeleteOpcionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_4__["OpcionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
      };

      DeleteOpcionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeleteOpcionComponent,
        selectors: [["app-delete-opcion"]],
        decls: 13,
        vars: 2,
        consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "id", "deleteOpcion", 3, "click"], ["mat-button", "", "id", "onNoClick", "tabindex", "-1", 3, "click"]],
        template: function DeleteOpcionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xBFSeguro que deseas eliminar esta opci\xF3n?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteOpcionComponent_Template_button_click_9_listener() {
              return ctx.confirmDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Eliminar Opci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteOpcionComponent_Template_button_click_11_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancelar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Id: ", ctx.opcion.id_opcion_menu, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Opci\xF3n: ", ctx.opcion.opcion, " ");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["div.mat-dialog-actions[_ngcontent-%COMP%] {\n  width: 15em;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BjaW9uZXMvZGVsZXRlLW9wY2lvbi9kZWxldGUtb3BjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL29wY2lvbmVzL2RlbGV0ZS1vcGNpb24vZGVsZXRlLW9wY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgIHdpZHRoOiAxNWVtO1xuICAgIG1hcmdpbjogYXV0bztcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteOpcionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-delete-opcion',
            templateUrl: './delete-opcion.component.html',
            styleUrls: ['./delete-opcion.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: src_app_services_opciones_service__WEBPACK_IMPORTED_MODULE_4__["OpcionesService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PUw8":
    /*!*****************************************************!*\
      !*** ./src/app/opciones/opciones-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: OpcionesRoutingModule */

    /***/
    function PUw8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpcionesRoutingModule", function () {
        return OpcionesRoutingModule;
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


      var _opciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./opciones.component */
      "jn2L");

      var routes = [{
        path: '',
        component: _opciones_component__WEBPACK_IMPORTED_MODULE_2__["OpcionesComponent"]
      }];

      var OpcionesRoutingModule = function OpcionesRoutingModule() {
        _classCallCheck(this, OpcionesRoutingModule);
      };

      OpcionesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OpcionesRoutingModule
      });
      OpcionesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OpcionesRoutingModule_Factory(t) {
          return new (t || OpcionesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OpcionesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcionesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jn2L":
    /*!************************************************!*\
      !*** ./src/app/opciones/opciones.component.ts ***!
      \************************************************/

    /*! exports provided: OpcionesComponent */

    /***/
    function jn2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpcionesComponent", function () {
        return OpcionesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _add_opcion_add_opcion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-opcion/add-opcion.component */
      "DYSA");
      /* harmony import */


      var _edit_opcion_edit_opcion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-opcion/edit-opcion.component */
      "67Uc");
      /* harmony import */


      var _delete_opcion_delete_opcion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./delete-opcion/delete-opcion.component */
      "Jt3u");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_opciones_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/opciones.service */
      "kxEN");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function OpcionesComponent_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.idFilter);
        }
      }

      function OpcionesComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcion_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", opcion_r9.id_opcion_menu, " ");
        }
      }

      function OpcionesComponent_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.opcionFilter);
        }
      }

      function OpcionesComponent_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcion_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", opcion_r10.opcion, " ");
        }
      }

      function OpcionesComponent_th_10_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OpcionesComponent_th_10_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r12.addOpcion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " add_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OpcionesComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OpcionesComponent_th_10_button_1_Template, 3, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.permises.add);
        }
      }

      function OpcionesComponent_td_11_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OpcionesComponent_td_11_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var opcion_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r17.editOpcion(opcion_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " mode_edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OpcionesComponent_td_11_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OpcionesComponent_td_11_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var opcion_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.deleteOpcion(opcion_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OpcionesComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OpcionesComponent_td_11_button_1_Template, 3, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OpcionesComponent_td_11_button_2_Template, 3, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.permises.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.permises["delete"]);
        }
      }

      function OpcionesComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 19);
        }
      }

      function OpcionesComponent_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25];
      };

      var OpcionesComponent = /*#__PURE__*/function () {
        function OpcionesComponent(dialog, opcionesService, overlay) {
          _classCallCheck(this, OpcionesComponent);

          this.dialog = dialog;
          this.opcionesService = opcionesService;
          this.overlay = overlay;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
          this.idFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
          this.opcionFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
          this.filterValues = {
            id_opcion_menu: '',
            opcion: ''
          };
        }

        _createClass(OpcionesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getOpciones();
          }
        }, {
          key: "getOpciones",
          value: function getOpciones() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var RESPONSE;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.opcionesService.getAllOpciones().toPromise();

                    case 2:
                      RESPONSE = _context4.sent;
                      this.permises = RESPONSE.permises;

                      if (RESPONSE.ok) {
                        this.opcionesService.opciones = RESPONSE.data;
                        this.displayedColumns = ['id_opcion_menu', 'opcion', 'actions'];
                        this.dataSource.data = this.opcionesService.opciones;
                        this.dataSource.sort = this.sort;
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.filterPredicate = this.createFilter();
                        this.onChanges();
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "addOpcion",
          value: function addOpcion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      dialogRef = this.dialog.open(_add_opcion_add_opcion_component__WEBPACK_IMPORTED_MODULE_5__["AddOpcionComponent"], {
                        scrollStrategy: this.overlay.scrollStrategies.noop()
                      });
                      _context5.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context5.sent;

                      if (RESULT) {
                        if (RESULT.ok) {
                          this.opcionesService.opciones.push(RESULT.data);
                          this.dataSource.data = this.opcionesService.opciones;
                        }
                      }

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "editOpcion",
          value: function editOpcion(opcion) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      dialogRef = this.dialog.open(_edit_opcion_edit_opcion_component__WEBPACK_IMPORTED_MODULE_6__["EditOpcionComponent"], {
                        data: opcion,
                        scrollStrategy: this.overlay.scrollStrategies.noop()
                      });
                      _context6.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context6.sent;

                      if (RESULT) {
                        if (RESULT.ok) {
                          this.opcionesService.updateOpcion(RESULT.data);
                          this.dataSource.data = this.opcionesService.opciones;
                        }
                      }

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "deleteOpcion",
          value: function deleteOpcion(opcion) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      dialogRef = this.dialog.open(_delete_opcion_delete_opcion_component__WEBPACK_IMPORTED_MODULE_7__["DeleteOpcionComponent"], {
                        data: opcion,
                        scrollStrategy: this.overlay.scrollStrategies.noop()
                      });
                      _context7.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context7.sent;

                      if (RESULT) {
                        if (RESULT.ok) {
                          this.opcionesService.removeOpcion(RESULT.data);
                          this.dataSource.data = this.opcionesService.opciones;
                        }
                      }

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "createFilter",
          value: function createFilter() {
            var filterFunction = function filterFunction(opcion, filter) {
              var searchTerms = JSON.parse(filter);
              return opcion.id_opcion_menu.toString().indexOf(searchTerms.id_opcion_menu) !== -1 && opcion.opcion.toLowerCase().indexOf(searchTerms.opcion.toLowerCase()) !== -1;
            };

            return filterFunction;
          }
        }, {
          key: "onChanges",
          value: function onChanges() {
            var _this = this;

            this.idFilter.valueChanges.subscribe(function (value) {
              _this.filterValues.id_opcion_menu = value;
              _this.dataSource.filter = JSON.stringify(_this.filterValues);
            });
            this.opcionFilter.valueChanges.subscribe(function (value) {
              _this.filterValues.opcion = value;
              _this.dataSource.filter = JSON.stringify(_this.filterValues);
            });
          }
        }]);

        return OpcionesComponent;
      }();

      OpcionesComponent.ɵfac = function OpcionesComponent_Factory(t) {
        return new (t || OpcionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_opciones_service__WEBPACK_IMPORTED_MODULE_10__["OpcionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]));
      };

      OpcionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OpcionesComponent,
        selectors: [["app-opciones"]],
        viewQuery: function OpcionesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 16,
        vars: 6,
        consts: [[1, "example-container", "mat-elevation-z8"], [1, "example-table-container"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_opcion_menu"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "opcion"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", ""], ["matInput", "", "placeholder", "ID", 3, "formControl"], ["mat-sort-header", ""], ["mat-cell", ""], ["matInput", "", "placeholder", "Opcion", 3, "formControl"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function OpcionesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OpcionesComponent_th_4_Template, 3, 1, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OpcionesComponent_td_5_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OpcionesComponent_th_7_Template, 3, 1, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OpcionesComponent_td_8_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OpcionesComponent_th_10_Template, 2, 1, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OpcionesComponent_td_11_Template, 3, 2, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OpcionesComponent_tr_12_Template, 1, 0, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OpcionesComponent_tr_13_Template, 1, 0, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-paginator", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wY2lvbmVzL29wY2lvbmVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OpcionesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-opciones',
            templateUrl: './opciones.component.html',
            styleUrls: ['./opciones.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
          }, {
            type: _services_opciones_service__WEBPACK_IMPORTED_MODULE_10__["OpcionesService"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=opciones-opciones-module-es5.js.map
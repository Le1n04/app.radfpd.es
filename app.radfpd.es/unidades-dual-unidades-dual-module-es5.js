(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unidades-dual-unidades-dual-module"], {
    /***/
    "B7WU":
    /*!***************************************************************!*\
      !*** ./src/app/unidades-dual/unidades-dual-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: UnidadesDualRoutingModule */

    /***/
    function B7WU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadesDualRoutingModule", function () {
        return UnidadesDualRoutingModule;
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


      var _unidades_dual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./unidades-dual.component */
      "dOrh");

      var routes = [{
        path: '',
        component: _unidades_dual_component__WEBPACK_IMPORTED_MODULE_2__["UnidadesDualComponent"]
      }];

      var UnidadesDualRoutingModule = function UnidadesDualRoutingModule() {
        _classCallCheck(this, UnidadesDualRoutingModule);
      };

      UnidadesDualRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UnidadesDualRoutingModule
      });
      UnidadesDualRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UnidadesDualRoutingModule_Factory(t) {
          return new (t || UnidadesDualRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnidadesDualRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesDualRoutingModule, [{
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
    "LZoU":
    /*!**********************************************************************************!*\
      !*** ./src/app/unidades-dual/delete-unidad-dual/delete-unidad-dual.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: DeleteUnidadDualComponent */

    /***/
    function LZoU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteUnidadDualComponent", function () {
        return DeleteUnidadDualComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeleteUnidadDualComponent = /*#__PURE__*/function () {
        function DeleteUnidadDualComponent() {
          _classCallCheck(this, DeleteUnidadDualComponent);
        }

        _createClass(DeleteUnidadDualComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeleteUnidadDualComponent;
      }();

      DeleteUnidadDualComponent.ɵfac = function DeleteUnidadDualComponent_Factory(t) {
        return new (t || DeleteUnidadDualComponent)();
      };

      DeleteUnidadDualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteUnidadDualComponent,
        selectors: [["app-delete-unidad-dual"]],
        decls: 2,
        vars: 0,
        template: function DeleteUnidadDualComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete-unidad-dual works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGVzLWR1YWwvZGVsZXRlLXVuaWRhZC1kdWFsL2RlbGV0ZS11bmlkYWQtZHVhbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteUnidadDualComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-unidad-dual',
            templateUrl: './delete-unidad-dual.component.html',
            styleUrls: ['./delete-unidad-dual.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "PUS8":
    /*!******************************************************************************!*\
      !*** ./src/app/unidades-dual/edit-unidad-dual/edit-unidad-dual.component.ts ***!
      \******************************************************************************/

    /*! exports provided: EditUnidadDualComponent */

    /***/
    function PUS8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUnidadDualComponent", function () {
        return EditUnidadDualComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditUnidadDualComponent = /*#__PURE__*/function () {
        function EditUnidadDualComponent() {
          _classCallCheck(this, EditUnidadDualComponent);
        }

        _createClass(EditUnidadDualComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditUnidadDualComponent;
      }();

      EditUnidadDualComponent.ɵfac = function EditUnidadDualComponent_Factory(t) {
        return new (t || EditUnidadDualComponent)();
      };

      EditUnidadDualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditUnidadDualComponent,
        selectors: [["app-edit-unidad-dual"]],
        decls: 2,
        vars: 0,
        template: function EditUnidadDualComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-unidad-dual works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGVzLWR1YWwvZWRpdC11bmlkYWQtZHVhbC9lZGl0LXVuaWRhZC1kdWFsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUnidadDualComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-unidad-dual',
            templateUrl: './edit-unidad-dual.component.html',
            styleUrls: ['./edit-unidad-dual.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "bcLR":
    /*!****************************************************************************!*\
      !*** ./src/app/unidades-dual/add-unidad-dual/add-unidad-dual.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AddUnidadDualComponent */

    /***/
    function bcLR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUnidadDualComponent", function () {
        return AddUnidadDualComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddUnidadDualComponent = /*#__PURE__*/function () {
        function AddUnidadDualComponent() {
          _classCallCheck(this, AddUnidadDualComponent);
        }

        _createClass(AddUnidadDualComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddUnidadDualComponent;
      }();

      AddUnidadDualComponent.ɵfac = function AddUnidadDualComponent_Factory(t) {
        return new (t || AddUnidadDualComponent)();
      };

      AddUnidadDualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddUnidadDualComponent,
        selectors: [["app-add-unidad-dual"]],
        decls: 2,
        vars: 0,
        template: function AddUnidadDualComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-unidad-dual works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGVzLWR1YWwvYWRkLXVuaWRhZC1kdWFsL2FkZC11bmlkYWQtZHVhbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUnidadDualComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-unidad-dual',
            templateUrl: './add-unidad-dual.component.html',
            styleUrls: ['./add-unidad-dual.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "dOrh":
    /*!**********************************************************!*\
      !*** ./src/app/unidades-dual/unidades-dual.component.ts ***!
      \**********************************************************/

    /*! exports provided: UnidadesDualComponent */

    /***/
    function dOrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadesDualComponent", function () {
        return UnidadesDualComponent;
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


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _add_unidad_dual_add_unidad_dual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-unidad-dual/add-unidad-dual.component */
      "bcLR");
      /* harmony import */


      var _edit_unidad_dual_edit_unidad_dual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-unidad-dual/edit-unidad-dual.component */
      "PUS8");
      /* harmony import */


      var _delete_unidad_dual_delete_unidad_dual_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./delete-unidad-dual/delete-unidad-dual.component */
      "LZoU");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/unidades-dual.service */
      "92VL");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function UnidadesDualComponent_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.idUnidadDualFilter);
        }
      }

      function UnidadesDualComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidadesDual_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidadesDual_r9.id_unidad_dual, " ");
        }
      }

      function UnidadesDualComponent_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.unidadDualFilter);
        }
      }

      function UnidadesDualComponent_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unidadesDual_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", unidadesDual_r10.unidad_dual, " ");
        }
      }

      function UnidadesDualComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesDualComponent_th_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.addUnidadDual();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " add_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function UnidadesDualComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesDualComponent_td_11_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var unidadesDual_r13 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.editUnidadDual(unidadesDual_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " mode_edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnidadesDualComponent_td_11_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var unidadesDual_r13 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.deleteUnidadDual(unidadesDual_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function UnidadesDualComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 18);
        }
      }

      function UnidadesDualComponent_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 19);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25];
      };

      var UnidadesDualComponent = /*#__PURE__*/function () {
        function UnidadesDualComponent(dialog, unidadesDualService, overlay) {
          _classCallCheck(this, UnidadesDualComponent);

          this.dialog = dialog;
          this.unidadesDualService = unidadesDualService;
          this.overlay = overlay;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
          this.idUnidadDualFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
          this.unidadDualFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
          this.filterValues = {
            id_unidad_dual: '',
            unidad_dual: ''
          };
        }

        _createClass(UnidadesDualComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUnidadesDual(); //this.unidadesDualService.ENTIDAD = "test";
          }
        }, {
          key: "getUnidadesDual",
          value: function getUnidadesDual() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var RESPONSE;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.unidadesDualService.getAllUnidadesDual().toPromise();

                    case 2:
                      RESPONSE = _context.sent;
                      this.permises = RESPONSE.permises;

                      if (RESPONSE.ok) {
                        this.unidadesDualService.unidadDual = RESPONSE.data;
                        this.displayedColumns = ['id_unidad_dual', 'unidad_dual', 'actions'];
                        this.dataSource.data = this.unidadesDualService.unidadDual;
                        this.dataSource.sort = this.sort;
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.filterPredicate = this.createFilter();
                        this.onChanges();
                      }

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addUnidadDual",
          value: function addUnidadDual() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      dialogRef = this.dialog.open(_add_unidad_dual_add_unidad_dual_component__WEBPACK_IMPORTED_MODULE_6__["AddUnidadDualComponent"], {
                        scrollStrategy: this.overlay.scrollStrategies.noop()
                      });
                      _context2.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context2.sent;

                      if (RESULT) {
                        if (RESULT.ok) {
                          //this.unidadesDualService.unidadDual.push(RESULT.data);
                          //this.dataSource.data = this.unidadesDualService.unidadDual;
                          this.ngOnInit();
                        }
                      }

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "editUnidadDual",
          value: function editUnidadDual(unidadDual) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      dialogRef = this.dialog.open(_edit_unidad_dual_edit_unidad_dual_component__WEBPACK_IMPORTED_MODULE_7__["EditUnidadDualComponent"], {
                        data: unidadDual,
                        scrollStrategy: this.overlay.scrollStrategies.noop()
                      });
                      _context3.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context3.sent;

                      if (RESULT) {
                        if (RESULT.ok) {
                          //this.unidadesDualService.editUnidadDual(RESULT.data);
                          //this.dataSource.data = this.unidadesDualService.unidadDual;
                          this.ngOnInit();
                        }
                      }

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "deleteUnidadDual",
          value: function deleteUnidadDual(unidadDual) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var dialogRef, RESULT;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      dialogRef = this.dialog.open(_delete_unidad_dual_delete_unidad_dual_component__WEBPACK_IMPORTED_MODULE_8__["DeleteUnidadDualComponent"], {
                        data: unidadDual,
                        scrollStrategy: this.overlay.scrollStrategies.noop()
                      });
                      _context4.next = 3;
                      return dialogRef.afterClosed().toPromise();

                    case 3:
                      RESULT = _context4.sent;

                      if (RESULT) {
                        if (RESULT.ok) {
                          //this.unidadesDualService.deleteUnidadDual(RESULT.data);
                          //this.dataSource.data = this.unidadesDualService.unidadDual;
                          this.ngOnInit();
                        }
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
          key: "createFilter",
          value: function createFilter() {
            var filterFunction = function filterFunction(unidadDual, filter) {
              var searchTerms = JSON.parse(filter);
              return unidadDual.id_unidad_dual.toString().indexOf(searchTerms.id_unidad_dual) !== -1 && unidadDual.unidad_dual.toLowerCase().indexOf(searchTerms.unidad_dual.toLowerCase()) !== -1;
            };

            return filterFunction;
          }
        }, {
          key: "onChanges",
          value: function onChanges() {
            var _this = this;

            this.idUnidadDualFilter.valueChanges.subscribe(function (value) {
              _this.filterValues.id_unidad_dual = value;
              _this.dataSource.filter = JSON.stringify(_this.filterValues);
            });
            this.unidadDualFilter.valueChanges.subscribe(function (value) {
              _this.filterValues.unidad_dual = value;
              _this.dataSource.filter = JSON.stringify(_this.filterValues);
            });
          }
        }]);

        return UnidadesDualComponent;
      }();

      UnidadesDualComponent.ɵfac = function UnidadesDualComponent_Factory(t) {
        return new (t || UnidadesDualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_10__["UnidadesDualService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]));
      };

      UnidadesDualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UnidadesDualComponent,
        selectors: [["app-unidades-dual"]],
        viewQuery: function UnidadesDualComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 16,
        vars: 6,
        consts: [[1, "example-container", "mat-elevation-z8"], [1, "example-table-container"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_unidad_dual"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "unidad_dual"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", ""], ["matInput", "", "placeholder", "Id", 3, "formControl"], ["mat-sort-header", ""], ["mat-cell", ""], ["matInput", "", "placeholder", "Unidad Dual", 3, "formControl"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function UnidadesDualComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UnidadesDualComponent_th_4_Template, 3, 1, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UnidadesDualComponent_td_5_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UnidadesDualComponent_th_7_Template, 3, 1, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UnidadesDualComponent_td_8_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UnidadesDualComponent_th_10_Template, 4, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UnidadesDualComponent_td_11_Template, 7, 0, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UnidadesDualComponent_tr_12_Template, 1, 0, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UnidadesDualComponent_tr_13_Template, 1, 0, "tr", 9);

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
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaWRhZGVzLWR1YWwvdW5pZGFkZXMtZHVhbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnidadesDualComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-unidades-dual',
            templateUrl: './unidades-dual.component.html',
            styleUrls: ['./unidades-dual.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
          }, {
            type: _services_unidades_dual_service__WEBPACK_IMPORTED_MODULE_10__["UnidadesDualService"]
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
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "dRTf":
    /*!*******************************************************!*\
      !*** ./src/app/unidades-dual/unidades-dual.module.ts ***!
      \*******************************************************/

    /*! exports provided: UnidadesDualModule */

    /***/
    function dRTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnidadesDualModule", function () {
        return UnidadesDualModule;
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


      var _unidades_dual_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./unidades-dual-routing.module */
      "B7WU");
      /* harmony import */


      var _unidades_dual_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./unidades-dual.component */
      "dOrh");
      /* harmony import */


      var _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modules/crud-material/crud-material.module */
      "ah4G");
      /* harmony import */


      var _add_unidad_dual_add_unidad_dual_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-unidad-dual/add-unidad-dual.component */
      "bcLR");
      /* harmony import */


      var _edit_unidad_dual_edit_unidad_dual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-unidad-dual/edit-unidad-dual.component */
      "PUS8");
      /* harmony import */


      var _delete_unidad_dual_delete_unidad_dual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./delete-unidad-dual/delete-unidad-dual.component */
      "LZoU");

      var UnidadesDualModule = function UnidadesDualModule() {
        _classCallCheck(this, UnidadesDualModule);
      };

      UnidadesDualModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UnidadesDualModule
      });
      UnidadesDualModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UnidadesDualModule_Factory(t) {
          return new (t || UnidadesDualModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _unidades_dual_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesDualRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnidadesDualModule, {
          declarations: [_unidades_dual_component__WEBPACK_IMPORTED_MODULE_3__["UnidadesDualComponent"], _add_unidad_dual_add_unidad_dual_component__WEBPACK_IMPORTED_MODULE_5__["AddUnidadDualComponent"], _edit_unidad_dual_edit_unidad_dual_component__WEBPACK_IMPORTED_MODULE_6__["EditUnidadDualComponent"], _delete_unidad_dual_delete_unidad_dual_component__WEBPACK_IMPORTED_MODULE_7__["DeleteUnidadDualComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _unidades_dual_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesDualRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnidadesDualModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_unidades_dual_component__WEBPACK_IMPORTED_MODULE_3__["UnidadesDualComponent"], _add_unidad_dual_add_unidad_dual_component__WEBPACK_IMPORTED_MODULE_5__["AddUnidadDualComponent"], _edit_unidad_dual_edit_unidad_dual_component__WEBPACK_IMPORTED_MODULE_6__["EditUnidadDualComponent"], _delete_unidad_dual_delete_unidad_dual_component__WEBPACK_IMPORTED_MODULE_7__["DeleteUnidadDualComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _unidades_dual_routing_module__WEBPACK_IMPORTED_MODULE_2__["UnidadesDualRoutingModule"], _modules_crud_material_crud_material_module__WEBPACK_IMPORTED_MODULE_4__["CrudMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=unidades-dual-unidades-dual-module-es5.js.map
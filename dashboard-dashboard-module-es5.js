function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard/dashboard.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard/dashboard.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDashboardDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"selectAType pt-0 bg-grey\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-lg-6\">\n      <a class=\"hovover\">\n        <div class=\"detailWrapCommon\">\n          <div class=\"text-center w-100\">\n            <h3 class=\"H300 semibold\">Total Inquiries</h3>\n            <div class=\"dashboard-val\">{{ data.totalInquiry }}</div>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"col-md-6 col-lg-6\">\n      <a class=\"hovover\">\n        <div class=\"detailWrapCommon\">\n          <div class=\"text-center w-100\">\n            <h3 class=\"H300 semibold\">Total Registration Requests</h3>\n            <div class=\"dashboard-val\">{{ data.totalRequest }}</div>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"col-md-6 col-lg-6\">\n      <a class=\"hovover\">\n        <div class=\"detailWrapCommon\">\n          <div class=\"text-center w-100\">\n            <h3 class=\"H300 semibold\">Total Approved Registrations</h3>\n            <div class=\"dashboard-val\">{{ data.totalApprovedDoctors }}</div>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"col-md-6 col-lg-6\">\n      <a class=\"hovover\">\n        <div class=\"detailWrapCommon\">\n          <div class=\"text-center w-100\">\n            <h3 class=\"H300 semibold\">\n              Average Time taken by clinician to accept a request\n            </h3>\n            <div class=\"dashboard-val\">\n              {{ data.avgAcceptanceTime }}\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"right-content-Wrap bg-grey\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        Clinicians Average Report\n        <div class=\"ml-auto\"></div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-12 text-right\">\n            <div\n              class=\"filterWrap d-flex align-items-center justify-content-end\"\n            ></div>\n          </div>\n        </div>\n\n        <ul\n          ngbNav\n          #nav=\"ngbNav\"\n          [(activeId)]=\"active\"\n          (activeIdChange)=\"activeIdChange(active)\"\n          class=\"nav-tabs\"\n        >\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink>Average Acceptance Report</a>\n            <ng-template ngbNavContent>\n              <div\n                *ngIf=\"doctors?.length; else nodata\"\n                class=\"table-responsive entity-table\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Clinician Name</th>\n                      <th class=\"\">Clinician Email</th>\n                      <th class=\"\">Average Acceptance Time</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let doctor of doctors; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>{{ doctor?.assignedDoctor?.name }}</td>\n                      <td>{{ doctor?.assignedDoctor?.email }}</td>\n                      <td>\n                        {{\n                          doctor?.avgAcceptaceTime\n                            ? doctor?.avgAcceptaceTime\n                            : \"0.00\"\n                        }}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"doctors\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                ></app-pagination>\n              </div>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink>Average Schedule Report</a>\n            <ng-template ngbNavContent>\n              <div\n                *ngIf=\"doctorSchedules?.length; else nodata\"\n                class=\"table-responsive entity-table\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Clinician Name</th>\n                      <th class=\"\">Clinician Email</th>\n                      <th class=\"\">Average Schedule Time</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let doctor of doctorSchedules; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>{{ doctor?.assignedDoctor?.name }}</td>\n                      <td>{{ doctor?.assignedDoctor?.email }}</td>\n                      <td>\n                        {{\n                          doctor?.avgScheduleTime\n                            ? doctor?.avgScheduleTime\n                            : \"0.00\"\n                        }}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"doctorSchedules\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                ></app-pagination>\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n        <ng-template #nodata>\n          <div class=\"noData\">No Records found</div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppAdminDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var src_app_core_resolvers_dashboard_data_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/resolvers/dashboard-data.resolver */
    "./src/app/core/resolvers/dashboard-data.resolver.ts");

    var routes = [{
      path: "",
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      resolve: {
        dashboardData: src_app_core_resolvers_dashboard_data_resolver__WEBPACK_IMPORTED_MODULE_4__["DashboardDataResolver"]
      }
    }, {
      path: "**",
      redirectTo: "",
      pathMatch: "full"
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppAdminDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/admin/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/admin/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
      bootstrap: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.service.ts ***!
    \******************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppAdminDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/constants/api-endpoints */
    "./src/app/core/constants/api-endpoints.ts");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(http) {
        _classCallCheck(this, DashboardService);

        this.http = http;
      } // get dashboard data results


      _createClass(DashboardService, [{
        key: "getDashboardData",
        value: function getDashboardData() {
          return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoints"].dashboard);
        } // get each doctors accepted time

      }, {
        key: "getDoctorsAcceptedTime",
        value: function getDoctorsAcceptedTime(filters) {
          var params = filters;
          return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoints"].doctorAcceptTime, {
            params: params
          });
        } // get each doctors averahge schedule appointment time

      }, {
        key: "getDoctorsAvgScheduleTime",
        value: function getDoctorsAvgScheduleTime(filters) {
          var params = filters;
          return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoints"].doctorAvgScheduleTime, {
            params: params
          });
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], DashboardService);
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard/dashboard.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard/dashboard.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDashboardDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".selectAType .detailWrapCommon {\n  /* height: 200px; */\n  display: flex;\n}\n\n.selectAType a {\n  text-decoration: none;\n}\n\n.detailWrapCommon {\n  border-radius: 8px;\n  padding: 25px;\n  margin: 25px;\n  background: #fdfdfd;\n  border: 2px solid #e8e8e8;\n  cursor: auto;\n}\n\n.detailWrapCommon .heading {\n  display: flex;\n  align-items: flex-start;\n  padding-right: 10px;\n}\n\n.detailWrapCommon.border-CACCCF {\n  border: 2px solid #cacccf;\n}\n\n.H300 {\n  font-size: 1.3rem;\n  color: #1b346a;\n}\n\n.dashboard-val {\n  color: #1b346a;\n  font-size: 24px;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.right-content-Wrap {\n  padding-top: 0 !important;\n}\n\n.noData {\n  text-align: center;\n  margin: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdEFUeXBlIC5kZXRhaWxXcmFwQ29tbW9uIHtcbiAgLyogaGVpZ2h0OiAyMDBweDsgKi9cbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlbGVjdEFUeXBlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW46IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5kZXRhaWxXcmFwQ29tbW9uIC5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uZGV0YWlsV3JhcENvbW1vbi5ib3JkZXItQ0FDQ0NGIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2NhY2NjZjtcbn1cblxuLkgzMDAge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICMxYjM0NmE7XG59XG5cbi5kYXNoYm9hcmQtdmFsIHtcbiAgY29sb3I6ICMxYjM0NmE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmlnaHQtY29udGVudC1XcmFwIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5ub0RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard/dashboard.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard/dashboard.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/admin/dashboard/dashboard.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboardService, activatedRoute) {
        var _this = this;

        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.activatedRoute = activatedRoute;
        this.doctors = [];
        this.currentPage = 1;
        this.totalRecords = 0;
        this.searchText = "";
        this.active = 1;
        this.doctorSchedules = [];
        this.activatedRoute.data.subscribe(function (data) {
          _this.data = data.dashboardData.data;
          var hours = Math.floor(_this.data.avgAcceptanceTime / 60);
          var minutes = _this.data.avgAcceptanceTime % 60;
          _this.data.avgAcceptanceTime = _this.convertSeconds(_this.data.avgAcceptanceTime);
        });
      }

      _createClass(DashboardComponent, [{
        key: "activeIdChange",
        value: function activeIdChange(activeId) {
          this.currentPage = 1;

          if (activeId === 1) {
            this.getDoctorsAcceptedTime({});
          } else {
            this.getDoctorsScheduleTime({});
          }
        }
      }, {
        key: "convertSeconds",
        value: function convertSeconds(d) {
          d = Number(d);
          var h = Math.floor(d / 3600);
          var m = Math.floor(d % 3600 / 60);
          var s = Math.floor(d % 3600 % 60);
          var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
          var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
          var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
          return hDisplay + mDisplay + sDisplay;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDoctorsAcceptedTime({});
        } // get doctors request accepted time

      }, {
        key: "getDoctorsAcceptedTime",
        value: function getDoctorsAcceptedTime(filter) {
          var _this2 = this;

          filter.search = this.searchText;
          filter.pageNumber = this.currentPage;
          this.dashboardService.getDoctorsAcceptedTime(filter).subscribe(function (data) {
            data.data.data.forEach(function (item) {
              item.avgAcceptaceTime = _this2.convertSeconds(item.avgAcceptaceTime ? item.avgAcceptaceTime : 0);
            });
            _this2.doctors = data.data.data;
            _this2.totalRecords = data.data.count;
          });
        } // get doctors request avg scehdule time

      }, {
        key: "getDoctorsScheduleTime",
        value: function getDoctorsScheduleTime(filter) {
          var _this3 = this;

          filter.search = this.searchText;
          filter.pageNumber = this.currentPage;
          this.dashboardService.getDoctorsAvgScheduleTime(filter).subscribe(function (data) {
            data.data.data.forEach(function (item) {
              item.avgScheduleTime = _this3.convertSeconds(item.avgScheduleTime ? item.avgScheduleTime : 0);
            });
            _this3.doctorSchedules = data.data.data;
            _this3.totalRecords = data.data.count;
          });
        } // method called via event emitter from pagination component

      }, {
        key: "clickPage",
        value: function clickPage(pageNo) {
          this.currentPage = pageNo;

          if (this.active === 1) {
            this.getDoctorsAcceptedTime({});
          } else {
            this.getDoctorsScheduleTime({});
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/admin/dashboard/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/core/resolvers/dashboard-data.resolver.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/resolvers/dashboard-data.resolver.ts ***!
    \***********************************************************/

  /*! exports provided: DashboardDataResolver */

  /***/
  function srcAppCoreResolversDashboardDataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardDataResolver", function () {
      return DashboardDataResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_admin_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/admin/dashboard/dashboard.service */
    "./src/app/admin/dashboard/dashboard.service.ts");

    var DashboardDataResolver = /*#__PURE__*/function () {
      function DashboardDataResolver(dashboard) {
        _classCallCheck(this, DashboardDataResolver);

        this.dashboard = dashboard;
      }

      _createClass(DashboardDataResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.dashboard.getDashboardData().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }]);

      return DashboardDataResolver;
    }();

    DashboardDataResolver.ctorParameters = function () {
      return [{
        type: src_app_admin_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]
      }];
    };

    DashboardDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], DashboardDataResolver);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map
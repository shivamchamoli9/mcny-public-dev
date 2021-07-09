(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/cancelled-report/cancelled-report.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/cancelled-report/cancelled-report.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        Cancelled Requests\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-12 text-right\">\n            <div\n              class=\"filterWrap d-flex align-items-center justify-content-end\"\n            >\n              <form class=\"form-inline\">\n                <div class=\"form-group hidden\">\n                  <div class=\"input-group\">\n                    <input\n                      name=\"datepicker\"\n                      class=\"form-control\"\n                      ngbDatepicker\n                      #datepicker=\"ngbDatepicker\"\n                      [autoClose]=\"'outside'\"\n                      (dateSelect)=\"onDateSelection($event)\"\n                      [displayMonths]=\"2\"\n                      [dayTemplate]=\"t\"\n                      outsideDays=\"hidden\"\n                      [startDate]=\"fromDate!\"\n                    />\n                    <ng-template #t let-date let-focused=\"focused\">\n                      <span\n                        class=\"custom-day\"\n                        [class.focused]=\"focused\"\n                        [class.range]=\"isRange(date)\"\n                        [class.faded]=\"isHovered(date) || isInside(date)\"\n                        (mouseenter)=\"hoveredDate = date\"\n                        (mouseleave)=\"hoveredDate = null\"\n                      >\n                        {{ date.day }}\n                      </span>\n                    </ng-template>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpFromDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpFromDate\"\n                      [value]=\"formatter.format(fromDate)\"\n                      (input)=\"\n                        fromDate = validateInput(fromDate, dpFromDate.value)\n                      \"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group ml-2\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpToDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpToDate\"\n                      [value]=\"formatter.format(toDate)\"\n                      (input)=\"toDate = validateInput(toDate, dpToDate.value)\"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <div>\n                <input\n                  (click)=\"getCancelledReports(1)\"\n                  type=\"button\"\n                  value=\"Search\"\n                  class=\"btn-blue-bg submitBtn\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div\n          class=\"table-responsive entity-table\"\n          *ngIf=\"allRequests.length; else nodata\"\n        >\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th class=\"\">#</th>\n                <th class=\"\">Client Name</th>\n                <th class=\"\">Email</th>\n                <th class=\"\">Contact</th>\n                <th>Cancelled At</th>\n                <th>Cancelled By</th>\n                <th>Currently Assigned</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let request of allRequests; let i = index\">\n                <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                <td>{{ request.patientDetails.clientName | titlecase }}</td>\n                <td>{{ request.patientDetails.email }}</td>\n                <td>\n                  {{ request.patientDetails.countryCode }}\n                  {{ request.patientDetails.phoneNumber }}\n                </td>\n                <td>{{ request.cancelTime | date: \"medium\" }}</td>\n                <td>{{ request.assignedDoctor.name | titlecase }}</td>\n                <td>\n                  {{\n                    request.assignedNow?.name\n                      ? request.assignedNow?.name\n                      : (\"Not Assigned\" | titlecase)\n                  }}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <app-pagination\n            [totalRecords]=\"totalRecords\"\n            [data]=\"allRequests\"\n            [currentPage]=\"currentPage\"\n            (clickedPage)=\"clickPage($event)\"\n          >\n          </app-pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #nodata>\n  <div class=\"noData\">No Records found</div>\n</ng-template>\n\n<!-- <div class=\"col-md-4 col-lg-4 chartBox\">\n      <div class=\"text-center\">\n        <h3 class=\"H300 semibold\">Sources</h3>\n        <div style=\"display: block;\">\n          <canvas baseChart [data]=\"_sPieChartData\" [labels]=\"_sPieChartLable\" [chartType]=\"_sPieChartType\"\n            [options]=\"chartOptions\" [plugins]=\"charPlugin\" [legend]=\"chartLegend\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-lg-4 chartBox\">\n      <div class=\"text-center\">\n        <h3 class=\"H300 semibold\">All Requests</h3>\n        <div style=\"display: block;\">\n          <canvas baseChart [data]=\"_allPieChartData\" [labels]=\"_allPieChartLable\" [chartType]=\"_allPieChartType\"\n            [options]=\"chartOptions\" [plugins]=\"charPlugin\" [legend]=\"chartLegend\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-lg-4 chartBox\">\n      <div class=\"text-center\">\n        <h3 class=\"H300 semibold\">Last 2 Days</h3>\n        <div style=\"display: block;\">\n          <canvas baseChart [data]=\"_last2daysPieChartData\" [labels]=\"_last2daysPieChartLable\"\n            [chartType]=\"_last2daysPieChartType\" [options]=\"chartOptions\" [plugins]=\"charPlugin\" [legend]=\"chartLegend\">\n          </canvas>\n        </div>\n      </div>\n    </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/high-ed-users/high-ed-users.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/high-ed-users/high-ed-users.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        POP High Utilizer\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-12 text-right\">\n            <div\n              class=\"filterWrap d-flex align-items-center justify-content-end\"\n            >\n              <form class=\"form-inline\">\n                <div class=\"form-group hidden\">\n                  <div class=\"input-group\">\n                    <input\n                      name=\"datepicker\"\n                      class=\"form-control\"\n                      ngbDatepicker\n                      #datepicker=\"ngbDatepicker\"\n                      [autoClose]=\"'outside'\"\n                      (dateSelect)=\"onDateSelection($event)\"\n                      [displayMonths]=\"2\"\n                      [dayTemplate]=\"t\"\n                      outsideDays=\"hidden\"\n                      [startDate]=\"fromDate!\"\n                    />\n                    <ng-template #t let-date let-focused=\"focused\">\n                      <span\n                        class=\"custom-day\"\n                        [class.focused]=\"focused\"\n                        [class.range]=\"isRange(date)\"\n                        [class.faded]=\"isHovered(date) || isInside(date)\"\n                        (mouseenter)=\"hoveredDate = date\"\n                        (mouseleave)=\"hoveredDate = null\"\n                      >\n                        {{ date.day }}\n                      </span>\n                    </ng-template>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpFromDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpFromDate\"\n                      [value]=\"formatter.format(fromDate)\"\n                      (input)=\"\n                        fromDate = validateInput(fromDate, dpFromDate.value)\n                      \"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group ml-2\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpToDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpToDate\"\n                      [value]=\"formatter.format(toDate)\"\n                      (input)=\"toDate = validateInput(toDate, dpToDate.value)\"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <div>\n                <input\n                  (click)=\"getHighUserOfED(1)\"\n                  type=\"button\"\n                  value=\"Search\"\n                  class=\"btn-blue-bg submitBtn\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive entity-table\">\n          <div\n            class=\"table-responsive entity-table\"\n            *ngIf=\"allRequests?.length; else nodata\"\n          >\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th class=\"\">#</th>\n                  <th class=\"\">Name</th>\n                  <th class=\"\">Email</th>\n                  <th class=\"\">Contact</th>\n                  <th>Reqeust Date</th>\n                  <th>Accepted By</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let request of allRequests; let i = index\">\n                  <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                  <td>{{ request.clientName | titlecase }}</td>\n                  <td>{{ request.email }}</td>\n                  <td>\n                    {{ request.countryCode }}\n                    {{ request.phoneNumber }}\n                  </td>\n                  <td>{{ request.createdAt | date: \"medium\" }}</td>\n                  <td>\n                    {{\n                      request?.enquiryRequests[0]?.assignedDoctor?.name || \"N/A\"\n                    }}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <app-pagination\n              [totalRecords]=\"totalRecords\"\n              [data]=\"allRequests\"\n              [currentPage]=\"currentPage\"\n              (clickedPage)=\"clickPage($event)\"\n            >\n            </app-pagination>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #nodata>\n  <div class=\"noData\">No Records found</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap bg-grey\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        All Requests\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-12 text-right\">\n            <div\n              class=\"filterWrap d-flex align-items-center justify-content-end\"\n            >\n              <form class=\"form-inline\">\n                <div class=\"form-group hidden\">\n                  <div class=\"input-group\">\n                    <input\n                      name=\"datepicker\"\n                      class=\"form-control\"\n                      ngbDatepicker\n                      #datepicker=\"ngbDatepicker\"\n                      [autoClose]=\"'outside'\"\n                      (dateSelect)=\"onDateSelection($event)\"\n                      [displayMonths]=\"2\"\n                      [dayTemplate]=\"t\"\n                      outsideDays=\"hidden\"\n                      [startDate]=\"fromDate!\"\n                    />\n                    <ng-template #t let-date let-focused=\"focused\">\n                      <span\n                        class=\"custom-day\"\n                        [class.focused]=\"focused\"\n                        [class.range]=\"isRange(date)\"\n                        [class.faded]=\"isHovered(date) || isInside(date)\"\n                        (mouseenter)=\"hoveredDate = date\"\n                        (mouseleave)=\"hoveredDate = null\"\n                      >\n                        {{ date.day }}\n                      </span>\n                    </ng-template>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpFromDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpFromDate\"\n                      [value]=\"formatter.format(fromDate)\"\n                      (input)=\"\n                        fromDate = validateInput(fromDate, dpFromDate.value)\n                      \"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group ml-2\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpToDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpToDate\"\n                      [value]=\"formatter.format(toDate)\"\n                      (input)=\"toDate = validateInput(toDate, dpToDate.value)\"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <div>\n                <input\n                  (click)=\"refreshData()\"\n                  type=\"button\"\n                  value=\"Search\"\n                  class=\"btn-blue-bg submitBtn\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"selectAType pt-0\">\n          <div class=\"row\">\n            <div class=\"col-md-1 col-lg-1 chartBox\"></div>\n            <div class=\"col-md-10 col-lg-10 chartBox\">\n              <div class=\"text-center\">\n                <h3 class=\"H300 semibold\">Inquiries</h3>\n                <div style=\"display: block\">\n                  <canvas\n                    baseChart\n                    [datasets]=\"_pBarChartData\"\n                    [labels]=\"_pBarChartLabels\"\n                    [chartType]=\"_pBarChartType\"\n                    [options]=\"chartOptions\"\n                    [plugins]=\"charPlugin\"\n                    [legend]=\"chartLegend\"\n                  >\n                  </canvas>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-1 col-lg-1 chartBox\"></div>\n            <div class=\"col-md-12 col-lg-12 note\">\n              Note: Listing can have multiple values, as Single Inquiry was sent\n              to multiple Clinicains. Showing details with individual provider.\n            </div>\n          </div>\n        </div>\n\n        <ul\n          ngbNav\n          #nav=\"ngbNav\"\n          [(activeId)]=\"active\"\n          (activeIdChange)=\"activeIdChange(active)\"\n          class=\"nav-tabs\"\n        >\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink>Active</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"allRequests?.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Assigned Provider</th>\n                      <th>DOB</th>\n                      <th>Insurance Provider</th>\n                      <th>Insurance Number</th>\n                      <th>City</th>\n                      <th>Date</th>\n                      <th>Download</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of allRequests; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails.email }}</td>\n                      <td>\n                        {{ request.patientDetails.countryCode }}\n                        {{ request.patientDetails.phoneNumber }}\n                      </td>\n\n                      <td>{{ request.assignedDoctor.name | titlecase }}</td>\n                      <td>\n                        {{ request.patientDetails.dob }}\n                      </td>\n                      <td>\n                        {{\n                          request.patientDetails?.insuranceProvider?.insurance\n                        }}\n                      </td>\n                      <td>\n                        {{ request.patientDetails.insuranceNumber }}\n                      </td>\n                      <td>{{ request.patientDetails.city | titlecase }}</td>\n                      <td>{{ request.createdAt | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"allRequests\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink>Pending</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"allRequests?.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Pending Since</th>\n                      <th>Assigned Provider</th>\n                      <th>DOB</th>\n                      <th>Insurance Provider</th>\n                      <th>Insurance Number</th>\n                      <th>City</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of allRequests; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails.email }}</td>\n                      <td>\n                        {{ request.patientDetails.countryCode }}\n                        {{ request.patientDetails.phoneNumber }}\n                      </td>\n                      <td>{{ request.createdAt | date: \"medium\" }}</td>\n\n                      <td>\n                        {{\n                          request.patientDetails.enquiryRequests[0]\n                            ?.assignedDoctor.name\n                        }}\n                        <div\n                          ngbDropdown\n                          class=\"d-inline-block\"\n                          style=\"cursor: pointer\"\n                          *ngIf=\"\n                            request.patientDetails.enquiryRequests.length > 1\n                          \"\n                        >\n                          <span\n                            style=\"cursor: pointer\"\n                            id=\"dropdownBasic1\"\n                            ngbDropdownToggle\n                          >\n                            ...\n                          </span>\n                          <div\n                            class=\"ngbToggleDropdown\"\n                            ngbDropdownMenu\n                            aria-labelledby=\"dropdownBasic1\"\n                          >\n                            <div\n                              class=\"dropdownItem\"\n                              *ngFor=\"\n                                let doc of request.patientDetails\n                                  ?.enquiryRequests;\n                                let i = index\n                              \"\n                            >\n                              {{ doc.assignedDoctor?.name }}\n                            </div>\n                          </div>\n                        </div>\n                      </td>\n                      <td>\n                        {{ request.patientDetails.dob }}\n                      </td>\n                      <td>\n                        {{\n                          request.patientDetails?.insuranceProvider?.insurance\n                        }}\n                      </td>\n                      <td>\n                        {{ request.patientDetails.insuranceNumber }}\n                      </td>\n                      <td>{{ request.patientDetails.city | titlecase }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"allRequests\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"3\">\n            <a ngbNavLink>Cancelled</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"allRequests?.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Cancelled At</th>\n                      <th>Cancelled By</th>\n                      <th>DOB</th>\n                      <th>Insurance Provider</th>\n                      <th>Insurance Number</th>\n                      <th>City</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of allRequests; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>{{ request.patientDetails.clientName }}</td>\n                      <td>{{ request.patientDetails.email }}</td>\n                      <td>\n                        {{ request.patientDetails.countryCode }}\n                        {{ request.patientDetails.phoneNumber }}\n                      </td>\n                      <td>{{ request.cancelTime | date: \"medium\" }}</td>\n                      <td>\n                        {{\n                          request.patientDetails.enquiryRequests[0]\n                            ?.assignedDoctor.name\n                        }}\n                        <div\n                          ngbDropdown\n                          class=\"d-inline-block\"\n                          style=\"cursor: pointer\"\n                          *ngIf=\"\n                            request.patientDetails.enquiryRequests.length > 1\n                          \"\n                        >\n                          <span\n                            style=\"cursor: pointer\"\n                            id=\"dropdownBasic1\"\n                            ngbDropdownToggle\n                          >\n                            ...\n                          </span>\n                          <div\n                            class=\"ngbToggleDropdown\"\n                            ngbDropdownMenu\n                            aria-labelledby=\"dropdownBasic1\"\n                          >\n                            <div\n                              class=\"dropdownItem\"\n                              *ngFor=\"\n                                let doc of request.patientDetails\n                                  ?.enquiryRequests;\n                                let i = index\n                              \"\n                            >\n                              {{ doc.assignedDoctor?.name }}\n                            </div>\n                          </div>\n                        </div>\n                      </td>\n                      <td>\n                        {{ request.patientDetails.dob }}\n                      </td>\n                      <td>\n                        {{\n                          request.patientDetails?.insuranceProvider?.insurance\n                        }}\n                      </td>\n                      <td>\n                        {{ request.patientDetails.insuranceNumber }}\n                      </td>\n                      <td>{{ request.patientDetails.city | titlecase }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"allRequests\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"4\">\n            <a ngbNavLink>Rejected</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"allRequests?.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Rejected At</th>\n                      <th>Rejected By</th>\n                      <th>DOB</th>\n                      <th>Insurance Provider</th>\n                      <th>Insurance Number</th>\n                      <th>City</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of allRequests; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails.email }}</td>\n                      <td>\n                        {{ request.patientDetails.countryCode }}\n                        {{ request.patientDetails.phoneNumber }}\n                      </td>\n                      <td>{{ request.rejectTime | date: \"medium\" }}</td>\n                      <td>\n                        {{\n                          request.patientDetails.enquiryRequests[0]\n                            ?.assignedDoctor.name\n                        }}\n                        <div\n                          ngbDropdown\n                          class=\"d-inline-block\"\n                          style=\"cursor: pointer\"\n                          *ngIf=\"\n                            request.patientDetails?.enquiryRequests?.length > 1\n                          \"\n                        >\n                          <span\n                            style=\"cursor: pointer\"\n                            id=\"dropdownBasic1\"\n                            ngbDropdownToggle\n                          >\n                            ...\n                          </span>\n                          <div\n                            class=\"ngbToggleDropdown\"\n                            ngbDropdownMenu\n                            aria-labelledby=\"dropdownBasic1\"\n                          >\n                            <div\n                              class=\"dropdownItem\"\n                              *ngFor=\"\n                                let doc of request.patientDetails\n                                  ?.enquiryRequests;\n                                let i = index\n                              \"\n                            >\n                              {{ doc.assignedDoctor?.name }}\n                            </div>\n                          </div>\n                        </div>\n                      </td>\n                      <td>\n                        {{ request.patientDetails.dob }}\n                      </td>\n                      <td>\n                        {{\n                          request.patientDetails?.insuranceProvider?.insurance\n                        }}\n                      </td>\n                      <td>\n                        {{ request.patientDetails.insuranceNumber }}\n                      </td>\n                      <td>{{ request.patientDetails.city | titlecase }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"allRequests\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #nodata>\n  <div class=\"noData\">No Data</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/new-requests/new-requests.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/new-requests/new-requests.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        New Requests\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-12 text-right\">\n            <div\n              class=\"filterWrap d-flex align-items-center justify-content-end\"\n            >\n              <!-- <form class=\"form-inline\">\n                <div class=\"form-group hidden\">\n                  <div class=\"input-group\">\n                    <input\n                      name=\"datepicker\"\n                      class=\"form-control\"\n                      ngbDatepicker\n                      #datepicker=\"ngbDatepicker\"\n                      [autoClose]=\"'outside'\"\n                      (dateSelect)=\"onDateSelection($event)\"\n                      [displayMonths]=\"2\"\n                      [dayTemplate]=\"t\"\n                      outsideDays=\"hidden\"\n                      [startDate]=\"fromDate!\"\n                    />\n                    <ng-template #t let-date let-focused=\"focused\">\n                      <span\n                        class=\"custom-day\"\n                        [class.focused]=\"focused\"\n                        [class.range]=\"isRange(date)\"\n                        [class.faded]=\"isHovered(date) || isInside(date)\"\n                        (mouseenter)=\"hoveredDate = date\"\n                        (mouseleave)=\"hoveredDate = null\"\n                      >\n                        {{ date.day }}\n                      </span>\n                    </ng-template>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpFromDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpFromDate\"\n                      [value]=\"formatter.format(fromDate)\"\n                      (input)=\"\n                        fromDate = validateInput(fromDate, dpFromDate.value)\n                      \"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group ml-2\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpToDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpToDate\"\n                      [value]=\"formatter.format(toDate)\"\n                      (input)=\"toDate = validateInput(toDate, dpToDate.value)\"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <div>\n                <input\n                  (click)=\"getCancelledReports(1)\"\n                  type=\"button\"\n                  value=\"Search\"\n                  class=\"btn-blue-bg submitBtn\"\n                />\n              </div> -->\n            </div>\n          </div>\n        </div>\n        <div\n          class=\"table-responsive entity-table\"\n          *ngIf=\"allRequests?.length; else nodata\"\n        >\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th class=\"\">#</th>\n                <th class=\"\">Client Name</th>\n                <th class=\"\">Email</th>\n                <th class=\"\">Contact</th>\n                <th>Request Date</th>\n                <th>DOB</th>\n                <th>Insurance Provider</th>\n                <th>Insurance Number</th>\n                <th>City</th>\n                <th>File</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let request of allRequests; let i = index\">\n                <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                <td>\n                  {{ request?.clientName | titlecase }}\n                </td>\n                <td>{{ request?.email }}</td>\n                <td>\n                  {{ request?.countryCode }}\n                  {{ request?.phoneNumber }}\n                </td>\n                <td>{{ request.createdAt | date: \"medium\" }}</td>\n\n                <td>\n                  {{ request?.dob | date: \"yyyy-MM-dd\" }}\n                </td>\n                <td>\n                  {{ request?.insuranceProvider?.insurance }}\n                </td>\n                <td>\n                  {{ request?.insuranceNumber }}\n                </td>\n                <td>{{ request?.city | titlecase }}</td>\n                <td>\n                  <a\n                    class=\"blue-btn col-white\"\n                    href=\"{{ bucketUrl }}/{{ request?.insuranceAsset?.path }}{{\n                      request?.insuranceAsset?.extension\n                    }}\"\n                  >\n                    <!-- <a class=\"blue-btn col-white\" (click)=\"download()\"> -->\n                    Download\n                  </a>\n                </td>\n                <td>\n                  <div\n                    style=\"display: flex\"\n                    *ngIf=\"request.status !== 'ACTIVE'; else activeCon\"\n                  >\n                    <button\n                      class=\"green-btn\"\n                      (click)=\"changeStatus(request.id, 'ACTIVE')\"\n                    >\n                      Approve\n                    </button>\n                    <button\n                      class=\"red-btn ml-10\"\n                      (click)=\"changeStatus(request.id, 'REJECTED')\"\n                    >\n                      Reject\n                    </button>\n                  </div>\n                  <ng-template #activeCon\n                    ><span class=\"col-green\">Approved</span></ng-template\n                  >\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <app-pagination\n            [totalRecords]=\"totalRecords\"\n            [data]=\"allRequests\"\n            [currentPage]=\"currentPage\"\n            (clickedPage)=\"clickPage($event)\"\n          >\n          </app-pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #nodata>\n  <div class=\"noData\">No Records found</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        Provider's Report : {{ title }}\n      </div>\n      <div class=\"card-body\">\n        <div class=\"selectAType pt-0\">\n          <div class=\"row\">\n            <div class=\"col-md-2 col-lg-2 chartBox\"></div>\n            <div class=\"col-md-8 col-lg-8 chartBox\">\n              <div class=\"text-center\">\n                <h3 class=\"H300 semibold\">Download and Cases</h3>\n                <div\n                  style=\"display: block\"\n                  *ngIf=\"_chartLabels.length && _chartData.length\"\n                >\n                  <canvas\n                    baseChart\n                    [data]=\"_chartData\"\n                    [labels]=\"_chartLabels\"\n                    [chartType]=\"_charType\"\n                    [options]=\"chartOptions\"\n                    [plugins]=\"charPlugin\"\n                    [legend]=\"chartLegend\"\n                  >\n                  </canvas>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-lg-2 chartBox\"></div>\n            <div class=\"col-md-12 col-lg-12 note\" *ngIf=\"active == 2\">\n              Note: Listing can have more values than graph, as single case\n              could have been recieved mutiple times as in case of Cancellation\n              from previous provider.\n            </div>\n            <div class=\"col-md-12 col-lg-12 note\" *ngIf=\"active == 1\">\n              Note: Values in graph and details in listing can be different, as\n              provider might have cancelled the case after downloading!.\n            </div>\n          </div>\n        </div>\n\n        <ul\n          ngbNav\n          #nav=\"ngbNav\"\n          [(activeId)]=\"active\"\n          (activeIdChange)=\"activeIdChange(active)\"\n          class=\"nav-tabs\"\n        >\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink>Downloaded</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"doctor && doctor.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Accepted At</th>\n                      <th>Appointment Scheduled</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of doctor; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails.email }}</td>\n                      <td>\n                        {{\n                          request.patientDetails.phoneNumber\n                            ? request.patientDetails.countryCode\n                            : \"\"\n                        }}\n                        {{ request.patientDetails.phoneNumber }}\n                      </td>\n                      <td>\n                        {{ request.acceptTime | date: \"medium\" }}\n                      </td>\n                      <td>\n                        <span\n                          *ngIf=\"request?.appointmentTime; else noAptTime\"\n                          >{{ request?.appointmentTime | date: \"medium\" }}</span\n                        >\n                        <ng-template #noAptTime>Not Scheduled</ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"doctor\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink>Total Cases Received</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"doctor && doctor.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Pending Since</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of doctor; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails.email }}</td>\n                      <td>\n                        {{\n                          request.patientDetails.phoneNumber\n                            ? request.patientDetails.countryCode\n                            : \"\"\n                        }}\n                        {{ request.patientDetails.phoneNumber }}\n                      </td>\n                      <td>{{ request.createdAt | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"doctor\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"3\">\n            <a ngbNavLink>Cancelled</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"doctor && doctor.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Cancelled At</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of doctor; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails.email }}</td>\n                      <td>\n                        {{\n                          request.patientDetails.phoneNumber\n                            ? request.patientDetails.countryCode\n                            : \"\"\n                        }}\n                        {{ request.patientDetails.phoneNumber }}\n                      </td>\n                      <td>{{ request.cancelTime | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"doctor\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"4\">\n            <a ngbNavLink>Rejected</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"doctor && doctor.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Rejected At</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of doctor; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails.email }}</td>\n                      <td>\n                        {{\n                          request.patientDetails.phoneNumber\n                            ? request.patientDetails.countryCode\n                            : \"\"\n                        }}\n                        {{ request.patientDetails.phoneNumber }}\n                      </td>\n                      <td>{{ request.rejectTime | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"doctor\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #nodata>\n  <div class=\"noData\">No Data</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/providers-listing/providers-listing.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/providers-listing/providers-listing.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        Providers Report\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-12 text-right\">\n            <div\n              class=\"filterWrap d-flex align-items-center justify-content-end\"\n            >\n              <form class=\"form-inline\">\n                <div class=\"form-group hidden\">\n                  <div class=\"input-group\">\n                    <input\n                      name=\"datepicker\"\n                      class=\"form-control\"\n                      ngbDatepicker\n                      #datepicker=\"ngbDatepicker\"\n                      [autoClose]=\"'outside'\"\n                      (dateSelect)=\"onDateSelection($event)\"\n                      [displayMonths]=\"2\"\n                      [dayTemplate]=\"t\"\n                      outsideDays=\"hidden\"\n                      [startDate]=\"fromDate!\"\n                    />\n                    <ng-template #t let-date let-focused=\"focused\">\n                      <span\n                        class=\"custom-day\"\n                        [class.focused]=\"focused\"\n                        [class.range]=\"isRange(date)\"\n                        [class.faded]=\"isHovered(date) || isInside(date)\"\n                        (mouseenter)=\"hoveredDate = date\"\n                        (mouseleave)=\"hoveredDate = null\"\n                      >\n                        {{ date.day }}\n                      </span>\n                    </ng-template>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpFromDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpFromDate\"\n                      [value]=\"formatter.format(fromDate)\"\n                      (input)=\"\n                        fromDate = validateInput(fromDate, dpFromDate.value)\n                      \"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group ml-2\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpToDate\n                      class=\"form-control\"\n                      placeholder=\"mm-dd-yyyy\"\n                      name=\"dpToDate\"\n                      [value]=\"formatter.format(toDate)\"\n                      (input)=\"toDate = validateInput(toDate, dpToDate.value)\"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <div>\n                <input\n                  (click)=\"getProvidersList(1)\"\n                  type=\"button\"\n                  value=\"Search\"\n                  class=\"btn-blue-bg submitBtn\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive entity-table\">\n          <!-- <ul\n            ngbNav\n            #nav=\"ngbNav\"\n            [(activeId)]=\"active\"\n            (activeIdChange)=\"activeIdChange(active)\"\n            class=\"nav-tabs\"\n          >\n            <li [ngbNavItem]=\"1\">\n              <a ngbNavLink>Providers Report</a>\n              <ng-template ngbNavContent> -->\n          <div\n            class=\"table-responsive entity-table\"\n            *ngIf=\"allRequests?.length; else nodata\"\n          >\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th class=\"\">#</th>\n                  <th class=\"\">Name</th>\n                  <th class=\"\">Email</th>\n                  <th class=\"\">Contact</th>\n                  <th class=\"\">Gender</th>\n                  <th>Joined At</th>\n                  <th>Availability</th>\n                  <th>More</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let request of allRequests; let i = index\">\n                  <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                  <td>{{ request.name | titlecase }}</td>\n                  <td>{{ request.email }}</td>\n                  <td>{{ request.phoneNumber }}</td>\n                  <td>{{ request.gender | titlecase }}</td>\n                  <td>{{ request.createdAt | date: \"medium\" }}</td>\n                  <td>{{ request.isAvailable ? \"Yes\" : \"No\" }}</td>\n                  <td>\n                    <a\n                      [routerLink]=\"['/admin/reports/provider-detail']\"\n                      [queryParams]=\"{\n                        id: request.id,\n                        title: request.name\n                      }\"\n                      class=\"btn btn-info\"\n                      ><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    </a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <app-pagination\n              [totalRecords]=\"totalRecords\"\n              [data]=\"allRequests\"\n              [currentPage]=\"currentPage\"\n              (clickedPage)=\"clickPage($event)\"\n            >\n            </app-pagination>\n          </div>\n          <!-- </ng-template>\n            </li>\n\n            <li [ngbNavItem]=\"2\">\n              <a ngbNavLink>Schedule Report</a>\n              <ng-template ngbNavContent>\n                <div\n                  class=\"table-responsive entity-table\"\n                  *ngIf=\"allRequests?.length; else nodata\"\n                >\n                  <table class=\"table table-striped\">\n                    <thead>\n                      <tr>\n                        <th class=\"\">#</th>\n                        <th class=\"\">Name</th>\n                        <th class=\"\">Email</th>\n                        <th class=\"\">Contact</th>\n                        <th class=\"\">Gender</th>\n                        <th class=\"\">Zip</th>\n                        <th>Joined At</th>\n                        <th>Availability</th>\n                        <th>More</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let request of allRequests; let i = index\">\n                        <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                        <td>{{ request.name | titlecase }}</td>\n                        <td>{{ request.email }}</td>\n                        <td>{{ request.phoneNumber }}</td>\n                        <td>{{ request.gender | titlecase }}</td>\n                        <td>{{ request.zipcode }}</td>\n                        <td>{{ request.createdAt | date: \"medium\" }}</td>\n                        <td>{{ request.isAvailable ? \"Yes\" : \"No\" }}</td>\n                        <td>\n                          <a\n                            routerLink=\"/admin/reports/provider-detail\"\n                            [queryParams]=\"{\n                              id: request.id,\n                              title: request.name\n                            }\"\n                            class=\"btn btn-info\"\n                            ><i\n                              class=\"fa fa-info-circle\"\n                              aria-hidden=\"true\"\n                            ></i>\n                          </a>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <app-pagination\n                    [totalRecords]=\"totalRecords\"\n                    [data]=\"allRequests\"\n                    [currentPage]=\"currentPage\"\n                    (clickedPage)=\"clickPage($event)\"\n                  >\n                  </app-pagination>\n                </div>\n              </ng-template>\n            </li>\n          </ul> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #nodata>\n  <div class=\"noData\">No Records found</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/rejected-requests/rejected-requests.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/rejected-requests/rejected-requests.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        Rejected Requests\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-12 text-right\">\n            <div\n              class=\"filterWrap d-flex align-items-center justify-content-end\"\n            ></div>\n          </div>\n        </div>\n        <div\n          class=\"table-responsive entity-table\"\n          *ngIf=\"allRequests?.length; else nodata\"\n        >\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th class=\"\">#</th>\n                <th class=\"\">Client Name</th>\n                <th class=\"\">Email</th>\n                <th class=\"\">Contact</th>\n                <th>Request Date</th>\n                <th>DOB</th>\n                <th>Insurance Provider</th>\n                <th>Insurance Number</th>\n                <th>City</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let request of allRequests; let i = index\">\n                <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                <td>\n                  {{ request?.clientName | titlecase }}\n                </td>\n                <td>{{ request?.email }}</td>\n                <td>\n                  {{ request?.countryCode }}\n                  {{ request?.phoneNumber }}\n                </td>\n                <td>{{ request.createdAt | date: \"medium\" }}</td>\n\n                <td>\n                  {{ request?.dob | date: \"yyyy-MM-dd\" }}\n                </td>\n                <td>\n                  {{ request?.insuranceProvider?.insurance }}\n                </td>\n                <td>\n                  {{ request?.insuranceNumber }}\n                </td>\n                <td>{{ request?.city | titlecase }}</td>\n              </tr>\n            </tbody>\n          </table>\n          <app-pagination\n            [totalRecords]=\"totalRecords\"\n            [data]=\"allRequests\"\n            [currentPage]=\"currentPage\"\n            (clickedPage)=\"clickPage($event)\"\n          >\n          </app-pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #nodata>\n  <div class=\"noData\">No Records found</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/sources/sources.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/sources/sources.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        Sources - Details\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row mb-3\">\n          <div class=\"col-md-12 text-right\">\n            <div\n              class=\"filterWrap d-flex align-items-center justify-content-end\"\n            >\n              <form class=\"form-inline\">\n                <div class=\"form-group hidden\">\n                  <div class=\"input-group\">\n                    <input\n                      name=\"datepicker\"\n                      class=\"form-control\"\n                      ngbDatepicker\n                      #datepicker=\"ngbDatepicker\"\n                      [autoClose]=\"'outside'\"\n                      (dateSelect)=\"onDateSelection($event)\"\n                      [displayMonths]=\"2\"\n                      [dayTemplate]=\"t\"\n                      outsideDays=\"hidden\"\n                      [startDate]=\"fromDate!\"\n                    />\n                    <ng-template #t let-date let-focused=\"focused\">\n                      <span\n                        class=\"custom-day\"\n                        [class.focused]=\"focused\"\n                        [class.range]=\"isRange(date)\"\n                        [class.faded]=\"isHovered(date) || isInside(date)\"\n                        (mouseenter)=\"hoveredDate = date\"\n                        (mouseleave)=\"hoveredDate = null\"\n                      >\n                        {{ date.day }}\n                      </span>\n                    </ng-template>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpFromDate\n                      class=\"form-control\"\n                      placeholder=\"yyyy-mm-dd\"\n                      name=\"dpFromDate\"\n                      [value]=\"formatter.format(fromDate)\"\n                      (input)=\"\n                        fromDate = validateInput(fromDate, dpFromDate.value)\n                      \"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group ml-2\">\n                  <div class=\"input-group\">\n                    <input\n                      #dpToDate\n                      class=\"form-control\"\n                      placeholder=\"yyyy-mm-dd\"\n                      name=\"dpToDate\"\n                      [value]=\"formatter.format(toDate)\"\n                      (input)=\"toDate = validateInput(toDate, dpToDate.value)\"\n                    />\n                    <div class=\"input-group-append\">\n                      <button\n                        class=\"btn btn-outline-secondary calendar\"\n                        (click)=\"datepicker.toggle()\"\n                        type=\"button\"\n                      >\n                        <img\n                          class=\"calendarIcon\"\n                          src=\"assets/img/calendarIcon.png\"\n                        />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <div>\n                <input\n                  (click)=\"refreshData()\"\n                  type=\"button\"\n                  value=\"Search\"\n                  class=\"btn-blue-bg submitBtn\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"selectAType pt-0\">\n          <div class=\"row\">\n            <div class=\"col-md-2 col-lg-2 chartBox\"></div>\n            <div class=\"col-md-8 col-lg-8 chartBox\">\n              <div class=\"text-center\">\n                <h3 class=\"H300 semibold\">All Sources</h3>\n                <div style=\"display: block\">\n                  <canvas\n                    baseChart\n                    [data]=\"_sPieChartData\"\n                    [labels]=\"_sPieChartLable\"\n                    [chartType]=\"_sPieChartType\"\n                    [options]=\"chartOptions\"\n                    [plugins]=\"charPlugin\"\n                    [legend]=\"chartLegend\"\n                  >\n                  </canvas>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-lg-2 chartBox\"></div>\n          </div>\n        </div>\n\n        <ul\n          ngbNav\n          #nav=\"ngbNav\"\n          [(activeId)]=\"active\"\n          (activeIdChange)=\"activeIdChange(active)\"\n          class=\"nav-tabs\"\n        >\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink>Social Media</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"sources.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Submitted on</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of sources; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>{{ item.clientName | titlecase }}</td>\n                      <td>{{ item.email }}</td>\n                      <td>\n                        <span *ngIf=\"item.phoneNumber\"\n                          >{{ item.countryCode }} {{ item.phoneNumber }}</span\n                        >\n                      </td>\n                      <td>{{ item.createdAt | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"sources\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink>Care Cordinator</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"sources.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Submitted on</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of sources; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>{{ item.clientName | titlecase }}</td>\n                      <td>{{ item.email }}</td>\n                      <td>\n                        <span *ngIf=\"item.phoneNumber\"\n                          >{{ item.countryCode }} {{ item.phoneNumber }}</span\n                        >\n                      </td>\n                      <td>{{ item.createdAt | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"sources\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"3\">\n            <a ngbNavLink>Psychology Today</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"sources.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Submitted on</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of sources; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>{{ item.clientName | titlecase }}</td>\n                      <td>{{ item.email }}</td>\n                      <td>\n                        <span *ngIf=\"item.phoneNumber\"\n                          >{{ item.countryCode }} {{ item.phoneNumber }}</span\n                        >\n                      </td>\n                      <td>{{ item.createdAt | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"sources\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"4\">\n            <a ngbNavLink>Flyer/Advertisement</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"sources.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Submitted on</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of sources; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>{{ item.clientName | titlecase }}</td>\n                      <td>{{ item.email }}</td>\n                      <td>\n                        <span *ngIf=\"item.phoneNumber\"\n                          >{{ item.countryCode }} {{ item.phoneNumber }}</span\n                        >\n                      </td>\n                      <td>{{ item.createdAt | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"sources\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"5\">\n            <a ngbNavLink>Others</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"sources.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Submitted on</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of sources; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>{{ item.clientName | titlecase }}</td>\n                      <td>{{ item.email }}</td>\n                      <td>\n                        <span *ngIf=\"item.phoneNumber\"\n                          >{{ item.countryCode }} {{ item.phoneNumber }}</span\n                        >\n                      </td>\n                      <td>{{ item.createdAt | date: \"medium\" }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"sources\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #nodata>\n  <div class=\"noData\">No Records found</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/two-days-report/two-days-report.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/two-days-report/two-days-report.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-content-Wrap\">\n  <div class=\"table-wrap\">\n    <div class=\"card\">\n      <div class=\"card-header blue-bg d-flex align-items-center\">\n        Last 2 Days Report\n      </div>\n      <div class=\"card-body\">\n        <div class=\"selectAType pt-0\">\n          <div class=\"row\">\n            <div class=\"col-md-2 col-lg-2 chartBox\"></div>\n            <div class=\"col-md-8 col-lg-8 chartBox\">\n              <div class=\"text-center\">\n                <h3 class=\"H300 semibold\">Last 2 Days</h3>\n                <div style=\"display: block\">\n                  <canvas\n                    baseChart\n                    [colors]=\"chartColors\"\n                    [data]=\"_last2daysPieChartData\"\n                    [labels]=\"_last2daysPieChartLable\"\n                    [chartType]=\"_last2daysPieChartType\"\n                    [options]=\"chartOptions\"\n                    [plugins]=\"charPlugin\"\n                    [legend]=\"chartLegend\"\n                  >\n                  </canvas>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-lg-2 chartBox\"></div>\n          </div>\n        </div>\n\n        <ul\n          ngbNav\n          #nav=\"ngbNav\"\n          [(activeId)]=\"active\"\n          (activeIdChange)=\"activeIdChange(active)\"\n          class=\"nav-tabs\"\n        >\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink>Active</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"allRequests?.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Accepted At</th>\n                      <th>Assigned Provider</th>\n                      <th>Appointment Scheduled</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of allRequests; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails?.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails?.email }}</td>\n                      <td>\n                        {{ request.patientDetails?.countryCode }}\n                        {{ request.patientDetails?.phoneNumber }}\n                      </td>\n                      <td>\n                        {{ request.acceptTime | date: \"medium\" }}\n                      </td>\n                      <td>\n                        {{ request.assignedDoctor?.name | titlecase }}\n                      </td>\n                      <td>\n                        <span *ngIf=\"request.appointmentTime; else noAptTime\">{{\n                          request?.appointmentTime | date: \"medium\"\n                        }}</span>\n                        <ng-template #noAptTime>Not Scheduled</ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"allRequests\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink>Pending</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"allRequests?.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Pending Since</th>\n                      <th>Provider(s) Notified</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of allRequests; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails?.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails?.email }}</td>\n                      <td>\n                        {{ request.patientDetails?.countryCode }}\n                        {{ request.patientDetails?.phoneNumber }}\n                      </td>\n                      <td>\n                        {{ request.createdAt | date: \"medium\" }}\n                      </td>\n                      <td>\n                        {{ request?.patientDetails?.enquiryRequests?.length }}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"allRequests\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"3\">\n            <a ngbNavLink>Cancelled</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"allRequests?.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Cancelled At</th>\n                      <th>Cancelled By</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of allRequests; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails?.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails?.email }}</td>\n                      <td>\n                        {{ request.patientDetails?.countryCode }}\n                        {{ request.patientDetails?.phoneNumber }}\n                      </td>\n                      <td>{{ request?.cancelTime | date: \"medium\" }}</td>\n                      <td>\n                        {{ request.assignedDoctor?.name | titlecase }}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"allRequests\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"4\">\n            <a ngbNavLink>Rejected</a>\n            <ng-template ngbNavContent>\n              <div\n                class=\"table-responsive entity-table\"\n                *ngIf=\"allRequests?.length; else nodata\"\n              >\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">#</th>\n                      <th class=\"\">Client Name</th>\n                      <th class=\"\">Email</th>\n                      <th class=\"\">Contact</th>\n                      <th>Rejected At</th>\n                      <th>Rejected By</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let request of allRequests; let i = index\">\n                      <td>{{ (currentPage - 1) * 20 + (i + 1) }}</td>\n                      <td>\n                        {{ request.patientDetails?.clientName | titlecase }}\n                      </td>\n                      <td>{{ request.patientDetails?.email }}</td>\n                      <td>\n                        {{ request.patientDetails?.countryCode }}\n                        {{ request.patientDetails?.phoneNumber }}\n                      </td>\n                      <td>\n                        {{ request?.rejectTime | date: \"medium\" }}\n                      </td>\n                      <td>\n                        {{ request.assignedDoctor?.name | titlecase }}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <app-pagination\n                  [totalRecords]=\"totalRecords\"\n                  [data]=\"allRequests\"\n                  [currentPage]=\"currentPage\"\n                  (clickedPage)=\"clickPage($event)\"\n                >\n                </app-pagination>\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #nodata>\n  <div class=\"noData\">No Records found</div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/admin/reports/components/cancelled-report/cancelled-report.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/reports/components/cancelled-report/cancelled-report.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectAType .detailWrapCommon {\n  height: 200px;\n  display: flex;\n}\n\n.selectAType a {\n  text-decoration: none;\n}\n\n.detailWrapCommon {\n  border-radius: 8px;\n  padding: 25px;\n  margin: 25px;\n  background: #fdfdfd;\n  border: 2px solid #e8e8e8;\n}\n\n.detailWrapCommon .heading {\n  display: flex;\n  align-items: flex-start;\n  padding-right: 10px;\n}\n\n.detailWrapCommon.border-CACCCF {\n  border: 2px solid #cacccf;\n}\n\n.H300 {\n  font-size: 1.3rem;\n  color: #1b346a;\n}\n\n.chartBox {\n  padding: 20px 10px\n}\n\n.form-group.hidden {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.noData {\n  text-align: center;\n  margin: 10%\n}\n\n.note {\n  padding: 20px 20px;\n  color: red;\n  font-weight: 600;\n  text-align: center;\n  font-size: 0.85rem;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL2NhbmNlbGxlZC1yZXBvcnQvY2FuY2VsbGVkLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9yZXBvcnRzL2NvbXBvbmVudHMvY2FuY2VsbGVkLXJlcG9ydC9jYW5jZWxsZWQtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0QVR5cGUgLmRldGFpbFdyYXBDb21tb24ge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VsZWN0QVR5cGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmRldGFpbFdyYXBDb21tb24ge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbjogMjVweDtcbiAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U4ZThlODtcbn1cblxuLmRldGFpbFdyYXBDb21tb24gLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmRldGFpbFdyYXBDb21tb24uYm9yZGVyLUNBQ0NDRiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYWNjY2Y7XG59XG5cbi5IMzAwIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjMWIzNDZhO1xufVxuXG4uY2hhcnRCb3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHhcbn1cblxuLmZvcm0tZ3JvdXAuaGlkZGVuIHtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG4ubm9EYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwJVxufVxuXG4ubm90ZSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/admin/reports/components/cancelled-report/cancelled-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/reports/components/cancelled-report/cancelled-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CancelledReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelledReportComponent", function() { return CancelledReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");




let CancelledReportComponent = class CancelledReportComponent {
    constructor(reportService, calendar, formatter) {
        this.reportService = reportService;
        this.calendar = calendar;
        this.formatter = formatter;
        this.hoveredDate = null;
        this.currentPage = 1;
        this.totalRecords = 0;
        this.allRequests = [];
        this.fromDate = calendar.getPrev(calendar.getToday(), "m", 1);
        this.toDate = calendar.getToday();
    }
    ngOnInit() {
        this.getCancelledReports();
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.getCancelledReports();
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return (this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate));
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return (date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date));
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(parsed))
            ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(parsed)
            : currentValue;
    }
    getCancelledReports(pageNo) {
        this.currentPage = pageNo ? pageNo : this.currentPage;
        const params = {
            from: `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`,
            to: `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`,
            pageNumber: this.currentPage,
        };
        this.reportService.getCancelledReports(params).subscribe((data) => {
            this.allRequests = data.data ? data.data.rows : [];
            this.totalRecords = data.data.count
                ? data.data.count
                : this.allRequests.length;
        });
    }
};
CancelledReportComponent.ctorParameters = () => [
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"] }
];
CancelledReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cancelled-report",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cancelled-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/cancelled-report/cancelled-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cancelled-report.component.css */ "./src/app/admin/reports/components/cancelled-report/cancelled-report.component.css")).default]
    })
], CancelledReportComponent);



/***/ }),

/***/ "./src/app/admin/reports/components/high-ed-users/high-ed-users.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/admin/reports/components/high-ed-users/high-ed-users.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectAType .detailWrapCommon {\n  height: 200px;\n  display: flex;\n}\n\n.selectAType a {\n  text-decoration: none;\n}\n\n.detailWrapCommon {\n  border-radius: 8px;\n  padding: 25px;\n  margin: 25px;\n  background: #fdfdfd;\n  border: 2px solid #e8e8e8;\n}\n\n.detailWrapCommon .heading {\n  display: flex;\n  align-items: flex-start;\n  padding-right: 10px;\n}\n\n.detailWrapCommon.border-CACCCF {\n  border: 2px solid #cacccf;\n}\n\n.H300 {\n  font-size: 1.3rem;\n  color: #1b346a;\n}\n\n.chartBox {\n  padding: 20px 10px;\n}\n\n.form-group.hidden {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.noData {\n  text-align: center;\n  margin: 10%;\n}\n\n.right-content-Wrap {\n  padding: 30px 30px;\n}\n\n.note {\n  padding: 20px 20px;\n  color: red;\n  font-weight: 600;\n  text-align: center;\n  font-size: 0.85rem;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL2hpZ2gtZWQtdXNlcnMvaGlnaC1lZC11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL2hpZ2gtZWQtdXNlcnMvaGlnaC1lZC11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdEFUeXBlIC5kZXRhaWxXcmFwQ29tbW9uIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlbGVjdEFUeXBlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW46IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uIC5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uLmJvcmRlci1DQUNDQ0Yge1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2FjY2NmO1xufVxuXG4uSDMwMCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzFiMzQ2YTtcbn1cblxuLmNoYXJ0Qm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4uZm9ybS1ncm91cC5oaWRkZW4ge1xuICB3aWR0aDogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XG59XG5cbi5ub0RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTAlO1xufVxuXG4ucmlnaHQtY29udGVudC1XcmFwIHtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xufVxuXG4ubm90ZSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/admin/reports/components/high-ed-users/high-ed-users.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/reports/components/high-ed-users/high-ed-users.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HighEdUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighEdUsersComponent", function() { return HighEdUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");





let HighEdUsersComponent = class HighEdUsersComponent {
    constructor(reportService, calendar, formatter, router) {
        this.reportService = reportService;
        this.calendar = calendar;
        this.formatter = formatter;
        this.router = router;
        this.currentPage = 1;
        this.active = 1;
        this.hoveredDate = null;
        this.allRequests = [];
        this.totalRecords = 0;
        this.fromDate = calendar.getPrev(calendar.getToday(), "m", 1);
        this.toDate = calendar.getToday();
    }
    ngOnInit() {
        this.getHighUserOfED();
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.getHighUserOfED();
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return (this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate));
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return (date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date));
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed))
            ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed)
            : currentValue;
    }
    getHighUserOfED(pageNo) {
        this.currentPage = pageNo ? pageNo : this.currentPage;
        const params = {
            from: `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`,
            to: `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`,
            pageNumber: this.currentPage,
        };
        this.reportService.getHighEDUsers(params).subscribe((data) => {
            this.allRequests = data.data ? data.data.rows : [];
            this.totalRecords = data.data.count
                ? data.data.count
                : this.allRequests.length;
        });
    }
    activeIdChange(activeId) {
        // this.source = Object.keys(this.metaData.sources)[activeId - 1];
        this.currentPage = 1;
        this.getHighUserOfED();
    }
};
HighEdUsersComponent.ctorParameters = () => [
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_4__["ReportService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HighEdUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-high-ed-users",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./high-ed-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/high-ed-users/high-ed-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./high-ed-users.component.css */ "./src/app/admin/reports/components/high-ed-users/high-ed-users.component.css")).default]
    })
], HighEdUsersComponent);



/***/ }),

/***/ "./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectAType .detailWrapCommon {\n  height: 200px;\n  display: flex;\n}\n\n.selectAType a {\n  text-decoration: none;\n}\n\n.detailWrapCommon {\n  border-radius: 8px;\n  padding: 25px;\n  margin: 25px;\n  background: #fdfdfd;\n  border: 2px solid #e8e8e8;\n}\n\n.detailWrapCommon .heading {\n  display: flex;\n  align-items: flex-start;\n  padding-right: 10px;\n}\n\n.detailWrapCommon.border-CACCCF {\n  border: 2px solid #cacccf;\n}\n\n.H300 {\n  font-size: 1.3rem;\n  color: #1b346a;\n}\n\n.chartBox {\n  padding: 20px 10px;\n}\n\n.form-group.hidden {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.noData {\n  text-align: center;\n  margin: 10%;\n}\n\n.note {\n  padding: 20px 20px;\n  color: red;\n  font-weight: 600;\n  text-align: center;\n  font-size: 0.85rem;\n  text-decoration: underline;\n}\n\n.ngbToggleDropdown {\n  max-height: 240px;\n  overflow-y: scroll;\n  transform: translateY(10px) !important;\n}\n\n.dropdownItem {\n  padding: 10px;\n  cursor: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL2lucXVpcnktcmVwb3J0cy9pbnF1aXJ5LXJlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlcG9ydHMvY29tcG9uZW50cy9pbnF1aXJ5LXJlcG9ydHMvaW5xdWlyeS1yZXBvcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0QVR5cGUgLmRldGFpbFdyYXBDb21tb24ge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VsZWN0QVR5cGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmRldGFpbFdyYXBDb21tb24ge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbjogMjVweDtcbiAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U4ZThlODtcbn1cblxuLmRldGFpbFdyYXBDb21tb24gLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmRldGFpbFdyYXBDb21tb24uYm9yZGVyLUNBQ0NDRiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYWNjY2Y7XG59XG5cbi5IMzAwIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjMWIzNDZhO1xufVxuXG4uY2hhcnRCb3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwLmhpZGRlbiB7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMCU7XG59XG5cbi5ub3RlIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5uZ2JUb2dnbGVEcm9wZG93biB7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSAhaW1wb3J0YW50O1xufVxuLmRyb3Bkb3duSXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogYXV0bztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InquiryReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InquiryReportsComponent", function() { return InquiryReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var src_app_core_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/_alert */ "./src/app/core/_alert/index.ts");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");







let InquiryReportsComponent = class InquiryReportsComponent {
    constructor(activatedRoute, calendar, formatter, reportService, alert) {
        this.activatedRoute = activatedRoute;
        this.calendar = calendar;
        this.formatter = formatter;
        this.reportService = reportService;
        this.alert = alert;
        this.active = 1;
        this.chartOptions = {
            responsive: true,
        };
        this.colours = ["#4661EE", "#EC5657", "#1BCDD1", "#8FAABB"];
        this.chartLegend = true;
        this.charPlugin = [];
        this._pBarChartLabels = [];
        this._pBarChartType = "bar";
        this._pBarChartData = [];
        this._allPieChartLable = [
            ["Active"],
            ["Pending"],
            ["Cancelled"],
            ["Rejected"],
        ];
        this._allPieChartData = [];
        this._allPieChartType = "pie";
        this.doctors = [];
        this.currentPage = 1;
        this.totalRecords = 0;
        this.hoveredDate = null;
        this.status = "active";
        this.statuses = {
            1: "active",
            2: "pending",
            3: "cancelled",
            4: "rejected",
        };
        this.allRequests = [];
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_4__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_4__["monkeyPatchChartJsLegend"])();
        this.fromDate = calendar.getPrev(calendar.getToday(), "m", 1);
        this.toDate = calendar.getToday();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.reports = data.reports.data;
        });
        this.setPieChart2();
        this.setBarChart1();
        this.getAllInquiries();
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    getAllInquiries() {
        const params = {
            status: this.status,
            from: `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`,
            to: `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`,
            pageNumber: this.currentPage,
        };
        this.reportService.getAllRequetDetails(params).subscribe((data) => {
            this.allRequests = data.data.rows ? data.data.rows : [];
            this.allRequests.forEach((req) => {
                if (req.patientDetails.dob) {
                    req.patientDetails.dob = req.patientDetails.dob.split("T")[0];
                }
            });
            this.totalRecords = data.data.count
                ? data.data.count
                : this.allRequests.length;
        });
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.getAllInquiries();
    }
    setPieChart2() {
        this.reports.allRequestsByStatus.map((item) => {
            if (item.status == "active") {
                this._allPieChartData[0] = item.count;
            }
            if (item.status == "pending") {
                this._allPieChartData[1] = item.count;
            }
            if (item.status == "cancelled") {
                this._allPieChartData[2] = item.count;
            }
            if (item.status == "rejected") {
                this._allPieChartData[3] = item.count;
            }
        });
    }
    setBarChart1() {
        this._pBarChartLabels = [];
        this._pBarChartData = [];
        this._pBarChartLabels = this.reports.allCases.months;
        this._pBarChartData.push({
            data: new Array(this._pBarChartLabels.length).fill(0),
            label: "Active",
            backgroundColor: "#8FD8D4",
            hoverBackgroundColor: "#20B2AA",
        });
        this._pBarChartData.push({
            data: new Array(this._pBarChartLabels.length).fill(0),
            label: "Pending",
            backgroundColor: "#ffcccb",
            hoverBackgroundColor: "#ff726f",
        });
        this._pBarChartData.push({
            data: new Array(this._pBarChartLabels.length).fill(0),
            label: "Cancelled",
            backgroundColor: "#CCCC00",
            hoverBackgroundColor: "#666600",
        });
        this._pBarChartData.push({
            data: new Array(this._pBarChartLabels.length).fill(0),
            label: "Rejected",
            backgroundColor: "#ff4c4c",
            hoverBackgroundColor: "darkred",
        });
        this.reports.allCases.active.map((item) => {
            this._pBarChartData.find((item) => item.label == "Active").data[this._pBarChartLabels.indexOf(item.month)] = item.count;
        });
        this.reports.allCases.pending.map((item) => {
            this._pBarChartData.find((item) => item.label == "Pending").data[this._pBarChartLabels.indexOf(item.month)] = item.count;
        });
        this.reports.allCases.cancelled.map((item) => {
            this._pBarChartData.find((item) => item.label == "Cancelled").data[this._pBarChartLabels.indexOf(item.month)] = item.count;
        });
        this.reports.allCases.rejected.map((item) => {
            this._pBarChartData.find((item) => item.label == "Rejected").data[this._pBarChartLabels.indexOf(item.month)] = item.count;
        });
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return (this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate));
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return (date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date));
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed))
            ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed)
            : currentValue;
    }
    activeIdChange(activeId) {
        this.status = this.statuses[activeId];
        this.currentPage = 1;
        this.getAllInquiries();
    }
    refreshData() {
        this.getAllInquiries();
        this.refreshReport();
    }
    refreshReport() {
        const params = {
            from: `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`,
            to: `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`,
        };
        this.reportService.getReports(params).subscribe((data) => {
            this.reports = data.data;
            this.setPieChart2();
            this.setBarChart1();
        });
    }
};
InquiryReportsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"] },
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_6__["ReportService"] },
    { type: src_app_core_alert__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
InquiryReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-inquiry-reports",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inquiry-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inquiry-reports.component.css */ "./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.css")).default]
    })
], InquiryReportsComponent);



/***/ }),

/***/ "./src/app/admin/reports/components/new-requests/new-requests.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/reports/components/new-requests/new-requests.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlcG9ydHMvY29tcG9uZW50cy9uZXctcmVxdWVzdHMvbmV3LXJlcXVlc3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/reports/components/new-requests/new-requests.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/reports/components/new-requests/new-requests.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRequestsComponent", function() { return NewRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/_alert */ "./src/app/core/_alert/index.ts");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);







let NewRequestsComponent = class NewRequestsComponent {
    constructor(report, alert) {
        this.report = report;
        this.alert = alert;
        this.currentPage = 1;
        this.totalRecords = 0;
        this.bucketUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].awsBucketUrl;
    }
    ngOnInit() {
        this.fetchEnquiryRequests();
    }
    fetchEnquiryRequests() {
        this.report
            .fetchEnquiryRequests({ status: "PENDING", pageNumber: this.currentPage })
            .subscribe((data) => {
            this.allRequests = data.data.rows;
            this.totalRecords = data.data.count;
        });
    }
    changeStatus(id, status) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            // text: "You will not be able to recover this imaginary file!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                this.report
                    .changeEnquiryStatus({ enquiryId: id, status: status })
                    .subscribe((data) => {
                    this.alert.success("Status successully changed.");
                    this.fetchEnquiryRequests();
                });
            }
        });
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.fetchEnquiryRequests();
    }
    download() {
        this.report.downloadFile().subscribe((blob) => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, "dump.gz");
        });
    }
};
NewRequestsComponent.ctorParameters = () => [
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
    { type: src_app_core_alert__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
NewRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-new-requests",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/new-requests/new-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-requests.component.css */ "./src/app/admin/reports/components/new-requests/new-requests.component.css")).default]
    })
], NewRequestsComponent);



/***/ }),

/***/ "./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".noData {\n  text-align: center;\n  margin: 10%\n}\n\n.note {\n  padding: 20px 20px;\n  color: red;\n  font-weight: 600;\n  text-align: center;\n  font-size: 0.85rem;\n  text-decoration: underline;\n}\n\n.right-content-Wrap\n{\n    padding: 30px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL3Byb3ZpZGVycy1saXN0aW5nL3Byb3ZpZGVyLWRldGFpbC9wcm92aWRlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL3Byb3ZpZGVycy1saXN0aW5nL3Byb3ZpZGVyLWRldGFpbC9wcm92aWRlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub0RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTAlXG59XG5cbi5ub3RlIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucmlnaHQtY29udGVudC1XcmFwXG57XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProviderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderDetailComponent", function() { return ProviderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");





let ProviderDetailComponent = class ProviderDetailComponent {
    constructor(router, reportService) {
        this.router = router;
        this.reportService = reportService;
        this.active = 1;
        this.currentPage = 1;
        this.totalRecords = 0;
        this.status = "active";
        this.statuses = {
            1: "active",
            2: "all",
            3: "cancelled",
            4: "rejected",
        };
        this.allRequests = [];
        this.chartOptions = {
            responsive: true,
        };
        this.chartLegend = true;
        this.charPlugin = [];
        this._chartLabels = [];
        this._chartData = [];
        this._charType = "pie";
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_3__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_3__["monkeyPatchChartJsLegend"])();
    }
    ngOnInit() {
        this.doctorId = this.router.snapshot.queryParamMap.get("id");
        this.title = this.router.snapshot.queryParamMap.get("title");
        if (this.doctorId) {
            this.getProviderReport();
        }
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.getProviderReport();
    }
    getProviderReport() {
        const params = {
            status: this.status,
            id: this.doctorId,
            pageNumber: this.currentPage,
        };
        this.reportService.getProviderDetails(params).subscribe((data) => {
            this.doctor = data.data.cases ? data.data.cases.rows : [];
            this.statistics = data.data.statistics;
            this.statusCount = data.data.statusCount;
            this.totalRecords = data.data.cases.count
                ? data.data.cases.count
                : this.doctor.length;
            this.setPieChart3();
        });
    }
    activeIdChange(activeId) {
        this.status = this.statuses[activeId];
        this.currentPage = 1;
        this.getProviderReport();
    }
    setPieChart3() {
        this._chartData = [];
        this._chartLabels = [];
        this._chartLabels.push("Downloads");
        this._chartData.push(this.statistics.downloads);
        this._chartLabels.push("Cancelled");
        this._chartData.push(this.statusCount.cancelled);
        this._chartLabels.push("Rejected");
        this._chartData.push(this.statusCount.rejected);
    }
};
ProviderDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }
];
ProviderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-provider-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-detail.component.css */ "./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.css")).default]
    })
], ProviderDetailComponent);



/***/ }),

/***/ "./src/app/admin/reports/components/providers-listing/providers-listing.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/reports/components/providers-listing/providers-listing.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectAType .detailWrapCommon {\n  height: 200px;\n  display: flex;\n}\n\n.selectAType a {\n  text-decoration: none;\n}\n\n.detailWrapCommon {\n  border-radius: 8px;\n  padding: 25px;\n  margin: 25px;\n  background: #fdfdfd;\n  border: 2px solid #e8e8e8;\n}\n\n.detailWrapCommon .heading {\n  display: flex;\n  align-items: flex-start;\n  padding-right: 10px;\n}\n\n.detailWrapCommon.border-CACCCF {\n  border: 2px solid #cacccf;\n}\n\n.H300 {\n  font-size: 1.3rem;\n  color: #1b346a;\n}\n\n.chartBox {\n  padding: 20px 10px\n}\n\n.form-group.hidden {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.noData {\n  text-align: center;\n  margin: 10%\n}\n\n.right-content-Wrap {\n  padding: 30px 30px;\n}\n\n.note {\n  padding: 20px 20px;\n  color: red;\n  font-weight: 600;\n  text-align: center;\n  font-size: 0.85rem;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL3Byb3ZpZGVycy1saXN0aW5nL3Byb3ZpZGVycy1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlcG9ydHMvY29tcG9uZW50cy9wcm92aWRlcnMtbGlzdGluZy9wcm92aWRlcnMtbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdEFUeXBlIC5kZXRhaWxXcmFwQ29tbW9uIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlbGVjdEFUeXBlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW46IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uIC5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uLmJvcmRlci1DQUNDQ0Yge1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2FjY2NmO1xufVxuXG4uSDMwMCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzFiMzQ2YTtcbn1cblxuLmNoYXJ0Qm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4XG59XG5cbi5mb3JtLWdyb3VwLmhpZGRlbiB7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMCVcbn1cblxuLnJpZ2h0LWNvbnRlbnQtV3JhcCB7XG4gIHBhZGRpbmc6IDMwcHggMzBweDtcbn1cblxuLm5vdGUge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/reports/components/providers-listing/providers-listing.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/reports/components/providers-listing/providers-listing.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProvidersListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersListingComponent", function() { return ProvidersListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");





let ProvidersListingComponent = class ProvidersListingComponent {
    constructor(reportService, calendar, formatter, router) {
        this.reportService = reportService;
        this.calendar = calendar;
        this.formatter = formatter;
        this.router = router;
        this.currentPage = 1;
        this.active = 1;
        this.hoveredDate = null;
        this.allRequests = [];
        this.totalRecords = 0;
        this.fromDate = calendar.getPrev(calendar.getToday(), "m", 1);
        this.toDate = calendar.getToday();
    }
    ngOnInit() {
        this.getProvidersList();
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.getProvidersList();
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return (this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate));
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return (date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date));
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed))
            ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed)
            : currentValue;
    }
    getProvidersList(pageNo) {
        this.currentPage = pageNo ? pageNo : this.currentPage;
        const params = {
            from: `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`,
            to: `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`,
            pageNumber: this.currentPage,
        };
        this.reportService.getProviders(params).subscribe((data) => {
            this.allRequests = data.data ? data.data.rows : [];
            this.totalRecords = data.data.count
                ? data.data.count
                : this.allRequests.length;
        });
    }
    activeIdChange(activeId) {
        // this.source = Object.keys(this.metaData.sources)[activeId - 1];
        this.currentPage = 1;
        this.getProvidersList();
    }
};
ProvidersListingComponent.ctorParameters = () => [
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_4__["ReportService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProvidersListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-providers-listing",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./providers-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/providers-listing/providers-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./providers-listing.component.css */ "./src/app/admin/reports/components/providers-listing/providers-listing.component.css")).default]
    })
], ProvidersListingComponent);



/***/ }),

/***/ "./src/app/admin/reports/components/rejected-requests/rejected-requests.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/reports/components/rejected-requests/rejected-requests.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlcG9ydHMvY29tcG9uZW50cy9yZWplY3RlZC1yZXF1ZXN0cy9yZWplY3RlZC1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/reports/components/rejected-requests/rejected-requests.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/reports/components/rejected-requests/rejected-requests.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RejectedRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedRequestsComponent", function() { return RejectedRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/_alert */ "./src/app/core/_alert/index.ts");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");




let RejectedRequestsComponent = class RejectedRequestsComponent {
    constructor(report, alert) {
        this.report = report;
        this.alert = alert;
        this.currentPage = 1;
        this.totalRecords = 0;
    }
    ngOnInit() {
        this.fetchEnquiryRequests();
    }
    fetchEnquiryRequests() {
        this.report
            .fetchEnquiryRequests({
            status: "REJECTED",
            pageNumber: this.currentPage,
        })
            .subscribe((data) => {
            this.allRequests = data.data.rows;
            this.totalRecords = data.data.count;
        });
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.fetchEnquiryRequests();
    }
};
RejectedRequestsComponent.ctorParameters = () => [
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
    { type: src_app_core_alert__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
RejectedRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rejected-requests",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rejected-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/rejected-requests/rejected-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rejected-requests.component.css */ "./src/app/admin/reports/components/rejected-requests/rejected-requests.component.css")).default]
    })
], RejectedRequestsComponent);



/***/ }),

/***/ "./src/app/admin/reports/components/sources/sources.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/reports/components/sources/sources.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectAType .detailWrapCommon {\n  height: 200px;\n  display: flex;\n}\n\n.selectAType a {\n  text-decoration: none;\n}\n\n.detailWrapCommon {\n  border-radius: 8px;\n  padding: 25px;\n  margin: 25px;\n  background: #fdfdfd;\n  border: 2px solid #e8e8e8;\n}\n\n.detailWrapCommon .heading {\n  display: flex;\n  align-items: flex-start;\n  padding-right: 10px;\n}\n\n.detailWrapCommon.border-CACCCF {\n  border: 2px solid #cacccf;\n}\n\n.H300 {\n  font-size: 1.3rem;\n  color: #1b346a;\n}\n\n.chartBox {\n  padding: 20px 10px\n}\n\n.noData {\n  text-align: center;\n  margin: 10%\n}\n\n.form-group.hidden {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL3NvdXJjZXMvc291cmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcmVwb3J0cy9jb21wb25lbnRzL3NvdXJjZXMvc291cmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdEFUeXBlIC5kZXRhaWxXcmFwQ29tbW9uIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlbGVjdEFUeXBlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW46IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uIC5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5kZXRhaWxXcmFwQ29tbW9uLmJvcmRlci1DQUNDQ0Yge1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2FjY2NmO1xufVxuXG4uSDMwMCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzFiMzQ2YTtcbn1cblxuLmNoYXJ0Qm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4XG59XG5cbi5ub0RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTAlXG59XG5cbi5mb3JtLWdyb3VwLmhpZGRlbiB7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/reports/components/sources/sources.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/reports/components/sources/sources.component.ts ***!
  \***********************************************************************/
/*! exports provided: SourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesComponent", function() { return SourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");






let SourcesComponent = class SourcesComponent {
    constructor(activatedRoute, calendar, formatter, reportService) {
        this.activatedRoute = activatedRoute;
        this.calendar = calendar;
        this.formatter = formatter;
        this.reportService = reportService;
        this.active = 1;
        this.currentPage = 1;
        this.totalRecords = 0;
        this.chartOptions = {
            responsive: true,
        };
        this.chartLegend = true;
        this.charPlugin = [];
        this._sPieChartLable = [];
        this._sPieChartData = [];
        this._sPieChartType = "pie";
        this.hoveredDate = null;
        this.sources = [];
        this.source = "sm";
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_4__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_4__["monkeyPatchChartJsLegend"])();
        this.fromDate = calendar.getPrev(calendar.getToday(), "m", 1);
        this.toDate = calendar.getToday();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.metaData = data.metaData;
            this.reports = data.reports.data;
        });
        this.setPieChart1();
        this.getAllSources();
    }
    setPieChart1() {
        this._sPieChartLable = [];
        this._sPieChartData = [];
        this.reports.sources.map((item) => {
            this._sPieChartLable.push(this.capitalizeFirstLetter(this.metaData.sources[item.source]));
            this._sPieChartData.push(item.count);
        });
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    getAllSources() {
        const params = {
            source: this.source,
            from: `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`,
            to: `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`,
            pageNumber: this.currentPage,
        };
        this.reportService.getSourceDetails(params).subscribe((data) => {
            this.sources = data.data.rows ? data.data.rows : [];
            this.totalRecords = data.data.count
                ? data.data.count
                : this.sources.length;
        });
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.getAllSources();
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return (this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate));
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return (date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date));
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed))
            ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(parsed)
            : currentValue;
    }
    activeIdChange(activeId) {
        this.source = Object.keys(this.metaData.sources)[activeId - 1];
        this.currentPage = 1;
        this.getAllSources();
    }
    refreshData() {
        this.getAllSources();
        this.refreshReport();
    }
    refreshReport() {
        const params = {
            from: `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`,
            to: `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`,
        };
        this.reportService.getReports(params).subscribe((data) => {
            this.reports = data.data;
            this.setPieChart1();
        });
    }
};
SourcesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"] },
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_5__["ReportService"] }
];
SourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sources",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sources.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/sources/sources.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sources.component.css */ "./src/app/admin/reports/components/sources/sources.component.css")).default]
    })
], SourcesComponent);



/***/ }),

/***/ "./src/app/admin/reports/components/two-days-report/two-days-report.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/reports/components/two-days-report/two-days-report.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlcG9ydHMvY29tcG9uZW50cy90d28tZGF5cy1yZXBvcnQvdHdvLWRheXMtcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/reports/components/two-days-report/two-days-report.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/reports/components/two-days-report/two-days-report.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TwoDaysReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoDaysReportComponent", function() { return TwoDaysReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _services_reports_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/reports.services */ "./src/app/admin/reports/services/reports.services.ts");





let TwoDaysReportComponent = class TwoDaysReportComponent {
    constructor(activatedRoute, reportService) {
        this.activatedRoute = activatedRoute;
        this.reportService = reportService;
        this.active = 1;
        this.currentPage = 1;
        this.totalRecords = 0;
        this.status = "active";
        this.statuses = {
            1: "active",
            2: "pending",
            3: "cancelled",
            4: "rejected",
        };
        this.chartColors = [
            {
                backgroundColor: ["#8FD8D4", "#ffcccb", "#CCCC00", "#ff4c4c"],
                hoverBackgroundColor: ["#20B2AA", "#ff726f", "#666600", "darkred"],
            },
        ];
        this.allRequests = [];
        this.chartOptions = {
            responsive: true,
        };
        this.chartLegend = true;
        this.charPlugin = [];
        this._last2daysPieChartLable = [
            ["Active"],
            ["Pending"],
            ["Cancelled"],
            ["Rejected"],
        ];
        this._last2daysPieChartData = new Array(4).fill(0);
        this._last2daysPieChartType = "pie";
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_3__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_3__["monkeyPatchChartJsLegend"])();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.metaData = data.metaData;
            this.reports = data.reports.data;
        });
        this.setPieChart3();
        this.getAllInquiries();
    }
    // method called via event emitter from pagination component
    clickPage(pageNo) {
        this.currentPage = pageNo;
        this.getAllInquiries();
    }
    setPieChart3() {
        this.reports.last2DaysRequests.map((item) => {
            if (item.status == "active") {
                this._last2daysPieChartData[0] = item.count;
            }
            if (item.status == "pending") {
                this._last2daysPieChartData[1] = item.count;
            }
            if (item.status == "cancelled") {
                this._last2daysPieChartData[2] = item.count;
            }
            if (item.status == "rejected") {
                this._last2daysPieChartData[3] = item.count;
            }
        });
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    getAllInquiries() {
        const params = {
            status: this.status,
            pageNumber: this.currentPage,
        };
        this.reportService.last2DaysReport(params).subscribe((data) => {
            this.allRequests = data.data.rows ? data.data.rows : [];
            this.totalRecords = data.data.count
                ? data.data.count
                : this.allRequests.length;
        });
    }
    activeIdChange(activeId) {
        this.status = this.statuses[activeId];
        this.currentPage = 1;
        this.getAllInquiries();
    }
};
TwoDaysReportComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_reports_services__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }
];
TwoDaysReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-two-days-report",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./two-days-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/reports/components/two-days-report/two-days-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./two-days-report.component.css */ "./src/app/admin/reports/components/two-days-report/two-days-report.component.css")).default]
    })
], TwoDaysReportComponent);



/***/ }),

/***/ "./src/app/admin/reports/reports-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_cancelled_report_cancelled_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cancelled-report/cancelled-report.component */ "./src/app/admin/reports/components/cancelled-report/cancelled-report.component.ts");
/* harmony import */ var _components_inquiry_reports_inquiry_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inquiry-reports/inquiry-reports.component */ "./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.ts");
/* harmony import */ var _components_providers_listing_provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/providers-listing/provider-detail/provider-detail.component */ "./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.ts");
/* harmony import */ var _components_providers_listing_providers_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/providers-listing/providers-listing.component */ "./src/app/admin/reports/components/providers-listing/providers-listing.component.ts");
/* harmony import */ var _components_sources_sources_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sources/sources.component */ "./src/app/admin/reports/components/sources/sources.component.ts");
/* harmony import */ var _components_two_days_report_two_days_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/two-days-report/two-days-report.component */ "./src/app/admin/reports/components/two-days-report/two-days-report.component.ts");
/* harmony import */ var _components_high_ed_users_high_ed_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/high-ed-users/high-ed-users.component */ "./src/app/admin/reports/components/high-ed-users/high-ed-users.component.ts");
/* harmony import */ var _components_new_requests_new_requests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/new-requests/new-requests.component */ "./src/app/admin/reports/components/new-requests/new-requests.component.ts");
/* harmony import */ var _components_rejected_requests_rejected_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rejected-requests/rejected-requests.component */ "./src/app/admin/reports/components/rejected-requests/rejected-requests.component.ts");












const routes = [
    { path: "rejected-requests", component: _components_rejected_requests_rejected_requests_component__WEBPACK_IMPORTED_MODULE_11__["RejectedRequestsComponent"] },
    { path: "new-requests", component: _components_new_requests_new_requests_component__WEBPACK_IMPORTED_MODULE_10__["NewRequestsComponent"] },
    {
        path: "inquiries",
        component: _components_inquiry_reports_inquiry_reports_component__WEBPACK_IMPORTED_MODULE_4__["InquiryReportsComponent"],
    },
    {
        path: "two-days-report",
        component: _components_two_days_report_two_days_report_component__WEBPACK_IMPORTED_MODULE_8__["TwoDaysReportComponent"],
    },
    {
        path: "sources",
        component: _components_sources_sources_component__WEBPACK_IMPORTED_MODULE_7__["SourcesComponent"],
    },
    {
        path: "cancelled-report",
        component: _components_cancelled_report_cancelled_report_component__WEBPACK_IMPORTED_MODULE_3__["CancelledReportComponent"],
    },
    {
        path: "providers",
        component: _components_providers_listing_providers_listing_component__WEBPACK_IMPORTED_MODULE_6__["ProvidersListingComponent"],
    },
    {
        path: "provider-detail",
        component: _components_providers_listing_provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProviderDetailComponent"],
    },
    {
        path: "edusers",
        component: _components_high_ed_users_high_ed_users_component__WEBPACK_IMPORTED_MODULE_9__["HighEdUsersComponent"],
    },
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportsRoutingModule);



/***/ }),

/***/ "./src/app/admin/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/admin/reports/reports-routing.module.ts");
/* harmony import */ var _components_inquiry_reports_inquiry_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inquiry-reports/inquiry-reports.component */ "./src/app/admin/reports/components/inquiry-reports/inquiry-reports.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _components_two_days_report_two_days_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/two-days-report/two-days-report.component */ "./src/app/admin/reports/components/two-days-report/two-days-report.component.ts");
/* harmony import */ var _components_sources_sources_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sources/sources.component */ "./src/app/admin/reports/components/sources/sources.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_cancelled_report_cancelled_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cancelled-report/cancelled-report.component */ "./src/app/admin/reports/components/cancelled-report/cancelled-report.component.ts");
/* harmony import */ var _components_providers_listing_providers_listing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/providers-listing/providers-listing.component */ "./src/app/admin/reports/components/providers-listing/providers-listing.component.ts");
/* harmony import */ var _components_providers_listing_provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/providers-listing/provider-detail/provider-detail.component */ "./src/app/admin/reports/components/providers-listing/provider-detail/provider-detail.component.ts");
/* harmony import */ var _components_high_ed_users_high_ed_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/high-ed-users/high-ed-users.component */ "./src/app/admin/reports/components/high-ed-users/high-ed-users.component.ts");
/* harmony import */ var _components_new_requests_new_requests_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/new-requests/new-requests.component */ "./src/app/admin/reports/components/new-requests/new-requests.component.ts");
/* harmony import */ var _components_rejected_requests_rejected_requests_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/rejected-requests/rejected-requests.component */ "./src/app/admin/reports/components/rejected-requests/rejected-requests.component.ts");

















let ReportsModule = class ReportsModule {
};
ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_inquiry_reports_inquiry_reports_component__WEBPACK_IMPORTED_MODULE_4__["InquiryReportsComponent"],
            _components_two_days_report_two_days_report_component__WEBPACK_IMPORTED_MODULE_6__["TwoDaysReportComponent"],
            _components_sources_sources_component__WEBPACK_IMPORTED_MODULE_7__["SourcesComponent"],
            _components_cancelled_report_cancelled_report_component__WEBPACK_IMPORTED_MODULE_11__["CancelledReportComponent"],
            _components_providers_listing_providers_listing_component__WEBPACK_IMPORTED_MODULE_12__["ProvidersListingComponent"],
            _components_providers_listing_provider_detail_provider_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProviderDetailComponent"],
            _components_high_ed_users_high_ed_users_component__WEBPACK_IMPORTED_MODULE_14__["HighEdUsersComponent"],
            _components_new_requests_new_requests_component__WEBPACK_IMPORTED_MODULE_15__["NewRequestsComponent"],
            _components_rejected_requests_rejected_requests_component__WEBPACK_IMPORTED_MODULE_16__["RejectedRequestsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        ],
    })
], ReportsModule);



/***/ }),

/***/ "./src/app/admin/reports/services/reports.services.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/reports/services/reports.services.ts ***!
  \************************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/constants/api-endpoints */ "./src/app/core/constants/api-endpoints.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ReportService = class ReportService {
    constructor(http) {
        this.http = http;
    }
    getAllEnquiryDetails(filters) {
        let params = filters;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].allRequestDetails, {
            params,
        });
    }
    getAllRequetDetails(filters) {
        let params = filters;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].allRequestDetails, {
            params,
        });
    }
    getSourceDetails(filters) {
        let params = filters;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].allSourceDetails, {
            params,
        });
    }
    last2DaysReport(filters) {
        let params = filters;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].last2DaysReport, {
            params,
        });
    }
    getReports(filters) {
        let params = filters;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].inquiryReports, {
            params,
        });
    }
    getCancelledReports(filters) {
        let params = filters;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].cancelledReports, {
            params,
        });
    }
    getProviders(filters) {
        let params = filters;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].getProviders, {
            params,
        });
    }
    getHighEDUsers(filters) {
        let params = filters;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].getHighEDUsers, {
            params,
        });
    }
    getProviderDetails(filters) {
        let params = filters;
        return this.http.get(`${src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].getProviderDetails}${filters.id}`, {
            params,
        });
    }
    /**
     * change status of enquiry by admin
     * @param payload
     * @returns
     */
    changeEnquiryStatus(payload) {
        return this.http.patch(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].changeEnquiryStatus, payload);
    }
    /**
     * fetch enquiry requests based on params
     * @param params
     * @returns
     */
    fetchEnquiryRequests(args) {
        let params = args;
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].adminEnquiryRequests, { params });
    }
    downloadFile() {
        return this.http.get(src_app_core_constants_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["ApiEndPoints"].downloadFile);
    }
};
ReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ReportService);



/***/ })

}]);
//# sourceMappingURL=reports-reports-module-es2015.js.map
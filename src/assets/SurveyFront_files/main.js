(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 100vh\">\n  <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\n\n  <mat-sidenav-container fxFlexFill class=\"example-container\">\n    <mat-sidenav #sidenav fxLayout=\"column\">\n      <div fxLayout=\"column\">\n        <a (click)=\"sidenav.toggle()\" href=\"#\" mat-button>Close</a>\n        <a href=\"#\" mat-button>Menu Item 1</a>\n        <a href=\"#\" mat-button>Menu Item 2</a>\n        <a href=\"#\" mat-button>Menu Item 3</a>\n        <a href=\"#\" mat-button>Menu Item 4</a>\n        <a href=\"#\" mat-button>Menu Item 5</a>\n        <a href=\"#\" mat-button>Menu Item 6</a>\n      </div>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n\n  <span class=\"Surveys\" routerLink=\"home\">Surveys</span>\n\n  <span class=\"example-spacer\"></span>\n  <div fxShow=\"true\" fxHide.lt-md=\"true\" fxFlex=\"100%\">\n    <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n    <a routerLink=\"home\" mat-button>Home</a>\n\n    <span fxFlex=\"\"></span>\n    <a *ngIf=\"!isUserLoggedIn\" routerLink=\"login\" mat-button>Sign in</a>\n    <a *ngIf=\"!isUserLoggedIn\" routerLink=\"signup\" mat-button>Sign up</a>\n    <a *ngIf=\"isUserLoggedIn\" routerLink=\"dashboard\" mat-button>Dashboard</a>\n    <a *ngIf=\"isUserLoggedIn\" routerLink=\"login\" (click)=\"onLogout()\" mat-button>Logout</a>\n  </div>\n\n  <div fxShow=\"true\" fxHide.gt-sm=\"true\" fxFlex fxLayoutAlign=\"end center\">\n    <i (click)=\"onToggleSidenav()\" class=\"material-icons\">menu</i>\n  </div>\n\n\n</mat-toolbar>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/create-survey/create-survey.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/create-survey/create-survey.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 class=\"page-title\">Create Survey</h2>\n<mat-card>\n\n  <form [formGroup]=\"surveyForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n    <mat-form-field class=\"full-width\">\n      <input formControlName=\"surveyTitle\" matInput placeholder=\"Enter Survey Title\" maxlength=\"50\" [required]=\"true\">\n    </mat-form-field>\n\n    <div class=\"survey-options\">\n\n      <div formArrayName=\"surveyQuestions\" class=\"poll-options\">\n        <h3 class=\"list-title\">Add Survey Questions </h3>\n\n\n        <ol class=\"list-style\">\n          <li *ngFor=\"let questionCtrl of surveyForm.get('surveyQuestions')['controls']; let i = index\">\n            <div [formGroupName]=\"i\">\n              <div>\n                <mat-form-field class=\"full-width\">\n                  <input formControlName=\"questionTitle\" maxlength=\"200\" matInput placeholder=\"Question title\"\n                         [required]=\"true\">\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                  <mat-select formControlName=\"questionType\" placeholder=\"Question type\" ng-model=\"myVar\" [(value)]=\"selectedOption[i]\"\n                              (selectionChange)=\"onSeletQuestionType(selectedOption[i], i)\" [required]=\"true\">\n                    <mat-option *ngFor=\"let type of questions\" [value]=\"type.value\">\n                      {{type.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <div formGroupName=\"questionGroup\" [ngSwitch]=\"selectedOption[i]\">\n                  <div *ngSwitchCase=\"'Single choice'\">\n                    <div *ngIf=\"questionCtrl.controls.questionGroup.controls.options\">\n                      <ul class=\"question-type\" formArrayName=\"options\">\n                        <li *ngFor=\"let optionCtrl of questionCtrl.controls.questionGroup.controls.options.controls let j = index\">\n                          <div [formGroupName]=\"j\" >\n\n                            <mat-form-field >\n                              <input formControlName=\"optionText\" matInput placeholder=\"option text\" maxlength=\"100\"\n                                     [required]=\"true\">\n                            </mat-form-field>\n\n                            <button *ngIf=\"j>=2\" (click)=\"removeOption(i,j)\"  color=\"warn\">X\n\n                            </button>\n\n                          </div>\n                        </li>\n                      </ul>\n                      <button mat-raised-button type=\"button\" (click)=\"addOption(i)\" class=\"mat-sm-button add-option-btn\" color=\"accent\"> Add option</button>\n                    </div>\n                  </div>\n                  <div *ngSwitchCase=\"'Multi choice'\">\n                    <div *ngIf=\"questionCtrl.controls.questionGroup.controls.options\">\n                      <ul class=\"question-type\" formArrayName=\"options\">\n                        <li *ngFor=\"let optionCtrl of questionCtrl.controls.questionGroup.controls.options.controls let j = index\">\n                          <div [formGroupName]=\"j\" >\n\n                            <mat-form-field >\n                              <input formControlName=\"optionText\" matInput placeholder=\"option text\" maxlength=\"100\"\n                                     [required]=\"true\">\n                            </mat-form-field>\n\n                            <button mat-raised-button *ngIf=\"j>=2\" (click)=\"removeOption(i,j)\" color=\"warn\">\n                              X\n                            </button>\n\n                          </div>\n                        </li>\n                      </ul>\n                      <button mat-raised-button type=\"button\" (click)=\"addOption(i)\" class=\"mat-sm-button add-option-btn\" color=\"accent\"> Add option</button>\n                    </div>\n                  </div>\n\n                </div>\n\n              </div>\n              <button *ngIf=\"i>0\" mat-mini-fab color=\"warn\" type=\"button\" (click)=\"onRemoveQuestion(i)\" class=\"poll-remove-btn\">\n                X\n              </button>\n            </div>\n          </li>\n        </ol>\n        <div class=\"addQuestionButton\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n          <button type=\"button\" mat-raised-button (click)=\"onAddQuestion()\">\n            Add Question\n          </button>\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"button-row\">\n      <button class=\"full-width\" color=\"primary\" type=\"submit\" mat-raised-button [disabled]=\"!surveyForm.valid\">\n        <span *ngIf=\"!editMode\">Add New Survey</span>\n        <span *ngIf=\"editMode\">Update Survey</span>\n      </button>\n    </div>\n  </form>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2>Your surveys</h2>\n  <mat-list>\n    <mat-list-item *ngFor=\"let survey of surveys\">\n      <p  class=\"survey-title\" (click)=\"onSurveyClick(survey._id)\">{{survey.title}}</p>\n      <button mat-raised-button (click)=\"onDetails(survey._id)\">Details</button>\n      <p class=\"align-right\">Link: localhost:4200/survey/fill/{{survey._id}}</p>\n    </mat-list-item>\n  </mat-list>\n  <button mat-raised-button color=\"primary\" (click)=\"onCreateSurvey()\">Create survey</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/details-survey/details-survey.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/details-survey/details-survey.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 *ngIf=\"!answerNumber\">Jeszcze nikt nie wypełnił ankiety</h3>\n<div class=\"content\" *ngIf=\"answerNumber\">\n  <h4>Survey title: </h4> <h3>{{survey[0].title}}</h3>\n\n  <div class=\"question\" *ngFor=\"let question of survey[0].question; let i = index\">\n     {{question.contents}}\n    <div *ngFor=\"let answer of question.answer\">\n      {{answer.option}} - {{answer.count}}\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/fill-survey/fill-survey.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/fill-survey/fill-survey.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"container\">\n    <h3>{{survey[0].title}}</h3>\n  </div>\n  <ol class=\"list-style\">\n    <li *ngFor=\"let questionCtrl of survey[0].question; let i = index\">\n      <div>\n        <div>\n          <div [ngSwitch]=\"questionCtrl.type\">\n            <div *ngSwitchCase=\"'Single choice'\">\n              <label id=\"example-radio-group-label\">{{questionCtrl.contents}}</label>\n              <mat-radio-group\n                aria-labelledby=\"example-radio-group-label\"\n                class=\"example-radio-group\"\n                [(ngModel)]=\"filledQuestion[i]\">\n                <mat-radio-button class=\"example-radio-button\" *ngFor=\"let option of questionCtrl.answer\" [value]=\"option.option\">\n                  {{option.option}}\n                </mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ol>\n  <div *ngIf=\"notFilled\"><h4>You have to answer to all questions!</h4></div>\n  <button mat-raised-button (click)=\"addAnswer()\"> Send answers </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n<br><br>\n<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Witaj w serwisie Surveys.pl!</h1>\n  <p class=\"lead\">To jest prosta strona umożliwiająca tworzenie ankiet i badania satysfakcji twoich klientów oraz znajomych!</p>\n  <hr class=\"my-4\">\n  <p>Dołącz do nas już teraz, kliknij w link aby się zarejestrować!!!</p>\n  <a class=\"btn btn-primary btn-lg\" (click)=\"onSignUp()\" role=\"button\">Zarejestruj się</a>\n</div>\n\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <div class=\"picsum-img-wrapper\">\n      <img [src]=\"images[0]\" alt=\"Random first slide\" >\n    </div>\n    <div class=\"carousel-caption\">\n      <h3>Klucz do sukcesu!</h3>\n      <p>Daj się wciągnąć naszej ofercie i otwórz przed sobą drzwi do nowych rozwiązań.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"picsum-img-wrapper\">\n      <img [src]=\"images[1]\" alt=\"Random second slide\">\n    </div>\n    <div class=\"carousel-caption\">\n      <h3>Exploruj razem z nami!</h3>\n      <p>Ludzie od wieków rozwiązują zagadki, my rozwiążemy je za Ciebie!.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"picsum-img-wrapper\">\n      <img [src]=\"images[2]\" alt=\"Random third slide\">\n    </div>\n    <div class=\"carousel-caption\">\n      <h3>Wiedza i dośwaidczenie!</h3>\n      <p>Już nigdy nie poczujesz się zagubiony, dostarczymy Ci nasz bagaż doświadczeń.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n<br><br><br>\n\n<footer class=\"footer\">\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\n    <a href=\"https://mdbootstrap.com/education/angular/\"> Survey.com</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\">\n    <mat-card-header>\n      <mat-card-title>Zaloguj się</mat-card-title>\n    </mat-card-header>\n    <form class=\"example-form\">\n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Hasło\" type=\"password\" [formControl]=\"passwordFormControl\">\n        </mat-form-field>\n      </mat-card-content>\n      <div *ngIf=submitError class=\"message-error-div\">\n        <div class=\"message-error\">Nieprawidłowy email lub hasło</div>\n      </div>\n      <button mat-stroked-button color=\"accent\" (click)=\"onSubmit()\"  class=\"btn-block\">Zaloguj</button>\n    </form>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\">\n    <mat-card-header>\n      <mat-card-title>Zarejestruj się</mat-card-title>\n    </mat-card-header>\n\n    <form class=\"example-form\">\n\n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Imię\" [formControl]=\"firstNameFormControl\">\n          <mat-error *ngIf=\"firstNameFormControl.hasError('required')\">\n            Imię jest <strong>wymagane</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Nazwisko\" [formControl]=\"lastNameFormControl\">\n          <mat-error *ngIf=\"lastNameFormControl.hasError('required')\">\n            Nazwisko jest <strong>wymagane</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Proszę wprowadzić poprawny adres email.\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email jest <strong>wymagany</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"password\" placeholder=\"Hasło\" [formControl]=\"passwordFormControl\">\n          <mat-hint>Hasło musi zawierać małą, wielką litere oraz liczbę.</mat-hint>\n          <mat-error *ngIf=\"passwordFormControl.hasError('pattern')\">\n            Hasło jest zbyt proste\n          </mat-error>\n        </mat-form-field>\n\n      </mat-card-content>\n      <div *ngIf=\"messageStatus !== 'none'\" class=\"message-error-div\">\n        <div *ngIf=\"messageStatus === 'success'\" class=\"message-success\">{{ messageText }}</div>\n        <div *ngIf=\"messageStatus === 'error'\" class=\"message-error\">{{ messageText }}</div>\n      </div>\n\n      <button mat-stroked-button color=\"accent\" (click)=\"onSubmit()\" class=\"btn-block\">Zarejestruj</button>\n\n    </form>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _views_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/create-survey/create-survey.component */ "./src/app/views/create-survey/create-survey.component.ts");
/* harmony import */ var _views_fill_survey_fill_survey_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/fill-survey/fill-survey.component */ "./src/app/views/fill-survey/fill-survey.component.ts");
/* harmony import */ var _views_details_survey_details_survey_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/details-survey/details-survey.component */ "./src/app/views/details-survey/details-survey.component.ts");











const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'dashboard', component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'survey', children: [{ path: 'fill/:id', component: _views_fill_survey_fill_survey_component__WEBPACK_IMPORTED_MODULE_9__["FillSurveyComponent"] },
            { path: 'create', component: _views_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_8__["CreateSurveyComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { path: 'details/:id', component: _views_details_survey_details_survey_component__WEBPACK_IMPORTED_MODULE_10__["DetailsSurveyComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation {\n  display: flex;\n  width: 100%;\n}\n\n.options-right {\n  justify-content: flex-end;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9wdGlvbnMtcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuIiwiLm5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wdGlvbnMtcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'survey-front';
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _views_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/create-survey/create-survey.component */ "./src/app/views/create-survey/create-survey.component.ts");
/* harmony import */ var _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/services/survey.service */ "./src/app/shared/services/survey.service.ts");
/* harmony import */ var _views_fill_survey_fill_survey_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/fill-survey/fill-survey.component */ "./src/app/views/fill-survey/fill-survey.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _views_details_survey_details_survey_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/details-survey/details-survey.component */ "./src/app/views/details-survey/details-survey.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _views_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _views_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
            _views_create_survey_create_survey_component__WEBPACK_IMPORTED_MODULE_18__["CreateSurveyComponent"],
            _views_fill_survey_fill_survey_component__WEBPACK_IMPORTED_MODULE_20__["FillSurveyComponent"],
            _views_details_survey_details_survey_component__WEBPACK_IMPORTED_MODULE_22__["DetailsSurveyComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"]
        ],
        providers: [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__["SessionService"], _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_19__["SurveyService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthGuard = class AuthGuard {
    constructor() { }
    canActivate(route, state) {
        return !!localStorage.getItem('token');
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  cursor: pointer;\n  font-size: 45px;\n}\n\n#a1 {\n  font-size: 16px;\n  padding-left: 50px;\n}\n\na {\n  padding: 20px;\n}\n\na:hover {\n  color: #FFFFFF;\n  text-decoration: none;\n}\n\n.Surveys {\n  font-size: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cbiNhMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuYXtcbiAgcGFkZGluZzogMjBweDtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLlN1cnZleXMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiIsInNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuI2ExIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbmEge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLlN1cnZleXMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/shared/services/user.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(sessionService, userService) {
        this.sessionService = sessionService;
        this.userService = userService;
        this.isUserLoggedIn = false;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() {
        if (this.sessionService.isLoggedIn()) {
            this.userService.setLogin(true);
        }
        this.userService.cast.subscribe(isLoggedIn => {
            this.isUserLoggedIn = isLoggedIn;
        });
    }
    onLogout() {
        this.userService.setLogin(false);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "sidenavToggle", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/services/session.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



let SessionService = class SessionService {
    constructor() { }
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    removeToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('exp');
    }
    addToken(token, exp) {
        localStorage.setItem('token', token);
        localStorage.setItem('exp', exp);
    }
    decode() {
        return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(localStorage.getItem('token'));
    }
    getEmail() {
        return this.decode().email;
    }
};
SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SessionService);



/***/ }),

/***/ "./src/app/shared/services/survey.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/survey.service.ts ***!
  \***************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SurveyService = class SurveyService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000/';
    }
    addSurvey(data) {
        return this.http.post(this.url + 'survey', data);
    }
    getSurveys() {
        return this.http.get(this.url + 'survey');
    }
    getSurveyById(id) {
        return this.http.get(`${this.url}survey/${id}`);
    }
    getSurveyByEmail(email) {
        return this.http.get(`${this.url}survey/findByEmail/${email}`);
    }
    sendFilledSurvey(data) {
        return this.http.post(this.url + 'filled-survey', data);
    }
    loadSurveyAnswers(title) {
        return this.http.get(this.url + 'filled-survey/findByEmail/' + title);
    }
};
SurveyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SurveyService);



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.URL = 'http://localhost:3000/';
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.cast = this.isLoggedIn.asObservable();
    }
    register(firstName, lastName, email, password) {
        return this.http.post(this.URL + 'user/register', {
            first_name: firstName,
            last_name: lastName,
            email,
            password
        });
    }
    login(email, password) {
        return this.http.post(this.URL + 'user/login', { email, password });
    }
    setLogin(data) {
        this.isLoggedIn.next(data);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/views/create-survey/create-survey.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/create-survey/create-survey.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addQuestionButton {\n  margin: 20px;\n}\n\n.page-title {\n  text-align: center;\n  margin: 20px 40px;\n}\n\nform {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL3ZpZXdzL2NyZWF0ZS1zdXJ2ZXkvY3JlYXRlLXN1cnZleS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY3JlYXRlLXN1cnZleS9jcmVhdGUtc3VydmV5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY3JlYXRlLXN1cnZleS9jcmVhdGUtc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZFF1ZXN0aW9uQnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLnBhZ2UtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCA0MHB4O1xufVxuZm9ybSB7XG4gIG1hcmdpbjogMjBweDtcbn1cbiIsIi5hZGRRdWVzdGlvbkJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCA0MHB4O1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/create-survey/create-survey.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/create-survey/create-survey.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSurveyComponent", function() { return CreateSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/survey.service */ "./src/app/shared/services/survey.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let CreateSurveyComponent = class CreateSurveyComponent {
    constructor(router, sessionService, surveyService, snackBar) {
        this.router = router;
        this.sessionService = sessionService;
        this.surveyService = surveyService;
        this.snackBar = snackBar;
        this.selectedOption = [];
        this.editMode = false;
        this.questions = [
            { value: 'Single choice', viewValue: 'Single choice' }
        ];
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        const surveyTitle = '';
        const surveyQuestions = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.surveyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'surveyTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](surveyTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'surveyQuestions': surveyQuestions,
        });
        this.onAddQuestion();
    }
    onAddQuestion() {
        console.log(this.surveyForm);
        const surveyQuestionItem = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'questionTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'questionType': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'questionGroup': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({})
        });
        this.surveyForm.get('surveyQuestions').push(surveyQuestionItem);
    }
    onRemoveQuestion(index) {
        this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({});
        this.surveyForm.get('surveyQuestions').removeAt(index);
        this.selectedOption.splice(index, 1);
    }
    onSeletQuestionType(questionType, index) {
        if (questionType === 'Single choice' || questionType === 'Multi choice') {
            this.addOptionControls(questionType, index);
        }
    }
    addOptionControls(questionType, index) {
        const options = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        const showRemarksBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);
        this.clearFormArray(this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options);
        this.addOption(index);
        this.addOption(index);
    }
    clearFormArray(formArray) {
        while (formArray.length !== 0) {
            formArray.removeAt(0);
        }
    }
    addOption(index) {
        const optionGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'optionText': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options.push(optionGroup);
    }
    removeOption(questionIndex, itemIndex) {
        this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options.removeAt(itemIndex);
    }
    onSubmit() {
        const questions = [];
        this.surveyForm.value.surveyQuestions
            .forEach(item => {
            const options = [];
            item.questionGroup.options.forEach(option => {
                options.push({
                    option: option.optionText
                });
            });
            questions.push({
                type: item.questionType,
                contents: item.questionTitle,
                answer: options
            });
        });
        const sur = this.surveyForm.value;
        const survey = {
            title: sur.surveyTitle,
            email: this.sessionService.getEmail(),
            question: questions
        };
        this.surveyService.addSurvey(survey)
            .subscribe(response => {
            this.snackBar.open('Survey added!', 'Success', { duration: 5000 });
        });
        this.router.navigate(['dashboard']);
    }
};
CreateSurveyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
CreateSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-survey',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-survey.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/create-survey/create-survey.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-survey.component.scss */ "./src/app/views/create-survey/create-survey.component.scss")).default]
    })
], CreateSurveyComponent);



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-list-item:hover {\n  background: #d6d6d6;\n}\n\n.container {\n  padding: 15px;\n}\n\n.mat-list-item .survey-title {\n  cursor: pointer;\n  margin: auto 15px;\n  padding: 0 15px;\n}\n\nbutton {\n  margin: 0 0 0 auto;\n}\n\n.mat-list {\n  margin-bottom: 20px;\n}\n\n.align-right {\n  margin: auto 0 auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSx3QkFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q2ZDZkNjtcbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1hdC1saXN0LWl0ZW0gLnN1cnZleS10aXRsZXtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IGF1dG8gMTVweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xufVxuLm1hdC1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hbGlnbi1yaWdodCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbiIsIi5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q2ZDZkNjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tYXQtbGlzdC1pdGVtIC5zdXJ2ZXktdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogYXV0byAxNXB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cblxuLm1hdC1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFsaWduLXJpZ2h0IHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/survey.service */ "./src/app/shared/services/survey.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let DashboardComponent = class DashboardComponent {
    constructor(router, surveyService, sessionService, snackBar, cd) {
        this.router = router;
        this.surveyService = surveyService;
        this.sessionService = sessionService;
        this.snackBar = snackBar;
        this.cd = cd;
    }
    ngOnInit() {
        this.fetchData();
    }
    fetchData() {
        this.surveyService.getSurveyByEmail(this.sessionService.getEmail())
            .subscribe(response => {
            console.log(response);
            this.surveys = response;
            this.cd.detectChanges();
        });
    }
    onCreateSurvey() {
        this.router.navigate(['survey/create']);
    }
    onSurveyClick(_id) {
        this.router.navigate([`survey/fill/${_id}`]);
    }
    onDetails(_id) {
        this.router.navigate([`survey/details/${_id}`]);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"] },
    { type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/views/details-survey/details-survey.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/details-survey/details-survey.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  margin: 20px;\n}\n\n.content {\n  margin: 20px;\n  text-align: center;\n}\n\n.question {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL3ZpZXdzL2RldGFpbHMtc3VydmV5L2RldGFpbHMtc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9kZXRhaWxzLXN1cnZleS9kZXRhaWxzLXN1cnZleS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGV0YWlscy1zdXJ2ZXkvZGV0YWlscy1zdXJ2ZXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucXVlc3Rpb24ge1xuICBtYXJnaW46IDIwcHg7XG59XG4iLCJoMyB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/details-survey/details-survey.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/details-survey/details-survey.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailsSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSurveyComponent", function() { return DetailsSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/survey.service */ "./src/app/shared/services/survey.service.ts");




let DetailsSurveyComponent = class DetailsSurveyComponent {
    constructor(route, surveyService) {
        this.route = route;
        this.surveyService = surveyService;
        this.answerNumber = 1;
    }
    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.surveyService.getSurveyById(params.id)
                .subscribe(response => {
                this.survey = response;
                console.log(response);
                this.surveyService.loadSurveyAnswers(response[0].title)
                    .subscribe(answers => {
                    this.answerList = answers;
                    this.answerNumber = this.answerList.length;
                    this.countAnswers();
                });
            }, error => {
                console.log(error);
            });
        });
    }
    countAnswers() {
        this.survey[0].question.forEach(question => {
            question.answer.forEach(item => {
                item.count = 0;
            });
        });
        for (let i = 0; i < this.survey[0].question.length; i++) {
            for (let j = 0; j < this.survey[0].question[i].answer.length; j++) {
                this.answerList.forEach(answerItem => {
                    if (answerItem.question[i].answer === this.survey[0].question[i].answer[j].option) {
                        this.survey[0].question[i].answer[j].count++;
                    }
                });
            }
        }
    }
};
DetailsSurveyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"] }
];
DetailsSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-survey',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-survey.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/details-survey/details-survey.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-survey.component.scss */ "./src/app/views/details-survey/details-survey.component.scss")).default]
    })
], DetailsSurveyComponent);



/***/ }),

/***/ "./src/app/views/fill-survey/fill-survey.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/fill-survey/fill-survey.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  text-align: center;\n}\n\n.example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n}\n\n.content {\n  margin: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL3ZpZXdzL2ZpbGwtc3VydmV5L2ZpbGwtc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9maWxsLXN1cnZleS9maWxsLXN1cnZleS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZpbGwtc3VydmV5L2ZpbGwtc3VydmV5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHg7XG59XG4uY29udGVudCB7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iLCIuY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/fill-survey/fill-survey.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/fill-survey/fill-survey.component.ts ***!
  \************************************************************/
/*! exports provided: FillSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillSurveyComponent", function() { return FillSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/survey.service */ "./src/app/shared/services/survey.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let FillSurveyComponent = class FillSurveyComponent {
    constructor(route, surveyService, snackBar, router) {
        this.route = route;
        this.surveyService = surveyService;
        this.snackBar = snackBar;
        this.router = router;
        this.filledQuestion = [];
        this.notFilled = false;
    }
    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params.id;
            this.surveyService.getSurveyById(params.id)
                .subscribe(response => {
                this.survey = response;
                this.numberOfQuestions = response[0].question.length;
                console.log(response);
            }, error => {
                console.log(error);
            });
        });
    }
    addAnswer() {
        let sendAnswers = true;
        for (let i = 0; i < this.numberOfQuestions; i++) {
            if (!this.filledQuestion[i]) {
                sendAnswers = false;
            }
        }
        if (sendAnswers) {
            const questions = [];
            for (let i = 0; i < this.survey[0].question.length; i++) {
                questions.push({
                    contents: this.survey[0].question[i].contents,
                    answer: this.filledQuestion[i],
                });
            }
            const filledSurvey = {
                title: this.survey[0].title,
                question: questions,
            };
            this.surveyService.sendFilledSurvey(filledSurvey)
                .subscribe(response => {
                console.log(response);
                this.snackBar.open('Survey sent!', 'Success', { duration: 5000 });
                this.router.navigate(['home']);
            }, error => {
                console.log(error);
                this.snackBar.open('Something went wrong!', 'Error', { duration: 5000 });
            });
        }
        else {
            this.notFilled = true;
        }
    }
};
FillSurveyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FillSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fill-survey',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fill-survey.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/fill-survey/fill-survey.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fill-survey.component.scss */ "./src/app/views/fill-survey/fill-survey.component.scss")).default]
    })
], FillSurveyComponent);



/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.picsum-img-wrapper {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG5cbn1cbi5waWNzdW0taW1nLXdyYXBwZXJcbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuIiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.images = ['../../assets/1.jpg', '../../assets/2.jpg', '../../assets/3.jpg'];
    }
    ngOnInit() {
    }
    onSignUp() {
        this.router.navigate(['signup']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/views/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.app-header {\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.login-wrapper {\n  height: 100%;\n}\n\n.positronx {\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.box {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 550px;\n}\n\n.box.back {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n\n.login-wrapper .example-form {\n  min-width: 100%;\n  max-width: 700px;\n  width: 100%;\n}\n\n.login-wrapper .example-full-width, .login-wrapper .btn-block {\n  width: 100%;\n}\n\n.login-wrapper mat-card-header {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper mat-card-header mat-card-title {\n  font-size: 30px;\n  margin: 0;\n}\n\n.login-wrapper .mat-card {\n  padding: 40px 70px 50px;\n}\n\n.login-wrapper .mat-stroked-button {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.8375em 0;\n}\n\n.message-error-div {\n  margin-bottom: 23px;\n  width: 100%;\n  height: 44px;\n}\n\n.message-error {\n  padding: 10px;\n  color: #D8000C;\n  background-color: #FFD2D2;\n  font-size: 17px;\n  text-align: center;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFlBQUE7RUFBWSxTQUFBO0VBQVMsVUFBQTtBQ0kvQjs7QURIQTtFQUFLLGlCQUFBO0VBQWlCLGlDQUFBO0FDUXRCOztBRFBBO0VBQVksOEJBQUE7RUFBOEIsZUFBQTtFQUFlLE1BQUE7RUFBTSxPQUFBO0VBQU8sUUFBQTtFQUFRLFVBQUE7RUFBVSxpSEFBQTtBQ2lCeEY7O0FEaEJBO0VBQWUsWUFBQTtBQ29CZjs7QURuQkE7RUFBVyxxQkFBQTtFQUFxQixjQUFBO0FDd0JoQzs7QUR2QkE7RUFBSyxrQkFBQTtFQUFrQixNQUFBO0VBQU0sVUFBQTtFQUFVLFdBQUE7RUFBVyw0QkFBQTtFQUE0QixXQUFBO0VBQVcsZ0JBQUE7RUFBZ0IsbUJBQUE7RUFBbUIsbUJBQUE7RUFBbUIsMkJBQUE7RUFBMkIsdUJBQUE7RUFBdUIsVUFBQTtFQUFVLGdCQUFBO0FDdUMzTTs7QUR0Q0E7RUFBVSxzQkFBQTtFQUFxQiw4QkFBQTtFQUE2QiwwQkFBQTtFQUF5QixVQUFBO0VBQVUsWUFBQTtFQUFXLFdBQUE7QUMrQzFHOztBRDlDQTtFQUFZLFdBQUE7RUFBVyxXQUFBO0VBQVcsWUFBQTtFQUFZLG1CQUFBO0VBQW1CLGtCQUFBO0VBQWtCLFVBQUE7RUFBVSxvQ0FBQTtFQUFtQyxPQUFBO0VBQU8sc0JBQUE7RUFBcUIsOEJBQUE7RUFBNkIsMEJBQUE7RUFBeUIsV0FBQTtBQzZEbE47O0FENURBO0VBQTZCLGVBQUE7RUFBZSxnQkFBQTtFQUFnQixXQUFBO0FDa0U1RDs7QURqRUE7RUFBNkQsV0FBQTtBQ3FFN0Q7O0FEcEVBO0VBQStCLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxjQUFBO0VBQWMsZ0JBQUE7QUMyRTFFOztBRDFFQTtFQUE4QyxlQUFBO0VBQWUsU0FBQTtBQytFN0Q7O0FEOUVBO0VBQXlCLHVCQUFBO0FDa0Z6Qjs7QURqRkE7RUFBbUMsOEJBQUE7RUFBOEIsaUJBQUE7RUFBaUIsbUJBQUE7QUN1RmxGOztBRHRGQTtFQUF1RSxtQkFBQTtBQzBGdkU7O0FEeEZBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzJGRjs7QUR6RkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUM0RkYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keXtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7fVxuYm9keXttaW4taGVpZ2h0OjEwMHZoO2ZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO31cbi5hcHAtaGVhZGVye2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6Mjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO31cbi5sb2dpbi13cmFwcGVye2hlaWdodDoxMDAlO31cbi5wb3NpdHJvbnh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6I2ZmZmZmZjt9XG4uYm94e3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDowO29wYWNpdHk6MTtmbG9hdDpsZWZ0O3BhZGRpbmc6NjBweCA1MHB4IDQwcHggNTBweDt3aWR0aDoxMDAlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjEwcHg7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7ei1pbmRleDo1O21heC13aWR0aDo1NTBweDt9XG4uYm94LmJhY2t7dHJhbnNmb3JtOnNjYWxlKC45NSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTstbXMtdHJhbnNmb3JtOnNjYWxlKC45NSk7dG9wOi0yMHB4O29wYWNpdHk6Ljg7ei1pbmRleDotMTt9XG4uYm94OmJlZm9yZXtjb250ZW50OlwiXCI7d2lkdGg6MTAwJTtoZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMHB4O2JhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3otaW5kZXg6LTE7fVxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZm9ybXttaW4td2lkdGg6MTAwJTttYXgtd2lkdGg6NzAwcHg7d2lkdGg6MTAwJTt9XG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLC5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2t7d2lkdGg6MTAwJTt9XG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXJ7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2ZvbnQtd2VpZ2h0OjcwMDt9XG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjMwcHg7bWFyZ2luOjA7fVxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJke3BhZGRpbmc6NDBweCA3MHB4IDUwcHg7fVxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbntib3JkZXI6MXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDo1NHB4O2JhY2tncm91bmQ6I0ZGRjdGQTt9XG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MC44Mzc1ZW0gMDt9XG5cbi5tZXNzYWdlLWVycm9yLWRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4ubWVzc2FnZS1lcnJvciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjRDgwMDBDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMkQyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIiwiaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmxvZ2luLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wb3NpdHJvbngge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgei1pbmRleDogNTtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbn1cblxuLmJveC5iYWNrIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdG9wOiAtMjBweDtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLCAubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGN0ZBO1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cblxuLm1lc3NhZ2UtZXJyb3ItZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLm1lc3NhZ2UtZXJyb3Ige1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI0Q4MDAwQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDJEMjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");






let LoginComponent = class LoginComponent {
    constructor(userService, router, sessionService) {
        this.userService = userService;
        this.router = router;
        this.sessionService = sessionService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.submitError = false;
    }
    ngOnInit() {
        this.sessionService.removeToken();
    }
    onSubmit() {
        this.userService.login(this.emailFormControl.value, this.passwordFormControl.value)
            .subscribe((res) => {
            this.sessionService.addToken(res.token, res.exp);
            this.userService.setLogin(true);
            this.router.navigate(['/dashboard']);
        }, (error) => {
            console.log(error);
            this.submitError = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/views/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/views/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-image: url(https://lh4.googleusercontent.com/-XplyTa1Za-I/VMSgIyAYkHI/AAAAAAAADxM/oL-rD6VP4ts/w1184-h666/Android-Lollipop-wallpapers-Google-Now-Wallpaper-2.png);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.app-header {\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.login-wrapper {\n  height: 100%;\n}\n\n.positronx {\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.box {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 550px;\n}\n\n.box.back {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n\n.login-wrapper .example-form {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper .example-full-width, .login-wrapper .btn-block {\n  width: 100%;\n}\n\n.login-wrapper mat-card-header {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper mat-card-header mat-card-title {\n  font-size: 30px;\n  margin: 0;\n}\n\n.login-wrapper .mat-card {\n  padding: 40px 70px 50px;\n}\n\n.login-wrapper .mat-stroked-button {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.8375em 0;\n}\n\n.message-error-div {\n  margin-bottom: 23px;\n  width: 100%;\n  height: 44px;\n}\n\n.message-error {\n  padding: 10px;\n  color: #D8000C;\n  background-color: #FFD2D2;\n  font-size: 17px;\n  text-align: center;\n  border-radius: 4px;\n}\n\n.message-success {\n  padding: 10px;\n  margin: 10px 0;\n  font-size: 17px;\n  width: 100%;\n  text-align: center;\n  color: #4F8A10;\n  background-color: #DFF2BF;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dvanRlay9Eb2t1bWVudHkvYW5raWV0eS1mcm9udC9zcmMvYXBwL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFlBQUE7RUFBWSxTQUFBO0VBQVMsVUFBQTtBQ0kvQjs7QURIQTtFQUFLLDJLQUFBO0VBQTJLLDJCQUFBO0VBQTJCLHNCQUFBO0VBQXNCLDRCQUFBO0VBQTRCLGlCQUFBO0VBQWlCLGlDQUFBO0FDWTlROztBRFhBO0VBQVksOEJBQUE7RUFBOEIsZUFBQTtFQUFlLE1BQUE7RUFBTSxPQUFBO0VBQU8sUUFBQTtFQUFRLFVBQUE7RUFBVSxpSEFBQTtBQ3FCeEY7O0FEcEJBO0VBQWUsWUFBQTtBQ3dCZjs7QUR2QkE7RUFBVyxxQkFBQTtFQUFxQixjQUFBO0FDNEJoQzs7QUQzQkE7RUFBSyxrQkFBQTtFQUFrQixNQUFBO0VBQU0sVUFBQTtFQUFVLFdBQUE7RUFBVyw0QkFBQTtFQUE0QixXQUFBO0VBQVcsZ0JBQUE7RUFBZ0IsbUJBQUE7RUFBbUIsbUJBQUE7RUFBbUIsMkJBQUE7RUFBMkIsdUJBQUE7RUFBdUIsVUFBQTtFQUFVLGdCQUFBO0FDMkMzTTs7QUQxQ0E7RUFBVSxzQkFBQTtFQUFxQiw4QkFBQTtFQUE2QiwwQkFBQTtFQUF5QixVQUFBO0VBQVUsWUFBQTtFQUFXLFdBQUE7QUNtRDFHOztBRGxEQTtFQUFZLFdBQUE7RUFBVyxXQUFBO0VBQVcsWUFBQTtFQUFZLG1CQUFBO0VBQW1CLGtCQUFBO0VBQWtCLFVBQUE7RUFBVSxvQ0FBQTtFQUFtQyxPQUFBO0VBQU8sc0JBQUE7RUFBcUIsOEJBQUE7RUFBNkIsMEJBQUE7RUFBeUIsV0FBQTtBQ2lFbE47O0FEaEVBO0VBQTZCLGVBQUE7RUFBZSxnQkFBQTtFQUFnQixXQUFBO0FDc0U1RDs7QURyRUE7RUFBNkQsV0FBQTtBQ3lFN0Q7O0FEeEVBO0VBQStCLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxjQUFBO0VBQWMsZ0JBQUE7QUMrRTFFOztBRDlFQTtFQUE4QyxlQUFBO0VBQWUsU0FBQTtBQ21GN0Q7O0FEbEZBO0VBQXlCLHVCQUFBO0FDc0Z6Qjs7QURyRkE7RUFBbUMsOEJBQUE7RUFBOEIsaUJBQUE7RUFBaUIsbUJBQUE7QUMyRmxGOztBRDFGQTtFQUF1RSxtQkFBQTtBQzhGdkU7O0FENUZBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQytGRjs7QUQ3RkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNnR0Y7O0FEOUZBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNpR0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keXtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7fVxuYm9keXtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLVhwbHlUYTFaYS1JL1ZNU2dJeUFZa0hJL0FBQUFBQUFBRHhNL29MLXJENlZQNHRzL3cxMTg0LWg2NjYvQW5kcm9pZC1Mb2xsaXBvcC13YWxscGFwZXJzLUdvb2dsZS1Ob3ctV2FsbHBhcGVyLTIucG5nKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O21pbi1oZWlnaHQ6MTAwdmg7Zm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7fVxuLmFwcC1oZWFkZXJ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoyO2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7fVxuLmxvZ2luLXdyYXBwZXJ7aGVpZ2h0OjEwMCU7fVxuLnBvc2l0cm9ueHt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojZmZmZmZmO31cbi5ib3h7cG9zaXRpb246cmVsYXRpdmU7dG9wOjA7b3BhY2l0eToxO2Zsb2F0OmxlZnQ7cGFkZGluZzo2MHB4IDUwcHggNDBweCA1MHB4O3dpZHRoOjEwMCU7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MTBweDt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt6LWluZGV4OjU7bWF4LXdpZHRoOjU1MHB4O31cbi5ib3guYmFja3t0cmFuc2Zvcm06c2NhbGUoLjk1KTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjk1KTt0b3A6LTIwcHg7b3BhY2l0eTouODt6LWluZGV4Oi0xO31cbi5ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcIjt3aWR0aDoxMDAlO2hlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6MTBweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTEwcHg7YmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKC45NSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTstbXMtdHJhbnNmb3JtOnNjYWxlKC45NSk7ei1pbmRleDotMTt9XG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3Jte21pbi13aWR0aDoxMDAlO21heC13aWR0aDozMDBweDt3aWR0aDoxMDAlO31cbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9ja3t3aWR0aDoxMDAlO31cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Zm9udC13ZWlnaHQ6NzAwO31cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZXtmb250LXNpemU6MzBweDttYXJnaW46MDt9XG4ubG9naW4td3JhcHBlciAubWF0LWNhcmR7cGFkZGluZzo0MHB4IDcwcHggNTBweDt9XG4ubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9ue2JvcmRlcjoxcHggc29saWQgY3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjU0cHg7YmFja2dyb3VuZDojRkZGN0ZBO31cbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzowLjgzNzVlbSAwO31cblxuLm1lc3NhZ2UtZXJyb3ItZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDRweDtcbn1cbi5tZXNzYWdlLWVycm9yIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNEODAwMEM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQyRDI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubWVzc2FnZS1zdWNjZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0RjhBMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkYyQkY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiIsImh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLVhwbHlUYTFaYS1JL1ZNU2dJeUFZa0hJL0FBQUFBQUFBRHhNL29MLXJENlZQNHRzL3cxMTg0LWg2NjYvQW5kcm9pZC1Mb2xsaXBvcC13YWxscGFwZXJzLUdvb2dsZS1Ob3ctV2FsbHBhcGVyLTIucG5nKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubG9naW4td3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBvc2l0cm9ueCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB6LWluZGV4OiA1O1xuICBtYXgtd2lkdGg6IDU1MHB4O1xufVxuXG4uYm94LmJhY2sge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0b3A6IC0yMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsIC5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmQge1xuICBwYWRkaW5nOiA0MHB4IDcwcHggNTBweDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY3RkE7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjgzNzVlbSAwO1xufVxuXG4ubWVzc2FnZS1lcnJvci1kaXYge1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4ubWVzc2FnZS1lcnJvciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjRDgwMDBDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMkQyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubWVzc2FnZS1zdWNjZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0RjhBMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkYyQkY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");




let RegisterComponent = class RegisterComponent {
    constructor(userService) {
        this.userService = userService;
        this.messageStatus = 'none';
        this.firstNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]);
        this.lastNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]);
    }
    ngOnInit() {
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.emailFormControl.valid && this.passwordFormControl.valid && this.firstNameFormControl.valid && this.lastNameFormControl.valid) {
                yield this.userService.register(this.firstNameFormControl.value, this.lastNameFormControl.value, this.emailFormControl.value, this.passwordFormControl.value)
                    .subscribe((res) => {
                    this.messageStatus = 'success';
                    this.messageText = 'Konto zostało utworzone!';
                }, (error) => {
                    if (error.status === 400) {
                        this.messageStatus = 'error';
                        this.messageText = 'Email jest już zajęty!';
                    }
                });
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/views/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/wojtek/Dokumenty/ankiety-front/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /home/wojtek/Dokumenty/ankiety-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
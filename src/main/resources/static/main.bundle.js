webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "\n.chip-right{\n    width: 40%;\n    float: right;\n    margin-bottom: 40px;\n}\n\n.chip-left{\n    width: 40%;\n    float: left;\n    margin-bottom: 40px;\n}\n\n.my-chip-text {\n    font-size: large;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<input *ngIf=\"messages.length == 0\" style=\"font-size: large; width: 40%\" type=\"text\" #boxTop (keyup.enter)=\"onEnter(boxTop)\" >\n\n<md-chip-list class=\"mat-chip-list-stacked\" *ngFor=\"let m of messages\">\n<div style=\"clear: both\">\n    <md-chip [ngClass] = \"m.me == true ? 'chip-left' : 'chip-right'\" color=\"{{m.me == true ? 'primary' : 'accent'}}\" selected=\"true\">\n       <span class=\"my-chip-text\">{{m.message}}</span>\n    </md-chip>\n    <!--span [ngStyle]=\"{'color': m.me == true ? 'red' : 'blue'}\">{{m.message}}</span-->\n    <p style=\"clear:both\"></p>\n    <div *ngIf=\"m.id == messageId\"><input style=\"font-size: large; width: 40%\" type=\"text\" #box (keyup.enter)=\"onEnter(box)\" ></div>\n</div>\n\n</md-chip-list>\n"

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_consts__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NexmoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NexmoService = (function () {
    function NexmoService(http) {
        this.http = http;
        //private serverUrl = "http://localhost:8080";
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_4__config_consts__["a" /* SERVER_URL */];
        this.numberToText = __WEBPACK_IMPORTED_MODULE_4__config_consts__["b" /* NUMBER_TO_TEXT */];
    }
    NexmoService.prototype.getMessageId = function () {
        var url = this.serverUrl + "/getLastMsgId";
        return this.http.get(url).map(function (i) { return i.json(); });
    };
    NexmoService.prototype.getMessage = function () {
        var url = this.serverUrl + "/getMsg";
        return this.http.get(url).map(function (i) { return i.json(); });
    };
    NexmoService.prototype.sendMessage = function (txt) {
        var url = this.serverUrl + "/send?number=" + this.numberToText + "&msg=" + txt;
        // let search = new URLSearchParams();
        // search.set("number","447703415105");
        // search.set("msg",txt);
        return this.http.get(url).map(function (i) { return i.text(); });
    };
    return NexmoService;
}());
NexmoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NexmoService);

var _a;
//# sourceMappingURL=nexmo.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nexmo_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(nexmoService) {
        var _this = this;
        this.nexmoService = nexmoService;
        this.title = 'SMS Chat!';
        this.messageId = 0;
        this.messages = [];
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].interval(5000).subscribe(function () {
            nexmoService.getMessageId().subscribe(function (n) {
                console.log(n);
                if (n != _this.messageId) {
                    nexmoService.getMessage().subscribe(function (m) {
                        console.log(m.message);
                        _this.messageId = m.number;
                        _this.messages.push({ message: m.message, me: false, id: m.number });
                    });
                }
            });
        });
    }
    AppComponent.prototype.onEnter = function (box) {
        console.log(box.value);
        this.messages.push({ message: box.value, me: true, id: this.messageId });
        box.remove();
        this.nexmoService.sendMessage(box.value).subscribe(function (s) { return console.log(s); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(154),
        styles: [__webpack_require__(153)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_nexmo_service__["a" /* NexmoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nexmo_service__["a" /* NexmoService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_nexmo_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdChipsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_nexmo_service__["a" /* NexmoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NUMBER_TO_TEXT; });
var SERVER_URL = 'https://boiling-scrubland-28576.herokuapp.com';
//export const SERVER_URL = 'http://localhost:8080';
var NUMBER_TO_TEXT = '447703415105';
//# sourceMappingURL=config-consts.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.bundle.js.map
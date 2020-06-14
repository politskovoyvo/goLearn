require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/blue.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/core/auth/auth.guard.ts");



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: "login",
        loadChildren: function () { return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "./app/auth/login.module.ts")).then(function (m) { return m.LoginModule; }); }
    },
    {
        path: "home",
        loadChildren: function () { return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "./app/home/home.module.ts")).then(function (m) { return m.HomeModule; }); },
        canActivate: [_app_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]],
            providers: [_app_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/core/auth/auth.service.ts");







var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            providers: [_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], { provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/core/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/core/auth/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(routerExtensions, auth) {
        this.routerExtensions = routerExtensions;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.user.refresh_token) {
            this.routerExtensions.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] },
        { type: _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"],
            _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./app/core/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);


// const jwt_decode = jwt_decode_;
var AuthService = /** @class */ (function () {
    function AuthService(
    // private router: RouterExtensions,
    ) {
        this.EMAIL = 'admin';
        this.USER_PASSWORD = 'admin';
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.userSubject.next({});
    }
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.userSubject.getValue();
        },
        set: function (value) {
            this.userSubject.next(value);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.loginUser = function (email, password) {
        this.authorization(email, password);
    };
    AuthService.prototype.authorization = function (email, password) {
        if (email.toLowerCase() === this.EMAIL
            && password.toLowerCase() === this.USER_PASSWORD) {
            this.userSubject.next({
                email: this.EMAIL,
                password: this.USER_PASSWORD,
                refresh_token: 'Test_TOKEN',
            });
        }
    };
    // private authorization(login, password): Observable<any> {
    //     // return this.getTokenRequest(`grant_type=password&username=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`).pipe(
    //     //   flatMap((tokenInfo) => this.updateSession(tokenInfo)),
    //     //   catchError((err) => {
    //     //     if (err instanceof HttpErrorResponse) {
    //     //       if (err.error.error) {
    //     //         switch (err.error.error_description) {
    //     //           case 'invalid logopass':
    //     //             throw new Error('Неправильный логин или пароль');
    //     //           default:
    //     //             this.errorEmitter.emit(err.error.error);
    //     //         }
    //     //       }
    //     //     }
    //     //     this.errorEmitter.emit(err.message);
    //     //     return of(err);
    //     //   }),
    //     // );
    //     return of();
    // }
    // public loginUser(login: string, password: string) {
    //     return this.authorization(login, password).pipe(flatMap(() => this.redirectIfNeed()));
    // }
    // public logout(currentUrl?: string) {
    //     this.clearSession();
    //
    //     // // Урл на котором находимся сейчас
    //     // if (!currentUrl) {
    //     //     currentUrl = this.router.url;
    //     // }
    //     //
    //     // // Если мы уже находимся на странице логина, никуда не редиректим
    //     // if (currentUrl.slice(0, 6) === '/login') {
    //     //     return;
    //     // }
    //     //
    //     // // Если мы не в руте, сохраняем редирект на текущую страницу.
    //     // if (currentUrl && currentUrl !== '/') {
    //     //     return this.router.navigate(['/', 'login'], {queryParams: {redirectUrl: currentUrl}});
    //     // } else {
    //     //     // Если мы в руте, сохраняем редирект на рут.
    //     //     return this.router.navigate(['/', 'login']);
    //     // }
    // }
    // public getTokenRequest(tokenData, isCourier?: boolean): Observable<any> {
    //   const SCOPES_COURIER = 'api_permission openid userInfo offline_access';
    //
    //   const headers = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     Authorization: isCourier ? 'Basic Y291cmllcl9hcHA6QWx3MDVMQzY3VWc0clA3ZQ==' : 'Basic ZXh0ZW5kZWRfanM6c2VjcmV0',
    //   });
    //   return this.http
    //     .post(`${environment.urls.identityServerUrl}/connect/token`, `${tokenData}&scope=${encodeURIComponent(isCourier ? SCOPES_COURIER : environment.tokenScopes)}`, {
    //       withCredentials: true,
    //       headers,
    //     })
    //     .pipe(timeout(2000), retry(3));
    // }
    // public loadEPermissions(): Observable<any> {
    //   const headers = new HttpHeaders({
    //     Authorization: `${this.user.token_type} ${this.user.access_token}`,
    //   });
    //   return this.http.get(`${environment.urls.permissionsApi}/v1/employee?id=${this.user.employee_id}`, {headers}).pipe(
    //     map((permissions: any) => {
    //       if (localStorage.getItem('another-employee')) {
    //         permissions = JSON.parse(localStorage.getItem('another-employee'));
    //         permissions.do_permissions = permissions.do_permissions.map((i) => i.do);
    //       }
    //       return permissions;
    //     }),
    //     tap((permissions: any) => {
    //       this.epSubject.next(new EPermissions(permissions));
    //     }),
    //     flatMap(({permissions, offices}) => this.getCourierBanInfo().pipe(map(() => ({permissions, offices})))),
    //   );
    // }
    // public requestTokenUpdate(): Observable<any> {
    //   return this.getTokenRequest(`refresh_token=${this.user.refresh_token}&grant_type=refresh_token`, !!localStorage.getItem('actualPhone')).pipe(
    //     flatMap((tokenInfo) => this.updateSession(tokenInfo)),
    //     catchError(() => this.logout()),
    //   );
    // }
    // private redirectIfNeed() {
    //     const url = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl');
    //     if (url) {
    //         // Получаем путь
    //         const redirectUrl = url.split('?')[0];
    //
    //         if (!url.split('?')[1]) {
    //             return this.router.navigate([redirectUrl]);
    //         }
    //
    //         const params = {};
    //         // Получаем строку с параметрами
    //         url
    //             .split('?')[1]
    //             // Преобразуем строку в массив из строк с параметрами
    //             .split('&')
    //             // Берем ключи и значения и заполняем пустой объект
    //             .map((elem) => {
    //                 params[elem.split('=')[0]] = elem.split('=')[1];
    //             });
    //         return this.router.navigate([redirectUrl], {queryParams: params});
    //     } else {
    //         return this.router.navigate(['']);
    //     }
    // }
    // private clearSession() {
    //     localStorage.removeItem('isCourier');
    //     localStorage.removeItem('actualPhone');
    //     // localStorage.removeItem(SESSION_STORAGE_KEYS.refreshToken);
    //     this.userSubject.next({} as User);
    // }
    //
    // private updateSession(tokenInfo: any) {
    //   this.updateLocalToken(tokenInfo);
    //
    //   return this.loadEPermissions().pipe(
    //     tap(() => this.userSubject.next(this.user)),
    //     // retryWhen((errors) => errors.pipe(delay(10000), take(3))),
    //   );
    // }
    // private updateLocalToken(tokenInfo) {
    //     if (+this.user.employee_id <= 0) {
    //         this.clearSession();
    //         return;
    //     }
    //     Object.assign(this.user, tokenInfo);
    //     Object.assign(this.user, this.getDecodedAccessToken(tokenInfo.access_token));
    //
    //     // Сохраняем настоящий айдишник (для заходов под кем-то)
    //     this.user.family_name = this.user.family_name || this.user.name;
    //
    //     if (localStorage.getItem('another-employee')) {
    //         this.user.id = JSON.parse(localStorage.getItem('another-employee')).employee_id;
    //         this.user.family_name = JSON.parse(localStorage.getItem('another-employee')).family_name;
    //     }
    //
    //     this.user.employee_id = +this.user.id;
    //     // localStorage.setItem(SESSION_STORAGE_KEYS.refreshToken, tokenInfo.refresh_token);
    //
    //     /**
    //      * Начиная с 80 версии хрома, у браузера меняется политика отношения к кукам у которых нет атрибута sameSite.
    //      * Для того, чтобы вернуться к legacy-режиму необходимо выставить атрибуты secure: true и sameSite: 'None'
    //      */
    //     // this.cookieService.set('Authorization', `Bearer ${tokenInfo.access_token}`, null, '/', '.wildberries.ru', true, 'None');
    // }
    AuthService.prototype.getDecodedAccessToken = function (token) {
        try {
            // return jwt_decode(token);
        }
        catch (error) {
            return null;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-calendar/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar/angular");

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29yZS9hdXRoL2F1dGguZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvcmUvYXV0aC9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLCtHQUFpRSxtQkFBTyxDQUFDLDRIQUEwRjtBQUNuSyxnRUFBZ0UsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbEssaUVBQWlFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ25LLGdFQUFnRSxtQkFBTyxDQUFDLDRIQUEwRixHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSxpRUFBaUUsRUFBRSxpRUFBaUUsRUFBRSwySkFBMko7QUFDcGdCLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUU4QjtBQUNoQjtBQUVyRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsY0FBTSxpSEFBaUMsQ0FBQyxJQUFJLENBQUMs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Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxpQzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCJ+L2FwcC9jb3JlL2F1dGgvYXV0aC5ndWFyZFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIn4vYXBwL2F1dGgvbG9naW4ubW9kdWxlXCIpLnRoZW4oKG0pID0+IG0uTG9naW5Nb2R1bGUpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIn4vYXBwL2hvbWUvaG9tZS5tb2R1bGVcIikudGhlbigobSkgPT4gbS5Ib21lTW9kdWxlKSxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoR3VhcmRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iLCJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7QXBwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9jb3JlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0NhbkFjdGl2YXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwifi9hcHAvY29yZS9hdXRoL2F1dGguc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgY2FuQWN0aXZhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoLnVzZXIucmVmcmVzaF90b2tlbikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEJlaGF2aW9yU3ViamVjdCxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCJ+L2FwcC9jb3JlL2F1dGgvdXNlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbi8vIGNvbnN0IGp3dF9kZWNvZGUgPSBqd3RfZGVjb2RlXztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IEVNQUlMID0gJ2FkbWluJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFVTRVJfUEFTU1dPUkQgPSAnYWRtaW4nO1xuICAgIHByaXZhdGUgdXNlclN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxVc2VyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30gYXMgVXNlcik7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLy8gcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlclN1YmplY3QubmV4dCh7fSBhcyBVc2VyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHVzZXIoKTogVXNlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJTdWJqZWN0LmdldFZhbHVlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdXNlcih2YWx1ZTogVXNlcikge1xuICAgICAgICB0aGlzLnVzZXJTdWJqZWN0Lm5leHQodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpblVzZXIoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmF1dGhvcml6YXRpb24oZW1haWwsIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1dGhvcml6YXRpb24oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICBpZiAoZW1haWwudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5FTUFJTFxuICAgICAgICAgICAgJiYgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5VU0VSX1BBU1NXT1JEKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTdWJqZWN0Lm5leHQoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLkVNQUlMLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLlVTRVJfUEFTU1dPUkQsXG4gICAgICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogJ1Rlc3RfVE9LRU4nLFxuICAgICAgICAgICAgfSBhcyBVc2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgYXV0aG9yaXphdGlvbihsb2dpbiwgcGFzc3dvcmQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vICAgICAvLyByZXR1cm4gdGhpcy5nZXRUb2tlblJlcXVlc3QoYGdyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9JHtlbmNvZGVVUklDb21wb25lbnQobG9naW4pfSZwYXNzd29yZD0ke2VuY29kZVVSSUNvbXBvbmVudChwYXNzd29yZCl9YCkucGlwZShcbiAgICAvLyAgICAgLy8gICBmbGF0TWFwKCh0b2tlbkluZm8pID0+IHRoaXMudXBkYXRlU2Vzc2lvbih0b2tlbkluZm8pKSxcbiAgICAvLyAgICAgLy8gICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAvLyAgICAgLy8gICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgIC8vICAgICAvLyAgICAgICBpZiAoZXJyLmVycm9yLmVycm9yKSB7XG4gICAgLy8gICAgIC8vICAgICAgICAgc3dpdGNoIChlcnIuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24pIHtcbiAgICAvLyAgICAgLy8gICAgICAgICAgIGNhc2UgJ2ludmFsaWQgbG9nb3Bhc3MnOlxuICAgIC8vICAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwnKTtcbiAgICAvLyAgICAgLy8gICAgICAgICAgIGRlZmF1bHQ6XG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIHRoaXMuZXJyb3JFbWl0dGVyLmVtaXQoZXJyLmVycm9yLmVycm9yKTtcbiAgICAvLyAgICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy8gICAgIHRoaXMuZXJyb3JFbWl0dGVyLmVtaXQoZXJyLm1lc3NhZ2UpO1xuICAgIC8vICAgICAvLyAgICAgcmV0dXJuIG9mKGVycik7XG4gICAgLy8gICAgIC8vICAgfSksXG4gICAgLy8gICAgIC8vICk7XG4gICAgLy8gICAgIHJldHVybiBvZigpO1xuICAgIC8vIH1cblxuICAgIC8vIHB1YmxpYyBsb2dpblVzZXIobG9naW46IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5hdXRob3JpemF0aW9uKGxvZ2luLCBwYXNzd29yZCkucGlwZShmbGF0TWFwKCgpID0+IHRoaXMucmVkaXJlY3RJZk5lZWQoKSkpO1xuICAgIC8vIH1cblxuICAgIC8vIHB1YmxpYyBsb2dvdXQoY3VycmVudFVybD86IHN0cmluZykge1xuICAgIC8vICAgICB0aGlzLmNsZWFyU2Vzc2lvbigpO1xuICAgIC8vXG4gICAgLy8gICAgIC8vIC8vINCj0YDQuyDQvdCwINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNC80YHRjyDRgdC10LnRh9Cw0YFcbiAgICAvLyAgICAgLy8gaWYgKCFjdXJyZW50VXJsKSB7XG4gICAgLy8gICAgIC8vICAgICBjdXJyZW50VXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gICAgIC8vXG4gICAgLy8gICAgIC8vIC8vINCV0YHQu9C4INC80Ysg0YPQttC1INC90LDRhdC+0LTQuNC80YHRjyDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0LvQvtCz0LjQvdCwLCDQvdC40LrRg9C00LAg0L3QtSDRgNC10LTQuNGA0LXQutGC0LjQvFxuICAgIC8vICAgICAvLyBpZiAoY3VycmVudFVybC5zbGljZSgwLCA2KSA9PT0gJy9sb2dpbicpIHtcbiAgICAvLyAgICAgLy8gICAgIHJldHVybjtcbiAgICAvLyAgICAgLy8gfVxuICAgIC8vICAgICAvL1xuICAgIC8vICAgICAvLyAvLyDQldGB0LvQuCDQvNGLINC90LUg0LIg0YDRg9GC0LUsINGB0L7RhdGA0LDQvdGP0LXQvCDRgNC10LTQuNGA0LXQutGCINC90LAg0YLQtdC60YPRidGD0Y4g0YHRgtGA0LDQvdC40YbRgy5cbiAgICAvLyAgICAgLy8gaWYgKGN1cnJlbnRVcmwgJiYgY3VycmVudFVybCAhPT0gJy8nKSB7XG4gICAgLy8gICAgIC8vICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJywgJ2xvZ2luJ10sIHtxdWVyeVBhcmFtczoge3JlZGlyZWN0VXJsOiBjdXJyZW50VXJsfX0pO1xuICAgIC8vICAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICAvLyAgICAgLy8g0JXRgdC70Lgg0LzRiyDQsiDRgNGD0YLQtSwg0YHQvtGF0YDQsNC90Y/QtdC8INGA0LXQtNC40YDQtdC60YIg0L3QsCDRgNGD0YIuXG4gICAgLy8gICAgIC8vICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJywgJ2xvZ2luJ10pO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIGdldFRva2VuUmVxdWVzdCh0b2tlbkRhdGEsIGlzQ291cmllcj86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vICAgY29uc3QgU0NPUEVTX0NPVVJJRVIgPSAnYXBpX3Blcm1pc3Npb24gb3BlbmlkIHVzZXJJbmZvIG9mZmxpbmVfYWNjZXNzJztcbiAgICAvL1xuICAgIC8vICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAvLyAgICAgQXV0aG9yaXphdGlvbjogaXNDb3VyaWVyID8gJ0Jhc2ljIFkyOTFjbWxsY2w5aGNIQTZRV3gzTURWTVF6WTNWV2MwY2xBM1pRPT0nIDogJ0Jhc2ljIFpYaDBaVzVrWldSZmFuTTZjMlZqY21WMCcsXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAvLyAgICAgLnBvc3QoYCR7ZW52aXJvbm1lbnQudXJscy5pZGVudGl0eVNlcnZlclVybH0vY29ubmVjdC90b2tlbmAsIGAke3Rva2VuRGF0YX0mc2NvcGU9JHtlbmNvZGVVUklDb21wb25lbnQoaXNDb3VyaWVyID8gU0NPUEVTX0NPVVJJRVIgOiBlbnZpcm9ubWVudC50b2tlblNjb3Blcyl9YCwge1xuICAgIC8vICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAvLyAgICAgICBoZWFkZXJzLFxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAucGlwZSh0aW1lb3V0KDIwMDApLCByZXRyeSgzKSk7XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIGxvYWRFUGVybWlzc2lvbnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgIC8vICAgICBBdXRob3JpemF0aW9uOiBgJHt0aGlzLnVzZXIudG9rZW5fdHlwZX0gJHt0aGlzLnVzZXIuYWNjZXNzX3Rva2VufWAsXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2Vudmlyb25tZW50LnVybHMucGVybWlzc2lvbnNBcGl9L3YxL2VtcGxveWVlP2lkPSR7dGhpcy51c2VyLmVtcGxveWVlX2lkfWAsIHtoZWFkZXJzfSkucGlwZShcbiAgICAvLyAgICAgbWFwKChwZXJtaXNzaW9uczogYW55KSA9PiB7XG4gICAgLy8gICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbm90aGVyLWVtcGxveWVlJykpIHtcbiAgICAvLyAgICAgICAgIHBlcm1pc3Npb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW5vdGhlci1lbXBsb3llZScpKTtcbiAgICAvLyAgICAgICAgIHBlcm1pc3Npb25zLmRvX3Blcm1pc3Npb25zID0gcGVybWlzc2lvbnMuZG9fcGVybWlzc2lvbnMubWFwKChpKSA9PiBpLmRvKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgcmV0dXJuIHBlcm1pc3Npb25zO1xuICAgIC8vICAgICB9KSxcbiAgICAvLyAgICAgdGFwKChwZXJtaXNzaW9uczogYW55KSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5lcFN1YmplY3QubmV4dChuZXcgRVBlcm1pc3Npb25zKHBlcm1pc3Npb25zKSk7XG4gICAgLy8gICAgIH0pLFxuICAgIC8vICAgICBmbGF0TWFwKCh7cGVybWlzc2lvbnMsIG9mZmljZXN9KSA9PiB0aGlzLmdldENvdXJpZXJCYW5JbmZvKCkucGlwZShtYXAoKCkgPT4gKHtwZXJtaXNzaW9ucywgb2ZmaWNlc30pKSkpLFxuICAgIC8vICAgKTtcbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgcmVxdWVzdFRva2VuVXBkYXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gICByZXR1cm4gdGhpcy5nZXRUb2tlblJlcXVlc3QoYHJlZnJlc2hfdG9rZW49JHt0aGlzLnVzZXIucmVmcmVzaF90b2tlbn0mZ3JhbnRfdHlwZT1yZWZyZXNoX3Rva2VuYCwgISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0dWFsUGhvbmUnKSkucGlwZShcbiAgICAvLyAgICAgZmxhdE1hcCgodG9rZW5JbmZvKSA9PiB0aGlzLnVwZGF0ZVNlc3Npb24odG9rZW5JbmZvKSksXG4gICAgLy8gICAgIGNhdGNoRXJyb3IoKCkgPT4gdGhpcy5sb2dvdXQoKSksXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIC8vIHByaXZhdGUgcmVkaXJlY3RJZk5lZWQoKSB7XG4gICAgLy8gICAgIGNvbnN0IHVybCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucXVlcnlQYXJhbU1hcC5nZXQoJ3JlZGlyZWN0VXJsJyk7XG4gICAgLy8gICAgIGlmICh1cmwpIHtcbiAgICAvLyAgICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L/Rg9GC0YxcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmICghdXJsLnNwbGl0KCc/JylbMV0pIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0VXJsXSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIC8vICAgICAgICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRgdGC0YDQvtC60YMg0YEg0L/QsNGA0LDQvNC10YLRgNCw0LzQuFxuICAgIC8vICAgICAgICAgdXJsXG4gICAgLy8gICAgICAgICAgICAgLnNwbGl0KCc/JylbMV1cbiAgICAvLyAgICAgICAgICAgICAvLyDQn9GA0LXQvtCx0YDQsNC30YPQtdC8INGB0YLRgNC+0LrRgyDQsiDQvNCw0YHRgdC40LIg0LjQtyDRgdGC0YDQvtC6INGBINC/0LDRgNCw0LzQtdGC0YDQsNC80LhcbiAgICAvLyAgICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgIC8vICAgICAgICAgICAgIC8vINCR0LXRgNC10Lwg0LrQu9GO0YfQuCDQuCDQt9C90LDRh9C10L3QuNGPINC4INC30LDQv9C+0LvQvdGP0LXQvCDQv9GD0YHRgtC+0Lkg0L7QsdGK0LXQutGCXG4gICAgLy8gICAgICAgICAgICAgLm1hcCgoZWxlbSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBwYXJhbXNbZWxlbS5zcGxpdCgnPScpWzBdXSA9IGVsZW0uc3BsaXQoJz0nKVsxXTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RVcmxdLCB7cXVlcnlQYXJhbXM6IHBhcmFtc30pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcHJpdmF0ZSBjbGVhclNlc3Npb24oKSB7XG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc0NvdXJpZXInKTtcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjdHVhbFBob25lJyk7XG4gICAgLy8gICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFNFU1NJT05fU1RPUkFHRV9LRVlTLnJlZnJlc2hUb2tlbik7XG4gICAgLy8gICAgIHRoaXMudXNlclN1YmplY3QubmV4dCh7fSBhcyBVc2VyKTtcbiAgICAvLyB9XG4gICAgLy9cblxuICAgIC8vIHByaXZhdGUgdXBkYXRlU2Vzc2lvbih0b2tlbkluZm86IGFueSkge1xuICAgIC8vICAgdGhpcy51cGRhdGVMb2NhbFRva2VuKHRva2VuSW5mbyk7XG4gICAgLy9cbiAgICAvLyAgIHJldHVybiB0aGlzLmxvYWRFUGVybWlzc2lvbnMoKS5waXBlKFxuICAgIC8vICAgICB0YXAoKCkgPT4gdGhpcy51c2VyU3ViamVjdC5uZXh0KHRoaXMudXNlcikpLFxuICAgIC8vICAgICAvLyByZXRyeVdoZW4oKGVycm9ycykgPT4gZXJyb3JzLnBpcGUoZGVsYXkoMTAwMDApLCB0YWtlKDMpKSksXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIC8vIHByaXZhdGUgdXBkYXRlTG9jYWxUb2tlbih0b2tlbkluZm8pIHtcbiAgICAvLyAgICAgaWYgKCt0aGlzLnVzZXIuZW1wbG95ZWVfaWQgPD0gMCkge1xuICAgIC8vICAgICAgICAgdGhpcy5jbGVhclNlc3Npb24oKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlciwgdG9rZW5JbmZvKTtcbiAgICAvLyAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXIsIHRoaXMuZ2V0RGVjb2RlZEFjY2Vzc1Rva2VuKHRva2VuSW5mby5hY2Nlc3NfdG9rZW4pKTtcbiAgICAvL1xuICAgIC8vICAgICAvLyDQodC+0YXRgNCw0L3Rj9C10Lwg0L3QsNGB0YLQvtGP0YnQuNC5INCw0LnQtNC40YjQvdC40LogKNC00LvRjyDQt9Cw0YXQvtC00L7QsiDQv9C+0LQg0LrQtdC8LdGC0L4pXG4gICAgLy8gICAgIHRoaXMudXNlci5mYW1pbHlfbmFtZSA9IHRoaXMudXNlci5mYW1pbHlfbmFtZSB8fCB0aGlzLnVzZXIubmFtZTtcbiAgICAvL1xuICAgIC8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Fub3RoZXItZW1wbG95ZWUnKSkge1xuICAgIC8vICAgICAgICAgdGhpcy51c2VyLmlkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW5vdGhlci1lbXBsb3llZScpKS5lbXBsb3llZV9pZDtcbiAgICAvLyAgICAgICAgIHRoaXMudXNlci5mYW1pbHlfbmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Fub3RoZXItZW1wbG95ZWUnKSkuZmFtaWx5X25hbWU7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICB0aGlzLnVzZXIuZW1wbG95ZWVfaWQgPSArdGhpcy51c2VyLmlkO1xuICAgIC8vICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTRVNTSU9OX1NUT1JBR0VfS0VZUy5yZWZyZXNoVG9rZW4sIHRva2VuSW5mby5yZWZyZXNoX3Rva2VuKTtcbiAgICAvL1xuICAgIC8vICAgICAvKipcbiAgICAvLyAgICAgICog0J3QsNGH0LjQvdCw0Y8g0YEgODAg0LLQtdGA0YHQuNC4INGF0YDQvtC80LAsINGDINCx0YDQsNGD0LfQtdGA0LAg0LzQtdC90Y/QtdGC0YHRjyDQv9C+0LvQuNGC0LjQutCwINC+0YLQvdC+0YjQtdC90LjRjyDQuiDQutGD0LrQsNC8INGDINC60L7RgtC+0YDRi9GFINC90LXRgiDQsNGC0YDQuNCx0YPRgtCwIHNhbWVTaXRlLlxuICAgIC8vICAgICAgKiDQlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LLQtdGA0L3Rg9GC0YzRgdGPINC6IGxlZ2FjeS3RgNC10LbQuNC80YMg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LLRi9GB0YLQsNCy0LjRgtGMINCw0YLRgNC40LHRg9GC0Ysgc2VjdXJlOiB0cnVlINC4IHNhbWVTaXRlOiAnTm9uZSdcbiAgICAvLyAgICAgICovXG4gICAgLy8gICAgIC8vIHRoaXMuY29va2llU2VydmljZS5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7dG9rZW5JbmZvLmFjY2Vzc190b2tlbn1gLCBudWxsLCAnLycsICcud2lsZGJlcnJpZXMucnUnLCB0cnVlLCAnTm9uZScpO1xuICAgIC8vIH1cblxuICAgIHByaXZhdGUgZ2V0RGVjb2RlZEFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGp3dF9kZWNvZGUodG9rZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
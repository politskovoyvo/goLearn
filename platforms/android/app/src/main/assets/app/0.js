(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/auth/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/login/login.component.ts");



var routes = [
    { path: "", component: _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./app/auth/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auth/login/login.component.ts");
/* harmony import */ var _app_auth_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/auth/login-routing.module.ts");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _app_auth_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"]
            ],
            declarations: [
                _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <Label text=\"SIGN IN\"></Label>\n</ActionBar>\n<FlexboxLayout class=\"container\" justifyContent=\"center\">\n    <form [formGroup]=\"form\">\n        <StackLayout orientation=\"vertical\">\n            <StackLayout orientation=\"vertical\" class=\"text-view-container\">\n                <Label text=\"EMAIL\"></Label>\n                <TextField hint=\"ivanov@gmail.ru\"\n                           formControlName=\"email\">\n                </TextField>\n            </StackLayout>\n            <StackLayout orientation=\"vertical\" class=\"text-view-container\">\n                <Label text=\"PASSWORD\"></Label>\n                <TextField hint=\"*********\"\n                           formControlName=\"password\">\n                </TextField>\n            </StackLayout>\n            <Button text=\"Sign In\" (tap)=\"onSubmit()\"></Button>\n            <StackLayout orientation=\"vertical\">\n                <Label *ngFor=\"let error of errors\" [text]=\"error\"></Label>\n            </StackLayout>\n        </StackLayout>\n    </form>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/auth/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "button {\n  width: 90%; }\n\nTextField {\n  width: 100%; }\n\nActionBar {\n  background: darkcyan; }\n\nTextView {\n  height: 100px;\n  width: 500px;\n  text-align: center; }\n\n.container {\n  margin-top: 30px;\n  border: 1px solid purple; }\n\n.text-view-container {\n  margin-top: 30px;\n  margin-left: 50px; }\n"

/***/ }),

/***/ "./app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/core/auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, routerExtensions, auth) {
        this.fb = fb;
        this.routerExtensions = routerExtensions;
        this.auth = auth;
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            email: ['admin', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['admin', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.auth.loginUser(this.form.get('email').value, this.form.get('password').value);
            this.routerExtensions.navigate(['/home']);
        }
        this.errors = this.form.get('email').value;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] },
        { type: _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('context', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "templateHtml", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Login",
            template: __webpack_require__("./app/auth/login/login.component.html"),
            styles: [__webpack_require__("./app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"],
            _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9sb2dpbi1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9sb2dpbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBRThCO0FBQ0w7QUFFaEUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4RUFBYyxFQUFDO0NBQ3hDLENBQUM7QUFNRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGtCQUFrQjtRQUo5Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxrQkFBa0IsQ0FDOUI7SUFBRCx5QkFBQztDQUFBO0FBRDhCOzs7Ozs7Ozs7QUNiL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlEO0FBQ1k7QUFDRjtBQUVIO0FBQ0E7QUFDRztBQWlCbkU7SUFBQTtJQUNBLENBQUM7SUFEWSxXQUFXO1FBZnZCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QixpRkFBa0I7Z0JBQ2xCLDBEQUFXO2dCQUNYLGtFQUFtQjtnQkFDbkIsa0ZBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhFQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhEQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxXQUFXLENBQ3ZCO0lBQUQsa0JBQUM7Q0FBQTtBQUR1Qjs7Ozs7Ozs7QUN2QnhCLGlsQzs7Ozs7OztBQ0FBLDBCQUEwQixlQUFlLEVBQUUsZUFBZSxnQkFBZ0IsRUFBRSxlQUFlLHlCQUF5QixFQUFFLGNBQWMsa0JBQWtCLGlCQUFpQix1QkFBdUIsRUFBRSxnQkFBZ0IscUJBQXFCLDZCQUE2QixFQUFFLDBCQUEwQixxQkFBcUIsc0JBQXNCLEVBQUUsRzs7Ozs7Ozs7QUNBM1U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThFO0FBRWpCO0FBQ0s7QUFDVDtBQU96RDtJQU1JLHdCQUFvQixFQUFlLEVBQ2YsZ0JBQWtDLEVBQ2xDLElBQWlCO1FBRmpCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQWE7UUFKckMsV0FBTSxHQUFhLEVBQUUsQ0FBQztJQU10QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sbUNBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLHlEQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMseURBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QyxDQUFDO0lBQ04sQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUNsQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvQyxDQUFDOztnQkExQnVCLDBEQUFXO2dCQUNHLDRFQUFnQjtnQkFDNUIsdUVBQVc7O0lBUEU7UUFBdEMsK0RBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7a0NBQWUsd0RBQVU7d0RBQUM7SUFEdkQsY0FBYztRQUwxQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsc0VBQXFDOztTQUV4QyxDQUFDO3lDQU8wQiwwREFBVztZQUNHLDRFQUFnQjtZQUM1Qix1RUFBVztPQVI1QixjQUFjLENBaUMxQjtJQUFELHFCQUFDO0NBQUE7QUFqQzBCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwiXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Sb3V0aW5nTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2luUm91dGluZ01vZHVsZX0gZnJvbSBcIn4vYXBwL2F1dGgvbG9naW4tcm91dGluZy5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTG9naW5Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMb2dpbkNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlNJR04gSU5cXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJ0ZXh0LXZpZXctY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkVNQUlMXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIml2YW5vdkBnbWFpbC5ydVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XFxcImVtYWlsXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwidGV4dC12aWV3LWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJQQVNTV09SRFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCIqKioqKioqKipcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVxcXCJwYXNzd29yZFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTaWduIEluXFxcIiAodGFwKT1cXFwib25TdWJtaXQoKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCAqbmdGb3I9XFxcImxldCBlcnJvciBvZiBlcnJvcnNcXFwiIFt0ZXh0XT1cXFwiZXJyb3JcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvZm9ybT5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiYnV0dG9uIHtcXG4gIHdpZHRoOiA5MCU7IH1cXG5cXG5UZXh0RmllbGQge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5BY3Rpb25CYXIge1xcbiAgYmFja2dyb3VuZDogZGFya2N5YW47IH1cXG5cXG5UZXh0VmlldyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlOyB9XFxuXFxuLnRleHQtdmlldy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4OyB9XFxuXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwifi9hcHAvY29yZS9hdXRoL3VzZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9jb3JlL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgnY29udGV4dCcsIHtzdGF0aWM6IGZhbHNlfSkgdGVtcGxhdGVIdG1sOiBFbGVtZW50UmVmO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIGVycm9yczogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRm9ybSgpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICBlbWFpbDogWydhZG1pbicsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICAgICBwYXNzd29yZDogWydhZG1pbicsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoLmxvZ2luVXNlcihcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnZhbHVlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
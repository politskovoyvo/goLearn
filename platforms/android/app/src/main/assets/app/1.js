(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar xmlns=\"\">\n    <Label text=\"Home\"></Label>\n</ActionBar>\n\n<TabView>\n    <StackLayout *tabItem=\"{title: 'История', iconSource: ''}\">\n        <ng-container *ngTemplateOutlet=\"history\"></ng-container>\n    </StackLayout>\n    <StackLayout *tabItem=\"{title: 'Группы', iconSource: ''}\">\n        <ng-container *ngTemplateOutlet=\"groupContent\"></ng-container>\n    </StackLayout>\n    <StackLayout *tabItem=\"{title: 'Список слов', iconSource: ''}\">\n        <ng-container *ngTemplateOutlet=\"translateWordList\"></ng-container>\n    </StackLayout>\n</TabView>\n\n<ng-template #history>\n    <RadCalendar\n            [eventSource]=\"calendarEvents\"\n            eventsViewMode=\"Inline\"\n            selectionMode=\"Single\"\n            viewMode=\"Month\"\n            transitionMode=\"Stack\"\n            locale=\"en-US\"\n    ></RadCalendar>\n</ng-template>\n\n<ng-template #groupContent>\n    <StackLayout orientation=\"horizontal\">\n        <Label text=\"Второй!\"></Label>\n    </StackLayout>\n</ng-template>\n\n<ng-template #translateWordList>\n    <StackLayout orientation=\"horizontal\">\n        <ListView [items]=\"items$ | async\">\n            <ng-template let-country=\"item\">\n                <FlexboxLayout flexDirection=\"row\">\n                    <Label [text]=\"country.origin\" class=\"t-12\"\n                           verticalAlignment=\"center\"\n                           style=\"width: 50%\"\n                    ></Label>\n                    <Label [text]=\"country.translate\" class=\"t-12\"\n                           verticalAlignment=\"center\"\n                           style=\"width: 50%\"\n                    ></Label>\n                </FlexboxLayout>\n            </ng-template>\n        </ListView>\n    </StackLayout>\n</ng-template>\n"

/***/ }),

/***/ "./app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb) {
        this.fb = fb;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items$ = this.getFakeTranslateWords();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent.prototype.getFakeTranslateWords = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([
            {
                id: 11111,
                origin: 'Кто',
                translate: 'Who'
            },
            {
                id: 22222,
                origin: 'Почему',
                translate: 'Why'
            },
            {
                id: 33333,
                origin: 'Человек',
                translate: 'People'
            }
        ]);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html"),
            styles: [__webpack_require__("./app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-ui-calendar/angular");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_7__);








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUICalendarModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUV0QjtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUU7Q0FDekMsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZDlCLHFJQUFxSSxpQ0FBaUMsMkhBQTJILGdDQUFnQyxnSUFBZ0kscUNBQXFDLDh6Qzs7Ozs7OztBQ0F0ZSxtQjs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ2hCO0FBQ1A7QUFjcEM7SUFPSSx1QkFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7SUFDbkMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQ0FBVyxHQUFYO0lBQ0EsQ0FBQztJQUVPLDZDQUFxQixHQUE3QjtRQUNJLE9BQU8sK0NBQUUsQ0FBQztZQUNOO2dCQUNJLEVBQUUsRUFBRSxLQUFLO2dCQUNULE1BQU0sRUFBRSxLQUFLO2dCQUNiLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLEtBQUs7Z0JBQ1QsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLEtBQUs7Z0JBQ1QsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFNBQVMsRUFBRSxRQUFRO2FBQ3RCO1NBQ0osQ0FBQztJQUNOLENBQUM7O2dCQTVCdUIsMERBQVc7O0lBUDFCLGFBQWE7UUFMekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQzs7U0FFdkMsQ0FBQzt5Q0FRMEIsMERBQVc7T0FQMUIsYUFBYSxDQW9DekI7SUFBRCxvQkFBQztDQUFBO0FBcEN5Qjs7Ozs7Ozs7O0FDaEIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RDtBQUNZO0FBQ0Y7QUFFWDtBQUNUO0FBQ2lCO0FBQ25CO0FBQ2lDO0FBbUI5RTtJQUFBO0lBQ0EsQ0FBQztJQURZLFVBQVU7UUFqQnRCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QixzRUFBaUI7Z0JBQ2pCLDBEQUFXO2dCQUNYLGtFQUFtQjtnQkFDbkIsa0ZBQXVCO2dCQUN2Qiw0REFBWTtnQkFDWiw2RkFBNEI7YUFDL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkRBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FDdEI7SUFBRCxpQkFBQztDQUFBO0FBRHNCIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB4bWxucz1cXFwiXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPFRhYlZpZXc+XFxuICAgIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwie3RpdGxlOiAn0JjRgdGC0L7RgNC40Y8nLCBpY29uU291cmNlOiAnJ31cXFwiPlxcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cXFwiaGlzdG9yeVxcXCI+PC9uZy1jb250YWluZXI+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwie3RpdGxlOiAn0JPRgNGD0L/Qv9GLJywgaWNvblNvdXJjZTogJyd9XFxcIj5cXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XFxcImdyb3VwQ29udGVudFxcXCI+PC9uZy1jb250YWluZXI+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwie3RpdGxlOiAn0KHQv9C40YHQvtC6INGB0LvQvtCyJywgaWNvblNvdXJjZTogJyd9XFxcIj5cXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XFxcInRyYW5zbGF0ZVdvcmRMaXN0XFxcIj48L25nLWNvbnRhaW5lcj5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1RhYlZpZXc+XFxuXFxuPG5nLXRlbXBsYXRlICNoaXN0b3J5PlxcbiAgICA8UmFkQ2FsZW5kYXJcXG4gICAgICAgICAgICBbZXZlbnRTb3VyY2VdPVxcXCJjYWxlbmRhckV2ZW50c1xcXCJcXG4gICAgICAgICAgICBldmVudHNWaWV3TW9kZT1cXFwiSW5saW5lXFxcIlxcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU9XFxcIlNpbmdsZVxcXCJcXG4gICAgICAgICAgICB2aWV3TW9kZT1cXFwiTW9udGhcXFwiXFxuICAgICAgICAgICAgdHJhbnNpdGlvbk1vZGU9XFxcIlN0YWNrXFxcIlxcbiAgICAgICAgICAgIGxvY2FsZT1cXFwiZW4tVVNcXFwiXFxuICAgID48L1JhZENhbGVuZGFyPlxcbjwvbmctdGVtcGxhdGU+XFxuXFxuPG5nLXRlbXBsYXRlICNncm91cENvbnRlbnQ+XFxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwi0JLRgtC+0YDQvtC5IVxcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L25nLXRlbXBsYXRlPlxcblxcbjxuZy10ZW1wbGF0ZSAjdHJhbnNsYXRlV29yZExpc3Q+XFxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaXRlbXMkIHwgYXN5bmNcXFwiPlxcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY291bnRyeT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJjb3VudHJ5Lm9yaWdpblxcXCIgY2xhc3M9XFxcInQtMTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwid2lkdGg6IDUwJVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiY291bnRyeS50cmFuc2xhdGVcXFwiIGNsYXNzPVxcXCJ0LTEyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIndpZHRoOiA1MCVcXFwiXFxuICAgICAgICAgICAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvbmctdGVtcGxhdGU+XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRlXG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICBvcmlnaW46IHN0cmluZztcbiAgICB0cmFuc2xhdGU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgaXRlbXMkOiBPYnNlcnZhYmxlPFRyYW5zbGF0ZVtdPjtcbiAgICBjdXJyZW50RGF5OiBhbnk7XG4gICAgY3VycmVudE1vbnRoOiBhbnk7XG4gICAgY3VycmVudFllYXI6IGFueTtcbiAgICBjYWxlbmRhckV2ZW50czogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyQgPSB0aGlzLmdldEZha2VUcmFuc2xhdGVXb3JkcygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RmFrZVRyYW5zbGF0ZVdvcmRzKCkge1xuICAgICAgICByZXR1cm4gb2YoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMTExMSxcbiAgICAgICAgICAgICAgICBvcmlnaW46ICfQmtGC0L4nLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogJ1dobydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIyMjIyLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogJ9Cf0L7Rh9C10LzRgycsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiAnV2h5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMzMzMzMsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiAn0KfQtdC70L7QstC10LonLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogJ1Blb3BsZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICB9XG59XG4iLCJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQge0hvbWVSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
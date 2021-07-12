(self["webpackChunkherolo_assignment"] = self["webpackChunkherolo_assignment"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_weather_components_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/weather/components/weather-details/weather-details.component */ 3366);
/* harmony import */ var _shared_weather_components_weather_favorites_weather_favorites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/weather/components/weather-favorites/weather-favorites.component */ 5579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    { path: 'favorites', component: _shared_weather_components_weather_favorites_weather_favorites_component__WEBPACK_IMPORTED_MODULE_1__.WeatherFavoritesComponent },
    { path: 'home', component: _shared_weather_components_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_0__.WeatherDetailsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/contract/weather.contract */ 6468);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3738);










const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["favorites"]; };
class AppComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.isChecked = true;
        this.className = '';
        this.toggleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(false);
    }
    ngOnInit() {
        this.toggleControl.valueChanges.subscribe(val => {
            this.className = val ? 'darkMode' : '';
        });
        this.weatherService.getWeatherUnit().subscribe(u => {
            this.isChecked = u != 'C';
        });
    }
    ToggleTemperature() {
        this.weatherService.ToggleTemperatureUnit();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_0__.WeatherContract)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostVars: 1, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("className", ctx.className);
    } }, decls: 25, vars: 6, consts: [[1, "toolbar-banner"], [1, "logo-barber"], ["src", "./assets/cloudy.png", 2, "width", "40px", "height", "40px"], [1, "menu-left"], ["mat-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"], [1, "menu-right"], [1, "dark-light-toggle"], [1, "icons"], [3, "formControl"], [1, "temperature-toggle"], [3, "checked", "change"], [1, "wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Herolo Weather Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Favorites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "brightness_5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "bedtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-slide-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_mat_slide_toggle_change_20_listener() { return ctx.ToggleTemperature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u00B0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.toggleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isChecked);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _core_reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/reducers/favorite.reducer */ 8592);
/* harmony import */ var _core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/modules/material/material.module */ 7345);
/* harmony import */ var _core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/contract/weather.contract */ 6468);
/* harmony import */ var _core_services_weather_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/weather.service */ 1267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        { provide: _core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_6__.WeatherContract, useClass: _core_services_weather_service__WEBPACK_IMPORTED_MODULE_7__.WeatherService }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot({
                timeOut: 3500,
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'increasing',
                preventDuplicates: true
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forRoot({
                favorites: _core_reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreRootModule] }); })();


/***/ }),

/***/ 3290:
/*!***************************************************!*\
  !*** ./src/app/core/actions/favorites.actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_FAVORITE": () => (/* binding */ ADD_FAVORITE),
/* harmony export */   "REMOVE_FAVORITE": () => (/* binding */ REMOVE_FAVORITE),
/* harmony export */   "AddFavorite": () => (/* binding */ AddFavorite),
/* harmony export */   "RemoveFavorite": () => (/* binding */ RemoveFavorite)
/* harmony export */ });
const ADD_FAVORITE = 'Add';
const REMOVE_FAVORITE = 'Remove';
class AddFavorite {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_FAVORITE;
    }
}
class RemoveFavorite {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_FAVORITE;
    }
}


/***/ }),

/***/ 6468:
/*!***************************************************!*\
  !*** ./src/app/core/contract/weather.contract.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherContract": () => (/* binding */ WeatherContract)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);

class WeatherContract {
    constructor() {
        this.WEATHER_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
        this.unitDisplay = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('C');
        this.cityAutoCompleteResults = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.baseURL = 'https://dataservice.accuweather.com/';
        this.language = 'en-us';
        this.weatherCache = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
    getSelectedCityID(countryName, city) {
        let res = this.cityAutoCompleteResults.value.filter(country => country.country == countryName).filter(country => country.cities.filter(c => c.LocalizedName == city));
        return res[0].cities[0].ID;
    }
    getCityAutoComplete() {
        return this.cityAutoCompleteResults.asObservable();
    }
    getWeatherUnit() {
        return this.unitDisplay.asObservable();
    }
    ToggleTemperatureUnit() {
        if (this.unitDisplay.value == 'C')
            this.unitDisplay.next('F');
        else
            this.unitDisplay.next('C');
    }
    setGroupCities(cities) {
        let group = [];
        let m = new Map();
        for (let i = 0; i < cities.length; ++i) {
            let countryName = cities[i].Country.LocalizedName;
            if (!m.has(countryName)) {
                group.push({ country: countryName, cities: new Array() });
                m.set(countryName, group.length - 1);
            }
            group[m.get(countryName)].cities.push({ ID: cities[i].Key, LocalizedName: cities[i].LocalizedName });
        }
        this.cityAutoCompleteResults.next(group);
    }
    getAllCache() {
        return this.weatherCache.asObservable();
    }
    ;
    getWeatherIndexFromCache(city) {
        return this.weatherCache.value.findIndex(x => x.Name.toLowerCase() == city.toLowerCase());
    }
}


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule] }); })();


/***/ }),

/***/ 7345:
/*!**********************************************************!*\
  !*** ./src/app/core/modules/material/material.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4785);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7310);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1386);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ 1394);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ 552);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ 2796);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 346);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ 2542);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ 4553);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 2613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ 1933);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);













































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef, useValue: [] }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_42__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__.ScrollingModule] }); })();


/***/ }),

/***/ 8362:
/*!*************************************************!*\
  !*** ./src/app/core/pipes/weather-unit.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherUnitPipe": () => (/* binding */ WeatherUnitPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class WeatherUnitPipe {
    transform(value, unit = 'C', ...args) {
        let res = '°';
        let num = value.Value;
        if (value.Unit == unit)
            res += unit;
        else if (value.Unit == 'C') {
            num = (num * (9 / 5)) + 32;
            res += 'F';
        }
        else if (value.Unit == 'F') {
            num = (num - 32) * (5 / 9);
            res += 'C';
        }
        return Math.round(num) + ' ' + res;
    }
}
WeatherUnitPipe.ɵfac = function WeatherUnitPipe_Factory(t) { return new (t || WeatherUnitPipe)(); };
WeatherUnitPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "weatherUnit", type: WeatherUnitPipe, pure: true });


/***/ }),

/***/ 8592:
/*!***************************************************!*\
  !*** ./src/app/core/reducers/favorite.reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/favorites.actions */ 3290);

function reducer(state = [], action) {
    let index;
    switch (action.type) {
        case _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_FAVORITE:
            return [...state, action.payload];
        case _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_FAVORITE:
            let newState = [...state];
            index = newState.findIndex(x => x.ID == action.payload);
            if (index >= 0)
                newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
}


/***/ }),

/***/ 1267:
/*!**************************************************!*\
  !*** ./src/app/core/services/weather.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _contract_weather_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contract/weather.contract */ 6468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);







class WeatherService extends _contract_weather_contract__WEBPACK_IMPORTED_MODULE_1__.WeatherContract {
    constructor(httpClient, toastr) {
        super();
        this.httpClient = httpClient;
        this.toastr = toastr;
    }
    getWeatherOfCity(country, city, useCache = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!country || country.length == 0 || !city || city.length == 0)
                return null;
            let index = this.getWeatherIndexFromCache(city);
            if (useCache && index >= 0)
                return this.weatherCache.value[index]; // return cache
            let weather = null;
            try {
                let selectedCityID = this.getSelectedCityID(country, city);
                let conditions = yield this.getCurrentConditions(selectedCityID);
                let forecasts = yield this.getFiveDaysDailyForecasts(selectedCityID);
                weather = { ID: selectedCityID, Country: country, Name: city, WeatherData: {
                        CurrentConditions: conditions, WeeklyDailyForecast: forecasts
                    } };
                let currentWeatherCache = this.weatherCache.value;
                if (index >= 0)
                    currentWeatherCache[index] = weather;
                else
                    currentWeatherCache.push(weather);
                this.weatherCache.next(currentWeatherCache);
                console.log('weather data:');
                console.log(weather);
                this.toastr.success(`Weather data of ${city} is beeing loaded into the screen`);
            }
            catch (e) {
                this.toastr.error(`Could not get weather of the city: ${city}`);
            }
            return weather;
        });
    }
    AutoCompleteCities(city) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!city || city.length == 0)
                return;
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('apikey', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.weatherAPI);
            params = params.append('q', city);
            params = params.append('language', this.language);
            let res = [];
            try {
                res = yield this.httpClient.get(this.baseURL + 'locations/v1/cities/autocomplete', { params: params }).toPromise();
                console.log('success');
                console.log(res);
                this.setGroupCities(res);
                if (res.length == 0)
                    this.toastr.info(`There is no results for the query ${city}`);
            }
            catch (err) {
                this.toastr.error(`Could not get current auto complete of the city: ${city}`);
            }
        });
    }
    getCurrentConditions(locationKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('apikey', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.weatherAPI);
            params = params.append('details', 'false');
            params = params.append('language', this.language);
            let res = null;
            try {
                res = yield this.httpClient.get(this.baseURL + `currentconditions/v1/${locationKey}`, { params: params }).toPromise();
            }
            catch (err) {
                this.toastr.error('Could not get current conditions of a weather');
            }
            return res;
        });
    }
    getFiveDaysDailyForecasts(locationKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('apikey', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.weatherAPI);
            params = params.append('details', 'false');
            params = params.append('metric', 'true');
            params = params.append('language', this.language);
            let res = null;
            try {
                res = yield this.httpClient.get(this.baseURL + `forecasts/v1/daily/5day/${locationKey}`, { params: params }).toPromise();
            }
            catch (err) {
                this.toastr.error('Could not get five daily forecast information');
            }
            return res;
        });
    }
}
WeatherService.ɵfac = function WeatherService_Factory(t) { return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
WeatherService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: WeatherService, factory: WeatherService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _weather_weather_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather/weather.module */ 1626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _weather_weather_module__WEBPACK_IMPORTED_MODULE_0__.WeatherModule
        ], _weather_weather_module__WEBPACK_IMPORTED_MODULE_0__.WeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _weather_weather_module__WEBPACK_IMPORTED_MODULE_0__.WeatherModule], exports: [_weather_weather_module__WEBPACK_IMPORTED_MODULE_0__.WeatherModule] }); })();


/***/ }),

/***/ 8995:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/weather/components/weather-degrees-view/weather-degrees-view.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherDegreesViewComponent": () => (/* binding */ WeatherDegreesViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/actions/favorites.actions */ 3290);
/* harmony import */ var src_app_core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/contract/weather.contract */ 6468);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var src_app_core_pipes_weather_unit_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pipes/weather-unit.pipe */ 8362);












function WeatherDegreesViewComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeatherDegreesViewComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.RemoveFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Remove from Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WeatherDegreesViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.weatherDetails.description);
} }
class WeatherDegreesViewComponent {
    constructor(weatherService, store, toastr) {
        this.weatherService = weatherService;
        this.store = store;
        this.toastr = toastr;
        this.showDescription = true;
        this.onClickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.allowMove = true;
        this.showDelete = false;
    }
    ngOnInit() {
        this.weatherService.getWeatherUnit().subscribe(u => {
            this.unitDisplay = u;
        });
    }
    OnClick() {
        if (this.allowMove)
            this.onClickItem.emit({ country: this.weatherDetails.countryName, city: this.weatherDetails.cityName });
        this.allowMove = true;
    }
    RemoveFavorite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.store.dispatch(new _core_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveFavorite(this.weatherDetails.ID));
            this.toastr.info(this.weatherDetails.title + ' has been removed from your favorite list');
            this.allowMove = false;
        });
    }
}
WeatherDegreesViewComponent.ɵfac = function WeatherDegreesViewComponent_Factory(t) { return new (t || WeatherDegreesViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_1__.WeatherContract), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
WeatherDegreesViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WeatherDegreesViewComponent, selectors: [["app-weather-degrees-view"]], inputs: { weatherDetails: "weatherDetails", showDescription: "showDescription" }, outputs: { onClickItem: "onClickItem" }, decls: 8, vars: 7, consts: [[1, "grid-container", 3, "click", "mouseenter", "mouseleave"], ["mat-button", "", 3, "click", 4, "ngIf"], [1, "title"], [1, "degrees"], ["class", "description", 4, "ngIf"], ["mat-button", "", 3, "click"], [1, "description"]], template: function WeatherDegreesViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeatherDegreesViewComponent_Template_mat_card_click_0_listener() { return ctx.OnClick(); })("mouseenter", function WeatherDegreesViewComponent_Template_mat_card_mouseenter_0_listener() { return ctx.showDelete = true; })("mouseleave", function WeatherDegreesViewComponent_Template_mat_card_mouseleave_0_listener() { return ctx.showDelete = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeatherDegreesViewComponent_button_1_Template, 4, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "weatherUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WeatherDegreesViewComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.weatherDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 4, ctx.weatherDetails.degrees, ctx.unitDisplay));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDescription == true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon], pipes: [src_app_core_pipes_weather_unit_pipe__WEBPACK_IMPORTED_MODULE_2__.WeatherUnitPipe], styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-gap: 5px;\n  border: 1px olid black;\n  background-color: #e4eff8;\n  padding: 30px;\n}\n.grid-container[_ngcontent-%COMP%]:hover {\n  background-color: #c3dfff;\n}\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 0;\n}\n.grid-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20pt;\n}\n.grid-container[_ngcontent-%COMP%]   .degrees[_ngcontent-%COMP%] {\n  padding: 5px 0 20px;\n  font-size: 15pt;\n}\n.grid-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItZGVncmVlcy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0FBQ0o7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQURGO0FBSUE7RUFFRSxlQUFBO0FBRkYiLCJmaWxlIjoid2VhdGhlci1kZWdyZWVzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIGdyaWQtZ2FwOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlZmY4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAyMjMsIDI1NSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgPiBkaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcblxyXG4uZ3JpZC1jb250YWluZXIgLnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMjBwdDs7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciAuZGVncmVlc3tcclxuICBwYWRkaW5nOiA1cHggMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVwdDs7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciAuZGVzY3JpcHRpb257XHJcblxyXG4gIGZvbnQtc2l6ZTogMTVwdDs7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3366:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/weather/components/weather-details/weather-details.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_filter": () => (/* binding */ _filter),
/* harmony export */   "WeatherDetailsComponent": () => (/* binding */ WeatherDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _core_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/actions/favorites.actions */ 3290);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/contract/weather.contract */ 6468);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-degrees-view/weather-degrees-view.component */ 8995);
/* harmony import */ var src_app_core_pipes_weather_unit_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipes/weather-unit.pipe */ 8362);




















function WeatherDetailsComponent_mat_optgroup_9_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", city_r6.LocalizedName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", city_r6.LocalizedName, " ");
} }
function WeatherDetailsComponent_mat_optgroup_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-optgroup", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WeatherDetailsComponent_mat_optgroup_9_mat_option_1_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", group_r4.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r4.cities);
} }
function WeatherDetailsComponent_mat_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "NO DATA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_12_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WeatherDetailsComponent_mat_card_12_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.RemoveFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Remove Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_12_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_12_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WeatherDetailsComponent_mat_card_12_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.AddFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Add to Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_12_app_weather_degrees_view_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-weather-degrees-view", 21);
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("weatherDetails", item_r16);
} }
function WeatherDetailsComponent_mat_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "weatherUnit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, WeatherDetailsComponent_mat_card_12_div_10_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, WeatherDetailsComponent_mat_card_12_div_11_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WeatherDetailsComponent_mat_card_12_div_12_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, WeatherDetailsComponent_mat_card_12_div_13_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WeatherDetailsComponent_mat_card_12_app_weather_degrees_view_17_Template, 1, 1, "app-weather-degrees-view", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMapInterpolate1"]("background-image: url(https://www.accuweather.com/images/weathericons/", ctx_r3.selectedWeather.WeatherData.CurrentConditions[0].WeatherIcon, ".svg);background-size: 100%;background-position: center;");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.selectedWeather.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 11, ctx_r3.selectedWeather.WeatherData.CurrentConditions[0].Temperature.Metric, ctx_r3.unitDisplay), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isFavorite == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isFavorite == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isFavorite == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isFavorite == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.selectedWeather.WeatherData.CurrentConditions[0].WeatherText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.specificDetails);
} }
const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.LocalizedName.toLowerCase().includes(filterValue));
};
class WeatherDetailsComponent {
    constructor(router, formBuilder, weatherService, store, toastr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.weatherService = weatherService;
        this.store = store;
        this.toastr = toastr;
        this.weatherForm = null;
        this.query = '';
        this.stateGroups = [];
        this.allowAuto = false;
        this.selectedCity$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.selectedWeather = null;
        this.subscriptions = [];
        this.favorites = null;
        this.specificDetails = [];
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        const countryName = state && state.countryName ? state.countryName : 'IL';
        const cityName = state && state.cityName ? state.cityName : 'Tel Aviv';
        this.selectedCity$.next({ country: countryName, city: cityName });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.weatherForm = this.formBuilder.group({
                stateGroup: this.query,
            });
            this.favorites = this.store.select('favorites');
            this.selectedCity$.subscribe((city) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.selectedWeather = yield this.weatherService.getWeatherOfCity(city === null || city === void 0 ? void 0 : city.country, city === null || city === void 0 ? void 0 : city.city);
                if (this.selectedWeather) {
                    this.specificDetails = this.selectedWeather.WeatherData.WeeklyDailyForecast.DailyForecasts.map((item, i) => {
                        let temperature = item.Temperature.Minimum;
                        return { ID: this.selectedWeather.ID, title: this.weatherService.WEATHER_DAYS[i], countryName: city.country, cityName: city.city, degrees: temperature, description: null };
                    });
                    this.store.select('favorites').subscribe(x => {
                        this.isFavorite = x.findIndex(f => { var _a; return f.Name.toLowerCase() == ((_a = this.selectedWeather) === null || _a === void 0 ? void 0 : _a.Name.toLowerCase()); }) >= 0;
                    });
                }
            }));
            this.weatherService.getWeatherUnit().subscribe(u => {
                this.unitDisplay = u;
            });
            this.weatherService.getCityAutoComplete().subscribe(ac => {
                this.stateGroups = ac;
                this.allowAuto = false;
                this.weatherForm.get('stateGroup').updateValueAndValidity({ onlySelf: false, emitEvent: true });
            });
            this.stateGroupOptions = this.weatherForm.get('stateGroup').valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(value => this._filterGroup(value)));
            this.weatherForm.get('stateGroup').valueChanges.subscribe(x => {
                this.query = x;
            });
        });
    }
    ngOnDestroy() {
        this.subscriptions.map(x => x.unsubscribe());
    }
    AddFavorite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.store.dispatch(new _core_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__.AddFavorite(this.selectedWeather));
            this.toastr.success(this.selectedWeather.Name + ' has been added to your favorite list');
        });
    }
    RemoveFavorite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.store.dispatch(new _core_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveFavorite(this.selectedWeather.ID));
            this.toastr.info(this.selectedWeather.Name + ' has been removed from your favorite list');
        });
    }
    _filterGroup(value) {
        clearTimeout(this.timerAutoComplete);
        if (this.allowAuto) {
            this.timerAutoComplete = setTimeout(() => {
                this.getCities();
            }, 1000);
        }
        this.allowAuto = true;
        return this.stateGroups;
    }
    getCities() {
        if (this.query == '')
            return;
        this.weatherService.AutoCompleteCities(this.query);
    }
    SelectOption(q) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.allowAuto = false;
            this.selectedCity$.next({ country: q.option.group.label, city: q.option.value });
        });
    }
}
WeatherDetailsComponent.ɵfac = function WeatherDetailsComponent_Factory(t) { return new (t || WeatherDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_1__.WeatherContract), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService)); };
WeatherDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WeatherDetailsComponent, selectors: [["app-weather-details"]], decls: 13, vars: 7, consts: [[1, "container"], [3, "formGroup"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], [3, "optionSelected"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "data-container", 4, "ngIf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "data-container"], [1, "data-bar"], [1, "city-info"], [1, "city-logo"], [1, "favorite-actions"], [1, "desc"], [1, "data-grid"], ["showDescription", "false", 3, "weatherDetails", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], ["showDescription", "false", 3, "weatherDetails"]], template: function WeatherDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "States Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function WeatherDetailsComponent_Template_mat_autocomplete_optionSelected_7_listener($event) { return ctx.SelectOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WeatherDetailsComponent_mat_optgroup_9_Template, 2, 2, "mat-optgroup", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, WeatherDetailsComponent_mat_card_11_Template, 2, 0, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WeatherDetailsComponent_mat_card_12_Template, 18, 14, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.weatherForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, ctx.stateGroupOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selectedWeather);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedWeather);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOptgroup, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_2__.WeatherDegreesViewComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, src_app_core_pipes_weather_unit_pipe__WEBPACK_IMPORTED_MODULE_3__.WeatherUnitPipe], styles: [".container[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  grid-row-gap: 20px;\n}\n\n.data-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%]   .city-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 100px);\n  grid-row-gap: 50px;\n  grid-column-gap: 10px;\n  height: 1px;\n  font-size: 20pt;\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%]   .city-info[_ngcontent-%COMP%]   .city-logo[_ngcontent-%COMP%] {\n  grid-row-end: span 2;\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%]   .favorite-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%]   .favorite-actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  margin-top: 3px;\n}\n\n.data-container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 45pt;\n  font-weight: bold;\n}\n\n.data-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.data-grid[_ngcontent-%COMP%]    > app-weather-degrees-view[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDSTtFQUNFLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUNNO0VBQ0Usb0JBQUE7QUFDUjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtBQUROOztBQUlNO0VBQ0UsZUFBQTtBQUZSOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0FBTkYiLCJmaWxlIjoid2VhdGhlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xyXG4gIGdyaWQtcm93LWdhcDogMjBweDtcclxufVxyXG5cclxuLmRhdGEtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuXHJcbiAgLmRhdGEtYmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAuY2l0eS1pbmZve1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxMDBweCk7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogNTBweDtcclxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG5cclxuICAgICAgLmNpdHktbG9nb3tcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IHNwYW4gMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mYXZvcml0ZS1hY3Rpb25ze1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuXHJcblxyXG4gICAgICBkaXY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDQ1cHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5kYXRhLWdyaWR7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG59XHJcblxyXG4uZGF0YS1ncmlkID4gYXBwLXdlYXRoZXItZGVncmVlcy12aWV3e1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5579:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/weather/components/weather-favorites/weather-favorites.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherFavoritesComponent": () => (/* binding */ WeatherFavoritesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var src_app_core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/contract/weather.contract */ 6468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-degrees-view/weather-degrees-view.component */ 8995);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3738);







function WeatherFavoritesComponent_app_weather_degrees_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-weather-degrees-view", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClickItem", function WeatherFavoritesComponent_app_weather_degrees_view_1_Template_app_weather_degrees_view_onClickItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.OnClickWeather($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("weatherDetails", item_r2);
} }
function WeatherFavoritesComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "NO FAVORITES");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
// import { WeatherService } from 'src/app/core/services/weather.service';
class WeatherFavoritesComponent {
    constructor(router, store, weatherService) {
        this.router = router;
        this.store = store;
        this.weatherService = weatherService;
        this.favorites = [];
    }
    ngOnInit() {
        this.store.select('favorites').subscribe(x => {
            this.favorites = x.map(f => {
                let temperature = f.WeatherData.CurrentConditions[0].Temperature.Metric;
                return { ID: f.ID, title: f.Name, countryName: f.Country, cityName: f.Name, degrees: temperature, description: f.WeatherData.CurrentConditions[0].WeatherText };
            });
        });
    }
    OnClickWeather(cityDetails) {
        const navigationExtras = { state: { cityName: cityDetails.city, countryName: cityDetails.country } };
        this.router.navigate(['home'], navigationExtras);
    }
}
WeatherFavoritesComponent.ɵfac = function WeatherFavoritesComponent_Factory(t) { return new (t || WeatherFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_contract_weather_contract__WEBPACK_IMPORTED_MODULE_0__.WeatherContract)); };
WeatherFavoritesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WeatherFavoritesComponent, selectors: [["app-weather-favorites"]], decls: 3, vars: 2, consts: [[1, "data-grid"], [3, "weatherDetails", "onClickItem", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "weatherDetails", "onClickItem"]], template: function WeatherFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WeatherFavoritesComponent_app_weather_degrees_view_1_Template, 1, 1, "app-weather-degrees-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WeatherFavoritesComponent_mat_card_2_Template, 2, 0, "mat-card", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.favorites);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.favorites.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_1__.WeatherDegreesViewComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard], styles: [".data-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.data-grid[_ngcontent-%COMP%]    > app-weather-degrees-view[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.data-grid[_ngcontent-%COMP%]    > app-weather-degrees-view[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0FBQ0oiLCJmaWxlIjoid2VhdGhlci1mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1ncmlke1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxufVxyXG5cclxuLmRhdGEtZ3JpZCA+IGFwcC13ZWF0aGVyLWRlZ3JlZXMtdmlld3tcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAmOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1626:
/*!**************************************************!*\
  !*** ./src/app/shared/weather/weather.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherModule": () => (/* binding */ WeatherModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/weather-degrees-view/weather-degrees-view.component */ 8995);
/* harmony import */ var _components_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/weather-details/weather-details.component */ 3366);
/* harmony import */ var _components_weather_favorites_weather_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/weather-favorites/weather-favorites.component */ 5579);
/* harmony import */ var src_app_core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/modules/material/material.module */ 7345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_core_services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/weather.service */ 1267);
/* harmony import */ var src_app_core_pipes_weather_unit_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/pipes/weather-unit.pipe */ 8362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);









class WeatherModule {
}
WeatherModule.ɵfac = function WeatherModule_Factory(t) { return new (t || WeatherModule)(); };
WeatherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WeatherModule });
WeatherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [src_app_core_services_weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            src_app_core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WeatherModule, { declarations: [_components_weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_0__.WeatherDegreesViewComponent, _components_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_1__.WeatherDetailsComponent, _components_weather_favorites_weather_favorites_component__WEBPACK_IMPORTED_MODULE_2__.WeatherFavoritesComponent, src_app_core_pipes_weather_unit_pipe__WEBPACK_IMPORTED_MODULE_5__.WeatherUnitPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule], exports: [_components_weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_0__.WeatherDegreesViewComponent, _components_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_1__.WeatherDetailsComponent, _components_weather_favorites_weather_favorites_component__WEBPACK_IMPORTED_MODULE_2__.WeatherFavoritesComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    weatherAPI: 'sNegvcZtoUOI1LyOWnJm0a1iYrpe9NyW'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
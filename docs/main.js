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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["favorites"]; };
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 4, consts: [[1, "toolbar-banner"], [1, "logo-barber"], ["src", "./assets/cloudy.png", 2, "width", "40px", "height", "40px"], [1, "menu-left"], ["mat-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"], [1, "wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Herolo Weather Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Favorites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var _core_reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/reducers/favorite.reducer */ 8592);
/* harmony import */ var _core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/modules/material/material.module */ 7345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule.forRoot({
                timeOut: 3500,
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'increasing',
                preventDuplicates: true
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forRoot({
                favorites: _core_reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreRootModule] }); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);







class WeatherService {
    constructor(httpClient, toastr) {
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.WEATHER_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
        this.baseURL = 'https://dataservice.accuweather.com/';
        this.language = 'en-us';
        this.weatherCache = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    getAllCache() {
        return this.weatherCache.asObservable();
    }
    getWeatherIndexFromCache(city) {
        return this.weatherCache.value.findIndex(x => x.Name.toLowerCase() == city.toLowerCase());
    }
    getWeatherOfCity(city, useCache = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!city || city.length == 0)
                return null;
            let index = this.getWeatherIndexFromCache(city);
            if (useCache && index >= 0)
                return this.weatherCache.value[index]; // return cache
            let weather = null;
            try {
                // call api
                let searchRes = yield this.getAuthocomplete(city);
                if (searchRes.length == 0)
                    return null;
                let cityDetails = searchRes[0];
                let conditions = yield this.getCurrentConditions(cityDetails.Key);
                let forecasts = yield this.getFiveDaysDailyForecasts(cityDetails.Key);
                weather = { ID: cityDetails.Key, Name: cityDetails.LocalizedName, WeatherData: {
                        CurrentConditions: conditions, WeeklyDailyForecast: forecasts
                    } };
                let currentWeatherCache = this.weatherCache.value;
                if (index >= 0)
                    currentWeatherCache[index] = weather;
                else
                    currentWeatherCache.push(weather);
                this.weatherCache.next(currentWeatherCache);
                this.toastr.success(`Weather data of ${city} is beeing loaded into the screen`);
            }
            catch (e) {
                this.toastr.error(`Could not get weather of the city: ${city}`);
            }
            return weather;
        });
    }
    getAuthocomplete(city) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!city || city.length == 0)
                return [];
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            params = params.append('apikey', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.weatherAPI);
            params = params.append('q', city);
            params = params.append('language', this.language);
            let res = [];
            try {
                res = yield this.httpClient.get(this.baseURL + 'locations/v1/cities/autocomplete', { params: params }).toPromise();
                if (res.length == 0)
                    this.toastr.info(`There is no city named ${city}`);
            }
            catch (err) {
                this.toastr.error(`Could not get current auto complete of the city: ${city}`);
            }
            return res;
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
            params = params.append('metric', 'false');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function WeatherDegreesViewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.weatherDetails.description);
} }
class WeatherDegreesViewComponent {
    constructor() {
        this.showDescription = true;
        this.onClickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    OnClick() {
        this.onClickItem.emit(this.weatherDetails.title);
    }
}
WeatherDegreesViewComponent.ɵfac = function WeatherDegreesViewComponent_Factory(t) { return new (t || WeatherDegreesViewComponent)(); };
WeatherDegreesViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherDegreesViewComponent, selectors: [["app-weather-degrees-view"]], inputs: { weatherDetails: "weatherDetails", showDescription: "showDescription" }, outputs: { onClickItem: "onClickItem" }, decls: 6, vars: 3, consts: [[1, "grid-container", 3, "click"], [1, "title"], [1, "degrees"], ["class", "description", 4, "ngIf"], [1, "description"]], template: function WeatherDegreesViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherDegreesViewComponent_Template_mat_card_click_0_listener() { return ctx.OnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeatherDegreesViewComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.weatherDetails.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.weatherDetails.degrees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDescription == true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-gap: 5px;\n  border: 1px olid black;\n  background-color: #e4eff8;\n  padding: 30px;\n}\n.grid-container[_ngcontent-%COMP%]:hover {\n  background-color: #c3dfff;\n}\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 0;\n}\n.grid-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20pt;\n}\n.grid-container[_ngcontent-%COMP%]   .degrees[_ngcontent-%COMP%] {\n  padding: 5px 0 20px;\n  font-size: 15pt;\n}\n.grid-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItZGVncmVlcy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0FBQ0o7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQURGO0FBSUE7RUFFRSxlQUFBO0FBRkYiLCJmaWxlIjoid2VhdGhlci1kZWdyZWVzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIGdyaWQtZ2FwOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlZmY4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAyMjMsIDI1NSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgPiBkaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcblxyXG4uZ3JpZC1jb250YWluZXIgLnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMjBwdDs7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciAuZGVncmVlc3tcclxuICBwYWRkaW5nOiA1cHggMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVwdDs7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciAuZGVzY3JpcHRpb257XHJcblxyXG4gIGZvbnQtc2l6ZTogMTVwdDs7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3366:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/weather/components/weather-details/weather-details.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherDetailsComponent": () => (/* binding */ WeatherDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _core_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/actions/favorites.actions */ 3290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_core_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/weather.service */ 1267);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6710);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-degrees-view/weather-degrees-view.component */ 8995);

















function WeatherDetailsComponent_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "NO DATA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_10_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_10_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeatherDetailsComponent_mat_card_10_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.RemoveFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Remove Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_10_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_10_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeatherDetailsComponent_mat_card_10_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.AddFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add to Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WeatherDetailsComponent_mat_card_10_app_weather_degrees_view_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-weather-degrees-view", 16);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("weatherDetails", item_r11);
} }
function WeatherDetailsComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, WeatherDetailsComponent_mat_card_10_div_9_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, WeatherDetailsComponent_mat_card_10_div_10_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, WeatherDetailsComponent_mat_card_10_div_11_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WeatherDetailsComponent_mat_card_10_div_12_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WeatherDetailsComponent_mat_card_10_app_weather_degrees_view_16_Template, 1, 1, "app-weather-degrees-view", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMapInterpolate1"]("background-image: url(https://www.accuweather.com/images/weathericons/", ctx_r1.selectedWeather.WeatherData.CurrentConditions[0].WeatherIcon, ".svg);background-size: 100%;background-position: center;");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.selectedWeather.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.selectedWeather.WeatherData.CurrentConditions[0].Temperature.Metric.Value + "`" + ctx_r1.selectedWeather.WeatherData.CurrentConditions[0].Temperature.Metric.Unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isFavorite == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isFavorite == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isFavorite == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isFavorite == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.selectedWeather.WeatherData.CurrentConditions[0].WeatherText);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.specificDetails);
} }
class WeatherDetailsComponent {
    constructor(router, formBuilder, weatherService, store, toastr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.weatherService = weatherService;
        this.store = store;
        this.toastr = toastr;
        this.weatherForm = null;
        this.selectedCity$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.selectedWeather = null;
        this.subscriptions = [];
        this.favorites = null;
        this.specificDetails = [];
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        const city = state && state.name ? state.name : 'Tel Aviv';
        this.selectedCity$.next(city);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.favorites = this.store.select('favorites');
            this.selectedCity$.subscribe((city) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.selectedWeather = yield this.weatherService.getWeatherOfCity(city);
                if (this.selectedWeather) {
                    this.specificDetails = this.selectedWeather.WeatherData.WeeklyDailyForecast.DailyForecasts.map((item, i) => {
                        let temperature = item.Temperature.Minimum.Value + '`' + item.Temperature.Minimum.Unit;
                        return { title: this.weatherService.WEATHER_DAYS[i], degrees: temperature, description: null };
                    });
                    this.store.select('favorites').subscribe(x => {
                        this.isFavorite = x.findIndex(f => { var _a; return f.Name.toLowerCase() == ((_a = this.selectedWeather) === null || _a === void 0 ? void 0 : _a.Name.toLowerCase()); }) >= 0;
                    });
                }
            }));
            this.weatherForm = this.formBuilder.group({
                city: [this.selectedCity$.value, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            });
        });
    }
    ngOnDestroy() {
        this.subscriptions.map(x => x.unsubscribe());
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedCity$.next(this.weatherForm.value.city);
        });
    }
    AddFavorite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.store.dispatch(new _core_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__.AddFavorite(this.selectedWeather));
            this.toastr.success(this.selectedWeather.Name + ' has been added to your favorite list');
        });
    }
    RemoveFavorite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.store.dispatch(new _core_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveFavorite(this.selectedWeather.ID));
            this.toastr.info(this.selectedWeather.Name + ' has been removed from your favorite list');
        });
    }
}
WeatherDetailsComponent.ɵfac = function WeatherDetailsComponent_Factory(t) { return new (t || WeatherDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_weather_service__WEBPACK_IMPORTED_MODULE_1__.WeatherService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService)); };
WeatherDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WeatherDetailsComponent, selectors: [["app-weather-details"]], decls: 11, vars: 4, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "formControlName", "city", "type", "search", "placeholder", "Ex. Ramat Gan", "value", "Tel Aviv"], ["type", "submit", "mat-button", "", 3, "disabled"], [4, "ngIf"], ["class", "data-container", 4, "ngIf"], [1, "data-container"], [1, "data-bar"], [1, "city-info"], [1, "city-logo"], [1, "favorite-actions"], [1, "desc"], [1, "data-grid"], ["showDescription", "false", 3, "weatherDetails", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], ["showDescription", "false", 3, "weatherDetails"]], template: function WeatherDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function WeatherDetailsComponent_Template_form_ngSubmit_2_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "City Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, WeatherDetailsComponent_mat_card_9_Template, 2, 0, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, WeatherDetailsComponent_mat_card_10_Template, 17, 11, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.weatherForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.weatherForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedWeather);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedWeather);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_2__.WeatherDegreesViewComponent], styles: [".container[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  width: 800px;\n  grid-row-gap: 20px;\n}\n\n.data-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  height: 400px;\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%]   .city-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 70px);\n  grid-row-gap: 20px;\n  grid-column-gap: 10px;\n  height: 1px;\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%]   .city-info[_ngcontent-%COMP%]   .city-logo[_ngcontent-%COMP%] {\n  grid-row-end: span 2;\n  border: 1px solid black;\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%]   .favorite-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n}\n\n.data-container[_ngcontent-%COMP%]   .data-bar[_ngcontent-%COMP%]   .favorite-actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  margin-top: 3px;\n}\n\n.data-container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 25pt;\n  font-weight: bold;\n}\n\n.data-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.data-grid[_ngcontent-%COMP%]    > app-weather-degrees-view[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUFBRjs7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUVJO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFBTjs7QUFFTTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUFBUjs7QUFJSTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtBQUZOOztBQUtNO0VBQ0UsZUFBQTtBQUhSOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0FBUkYiLCJmaWxlIjoid2VhdGhlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uZGF0YS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcblxyXG4gIC5kYXRhLWJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLmNpdHktaW5mb3tcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNzBweCk7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogMjBweDtcclxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuXHJcbiAgICAgIC5jaXR5LWxvZ297XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiBzcGFuIDI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmF2b3JpdGUtYWN0aW9uc3tcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcblxyXG5cclxuICAgICAgZGl2OmZpcnN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAyNXB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmRhdGEtZ3JpZHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbn1cclxuXHJcbi5kYXRhLWdyaWQgPiBhcHAtd2VhdGhlci1kZWdyZWVzLXZpZXd7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var src_app_core_services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/weather.service */ 1267);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-degrees-view/weather-degrees-view.component */ 8995);






function WeatherFavoritesComponent_app_weather_degrees_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-weather-degrees-view", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClickItem", function WeatherFavoritesComponent_app_weather_degrees_view_1_Template_app_weather_degrees_view_onClickItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.OnClickWeather($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("weatherDetails", item_r1);
} }
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
                let temperature = f.WeatherData.CurrentConditions[0].Temperature.Metric.Value + '`' + f.WeatherData.CurrentConditions[0].Temperature.Metric.Unit;
                return { title: f.Name, degrees: temperature, description: f.WeatherData.CurrentConditions[0].WeatherText };
            });
        });
    }
    OnClickWeather(name) {
        const navigationExtras = { state: { name: name } };
        this.router.navigate(['home'], navigationExtras);
    }
}
WeatherFavoritesComponent.ɵfac = function WeatherFavoritesComponent_Factory(t) { return new (t || WeatherFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService)); };
WeatherFavoritesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WeatherFavoritesComponent, selectors: [["app-weather-favorites"]], decls: 2, vars: 1, consts: [[1, "data-grid"], [3, "weatherDetails", "onClickItem", 4, "ngFor", "ngForOf"], [3, "weatherDetails", "onClickItem"]], template: function WeatherFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WeatherFavoritesComponent_app_weather_degrees_view_1_Template, 1, 1, "app-weather-degrees-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.favorites);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_1__.WeatherDegreesViewComponent], styles: [".data-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.data-grid[_ngcontent-%COMP%]    > app-weather-degrees-view[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.data-grid[_ngcontent-%COMP%]    > app-weather-degrees-view[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0FBQ0oiLCJmaWxlIjoid2VhdGhlci1mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1ncmlke1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxufVxyXG5cclxuLmRhdGEtZ3JpZCA+IGFwcC13ZWF0aGVyLWRlZ3JlZXMtdmlld3tcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAmOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/weather-degrees-view/weather-degrees-view.component */ 8995);
/* harmony import */ var _components_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/weather-details/weather-details.component */ 3366);
/* harmony import */ var _components_weather_favorites_weather_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/weather-favorites/weather-favorites.component */ 5579);
/* harmony import */ var src_app_core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/modules/material/material.module */ 7345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_core_services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/weather.service */ 1267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








class WeatherModule {
}
WeatherModule.ɵfac = function WeatherModule_Factory(t) { return new (t || WeatherModule)(); };
WeatherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: WeatherModule });
WeatherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [src_app_core_services_weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            src_app_core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WeatherModule, { declarations: [_components_weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_0__.WeatherDegreesViewComponent, _components_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_1__.WeatherDetailsComponent, _components_weather_favorites_weather_favorites_component__WEBPACK_IMPORTED_MODULE_2__.WeatherFavoritesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        src_app_core_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule], exports: [_components_weather_degrees_view_weather_degrees_view_component__WEBPACK_IMPORTED_MODULE_0__.WeatherDegreesViewComponent, _components_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_1__.WeatherDetailsComponent, _components_weather_favorites_weather_favorites_component__WEBPACK_IMPORTED_MODULE_2__.WeatherFavoritesComponent] }); })();


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
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/Nav/components/Dropdown/dropdown.module.css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/Nav/components/Dropdown/dropdown.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".dropdown_dropdown_wrapper__qhcjU\\n{\\n    padding: 15px 10px;\\n    transition: var(--transition);\\n} \\n.dropdown_dropdown_wrapper__qhcjU:is(:hover, .dropdown_active__Kcgpj)>a\\n{\\n    color: var(--dropdown-color);\\n}\\n\\n.dropdown_dropdown_wrapper__qhcjU{\\n    position: relative;\\n    perspective: 800px;\\n}\\n.dropdown_dropdown_wrapper__qhcjU .dropdown_title__v0I2A{\\n    padding-right: 20px !important;\\n}\\n.dropdown_dropdown_wrapper__qhcjU .dropdown_title__v0I2A::before{\\n    content: '>';\\n    position: absolute;\\n    right: 0;\\n    top: 50%;\\n    transform: translateY(-50%) rotate(90deg);\\n    color: inherit;\\n}\\n\\n.dropdown_dropdown__0YKck{\\n    position: absolute;\\n    top: 100%;\\n    width: var(--dropdown-width);\\n    background-color: var(--dropdown-bg);\\n    box-shadow: var(--shadow);\\n    border-radius: 0 0 6px 6px;\\n    transform-origin: 0 0;\\n    transform: rotateX(-88deg);\\n    transition: var(--transition);\\n    -webkit-backface-visibility: hidden;\\n            backface-visibility: hidden;\\n    border-top: 2px solid var(--primary_color);\\n    max-height: 250px;\\n    \\n}\\n.dropdown_dropdown__0YKck>div{\\n    height: 100%;\\n    overflow-y: auto;\\n    display: grid;\\n    max-height: 250px;\\n}\\n\\n.dropdown_dropdown__0YKck::before{\\n    content: '';\\n    position: absolute;\\n    left: 8px;\\n    bottom: 100%;\\n    border: 8px solid;\\n    border-color: transparent transparent var(--primary_color);\\n}\\n\\n.dropdown_dropdown__0YKck a:nth-last-of-type(1){\\n    border-radius: 0 0 6px 6px;\\n}\\n.dropdown_dropdown__0YKck a{\\n    padding: 6px 15px !important;\\n    font-size: 14px;\\n    white-space: nowrap;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n}\\n.dropdown_dropdown__0YKck a+a{\\n    border-top: 1px solid #0002;\\n}\\n.dropdown_dropdown__0YKck a:hover{\\n    background-color: var(--dropdown-hover-color);\\n}\\n.dropdown_dropdown_wrapper__qhcjU:hover .dropdown_dropdown__0YKck{\\n    transform: rotateX(0deg);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/Nav/components/Dropdown/dropdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;;IAEI,kBAAkB;IAClB,6BAA6B;AACjC;AACA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,yCAAyC;IACzC,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,4BAA4B;IAC5B,oCAAoC;IACpC,yBAAyB;IACzB,0BAA0B;IAC1B,qBAAqB;IACrB,0BAA0B;IAC1B,6BAA6B;IAC7B,mCAA2B;YAA3B,2BAA2B;IAC3B,0CAA0C;IAC1C,iBAAiB;;AAErB;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,iBAAiB;IACjB,0DAA0D;AAC9D;;AAEA;IACI,0BAA0B;AAC9B;AACA;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,6CAA6C;AACjD;AACA;IACI,wBAAwB;AAC5B\",\"sourcesContent\":[\".dropdown_wrapper\\n{\\n    padding: 15px 10px;\\n    transition: var(--transition);\\n} \\n.dropdown_wrapper:is(:hover, .active)>a\\n{\\n    color: var(--dropdown-color);\\n}\\n\\n.dropdown_wrapper{\\n    position: relative;\\n    perspective: 800px;\\n}\\n.dropdown_wrapper .title{\\n    padding-right: 20px !important;\\n}\\n.dropdown_wrapper .title::before{\\n    content: '>';\\n    position: absolute;\\n    right: 0;\\n    top: 50%;\\n    transform: translateY(-50%) rotate(90deg);\\n    color: inherit;\\n}\\n\\n.dropdown{\\n    position: absolute;\\n    top: 100%;\\n    width: var(--dropdown-width);\\n    background-color: var(--dropdown-bg);\\n    box-shadow: var(--shadow);\\n    border-radius: 0 0 6px 6px;\\n    transform-origin: 0 0;\\n    transform: rotateX(-88deg);\\n    transition: var(--transition);\\n    backface-visibility: hidden;\\n    border-top: 2px solid var(--primary_color);\\n    max-height: 250px;\\n    \\n}\\n.dropdown>div{\\n    height: 100%;\\n    overflow-y: auto;\\n    display: grid;\\n    max-height: 250px;\\n}\\n\\n.dropdown::before{\\n    content: '';\\n    position: absolute;\\n    left: 8px;\\n    bottom: 100%;\\n    border: 8px solid;\\n    border-color: transparent transparent var(--primary_color);\\n}\\n\\n.dropdown a:nth-last-of-type(1){\\n    border-radius: 0 0 6px 6px;\\n}\\n.dropdown a{\\n    padding: 6px 15px !important;\\n    font-size: 14px;\\n    white-space: nowrap;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n}\\n.dropdown a+a{\\n    border-top: 1px solid #0002;\\n}\\n.dropdown a:hover{\\n    background-color: var(--dropdown-hover-color);\\n}\\n.dropdown_wrapper:hover .dropdown{\\n    transform: rotateX(0deg);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"dropdown_wrapper\": \"dropdown_dropdown_wrapper__qhcjU\",\n\t\"active\": \"dropdown_active__Kcgpj\",\n\t\"title\": \"dropdown_title__v0I2A\",\n\t\"dropdown\": \"dropdown_dropdown__0YKck\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9OYXYvY29tcG9uZW50cy9Ecm9wZG93bi9kcm9wZG93bi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNEtBQXdGO0FBQ2xJO0FBQ0E7QUFDQSw4RUFBOEUseUJBQXlCLG9DQUFvQyxJQUFJLDRFQUE0RSxtQ0FBbUMsR0FBRyxzQ0FBc0MseUJBQXlCLHlCQUF5QixHQUFHLDJEQUEyRCxxQ0FBcUMsR0FBRyxtRUFBbUUsbUJBQW1CLHlCQUF5QixlQUFlLGVBQWUsZ0RBQWdELHFCQUFxQixHQUFHLDhCQUE4Qix5QkFBeUIsZ0JBQWdCLG1DQUFtQywyQ0FBMkMsZ0NBQWdDLGlDQUFpQyw0QkFBNEIsaUNBQWlDLG9DQUFvQywwQ0FBMEMsMENBQTBDLGlEQUFpRCx3QkFBd0IsU0FBUyxnQ0FBZ0MsbUJBQW1CLHVCQUF1QixvQkFBb0Isd0JBQXdCLEdBQUcsc0NBQXNDLGtCQUFrQix5QkFBeUIsZ0JBQWdCLG1CQUFtQix3QkFBd0IsaUVBQWlFLEdBQUcsb0RBQW9ELGlDQUFpQyxHQUFHLDhCQUE4QixtQ0FBbUMsc0JBQXNCLDBCQUEwQix1QkFBdUIsOEJBQThCLEdBQUcsZ0NBQWdDLGtDQUFrQyxHQUFHLG9DQUFvQyxvREFBb0QsR0FBRyxvRUFBb0UsK0JBQStCLEdBQUcsT0FBTyx3SEFBd0gsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLDhDQUE4Qyx5QkFBeUIsb0NBQW9DLElBQUksNENBQTRDLG1DQUFtQyxHQUFHLHNCQUFzQix5QkFBeUIseUJBQXlCLEdBQUcsMkJBQTJCLHFDQUFxQyxHQUFHLG1DQUFtQyxtQkFBbUIseUJBQXlCLGVBQWUsZUFBZSxnREFBZ0QscUJBQXFCLEdBQUcsY0FBYyx5QkFBeUIsZ0JBQWdCLG1DQUFtQywyQ0FBMkMsZ0NBQWdDLGlDQUFpQyw0QkFBNEIsaUNBQWlDLG9DQUFvQyxrQ0FBa0MsaURBQWlELHdCQUF3QixTQUFTLGdCQUFnQixtQkFBbUIsdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0Isa0JBQWtCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLHdCQUF3QixpRUFBaUUsR0FBRyxvQ0FBb0MsaUNBQWlDLEdBQUcsY0FBYyxtQ0FBbUMsc0JBQXNCLDBCQUEwQix1QkFBdUIsOEJBQThCLEdBQUcsZ0JBQWdCLGtDQUFrQyxHQUFHLG9CQUFvQixvREFBb0QsR0FBRyxvQ0FBb0MsK0JBQStCLEdBQUcsbUJBQW1CO0FBQzMxSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2L2NvbXBvbmVudHMvRHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmNzcz9iZmYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZHJvcGRvd25fZHJvcGRvd25fd3JhcHBlcl9fcWhjalVcXG57XFxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufSBcXG4uZHJvcGRvd25fZHJvcGRvd25fd3JhcHBlcl9fcWhjalU6aXMoOmhvdmVyLCAuZHJvcGRvd25fYWN0aXZlX19LY2dwaik+YVxcbntcXG4gICAgY29sb3I6IHZhcigtLWRyb3Bkb3duLWNvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duX2Ryb3Bkb3duX3dyYXBwZXJfX3FoY2pVe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBlcnNwZWN0aXZlOiA4MDBweDtcXG59XFxuLmRyb3Bkb3duX2Ryb3Bkb3duX3dyYXBwZXJfX3FoY2pVIC5kcm9wZG93bl90aXRsZV9fdjBJMkF7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcXG59XFxuLmRyb3Bkb3duX2Ryb3Bkb3duX3dyYXBwZXJfX3FoY2pVIC5kcm9wZG93bl90aXRsZV9fdjBJMkE6OmJlZm9yZXtcXG4gICAgY29udGVudDogJz4nO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg5MGRlZyk7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZHJvcGRvd25fZHJvcGRvd25fXzBZS2Nre1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgd2lkdGg6IHZhcigtLWRyb3Bkb3duLXdpZHRoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24tYmcpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTg4ZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnlfY29sb3IpO1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gICAgXFxufVxcbi5kcm9wZG93bl9kcm9wZG93bl9fMFlLY2s+ZGl2e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uZHJvcGRvd25fZHJvcGRvd25fXzBZS2NrOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDhweDtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duX2Ryb3Bkb3duX18wWUtjayBhOm50aC1sYXN0LW9mLXR5cGUoMSl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcbn1cXG4uZHJvcGRvd25fZHJvcGRvd25fXzBZS2NrIGF7XFxuICAgIHBhZGRpbmc6IDZweCAxNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5kcm9wZG93bl9kcm9wZG93bl9fMFlLY2sgYSthe1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDI7XFxufVxcbi5kcm9wZG93bl9kcm9wZG93bl9fMFlLY2sgYTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24taG92ZXItY29sb3IpO1xcbn1cXG4uZHJvcGRvd25fZHJvcGRvd25fd3JhcHBlcl9fcWhjalU6aG92ZXIgLmRyb3Bkb3duX2Ryb3Bkb3duX18wWUtja3tcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9OYXYvY29tcG9uZW50cy9Ecm9wZG93bi9kcm9wZG93bi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUix5Q0FBeUM7SUFDekMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDZDQUE2QztBQUNqRDtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kcm9wZG93bl93cmFwcGVyXFxue1xcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn0gXFxuLmRyb3Bkb3duX3dyYXBwZXI6aXMoOmhvdmVyLCAuYWN0aXZlKT5hXFxue1xcbiAgICBjb2xvcjogdmFyKC0tZHJvcGRvd24tY29sb3IpO1xcbn1cXG5cXG4uZHJvcGRvd25fd3JhcHBlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwZXJzcGVjdGl2ZTogODAwcHg7XFxufVxcbi5kcm9wZG93bl93cmFwcGVyIC50aXRsZXtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xcbn1cXG4uZHJvcGRvd25fd3JhcHBlciAudGl0bGU6OmJlZm9yZXtcXG4gICAgY29udGVudDogJz4nO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg5MGRlZyk7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZHJvcGRvd257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICB3aWR0aDogdmFyKC0tZHJvcGRvd24td2lkdGgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1iZyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtODhkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeV9jb2xvcik7XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbiAgICBcXG59XFxuLmRyb3Bkb3duPmRpdntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmRyb3Bkb3duOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDhweDtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1wcmltYXJ5X2NvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duIGE6bnRoLWxhc3Qtb2YtdHlwZSgxKXtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XFxufVxcbi5kcm9wZG93biBhe1xcbiAgICBwYWRkaW5nOiA2cHggMTVweCAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uZHJvcGRvd24gYSthe1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDI7XFxufVxcbi5kcm9wZG93biBhOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1ob3Zlci1jb2xvcik7XFxufVxcbi5kcm9wZG93bl93cmFwcGVyOmhvdmVyIC5kcm9wZG93bntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJkcm9wZG93bl93cmFwcGVyXCI6IFwiZHJvcGRvd25fZHJvcGRvd25fd3JhcHBlcl9fcWhjalVcIixcblx0XCJhY3RpdmVcIjogXCJkcm9wZG93bl9hY3RpdmVfX0tjZ3BqXCIsXG5cdFwidGl0bGVcIjogXCJkcm9wZG93bl90aXRsZV9fdjBJMkFcIixcblx0XCJkcm9wZG93blwiOiBcImRyb3Bkb3duX2Ryb3Bkb3duX18wWUtja1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/Nav/components/Dropdown/dropdown.module.css\n"));

/***/ })

});
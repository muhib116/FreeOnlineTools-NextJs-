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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.dropdown_dropdown_wrapper__qhcjU\\n{\\n    padding: 15px 10px;\\n    transition: var(--transition);\\n} \\n.dropdown_dropdown_wrapper__qhcjU:is(:hover, .dropdown_active__Kcgpj)>a\\n{\\n    color: var(--dropdown-color);\\n}\\n\\n.dropdown_dropdown_wrapper__qhcjU{\\n    position: relative;\\n    perspective: 800px;\\n}\\n.dropdown_dropdown_wrapper__qhcjU .dropdown_title__v0I2A{\\n    padding-right: 20px !important;\\n}\\n.dropdown_dropdown_wrapper__qhcjU .dropdown_title__v0I2A::before{\\n    content: '>';\\n    position: absolute;\\n    right: 0;\\n    top: 50%;\\n    transform: translateY(-50%) rotate(90deg);\\n    color: inherit;\\n}\\n\\n.dropdown_dropdown__0YKck{\\n    position: absolute;\\n    top: 100%;\\n    width: var(--dropdown-width);\\n    background-color: var(--dropdown-bg);\\n    box-shadow: var(--shadow);\\n    border-radius: 0 0 6px 6px;\\n    transform-origin: 0 0;\\n    transform: rotateX(-88deg);\\n    transition: var(--transition);\\n    -webkit-backface-visibility: hidden;\\n            backface-visibility: hidden;\\n    border-top: 2px solid var(--primary-color);\\n}\\n\\n.dropdown_dropdown__0YKck a:nth-last-of-type(1){\\n    border-radius: 0 0 6px 6px;\\n}\\n.dropdown_dropdown__0YKck::before{\\n    content: '';\\n    position: absolute;\\n    left: 8px;\\n    bottom: 100%;\\n    border: 8px solid;\\n    border-color: transparent transparent var(--primary-color);\\n}\\n\\n.dropdown_dropdown__0YKck>div{\\n    height: 100%;\\n    overflow-y: auto;\\n    display: grid;\\n    max-height: 250px;\\n}\\n.dropdown_dropdown__0YKck a{\\n    padding: 5px 15px !important;\\n    font-size: 14px;\\n    white-space: nowrap;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n}\\n.dropdown_dropdown__0YKck a+a{\\n    border-top: 2px solid #0002;\\n}\\n.dropdown_dropdown__0YKck a:hover{\\n    background-color: #fff1;\\n}\\n.dropdown_dropdown_wrapper__qhcjU:hover .dropdown_dropdown__0YKck{\\n    transform: rotateX(0deg);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/Nav/components/Dropdown/dropdown.module.css\"],\"names\":[],\"mappings\":\";AACA;;IAEI,kBAAkB;IAClB,6BAA6B;AACjC;AACA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,yCAAyC;IACzC,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,4BAA4B;IAC5B,oCAAoC;IACpC,yBAAyB;IACzB,0BAA0B;IAC1B,qBAAqB;IACrB,0BAA0B;IAC1B,6BAA6B;IAC7B,mCAA2B;YAA3B,2BAA2B;IAC3B,0CAA0C;AAC9C;;AAEA;IACI,0BAA0B;AAC9B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,iBAAiB;IACjB,0DAA0D;AAC9D;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,wBAAwB;AAC5B\",\"sourcesContent\":[\"\\n.dropdown_wrapper\\n{\\n    padding: 15px 10px;\\n    transition: var(--transition);\\n} \\n.dropdown_wrapper:is(:hover, .active)>a\\n{\\n    color: var(--dropdown-color);\\n}\\n\\n.dropdown_wrapper{\\n    position: relative;\\n    perspective: 800px;\\n}\\n.dropdown_wrapper .title{\\n    padding-right: 20px !important;\\n}\\n.dropdown_wrapper .title::before{\\n    content: '>';\\n    position: absolute;\\n    right: 0;\\n    top: 50%;\\n    transform: translateY(-50%) rotate(90deg);\\n    color: inherit;\\n}\\n\\n.dropdown{\\n    position: absolute;\\n    top: 100%;\\n    width: var(--dropdown-width);\\n    background-color: var(--dropdown-bg);\\n    box-shadow: var(--shadow);\\n    border-radius: 0 0 6px 6px;\\n    transform-origin: 0 0;\\n    transform: rotateX(-88deg);\\n    transition: var(--transition);\\n    backface-visibility: hidden;\\n    border-top: 2px solid var(--primary-color);\\n}\\n\\n.dropdown a:nth-last-of-type(1){\\n    border-radius: 0 0 6px 6px;\\n}\\n.dropdown::before{\\n    content: '';\\n    position: absolute;\\n    left: 8px;\\n    bottom: 100%;\\n    border: 8px solid;\\n    border-color: transparent transparent var(--primary-color);\\n}\\n\\n.dropdown>div{\\n    height: 100%;\\n    overflow-y: auto;\\n    display: grid;\\n    max-height: 250px;\\n}\\n.dropdown a{\\n    padding: 5px 15px !important;\\n    font-size: 14px;\\n    white-space: nowrap;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n}\\n.dropdown a+a{\\n    border-top: 2px solid #0002;\\n}\\n.dropdown a:hover{\\n    background-color: #fff1;\\n}\\n.dropdown_wrapper:hover .dropdown{\\n    transform: rotateX(0deg);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"dropdown_wrapper\": \"dropdown_dropdown_wrapper__qhcjU\",\n\t\"active\": \"dropdown_active__Kcgpj\",\n\t\"title\": \"dropdown_title__v0I2A\",\n\t\"dropdown\": \"dropdown_dropdown__0YKck\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9OYXYvY29tcG9uZW50cy9Ecm9wZG93bi9kcm9wZG93bi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNEtBQXdGO0FBQ2xJO0FBQ0E7QUFDQSxnRkFBZ0YseUJBQXlCLG9DQUFvQyxJQUFJLDRFQUE0RSxtQ0FBbUMsR0FBRyxzQ0FBc0MseUJBQXlCLHlCQUF5QixHQUFHLDJEQUEyRCxxQ0FBcUMsR0FBRyxtRUFBbUUsbUJBQW1CLHlCQUF5QixlQUFlLGVBQWUsZ0RBQWdELHFCQUFxQixHQUFHLDhCQUE4Qix5QkFBeUIsZ0JBQWdCLG1DQUFtQywyQ0FBMkMsZ0NBQWdDLGlDQUFpQyw0QkFBNEIsaUNBQWlDLG9DQUFvQywwQ0FBMEMsMENBQTBDLGlEQUFpRCxHQUFHLG9EQUFvRCxpQ0FBaUMsR0FBRyxvQ0FBb0Msa0JBQWtCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLHdCQUF3QixpRUFBaUUsR0FBRyxrQ0FBa0MsbUJBQW1CLHVCQUF1QixvQkFBb0Isd0JBQXdCLEdBQUcsOEJBQThCLG1DQUFtQyxzQkFBc0IsMEJBQTBCLHVCQUF1Qiw4QkFBOEIsR0FBRyxnQ0FBZ0Msa0NBQWtDLEdBQUcsb0NBQW9DLDhCQUE4QixHQUFHLG9FQUFvRSwrQkFBK0IsR0FBRyxPQUFPLG1IQUFtSCxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksZ0RBQWdELHlCQUF5QixvQ0FBb0MsSUFBSSw0Q0FBNEMsbUNBQW1DLEdBQUcsc0JBQXNCLHlCQUF5Qix5QkFBeUIsR0FBRywyQkFBMkIscUNBQXFDLEdBQUcsbUNBQW1DLG1CQUFtQix5QkFBeUIsZUFBZSxlQUFlLGdEQUFnRCxxQkFBcUIsR0FBRyxjQUFjLHlCQUF5QixnQkFBZ0IsbUNBQW1DLDJDQUEyQyxnQ0FBZ0MsaUNBQWlDLDRCQUE0QixpQ0FBaUMsb0NBQW9DLGtDQUFrQyxpREFBaUQsR0FBRyxvQ0FBb0MsaUNBQWlDLEdBQUcsb0JBQW9CLGtCQUFrQix5QkFBeUIsZ0JBQWdCLG1CQUFtQix3QkFBd0IsaUVBQWlFLEdBQUcsa0JBQWtCLG1CQUFtQix1QkFBdUIsb0JBQW9CLHdCQUF3QixHQUFHLGNBQWMsbUNBQW1DLHNCQUFzQiwwQkFBMEIsdUJBQXVCLDhCQUE4QixHQUFHLGdCQUFnQixrQ0FBa0MsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsb0NBQW9DLCtCQUErQixHQUFHLG1CQUFtQjtBQUMxdUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9jb21wb25lbnRzL0Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS5jc3M/YmZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRyb3Bkb3duX2Ryb3Bkb3duX3dyYXBwZXJfX3FoY2pVXFxue1xcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn0gXFxuLmRyb3Bkb3duX2Ryb3Bkb3duX3dyYXBwZXJfX3FoY2pVOmlzKDpob3ZlciwgLmRyb3Bkb3duX2FjdGl2ZV9fS2NncGopPmFcXG57XFxuICAgIGNvbG9yOiB2YXIoLS1kcm9wZG93bi1jb2xvcik7XFxufVxcblxcbi5kcm9wZG93bl9kcm9wZG93bl93cmFwcGVyX19xaGNqVXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwZXJzcGVjdGl2ZTogODAwcHg7XFxufVxcbi5kcm9wZG93bl9kcm9wZG93bl93cmFwcGVyX19xaGNqVSAuZHJvcGRvd25fdGl0bGVfX3YwSTJBe1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5kcm9wZG93bl9kcm9wZG93bl93cmFwcGVyX19xaGNqVSAuZHJvcGRvd25fdGl0bGVfX3YwSTJBOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICc+JztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoOTBkZWcpO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmRyb3Bkb3duX2Ryb3Bkb3duX18wWUtja3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiB2YXIoLS1kcm9wZG93bi13aWR0aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3Bkb3duLWJnKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC04OGRlZyk7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duX2Ryb3Bkb3duX18wWUtjayBhOm50aC1sYXN0LW9mLXR5cGUoMSl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcbn1cXG4uZHJvcGRvd25fZHJvcGRvd25fXzBZS2NrOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDhweDtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmRyb3Bkb3duX2Ryb3Bkb3duX18wWUtjaz5kaXZ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XFxufVxcbi5kcm9wZG93bl9kcm9wZG93bl9fMFlLY2sgYXtcXG4gICAgcGFkZGluZzogNXB4IDE1cHggIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmRyb3Bkb3duX2Ryb3Bkb3duX18wWUtjayBhK2F7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDAwMjtcXG59XFxuLmRyb3Bkb3duX2Ryb3Bkb3duX18wWUtjayBhOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMTtcXG59XFxuLmRyb3Bkb3duX2Ryb3Bkb3duX3dyYXBwZXJfX3FoY2pVOmhvdmVyIC5kcm9wZG93bl9kcm9wZG93bl9fMFlLY2t7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvTmF2L2NvbXBvbmVudHMvRHJvcGRvd24vZHJvcGRvd24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQztBQUNBOztJQUVJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLHlDQUF5QztJQUN6QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5kcm9wZG93bl93cmFwcGVyXFxue1xcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn0gXFxuLmRyb3Bkb3duX3dyYXBwZXI6aXMoOmhvdmVyLCAuYWN0aXZlKT5hXFxue1xcbiAgICBjb2xvcjogdmFyKC0tZHJvcGRvd24tY29sb3IpO1xcbn1cXG5cXG4uZHJvcGRvd25fd3JhcHBlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwZXJzcGVjdGl2ZTogODAwcHg7XFxufVxcbi5kcm9wZG93bl93cmFwcGVyIC50aXRsZXtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xcbn1cXG4uZHJvcGRvd25fd3JhcHBlciAudGl0bGU6OmJlZm9yZXtcXG4gICAgY29udGVudDogJz4nO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg5MGRlZyk7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uZHJvcGRvd257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICB3aWR0aDogdmFyKC0tZHJvcGRvd24td2lkdGgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1iZyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtODhkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5kcm9wZG93biBhOm50aC1sYXN0LW9mLXR5cGUoMSl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcbn1cXG4uZHJvcGRvd246OmJlZm9yZXtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogOHB4O1xcbiAgICBib3R0b206IDEwMCU7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uZHJvcGRvd24+ZGl2e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbn1cXG4uZHJvcGRvd24gYXtcXG4gICAgcGFkZGluZzogNXB4IDE1cHggIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmRyb3Bkb3duIGErYXtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDAyO1xcbn1cXG4uZHJvcGRvd24gYTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE7XFxufVxcbi5kcm9wZG93bl93cmFwcGVyOmhvdmVyIC5kcm9wZG93bntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJkcm9wZG93bl93cmFwcGVyXCI6IFwiZHJvcGRvd25fZHJvcGRvd25fd3JhcHBlcl9fcWhjalVcIixcblx0XCJhY3RpdmVcIjogXCJkcm9wZG93bl9hY3RpdmVfX0tjZ3BqXCIsXG5cdFwidGl0bGVcIjogXCJkcm9wZG93bl90aXRsZV9fdjBJMkFcIixcblx0XCJkcm9wZG93blwiOiBcImRyb3Bkb3duX2Ryb3Bkb3duX18wWUtja1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/Nav/components/Dropdown/dropdown.module.css\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Nav/Dropdown/index.js":
/*!******************************************!*\
  !*** ./components/Nav/Dropdown/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dropdown_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.module.css */ \"./components/Nav/Dropdown/dropdown.module.css\");\n/* harmony import */ var _dropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * \n * {\n *      title: Dropdown Menu,\n *      list: [\n *          { title: '', link: '', target: '', isDoFollow: true/false}\n *      ]\n * }\n */ function Dropdown(param) {\n    let { title , children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_dropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdown_wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                className: [].join(\" \"),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/muhibbullahah/Desktop/My Project/Personal/Free Online Tools/Frontend/components/Nav/Dropdown/index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: [\n                    (_dropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdown)\n                ].join(\" \"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/muhibbullahah/Desktop/My Project/Personal/Free Online Tools/Frontend/components/Nav/Dropdown/index.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/muhibbullahah/Desktop/My Project/Personal/Free Online Tools/Frontend/components/Nav/Dropdown/index.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhibbullahah/Desktop/My Project/Personal/Free Online Tools/Frontend/components/Nav/Dropdown/index.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = Dropdown;\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9Ecm9wZG93bi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTJDO0FBQzNDOzs7Ozs7OztDQVFDLEdBQ2MsU0FBU0MsU0FBUyxLQUFrQixFQUFFO1FBQXBCLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFDLEdBQWxCO0lBQzdCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFZTCw4RUFBd0I7OzBCQUNyQyw4REFBQ087Z0JBQUVDLE1BQUs7Z0JBQUlILFdBQVksRUFBRSxDQUFDSSxJQUFJLENBQUM7MEJBQVNQOzs7Ozs7MEJBQ3pDLDhEQUFDRTtnQkFBSUMsV0FBWTtvQkFBQ0wsc0VBQWdCO2lCQUFDLENBQUNTLElBQUksQ0FBQzswQkFDckMsNEVBQUNMOzhCQUFNRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkIsQ0FBQztLQVR1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvRHJvcGRvd24vaW5kZXguanM/NTE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2Ryb3Bkb3duLm1vZHVsZS5jc3MnXG4vKipcbiAqIFxuICoge1xuICogICAgICB0aXRsZTogRHJvcGRvd24gTWVudSxcbiAqICAgICAgbGlzdDogW1xuICogICAgICAgICAgeyB0aXRsZTogJycsIGxpbms6ICcnLCB0YXJnZXQ6ICcnLCBpc0RvRm9sbG93OiB0cnVlL2ZhbHNlfVxuICogICAgICBdXG4gKiB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duKHsgdGl0bGUsIGNoaWxkcmVufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5kcm9wZG93bl93cmFwcGVyIH0+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17IFtdLmpvaW4oJyAnKSB9PnsgdGl0bGUgfTwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgW2NsYXNzZXMuZHJvcGRvd25dLmpvaW4oJyAnKSB9PlxuICAgICAgICAgICAgICAgIDxkaXY+eyBjaGlsZHJlbiB9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJEcm9wZG93biIsInRpdGxlIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJkcm9wZG93bl93cmFwcGVyIiwiYSIsImhyZWYiLCJqb2luIiwiZHJvcGRvd24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav/Dropdown/index.js\n"));

/***/ })

});
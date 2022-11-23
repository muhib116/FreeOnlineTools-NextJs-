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

/***/ "./components/useAuth.js":
/*!*******************************!*\
  !*** ./components/useAuth.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\nfunction useAuth() {\n    _s();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [storage, setStorage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"rendered\");\n    });\n    const isLogin = ()=>{\n        try {\n            return {\n                access_token: localStorage.access_toke,\n                email: localStorage.email\n            };\n        } catch (e) {}\n        return false;\n    };\n    const logout = async ()=>{\n        let payload = {\n            access_token: localStorage.getItem(\"access_token\"),\n            email: localStorage.getItem(\"email\")\n        };\n        console.log(payload);\n        let res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"auth/user-logout\", payload);\n        if (res.status) {\n            if (localStorage.access_token && localStorage.email) {\n                delete localStorage.access_token;\n                delete localStorage.email;\n            }\n            push(\"/\");\n        }\n        return false;\n    };\n    return {\n        isLogin,\n        logout\n    };\n}\n_s(useAuth, \"OJtTtlTH15YKpSpcAYa2uTZyto0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZUF1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDYztBQUNJO0FBRTVCLFNBQVNJLFVBQVU7O0lBQzlCLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdKLHNEQUFTQTtJQUMxQixNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUMsQ0FBQztJQUN4Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaTSxRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxNQUFNQyxVQUFVLElBQU07UUFDbEIsSUFBSTtZQUNBLE9BQU87Z0JBQUVDLGNBQWNDLGFBQWFDLFdBQVc7Z0JBQUVDLE9BQU9GLGFBQWFFLEtBQUs7WUFBQztRQUMvRSxFQUFFLE9BQU9DLEdBQUUsQ0FFWDtRQUNBLE9BQU8sS0FBSztJQUNoQjtJQUVBLE1BQU1DLFNBQVMsVUFDZjtRQUNJLElBQUlDLFVBQVU7WUFDVk4sY0FBY0MsYUFBYU0sT0FBTyxDQUFDO1lBQ25DSixPQUFPRixhQUFhTSxPQUFPLENBQUM7UUFDaEM7UUFDQVYsUUFBUUMsR0FBRyxDQUFDUTtRQUNaLElBQUlFLE1BQU0sTUFBTW5CLGtEQUFVLENBQUMsb0JBQW9CaUI7UUFDL0MsSUFBR0UsSUFBSUUsTUFBTSxFQUFDO1lBQ1YsSUFBR1QsYUFBYUQsWUFBWSxJQUFJQyxhQUFhRSxLQUFLLEVBQUM7Z0JBQy9DLE9BQU9GLGFBQWFELFlBQVk7Z0JBQ2hDLE9BQU9DLGFBQWFFLEtBQUs7WUFDN0IsQ0FBQztZQUNEVCxLQUFLO1FBQ1QsQ0FBQztRQUVELE9BQU8sS0FBSztJQUNoQjtJQUVBLE9BQU87UUFDSEs7UUFDQU07SUFDSjtBQUNKLENBQUM7R0F2Q3VCWjs7UUFDSEgsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlQXV0aC5qcz82MzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICAgIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbc3RvcmFnZSwgc2V0U3RvcmFnZV0gPSB1c2VTdGF0ZSh7fSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVuZGVyZWQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBpc0xvZ2luID0gKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHsgYWNjZXNzX3Rva2VuOiBsb2NhbFN0b3JhZ2UuYWNjZXNzX3Rva2UsIGVtYWlsOiBsb2NhbFN0b3JhZ2UuZW1haWwgfVxuICAgICAgICB9IGNhdGNoIChlKXtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IFxuICAgIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSxcbiAgICAgICAgICAgIGVtYWlsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdhdXRoL3VzZXItbG9nb3V0JywgcGF5bG9hZClcbiAgICAgICAgaWYocmVzLnN0YXR1cyl7XG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuYWNjZXNzX3Rva2VuICYmIGxvY2FsU3RvcmFnZS5lbWFpbCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsU3RvcmFnZS5hY2Nlc3NfdG9rZW5cbiAgICAgICAgICAgICAgICBkZWxldGUgbG9jYWxTdG9yYWdlLmVtYWlsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwdXNoKCcvJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlzTG9naW4sXG4gICAgICAgIGxvZ291dFxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aCIsInB1c2giLCJzdG9yYWdlIiwic2V0U3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJpc0xvZ2luIiwiYWNjZXNzX3Rva2VuIiwibG9jYWxTdG9yYWdlIiwiYWNjZXNzX3Rva2UiLCJlbWFpbCIsImUiLCJsb2dvdXQiLCJwYXlsb2FkIiwiZ2V0SXRlbSIsInJlcyIsInBvc3QiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/useAuth.js\n"));

/***/ })

});
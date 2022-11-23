"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/login",{

/***/ "./pages/auth/login/useLogin.js":
/*!**************************************!*\
  !*** ./pages/auth/login/useLogin.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useLogin; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nfunction useLogin() {\n    const handleInput = (e, setState)=>{\n        const target = e.target;\n        setState(target.value);\n    };\n    const handleLogin = async (param)=>{\n        let { e , setIsLoading , setIsLogIn , setMessage , setMessageType  } = param;\n        setIsLoading(true);\n        e.preventDefault();\n        const target = e.target;\n        const payload = {\n            email: target.email.value,\n            password: target.password.value\n        };\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"auth/user-login\", payload);\n        if (data.access_token) {\n            // show a success message and redirect to home page\n            setMessage(\"Welcome!\");\n            setMessageType(\"success\");\n            setIsLogIn(true);\n        } else {\n            setMessage(\"Please Check your Email/Password Combination\");\n            setMessageType(\"danger\");\n        }\n        setIsLoading(false);\n    };\n    return [\n        handleInput,\n        handleLogin\n    ];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luL3VzZUxvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBRVYsU0FBU0MsV0FDeEI7SUFDSSxNQUFNQyxjQUFjLENBQUNDLEdBQUdDLFdBQWE7UUFDakMsTUFBTUMsU0FBU0YsRUFBRUUsTUFBTTtRQUN2QkQsU0FBU0MsT0FBT0MsS0FBSztJQUN6QjtJQUVBLE1BQU1DLGNBQWMsZUFDcEI7WUFEMkIsRUFBQ0osRUFBQyxFQUFFSyxhQUFZLEVBQUVDLFdBQVUsRUFBRUMsV0FBVSxFQUFFQyxlQUFjLEVBQUM7UUFFaEZILGFBQWEsSUFBSTtRQUNqQkwsRUFBRVMsY0FBYztRQUNoQixNQUFNUCxTQUFTRixFQUFFRSxNQUFNO1FBRXZCLE1BQU1RLFVBQVU7WUFDWkMsT0FBT1QsT0FBT1MsS0FBSyxDQUFDUixLQUFLO1lBQ3pCUyxVQUFVVixPQUFPVSxRQUFRLENBQUNULEtBQUs7UUFDbkM7UUFFQSxNQUFNLEVBQUVVLEtBQUksRUFBRSxHQUFHLE1BQU1oQixrREFBVSxDQUFDLG1CQUFtQmE7UUFFckQsSUFBR0csS0FBS0UsWUFBWSxFQUFDO1lBQ2pCLG1EQUFtRDtZQUNuRFIsV0FBVztZQUNYQyxlQUFlO1lBQ2ZGLFdBQVcsSUFBSTtRQUNuQixPQUFLO1lBQ0RDLFdBQVc7WUFDWEMsZUFBZTtRQUNuQixDQUFDO1FBQ0RILGFBQWEsS0FBSztJQUN0QjtJQUVBLE9BQU87UUFDSE47UUFDQUs7S0FDSDtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi91c2VMb2dpbi5qcz81NWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTG9naW4oKVxue1xuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGUsIHNldFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIHNldFN0YXRlKHRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICh7ZSwgc2V0SXNMb2FkaW5nLCBzZXRJc0xvZ0luLCBzZXRNZXNzYWdlLCBzZXRNZXNzYWdlVHlwZX0pID0+IFxuICAgIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIGVtYWlsOiB0YXJnZXQuZW1haWwudmFsdWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGFyZ2V0LnBhc3N3b3JkLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2F1dGgvdXNlci1sb2dpbicsIHBheWxvYWQpXG5cbiAgICAgICAgaWYoZGF0YS5hY2Nlc3NfdG9rZW4pe1xuICAgICAgICAgICAgLy8gc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZSBhbmQgcmVkaXJlY3QgdG8gaG9tZSBwYWdlXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCdXZWxjb21lIScpXG4gICAgICAgICAgICBzZXRNZXNzYWdlVHlwZSgnc3VjY2VzcycpXG4gICAgICAgICAgICBzZXRJc0xvZ0luKHRydWUpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0TWVzc2FnZSgnUGxlYXNlIENoZWNrIHlvdXIgRW1haWwvUGFzc3dvcmQgQ29tYmluYXRpb24nKVxuICAgICAgICAgICAgc2V0TWVzc2FnZVR5cGUoJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICAgIGhhbmRsZUlucHV0LFxuICAgICAgICBoYW5kbGVMb2dpblxuICAgIF1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VMb2dpbiIsImhhbmRsZUlucHV0IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVMb2dpbiIsInNldElzTG9hZGluZyIsInNldElzTG9nSW4iLCJzZXRNZXNzYWdlIiwic2V0TWVzc2FnZVR5cGUiLCJwcmV2ZW50RGVmYXVsdCIsInBheWxvYWQiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YSIsInBvc3QiLCJhY2Nlc3NfdG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login/useLogin.js\n"));

/***/ })

});
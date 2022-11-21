"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/register",{

/***/ "./pages/auth/register/useRegister.js":
/*!********************************************!*\
  !*** ./pages/auth/register/useRegister.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useRegister; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nfunction useRegister() {\n    _s();\n    const [timeoutId, setTimeoutId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleInput = (e, setState)=>{\n        let target = e.target;\n        const { value , name  } = target;\n        if (name == \"isAgree\") {\n            setState(target.checked);\n        } else {\n            setState(value);\n        }\n    };\n    const emailValidation = (email, setIsEmailValid, setMessage, setMessageType)=>{\n        let pattern = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\n        if (email.match(pattern)) {\n            setMessage(\"\");\n            setMessageType(\"success\");\n            setIsEmailValid(true);\n            return;\n        }\n        if (!email.length) {\n            setIsEmailValid(null);\n            setMessage(\"\");\n            return;\n        }\n        setIsEmailValid(false);\n        setMessageType(\"danger\");\n        setMessage(\"Invalid Email Address !\");\n    };\n    const handleSubmit = async (e, name, email, password, isAgree, setMessage, setMessageType, isEmailExist, isEmailValid)=>{\n        e.preventDefault();\n        let target = e.target;\n        let formData = new FormData();\n        if (isEmpty(name) || isEmpty(email) || isEmpty(password) || !isAgree) {\n            setMessage(\"Field must not be empty!\");\n            setMessageType(\"danger\");\n            return;\n        }\n        if (isEmailExist || !isEmailValid) {\n            setMessage(\"Your email is not valid!\");\n            setMessageType(\"danger\");\n            return;\n        } else {\n            setMessage(\"\");\n            setMessageType(\"danger\");\n        }\n        formData.append(\"name\", name);\n        formData.append(\"email\", email);\n        formData.append(\"password\", password);\n        formData.append(\"agreement\", isAgree);\n        let { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"create-user\", formData);\n        if (data) {\n        // redirect login page\n        }\n    };\n    const isEmpty = (string)=>{\n        return string === null || string.trim() === \"\";\n    };\n    const checkEmailExistence = (e, setIsEmailExist, setIsLoading, setMessage, setMessageType, isValidElement)=>{\n        setIsLoading(true);\n        clearTimeout(timeoutId);\n        let id = setTimeout(async ()=>{\n            let { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"users-by-email/\".concat(e.target.value));\n            setIsLoading(false);\n            if (data.user || !isValidElement) {\n                setIsEmailExist(true);\n                setMessage(\"Invalid Email Address!\");\n                setMessageType(\"danger\");\n            } else {\n                if (isValidElement) {\n                    setMessage(\"Email Available!\");\n                    setMessageType(\"success\");\n                    setIsEmailExist(false);\n                }\n            }\n        }, 2000);\n        setTimeoutId(id);\n    };\n    return [\n        handleInput,\n        handleSubmit,\n        emailValidation,\n        checkEmailExistence\n    ];\n}\n_s(useRegister, \"siptprE3VL2Z93n17JwWmpAiEYE=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3JlZ2lzdGVyL3VzZVJlZ2lzdGVyLmpzPzdlYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmVnaXN0ZXIoKVxue1xuICAgIGNvbnN0IFt0aW1lb3V0SWQsIHNldFRpbWVvdXRJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGUsIHNldFN0YXRlKSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXRcbiAgICAgICAgaWYobmFtZSA9PSAnaXNBZ3JlZScpe1xuICAgICAgICAgICAgc2V0U3RhdGUodGFyZ2V0LmNoZWNrZWQpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0U3RhdGUodmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbWFpbFZhbGlkYXRpb24gPSAoZW1haWwsIHNldElzRW1haWxWYWxpZCwgc2V0TWVzc2FnZSwgc2V0TWVzc2FnZVR5cGUpID0+IFxuICAgIHtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvXG4gICAgICAgIGlmIChlbWFpbC5tYXRjaChwYXR0ZXJuKSkge1xuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICAgICAgICAgIHNldE1lc3NhZ2VUeXBlKCdzdWNjZXNzJylcbiAgICAgICAgICAgIHNldElzRW1haWxWYWxpZCh0cnVlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCFlbWFpbC5sZW5ndGgpe1xuICAgICAgICAgICAgc2V0SXNFbWFpbFZhbGlkKG51bGwpXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCcnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzZXRJc0VtYWlsVmFsaWQoZmFsc2UpXG4gICAgICAgIHNldE1lc3NhZ2VUeXBlKCdkYW5nZXInKVxuICAgICAgICBzZXRNZXNzYWdlKCdJbnZhbGlkIEVtYWlsIEFkZHJlc3MgIScpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUsIG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgaXNBZ3JlZSwgc2V0TWVzc2FnZSwgc2V0TWVzc2FnZVR5cGUsIGlzRW1haWxFeGlzdCwgaXNFbWFpbFZhbGlkKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICAgICAgaWYoaXNFbXB0eShuYW1lKSB8fCBpc0VtcHR5KGVtYWlsKSB8fCBpc0VtcHR5KHBhc3N3b3JkKSB8fCAhaXNBZ3JlZSl7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiRmllbGQgbXVzdCBub3QgYmUgZW1wdHkhXCIpXG4gICAgICAgICAgICBzZXRNZXNzYWdlVHlwZSgnZGFuZ2VyJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNFbWFpbEV4aXN0IHx8ICFpc0VtYWlsVmFsaWQpe1xuICAgICAgICAgICAgc2V0TWVzc2FnZShcIllvdXIgZW1haWwgaXMgbm90IHZhbGlkIVwiKVxuICAgICAgICAgICAgc2V0TWVzc2FnZVR5cGUoJ2RhbmdlcicpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXG4gICAgICAgICAgICBzZXRNZXNzYWdlVHlwZSgnZGFuZ2VyJylcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIG5hbWUpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBlbWFpbClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FncmVlbWVudCcsIGlzQWdyZWUpXG5cbiAgICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgY3JlYXRlLXVzZXJgLCBmb3JtRGF0YSlcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICAvLyByZWRpcmVjdCBsb2dpbiBwYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0VtcHR5ID0gKHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gKHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcudHJpbSgpID09PSBcIlwiKVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRW1haWxFeGlzdGVuY2UgPSAoZSwgc2V0SXNFbWFpbEV4aXN0LCBzZXRJc0xvYWRpbmcsIHNldE1lc3NhZ2UsIHNldE1lc3NhZ2VUeXBlLCBpc1ZhbGlkRWxlbWVudCkgPT4gXG4gICAge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcbiAgICAgICAgbGV0IGlkID0gc2V0VGltZW91dChhc3luYygpID0+IFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYHVzZXJzLWJ5LWVtYWlsLyR7ZS50YXJnZXQudmFsdWV9YClcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcblxuICAgICAgICAgICAgaWYoZGF0YS51c2VyIHx8ICFpc1ZhbGlkRWxlbWVudCl7XG4gICAgICAgICAgICAgICAgc2V0SXNFbWFpbEV4aXN0KHRydWUpXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnSW52YWxpZCBFbWFpbCBBZGRyZXNzIScpXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZVR5cGUoJ2RhbmdlcicpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihpc1ZhbGlkRWxlbWVudCl7XG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ0VtYWlsIEF2YWlsYWJsZSEnKVxuICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlVHlwZSgnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgIHNldElzRW1haWxFeGlzdChmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgc2V0VGltZW91dElkKGlkKVxuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICAgIGhhbmRsZUlucHV0LFxuICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgIGVtYWlsVmFsaWRhdGlvbixcbiAgICAgICAgY2hlY2tFbWFpbEV4aXN0ZW5jZVxuICAgIF1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZVJlZ2lzdGVyIiwidGltZW91dElkIiwic2V0VGltZW91dElkIiwiaGFuZGxlSW5wdXQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJjaGVja2VkIiwiZW1haWxWYWxpZGF0aW9uIiwiZW1haWwiLCJzZXRJc0VtYWlsVmFsaWQiLCJzZXRNZXNzYWdlIiwic2V0TWVzc2FnZVR5cGUiLCJwYXR0ZXJuIiwibWF0Y2giLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwYXNzd29yZCIsImlzQWdyZWUiLCJpc0VtYWlsRXhpc3QiLCJpc0VtYWlsVmFsaWQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpc0VtcHR5IiwiYXBwZW5kIiwiZGF0YSIsInBvc3QiLCJzdHJpbmciLCJ0cmltIiwiY2hlY2tFbWFpbEV4aXN0ZW5jZSIsInNldElzRW1haWxFeGlzdCIsInNldElzTG9hZGluZyIsImlzVmFsaWRFbGVtZW50IiwiY2xlYXJUaW1lb3V0IiwiaWQiLCJzZXRUaW1lb3V0IiwiZ2V0IiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/register/useRegister.js\n"));

/***/ })

});
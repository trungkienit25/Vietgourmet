/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/contact/page",{

/***/ "(app-pages-browser)/./src/app/_common/mapboxInit.js":
/*!***************************************!*\
  !*** ./src/app/_common/mapboxInit.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/_components/sections/ContactMap.jsx":
/*!*****************************************************!*\
  !*** ./src/app/_components/sections/ContactMap.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_mapboxInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/mapboxInit */ \"(app-pages-browser)/./src/app/_common/mapboxInit.js\");\n/* harmony import */ var _common_mapboxInit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_mapboxInit__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ContactMapSection = ()=>{\n    _s();\n    const [mapLock, setMapLock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_common_mapboxInit__WEBPACK_IMPORTED_MODULE_2__.mapboxInit)();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sb-map-frame\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"map\",\n                    className: \"sb-map \".concat(mapLock ? \"sb-active\" : \"\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vietg\\\\OneDrive - vnh3\\\\Documents\\\\GitHub\\\\Vietgourmet\\\\src\\\\app\\\\_components\\\\sections\\\\ContactMap.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sb-lock \".concat(mapLock ? \"sb-active\" : \"\"),\n                    onClick: ()=>setMapLock(!mapLock),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas \".concat(mapLock ? \"fa-unlock\" : \"fa-lock\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vietg\\\\OneDrive - vnh3\\\\Documents\\\\GitHub\\\\Vietgourmet\\\\src\\\\app\\\\_components\\\\sections\\\\ContactMap.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vietg\\\\OneDrive - vnh3\\\\Documents\\\\GitHub\\\\Vietgourmet\\\\src\\\\app\\\\_components\\\\sections\\\\ContactMap.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vietg\\\\OneDrive - vnh3\\\\Documents\\\\GitHub\\\\Vietgourmet\\\\src\\\\app\\\\_components\\\\sections\\\\ContactMap.jsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(ContactMapSection, \"HC1aUmcRr/dqstmJPupVIkQJRKY=\");\n_c = ContactMapSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactMapSection);\nvar _c;\n$RefreshReg$(_c, \"ContactMapSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvc2VjdGlvbnMvQ29udGFjdE1hcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFDSTtBQUVoRCxNQUFNRyxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUkUsOERBQVVBO0lBQ1osR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBRUksNEVBQUNJO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUUsSUFBRztvQkFBTUQsV0FBVyxVQUFvQyxPQUExQkgsVUFBVSxjQUFhOzs7Ozs7OEJBQzFELDhEQUFDRTtvQkFBSUMsV0FBVyxXQUFxQyxPQUExQkgsVUFBVSxjQUFhO29CQUFNSyxTQUFTLElBQU1KLFdBQVcsQ0FBQ0Q7OEJBQ2pGLDRFQUFDTTt3QkFBRUgsV0FBVyxPQUF3QyxPQUFqQ0gsVUFBVSxjQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUQ7R0FuQk1EO0tBQUFBO0FBcUJOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fY29tcG9uZW50cy9zZWN0aW9ucy9Db250YWN0TWFwLmpzeD8yZWViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYXBib3hJbml0IH0gZnJvbSBcIkBjb21tb24vbWFwYm94SW5pdFwiO1xyXG5cclxuY29uc3QgQ29udGFjdE1hcFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW21hcExvY2ssIHNldE1hcExvY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbWFwYm94SW5pdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgey8qIG1hcCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW1hcC1mcmFtZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgY2xhc3NOYW1lPXtgc2ItbWFwICR7bWFwTG9jayA/IFwic2ItYWN0aXZlXCI6IFwiXCJ9YH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzYi1sb2NrICR7bWFwTG9jayA/IFwic2ItYWN0aXZlXCI6IFwiXCJ9YH0gb25DbGljaz17KCkgPT4gc2V0TWFwTG9jayghbWFwTG9jayl9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhcyAke21hcExvY2sgPyBcImZhLXVubG9ja1wiOiBcImZhLWxvY2tcIn1gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogbWFwIGVuZCAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TWFwU2VjdGlvbjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtYXBib3hJbml0IiwiQ29udGFjdE1hcFNlY3Rpb24iLCJtYXBMb2NrIiwic2V0TWFwTG9jayIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwib25DbGljayIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/sections/ContactMap.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/data/app.json":
/*!***************************!*\
  !*** ./src/data/app.json ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"settings":{"siteName":"Vietgourmet","siteDescription":"Restaurant React Next.JS Template","formspreeURL":"https://formspree.io/f/your_api_key","mapbox":{"AccessToken":"*","style":"mapbox://styles/mapbox/light-v11","zoom":15,"long":-79.3949,"lat":43.643102},"perPage":6},"header":{"logo":{"image":"/img/ui/logo.svg","alt":"Logo"},"menu":[{"label":"Trang chủ","link":"/","children":[]},{"label":"Giới thiệu","link":"/about","children":[]},{"label":"Thực đơn","link":"/menu","children":[]},{"label":"Blog","link":"/blog","children":[]},{"label":"Đặt bàn","link":"/reservation","children":0},{"label":"Liên hệ","link":"/contact","children":0}]},"footer":{"copy":"© 2024 Vietgourmet. All rights reserved."},"social":[{"link":"https://twitter.com","title":"Twitter","icon":"fab fa-twitter"},{"link":"https://instagram.com","title":"Instagram","icon":"fab fa-instagram"},{"link":"https://facebook.com","title":"Facebook","icon":"fab fa-facebook-f"},{"link":"https://youtube.com","title":"Youtube","icon":"fab fa-youtube"}],"instagram":[{"image":"/img/instagram/1.jpg","title":"Image #1","link":"https://instagram.com/"},{"image":"/img/instagram/2.jpg","title":"Image #2","link":"https://instagram.com/"},{"image":"/img/instagram/3.jpg","title":"Image #3","link":"https://instagram.com/"},{"image":"/img/instagram/4.jpg","title":"Image #3","link":"https://instagram.com/"},{"image":"/img/instagram/5.jpg","title":"Image #5","link":"https://instagram.com/"},{"image":"/img/instagram/6.jpg","title":"Image #6","link":"https://instagram.com/"}]}');

/***/ })

});
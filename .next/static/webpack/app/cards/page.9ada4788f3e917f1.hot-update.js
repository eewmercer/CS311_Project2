"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cards/page",{

/***/ "(app-pages-browser)/./src/app/Components/Card_Template.jsx":
/*!**********************************************!*\
  !*** ./src/app/Components/Card_Template.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card_Template; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_CardTemplate_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/CardTemplate.module.scss */ \"(app-pages-browser)/./src/app/styles/CardTemplate.module.scss\");\n/* harmony import */ var _styles_CardTemplate_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_CardTemplate_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Card_Template(param) {\n    let { cards } = param;\n    _s();\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [pokemonCard, setPokemonCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cards[counter].name);\n    function displayIndividualFlashcard() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_CardTemplate_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cardTemplate),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"card-id\",\n                    dangerouslySetInnerHTML: {\n                        __html: pokemonCard\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"percent-understood\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    // return cards.map((card, index) => {\n    //   if (index == randomCardIndex) {\n    //     return <div key={index} className={styles.cardTemplate}>\n    //       <h3 id=\"card-id\">{card.name}</h3>\n    //       <div className=\"percent-understood\">\n    //         <p>%</p>\n    //       </div>\n    //     </div>\n    //   }\n    //if statement for percentage/time\n    // })\n    }\n    const changeCard = ()=>{\n        //account for overflow\n        if (counter < cards.length) {\n            setCounter(counter + 1);\n            console.log(counter);\n            setPokemonCard(cards[counter].name);\n        }\n    // else {\n    //   setCounter()\n    //   setPokemonCard(cards[counter].name)\n    // }\n    };\n    // TODO:\n    // - click easy/medium/hard button to update the individual card\n    // - the card's updates: % for amount understood AND scheduled time\n    // easy = 75% + 1m / medium = 50% + 45s / hard = 20% + 25s\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cards-display\",\n                children: [\n                    displayIndividualFlashcard(),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: changeCard,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"difficulty-description\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"How difficult is this card?\"\n                }, void 0, false, {\n                    fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"level-buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"easy\",\n                        children: \"Easy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"medium\",\n                        children: \"Medium\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"hard\",\n                        children: \"Hard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Card_Template, \"Z1/28rzi+6JOAr5o3PiR38hFGso=\");\n_c = Card_Template;\nvar _c;\n$RefreshReg$(_c, \"Card_Template\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9DYXJkX1RlbXBsYXRlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV1QztBQUNnQjtBQUV4QyxTQUFTRyxjQUFjLEtBQU87UUFBUCxFQUFDQyxLQUFLLEVBQUMsR0FBUDs7SUFDcEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQ0csS0FBSyxDQUFDQyxRQUFRLENBQUNJLElBQUk7SUFFbEUsU0FBU0M7UUFDUCxxQkFBTyw4REFBQ0M7WUFBSUMsV0FBV1Ysc0ZBQW1COzs4QkFDeEMsOERBQUNTO29CQUFJRyxJQUFHO29CQUFVQyx5QkFBeUI7d0JBQUVDLFFBQVFUO29CQUFZOzs7Ozs7OEJBQ2pFLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0s7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSVAsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQywrREFBK0Q7SUFDL0QsMENBQTBDO0lBQzFDLDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixNQUFNO0lBQ0osa0NBQWtDO0lBRXBDLEtBQUs7SUFDUDtJQUVBLE1BQU1DLGFBQWE7UUFDakIsc0JBQXNCO1FBQ3RCLElBQUliLFVBQVVELE1BQU1lLE1BQU0sRUFBRTtZQUMxQmIsV0FBV0QsVUFBUTtZQUNuQmUsUUFBUUMsR0FBRyxDQUFDaEI7WUFDWkcsZUFBZUosS0FBSyxDQUFDQyxRQUFRLENBQUNJLElBQUk7UUFDcEM7SUFDQSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxJQUFJO0lBRU47SUFFQSxRQUFRO0lBQ1IsZ0VBQWdFO0lBQ2hFLG1FQUFtRTtJQUNuRSwwREFBMEQ7SUFFMUQscUJBQ0UsOERBQUNhOzswQkFDQyw4REFBQ1g7Z0JBQUlDLFdBQVU7O29CQUNaRjtrQ0FDRCw4REFBQ2E7d0JBQU9DLFNBQVNOO2tDQUFZOzs7Ozs7Ozs7Ozs7MEJBRS9CLDhEQUFDUDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0s7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDTjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNXO3dCQUFPWCxXQUFVO2tDQUFPOzs7Ozs7a0NBQ3pCLDhEQUFDVzt3QkFBT1gsV0FBVTtrQ0FBUzs7Ozs7O2tDQUMzQiw4REFBQ1c7d0JBQU9YLFdBQVU7a0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQztHQTdEd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29tcG9uZW50cy9DYXJkX1RlbXBsYXRlLmpzeD9mZGNjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NhcmRUZW1wbGF0ZS5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZF9UZW1wbGF0ZSh7Y2FyZHN9KSB7XG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtwb2tlbW9uQ2FyZCwgc2V0UG9rZW1vbkNhcmRdID0gdXNlU3RhdGUoY2FyZHNbY291bnRlcl0ubmFtZSlcblxuICBmdW5jdGlvbiBkaXNwbGF5SW5kaXZpZHVhbEZsYXNoY2FyZCgpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGVtcGxhdGV9PlxuICAgICAgPGRpdiBpZD1cImNhcmQtaWRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBva2Vtb25DYXJkIH19PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJjZW50LXVuZGVyc3Rvb2RcIj5cbiAgICAgICAgPHA+JTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgLy8gcmV0dXJuIGNhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAvLyAgIGlmIChpbmRleCA9PSByYW5kb21DYXJkSW5kZXgpIHtcbiAgICAvLyAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRlbXBsYXRlfT5cbiAgICAvLyAgICAgICA8aDMgaWQ9XCJjYXJkLWlkXCI+e2NhcmQubmFtZX08L2gzPlxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyY2VudC11bmRlcnN0b29kXCI+XG4gICAgLy8gICAgICAgICA8cD4lPC9wPlxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgIH1cbiAgICAgIC8vaWYgc3RhdGVtZW50IGZvciBwZXJjZW50YWdlL3RpbWVcblxuICAgIC8vIH0pXG4gIH1cblxuICBjb25zdCBjaGFuZ2VDYXJkID0gKCkgPT4ge1xuICAgIC8vYWNjb3VudCBmb3Igb3ZlcmZsb3dcbiAgICBpZiAoY291bnRlciA8IGNhcmRzLmxlbmd0aCkge1xuICAgICAgc2V0Q291bnRlcihjb3VudGVyKzEpXG4gICAgICBjb25zb2xlLmxvZyhjb3VudGVyKVxuICAgICAgc2V0UG9rZW1vbkNhcmQoY2FyZHNbY291bnRlcl0ubmFtZSlcbiAgICB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICBzZXRDb3VudGVyKClcbiAgICAvLyAgIHNldFBva2Vtb25DYXJkKGNhcmRzW2NvdW50ZXJdLm5hbWUpXG4gICAgLy8gfVxuICAgIFxuICB9XG5cbiAgLy8gVE9ETzpcbiAgLy8gLSBjbGljayBlYXN5L21lZGl1bS9oYXJkIGJ1dHRvbiB0byB1cGRhdGUgdGhlIGluZGl2aWR1YWwgY2FyZFxuICAvLyAtIHRoZSBjYXJkJ3MgdXBkYXRlczogJSBmb3IgYW1vdW50IHVuZGVyc3Rvb2QgQU5EIHNjaGVkdWxlZCB0aW1lXG4gIC8vIGVhc3kgPSA3NSUgKyAxbSAvIG1lZGl1bSA9IDUwJSArIDQ1cyAvIGhhcmQgPSAyMCUgKyAyNXNcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzLWRpc3BsYXknPlxuICAgICAgICB7ZGlzcGxheUluZGl2aWR1YWxGbGFzaGNhcmQoKX1cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjaGFuZ2VDYXJkfT5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWZmaWN1bHR5LWRlc2NyaXB0aW9uJz5cbiAgICAgICAgPHA+SG93IGRpZmZpY3VsdCBpcyB0aGlzIGNhcmQ/PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGV2ZWwtYnV0dG9ucyc+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdlYXN5Jz5FYXN5PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtZWRpdW0nPk1lZGl1bTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0naGFyZCc+SGFyZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ2FyZF9UZW1wbGF0ZSIsImNhcmRzIiwiY291bnRlciIsInNldENvdW50ZXIiLCJwb2tlbW9uQ2FyZCIsInNldFBva2Vtb25DYXJkIiwibmFtZSIsImRpc3BsYXlJbmRpdmlkdWFsRmxhc2hjYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZFRlbXBsYXRlIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInAiLCJjaGFuZ2VDYXJkIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Card_Template.jsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card_Template; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_CardTemplate_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/CardTemplate.module.scss */ \"(app-pages-browser)/./src/app/styles/CardTemplate.module.scss\");\n/* harmony import */ var _styles_CardTemplate_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_CardTemplate_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Card_Template(param) {\n    let { cards } = param;\n    _s();\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [pokemonCard, setPokemonCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cards[counter].name);\n    // let cardID = document.getElementById('card-id');\n    const flipCard = ()=>{\n        setPokemonCard(cards[counter].type);\n    };\n    function displayIndividualFlashcard() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: flipCard,\n            className: (_styles_CardTemplate_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cardTemplate),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"card-id\",\n                    dangerouslySetInnerHTML: {\n                        __html: pokemonCard\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"percent-understood\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n            lineNumber: 16,\n            columnNumber: 12\n        }, this);\n    // return cards.map((card, index) => {\n    //   if (index == randomCardIndex) {\n    //     return <div key={index} className={styles.cardTemplate}>\n    //       <h3 id=\"card-id\">{card.name}</h3>\n    //       <div className=\"percent-understood\">\n    //         <p>%</p>\n    //       </div>\n    //     </div>\n    //   }\n    //if statement for percentage/time\n    // })\n    }\n    const changeCard = ()=>{\n        setPokemonCard(cards[counter + 1].name);\n        if (counter < cards.length - 2) {\n            setCounter(counter + 1);\n        }\n    };\n    // TODO:\n    // - click easy/medium/hard button to update the individual card\n    // - the card's updates: % for amount understood AND scheduled time\n    // easy = 75% + 20s / medium = 50% + 15s / hard = 20% + 10s\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cards-display\",\n                children: [\n                    displayIndividualFlashcard(),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: changeCard,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"difficulty-description\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"How difficult is this card?\"\n                }, void 0, false, {\n                    fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"level-buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"easy\",\n                        children: \"Easy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"medium\",\n                        children: \"Medium\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"hard\",\n                        children: \"Hard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emmaline/Library/CloudStorage/OneDrive-BallStateUniversity/Ball State/Fall 2024/CS_311/CS311_Project2/src/app/Components/Card_Template.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Card_Template, \"Z1/28rzi+6JOAr5o3PiR38hFGso=\");\n_c = Card_Template;\nvar _c;\n$RefreshReg$(_c, \"Card_Template\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9DYXJkX1RlbXBsYXRlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV1QztBQUNnQjtBQUV4QyxTQUFTRyxjQUFjLEtBQU87UUFBUCxFQUFDQyxLQUFLLEVBQUMsR0FBUDs7SUFDcEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQ0csS0FBSyxDQUFDQyxRQUFRLENBQUNJLElBQUk7SUFDbEUsbURBQW1EO0lBRW5ELE1BQU1DLFdBQVc7UUFDZkYsZUFBZUosS0FBSyxDQUFDQyxRQUFRLENBQUNNLElBQUk7SUFDcEM7SUFFQSxTQUFTQztRQUNQLHFCQUFPLDhEQUFDQztZQUFJQyxTQUFTSjtZQUFVSyxXQUFXYixzRkFBbUI7OzhCQUMzRCw4REFBQ1c7b0JBQUlJLElBQUc7b0JBQVVDLHlCQUF5Qjt3QkFBRUMsUUFBUVo7b0JBQVk7Ozs7Ozs4QkFDakUsOERBQUNNO29CQUFJRSxXQUFVOzhCQUNiLDRFQUFDSztrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJUCxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLCtEQUErRDtJQUMvRCwwQ0FBMEM7SUFDMUMsNkNBQTZDO0lBQzdDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLE1BQU07SUFDSixrQ0FBa0M7SUFFcEMsS0FBSztJQUNQO0lBRUEsTUFBTUMsYUFBYTtRQUNqQmIsZUFBZUosS0FBSyxDQUFDQyxVQUFRLEVBQUUsQ0FBQ0ksSUFBSTtRQUVwQyxJQUFJSixVQUFXRCxNQUFNa0IsTUFBTSxHQUFDLEdBQUk7WUFDOUJoQixXQUFXRCxVQUFRO1FBQ3JCO0lBQ0Y7SUFFQSxRQUFRO0lBQ1IsZ0VBQWdFO0lBQ2hFLG1FQUFtRTtJQUNuRSwyREFBMkQ7SUFFM0QscUJBQ0UsOERBQUNrQjs7MEJBQ0MsOERBQUNWO2dCQUFJRSxXQUFVOztvQkFDWkg7a0NBQ0QsOERBQUNZO3dCQUFPVixTQUFTTztrQ0FBWTs7Ozs7Ozs7Ozs7OzBCQUUvQiw4REFBQ1I7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNLOzhCQUFFOzs7Ozs7Ozs7OzswQkFFTCw4REFBQ1A7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDUzt3QkFBT1QsV0FBVTtrQ0FBTzs7Ozs7O2tDQUN6Qiw4REFBQ1M7d0JBQU9ULFdBQVU7a0NBQVM7Ozs7OztrQ0FDM0IsOERBQUNTO3dCQUFPVCxXQUFVO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakM7R0E1RHdCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbXBvbmVudHMvQ2FyZF9UZW1wbGF0ZS5qc3g/ZmRjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DYXJkVGVtcGxhdGUubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRfVGVtcGxhdGUoe2NhcmRzfSkge1xuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbcG9rZW1vbkNhcmQsIHNldFBva2Vtb25DYXJkXSA9IHVzZVN0YXRlKGNhcmRzW2NvdW50ZXJdLm5hbWUpXG4gIC8vIGxldCBjYXJkSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1pZCcpO1xuXG4gIGNvbnN0IGZsaXBDYXJkID0gKCkgPT4ge1xuICAgIHNldFBva2Vtb25DYXJkKGNhcmRzW2NvdW50ZXJdLnR5cGUpXG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5SW5kaXZpZHVhbEZsYXNoY2FyZCgpIHtcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXtmbGlwQ2FyZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRlbXBsYXRlfT5cbiAgICAgIDxkaXYgaWQ9XCJjYXJkLWlkXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb2tlbW9uQ2FyZCB9fT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyY2VudC11bmRlcnN0b29kXCI+XG4gICAgICAgIDxwPiU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIC8vIHJldHVybiBjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgLy8gICBpZiAoaW5kZXggPT0gcmFuZG9tQ2FyZEluZGV4KSB7XG4gICAgLy8gICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUZW1wbGF0ZX0+XG4gICAgLy8gICAgICAgPGgzIGlkPVwiY2FyZC1pZFwiPntjYXJkLm5hbWV9PC9oMz5cbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmNlbnQtdW5kZXJzdG9vZFwiPlxuICAgIC8vICAgICAgICAgPHA+JTwvcD5cbiAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICB9XG4gICAgICAvL2lmIHN0YXRlbWVudCBmb3IgcGVyY2VudGFnZS90aW1lXG5cbiAgICAvLyB9KVxuICB9XG5cbiAgY29uc3QgY2hhbmdlQ2FyZCA9ICgpID0+IHtcbiAgICBzZXRQb2tlbW9uQ2FyZChjYXJkc1tjb3VudGVyKzFdLm5hbWUpXG5cbiAgICBpZiAoY291bnRlciA8IChjYXJkcy5sZW5ndGgtMikpIHtcbiAgICAgIHNldENvdW50ZXIoY291bnRlcisxKVxuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE86XG4gIC8vIC0gY2xpY2sgZWFzeS9tZWRpdW0vaGFyZCBidXR0b24gdG8gdXBkYXRlIHRoZSBpbmRpdmlkdWFsIGNhcmRcbiAgLy8gLSB0aGUgY2FyZCdzIHVwZGF0ZXM6ICUgZm9yIGFtb3VudCB1bmRlcnN0b29kIEFORCBzY2hlZHVsZWQgdGltZVxuICAvLyBlYXN5ID0gNzUlICsgMjBzIC8gbWVkaXVtID0gNTAlICsgMTVzIC8gaGFyZCA9IDIwJSArIDEwc1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZHMtZGlzcGxheSc+XG4gICAgICAgIHtkaXNwbGF5SW5kaXZpZHVhbEZsYXNoY2FyZCgpfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NoYW5nZUNhcmR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpZmZpY3VsdHktZGVzY3JpcHRpb24nPlxuICAgICAgICA8cD5Ib3cgZGlmZmljdWx0IGlzIHRoaXMgY2FyZD88L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZXZlbC1idXR0b25zJz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Vhc3knPkVhc3k8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J21lZGl1bSc+TWVkaXVtPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdoYXJkJz5IYXJkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJDYXJkX1RlbXBsYXRlIiwiY2FyZHMiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInBva2Vtb25DYXJkIiwic2V0UG9rZW1vbkNhcmQiLCJuYW1lIiwiZmxpcENhcmQiLCJ0eXBlIiwiZGlzcGxheUluZGl2aWR1YWxGbGFzaGNhcmQiLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiY2FyZFRlbXBsYXRlIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInAiLCJjaGFuZ2VDYXJkIiwibGVuZ3RoIiwibWFpbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Card_Template.jsx\n"));

/***/ })

});
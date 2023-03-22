/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Formio"));
	else if(typeof define === 'function' && define.amd)
		define(["Formio"], factory);
	else if(typeof exports === 'object')
		exports["FormioContrib"] = factory(require("Formio"));
	else
		root["FormioContrib"] = factory(root["Formio"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_formiojs__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/components/CheckMatrix/CheckMatrix.form.js":
/*!********************************************************!*\
  !*** ./lib/components/CheckMatrix/CheckMatrix.form.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nconst nestedComponentForm = formiojs_1.Components.components.nested.editForm;\nconst CheckMatrix_edit_display_1 = __webpack_require__(/*! ./editForm/CheckMatrix.edit.display */ \"./lib/components/CheckMatrix/editForm/CheckMatrix.edit.display.js\");\nfunction default_1(...extend) {\n    return nestedComponentForm([\n        {\n            key: 'display',\n            components: CheckMatrix_edit_display_1.default\n        }\n    ], ...extend);\n}\nexports[\"default\"] = default_1;\n\n\n//# sourceURL=webpack://FormioContrib/./lib/components/CheckMatrix/CheckMatrix.form.js?");

/***/ }),

/***/ "./lib/components/CheckMatrix/CheckMatrix.js":
/*!***************************************************!*\
  !*** ./lib/components/CheckMatrix/CheckMatrix.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * This file shows how to create a custom component.\n *\n * Get the base component class by referencing Formio.Components.components map.\n */\nconst formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nconst FieldComponent = formiojs_1.Components.components.field;\nconst CheckMatrix_form_1 = __webpack_require__(/*! ./CheckMatrix.form */ \"./lib/components/CheckMatrix/CheckMatrix.form.js\");\n/**\n * Here we will derive from the base component which all Form.io form components derive from.\n *\n * @param component\n * @param options\n * @param data\n * @constructor\n */\nclass CheckMatrix extends FieldComponent {\n    constructor(component, options, data) {\n        super(component, options, data);\n        this.checks = [];\n    }\n    static schema() {\n        return FieldComponent.schema({\n            type: 'checkmatrix',\n            numRows: 3,\n            numCols: 3\n        });\n    }\n    get tableClass() {\n        let tableClass = 'table ';\n        ['striped', 'bordered', 'hover', 'condensed'].forEach((prop) => {\n            if (this.component[prop]) {\n                tableClass += `table-${prop} `;\n            }\n        });\n        return tableClass;\n    }\n    get emptyValue() {\n        return [];\n    }\n    render() {\n        return super.render(this.renderTemplate('checkmatrix', {\n            tableClass: this.tableClass\n        }));\n    }\n    refKey(i, j) {\n        return `${this.component.key}-${i}-${j}`;\n    }\n    /**\n     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific\n     * elements to attach functionality to.\n     *\n     * @param element\n     * @returns {Promise}\n     */\n    attach(element) {\n        const refs = {};\n        // Iterate through all cells and add refs.\n        for (let i = 0; i < this.component.numRows; i++) {\n            for (let j = 0; j < this.component.numCols; j++) {\n                refs[this.refKey(i, j)] = 'single';\n            }\n        }\n        // Load the references.\n        this.loadRefs(element, refs);\n        // Re-iterate through the refs and add event listeners.\n        for (let i = 0; i < this.component.numRows; i++) {\n            for (let j = 0; j < this.component.numCols; j++) {\n                this.addEventListener(this.refs[this.refKey(i, j)], 'click', () => this.updateValue());\n            }\n        }\n        // Allow basic component functionality to attach like field logic and tooltips.\n        return super.attach(element);\n    }\n    /**\n     * Get the value of the component from the dom elements.\n     *\n     * @returns {Array}\n     */\n    getValue() {\n        const value = [];\n        for (let i = 0; i < this.component.numRows; i++) {\n            value[i] = [];\n            for (let j = 0; j < this.component.numCols; j++) {\n                if (this.refs.hasOwnProperty(this.refKey(i, j))) {\n                    value[i][j] = !!this.refs[this.refKey(i, j)].checked;\n                }\n            }\n        }\n        return value;\n    }\n    /**\n     * Set the value of the component into the dom elements.\n     *\n     * @param value\n     * @returns {boolean}\n     */\n    setValue(value) {\n        if (!value) {\n            return;\n        }\n        for (let i = 0; i < this.component.numRows; i++) {\n            for (let j = 0; j < this.component.numCols; j++) {\n                if (value.length > i &&\n                    value[i].length > j &&\n                    this.refs.hasOwnProperty(this.refKey(i, j))) {\n                    const ref = this.refs[this.refKey(i, j)];\n                    const checked = value[i][j] ? 1 : 0;\n                    ref.value = checked;\n                    ref.checked = checked;\n                }\n            }\n        }\n    }\n}\nCheckMatrix.editForm = CheckMatrix_form_1.default;\nCheckMatrix.builderInfo = {\n    title: 'Check Matrix',\n    group: 'basic',\n    icon: 'fa fa-table',\n    weight: 70,\n    documentation: 'http://help.form.io/userguide/#table',\n    schema: CheckMatrix.schema()\n};\nexports[\"default\"] = CheckMatrix;\n\n\n//# sourceURL=webpack://FormioContrib/./lib/components/CheckMatrix/CheckMatrix.js?");

/***/ }),

/***/ "./lib/components/CheckMatrix/editForm/CheckMatrix.edit.display.js":
/*!*************************************************************************!*\
  !*** ./lib/components/CheckMatrix/editForm/CheckMatrix.edit.display.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = [\n    {\n        key: 'labelPosition',\n        ignore: true\n    },\n    {\n        key: 'placeholder',\n        ignore: true\n    },\n    {\n        key: 'description',\n        ignore: true\n    },\n    {\n        key: 'hideLabel',\n        ignore: true\n    },\n    {\n        key: 'autofocus',\n        ignore: true\n    },\n    {\n        key: 'tooltip',\n        ignore: true\n    },\n    {\n        key: 'tabindex',\n        ignore: true\n    },\n    {\n        key: 'disabled',\n        ignore: true\n    },\n    {\n        type: 'number',\n        label: 'Number of Rows',\n        key: 'numRows',\n        input: true,\n        weight: 1,\n        placeholder: 'Number of Rows',\n        tooltip: 'Enter the number or rows that should be displayed by this table.'\n    },\n    {\n        type: 'number',\n        label: 'Number of Columns',\n        key: 'numCols',\n        input: true,\n        weight: 2,\n        placeholder: 'Number of Columns',\n        tooltip: 'Enter the number or columns that should be displayed by this table.'\n    },\n    {\n        type: 'checkbox',\n        label: 'Clone Row Components',\n        key: 'cloneRows',\n        input: true,\n        weight: 3,\n        tooltip: 'Check this if you would like to \"clone\" the first row of components to all additional empty rows of the table.'\n    },\n    {\n        type: 'select',\n        label: 'Cell Alignment',\n        key: 'cellAlignment',\n        input: true,\n        tooltip: 'Horizontal alignment for cells of the table.',\n        dataSrc: 'values',\n        data: {\n            values: [\n                { label: 'Left', value: 'left' },\n                { label: 'Center', value: 'center' },\n                { label: 'Right', value: 'right' }\n            ]\n        },\n        defaultValue: 'left',\n        weight: 3\n    },\n    {\n        type: 'checkbox',\n        label: 'Striped',\n        key: 'striped',\n        tooltip: 'This will stripe the table if checked.',\n        input: true,\n        weight: 701\n    },\n    {\n        type: 'checkbox',\n        label: 'Bordered',\n        key: 'bordered',\n        input: true,\n        tooltip: 'This will border the table if checked.',\n        weight: 702\n    },\n    {\n        type: 'checkbox',\n        label: 'Hover',\n        key: 'hover',\n        input: true,\n        tooltip: 'Highlight a row on hover.',\n        weight: 703\n    },\n    {\n        type: 'checkbox',\n        label: 'Condensed',\n        key: 'condensed',\n        input: true,\n        tooltip: 'Condense the size of the table.',\n        weight: 704\n    },\n];\n\n\n//# sourceURL=webpack://FormioContrib/./lib/components/CheckMatrix/editForm/CheckMatrix.edit.display.js?");

/***/ }),

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst CheckMatrix_1 = __webpack_require__(/*! ./CheckMatrix/CheckMatrix */ \"./lib/components/CheckMatrix/CheckMatrix.js\");\nexports[\"default\"] = {\n    checkmatrix: CheckMatrix_1.default\n};\n\n\n//# sourceURL=webpack://FormioContrib/./lib/components/index.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst components_1 = __webpack_require__(/*! ./components */ \"./lib/components/index.js\");\nconst templates_1 = __webpack_require__(/*! ./templates */ \"./lib/templates/index.js\");\nexports[\"default\"] = {\n    components: components_1.default,\n    templates: templates_1.default\n};\n\n\n//# sourceURL=webpack://FormioContrib/./lib/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkmatrix/form.ejs.js":
/*!*********************************************************!*\
  !*** ./lib/templates/bootstrap/checkmatrix/form.ejs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"]=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<table class=\"' +\n((__t = ( ctx.tableClass )) == null ? '' : __t) +\n'\">\\n    <tbody>\\n        ';\n for (let i = 0; i < ctx.component.numRows; i++) { ;\n__p += '\\n            <tr>\\n                ';\n for (let j = 0; j < ctx.component.numCols; j++) { ;\n__p += '\\n                    <td>\\n                        <div class=\"form-check\">\\n                            <input ref=\"' +\n((__t = ( ctx.component.key )) == null ? '' : __t) +\n'-' +\n((__t = ( i )) == null ? '' : __t) +\n'-' +\n((__t = ( j )) == null ? '' : __t) +\n'\" class=\"form-check-input\" type=\"checkbox\">\\n                        </div>\\n                    </td>\\n                ';\n } ;\n__p += '\\n            </tr>\\n        ';\n } ;\n__p += '\\n    </tbody>\\n</table>\\n';\nreturn __p\n}\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/checkmatrix/form.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/checkmatrix/index.js":
/*!******************************************************!*\
  !*** ./lib/templates/bootstrap/checkmatrix/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst form_ejs_1 = __webpack_require__(/*! ./form.ejs */ \"./lib/templates/bootstrap/checkmatrix/form.ejs.js\");\nexports[\"default\"] = { form: form_ejs_1.default };\n\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/checkmatrix/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/index.js":
/*!******************************************!*\
  !*** ./lib/templates/bootstrap/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst checkmatrix_1 = __webpack_require__(/*! ./checkmatrix */ \"./lib/templates/bootstrap/checkmatrix/index.js\");\nexports[\"default\"] = {\n    checkmatrix: checkmatrix_1.default\n};\n\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/bootstrap/index.js?");

/***/ }),

/***/ "./lib/templates/index.js":
/*!********************************!*\
  !*** ./lib/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst bootstrap_1 = __webpack_require__(/*! ./bootstrap */ \"./lib/templates/bootstrap/index.js\");\nexports[\"default\"] = {\n    bootstrap: bootstrap_1.default,\n};\n\n\n//# sourceURL=webpack://FormioContrib/./lib/templates/index.js?");

/***/ }),

/***/ "formiojs":
/*!*************************!*\
  !*** external "Formio" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_formiojs__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
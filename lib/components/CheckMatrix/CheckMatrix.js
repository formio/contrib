var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * This file shows how to create a custom component and register that within an Angular application.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
var FieldComponent = Components.components.field;
import editForm from './CheckMatrix.form';
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
var CheckMatrix = /** @class */ (function (_super) {
    __extends(CheckMatrix, _super);
    function CheckMatrix(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.checks = [];
        return _this;
    }
    CheckMatrix.schema = function () {
        return FieldComponent.schema({
            type: 'checkmatrix',
            numRows: 3,
            numCols: 3
        });
    };
    Object.defineProperty(CheckMatrix.prototype, "tableClass", {
        get: function () {
            var _this = this;
            var tableClass = 'table ';
            ['striped', 'bordered', 'hover', 'condensed'].forEach(function (prop) {
                if (_this.component[prop]) {
                    tableClass += "table-" + prop + " ";
                }
            });
            return tableClass;
        },
        enumerable: true,
        configurable: true
    });
    CheckMatrix.prototype.renderCell = function (row, col) {
        return this.renderTemplate('input', {
            input: {
                type: 'input',
                ref: this.component.key + "-" + row,
                attr: {
                    id: this.component.key + "-" + row + "-" + col,
                    class: 'form-control',
                    type: 'checkbox',
                }
            }
        });
    };
    CheckMatrix.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate('checkmatrix', {
            tableClass: this.tableClass,
            renderCell: this.renderCell.bind(this)
        }));
    };
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    CheckMatrix.prototype.attach = function (element) {
        var _this = this;
        var refs = {};
        for (var i = 0; i < this.component.numRows; i++) {
            refs[this.component.key + "-" + i] = 'multiple';
        }
        this.loadRefs(element, refs);
        this.checks = [];
        for (var i = 0; i < this.component.numRows; i++) {
            this.checks[i] = Array.prototype.slice.call(this.refs[this.component.key + "-" + i], 0);
            // Attach click events to each input in the row
            this.checks[i].forEach(function (input) {
                _this.addEventListener(input, 'click', function () { return _this.updateValue(); });
            });
        }
        // Allow basic component functionality to attach like field logic and tooltips.
        return _super.prototype.attach.call(this, element);
    };
    /**
     * Get the value of the component from the dom elements.
     *
     * @returns {Array}
     */
    CheckMatrix.prototype.getValue = function () {
        var value = [];
        for (var rowIndex in this.checks) {
            var row = this.checks[rowIndex];
            value[rowIndex] = [];
            for (var colIndex in row) {
                var col = row[colIndex];
                value[rowIndex][colIndex] = !!col.checked;
            }
        }
        return value;
    };
    /**
     * Set the value of the component into the dom elements.
     *
     * @param value
     * @returns {boolean}
     */
    CheckMatrix.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        for (var rowIndex in this.checks) {
            var row = this.checks[rowIndex];
            if (!value[rowIndex]) {
                break;
            }
            for (var colIndex in row) {
                var col = row[colIndex];
                if (!value[rowIndex][colIndex]) {
                    return false;
                }
                var checked = value[rowIndex][colIndex] ? 1 : 0;
                col.value = checked;
                col.checked = checked;
            }
        }
    };
    CheckMatrix.editForm = editForm;
    CheckMatrix.builderInfo = {
        title: 'Check Matrix',
        group: 'basic',
        icon: 'fa fa-table',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#table',
        schema: CheckMatrix.schema()
    };
    return CheckMatrix;
}(FieldComponent));
export default CheckMatrix;

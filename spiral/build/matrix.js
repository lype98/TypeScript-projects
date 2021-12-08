"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Matrix = void 0;
var Matrix = /** @class */ (function () {
    function Matrix(collumn, row) {
        this.collumn = collumn;
        this.row = row;
        this.results = [];
        this.lastCol = this.collumn - 1;
        this.lastRow = this.row - 1;
        this.firstCol = 0;
        this.firstRow = 0;
        this.currentCol = -1; // start out of bounds to allow first print to be equal to the others
        this.currentRow = 0;
        this.currentNumber = 1;
        this.currentDir = 0;
        this.matrixBlank(collumn, row);
        this.run();
        this.read(this.results);
    }
    Matrix.prototype.matrixBlank = function (collumn, row) {
        for (var i = 0; i < row; i++) {
            this.results.push([]);
        }
        ;
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var array = _a[_i];
            for (var i = 0; i < this.collumn; i++) { // fill collumns with 0s
                array.push(0);
            }
            ;
        }
        ;
    };
    ;
    Matrix.prototype.populateIterate = function (cRow, cCol) {
        this.results[cRow][cCol] += this.currentNumber; // populate the collumns with the current number
        this.currentNumber++; // increment to next number  
    };
    Matrix.prototype.CurrentIsLessThanMatrix = function () {
        return this.currentNumber <= this.collumn * this.row;
    };
    Matrix.prototype.run = function () {
        var _this = this;
        var shrink = false;
        var currentLoop = 0;
        var current = {
            colOrRow: ['currentCol', 'currentRow', 'currentCol', 'currentRow'],
            lastColOrRow: ['lastCol', 'lastRow', 'firstCol', 'firstRow'],
            shrink: [['lastRow', -1], ['firstCol', 1], ['firstRow', 1], ['lastCol', -1]]
        };
        var printDirection = function (direction, shrink) {
            var matrixColOrRow = current.colOrRow[_this.currentDir];
            var lastMatrixColOrRow = current.lastColOrRow[_this.currentDir];
            var shrinkFunc = function (direction) {
                if (direction === 0)
                    _this.lastRow--;
                else if (direction === 1)
                    _this.firstCol++;
                else if (direction === 2)
                    _this.firstRow++;
                else if (direction === 3)
                    _this.lastCol--;
            };
            if (direction === 0 || direction === 1) { // if direction is Right or Down
                for (_this[matrixColOrRow]++; _this[current.colOrRow[_this.currentDir]] <= _this[lastMatrixColOrRow]; _this[current.colOrRow[_this.currentDir]]++) { // move one and iterate currentCol till last Collumn  
                    _this.populateIterate(_this.currentRow, _this.currentCol); // populate the collumns with the current number + increment currentNumber
                }
                ;
                _this[current.colOrRow[_this.currentDir]]--; // move back to last inbounds collumn
            }
            if (direction === 2 || direction === 3) { // if direction is Left or Up
                for (_this[current.colOrRow[_this.currentDir]]--; _this[current.colOrRow[_this.currentDir]] >= _this[lastMatrixColOrRow]; _this[current.colOrRow[_this.currentDir]]--) { // move one and iterate currentCol till last Collumn  
                    _this.populateIterate(_this.currentRow, _this.currentCol); // populate the collumns with the current number + increment currentNumber
                }
                ;
                _this[current.colOrRow[_this.currentDir]]++; // move back to last inbounds collumn        
            }
            if (shrink)
                shrinkFunc(direction);
        };
        while (this.CurrentIsLessThanMatrix()) {
            if (this.currentDir === 4)
                this.currentDir = 0; // reset direction to R after it reaches U
            if (currentLoop === 2) { // start shrinking after the second loop
                shrink = true;
            }
            printDirection(this.currentDir, shrink);
            this.currentDir++;
            currentLoop++;
        }
    };
    ;
    Matrix.prototype.read = function (matrix) {
        var matrixC = matrix.map(function (arr) { return arr.slice(); }); // copy the matrix
        var results = [];
        while (results.length < this.collumn * this.row) {
            results.push.apply(results, __spreadArray(__spreadArray(__spreadArray(__spreadArray([], matrixC.shift(), false), matrixC.map(function (array) { return array.pop(); }), false), (matrixC.pop() || []).reverse(), false), matrixC.map(function (array) { return array.shift(); }).reverse(), false));
        }
        return results.filter(function (e) { return e !== undefined; }); // remove undefined
    };
    return Matrix;
}());
exports.Matrix = Matrix;
;

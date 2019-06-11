"use strict";
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
exports.__esModule = true;
var Lint = require("tslint");
var utils = require("tsutils");
var ts = require("typescript");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new CheckSeparatorStyle(sourceFile, 'block-separator', undefined));
    };
    Rule.FAILURE_STRING = 'Need next and prev empty rows (without spaces and tabs)';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var CheckSeparatorStyle = /** @class */ (function (_super) {
    __extends(CheckSeparatorStyle, _super);
    function CheckSeparatorStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckSeparatorStyle.prototype.walk = function (sourceFile) {
        var _this = this;
        utils.forEachComment(sourceFile, function (fulltext, _a) {
            var pos = _a.pos, end = _a.end;
            var commentText = fulltext.slice(pos, end);
            var endPrevLine;
            var startPrevLine;
            var startNextLine;
            var endNextLine;
            var currentLine = ts.getLineAndCharacterOfPosition(sourceFile, pos)
                .line;
            if (utils.getLineRanges(sourceFile)[currentLine - 1]) {
                endPrevLine = utils.getLineRanges(sourceFile)[currentLine - 1].end;
                startPrevLine = utils.getLineRanges(sourceFile)[currentLine - 1].pos;
            }
            if (utils.getLineRanges(sourceFile)[currentLine + 1]) {
                startNextLine = utils.getLineRanges(sourceFile)[currentLine + 1].pos;
                endNextLine = utils.getLineRanges(sourceFile)[currentLine + 1].end;
            }
            if (commentText === '// ########################################') {
                if ((startPrevLine && endPrevLine !== startPrevLine + 1) ||
                    (startNextLine && endNextLine !== startNextLine + 1)) {
                    _this.addFailure(pos, end, Rule.FAILURE_STRING);
                }
            }
        });
    };
    return CheckSeparatorStyle;
}(Lint.AbstractWalker));

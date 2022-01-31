"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Button = exports.Greeter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Greeter = function (name) { return "Hello ".concat(name); };
exports.Greeter = Greeter;
var StyledButton = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 5px 10px;\n  background: ", ";\n  color: white;\n"], ["\n  padding: 5px 10px;\n  background: ", ";\n  color: white;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme === null || theme === void 0 ? void 0 : theme.primaryColor) || 'black';
});
var Button = function (_a) {
    var title = _a.title, onClick = _a.onClick;
    var _b = (0, react_1.useState)(1), counter = _b[0], setCounter = _b[1];
    return ((0, jsx_runtime_1.jsxs)(StyledButton, __assign({ onClick: function (event) {
            setCounter(function (prev) { return prev + 1; });
            onClick(event);
        } }, { children: [title, " ", counter] }), void 0));
};
exports.Button = Button;
var templateObject_1;

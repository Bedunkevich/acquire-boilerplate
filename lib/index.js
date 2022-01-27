"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.Greeter = void 0;
var React = require("react");
var Greeter = function (name) { return "Hello ".concat(name); };
exports.Greeter = Greeter;
var Button = function (_a) {
    var title = _a.title, onClick = _a.onClick;
    var _b = React.useState(1), counter = _b[0], setCounter = _b[1];
    return (React.createElement("button", { onClick: function (event) {
            setCounter(function (prev) { return prev + 1; });
            onClick(event);
        } },
        title,
        " ",
        counter));
};
exports.Button = Button;

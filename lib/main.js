"use strict";

var _impuesto = _interopRequireDefault(require("./impuesto"));

var _cliente = _interopRequireDefault(require("./cliente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _impuesto["default"](1000, 200);
var cliente1 = new _cliente["default"]('Ernesto', impuesto1);
cliente1.calcularImpuesto();
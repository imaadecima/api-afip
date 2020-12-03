"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Query = {
  getAliquotTypes: function () {
    var _getAliquotTypes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, _ref, info) {
      var afip, getAliquotTypes;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              afip = _ref.afip;
              _context.next = 3;
              return afip.ElectronicBilling.getAliquotTypes();

            case 3:
              getAliquotTypes = _context.sent;
              return _context.abrupt("return", getAliquotTypes);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getAliquotTypes(_x, _x2, _x3, _x4) {
      return _getAliquotTypes.apply(this, arguments);
    }

    return getAliquotTypes;
  }()
};
var _default = Query;
exports["default"] = _default;
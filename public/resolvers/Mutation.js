"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Mutation = {
  signUp: function () {
    var _signUp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, _ref, _ref2, info) {
      var data, conn;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _ref.data;
              conn = _ref2.conn;
              return _context.abrupt("return", 'Login');

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function signUp(_x, _x2, _x3, _x4) {
      return _signUp.apply(this, arguments);
    }

    return signUp;
  }()
};
var _default = Mutation;
exports["default"] = _default;
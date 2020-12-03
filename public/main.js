"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _afip = _interopRequireDefault(require("@afipsdk/afip.js"));

var _graphqlYoga = require("graphql-yoga");

var _Query = _interopRequireDefault(require("./resolvers/Query"));

var _Mutation = _interopRequireDefault(require("./resolvers/Mutation"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var afip = new _afip["default"]({
  CUIT: 20373365808
}); //Resolver

var resolvers = {
  Query: _Query["default"],
  Mutation: _Mutation["default"]
};
var _context = {
  afip: afip
};
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers,
  context: function context(request) {
    return _objectSpread(_objectSpread({}, request), _context);
  }
});
server.start(function () {
  return console.log('Server is running');
});
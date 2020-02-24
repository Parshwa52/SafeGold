'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _SafeGold = require('./build/SafeGold.json');

var _SafeGold2 = _interopRequireDefault(_SafeGold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_SafeGold2.default.interface), '0xBbdffd14AAC7ac2d99979Cb7132Be92e3446dC52');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxzYWZlZ29sZDEuanMiXSwibmFtZXMiOlsid2ViMyIsInNhZmVnb2xkIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsbUJBQVMsQUFBcEIsQUFEZSxZQUNpQixBQURqQixBQUFqQixBQUdBOztrQkFBZSxBQUFmIiwiZmlsZSI6InNhZmVnb2xkMS5qcyIsInNvdXJjZVJvb3QiOiJGOi9Qcm9qZWN0Ni9TYWZlR29sZCJ9
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSelectCountryList = require('react-select-country-list');

var _reactSelectCountryList2 = _interopRequireDefault(_reactSelectCountryList);

var _reactCountryRegionSelector = require('react-country-region-selector');

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _semanticUiCalendarReact = require('semantic-ui-calendar-react');

var _safegold = require('../ethereum/safegold1');

var _safegold2 = _interopRequireDefault(_safegold);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project6\\SafeGold\\pages\\Verifier.js?entry';
//import Select from 'react-select';ncncnncncnc


var Verify = function (_Component) {
  (0, _inherits3.default)(Verify, _Component);

  function Verify(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Verify);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Verify.__proto__ || (0, _getPrototypeOf2.default)(Verify)).call(this, props));

    _this.handleClose = function () {
      _this.setState({ modalOpen: false });
    };

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var perm, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                perm = void 0;
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _safegold2.default.methods.checkpermit(_this.state.id.toString()).call({
                  from: accounts[0]
                });

              case 8:
                perm = _context.sent;

                if (perm == "true") {
                  _this.setState({
                    modalOpen: true,
                    text2: "Congrats!",
                    text1: "Buy it, Its trusted gold.",
                    iconname: 'thumbs up'
                  });
                } else {
                  _this.setState({
                    modalOpen: true,
                    text2: "Beware!",
                    text1: "Buy at your own risk, Its not trusted",
                    iconname: 'ban'
                  });
                }

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](2);

                console.log(_context.t0);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleChange = function (event, _ref2) {
      var name = _ref2.name,
          value = _ref2.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.state = {
      id: '',
      text1: '',
      text2: '',
      modalOpen: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Verify, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'blue', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, ' ', _react2.default.createElement('font', { color: 'white', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'User\'s Portal'), ' '), ' ', _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { attached: true, header: 'Welcome User!',
        content: 'Check whether you are buying trusted or smuggled gold.',
        icon: 'searchengin',
        color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, '1. You may be retailer,distributor or even a normal user')), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, '2. Verify whether the gold you are buying is smuggled or not.')), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, '3. If you purchase smugggled gold, that gold won\'t have any value and eventually no one will buy it.')), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, '4. So, Verify your gold here and then buy it.')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Manufacture Id',
        fluid: true, ref: function ref(input) {
          _this3.id = input;
        },
        value: this.state.id,
        onChange: function onChange(event) {
          return _this3.setState({
            id: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), ' '), _react2.default.createElement(_semanticUiReact.Modal, {
        trigger: _react2.default.createElement(_semanticUiReact.Button, {
          disabled: this.state.id == '',
          primary: true, onClick: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, ' Verify '),
        open: this.state.modalOpen,
        onClose: this.handleClose,
        basic: true,
        size: 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { icon: this.state.iconname, content: this.state.text2, __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, this.state.text1)), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.handleClose, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'checkmark', __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }), ' Got it')))), ' '), ' '), ' ');
    }
  }]);

  return Verify;
}(_react.Component);

exports.default = Verify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxWZXJpZmllci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiY291bnRyeUxpc3QiLCJDb3VudHJ5RHJvcGRvd24iLCJSZWdpb25Ecm9wZG93biIsIkNvdW50cnlSZWdpb25EYXRhIiwiY3J5cHQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJEcm9wZG93biIsIk1vZGFsIiwiSWNvbiIsIkhlYWRlciIsIk1lbnUiLCJSYWRpbyIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiQ2hlY2tib3giLCJDb25maXJtIiwiRGF0ZUlucHV0Iiwic2FmZWdvbGQiLCJ3ZWIzIiwiVmVyaWZ5IiwicHJvcHMiLCJoYW5kbGVDbG9zZSIsInNldFN0YXRlIiwibW9kYWxPcGVuIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBlcm0iLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNoZWNrcGVybWl0Iiwic3RhdGUiLCJpZCIsInRvU3RyaW5nIiwiY2FsbCIsImZyb20iLCJ0ZXh0MiIsInRleHQxIiwiaWNvbm5hbWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJiaW5kIiwiaW5wdXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUNMOzs7O0FBRUYsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWlCLEFBQWdCOztBQUMxQyxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFDRTs7QUFFRixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7O0FB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LHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQWpCZCxBQWdCRSxBQUNFLEFBQWdCLEFBRWxCLHlCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxTQUFTLEtBQS9CLEFBQW9DLGFBQWEsVUFBakQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQURGLEFBQ0U7QUFBQTtVQTNEK0MsQUFRckQsQUE4QkEsQUFtQkUsQUFDRSxlQTdESixBQUdxRCxNQUw5QyxBQUVQLE1BRkYsQUFBUyxBQTRFVjs7Ozs7QUFoSmlDLEE7O2tCQUFmLEEiLCJmaWxlIjoiVmVyaWZpZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovUHJvamVjdDYvU2FmZUdvbGQifQ==
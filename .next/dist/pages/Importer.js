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

var _jsxFileName = 'F:\\Project6\\SafeGold\\pages\\Importer.js?entry';
//import Select from 'react-select';


var Importing = function (_Component) {
  (0, _inherits3.default)(Importing, _Component);

  function Importing(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Importing);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Importing.__proto__ || (0, _getPrototypeOf2.default)(Importing)).call(this, props));

    _this.handleClose = function () {
      _this.setState({ modalOpen: false });
      if (_this.state.give == true) {
        _this.setState({ open: true });
      }
    };

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var reacth, quantity, reacth1, test, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                if (_this.state.quant.match(/^(0|[1-9][0-9]*)$/)) {
                  _context.next = 6;
                  break;
                }

                //alert("Quantity should be numeric");
                _this.setState({
                  loading: false,
                  modalOpen: true,
                  text2: "Error in Details",
                  text1: "Quantity should be numeric",
                  give: false
                });
                _this.quant.focus();
                _context.next = 32;
                break;

              case 6:
                //alert("else me gaya");
                reacth = void 0;
                quantity = void 0;
                reacth1 = void 0;
                test = void 0;
                _context.prev = 10;

                //alert("in else");
                test = (_this.state.id + _this.state.toc + _this.state.fromc + _this.state.expl + _this.state.quant).toString();
                test = test.toLowerCase();
                console.log(test);
                reacth1 = _cryptoJs2.default.SHA256(test).toString();
                console.log(reacth1);
                _context.next = 18;
                return _web2.default.eth.getAccounts();

              case 18:
                accounts = _context.sent;
                _context.next = 21;
                return _safegold2.default.methods.getgolddet(_this.state.id.toString()).call({
                  from: accounts[0]
                });

              case 21:
                reacth = _context.sent;
                _context.next = 24;
                return _safegold2.default.methods.getgoldquant(_this.state.id.toString()).call({
                  from: accounts[0]
                });

              case 24:
                quantity = _context.sent;

                _this.setState({
                  loading: false
                });
                if (_this.state.quant.toString() != quantity) {
                  _this.setState({
                    modalOpen: true,
                    text2: "Mismatch in Quantity",
                    text1: "Alert!Some Gold may have been smuggled",
                    give: false
                  });
                } else if (reacth != reacth1) {
                  _this.setState({
                    modalOpen: true,
                    text2: "Error in Details",
                    text1: "Your details do not match with that of Exporter.Alert!Check for smuggling",
                    give: false
                  });
                } else {
                  _this.setState({
                    modalOpen: true,
                    text2: "Successfull Validation",
                    text1: "The details are successfully verified.Give permit for trade",
                    give: true
                  });
                }
                _context.next = 32;
                break;

              case 29:
                _context.prev = 29;
                _context.t0 = _context['catch'](10);

                _this.setState({
                  loading: false,
                  open: false
                });

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[10, 29]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleCancel = function () {
      return _this.setState({
        open: false,
        loading: false
      });
    };

    _this.handleconf = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this.setState({
                  open: false
                });
                //console.log(parseInt(this.state.quant)+10);
                //console.log(this.state.id + this.state.toc + this.state.fromc + this.state.expl+this.state.quant+this.state.billamt+this.state.defcheck);
                _context2.prev = 2;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return _safegold2.default.methods.givepermit(_this.state.id.toString(), _this.state.toc.toString(), _this.state.fromc.toString(), _this.state.impl.toString()).send({
                  from: accounts[0]
                });

              case 8:
                _this.setState({
                  loading: false,
                  id: '',
                  quant: '',
                  toc: '',
                  fromc: '',
                  expl: '',
                  impl: '',
                  defcheck: false
                });
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](2);

                _this.setState({
                  loading: false,
                  open: false
                });

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 11]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleChange = function (event, _ref3) {
      var name = _ref3.name,
          value = _ref3.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.selectCountry = function (val) {
      _this.setState({ toc: val });
    };

    _this.selectCountry2 = function (val) {
      _this.setState({ fromc: val });
    };

    _this.options = (0, _reactSelectCountryList2.default)().getData();
    _this.state = {
      id: '',
      quant: '',
      toc: '',
      fromc: '',
      expl: '',
      impl: '',
      text1: '',
      text2: '',
      options: _this.options,
      value: null,
      modalOpen: false,
      defcheck: false,
      open: false,
      give: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Importing, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'blue', __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, ' ', _react2.default.createElement('font', { color: 'white', __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, 'Importer\'s Portal'), ' '), ' ', _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { attached: true, header: 'Welcome to Importing Form!',
        content: 'Fill out the form below to verify details and import the gold.',
        icon: 'searchengin',
        color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Importer License',
        fluid: true, ref: function ref(input) {
          _this3.impl = input;
        }
        //  labelPosition=""
        , value: this.state.impl,
        onChange: function onChange(event) {
          return _this3.setState({
            impl: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), ' '), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Manufacture ID',
        fluid: true, ref: function ref(input) {
          _this3.id = input;
        }
        //  labelPosition=""
        , value: this.state.id,
        onChange: function onChange(event) {
          return _this3.setState({
            id: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }), ' '), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Quantity(in kg)',

        fluid: true, ref: function ref(input) {
          _this3.quant = input;
        }
        //labelPosition=""
        , value: this.state.quant,
        onChange: function onChange(event) {
          return _this3.setState({
            quant: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), ' ')), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, 'From:')), _react2.default.createElement(_reactCountryRegionSelector.CountryDropdown, {
        value: this.state.fromc,
        onChange: function onChange(val) {
          return _this3.selectCountry2(val);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, 'To:')), _react2.default.createElement(_reactCountryRegionSelector.CountryDropdown, {

        value: this.state.toc,
        onChange: function onChange(val) {
          return _this3.selectCountry(val);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Exporting License of Exporter',
        fluid: true, ref: function ref(input) {
          _this3.expl = input;
        },
        value: this.state.expl,
        onChange: function onChange(event) {
          return _this3.setState({
            expl: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }), ' ')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree that all the information input is correct.',
        onChange: function onChange(event) {
          return _this3.setState({
            defcheck: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }), ' '), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }), _react2.default.createElement(_semanticUiReact.Confirm, { open: this.state.open,
        cancelButton: 'Go Back',
        confirmButton: 'Give Permit to trade in the country',
        onCancel: this.handleCancel,
        onConfirm: this.handleconf,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }), _react2.default.createElement(_semanticUiReact.Modal, {
        trigger: _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading,
          disabled: this.state.id == '' || this.state.quant == '' || this.state.toc == '' || this.state.fromc == '' || this.state.expl == '' || this.state.defcheck == false || this.state.impl == '',
          primary: true, onClick: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          }
        }, ' Verify Goods'),
        open: this.state.modalOpen,
        onClose: this.handleClose,
        basic: true,
        size: 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { icon: 'browser', content: this.state.text2, __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, this.state.text1)), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.handleClose, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'checkmark', __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }), ' Got it')))), ' '), ' '), ' ');
    }
  }]);

  return Importing;
}(_react.Component);

exports.default = Importing;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxJbXBvcnRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiY291bnRyeUxpc3QiLCJDb3VudHJ5RHJvcGRvd24iLCJSZWdpb25Ecm9wZG93biIsIkNvdW50cnlSZWdpb25EYXRhIiwiY3J5cHQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJEcm9wZG93biIsIk1vZGFsIiwiSWNvbiIsIkhlYWRlciIsIk1lbnUiLCJSYWRpbyIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiQ2hlY2tib3giLCJDb25maXJtIiwiRGF0ZUlucHV0Iiwic2FmZWdvbGQiLCJ3ZWIzIiwiSW1wb3J0aW5nIiwicHJvcHMiLCJoYW5kbGVDbG9zZSIsInNldFN0YXRlIiwibW9kYWxPcGVuIiwic3RhdGUiLCJnaXZlIiwib3BlbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWFudCIsIm1hdGNoIiwibG9hZGluZyIsInRleHQyIiwidGV4dDEiLCJmb2N1cyIsInJlYWN0aCIsInF1YW50aXR5IiwicmVhY3RoMSIsInRlc3QiLCJpZCIsInRvYyIsImZyb21jIiwiZXhwbCIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiU0hBMjU2IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRnb2xkZGV0IiwiY2FsbCIsImZyb20iLCJnZXRnb2xkcXVhbnQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVjb25mIiwiZ2l2ZXBlcm1pdCIsImltcGwiLCJzZW5kIiwiZGVmY2hlY2siLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsInNlbGVjdENvdW50cnkiLCJ2YWwiLCJzZWxlY3RDb3VudHJ5MiIsIm9wdGlvbnMiLCJnZXREYXRhIiwiYmluZCIsImlucHV0IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QUFLO3NCQUFkLEFBQVMsQUFBYyxBQUNYO0FBRFcsQUFDckIsV0FETztBQUhYOztvQkFBQTtzQkFEQSxBQUNBO0FBQUE7VUE1R0EsQUEyR0EsTUFTYTs7b0JBQUE7c0JBcEhiLEFBb0hhLEFBR1o7QUFIWTtBQUFBLDBCQUdaLEFBQ0QsMENBQVEsTUFDTixLQUFBLEFBQUssTUFGTixBQUVZLEFBRWI7c0JBSkMsQUFJYyxBQUNmO3VCQUxDLEFBS2UsQUFDaEI7a0JBQ0UsS0FQRCxBQU9NLEFBRVA7bUJBQ0UsS0FWRCxBQVVNOztvQkFWTjtzQkF2SEQsQUF1SEMsQUFhRDtBQWJDOzBCQWFELEFBQUM7aUNBQ1UsQUFDVCx5Q0FBTyxTQUNMLEtBQUEsQUFBSyxNQUZFLEFBRUksQUFFYjtvQkFDRSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBZSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBaEMsQUFBdUMsTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQXhELEFBQTZELE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUE5RSxBQUFxRixNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBdEcsQUFBNEcsTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLFlBQTdILEFBQXVJLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUxwSixBQUswSixBQUVuSzttQkFQUyxNQU9ELFNBQ04sS0FSTyxBQVFGOztzQkFSRTt3QkFBQTtBQUFBO1NBQUEsRUFEWCxBQUNXLEFBV1Q7Y0FBTSxLQUFBLEFBQUssTUFaYixBQVltQixBQUNqQjtpQkFBUyxLQWJYLEFBYWdCLEFBQ2Q7ZUFkRixBQWVFO2NBZkYsQUFlTzs7b0JBZlA7c0JBQUEsQUFpQkU7QUFqQkY7QUFDRSx5QkFnQkEsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsV0FBVSxTQUFTLEtBQUEsQUFBSyxNQUFyQyxBQUEyQztvQkFBM0M7c0JBakJGLEFBaUJFLEFBQ0E7QUFEQTswQkFDQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQW5CZCxBQWtCRSxBQUNFLEFBQWdCLEFBRWxCLHlCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxTQUFTLEtBQS9CLEFBQW9DLGFBQWEsVUFBakQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQURGLEFBQ0U7QUFBQTtVQW5LbUQsQUFRekQsQUFvSUEsQUFxQkUsQUFDRSxlQXJLSixBQUd5RCxNQUxsRCxBQUVQLE1BRkYsQUFBUyxBQW9MVjs7Ozs7QUEvVW9DLEE7O2tCQUFsQixBIiwiZmlsZSI6IkltcG9ydGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkY6L1Byb2plY3Q2L1NhZmVHb2xkIn0=
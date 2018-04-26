module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/opt/web/components/Header.js';



var linkStyle = {
  marginRight: '3em'
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/run', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'Run a vote'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = '/opt/web/components/MyLayout.js';




var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '0px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: layoutStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'Blockchain Voting'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/vote.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__);

var _jsxFileName = '/opt/web/pages/vote.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// pages/about.js








var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.doVote = _this.doVote.bind(_this);

    _this.state = {
      votingId: props.url.query.id,
      voting: false,
      voters: {
        list: false
      },
      options: {
        list: false
      },
      optionId: false,
      privKey: ''
    };
    return _this;
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get('http://127.0.0.1:7220/api/v1.0/votings/' + this.state.votingId);

              case 2:
                res = _context.sent;

                console.log(res);

                this.setState({
                  voting: res.data,
                  voters: {
                    list: res.data.voters
                  },
                  options: {
                    list: res.data.options
                  }
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'toggleModal',
    value: function toggleModal(e) {
      this.setState({
        visible: !this.state.visible,
        optionId: e.target.dataset.optionid,
        option: this.state.options.list.filter(function (item) {
          return item.id === e.target.dataset.optionid;
        }).map(function (item) {
          return item;
        })[0]
      });
    }
  }, {
    key: 'doVote',
    value: function doVote(e) {
      __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('http://127.0.0.1:7220/api/v1.0/vote', {
        privKey: this.state.privKey,
        optionId: this.state.optionId,
        votingId: this.state.votingId
      }).then(function (voteRes) {
        console.log('voteRes', voteRes);
      }).catch(function (e) {
        console.error(e);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var layoutStyle = {
        margin: 20,
        padding: 20,
        border: '0px solid #DDD'
      };
      var option = this.state.options.list === false ? null : this.state.options.list.filter(function (item) {
        return item.id === _this2.state.optionId;
      }).map(function (item) {
        return item;
      });

      var optionData = option && option.length > 0 ? option[0] : null;
      console.log(optionData);

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        { style: layoutStyle, className: 'jsx-2177248230',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'title',
            {
              className: 'jsx-2177248230',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            },
            'Blockchain Voting'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2177248230',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u', crossorigin: 'anonymous', className: 'jsx-2177248230',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          })
        ),
        this.state.voting === false ? null : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2177248230',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h1',
            {
              className: 'jsx-2177248230',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            this.state.voting.title.text
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-2177248230',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            this.state.voting.description.text
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h3',
            {
              className: 'jsx-2177248230',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            'Options:'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Table"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'thead',
              {
                className: 'jsx-2177248230',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'tr',
                {
                  className: 'jsx-2177248230',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('th', {
                  className: 'jsx-2177248230',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'th',
                  {
                    className: 'jsx-2177248230',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    }
                  },
                  'Option'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'th',
                  {
                    className: 'jsx-2177248230',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    }
                  },
                  'Address'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'th',
                  {
                    className: 'jsx-2177248230',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102
                    }
                  },
                  'Votes'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('th', {
                  className: 'jsx-2177248230',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'tbody',
              {
                className: 'jsx-2177248230',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              this.state.options.list === false ? null : this.state.options.list.map(function (item, index) {
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'tr',
                  { key: 'row_' + index, className: 'jsx-2177248230',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 110
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'td',
                    {
                      className: 'jsx-2177248230',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                      }
                    },
                    '#' + (index + 1)
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'td',
                    {
                      className: 'jsx-2177248230',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                      }
                    },
                    item.title.text
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'td',
                    {
                      className: 'jsx-2177248230',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                      }
                    },
                    item.address
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'td',
                    {
                      className: 'jsx-2177248230',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                      }
                    },
                    '-'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'td',
                    {
                      className: 'jsx-2177248230',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Button"],
                      {
                        onClick: _this2.toggleModal,
                        bsStyle: 'primary',
                        'data-optionid': item.id,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        }
                      },
                      'Vote'
                    )
                  )
                );
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Modal"],
            { show: this.state.visible, onHide: this.toggleModal, __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Modal"].Header,
              { closeButton: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Modal"].Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  }
                },
                'Just one step left'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Modal"].Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Alert"],
                { style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h4',
                  {
                    className: 'jsx-2177248230',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 138
                    }
                  },
                  optionData ? optionData.title.text : null
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["FormGroup"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["ControlLabel"],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 141
                    }
                  },
                  'Private Key'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["FormControl"], {
                  type: 'text',
                  value: this.state.privKey,
                  placeholder: 'Enter private key',
                  onChange: function onChange(e) {
                    return _this2.setState({ privKey: e.target.value });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Modal"].Footer,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 150
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Button"],
                { onClick: this.toggleModal, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                  }
                },
                'Close'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Button"],
                {
                  bsStyle: 'primary',
                  onClick: this.doVote,
                  disabled: this.state.privKey === '',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                  }
                },
                'Vote'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '2177248230',
          css: '@import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700\');.jsx-2177248230{font-family:\'IBM Plex Sans\',sans-serif;}h1.jsx-2177248230{font-size:4em;font-weight:300;margin:0.4em 0 0.4em 0;display:block;border-radius:4px;}h2.jsx-2177248230{font-weight:300;font-size:2.8em;margin-bottom:2em;}h3.jsx-2177248230{margin-top:2em;}h4.jsx-2177248230{margin:1em 0;font-weight:300;font-size:2.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ZvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUtzQixBQUU2RixBQUN4QyxBQUd4QixBQVFFLEFBTUQsQUFJRCxhQUNFLENBbEJBLENBY2xCLENBTmtCLGFBV0EsQ0FsQk8sRUFRTCxPQVl0QixNQURFLEtBVkEsR0FSZ0IsY0FDSSxrQkFDcEIiLCJmaWxlIjoicGFnZXMvdm90ZS5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L3dlYiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2Fib3V0LmpzXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEFsZXJ0LCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBDb250cm9sTGFiZWwsIFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTsgIFxuICAgICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuZG9Wb3RlID0gdGhpcy5kb1ZvdGUuYmluZCh0aGlzKTtcbiAgICAgIFxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdm90aW5nSWQ6IHByb3BzLnVybC5xdWVyeS5pZCxcbiAgICAgICAgdm90aW5nOiBmYWxzZSxcbiAgICAgICAgdm90ZXJzOiB7XG4gICAgICAgICAgbGlzdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBsaXN0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uSWQ6IGZhbHNlLFxuICAgICAgICBwcml2S2V5OiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo3MjIwL2FwaS92MS4wL3ZvdGluZ3MvJHt0aGlzLnN0YXRlLnZvdGluZ0lkfWApO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZvdGluZzogcmVzLmRhdGEsXG4gICAgICAgIHZvdGVyczoge1xuICAgICAgICAgIGxpc3Q6IHJlcy5kYXRhLnZvdGVyc1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgbGlzdDogcmVzLmRhdGEub3B0aW9uc1xuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVNb2RhbChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZTogIXRoaXMuc3RhdGUudmlzaWJsZSxcbiAgICAgICAgb3B0aW9uSWQ6IGUudGFyZ2V0LmRhdGFzZXQub3B0aW9uaWQsXG4gICAgICAgIG9wdGlvbjogdGhpcy5zdGF0ZS5vcHRpb25zLmxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBlLnRhcmdldC5kYXRhc2V0Lm9wdGlvbmlkKS5tYXAoKGl0ZW0pID0+IGl0ZW0pWzBdXG4gICAgICB9KVxuICAgIH1cbiAgICBcblxuICAgIGRvVm90ZShlKSB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjcyMjAvYXBpL3YxLjAvdm90ZScsIHtcbiAgICAgICAgcHJpdktleTogdGhpcy5zdGF0ZS5wcml2S2V5LFxuICAgICAgICBvcHRpb25JZDogdGhpcy5zdGF0ZS5vcHRpb25JZCxcbiAgICAgICAgdm90aW5nSWQ6IHRoaXMuc3RhdGUudm90aW5nSWQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHZvdGVSZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZvdGVSZXMnLCB2b3RlUmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGxheW91dFN0eWxlID0ge1xuICAgICAgICBtYXJnaW46IDIwLFxuICAgICAgICBwYWRkaW5nOiAyMCxcbiAgICAgICAgYm9yZGVyOiAnMHB4IHNvbGlkICNEREQnXG4gICAgICB9XG4gICAgICBjb25zdCBvcHRpb24gPSB0aGlzLnN0YXRlLm9wdGlvbnMubGlzdCA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMubGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHRoaXMuc3RhdGUub3B0aW9uSWQpLm1hcCgoaXRlbSkgPT4gaXRlbSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbkRhdGEgPSBvcHRpb24gJiYgb3B0aW9uLmxlbmd0aCA+IDAgPyBvcHRpb25bMF06IG51bGw7ICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25EYXRhKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkJsb2NrY2hhaW4gVm90aW5nPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUJWWWlpU0lGZUsxZEdtSlJBa3ljdUhBSFJnMzJPbVVjd3c3b24zUllkZzRWYStQbVNUc3ovSzY4dmJkRWpoNHVcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudm90aW5nID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnZvdGluZy50aXRsZS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLnZvdGluZy5kZXNjcmlwdGlvbi50ZXh0fTwvaDI+XG5cbiAgICAgICAgICAgICAgICA8aDM+T3B0aW9uczo8L2gzPlxuICAgICAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5PcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZGRyZXNzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+Vm90ZXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmxpc3QgPT09IGZhbHNlID8gbnVsbCA6IFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Byb3dfJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntgIyR7aW5kZXggKyAxfWB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnRpdGxlLnRleHR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmFkZHJlc3N9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtb3B0aW9uaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuXG4gICAgICAgICAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMuc3RhdGUudmlzaWJsZX0gb25IaWRlPXt0aGlzLnRvZ2dsZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5KdXN0IG9uZSBzdGVwIGxlZnQ8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQ+e29wdGlvbkRhdGEgPyBvcHRpb25EYXRhLnRpdGxlLnRleHQgOiBudWxsfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5Qcml2YXRlIEtleTwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByaXZLZXl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcml2YXRlIGtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe3ByaXZLZXk6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRvVm90ZX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByaXZLZXkgPT09ICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgVm90ZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBcblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SUJNK1BsZXgrU2FuczozMDAsNDAwLDcwMCcpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBTYW5zJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjRlbSAwIDAuNGVtIDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICBtYXJnaW46IDFlbSAgMDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/vote.js */'
        })
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/vote.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=vote.js.map
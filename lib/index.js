"use strict";

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.keys.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author       : ganbowen
 * @Date         : 2021-03-17 20:21:32
 * @LastEditors  : ganbowen
 * @LastEditTime : 2021-03-17 20:25:31
 * @Descripttion : test
 */
var Foo = /*#__PURE__*/function () {
  function Foo() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Foo);

    this.options = options;
  }

  _createClass(Foo, [{
    key: "init",
    value: function init() {
      var _this = this;

      console.log('init');
      Object.keys(this.options).forEach(function (key) {
        console.log(key, _this.options[key]);
      });
    }
  }]);

  return Foo;
}();

var a = new Foo({
  name: 'zhangsan',
  age: 12
});
console.log('a', a);
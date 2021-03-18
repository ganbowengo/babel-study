"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getType = getType;

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.object.to-string.js");

/*
 * @Author       : ganbowen
 * @Date         : 2021-03-18 22:02:22
 * @LastEditors  : ganbowen
 * @LastEditTime : 2021-03-18 22:05:43
 * @Descripttion : 
 */
function getType(obj) {
  return Object.prototype.toString.call(obj).replace(/\[object ([a-zA-Z]+)\]/, function (str, $1) {
    return $1;
  });
}
/*
 * @Author       : ganbowen
 * @Date         : 2021-03-18 22:02:22
 * @LastEditors  : ganbowen
 * @LastEditTime : 2021-03-18 22:05:43
 * @Descripttion : 
 */
export function getType (obj) {
    return Object.prototype.toString.call(obj).replace(/\[object ([a-zA-Z]+)\]/, (str, $1) => $1)
}
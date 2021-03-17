/*
 * @Author       : ganbowen
 * @Date         : 2021-03-17 20:21:32
 * @LastEditors  : ganbowen
 * @LastEditTime : 2021-03-17 20:25:31
 * @Descripttion : test
 */
class Foo {
    constructor(options = {}) {
        this.options = options
    }

    init () {
        console.log('init')
        Object.keys(this.options).forEach(key => {
            console.log(key, this.options[key])
        })
    }
}


let a = new Foo({ name: 'zhangsan', age: 12 })
console.log('a', a)
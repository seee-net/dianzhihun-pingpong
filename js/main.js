/* 表单验证 */

function Check() {
    this.isName = function (str) {
        return str.search(/^[\u0391-\uFFE5\w]+$/) != -1
    }
    
    this.isClass = function (str) {
        var reg = /^(中英|气卓)?[1-2][0-9][0-1][0-9]$/
        return reg.test(str)
    }

    this.isPhone = function (str) {
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/
        return reg.test(str)
    }

    this.isQQ = function (str) {
        var reg = /^[1-9][0-9]{4,9}$/gim
        return reg.test(str)
    }
}

const check = new Check()

/* 测试
console.log(check.isClass("电气1703"))
console.log(check.isClass("中英1711"))
console.log(check.isClass("气卓1701"))

console.log(check.isName("中英"))
console.log(check.isName("中英的"))
console.log(check.isName("在开始的"))

console.log(check.isPhone("15271859601"))
console.log(check.isPhone("152718596201"))
console.log(check.isPhone("1527185301"))

console.log(check.isQQ("1127373762"))
console.log(check.isQQ("11273762"))
console.log(check.isQQ("11273737062"))
*/

/* 表单验证 */

function Check() {
    this.isClass = function (str) {
        var reg = /^(中英|气卓)?[1-2][0-9][0-1][0-9]$/
        return reg.test(str)
    }

    this.isSex = function (str) {
        var reg = /^(male|famale)$/
        return reg.test(str)
    }

    this.isPhone = function (str) {
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/
        return reg.test(str)
    }

    this.isQQ = function (str) {
        var reg = /^[1-9][0-9]{4,9}$/
        return reg.test(str)
    }
}

window.onload = function () {
    const check = new Check()

    const submit = document.getElementById("submit-form")
    const right = document.getElementById("right")

    // 自动轮播
    setInterval(function() {right.click()}, 5000)

    submit.onclick = function () {
        const form = document.getElementById("form")

        const classIn = document.getElementById("class-form").value
        const nameIn = document.getElementById("name-form").value
        const sexIn = document.getElementById("sex-form").value
        const phoneIn = document.getElementById("phone-form").value
        const qqIn = document.getElementById("qq-form").value

        const alertBox = document.getElementById("alertBox")
        const content = document.getElementById("content")

        function success(str) {
            alertBox.classList.remove("alert-warning")
            alertBox.classList.add("alert-success")
            alertBox.hidden = false
            content.innerHTML = str
        }

        function warning(str) {
            alertBox.classList.remove("alert-success")
            alertBox.classList.add("alert-warning")
            alertBox.hidden = false
            content.innerHTML = str
        }

        if (!check.isClass(classIn)) {
            warning("班级格式错误！示例：1801、中英1801、气卓1801")
        } else if (nameIn === "") {
            warning("姓名不能为空！")
        } else if (!check.isSex(sexIn)) {
            warning("性别格式错误！")
        } else if (!check.isPhone(phoneIn)) {
            warning("手机号格式错误！")
        } else if (!check.isQQ(qqIn)) {
            warning("QQ号格式错误！")
        } else {
            success("报名成功！")
            form.submit()
        }
    }
}

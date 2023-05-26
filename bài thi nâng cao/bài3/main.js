let n = +prompt("nhập tháng:");
if (n > 0 && n < 13 && n % 1 == 0) {
    let x = +prompt("nhập năm")
    if (x > 0 && x % 1 == 0) {
        if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12) {
            alert(`số ngày trong tháng đó là: 31 ngày`)
        } else if (n == 4 || n == 6 || n == 9 || n == 11) {
            alert(`số ngày trong tháng đó là: 30 ngày`)
        } else if (n = 2 && x % 4 == 0) {
            if (x % 100 == 0 && x % 400 !== 0) {
                alert("số ngày trong tháng đó là: 28 ngày")
            } else {
                alert(`số ngày trong tháng đó là: 29 ngày`)
            }
        } else if (n = 2 && x % 4 !== 0) {
            alert(`số ngày trong tháng đó là: 28 ngày`)
        } else {
            alert("ngày này ko tồn tại")
        }
    } else {
        alert("sai cú pháp")
    }
} else {
    alert("sai cú pháp")
}
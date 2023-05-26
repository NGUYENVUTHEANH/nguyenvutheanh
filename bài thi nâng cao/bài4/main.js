let n = prompt(" nhập số bất kì").split(",")
function anh(a, b) {
    return b - a;
}
console.log(n.sort(anh))
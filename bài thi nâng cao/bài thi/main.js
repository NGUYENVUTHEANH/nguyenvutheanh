const n = prompt("nhập dãy số bất kì, tôi sẽ giúp bạn tìm số lớn nhất:");
let arr = n.split(",");
console.log(arr);
let maxInArr = Math.max.apply(Math, arr);
console.log(maxInArr);

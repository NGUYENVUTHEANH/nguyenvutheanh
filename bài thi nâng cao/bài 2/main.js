let y = prompt("nhập dãy bất kì");
let n = y.trim()
console.log(n);
let str = n.toLowerCase()
console.log(str);
let num = str.split(" ")
let hot = ""
for (let i = 0; i < num.length; i++) {
    let lowerNam = num[i].charAt(0).toUpperCase() + num[i].slice(1).toLowerCase();
    hot = hot + lowerNam + " ";
    console.log(hot)
}

        //  Anh sAi rồI

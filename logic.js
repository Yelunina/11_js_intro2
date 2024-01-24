let a = true;
let b = false;
let res = a || b;
console.log(res);
res = a && b;
console.log(res);
console.log('===================');
a = undefined;
// let nickName = (a !== null && a !== undefined) ? a : 'Anonymous';
let nickName = a || "Anonymous";
console.log(nickName);
greeting()

function greeting(name = 'Anonymous') {
    // name = name || "Anonymous";
    // name = name ?? "Anonymous";
    console.log(`Hello ${name}`);
}
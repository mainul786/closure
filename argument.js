let num1 =2;
let num2 = 6;

function sum(a, b, c){
    // console.log(arguments);
    const argo = [...arguments];
    console.log(argo);
    const result = a + b + c;
    return result;
}


sum(23, 20, 14, 22, 15, 19, 33);


function multiply(a, b){
    a = 24;
    const result = a * b;
    return result;
}
console.log(num1);
const output = multiply(num1, num2);
console.log(output);
console.log(num1);
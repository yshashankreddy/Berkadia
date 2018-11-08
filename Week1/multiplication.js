function Mul(a){
var x=Number(a[0]);
var y=Number(a[1]);
console.log('Product is',x*y);
}
Mul(process.argv.slice(2));



OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node multiplication.js 5 3
Product is 15
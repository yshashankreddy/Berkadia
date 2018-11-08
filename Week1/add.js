function Sum(a){
var x=Number(a[0]);
var y=Number(a[1]);
console.log('Sum is',x+y);
}
Sum(process.argv.slice(2));



OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node sum.js 2 5
Sum is 7


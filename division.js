function Div(a){
var x=Number(a[0]);
var y=Number(a[1]);
console.log('The quotient is',x/y);
}
Div(process.argv.slice(2));


OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node division.js 45 5
The quotient is 9
function Diff(a){
var x=Number(a[0]);
var y=Number(a[1]);
console.log('Difference is',x-y);
}
Diff(process.argv.slice(2));


OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node difference.js 23 12
Difference is 11



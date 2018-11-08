var a=process.argv.slice(2);
var emp=[],dup=[];
for(var i=0;i<a.length;i++)
{
 if(emp.includes(a[i]) && !dup.includes(a[i]))
 {
  dup.push(a[i]);
 }
 else
 {
  emp.push(a[i]);
 }
}
console.log('the duplicate numbers are:',dup);


OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node duplicate.js 5 3 4 2 1 2 3 1
the duplicate numbers are: [ '2', '3', '1' ]
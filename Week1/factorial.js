function fact(a)
{
 var n=Number(a[0]);
 var f=1;
 while(n!=0)
 {
  f=f*n;
  n--;
 }
 console.log('factorial of given number is',f);
}
fact(process.argv.slice(2));


OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node factorial.js 5
factorial of given number is 120
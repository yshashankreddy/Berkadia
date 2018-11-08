function prime(a)
{
 var n=Number(a[0]);
 var count=0;
 for(var i=2;i<n;i++)
 {
  if(n%i==0)
  {
   count++;
   break;
  }
 }
 if(count==1)
 {
  console.log('Given number is not a prime number');
 }
 else
 {
  console.log('Given number is a prime number');
 }
}
prime(process.argv.slice(2));


OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node prime.js 13
Given number is a prime number
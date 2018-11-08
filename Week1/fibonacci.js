function fibo(a)
{
 var n=Number(a[0]);
 var a=0;
 var b=1;
 var c=a+b;
 console.log('Fibonacci series upto given number is:');
 console.log(a);
 console.log(b);
 while(c<n)
 { 
  console.log(c);
  a=b;
  b=c;
  c=a+b;
 }
}
fibo(process.argv.slice(2));

OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node fibonacci.js 5
Fibonacci series upto given number is:
0
1
1
2
3
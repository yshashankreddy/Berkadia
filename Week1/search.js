function Search(a)
{
 var n=Number(a[0]);
 var count=0;
 for(var i=1;i<a.length;i++)
{
 if(Number(a[i])==n)
 {
  count++;
  break;
 }
}
if(count==1)
{
 console.log('given number is found');
}
else
{
 console.log('given number not found');
}
}
Search(process.argv.slice(2));


OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node search.js 3 1 2 3 4 6 5
given number is found


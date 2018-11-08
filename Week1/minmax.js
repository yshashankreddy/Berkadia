function minmax(a)
{
 a.sort();
 console.log('maximum number is ',a[a.length-1]);
 console.log('minimum number is ',a[0]);
}
minmax(process.argv.slice(2));


OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node minmax.js 5 3 4 2 1
maximum number is  5
minimum number is  1

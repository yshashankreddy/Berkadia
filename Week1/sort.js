function sort(a)
{
 a.sort();
 console.log(a);
}
sort(process.argv.slice(2));


OUTPUT:

C:\Users\SHASHANK\Desktop\berkadia>node sort.js 5 3 4 2 1
[ '1', '2', '3', '4', '5' ]
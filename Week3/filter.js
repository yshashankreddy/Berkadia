var num = [1,2, 4, 6, 8,10,13];
console.log("Given numbers are");
for (i = 0; i < num.length; i++)
 { 
  console.log(num[i]);
}
console.log("Prime numbers are");
var primenum = num.filter(num => num%2==0);
for (i = 0; i < primenum.length; i++)
 { 
  console.log(primenum[i]);
}

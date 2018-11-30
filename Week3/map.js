var num = [3, 6, 9, 12];
console.log("Given numbers are");
for (i = 0; i < num.length; i++)
 { 
  console.log(num[i]);
}
console.log("Doubled numbers are");
var double = num.map(x => x * 2);
for (i = 0; i < double.length; i++)
 { 
  console.log(double[i]);
}

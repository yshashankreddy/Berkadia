function outer(outer_arg) { 
  
  function inner(inner_arg) { 
      return outer_arg + inner_arg; 
  } 
  return inner; 
} 
var get_func_inner = outer(5); 
console.log(get_func_inner(4)); 
console.log(get_func_inner(3)); 

/*OUTPUT:


C:\Users\SHASHANK\Desktop\week3\my-app>node CLOSURE.js
9
8

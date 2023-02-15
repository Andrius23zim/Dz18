function closure(number) { 
    let sum = 0; 
    return function(number) { 
      sum += number; 
      return sum; 
    } 
  } 
   
  let resultFunction = closure(0); 
   
  resultFunction(3); 
  resultFunction(5); 
  resultFunction(20); 
   
  console.log(resultFunction(0));
  


// не знаю правельное я вывел значение в консоле ? 
// потому что если я поставлю 3 то число будет 31
// а если 0 то выходит 28 
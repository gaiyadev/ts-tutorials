let myMap = new Map();  
  
myMap.set('1', 'abhishek');     
myMap.set(1, 'www.javatpoint.com');       
myMap.set(true, 'bool1');   
myMap.set('2', 'ajay');  
  
console.log( "Value1= " +myMap.get(1)   );   
console.log("Value2= " + myMap.get('1') );   
console.log( "Key is Present= " +myMap.has(3) );   
console.log( "Size= " +myMap.size );   
console.log( "Delete value= " +myMap.delete(1) );   
console.log( "New Size= " +myMap.size ); 
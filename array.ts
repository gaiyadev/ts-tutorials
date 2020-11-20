let arr:number[];   
arr = [1, 2, 3, 4]   
arr.push(67);
console.log("Array[0]: " +arr[0]);   
console.log("Array[1]: " +arr[1]); 
console.log(arr);

arr.forEach(element => {
    console.log(element);
    
});
console.log('================================');
for (const i in arr) {
console.log(arr[i]);        

}




let arr1 = [ 1, 2, 3];  
let arr2 = [ 4, 5, 6];  
//Create new array from existing array  
let copyArray = [...arr1];     
console.log("CopiedArray: " +copyArray);  
//Create new array from existing array with more elements  
let newArray = [...arr1, 7, 8];  
console.log("NewArray: " +newArray);  
//Create array by merging two arrays  
let mergedArray = [...arr1, ...arr2];  
console.log("MergedArray: " +mergedArray);  
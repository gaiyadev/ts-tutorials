var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr;
arr = [1, 2, 3, 4];
arr.push(67);
console.log("Array[0]: " + arr[0]);
console.log("Array[1]: " + arr[1]);
console.log(arr);
arr.forEach(function (element) {
    console.log(element);
});
console.log('================================');
for (var i in arr) {
    console.log(arr[i]);
}
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
//Create new array from existing array  
var copyArray = __spreadArrays(arr1);
console.log("CopiedArray: " + copyArray);
//Create new array from existing array with more elements  
var newArray = __spreadArrays(arr1, [7, 8]);
console.log("NewArray: " + newArray);
//Create array by merging two arrays  
var mergedArray = __spreadArrays(arr1, arr2);
console.log("MergedArray: " + mergedArray);

var pet;
if (pet = 'cat') {
    console.log("Correct");
}
;
if (pet = 'Deer') {
    console.log("compilation error");
}
;
function display(value) {
    if (typeof (value) === "number")
        console.log('The given value is of type number.');
    else if (typeof (value) === "string")
        console.log('The given value is of type string.');
}
display(123);
display("ABC");

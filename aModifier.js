var Student = /** @class */ (function () {
    function Student() {
    }
    /**
     * name
     */
    Student.prototype.info = function (age, course, level) {
        return "Welcome" + age + course + level;
    };
    return Student;
}());
var stud = new Student();
stud.studCode = 101;
stud.studName = "Joe Root";
var getInfo = stud.info(12, "maths", '100l');
console.log(stud.studCode + " " + stud.studName);
console.log(getInfo);

class Student {  
    public studCode: number;  
    studName: string;  

    /**
     * name
     */
    public  info(age:number,course:string, level:string|number) {
        return `Welcome${age}${course}${level}`
    }
}  
  
let stud = new Student();  
stud.studCode = 101;  
stud.studName = "Joe Root";  
let getInfo = stud.info(12,"maths", '100l');
  
console.log(stud.studCode+ " "+stud.studName);
console.log(getInfo); 
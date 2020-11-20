class myStudent {  
    studCode: number;  
    studName: string;  
  
    constructor(code: number, name: string) {  
            this.studName = name;  
            this.studCode = code;  
    }  
  
    getGrade() : string {  
        return "A+" ;  
    }  
}  

let std =new myStudent(23, 'ome');
console.log(std.getGrade())

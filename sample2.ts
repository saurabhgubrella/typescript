class Employee{
    emp_name:string
    emp_id:number
    static company:string = "IBM"
    
    
    constructor(emp_name:string , emp_id:number ){
        this.emp_name = emp_name
        this.emp_id = emp_id
         
    }

    display_info(){
        console.log(this.emp_id + "  " + this.emp_name + " " + Employee.company);
        
    }
}

var e1 = new Employee("John" , 101)
e1.display_info();
var e2 = new Employee("Jimmy" , 102)
e2.display_info()
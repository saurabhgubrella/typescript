var Employee = /** @class */ (function () {
    function Employee(emp_name, emp_id) {
        this.emp_name = emp_name;
        this.emp_id = emp_id;
    }
    Employee.prototype.display_info = function () {
        console.log(this.emp_id + "  " + this.emp_name + " " + Employee.company);
    };
    Employee.company = "IBM";
    return Employee;
}());
var e1 = new Employee("John", 101);
e1.display_info();
var e2 = new Employee("Jimmy", 102);
e2.display_info();

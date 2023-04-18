class A{
    num1:number=20
}
class B extends A{
    num2:number=30
    res:number
    
    addition():void{
        this.res = this.num1 + this.num2;
        console.log("sum of two numbers:" + this.res);
    }
}
var obj = new B();
obj.addition()
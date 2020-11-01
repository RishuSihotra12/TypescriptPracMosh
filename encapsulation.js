let baseSalary = 3000;
let overtime = 10;
let rate = 20;

function getWage(){
    return baseSalary + (overtime * rate);
}
//=======or=======================
let employee ={
    baseSalary : 40000,
    overtime : 40,
    rate : 20,
    getWage:function(){
        return this.baseSalary + (this.overtime* this.rate)
    }
}
employee.getWage();
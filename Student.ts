class Students{
    constructor(private fName,private lName){}
    GetFullName():string{
        return this.fName+" "+this.lName;
    }
}

export {Students}
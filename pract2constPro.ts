class Point1{
   private x: number;
   private y: number;
     constructor(x,y){
        this.x = x;
        this.y = y;
     }
     get X() {
         return this.x;
     }
     set X(Value) {
        if(Value<0)
           throw new Error("Value cannot be 0")
        this.x=Value;
     }
}
let point1=new Point1(2,5);

let x=point1.X;
point1.X=20;
console.log(x)

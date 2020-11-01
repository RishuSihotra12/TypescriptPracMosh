//================Factory Functions
// function createCircle(radius){
//     return{
//         radius,
//         draw:function(){
//             console.log("Hello")
//         }
//     }
// }
// const circle= createCircle(1);
// circle.draw()

//================constructor Function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("Hello");
//     }
// }
// const another = new Circle(1);
// another.draw();

new String(); //'',"",``
new Boolean(); // true, false
new Number() ; //1,2,3

//============== functions are objects
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draw")
//     }
// }
// const another = new Circle(1);
// console.log(Circle.name);
// console.log(Circle.length)


//======primitive
// let x = 10;
// let y = x;
// x=20;
// console.log(x)
// console.log(y)
//=========object
let x = {value:10}
let y = x;
x.value = 20;
console.log(x)
console.log(y)



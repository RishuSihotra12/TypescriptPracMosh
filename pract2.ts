//ENUM declaration
enum LanguageKnown {Hindi,English,Tamil};

import {IStudentInfo} from './IStudentInfo';
import {Students} from './Student';

let studentList:IStudentInfo []= [
    { name:"Rishu",Age:26,Phone:90131312321,Language:LanguageKnown[ LanguageKnown.English]},
    { name:"Dinesh",Age:56,Phone:9887777777,Language: LanguageKnown[LanguageKnown.Hindi]}
]

// for(var i=0;i<studentList.length;i++){
//     var ele=studentList[i];
//     console.log("Name=> "+ele.name+" Age=>"+ele.Age+" Phone=>"+ele.Phone +" Language=> "+ele.Language)
// }

//==================FUNCTION Declaration======================
function GetStudentList(students:IStudentInfo[]){
    students.forEach(ele => {
        console.log("Name=> "+ele.name+" Age=>"+ele.Age+" Phone=>"+ele.Phone +" Language=> "+ele.Language)
    });
}

GetStudentList(studentList);

//================REST parameters=================

function Getnumbers(...nums:number[]){
    nums.forEach(element => {
      console.log("Numbers => "+element)  
    });
}
Getnumbers(1,2,3,4,5,6);

//=================DEFAULT parameters========
function GetInfo(info:string="Rishu"){
    console.log(info)
}

GetInfo()

//========================FUNCTION==============================
//Anonymous Function

let StudentName= function(fName:string,lName:string){
    return fName+".."+lName;
}
console.log(StudentName("Rishu","Sihotra"));

//Arrow Function

let StudentFullName = (fName:string,lName:string)=>{
    return fName+"  "+lName;
}
console.log(StudentFullName("Dinesh","Mahale"));


//======================CLASS============


let stuData=new Students("Diksha","Sihotra");
let vaarg=stuData.GetFullName();
console.log(vaarg)
console.log(stuData.GetFullName())

//==================Genericsss======================
console.log("=============Generices===================")
let studentListG:Array<IStudentInfo>= [
    { name:"Rishu",Age:26,Phone:90131312321,Language:LanguageKnown[ LanguageKnown.English]},
    { name:"Dinesh",Age:56,Phone:9887777777,Language: LanguageKnown[LanguageKnown.Hindi]}
]
function GetStudentListGeneric(students:Array<IStudentInfo>){
    students.forEach(ele => {
        console.log("Name=> "+ele.name+" Age=>"+ele.Age+" Phone=>"+ele.Phone +" Language=> "+ele.Language)
    });
}

GetStudentListGeneric(studentListG);

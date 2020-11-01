"use strict";
exports.__esModule = true;
//ENUM declaration
var LanguageKnown;
(function (LanguageKnown) {
    LanguageKnown[LanguageKnown["Hindi"] = 0] = "Hindi";
    LanguageKnown[LanguageKnown["English"] = 1] = "English";
    LanguageKnown[LanguageKnown["Tamil"] = 2] = "Tamil";
})(LanguageKnown || (LanguageKnown = {}));
;
var studentList = [
    { name: "Rishu", Age: 26, Phone: 90131312321, Language: LanguageKnown[LanguageKnown.English] },
    { name: "Dinesh", Age: 56, Phone: 9887777777, Language: LanguageKnown[LanguageKnown.Hindi] }
];
// for(var i=0;i<studentList.length;i++){
//     var ele=studentList[i];
//     console.log("Name=> "+ele.name+" Age=>"+ele.Age+" Phone=>"+ele.Phone +" Language=> "+ele.Language)
// }
//==================FUNCTION Declaration======================
function GetStudentList(students) {
    students.forEach(function (ele) {
        console.log("Name=> " + ele.name + " Age=>" + ele.Age + " Phone=>" + ele.Phone + " Language=> " + ele.Language);
    });
}
GetStudentList(studentList);
//================REST parameters=================
function Getnumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Numbers => " + element);
    });
}
Getnumbers(1, 2, 3, 4, 5, 6);
//=================DEFAULT parameters========
function GetInfo(info) {
    if (info === void 0) { info = "Rishu"; }
    console.log(info);
}
GetInfo();
//========================FUNCTION==============================
//Anonymous Function
var StudentName = function (fName, lName) {
    return fName + ".." + lName;
};
console.log(StudentName("Rishu", "Sihotra"));
//Arrow Function
var StudentFullName = function (fName, lName) {
    return fName + "  " + lName;
};
console.log(StudentFullName("Dinesh", "Mahale"));
//======================CLASS============
var Students = /** @class */ (function () {
    function Students(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    Students.prototype.GetFullName = function () {
        return this.fName + " " + this.lName;
    };
    return Students;
}());
var stuData = new Students("Diksha", "Sihotra");
var vaarg = stuData.GetFullName();
console.log(vaarg);
console.log(stuData.GetFullName());
//==================Genericsss======================
console.log("=============Generices===================");
var studentListG = [
    { name: "Rishu", Age: 26, Phone: 90131312321, Language: LanguageKnown[LanguageKnown.English] },
    { name: "Dinesh", Age: 56, Phone: 9887777777, Language: LanguageKnown[LanguageKnown.Hindi] }
];
function GetStudentListGeneric(students) {
    students.forEach(function (ele) {
        console.log("Name=> " + ele.name + " Age=>" + ele.Age + " Phone=>" + ele.Phone + " Language=> " + ele.Language);
    });
}
GetStudentListGeneric(studentListG);

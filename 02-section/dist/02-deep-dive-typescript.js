"use strict";
//LET ve VAR ikisi de immutable (degistirilebilir) variable olusturmak icin kullanilir.
let variableExample = true;
const variableExample2 = "const variables are not immutable";
variableExample = false;
// variableExample2="hakan atmaca";//Hata verir.
if (variableExample) {
    // var variableExample3 ="Var is visible in other scopes"; //It could be visible out side of scope if its declared in scope like ifscope, which scope
    console.log("The course is" + variableExample);
}
// variableExample3 = "i can acces var variable from outside of scope.";
//VAR kullanimi typescript'e tavsiye edilmez!!!!
//======PRIMITIVE TYPES
//======number
const lessonsCount = 10.12; //decimal
const total = lessonsCount + 10;
console.log("total number = " + total);
//======string
const title = "TypeScript";
const subtitle = "Bootcamp";
const fullTitle = title + ":" + subtitle;
console.log("fulltitle = " + fullTitle);
//======Boolean
const published = true;
if (published) {
    console.log("Boolean primitive type");
}
//======TYPESCRIPT TEMPLATE STRINGS
let backTick = `Fullname ${fullTitle}`; // variable alabilir.
let normalTick = "same" + "same"; //"" ve '' same!!
//======TYPE ANNOTATION
let typeSample = "string";
let typeSampleNum = 150;
let typeSampleBoolean = true;
function typeInference(title, number, isBoolean) {
    let fullString = title + number.toString() + isBoolean;
    console.log(fullString);
}
typeInference(typeSample, typeSampleNum, typeSampleBoolean);
//======OBJECT TYPE
const student = {
    title: "Oguzhan",
    age: 27,
    department: "Digital",
};
console.log(typeof student);
console.log(student);
//======NESTED OBJECT
let courseNested = {
    title: "TypeScript Bootcamp",
    age: 5,
    department: "digital",
    language: {
        CSharp: "strong",
        TypeScript: "low",
    },
};
//======DIFFERENCE BETWEEN NULL AND UNDEFINED
let car;
// console.log("title = " + car); //compile ederken hata gosterse de js klasoru olusturulur. Car otomatik olarak undefined olur.
if (car === null) {
    console.log("The value of title not known yet.");
}
//======HOW TO AVOID NNULL-RELATED ERRORS
//-> normal object declare etme yontemi
// let course : {title:string} = {
//   title:"That's the title"
// }
let course = {
    title: null,
};
//eger  bir deger null is if kontrolunde false doner !null true doner..
if (course && course.title) {
    console.log(`The title is ${course.title}`);
}
//yukaridakinin kisaltimis halidir.
if (course?.title) {
    console.log("Objects are not null");
}
//======NULL COALESCING OPERATOR
//--> course?.title?.class eger course ya da title null ise expression degeri otomatik olarak undefined dondurur.
let courseCoalesing = null;
const titleCore = courseCoalesing?.title ?? "No title found";
console.log(titleCore);
//======ARRAYS
const numbers = [1, 2, 3];
numbers.push(4);
// numbers.push("string"); // JS'tin aksine arraylerde type kontrolu getirilmistir. O yuzden complation time'da hata verir.
//======ENUMS
var bookType;
(function (bookType) {
    // Free = 5,
    bookType["Free"] = "free";
    // Premium, //6 olur
    bookType["Premium"] = "premium";
    // Private //7olur
    bookType["Private"] = "private";
})(bookType || (bookType = {}));
const book = {
    title: "typescript",
    pageNumber: 150,
    type: bookType.Free,
};
console.log(book.type);
//======UNDERSTAND "ANY" TYPE
let lessonsCoount = 10;
// lessonsCoount = "oguzhan";
let anyTypeNumbers = [1, "2", 3, "4"]; //static type sistem kullanmak icin tercih edilebilir.
//====== IMPLICIT ANY TYPES
//implicitly declare type as any if you dont give specific type
function printCourse(title, lessonsCoount) {
    console.log(`Istedigini yazdirabilirsin ${title}  ${lessonsCoount}`);
}
// function printCourse(title:string,lessonsCoount:number) //Bu sekilde tanimlamak gerekir.
printCourse("first", 2);
//====== UNION TYPES
let uniqueIdentifier = 1000; //let ie kullanilir. gecebilecegi typleı gosterirsin
uniqueIdentifier = "asdf1f-f1ff35h3-sd234g-1123";
const keys = ["hello", 1452];
let courseId = null;
//====== Strict Null Check
let departmantId;
//====== NON NULL ASSERTION OPERATOR
let carId;
// carId.toString(); //Strictnullcheck yapilirsa bu satir null error firlatir.
carId.toString(); //Strictnullcheck da yapilsa bu satir "!" işaretinden dolayi null error firlatmaz. Kesin durumlarda kullanilir.
//======LITERAL TYPES
//  let pencil = "black"; //let'te type:string görünür.
const pencil = "black"; //const'ta type:"black" olarak gorunur.
let pageSize = 10;
//  pageSize = 14; //compiler hatasi verir.
pageSize = 15;
let courseStatus = "published"; // declere edile n type blogu referans alindi. tanimlanan typle disinde bi type girilirse hata gosterir.
let extraCourse = {
    title: "oguzhan",
    subtitle: "yilmaz",
    lessonCount: 15,
};
//====== DIFFERENCE BETWEEN ALIAS VS INTERFACES
//interfacelerde extend olayi daha iyi acilan bir interface ekleme yapmak istedigimizde programin baskabir yerinde ayni isimle interface acip yalnizca eklemek
//istedigimiz property girebilir. type alias'larda boyleb bir durum yoktur.
//====== TYPE ASSERTIONS
const input = document.getElementById("input-field");
// const input2 = <HTMLInputElement> document.getElementById("input-field"); //Alternative way to type assertions.
let inputFirst = input.value; //Eger as HTMLInputElement demezsem value propertysini tanimaz.
const input3 = document.getElementById("input-field"); //TO FORCE TYPE ASSERTION!!!
//# sourceMappingURL=02-deep-dive-typescript.js.map
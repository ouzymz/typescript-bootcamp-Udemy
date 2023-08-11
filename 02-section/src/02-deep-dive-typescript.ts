//LET ve VAR ikisi de immutable (degistirilebilir) variable olusturmak icin kullanilir.

let variableExample: boolean = true;
const variableExample2: string = "const variables are not immutable";
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
const lessonsCount: number = 10.12; //decimal

const total = lessonsCount + 10;

console.log("total number = " + total);

//======string

const title: string = "TypeScript";

const subtitle: string = "Bootcamp";

const fullTitle = title + ":" + subtitle;

console.log("fulltitle = " + fullTitle);

//======Boolean

const published: boolean = true;

if (published) {
  console.log("Boolean primitive type");
}

//======TYPESCRIPT TEMPLATE STRINGS

let backTick: string = `Fullname ${fullTitle}`; // variable alabilir.

let normalTick: string = "same" + "same"; //"" ve '' same!!

//======TYPE ANNOTATION

let typeSample: string = "string";

let typeSampleNum: number = 150;

let typeSampleBoolean: boolean = true;

function typeInference(title: string, number: number, isBoolean: boolean) {
  let fullString = title + number.toString() + isBoolean;

  console.log(fullString);
}

typeInference(typeSample, typeSampleNum, typeSampleBoolean);

//======OBJECT TYPE

const student: { title: string; age: number; department: string } = {
  title: "Oguzhan",
  age: 27,
  department: "Digital",
};

console.log(typeof student);
console.log(student);

//======NESTED OBJECT

let courseNested: {
  title: string;
  age: number;
  department: string;
  language: { CSharp: string; TypeScript: string };
} = {
  title: "TypeScript Bootcamp",
  age: 5,
  department: "digital",
  language: {
    CSharp: "strong",
    TypeScript: "low",
  },
};

//======DIFFERENCE BETWEEN NULL AND UNDEFINED

let car: string;

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

const numbers: number[] = [1, 2, 3];

numbers.push(4);
// numbers.push("string"); // JS'tin aksine arraylerde type kontrolu getirilmistir. O yuzden complation time'da hata verir.

//======ENUMS

enum bookType {
  // Free = 5,
  Free = "free",
  // Premium, //6 olur
  Premium = "premium",
  // Private //7olur
  Private = "private",
}

const book = {
  title: "typescript",
  pageNumber: 150,
  type: bookType.Free,
};

console.log(book.type);

//======UNDERSTAND "ANY" TYPE

let lessonsCoount: any = 10;

// lessonsCoount = "oguzhan";

let anyTypeNumbers: any[] = [1, "2", 3, "4"]; //static type sistem kullanmak icin tercih edilebilir.

//====== IMPLICIT ANY TYPES
//implicitly declare type as any if you dont give specific type
function printCourse(title, lessonsCoount) {
  console.log(`Istedigini yazdirabilirsin ${title}  ${lessonsCoount}`);
}

// function printCourse(title:string,lessonsCoount:number) //Bu sekilde tanimlamak gerekir.

printCourse("first", 2);

//====== UNION TYPES

let uniqueIdentifier: number | string = 1000; //let ie kullanilir. gecebilecegi typleı gosterirsin
uniqueIdentifier = "asdf1f-f1ff35h3-sd234g-1123";

const keys: (number | string)[] = ["hello", 1452];

let courseId: number | null = null;

//====== Strict Null Check

let departmantId: number;

//====== NON NULL ASSERTION OPERATOR

let carId: number | null;

// carId.toString(); //Strictnullcheck yapilirsa bu satir null error firlatir.
carId!.toString(); //Strictnullcheck da yapilsa bu satir "!" işaretinden dolayi null error firlatmaz. Kesin durumlarda kullanilir.

//======LITERAL TYPES

//  let pencil = "black"; //let'te type:string görünür.

const pencil = "black"; //const'ta type:"black" olarak gorunur.

let pageSize: 10 | 15 | 20 = 10;

//  pageSize = 14; //compiler hatasi verir.

pageSize = 15;

//====== TYPE ALIES

type CourseStatus = "draft" | "published" | "unpublished"; //CourseStatus gibi bi type blogu declere edildi.

let courseStatus: CourseStatus = "published"; // declere edile n type blogu referans alindi. tanimlanan typle disinde bi type girilirse hata gosterir.

type ExtraCourses = {
  title: string;
  subtitle: string;
  lessonCount: number;
};

let extraCourse: ExtraCourses = {
  title: "oguzhan",
  subtitle: "yilmaz",
  lessonCount: 15,
};

//====== INTERFACES

interface interfaceCourse {
  title: string;
  subtitle: string;
  number: number;

  //number?:number //makes the property
} //makes all properties compulsory

//====== DIFFERENCE BETWEEN ALIAS VS INTERFACES

//interfacelerde extend olayi daha iyi acilan bir interface ekleme yapmak istedigimizde programin baskabir yerinde ayni isimle interface acip yalnizca eklemek
//istedigimiz property girebilir. type alias'larda boyleb bir durum yoktur.

//====== TYPE ASSERTIONS

const input = document.getElementById("input-field") as HTMLInputElement;

// const input2 = <HTMLInputElement> document.getElementById("input-field"); //Alternative way to type assertions.

let inputFirst = input.value; //Eger as HTMLInputElement demezsem value propertysini tanimaz.

const input3 = (document.getElementById("input-field") as any) as string; //TO FORCE TYPE ASSERTION!!!

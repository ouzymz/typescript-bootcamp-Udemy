let anyValue: any;

anyValue = true;
anyValue = 10;
anyValue = "hi";
anyValue = [];
anyValue = null;
anyValue = undefined;

let value1 : unknown = anyValue;
let value2 : undefined = anyValue;
let value11 : number = anyValue;
let value22: string = anyValue;




let unknownValue: unknown;

unknownValue = true;
unknownValue = 10;
unknownValue = "hi";
unknownValue = [];
unknownValue = null;
unknownValue = undefined;

let value3 : unknown = unknownValue;
let value4 : any = unknownValue;
// let value5 : boolean = unknownValue; //hata verir!!!
// let value6 : nnnumber = unknownValue; //hata verir!!!

if(typeof unknownValue =="string") {
    let value7:string = unknownValue;
}

// let value8:string=unknownValue; //hata verir!!!


// ANY ve UNKNOWN FARKI : any ile butun tipler icin asisgnlama yapilabilirken
//unknow kullanirken bu atama islemi yalnizca unknown va any icin yapilabilir. 
//yalnizca if scope icinde yani baska bir scope icinde degisiklik yapılabilir.

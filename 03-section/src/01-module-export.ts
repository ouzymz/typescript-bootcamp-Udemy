

export const PAGE_SIZE : number = 100; //DISARIYA ACMAK ISTEDIGIM ALANI EXPORT ILE BELIRTIRIM

export const Course : {name:string,hour:number,studentName:string} = {
    name : "Typescript",
    hour : 14.5,
    studentName : "Oguzhan"
}

//DEFAULT FUNCTION EXPORT. 

export default function printCourse (Course:object){
    console.log(Course);
}

export const pageSize : number = 100;





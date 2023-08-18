import { lutimesSync } from "fs";

interface Lesson {
  title: string;
  seqNo: number;
}

function freezeLesson(lesson: Lesson): Readonly<Lesson> {
  return Object.freeze(lesson);
}

function freezeGeneric<T>(input: T): Readonly<T> {
  return Object.freeze(input);
}

const someData = {
  title: "Typescript Bootcamp",
  subtitle: "Learn how to code in ts",
  lessonsCount: 15,
};

const moreData = {
  seqNo: 15,
  price: 20,
};

export function merge<T, U>(input1: T, input2: U) {
  return Object.assign(input1, input2) as T & U;
}

const mergedData = merge(someData, moreData);

export function mergeExtend<T extends object, U>(input1: T, input2: U) {
  return Object.assign(input1, input2) as T & U;
}

const mergedExtendsData = mergeExtend(
  { title: "oguzhan", subtitle: "yilmaz" },
  10
); //birinci inputun object olmasini zorunlu kildik.

//KEYOF costraint

class Course {
  title: string;
  subtitle: string;
  lessonCount: number;
}

const course : Course ={
    title:"dneme",
    subtitle:"deneme",
    lessonCount:15
}

type CourseKeys = keyof Course;

export function extractProperty<T,K extends keyof T>(data:T,property:K){
    return data[property];
}

// const val = extractProperty(course, "Title"); // Title diye bir property olmadigi icin hata verir.
const val = extractProperty(course, "title"); 


//GENERIC CLASSES~

class KeyValue {
    constructor(public readonly key: any,public readonly value: any){
        
    }
    print(){
        console.log(`key = ${this.key} value= ${this.value}`);
    }
}

const p1 = new KeyValue("1",10);


class KeyValueGeneric<K,V> {
    constructor(public readonly key: K,public readonly value: V){
        
    }
    print(){
        console.log(`key = ${this.key} value= ${this.value}`);
    }
}

const p2 = new KeyValueGeneric<string,number>("1",10);
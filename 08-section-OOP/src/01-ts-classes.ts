const date = new Date();

let dateJson: string = date.toJSON();

class Course {
  // STATIK PROPERTILER
  static TOTAL_COURSES = 0; //programin her yerinde erisilebilen bir propertidir. eger private tanimlanirsa yalnizca class icinde ulasilabilir.

  // private readonly title: string; //class icinde immutable class disina kapali
  // //setTitle(){this.title = "oguzhan";} //hata verir cunku readonly
  // creationDt: Date;

  // private price: number;


  // private _subtitle: string;

  // set subtitle(newSubtitle: string) {
  //   this._subtitle = newSubtitle;
  //   if (!newSubtitle) {
  //     throw "Title cannot be empty";
  //   }
  // }
  // get subtitle() {
  //   return this._subtitle;
  // }

  // protected memberCount: number;

  constructor(
    private price: number,
    private title: string,
    private subtitle: string,
    private creationDt: Date,
    private memberCount: number
  ) {
    // this.price = 
    // this.title = title;
    // this._subtitle = subtitle;
    // this.creationDt = creationDt;
    // this.memberCount = memberCount;
    this.validate();
  }

  validate() {
    if (this.price <= 0) {
      throw "Price must be larger than zero!!!";
    }
  }

  age() {
    const ageInMs = new Date().getTime() - this.creationDt.getTime();
    return Math.round(ageInMs / 1000 / 60 / 24);
  }

  static printTitle() {
    console.log("This method is static.");
    // this._subtitle;// burada this kullanilmaz
  } //static methodlarda disaridan bir input kullanilacaksa class constructorlarindan degil de functionun aldigi input degerlerinden ilerlenmelidir.
}

const course = new Course(
  15,
  "typescript",
  "lear how to code in typescript",
  new Date(2000, 1, 1),
  15
);

console.log(course);

console.log(course.age());

//typescriptte 1''den fzla constructor kullanilmaz, default valeler atanarak classlarin farkli kosullarda da kullanilmasi saglanir.

// CHILD CLASS

class pricedCourse extends Course {
  constructor(
    price: number,
    title: string,
    subtitle = "",
    creationDt = new Date(200, 1, 1),
    memberCount: number
  ) {
    super(price, title, subtitle, creationDt, memberCount);

  }
}

// const angular = new pricedCourse(0,"freecodecamp","ts", new Date(2000,1,1)); //constructor method icinde price validate funtionu tanimladigimiz icin price 0 dan buyuk olmali hatasi doner.
const angular = new pricedCourse(
  1000,
  "freecodecamp",
  "c#",
  new Date(2000, 1, 1),
  20
);
console.log(angular);

class freeCourse extends Course {
  constructor(
    title: string,
    subtitle = "",
    creationDt = new Date(200, 1, 1),
    memberCount: number
  ) {
    super(0,title,subtitle,new Date(2000,1,1),15);
  }

  validate(): void {
    console.log("Course is free!!!")
    //   super.validate(); // eger parent classtaki methoda ekleme yapacaksam super.validate seklinde kullanabilrim.
  }
}

const ts = new freeCourse("typescript","freecourse",new Date(2000,1,1),15);

console.log(ts);

abstract class Car {

  private static TOTAL_CAR = 0;

  static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

  protected constructor(protected model:string, protected hp:number, protected brand:string) {
    this.carInfo();
  }

  protected abstract carInfo(); //its a contrat that all child class should implement the 
}

// const sampleCar = new Car("1.16",150,"BMW");//abstract classlar newlenemez.

class CarBMW extends Car {
  constructor(model: string, hp: number, brand: string) {
    super(model, hp, brand);
  }

  carInfo(): void {
    console.log(
      `Model = ${this.model} \nHP = ${this.hp}\nBrand = ${this.brand}`
    );
  }

}

const sampleCar: CarBMW = new CarBMW("1.16", 150, "BMW");

sampleCar.carInfo();

//Interface implement

import { HasColor, HasId } from "./02-interfaces";

abstract class Bicycle implements HasId, HasColor {
  //interface implement scope
  id: string;
  color: string;
  printId() {
    console.log(`ID : ${this.id}`);
  }

  model: string;
  hp: number;
  brand: string;
  constructor(model, hp, brand, id, color) {
    this.model = model;
    this.hp = hp;
    this.brand = brand;
    this.id = id;
    this.color = color;
    this.carInfo();
  }

  protected carInfo() {
    console.log(
      `Model = ${this.model} \nHP = ${this.hp}\nBrand = ${this.brand}`
    );
  }
}

import { CourseServices } from "./03-OOP-Design-Pattern";

const courseService = CourseServices.instance();

courseService.addCourse();

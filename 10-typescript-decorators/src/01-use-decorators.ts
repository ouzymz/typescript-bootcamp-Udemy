import { Log, LoggingLevel, Perf } from "./02-method-decorators";
import { SealClass } from "./03-class-decorator";
import { DatabaseId } from "./04-property-decorators";

// @DatabaseService()

//@SealClass(); seklinde de tanimlayabilirdik. Ama class decoratoru daha sade hale getirdigimiz icin constructor methodu input olarak yazdigimiz icin bunu bu sekilde yaptik.
// @SealClass
class DbService {
  /*secondly applied decorator*/ @Perf()
  /*firstly applied decorator*/
  @Log(LoggingLevel.DEBUG) //decorator errupt the function to add more funtionality to the aplied function.
  saveData(data: any) {
    console.log("saving data in the database...");
  }
}

class Course {
  @DatabaseId()
  id: string;
  title: string;

  constructor() {
    console.log(`CourseId: ${this.id}`);
  }
}

const db = new DbService();

db.saveData({ hello: "world" });

//runtime error verir cunku class decorator ile class propertylerini sealledik...
Object.defineProperty(DbService, "sayHello", {
  value: () => {
    console.log("Hello world");
  },
});

const coursede: Course = new Course();



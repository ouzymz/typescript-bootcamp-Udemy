
import { Log, LoggingLevel } from "./02-method-decorators";

// @SealClass()
// @DatabaseService()
class DbService { 
    // @Perf()
    @Log(LoggingLevel.DEBUG) //decorator errupt the function to add more funtionality to the aplied function.
    saveData(data:any){
        console.log("saving data in the database...");
    }

}

class Course {
    // @DatabaseId()
    id:string;
    title:string;
}

const db = new DbService();

db.saveData({hello:"world"})
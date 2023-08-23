import * as dotenv from "dotenv"; //bunu diger importlardan once cagirmamiz gerekiyor.

const result = dotenv.config();

import "reflect-metadata";
import { AppDataSource } from "../data-source";
import { Lesson } from "./lesson";
import { Course } from "./course";
import { User } from "./user";

async function deleteDb() {
    
    await AppDataSource.initialize();

    console.log(`Database connection ready.`);

    console.log("Clearing LESSONS table.");

    await AppDataSource.getRepository(Lesson).delete({});

    console.log("Clearing COURSES table.");

    await AppDataSource.getRepository(Course).delete({});

    console.log("Clearing USERS table.");

    await AppDataSource.getRepository(User).delete({});
}


deleteDb().then(()=>{
    console.log("Database is deleted.")
    process.exit();
}).catch(err => {
    console.error(`Error deleting databse.`, err);
})
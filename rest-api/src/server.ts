import * as dotenv from "dotenv"; //bunu diger importlardan once cagirmamiz gerekiyor.

const result = dotenv.config();

if (result.error) {
  console.log("Error loading environment variables, aborting..");
  process.exit(1);
} else {
  console.log(process.env.PORT);
}

import "reflect-metadata"; //typeORM kutuphanesi
import express from "express";
import { root } from "./routes/root";
import { isInteger } from "./utils";
import { logger } from "./logger"; //it must be called after the .env imported !!IMPORTANT
import { AppDataSource } from "./data-source";
import { getAllCourses } from "./routes/get-all-courses";
import { defaultErrorHandler } from "./middlewares/default-error-handler";
import { findCourseByUrl } from "./routes/find-course-by-url";
import { findLessonsForCourse } from "./routes/find-lessons-for-courses";
import { updateCourse } from "./routes/update-course";
import { createCourse } from "./routes/create-course";
import { deleteCourse } from "./routes/delete-course";
// import bodyParser from "body-parser";


const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

function setupExpress() {
  //middlewarelerin cagirilma sirasi onemli dikkat et
  
  app.use(cors({ origin: true })); //cors eklendi bu sayede globa fetchlere de respose atabilir uygulama calisirken.
  app.use(bodyParser.json());
  

  app.route("/").get(root); //HTTP GET REQUEST
  app.route("/api/courses").get(getAllCourses); //HTTP GET REQUEST
  app.route("/api/courses/:courseUrl").get(findCourseByUrl);
  app.route("/api/courses/:courseId/lessons").get(findLessonsForCourse); //   URL will look like = /api/courses/:courseId/lessons?pageNumber=5$pageSize=10
  app.route("/api/courses/:courseId").patch(updateCourse) //patch is for partial update, put is for totally update
  app.route("/api/courses").post(createCourse);
  app.route("/api/courses/:courseId").delete(deleteCourse);

  app.use(defaultErrorHandler); //Tells the express try to macth th erequest with any routes above,if smt goes wrong in any of th e routes, then you can ahead and use default error handler.

}

function startServer() {
  const portArgv = process.argv[2];
  // const port= parseInt(portArgv);  // parse int sikinti cikarabilir bunun yerine kenin intparse functionu taninlayabilirsin.

  let port: number;

  if (process.env.PORT !== undefined) {
    port = Number(process.env.PORT);
  } else {
    port = isInteger(portArgv) ? parseInt(portArgv) : 9000;
  }

  // console.log(process.argv); // package.json filedeki tsc-watch : comment argumentlerini gosterir

  app.listen(port, () => {
    logger.info(
      `HTTP REST API Server is now running at http://localhost:${port}`
    );
  });
}

AppDataSource.initialize()
  .then(() => {
    setupExpress();
    startServer();
  })
  .catch((err) => {
    logger.error("Error during datasource initializing", err);
    process.exit(1);
  });

import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { ifIntegerThrowError } from "../utils";
import { AppDataSource } from "../data-source";
import { Course } from "../models/course";

export async function updateCourse(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const courseId = request.params.courseId,
      changes = request.body; // to get body property as json file we need to add speacial middleware. "body-parser" ;
    ifIntegerThrowError(courseId);

//promise donen nesnelerde await kullanilir. methodun da async olmasi gerekir.

    const updatedCourse = await AppDataSource.createQueryBuilder()
      .update(Course)
      .set(changes)
      .where("id = :courseId", { courseId }) 
      .execute(); //to trigger.

      response.status(200).json({message:`Course with ${courseId} id was successfully updated!`})
  } catch (error) {
    logger.error(`Error occured while calling getAllCourses`);
    console.log(error);
    return next(error);
  }
}

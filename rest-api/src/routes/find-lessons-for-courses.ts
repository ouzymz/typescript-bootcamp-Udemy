import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { ifIntegerThrowError, isInteger } from "../utils";
import { AppDataSource } from "../data-source";
import { Lesson } from "../models/lesson";

export async function findLessonsForCourse(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
      logger.debug(`Called findLessonForCourse()`);
      const courseId = request.params.courseId,

      query = request.query as any,
      pageNumber = query?.pageNumber ?? "1",
      pageSize = query?.pageSize ?? "3"; //eger bir deger almiyorsa default valuesu "0" olsun diye belirtmek icin kullandik.
       
      ifIntegerThrowError(courseId, pageNumber, pageSize);
      
      const lessons = await AppDataSource.getRepository(Lesson)
      .createQueryBuilder("lessons")
      .where("lessons.courseId = :courseId", { courseId })
      .orderBy("lessons.seqNo")
      .skip(pageNumber * pageSize) // pageNumber = 1 , pageSize = 10 oldugunda we're gonna skip first 10 results
      .take(pageSize) //to say api we only want to take certain number of results
      .getMany(); //getmany ile an array of result bekledigimizi belirtttik.
      
      //getRepository() kullandigim yere await eklemem gerek yoksa kod calismaz!!!

    

    response.status(200).json({lessons});

  } catch (error) {
    logger.error(`Error calling findLessonsForCourse()`);
    return next(error);
  }
}



import { Response, Request, NextFunction } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../data-source";
import { Course } from "../models/course";

export async function getAllCourses(
  request: Request,
  response: Response,
  next: NextFunction //responsible for enchancing response
) {
  try {
    logger.debug(`Called getAllCourses()`);

    const courses = await AppDataSource.getRepository(Course)
      .createQueryBuilder("COURSES")
      .leftJoinAndSelect("COURSES.lessons", "LESSONS") // bu satir olmadan yalnizca courselari getirir bu satir ile courselarin icndeki lessons'lari da geitirir.
      .orderBy("COURSES.seqNo")
      .getMany();

    response.status(200).json({ courses });
  } catch (error) {
    logger.error(`Error occured while calling getAllCourses`);
    console.log(error);
    return next(error);
  }
}

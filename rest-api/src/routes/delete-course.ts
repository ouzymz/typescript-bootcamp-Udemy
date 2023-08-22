import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { ifIntegerThrowError } from "../utils";
import { AppDataSource } from "../data-source";
import { LessThan } from "typeorm";
import { Lesson } from "../models/lesson";
import { Course } from "../models/course";

export async function deleteCourse(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    logger.debug(`Called deleteCourse()`);
    const courseId = request.params.courseId;
    ifIntegerThrowError(courseId);
    AppDataSource.manager.transaction(async (transactionalEntityManager) => {
      await transactionalEntityManager
        .createQueryBuilder()
        .delete()
        .from(Lesson)
        .where("courseId = :courseId", { courseId })
        .execute();

      await transactionalEntityManager
        .createQueryBuilder()
        .delete()
        .from(Course)
        .where("id = :courseId", { courseId })
        .execute();
    });

    response.status(200).json({
        message:`Course deleted successfully ${courseId}`
    });
  } catch (error) {
    logger.error(`Error occured while calling getAllCourses`);
    console.log(error);
    return next(error);
  }
}

import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { calculatePasswordHash, isRequestParametersFilled } from "../utils";
import { AppDataSource } from "../data-source";
import { User } from "../models/user";
import { Repository } from "typeorm";

const crypto = require("crypto");

export async function createUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    logger.debug(`Called createUser()`);
    const { email, pictureUrl, password, isAdmin } = request.body; //object destruct

    isRequestParametersFilled(email, pictureUrl, password, isAdmin);

    const repository = AppDataSource.getRepository(User);

    const user = await repository
      .createQueryBuilder("users")
      .where("email= :email", { email })
      .getOne();

    if (user) {
      const message = `User with email ${email} already existed.`;
      logger.error(message);
      response.status(500).json({ message });
      return;
    }

    const passwordSalt = crypto.randomBytes(64).toString('hex');
    const passwordHash = await calculatePasswordHash(password,passwordSalt);

    const newUser = repository.create({
        email,
        pictureUrl,
        isAdmin,
        passwordHash,
        passwordSalt
    });

    await AppDataSource.manager.save(newUser);

    logger.info(`User ${email} has been created.`);

    response.status(200).json({
        email,
        pictureUrl,
        isAdmin
    });

  } catch (error) {
    logger.error(`Error occured while calling getAllCourses`);
    console.log(error);
    return next(error);
  }
}

import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { calculatePasswordHash, isRequestParametersFilled } from "../utils";
import { AppDataSource } from "../data-source";
import { User } from "../models/user";

const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

export async function login(
  request: Request,
  response: Response,
  next: NextFunction //responsible for enchancing response
) {
  try {
    logger.debug(`Called login()`);

    const { email, password } = request.body;

    isRequestParametersFilled(email, password);

    const user = await AppDataSource.getRepository(User)
      .createQueryBuilder("users")
      .where("email= :email", { email })
      .getOne();

    if (!user) {
      const message = "Login denied!!";
      logger.error(message);
      response.status(403).json({ message });
      return;
    }
    const passwordHash = await calculatePasswordHash(password, user.passwordSalt);

    if (passwordHash != user.passwordHash) {
      const message = "Login denied!!";
      logger.error(
        `${message}- user with ${email} has entered wrong password.`
      );
      response.status(403).json({ message });
      return;
    }

    logger.info(`User ${email} has now logged in.`);

    const { pictureUrl, isAdmin } = user;

    const authJwt = { userId: user.id, email, isAdmin }; //jasonWebtoken Payload

    const authJwtToken = await jwt.sign(authJwt, JWT_SECRET,{ expiresIn: 60 * 60 });


    
    response.status(200).json({
      user: { email, pictureUrl, isAdmin },
      authJwtToken,
    });
  } catch (error) {
    logger.error(`Error occured while calling getAllCourses`);
    console.log(error);
    return next(error);
  }
}

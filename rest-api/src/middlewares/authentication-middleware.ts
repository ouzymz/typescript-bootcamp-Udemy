import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

export interface RequestMore extends Request {
  user: any; // Extend Request type with "user" property
}

export function checkIfAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log(request.headers); //token kontrolu yaptık nasıl calıstını test ettık..

  const authJwtToken = request.headers.authorization?.split(" ")[1];

  console.log(authJwtToken);

  if (!authJwtToken) {
    logger.info(`The authentication JWT is not present, access denied.`);
    response.sendStatus(403);
    return;
  }

  checkJwtValidity(authJwtToken)
    .then((user) => {
      logger.info(`Authentication JWT successfully decoded:`, user);
      (request as RequestMore).user = user;
      next();
    })
    .catch((err) => {
      logger.error(
        `Could not validate the authentication JWT, access denied.`,
        err
      );
      response.sendStatus(403);
    });
}

async function checkJwtValidity(authJwtToken: string) {
  const user = await jwt.verify(authJwtToken, JWT_SECRET);

  logger.info("Found user details in JWT:", user);

  return user;
}

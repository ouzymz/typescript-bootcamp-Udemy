import * as winston from "winston";

export const logger = winston.createLogger({
  level: "debug", //logger seviyesi en dusukte ayarlanirsa o seviyenin ustundeki butun loglari kaydeder.
  format: winston.format.json({ space: 4 }),
  transports: [
    new winston.transports.File({ filename: "logs/all.log" }),
    new winston.transports.File({ filename: "logs/error.log", level: "error"}),
  ]
});

if (process.env.NODE_ENV != "production") {
  logger.add(
    new winston.transports.Console({ format: winston.format.simple() })
  );
}

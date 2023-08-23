export function isInteger(input: string) {
  return input?.match(/^\d+$/) ?? false; // "/^d+$" ifadesi decimal number ve yalnizca 1 deger olup olmadigini check eder.
}

const crypto = require("crypto");
const util = require("util");

const hashPassword = util.promisify(crypto.pbkdf2); //crypto.pbkdf2'yi async kullanabilmek icin yaptik

export function ifIntegerThrowError(...params: any[]): void {
  for (const param in params) {
    if (!isInteger(param)) {
      throw `Invalid property :: ${param} `;
    }
  }
}

export function isRequestParametersFilled ( ...params:any[]):void{
  for(const param in params) {
    if(!param) throw "Could not extract paramaters grom the request. Please fill all parameter corectly";
  }
}

export async function calculatePasswordHash(
  plainTextPassword: string,
  passwordSalt: string
):Promise<string> {
  const passwordHash = await hashPassword(
    plainTextPassword,
    passwordSalt,
    1000,
    64,
    "sha512"
  );

  return passwordHash.toString("hex");
}

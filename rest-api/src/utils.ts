export function isInteger(input:string){
    return input?.match(/^\d+$/) ?? false; // "/^d+$" ifadesi decimal number ve yalnizca 1 deger olup olmadigini check eder.  
}

export function ifIntegerThrowError(...params: any[]): void {
    for (const param in params) {
      if (!isInteger(param)) {
        throw `Invalid property :: ${param} `;
      }
    }
  }
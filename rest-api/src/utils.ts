export function isInteger(input:string){
    return input?.match(/^\d+$/) ?? false; // "/^d+$" ifadesi decimal number ve yalnizca 1 deger olup olmadigini check eder.  
}
export enum LoggingLevel {
  ERROR = "ERROR",
  INFO = "INFOR",
  WARN = "WARN",
  DEBUG = "DEBUG",
  TRACE = "TRACE",
}

const appMaxLoggingLevel = LoggingLevel.DEBUG;

export function Log(level):MethodDecorator {
    console.log("Applting @Log decorator");

    return (target:any,propertyKey:string|symbol,descriptor: PropertyDescriptor)=>{
        // console.log("target:", target );
        // console.log("propertyKey:", propertyKey );
        // console.log("descriptor:", descriptor );

        const originalFunction = descriptor.value;

        descriptor.value = function(...args: any[]) { //burada arrow function kullanamayiz. this means that this functipn has its own context that we are passing here.

            if(level <= appMaxLoggingLevel){ 
                console.log(`>> Log: ${String(propertyKey)}, ${JSON.stringify(args)}`)
            }
            originalFunction.apply(this,args);

        }
    };
}

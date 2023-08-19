// export function SealClass(): ClassDecorator {
//     return(constructor: Function) => {
//         Object.seal(constructor); //Objeyi dokunulmaz hale getirir.
//         Object.seal(constructor.prototype); //Objeyi dokunulmaz hale getirir.
//     }
// }


//SealClass input almadigi icin asagidaki gibi daha az satir ile yazilabilir.
export function SealClass(constructor: Function) {
  Object.seal(constructor); //Objeyi dokunulmaz hale getirir.
  Object.seal(constructor.prototype); //Objeyi dokunulmaz hale getirir.
}

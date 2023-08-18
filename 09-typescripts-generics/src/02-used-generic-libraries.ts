
//generic type promise kullanabilmek icin tsconfig librarylerine DOM ekledik.  
const promise = new Promise<string>((resolve,reject) => {
    resolve("hello world");
});

promise.then(val => {

})
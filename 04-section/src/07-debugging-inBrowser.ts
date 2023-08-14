const courseName ="Typescript Bootcamp";

debugger;

if (courseName) {
    const subtitle = "Learn the language, build practical projects";
    printCourseName(courseName);
}

function printCourseName(name : string) {
    debugger;
    console.log("The course name is " + name.toUpperCase());
}

//Debug yapabilmek icin kodun takip etmek istedigimiz yerlerine debugger koyduk. Html dosyasi actik ve bu html hazirladigimiz scripti verdik. 
//ts formatinda gormek istersem tsc --sourceMap <filename> (file.js.map dosyasini olusturur..)

//browser uzerinden debug atmek icin debug tagleri olan program npm start ile calistirilir. browser uzerinden debug takibi yapilir. browser acildigine refresh yapmak gerekir.

//node uzerinden debug takibi yapmak icin ts.map klassoru olustrulduktan sonra 
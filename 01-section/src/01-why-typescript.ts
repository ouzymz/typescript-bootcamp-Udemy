const tryName = "Typescript Bootcamp";

//JS'te type kontrolu zorunlu tutulmaz ve runtime hatasi fazladir. TS'te ise bu complation kisminda hata vererek isimizi kolaylastirir.

// const deletedName = "Oguzhan";  --  Bu degiskeni kaldirdigim halde compilation kisminda hata vermiyor.

printCourseName(tryName);

// printCourseName(100); //run time hatasi verir.

// printCourseName([1,2,"Oguzhan"]); //run time hatasi verir.

function printCourseName(name:string){
    console.log("The course name is" + name.toUpperCase());
}

//type annotations is not transferred into js file  
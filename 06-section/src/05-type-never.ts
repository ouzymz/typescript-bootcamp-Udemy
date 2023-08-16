// let neverValue : never = undefined; //hatav verir

// neverValue["property"] = 10; //hatav verir

type BookStatus = "draft" | "published";

let bookStatus : BookStatus;

if (bookStatus =="draft"){
    
}
else if(bookStatus =="published"){

}
else {
   unexpectedError(bookStatus);
}


function unexpectedError ( value:never){
    throw new Error(`Unexpected value: ${value}`);
}
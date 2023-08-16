interface HasId {
    id:string;
}


interface HasTitle{
    title:string,
    description: string
}

type Apple = HasId&HasTitle;


const applebee:Apple = {
    id:"1",
    title:"apple",
    description:"elma"
}
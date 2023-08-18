export interface Course{
    title:string;
    subtitle:string;
    lessonCount:number;
}


export function updateCourse(courseId:string, update:Course){
    
}

// updateCourse("1",{title:"new title"});
// updateCourse("1",{title:"new title",subtitle:"new subtitle"}); //hata verir. cunku interface optional degil.


//OPTIONAL INTERFACE
export interface CourseUpdate{
    title?:string;
    subtitle?:string;
    lessonCount?:number;
}

export function updateCourseUpdate(courseId:string, update:CourseUpdate){
    
}


updateCourseUpdate("1",{title:"new title"});
updateCourseUpdate("1",{title:"new title",subtitle:"new subtitle"}); //hata verir. cunku interface optional degil.



//bunun yerine partial generic kullanabiliriz 

export function updateCourse2(courseId:string, update:Partial<Course>){
    
}

updateCourse2("1",{title:"new title"});
updateCourse2("1",{title:"new title",subtitle:"new subtitle"});
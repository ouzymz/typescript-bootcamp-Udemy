
interface Course {
    title:string,
    subtitle:string,
    lessonsCount:number,
}

const course : Course ={
    title:"oguzhan",
    subtitle:"yilmaz",
    lessonsCount: 10
}

function printCourse(course:Course) {

    const {...properties} = course; //tanimlanan nesnenin elemanlarini tek elemana cektik.

    console.log(`Title: ${properties.title}, Subtitle: ${properties.subtitle}, LessonsCount: ${properties.lessonsCount}.`)
}

printCourse(course);
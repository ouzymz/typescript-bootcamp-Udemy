
interface Course12 {
    title:string,
    subtitle:string,
    lessonsCount:number,
}

const course12 : Course12 ={
    title:"oguzhan",
    subtitle:"yilmaz",
    lessonsCount: 10
}

function printCourse(course:Course12) {

    const {...properties} = course; //tanimlanan nesnenin elemanlarini tek elemana cektik.

    console.log(`Title: ${properties.title}, Subtitle: ${properties.subtitle}, LessonsCount: ${properties.lessonsCount}.`)
}

printCourse(course12);
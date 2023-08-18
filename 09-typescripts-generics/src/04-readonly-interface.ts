interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;
}

// interface ImmutableCourse {
//     readonly title:string;
//     readonly subtitle:string;
//     readonly lessonsCount:number;
// } // ========>>:ImmutableCourse yapamak yerine === :Readonly<Course> kullanmak daha mantikli

//
function freezeCourse(course:Course):Readonly<Course> {
    return Object.freeze(course);
}

const frozen = freezeCourse({title:"typescript",subtitle:"bootcamp",lessonsCount:20});

// frozen.title = "oguzhan"; //hata verir cunku Immutable degil 
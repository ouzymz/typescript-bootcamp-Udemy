interface Course1 {
  title: string;
  lessonsCount: number;
}

const course1: Course1 = {
  title: "typescript",
  lessonsCount: 5,
};

const course2: Course1 = {
  title: "javascript",
  lessonsCount: 5,
};

function printCourses1(message: string, ...courses: Course1[]) {
  console.log(message);

  for (let course of courses) {
    console.log(course.title);
  }
}

printCourses1("Welcome to the developers University",course1,course2,{title:"C#",lessonsCount:5} as Course1);

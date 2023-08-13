let course: { title: string; tutor: string; stats: { lessonCount: number } } = {
  title: "Typescript",
  tutor: "Omer Akbas",
  stats: { lessonCount: 5 },
};

const newCourse = course;

newCourse.stats = { lessonCount: 4 };

console.log(newCourse); //OUTPUT : { title: 'Typescript', tutor: 'Omer Akbas', stats: { lessonCount: 4 } }
course.stats.lessonCount = 55;
console.log(newCourse); //OUTPUT :--55

let course2: { title: string; tutor: string; stats: { lessonCount: number } } =
  {
    title: "Typescript",
    tutor: "Omer Akbas",
    stats: { lessonCount: 5 },
  };

const newCourse2 = {
  title: course2.title,
  tutor: course2.tutor,
  stats: {lessonCount:course2.stats.lessonCount}
};

console.log(newCourse2); //OUTPUT : { title: 'Typescript', tutor: 'Omer Akbas', stats: { lessonCount: 5 } }
course2.stats.lessonCount = 55;
console.log(newCourse2);//OUTPUT : { title: 'Typescript', tutor: 'Omer Akbas', stats: { lessonCount: 5 } }

let course3: { title: string; tutor: string; stats: { lessonCount: number } } =
  {
    title: "Typescript",
    tutor: "Omer Akbas",
    stats: { lessonCount: 5 },
  };

const newCourse3 = {
  title: course3.title,
  tutor: course3.tutor,
  stats: course3.stats,
};

console.log(newCourse3); //OUTPUT : { title: 'Typescript', tutor: 'Omer Akbas', stats: { lessonCount: 5 } }
course3.stats.lessonCount = 55;
console.log(newCourse3);//OUTPUT :--55

//shallow Copy

const newestCourse = {...course3};

course3.stats.lessonCount = 5;
console.log(newestCourse); //OUTPUT : { title: 'Typescript', tutor: 'Omer Akbas', stats: { lessonCount: 5 } }
course3.stats.lessonCount = 55;
console.log(newestCourse);//OUTPUT :--55

export{}; // to declare ts file as a module.

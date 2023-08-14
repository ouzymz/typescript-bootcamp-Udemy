interface Course {
  title: string;
  subtitle: string;
  lessonCount: number;
}


function createCourse1(title: string, subtitle: string, lessonCount: number) {
  console.log(
    `Creating a Course with title: ${title} \nsubtitle: ${subtitle} \nlessonCount: ${lessonCount}`
  );

  return {
    title: title,
    subtitle: subtitle,
    lessonCount: lessonCount,
  } as Course;
}

type CreateCourse = (
    title: string,
    subtitle: string,
    lessonCount: number
  ) => Course; //input ve output type'i bu sekilde belirlenir.
  

const createCourse: CreateCourse = (
  title: string,
  subtitle: string,
  lessonCount: number
) => {
  console.log(
    `Creating a Course with title: ${title} \nsubtitle: ${subtitle} \nlessonCount: ${lessonCount}`
  );

  return {
    title: title,
    subtitle: subtitle,
    lessonCount: lessonCount,
  } as Course;
};

const course = createCourse("Python", "Pandas", 44);

console.log(typeof course);

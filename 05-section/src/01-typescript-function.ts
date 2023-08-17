interface Course {
  title: string;
  subtitle: string;
  lessonCount: number;
}

//NORMAL FUNCTION DECLARING
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

//2ND VERSION OF FUNCTION DECLARING ARROWLIKE
const createCourse2: CreateCourse = (
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

type callbackType = (course: Course) => void;

const createCourse3 = (
  title: string,
  subtitle: string,
  lessonCount: number,
  callback: callbackType
) => {
  console.log(
    `Creating a Course with title: ${title} \nsubtitle: ${subtitle} \nlessonCount: ${lessonCount}`
  );

  callback({
    title: title,
    subtitle: subtitle,
    lessonCount: lessonCount,
  } as Course);

//   callback("ahmet"); //callback belirtilen typeta verilmedigi icin hata verir.

  return {
    title: title,
    subtitle: subtitle,
    lessonCount: lessonCount,
  } as Course;
};

const course = createCourse1("Python", "Pandas", 44);

console.log(typeof course);

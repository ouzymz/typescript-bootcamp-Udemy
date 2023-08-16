interface Course {
  title: string;
  subtitle: string;
  lessonCount: number;
}

type CourseRecord = [string, string, number]; //tuple SAMPLE

const courseRecord: CourseRecord = [
  "Typescript Bootcamp",
  "Learn how to code",
  100,
];
//NOT ESSENTIAL 


/// return'u type olarak belirlemek ve custom obkect input icin belirlenebilir.
//library yazarken cok fazla ayni tip donus oldugunda tuple kullanmak mantikli olabilir.

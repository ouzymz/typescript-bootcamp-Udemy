interface Course {
  title: string;
  subtitle: string;
  lessonCountDeneme: number;
}

const title = "Typescript Bootcamp",
  subtitle = "Learn how to code in Typescript",
  lessonCountDeneme = 10;

const course: Course = {
  title,
  subtitle,
  lessonCountDeneme
};

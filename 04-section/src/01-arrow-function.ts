//Normal Declaration of A Function with callback function

function saveCourse(course: { title: string }, callback: Function) {
  const courseScoped = course;
  setTimeout(function () {
    callback(this.courseScoped?.title ?? "success");
  }, 1000);
}

saveCourse({ title: "TypeScript Bootcamp" }, function () {
  console.log("Save succesful.");
});

//Arrow Function Declarion

function saveCourseArrow(course: { title: string }, callback: Function) {
  // this.courseBook = course;
  setTimeout(() => {
    callback(course?.title ?? "success");
  }, 1000);
}

saveCourseArrow({ title: "Oguzhan" }, () => console.log("Save succesfull.")); 

const readyCallback = () => console.log("Save succesful"); //callback functionunu onceden declere edebiliriz.

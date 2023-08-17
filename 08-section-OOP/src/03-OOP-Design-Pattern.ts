export class CourseServices {
    private static INSTANCE : CourseServices;

    private constructor(){
        console.log(`THE COURSE SERVICE WAS INITIALIZED.`)

    }

    static instance() {
        if(!CourseServices.INSTANCE) {
            CourseServices.INSTANCE = new CourseServices();
        }
        return CourseServices.INSTANCE;
    }

    addCourse(){
        console.log("Course added!!")
    }


}
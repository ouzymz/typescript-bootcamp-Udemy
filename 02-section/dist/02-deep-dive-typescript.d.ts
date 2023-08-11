declare let variableExample: boolean;
declare const variableExample2: string;
declare const lessonsCount: number;
declare const total: number;
declare const title: string;
declare const subtitle: string;
declare const fullTitle: string;
declare const published: boolean;
declare let backTick: string;
declare let normalTick: string;
declare let typeSample: string;
declare let typeSampleNum: number;
declare let typeSampleBoolean: boolean;
declare function typeInference(title: string, number: number, isBoolean: boolean): void;
declare const student: {
    title: string;
    age: number;
    department: string;
};
declare let courseNested: {
    title: string;
    age: number;
    department: string;
    language: {
        CSharp: string;
        TypeScript: string;
    };
};
declare let car: string;
declare let course: {
    title: any;
};
declare let courseCoalesing: any;
declare const titleCore: any;
declare const numbers: number[];
declare enum bookType {
    Free = "free",
    Premium = "premium",
    Private = "private"
}
declare const book: {
    title: string;
    pageNumber: number;
    type: bookType;
};
declare let lessonsCoount: any;
declare let anyTypeNumbers: any[];
declare function printCourse(title: any, lessonsCoount: any): void;
declare let uniqueIdentifier: number | string;
declare const keys: (number | string)[];
declare let courseId: number | null;
declare let departmantId: number;
declare let carId: number | null;
declare const pencil = "black";
declare let pageSize: 10 | 15 | 20;
type CourseStatus = "draft" | "published" | "unpublished";
declare let courseStatus: CourseStatus;
type ExtraCourses = {
    title: string;
    subtitle: string;
    lessonCount: number;
};
declare let extraCourse: ExtraCourses;
interface interfaceCourse {
    title: string;
    subtitle: string;
    number: number;
}
declare const input: HTMLInputElement;
declare let inputFirst: string;
declare const input3: string;

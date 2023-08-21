import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course";

@Entity({name:"LESSONS"})
export class Lesson {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    duration:string;

    @Column()
    seqNo:number;   

    //class relations
    @ManyToOne(()=> Course, course => course.lessons)
    @JoinColumn({name:"courseId"})
    course:Course;
}
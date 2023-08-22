import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Lesson } from "./lesson";

@Entity({
    name:"COURSES" //REFERS TABLE NAME
})
export class Course {
    
    @PrimaryGeneratedColumn() //REFERS THE COLUMN IS PRIMARY KEY
    id:number;

    @Column()
    seqNo:number;

    @Column()
    url:string;

    @Column()
    title:string;

    @Column()   
    iconUrl:string;
    
    @Column()
    longDescription:string;
    
    @Column()
    category: string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    lastUpdatedAt:Date;

    //class relations
    @OneToMany(()=>Lesson,lesson=>lesson.course)
    lessons:Lesson[];
}


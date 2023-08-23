import { Column, CreateDateColumn, Entity,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name:"USERS" //REFERS TABLE NAME
})
export class User {
    
    @PrimaryGeneratedColumn() //REFERS THE COLUMN IS PRIMARY KEY
    id:number;

    @Column()
    email:string;

    @Column()
    passwordHash:string; 

    @Column()
    passwordSalt:string;

    @Column()   
    pictureUrl:string;
    
    @Column()
    isAdmin:boolean;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    lastUpdatedAt:Date;

}


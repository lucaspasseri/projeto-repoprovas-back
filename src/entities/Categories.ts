import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import Exam from "./Exams";

@Entity("categories")
export default  class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Exam, exam => exam.categoryId)
    exams: Exam[];
}
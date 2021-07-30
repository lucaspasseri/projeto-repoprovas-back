import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("exams")
export default  class Exam{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @Column()
    categoryId: number;

    @Column()
    subjectId: number;

    @Column()
    professorId: number;
}
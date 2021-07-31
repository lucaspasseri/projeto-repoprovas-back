import { Entity,PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToMany, ManyToOne } from "typeorm";

import Subject from "./Subjects";
import Professor from "./Professors";
import Exam from "./Exams";

@Entity("matches")
export default class Match{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subjectId: number;

    @Column()
    professorId: number;

    @ManyToOne(() => Professor, professor => professor.id)
    professor: Professor;

    @ManyToOne(() => Subject, subject => subject.id)
    subject: Subject;

    @OneToMany(() => Exam, exam => exam.matchId) 
    exams: Exam[];
}
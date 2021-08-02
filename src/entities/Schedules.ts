import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./Subjects";
import Period from "./Periods";

@Entity("schedules")
export default class Schedule{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subjectId: number;

    @Column()
    periodId: number; 

    @ManyToOne(() => Subject, subject => subject.id)
    subject: Subject;

    @ManyToOne(() => Period, period => period.id)
    period: Period;
}
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany} from "typeorm";
import Match from "./Matches";
import Schedule from "./Schedules";

@Entity("subjects")
export default  class Subject{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Match, match => match.subjectId)
    matches: Match[];

    @OneToMany(() => Schedule, schedule => schedule.subjectId)
    schedules: Schedule[];
}
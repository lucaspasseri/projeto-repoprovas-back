import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany} from "typeorm";
import Match from "./Matches";
import Period from "./Periods";

@Entity("subjects")
export default  class Subject{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Match, match => match.subjectId)
    matches: Match[];

    @ManyToMany(() => Period) @JoinTable()
    periods: Period[];
}
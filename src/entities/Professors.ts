import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import Match from "./Matches";

@Entity("professors")
export default  class Professor{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Match, match => match.professorId)
    matches: Match[];
}
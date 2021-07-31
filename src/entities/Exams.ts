import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import Category from "./Categories";
import Match from "./Matches";

@Entity("exams")
export default class Exam{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @Column()
    categoryId: number;

    @Column()
    matchId: number;

    @ManyToOne(()=> Match, match => match.id)
    match: Match;

    @ManyToOne(() => Category, category => category.id)
    category: Category;
}
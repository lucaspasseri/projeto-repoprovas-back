import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import Schedule from "./Schedules";

@Entity("periods")
export default  class Period{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Schedule, schedule => schedule.periodId)
    schedules: Schedule[];
}
import { getRepository } from "typeorm";
import Subject from "../entities/Subjects";

export async function getAll(){
    const allSubjects = await getRepository(Subject).find();

    return allSubjects;
}

interface createSubject {
    name: string
}

export async function createOne(name:string){

    const subjectData: createSubject = {
        name
    }

    const newSubject = await getRepository(Subject).create(subjectData);

    const result  = await getRepository(Subject).save(newSubject);
    
    return newSubject;
}
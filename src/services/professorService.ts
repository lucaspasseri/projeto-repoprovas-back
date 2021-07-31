import { getRepository } from "typeorm";
import Professor from "../entities/Professors";

export async function getAll(){
    const allProfessors = await getRepository(Professor).find();

    return allProfessors;
}

interface createProfessor {
    name: string
}

export async function createOne(name:string){

    const professorData: createProfessor = {
        name
    }

    const newProfessor = await getRepository(Professor).create(professorData);

    const result  = await getRepository(Professor).save(newProfessor);
    
    return newProfessor;
}
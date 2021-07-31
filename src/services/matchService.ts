import { getRepository } from "typeorm";
import Professor from "../entities/Professors";
import Subject from "../entities/Subjects";
import Match from "../entities/Matches";

export async function getAll(){
    const allMatches = await getRepository(Match).find();

    return allMatches;
}

interface createMatch {
    professorId: number,
    subjectId: number
}

export async function createOne(professorId: number, subjectId: number){

    const validProfessor = await getRepository(Professor).findOne({id: professorId});
    console.log(validProfessor);
    const validSubject = await getRepository(Subject).findOne({id: subjectId});
    console.log(validSubject);

    if(!validProfessor || !validSubject){
        return null;
    }

    const matchData: createMatch = {
        professorId,
        subjectId
    }

    const newMatch = await getRepository(Match).create(matchData);

    const result  = await getRepository(Match).save(newMatch);
    
    return newMatch;
}
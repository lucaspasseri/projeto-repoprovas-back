import { Request, Response } from "express";
import * as matchService from "../services/matchService";

export async function getAll(req: Request, res: Response){
    try {
        const allMatches = await matchService.getAll();
        res.send(allMatches);

    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function createOne(req: Request, res: Response){
    try {

        // validação e sanitização

        const { professorId, subjectId } = req.body;

        if(!Number(professorId) || !Number(subjectId)){
            return res.sendStatus(400);
        }

        const newMatch= await matchService.createOne(professorId, subjectId);

        if(newMatch===null){
            return res.sendStatus(400);
        }
        res.send(newMatch);

    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}
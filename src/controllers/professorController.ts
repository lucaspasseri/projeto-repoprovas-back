import { Request, Response } from "express";
import * as professorService from "../services/professorService"

export async function getAll(req: Request, res: Response){
    try {
        const allProfessors = await professorService.getAll();
        res.send(allProfessors);

    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function createOne(req: Request, res: Response){
    try {

        // validação e sanitização

        const { name } = req.body;

        if(!name){
            return res.sendStatus(400);
        }

        const newProfessor = await professorService.createOne(name);
        res.send(newProfessor);

    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}
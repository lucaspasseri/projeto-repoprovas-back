import { Request, Response } from "express";
import * as subjectService from "../services/subjectService";

export async function getAll(req: Request, res: Response){
    try {
        const allSubjects = await subjectService.getAll();
        res.send(allSubjects);

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

        const newSubject = await subjectService.createOne(name);
        res.send(newSubject);

    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}
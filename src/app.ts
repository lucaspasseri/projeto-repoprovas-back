import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as professorController from "./controllers/professorController";
import * as subjectController from "./controllers/subjectController";
import * as matchController from "./controllers/matchController";
//import Category from "./entities/Categories";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("OK!");
});

app.get("/professors", professorController.getAll);
app.post("/professors", professorController.createOne);
app.get("/subjects", subjectController.getAll);
app.post("/subjects", subjectController.createOne);
app.get("/matches", matchController.getAll);
app.post("/matches", matchController.createOne);
/* app.get("/categories", categoryController.getAll);
app.post("/categories", categoryController.createOne); */

export async function init () {
  await connectDatabase();
}

export default app;

import { getRepository } from "typeorm";

import Professor from "../../src/entities/Professors";

export async function createProfessor () {
  const professor = await getRepository(Professor).create({
    name: "João Carlos da Silva"
  });

  await getRepository(Professor).save(professor);

  return professor;
}

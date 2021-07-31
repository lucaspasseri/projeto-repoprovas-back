import { getRepository } from "typeorm";
import Professor from "../../src/entities/Professors";

export async function clearDatabase () {
  await getRepository(Professor).delete({});
}

import { getRepository} from "typeorm";
import Professor from "../../src/entities/Professors";

export async function clearDatabase () {
  const repository = getRepository(Professor);
  await repository.query(
    `TRUNCATE professors RESTART IDENTITY CASCADE`
  );
}

//await getRepository(Professor).delete({}); 
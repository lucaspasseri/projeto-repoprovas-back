import {MigrationInterface, QueryRunner} from "typeorm";

export class RepoprovasNoSeed1627767662181 implements MigrationInterface {
    name = 'RepoprovasNoSeed1627767662181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818"`);
        await queryRunner.query(`CREATE TABLE "matches" ("id" SERIAL NOT NULL, "subjectId" integer NOT NULL, "professorId" integer NOT NULL, CONSTRAINT "PK_8a22c7b2e0828988d51256117f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "subjectId"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "professorId"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "matchId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "matches" ADD CONSTRAINT "FK_e055fef7948895e61c60c6f648d" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "matches" ADD CONSTRAINT "FK_47c6c16d666751a65267b548875" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_3187d104556d8101ad9990b1623" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_3187d104556d8101ad9990b1623"`);
        await queryRunner.query(`ALTER TABLE "matches" DROP CONSTRAINT "FK_47c6c16d666751a65267b548875"`);
        await queryRunner.query(`ALTER TABLE "matches" DROP CONSTRAINT "FK_e055fef7948895e61c60c6f648d"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "matchId"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "professorId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "subjectId" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "matches"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

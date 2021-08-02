import {MigrationInterface, QueryRunner} from "typeorm";

export class FinalForm1627913765608 implements MigrationInterface {
    name = 'FinalForm1627913765608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules" ("id" SERIAL NOT NULL, "subjectId" integer NOT NULL, "periodId" integer NOT NULL, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_651f2a89f77493526bff6115412" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_14eed2fb47b784d716e98967df8" FOREIGN KEY ("periodId") REFERENCES "periods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_14eed2fb47b784d716e98967df8"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_651f2a89f77493526bff6115412"`);
        await queryRunner.query(`DROP TABLE "schedules"`);
    }

}

/*
  Warnings:

  - You are about to drop the `alignment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `characters` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `lineages` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `organizations` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_alignmentId_fkey";

-- DropTable
DROP TABLE "alignment";

-- CreateTable
CREATE TABLE "alignments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "alignments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alignments_name_key" ON "alignments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "characters_name_key" ON "characters"("name");

-- CreateIndex
CREATE UNIQUE INDEX "lineages_name_key" ON "lineages"("name");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_name_key" ON "organizations"("name");

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_alignmentId_fkey" FOREIGN KEY ("alignmentId") REFERENCES "alignments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

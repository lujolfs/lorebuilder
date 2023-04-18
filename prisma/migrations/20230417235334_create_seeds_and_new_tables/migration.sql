-- CreateTable
CREATE TABLE "lineages" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "maxAge" INTEGER NOT NULL,
    "adultAge" INTEGER NOT NULL,
    "isPlayable" BOOLEAN DEFAULT false,
    "description" TEXT,

    CONSTRAINT "lineages_pkey" PRIMARY KEY ("id")
);

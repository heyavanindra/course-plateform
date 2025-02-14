-- CreateTable
CREATE TABLE "post" (
    "id" DOUBLE PRECISION NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "post_id_key" ON "post"("id");

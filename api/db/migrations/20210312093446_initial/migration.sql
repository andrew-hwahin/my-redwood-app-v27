-- CreateTable
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample.email_unique" ON "UserExample"("email");

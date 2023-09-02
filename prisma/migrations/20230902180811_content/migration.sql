/*
  Warnings:

  - Added the required column `content` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
INSERT INTO "new_Course" ("description", "id", "name", "path") SELECT "description", "id", "name", "path" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_name_key" ON "Course"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

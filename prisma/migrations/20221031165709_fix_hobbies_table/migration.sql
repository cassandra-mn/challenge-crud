/*
  Warnings:

  - You are about to drop the column `hobbie` on the `Hobbies` table. All the data in the column will be lost.
  - The primary key for the `User_Hobbies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hobbieId` on the `User_Hobbies` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hobby]` on the table `Hobbies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hobby` to the `Hobbies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hobbyId` to the `User_Hobbies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Hobbies` DROP COLUMN `hobbie`,
    ADD COLUMN `hobby` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User_Hobbies` DROP PRIMARY KEY,
    DROP COLUMN `hobbieId`,
    ADD COLUMN `hobbyId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`userId`, `hobbyId`);

-- CreateIndex
CREATE UNIQUE INDEX `Hobbies_hobby_key` ON `Hobbies`(`hobby`);

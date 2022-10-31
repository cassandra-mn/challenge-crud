/*
  Warnings:

  - You are about to drop the column `hobbies` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `hobbies`;

-- CreateTable
CREATE TABLE `Hobbies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hobbie` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Hobbies` (
    `userId` INTEGER NOT NULL,
    `hobbieId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `hobbieId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - You are about to drop the `User_Hobbies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User_Hobbies`;

-- CreateTable
CREATE TABLE `UserHobbies` (
    `userId` INTEGER NOT NULL,
    `hobbyId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `hobbyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

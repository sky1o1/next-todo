/*
  Warnings:

  - You are about to drop the column `authorId` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_authorId_fkey";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "authorId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";

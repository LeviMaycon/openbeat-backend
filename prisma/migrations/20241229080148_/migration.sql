/*
  Warnings:

  - You are about to drop the column `userId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[customerId,musicId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- DropIndex
DROP INDEX "Like_userId_musicId_key";

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "userId",
ADD COLUMN     "customerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "userId",
ADD COLUMN     "customerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Like_customerId_musicId_key" ON "Like"("customerId", "musicId");

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

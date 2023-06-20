-- CreateTable
CREATE TABLE `Anime` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `episodes` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `aired` VARCHAR(191) NOT NULL,
    `premiered` VARCHAR(191) NOT NULL,
    `producers` VARCHAR(191) NOT NULL,
    `studios` VARCHAR(191) NOT NULL,
    `genres` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `synopsis` TEXT NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

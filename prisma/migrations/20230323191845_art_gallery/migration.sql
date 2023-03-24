-- CreateTable
CREATE TABLE `ArtGallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `artName` VARCHAR(255) NOT NULL,
    `artistName` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `imageURL` VARCHAR(500) NOT NULL,
    `lat` VARCHAR(255) NOT NULL,
    `lag` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `ArtGallery_artName_key`(`artName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

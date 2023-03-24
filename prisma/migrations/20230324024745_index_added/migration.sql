-- CreateIndex
CREATE FULLTEXT INDEX `ArtGallery_artName_idx` ON `ArtGallery`(`artName`);

-- CreateIndex
CREATE FULLTEXT INDEX `ArtGallery_artName_artistName_location_idx` ON `ArtGallery`(`artName`, `artistName`, `location`);

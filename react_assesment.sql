-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: art_gallery
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('947f3f33-03e3-4d35-b354-56819fddc936','bd42707ec28a5383b1a2cf3def85c85679b2e6632c98da7a3b5483891eec3844','2023-03-24 02:58:04.968','20230323191845_art_gallery',NULL,NULL,'2023-03-24 02:58:04.869',1),('9ff931f6-db1f-4333-9729-a3a79a0e072a','d95603803aa5d28c88f71330750257c9121f2762adf286d39589db472cae34ac','2023-03-24 02:58:05.799','20230324024745_index_added',NULL,NULL,'2023-03-24 02:58:04.982',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artgallery`
--

DROP TABLE IF EXISTS `artgallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artgallery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `artName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `artistName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageURL` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ArtGallery_artName_key` (`artName`),
  FULLTEXT KEY `ArtGallery_artName_idx` (`artName`),
  FULLTEXT KEY `ArtGallery_artName_artistName_location_idx` (`artName`,`artistName`,`location`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artgallery`
--

LOCK TABLES `artgallery` WRITE;
/*!40000 ALTER TABLE `artgallery` DISABLE KEYS */;
INSERT INTO `artgallery` VALUES (1,'Monalisa painting','Leonardo da Vinci','Lovure museum, Paris','https://cdn.pixabay.com/photo/2013/01/05/21/02/art-74050_960_720.jpg','48.8606111','2.3354553'),(2,'Cool Camel','Studio On','Government Museum Chennai','https://cdn.g-1.com/wp-content/uploads/2022/07/Cool-Camel.jpg','13.0705924','80.2543191'),(3,'Fatima Hand II','James Domain','Museum of the future, Dubai','https://cdn.g-1.com/wp-content/uploads/2022/07/FATIMA-HANDS-II.jpg','25.2192034','55.2797441'),(4,'Happy Together','Studio On','Government Museum Chennai','https://cdn.g-1.com/wp-content/uploads/2022/07/Happy-Together-.jpg','13.0705924','80.2543191'),(5,'Calm Feeling\n','James Domain','Museum of the future, Dubai','https://cdn.g-1.com/wp-content/uploads/2022/07/CALM-FEELING.jpg','25.2192034','55.2797441'),(6,'Instinct I','Khalid Shahin','Smithsonian National Air and Space Museum','https://cdn.g-1.com/wp-content/uploads/2022/07/instinct-01.jpg','35.812683','-104.8920387'),(7,'Journey Through Arabian ','Studio On','Old museum, Chennai','https://cdn.g-1.com/wp-content/uploads/2022/07/Journey-through-Arabian-Doors_Green-Landscape.jpg','48.8606111','2.3354553'),(8,'Desert Palms','Gallery One','National Museum, New Delhi','https://cdn.g-1.com/wp-content/uploads/2022/07/DESERT-PALMS-1.jpg','28.6119078','77.2171022'),(9,'Bulldog\n','Gallery One','National Museum, New Delhi','https://cdn.g-1.com/wp-content/uploads/2022/07/BULLDOG-1.jpg','28.6119078','77.2171022');
/*!40000 ALTER TABLE `artgallery` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-24 15:30:42

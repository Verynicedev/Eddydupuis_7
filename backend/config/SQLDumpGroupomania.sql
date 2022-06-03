-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `commentId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `datePublication` datetime DEFAULT NULL,
  PRIMARY KEY (`commentId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,NULL,'contenu n°2',NULL),(2,NULL,'contenu n°2',NULL),(3,1,'contenu n°2',NULL),(4,1,'contenu n°4',NULL);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topic`
--

DROP TABLE IF EXISTS `topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topic` (
  `topicId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `imageUrl` varchar(500) DEFAULT NULL,
  `datePublication` datetime DEFAULT NULL,
  PRIMARY KEY (`topicId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topic`
--

LOCK TABLES `topic` WRITE;
/*!40000 ALTER TABLE `topic` DISABLE KEYS */;
INSERT INTO `topic` VALUES (1,1,'titre test 1','ceci est un test 1 modify','image 1',NULL),(2,1,'titre test 2','ceci est un test 2 modify','image 2',NULL),(3,NULL,'Le premier vrai topic de ce forum !','Je suis le tout premier vrai post ici !',NULL,NULL);
/*!40000 ALTER TABLE `topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `pseudonyme` varchar(25) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` int DEFAULT '1',
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'utilisateur1','utilisateur1@live.fr','Utilisateur1!',1),(2,'utilisateur2','utilisateur2@live.fr','Utilisateur2!',1),(4,'pseudonyme 2','utilisateur3@live.fr','1213217',1),(6,'user1','user1@live.fr','$2b$10$bY.vb.ZwRET5x97GD7aP4.8N9SStRpnzAQ7wSxX9RhkadxaR3/2dq',1),(10,'user2','user2@live.fr','$2b$10$mt.WhZqTC.kAqX.BFgpp3.aIPgeFcxzqc6dtKBG0Q8Bs5chZ0E.ra',1),(11,'224245','24245','$2b$10$vVEwhqijL846ZuLiev4.7.u7YKB3w04d8lNtaWxGBfpQIWFiZnH4q',1),(12,'000','000','$2b$10$evSnau478rVrf1bu/NCkCuDyfL8EI7DPyZ494PZ5teboBX307iVNW',1),(15,'utilisateur1','utilisateur10@live.fr','$2b$10$T/ewhtAB.Mx/9hUZP1GzFetWGyvTqf.qz.762miZW2RtknG7aOwRq',1),(16,'usertest','usertest@live.fr','$2b$10$6DegSA1v1EziuVk/ezj9weIbrsWvQpP1WUd8OBFwbby.FD41Y7Uty',1),(17,'test','test','$2b$10$VBmJdfshCKGKJ2PaKJPS9u3nmxbYIiq5JeVEPN.xeUKAD.oL92YgC',1),(18,'test1','test1','$2b$10$wp/BBUDPAEeRURIRmY1LHeINeSwdCaq3.y47jwxN73ft3WALTEL9.',1),(19,'test10','test10','$2b$10$e7geu6WkCfbpPmYAVegEPeBkJH3hJN2RUWM5jSpiWLhMdLEmPeh2G',1),(20,'test31','test31','$2b$10$o6t.MNgSsKt95MNzDNi1w.73OwgL9Azb7CgdvQgJ0JOB04Hkoo/NK',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-03 11:31:30

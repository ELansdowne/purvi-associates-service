CREATE DATABASE  IF NOT EXISTS `sos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `sos`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: sos
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `feature` (
  `featureType` varchar(45) NOT NULL,
  `assignedTo` varchar(45) NOT NULL,
  `featureInfo` varchar(45) DEFAULT NULL,
  `teamId` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `sprint` varchar(45) NOT NULL,
  `release` varchar(45) NOT NULL,
  `featureId` varchar(45) NOT NULL,
  PRIMARY KEY (`featureId`),
  UNIQUE KEY `featureId_UNIQUE` (`featureId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
INSERT INTO `feature` VALUES ('WorkRequest','Lyla','just an info','TR001','Backlog','Sprint1','19E1','FR001'),('CI','Tommy','jist an info','TR001','Backlog','Sprint1','19E1','FR002'),('CA','Layla','just an info','TR002','Backlog','Sprint1','19E1','FR003'),('WorkRequest','Nan','just an info','TR003','Backlog','Sprint2','19E1','FR004'),('CI','Carry','jist an info','TR004','Backlog','Sprint1','19E1','FR005'),('CA','Foggy','just an info','TR002','Backlog','Sprint1','19E1','FR006'),('WorkRequest','Tag','just an info','TR003','Backlog','Sprint1','19E1','FR007'),('CI','Janny','jist an info','TR004','Backlog','Sprint1','19E1','FR008'),('CA','Keller','just an info','TR002','Backlog','Sprint1','19E1','FR009');
/*!40000 ALTER TABLE `feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue`
--

DROP TABLE IF EXISTS `issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `issue` (
  `issueId` varchar(45) NOT NULL,
  `issueType` varchar(45) NOT NULL,
  `issueInfo` varchar(45) DEFAULT NULL,
  `featureId` varchar(45) NOT NULL,
  `teamId` varchar(45) NOT NULL,
  `assignedTo` varchar(45) NOT NULL,
  `date` datetime DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`issueId`),
  UNIQUE KEY `issueId_UNIQUE` (`issueId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue`
--

LOCK TABLES `issue` WRITE;
/*!40000 ALTER TABLE `issue` DISABLE KEYS */;
INSERT INTO `issue` VALUES ('IR001','Dependencies','just an info','FR001','TR001','Ana',NULL,'red'),('IR002','Dependencies','just an info','FR002','TR002','Tim',NULL,'red'),('IR003','Dependencies','just an info','FR001','TR003','Cook',NULL,'red'),('IR004','Risks','just an info','FR001','TR001','Tan',NULL,'green'),('IR005','Blockers','just an info','FR002','TR002','Matthew',NULL,'Amber'),('IR006','Risks','just an info','FR001','TR003','Cook',NULL,'red'),('IR007','Dependencies','just an info','FR003','TR001','Ana',NULL,'red'),('IR008','Blockers','just an info','FR002','TR002','Tim',NULL,'Amber'),('IR009','Blockers','just an info','FR001','TR001','Cook',NULL,'Amber');
/*!40000 ALTER TABLE `issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `task` (
  `type` varchar(45) NOT NULL,
  `teamId` varchar(45) NOT NULL,
  `subType` varchar(45) NOT NULL,
  `owner` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `sprint` varchar(45) NOT NULL,
  `release` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `taskId` varchar(45) NOT NULL,
  `size` varchar(45) DEFAULT NULL,
  `priority` varchar(45) DEFAULT NULL,
  `sprintStartEnd` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`taskId`),
  UNIQUE KEY `taskId_UNIQUE` (`taskId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES ('Feature','TR001','WorkRequest','Lane','UI button changes','Sprint1','19E1','Backlog','TR001','1','1',NULL,NULL),('Issue','TR003','Risks','Kory','auto text','Sprint1','19E1','Backlog','TR0010','1','1',NULL,NULL),('Issue','TR005','Dependencies','Tany','UI button changes','Sprint1','19E1','Done','TR0011','1','1',NULL,NULL),('Issue','TR004','Blockers','Kane','manual changes','Sprint1','19E1','Backlog','TR0012','1','1',NULL,NULL),('Feature','TR002','CA','Tany','UI button changes','Sprint1','19E1','InProgress','TR002','1','1',NULL,NULL),('Feature','TR001','CI','Kane','text changes','Sprint1','19E1','Backlog','TR003','1','1',NULL,NULL),('Issue','TR003','Risks','Kory','auto text','Sprint1','19E1','Done','TR004','1','1',NULL,NULL),('Issue','TR001','Dependencies','Tany','UI button changes','Sprint1','19E1','InProgress','TR005','1','1',NULL,NULL),('Issue','TR001','Blockers','Kane','manual changes','Sprint1','19E1','Done','TR006','1','1',NULL,NULL),('Feature','TR003','WorkRequest','Lane','UI button changes','Sprint1','19E1','InProgress','TR007','1','1',NULL,NULL),('Feature','TR005','CA','Tany','UI button changes','Sprint1','19E1','Backlog','TR008','1','1',NULL,NULL),('Feature','TR004','CI','Kane','text changes','Sprint1','19E1','Backlog','TR009','1','1',NULL,NULL),('Feature','TR001','WorkRequest','aksa','asasa','Sprint1','19E1','Backlog','TRGT1212',NULL,NULL,NULL,'');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `team` (
  `teamId` varchar(45) NOT NULL,
  `teamName` varchar(45) NOT NULL,
  `teamLogo` mediumtext,
  `status` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  PRIMARY KEY (`teamId`),
  UNIQUE KEY `teamId_UNIQUE` (`teamId`),
  UNIQUE KEY `teamName_UNIQUE` (`teamName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES ('TR001','Nike','Nike','Red','Noida'),('TR0011','dummyss','dummyss','red','Noida'),('TR0012','dummysss','dummysss','red','Noida'),('TR002','Hades','Hades','Amber','Sydney'),('TR003','Titans','Titans','Amber','Noida'),('TR004','Caerus','Caerus','green','Sydney'),('TR005','Athena','Athena','Red','Noida'),('TR006','Nemeses','Nemesis','Red','Noida'),('TR007','dummy','dummy','red','Noida'),('TR008','dummys','dummys','red','Noida'),('TR735','stric','stric','green','Noida');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-06  5:45:03

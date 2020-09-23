-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 172.28.1.3    Database: skrapit-scraping
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cpus_intel`
--

DROP TABLE IF EXISTS `cpus_intel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cpus_intel` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `family` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `segment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `launch` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `socket` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cores` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `threads` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lithography` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `base_frequency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `boost_frequency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `burst_frequency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thermal_velocity_boost_frequency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `max_mem` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `memory_types` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `num_memory_channels` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `max_memory_bandwidth` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ecc_memory` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `processor_graphics_model_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_freq` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_max_freq` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_max_mem` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_output` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_4K_support_level` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_max_resolution_hdmi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_max_resolution_dp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_max_resoluion_vga` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_directX_support` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphics_openGL_support` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quick_sync_video` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intru_3D` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clear_video_hd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clear_video` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `num_displays_supported` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scalable_sockets` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pci_express_revision` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pci_express_configs` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `num_pci_express_ports` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thermal_solution_specification` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `t_case` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `package_size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `optane_memory_support` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `turbo_boost_support` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vpro_support` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hyper_threading` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `virtualization_vtx` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `virtualization_vtd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extended_page_tables_vtx_ept` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transactional_sync_extensions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intel_64` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instruction_set` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instruction_set_extensions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idle_states` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `speed_step_technology` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thermal_monitoring_indicator` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identity_protection_tech_version` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stable_image_platform_program_version` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cache` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tdp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpus_intel`
--

LOCK TABLES `cpus_intel` WRITE;
/*!40000 ALTER TABLE `cpus_intel` DISABLE KEYS */;
/*!40000 ALTER TABLE `cpus_intel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2020_08_01_202835_create_cpus_intel_table',1),(2,'2020_08_01_202852_create_quantities_intel_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quantities_intel`
--

DROP TABLE IF EXISTS `quantities_intel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quantities_intel` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `core` int(11) NOT NULL,
  `xeon` int(11) NOT NULL,
  `xeonPhi` int(11) NOT NULL,
  `atom` int(11) NOT NULL,
  `pentium` int(11) NOT NULL,
  `celeron` int(11) NOT NULL,
  `itanium` int(11) NOT NULL,
  `quark` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quantities_intel`
--

LOCK TABLES `quantities_intel` WRITE;
/*!40000 ALTER TABLE `quantities_intel` DISABLE KEYS */;
INSERT INTO `quantities_intel` VALUES (1,885,868,19,147,427,323,37,10,'2020-09-19 18:43:35');
/*!40000 ALTER TABLE `quantities_intel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-19 20:43:35

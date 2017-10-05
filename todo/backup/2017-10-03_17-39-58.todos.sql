CREATE TABLE IF NOT EXISTS `todos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `todos` (`id`,`title`,`body`,`createdAt`,`updatedAt`) VALUES (1,'eight','eight','2017-10-03 17:39:44.000','2017-10-03 17:39:44.000');
INSERT INTO `todos` (`id`,`title`,`body`,`createdAt`,`updatedAt`) VALUES (2,'nine','nine','2017-10-03 17:39:47.000','2017-10-03 17:39:47.000');
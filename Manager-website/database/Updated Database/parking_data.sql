-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 07, 2022 at 11:21 AM
-- Server version: 8.0.27
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parking_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_page`
--

DROP TABLE IF EXISTS `contact_page`;
CREATE TABLE IF NOT EXISTS `contact_page` (
  `ID` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Subject` varchar(255) NOT NULL,
  `Message` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact_page`
--

INSERT INTO `contact_page` (`ID`, `Name`, `Email`, `Subject`, `Message`) VALUES
(1, 'Abdul Rafay', '99marafay@gmail.com', 'Suggestion', 'I need this system in my office'),
(2, 'Abdul Muqeet', 'muqeet12@gmail.com', 'Suggestion for Improvement ', 'We are using your service and we came across a problem when we add another sensor it just not working and I love that you can help our company.\r\nRegard \r\nAbdul Muqet'),
(3, 'Abdul Muqeet', 'muqeet123@gmail.com', 'Complain', 'You system is awful...'),
(4, 'Saima Zafar', 'zafar398@gmail.com', 'Adding more Features', 'Hi, I like your system but there are a couple of thing that can make the system more powerful and awesome for example adding the power to add admin pages and user can add more sensors.\r\nI hope you take these suggestions.\r\nRegards \r\nSaima Zafar.');

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
CREATE TABLE IF NOT EXISTS `manager` (
  `email` varchar(255) NOT NULL,
  `manager_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `manager_date_of_birth` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`email`, `manager_name`, `password`, `manager_date_of_birth`) VALUES
('99marafay@gmail.com', 'Abdul Rafay', '$2a$08$9lXYDWn3dL66974fhbkoe.7XswNy3XZxmqEs23JBXNiOZ8UwAe9ti', '2013-03-13');

-- --------------------------------------------------------

--
-- Table structure for table `reserved_parking`
--

DROP TABLE IF EXISTS `reserved_parking`;
CREATE TABLE IF NOT EXISTS `reserved_parking` (
  `reverse_ID` int NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `start_time` datetime(6) NOT NULL,
  `end_time` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_date_of_birth` date NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_email`, `user_name`, `user_date_of_birth`, `user_password`, `id`) VALUES
('moeez@gmail.com', 'Abdul Moeez', '2000-04-15', '$2a$08$q4HwwjyL/NMA16iJPkVSk.E4F3GoYj3k5vuo1goHKFVKvtwBs60D2', 1),
('muqeet123@gmail.com', 'Abdul Muqeet', '2022-03-01', '123456', 2),
('saif1234@outlook.com', 'Saif Akhtar', '1998-09-01', '$2a$08$foFK0cB0.reV9d1WU7MC5.sM8Fp8OrlmvYsqTEB9So6D1yRRXIpZK', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 18, 2022 at 11:06 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

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

CREATE TABLE `contact_page` (
  `ID` int(50) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Subject` varchar(255) NOT NULL,
  `Message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `manager` (
  `email` varchar(255) NOT NULL,
  `manager_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `manager_date_of_birth` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`email`, `manager_name`, `password`, `manager_date_of_birth`) VALUES
('99marafay@gmail.com', 'Abdul Rafay', '$2a$08$9lXYDWn3dL66974fhbkoe.7XswNy3XZxmqEs23JBXNiOZ8UwAe9ti', '2013-03-13');

-- --------------------------------------------------------

--
-- Table structure for table `parking_rate`
--

CREATE TABLE `parking_rate` (
  `ID` int(255) NOT NULL,
  `Parking_rate` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parking_rate`
--

INSERT INTO `parking_rate` (`ID`, `Parking_rate`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reserved_parking`
--

CREATE TABLE `reserved_parking` (
  `reverse_ID` int(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `parking_location` varchar(255) DEFAULT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reserved_parking`
--

INSERT INTO `reserved_parking` (`reverse_ID`, `user_email`, `parking_location`, `start_time`, `end_time`) VALUES
(1, '', 'Parking Spot A18', '00:00:00', '00:00:00'),
(2, 'mike.ross123@gmail.com', 'Parking Spot A24', '23:55:00', '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_date_of_birth` date NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_email`, `user_name`, `user_date_of_birth`, `user_password`, `id`) VALUES
('mike.ross123@gmail.com', 'Mike Ross', '2022-05-04', '$2a$08$TPkwEJ8vjaoHdjxHPak5be74WsaqcNxx6BO/26fWRXM9Y/Cr1A/36', 2),
('moeez@gmail.com', 'Abdul Moeez', '2000-04-15', '$2a$08$q4HwwjyL/NMA16iJPkVSk.E4F3GoYj3k5vuo1goHKFVKvtwBs60D2', 3),
('saif1234@outlook.com', 'Saif Akhtar', '1998-09-01', '$2a$08$foFK0cB0.reV9d1WU7MC5.sM8Fp8OrlmvYsqTEB9So6D1yRRXIpZK', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_page`
--
ALTER TABLE `contact_page`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `parking_rate`
--
ALTER TABLE `parking_rate`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `reserved_parking`
--
ALTER TABLE `reserved_parking`
  ADD PRIMARY KEY (`reverse_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_page`
--
ALTER TABLE `contact_page`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `parking_rate`
--
ALTER TABLE `parking_rate`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reserved_parking`
--
ALTER TABLE `reserved_parking`
  MODIFY `reverse_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

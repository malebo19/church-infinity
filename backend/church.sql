-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2022 at 02:04 PM
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
-- Database: `church`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `content` text DEFAULT NULL,
  `time` varchar(200) DEFAULT NULL,
  `document` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `group-members`
--

CREATE TABLE `group-members` (
  `id` int(11) NOT NULL,
  `group_id` varchar(100) DEFAULT NULL,
  `member_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group-members`
--

INSERT INTO `group-members` (`id`, `group_id`, `member_id`) VALUES
(8, '10', '[1]'),
(9, '10', '1'),
(10, '10', '2');

-- --------------------------------------------------------

--
-- Table structure for table `group-messages`
--

CREATE TABLE `group-messages` (
  `id` int(11) NOT NULL,
  `msg` text DEFAULT NULL,
  `msg_date` varchar(100) DEFAULT NULL,
  `group_id` varchar(100) DEFAULT NULL,
  `member_id` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `document` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group-messages`
--

INSERT INTO `group-messages` (`id`, `msg`, `msg_date`, `group_id`, `member_id`, `username`, `document`) VALUES
(1, 'ASDRFTY', '', '10', '1', NULL, ''),
(2, 'hello qoeld', 'sjs', '10', '1', NULL, ''),
(3, 'hello world', 'today', '10', '1', 'mark', ''),
(4, 'hello world', 'today', '10', '1', 'mark', ''),
(5, 'hello world', 'today', '10', '1', 'mark', ''),
(6, 'hello world', 'today', '10', '1', 'mark', 'uploads/62b19b88b0a37Untitled.png');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `group_id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `descrip` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`group_id`, `name`, `descrip`) VALUES
(10, 'alex', 'world'),
(11, 'test 3', 'desc 3');

-- --------------------------------------------------------

--
-- Table structure for table `member_status`
--

CREATE TABLE `member_status` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member_status`
--

INSERT INTO `member_status` (`id`, `name`) VALUES
(1, 'Church Coordinator'),
(2, 'Cell Leader'),
(3, 'Cell Executive'),
(4, 'Department Leader'),
(5, 'Member');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `document` varchar(400) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `title` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(200) NOT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  `time` varchar(200) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `document` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `testimonies`
--

CREATE TABLE `testimonies` (
  `id` int(11) NOT NULL,
  `document` text DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testimonies`
--

INSERT INTO `testimonies` (`id`, `document`, `content`) VALUES
(1, 'uploads/62b4621522297Screen_Shot_2020_04_20_at_10.16.38_AM.jpg', 'hello 3'),
(2, 'uploads/62b463dde433bScreen_Shot_2020_04_20_at_10.16.38_AM.jpg', '6');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `profile` text NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `member_status` varchar(100) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `local_church_option` varchar(100) DEFAULT NULL,
  `cell_option` varchar(100) DEFAULT NULL,
  `cell_name_leader` varchar(255) DEFAULT NULL,
  `baptised_option` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`, `profile`, `type`, `title`, `member_status`, `contact`, `local_church_option`, `cell_option`, `cell_name_leader`, `baptised_option`) VALUES
(1, 'mark@mail.com', '1232345', 'marign', 'uploads/62bc36b49f44c62bc36b49f44d.mp4', 'admin', '', NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group-members`
--
ALTER TABLE `group-members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group-messages`
--
ALTER TABLE `group-messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `member_status`
--
ALTER TABLE `member_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonies`
--
ALTER TABLE `testimonies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `group-members`
--
ALTER TABLE `group-members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `group-messages`
--
ALTER TABLE `group-messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `member_status`
--
ALTER TABLE `member_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `testimonies`
--
ALTER TABLE `testimonies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

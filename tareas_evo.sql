-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2020 at 04:12 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tareas_evo`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tasks`
--

CREATE TABLE `tbl_tasks` (
  `idTask` int(11) NOT NULL,
  `nameTask` varchar(45) DEFAULT NULL,
  `priorityTask` varchar(45) DEFAULT NULL,
  `expirationTask` datetime DEFAULT NULL,
  `descriptionTask` longtext DEFAULT NULL,
  `userTask` int(10) UNSIGNED DEFAULT NULL,
  `status` char(1) DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_tasks`
--

INSERT INTO `tbl_tasks` (`idTask`, `nameTask`, `priorityTask`, `expirationTask`, `descriptionTask`, `userTask`, `status`) VALUES
(0, 'A', 'MEDIA', '2020-08-26 00:00:00', NULL, 6, 'I'),
(1, 'Tarea 1', 'BAJA', '2020-02-02 00:00:00', 'Esta es la descripcion 1', 1, 'A'),
(2, 'Task 1', 'MEDIA', '2020-08-26 00:00:00', NULL, 6, 'A'),
(4, 'Task 1', 'MEDIA', '2020-08-26 00:00:00', NULL, 6, 'A'),
(5, 'Task 3', 'BAJA', '2020-08-30 00:00:00', 'description', 6, 'A'),
(6, 'Task 1', 'MEDIA', '2020-08-26 00:00:00', 'description task 1', 6, 'A'),
(7, 'Task 2', 'ALTA', '2020-09-02 00:00:00', 'task 2 description', 6, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `idUsers` int(11) UNSIGNED NOT NULL,
  `nameUser` varchar(45) DEFAULT NULL,
  `nickUser` varchar(45) DEFAULT NULL,
  `passwordUser` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`idUsers`, `nameUser`, `nickUser`, `passwordUser`) VALUES
(1, 'Fabian Martinez', 'Oz', 'fabis9412'),
(2, 'Fabian Martinez', 'Oz', 'fabis9412'),
(3, 'Fabian Martinez', 'Oz', 'fabis9412'),
(4, 'Fabian Martinez', 'Oz', 'fabis9412'),
(5, 'Diego Zambrano', NULL, '123456'),
(6, 'Diego Zambrano', 'dt2901', '123456'),
(7, '', 'Oz', 'fabis9412'),
(8, 'Luis Torres', 'lets1554', '123456'),
(9, 'Juan Bushelly', 'titor', '123456'),
(10, 'Esteban Ordoñez', 'estebandido', '123456'),
(11, 'Susana Meneses', 'sucha', '123456'),
(12, 'Pipe Villalba', 'villa', '123456'),
(13, 'Pipe Villalba', 'villa', '123456'),
(14, '', '', ''),
(15, 'Homero Simpson', 'homer', '123456'),
(16, 'Bart Simpson', 'bartolomeo', '123456'),
(17, 'Lisa Simpsoin', 'lisa', '123456'),
(18, 'Marge Simpson', 'marge', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_tasks`
--
ALTER TABLE `tbl_tasks`
  ADD PRIMARY KEY (`idTask`),
  ADD KEY `fk_user_task` (`userTask`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`idUsers`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_tasks`
--
ALTER TABLE `tbl_tasks`
  MODIFY `idTask` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `idUsers` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_tasks`
--
ALTER TABLE `tbl_tasks`
  ADD CONSTRAINT `fk_user_task` FOREIGN KEY (`userTask`) REFERENCES `tbl_users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

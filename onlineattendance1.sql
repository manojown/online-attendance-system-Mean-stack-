-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2016 at 01:09 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `onlineattendance1`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE IF NOT EXISTS `attendance` (
  `attendance_id` varchar(15) NOT NULL,
  `student_id` varchar(15) NOT NULL,
  `lecture_id` varchar(15) NOT NULL,
  PRIMARY KEY (`attendance_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `course_id` varchar(15) NOT NULL,
  `course_name` varchar(50) NOT NULL,
  `faculty_id` varchar(15) NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `faculty_id`) VALUES
('IT615', 'Software Project Management', '2015103'),
('IT619', 'Design of Software System', '2015102'),
('IT620', 'Discrete Mathematics', '2015104'),
('IT621', 'Computer Organization', '2015105'),
('IT622', 'DIGITAL Signal PRocessing', '2015105'),
('IT623', 'Computer Networks', '2015106'),
('IT624', 'OPERATING System', '2015107'),
('IT625', 'Introduction to Algorithm', '2015108'),
('IT633', 'DATA MINING AND WAREHOUSE', '2015101');

-- --------------------------------------------------------

--
-- Table structure for table `course_enrollement`
--

CREATE TABLE IF NOT EXISTS `course_enrollement` (
  `course_id` varchar(15) NOT NULL,
  `student_id` varchar(15) NOT NULL,
  UNIQUE KEY `student_id` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course_enrollement`
--

INSERT INTO `course_enrollement` (`course_id`, `student_id`) VALUES
('IT615', '201512001'),
('IT615', '201512002'),
('IT619', '201512003'),
('IT619', '201512004'),
('IT619', '201512005'),
('IT619', '201512006'),
('IT615', '201512007'),
('IT615', '201512008');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE IF NOT EXISTS `faculty` (
  `faculty_id` varchar(15) NOT NULL,
  `faculty_name` varchar(50) DEFAULT NULL,
  `faculty_pwd` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`faculty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`faculty_id`, `faculty_name`, `faculty_pwd`) VALUES
('1', 'abcd', '1'),
('2015101', 'P M Jat', '123456'),
('2015102', 'Saurabh Tiwari', '123456'),
('2015103', 'Asim Banerjee', '123456'),
('2015104', 'Manoj Raut', '123456'),
('2015105', 'Rutu Parekh', '123456'),
('2015106', 'Dr.Kalyan', '123456'),
('2015107', 'Prasnjit Majumdar', '123456'),
('2015108', 'puneet Bhateja', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `lecture`
--

CREATE TABLE IF NOT EXISTS `lecture` (
  `lecure_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` varchar(20) NOT NULL,
  `date_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`lecure_id`),
  UNIQUE KEY `course_id` (`course_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1002 ;

--
-- Dumping data for table `lecture`
--

INSERT INTO `lecture` (`lecure_id`, `course_id`, `date_time`) VALUES
(1000, 'IT613', '2016-10-06 02:52:55'),
(1001, 'IT619', '2016-10-06 02:52:55');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `student_id` varchar(15) NOT NULL,
  `student_name` varchar(50) NOT NULL,
  `student_pwd` varchar(50) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_name`, `student_pwd`) VALUES
('201512001', 'Mohini Kukawala', '123456'),
('201512002', 'Akash Gosaliya', '123456'),
('201512003', 'Dhyan Patel', '123456'),
('201512004', 'Manoj Chaudhri', '123456'),
('201512006', 'Aditi Jain', '123456'),
('201512007', 'Gopal Contractor', '123456'),
('201512009', 'Priyanka Vasandiya', '123456'),
('201512010', 'Ravi Jetani', '123456'),
('201512080', 'Ravi Jetani', '9624300546'),
('201512094', 'Piku vasandiya', '123456');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

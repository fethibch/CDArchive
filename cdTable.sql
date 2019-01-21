-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 21 jan. 2019 à 16:02
-- Version du serveur :  10.1.34-MariaDB
-- Version de PHP :  7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cdarchive`
--

-- --------------------------------------------------------

--
-- Structure de la table `cd`
--

CREATE TABLE `cd` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `released` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cd`
--

INSERT INTO `cd` (`id`, `name`, `gender`, `released`) VALUES
(7, 'Reflection', 'Ambient', '2017-01-01'),
(8, 'Two Zero One Seven', 'folk', '2017-01-01'),
(13, 'Angel\'s Knock', 'dance-pop', '2017-01-02'),
(17, 'Remember', 'R&B', '2017-01-03'),
(18, 'Winter', 'folk', '2017-01-03'),
(19, 'Prelude', ' R&B', '2017-01-04'),
(20, 'Nomad', ' Metalcore', '2017-01-06'),
(21, 'Pentagon Tapes', ' 	Jazz', '2017-01-06'),
(22, 'limitless', 'hip hop', '2017-01-06'),
(23, 'Up and Coming', 'Jazz', '2017-01-13'),
(24, 'Dont SayNo', ' R&B', '2017-01-17');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cd`
--
ALTER TABLE `cd`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cd`
--
ALTER TABLE `cd`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

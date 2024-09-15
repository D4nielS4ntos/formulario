-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15/09/2024 às 17:16
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_formulário`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_usuário`
--

CREATE TABLE `tb_usuário` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_usuário`
--

INSERT INTO `tb_usuário` (`id`, `nome`, `email`, `senha`) VALUES
(1, 'daniel', 'email', '1234'),
(2, 'Luísa', 'luisa@conta', '01233210'),
(3, 'qqqqqqqqq', 'minha@conta', '09870987'),
(4, 'ninguém', 'conta@conta', '09870987'),
(5, 'ninguém', 'conta@conta', '09870987'),
(6, 'Danillo', 'danillo@gmail.com', '76544567'),
(7, 'Danillo', 'danillo@gmail.com', '76544567'),
(8, 'Maurício', 'mau@ricio.com', '12341234'),
(9, 'David', 'minhaconta@gmail.com', '43214321'),
(24, 'Daniel', 're', '09870987'),
(25, 'Bernardo', 'bernardo@gmail', '12341234'),
(26, 'clarice', 'conta@conta', '12341234'),
(28, 'abbbb', 'abbbbbbb', '43214321'),
(29, 'vinicius', 'vinicius@gmail.com', '09870987'),
(30, 'Wesley', 'loucuras@gmail.com', '78907890');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tb_usuário`
--
ALTER TABLE `tb_usuário`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_usuário`
--
ALTER TABLE `tb_usuário`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

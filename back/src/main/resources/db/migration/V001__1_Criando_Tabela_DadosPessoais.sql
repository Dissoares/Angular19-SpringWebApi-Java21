CREATE TABLE dados_pessoais (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                nome VARCHAR(255) NOT NULL,
                                cpf VARCHAR(14) NOT NULL,
                                data_nascimento DATE,
                                sexo CHAR(1),
                                email VARCHAR(255),
                                telefone VARCHAR(20)
);

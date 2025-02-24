IF NOT EXISTS (SELECT * FROM information_schema.tables WHERE table_schema = 'SISTEMA_INSTITUICAO' AND table_name = 'DADOS_PESSOAIS') THEN
CREATE TABLE SISTEMA_INSTITUICAO.DADOS_PESSOAIS
(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(255),
    SOBRENOME VARCHAR(255),
    CPF VARCHAR(14),
    DATANASCIMENTO DATE,
    SEXO VARCHAR(20),
    ESTADO_CIVIL INT,
    NATURALIDADE INT,
    CONTATO_ID INT,
    ENDERECO_ID INT,
    ATIVO BOOLEAN,
    FOREIGN KEY (CONTATO_ID) REFERENCES SISTEMA_INSTITUICAO.DADOSCONTATO(ID),
    FOREIGN KEY (ENDERECO_ID) REFERENCES SISTEMA_INSTITUICAO.DADOSENDERECO(ID)
);
END IF;
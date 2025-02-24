IF NOT EXISTS (SELECT * FROM information_schema.tables WHERE table_schema = 'SISTEMA_INSTITUICAO' AND table_name = 'NOTIFICACOES') THEN
CREATE TABLE SISTEMA_INSTITUICAO.NOTIFICACOES
(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    MENSAGEM VARCHAR(255),
    STATUS VARCHAR(20),
    ALUNO_ID INT,
    FOREIGN KEY (ALUNO_ID) REFERENCES SISTEMA_INSTITUICAO.ALUNO(ID)
);
END IF;
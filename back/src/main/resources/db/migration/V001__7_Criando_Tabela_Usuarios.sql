IF NOT EXISTS (SELECT * FROM information_schema.tables WHERE table_schema = 'INSTITUICAO_SISTEMA' AND table_name = 'USUARIOS') THEN
CREATE TABLE INSTITUICAO_SISTEMA.USUARIOS
(
    ID_USUARIO BIGINT AUTO_INCREMENT PRIMARY KEY,
    USUARIO VARCHAR(100) NOT NULL UNIQUE,
    EMAIL VARCHAR(150) NOT NULL UNIQUE,
    SENHA VARCHAR(255) NOT NULL,
    PERMISSAO_FK BIGINT NOT NULL,


    FOREIGN KEY (PERMISSAO_FK) REFERENCES INSTITUICAO_SISTEMA.PERMISSOES(ID_PERMISSAO)
);
END IF;
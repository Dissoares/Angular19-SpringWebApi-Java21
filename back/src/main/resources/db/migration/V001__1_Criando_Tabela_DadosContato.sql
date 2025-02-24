IF NOT EXISTS (SELECT * FROM information_schema.tables WHERE table_schema = 'INSTITUICAO_SISTEMA' AND table_name = 'DADOS_CONTATO') THEN
CREATE TABLE INSTITUICAO_SISTEMA.DADOS_CONTATO
(
    ID_CONTATO SERIAL PRIMARY KEY,
    EMAIL VARCHAR(255),
    CONFIRMACAO_EMAIL VARCHAR(255),
    TELEFONE VARCHAR(20),
    TIPO_TELEFONE INTEGER,
    ATIVO BOOLEAN DEFAULT TRUE
);
END IF;
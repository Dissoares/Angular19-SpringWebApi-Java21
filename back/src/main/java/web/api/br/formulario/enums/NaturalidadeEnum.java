package web.api.br.formulario.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum NaturalidadeEnum {
    ACRE(1, "ACRE", "AC"),
    ALAGOAS(2, "ALAGOAS", "AL"),
    AMAPA(3, "AMAPÁ", "AP"),
    AMAZONAS(4, "AMAZONAS", "AM"),
    BAHIA(5, "BAHIA", "BA"),
    CEARA(6, "CEARÁ", "CE"),
    DISTRITO_FEDERAL(7, "DISTRITO FEDERAL", "DF"),
    ESPIRITO_SANTO(8, "ESPÍRITO SANTO", "ES"),
    GOIAS(9, "GOIÁS", "GO"),
    MARANHAO(10, "MARANHÃO", "MA"),
    MATO_GROSSO(11, "MATO GROSSO", "MT"),
    MATO_GROSSO_DO_SUL(12, "MATO GROSSO DO SUL", "MS"),
    MINAS_GERAIS(13, "MINAS GERAIS", "MG"),
    PARA(14, "PARÁ", "PA"),
    PARAIBA(15, "PARAÍBA", "PB"),
    PARANA(16, "PARANÁ", "PR"),
    PERNAMBUCO(17, "PERNAMBUCO", "PE"),
    PIAUI(18, "PIAUÍ", "PI"),
    RIO_DE_JANEIRO(19, "RIO DE JANEIRO", "RJ"),
    RIO_GRANDE_DO_NORTE(20, "RIO GRANDE DO NORTE", "RN"),
    RIO_GRANDE_DO_SUL(21, "RIO GRANDE DO SUL", "RS"),
    RONDONIA(22, "RONDÔNIA", "RO"),
    RORAIMA(23, "RORAIMA", "RR"),
    SANTA_CATARINA(24, "SANTA CATARINA", "SC"),
    SAO_PAULO(25, "SÃO PAULO", "SP"),
    SERGIPE(26, "SERGIPE", "SE"),
    TOCANTINS(27, "TOCANTINS", "TO");

    private final Integer id;
    private final String descricao;
    private final String uf;

    NaturalidadeEnum(Integer id, String descricao, String uf) {
        this.id = id;
        this.descricao = descricao;
        this.uf = uf;
    }

    @JsonValue
    public Integer getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getUf() {
        return uf;
    }

    public static NaturalidadeEnum getById(Integer id) {
        for (NaturalidadeEnum naturalidade : values()) {
            if (naturalidade.getId().equals(id)) {
                return naturalidade;
            }
        }
        return null;
    }

    public static NaturalidadeEnum getByDescricao(String descricao) {
        for (NaturalidadeEnum naturalidade : values()) {
            if (naturalidade.getDescricao().equalsIgnoreCase(descricao)) {
                return naturalidade;
            }
        }
        return null;
    }

    public static NaturalidadeEnum getByUf(String uf) {
        for (NaturalidadeEnum naturalidade : values()) {
            if (naturalidade.getUf().equalsIgnoreCase(uf)) {
                return naturalidade;
            }
        }
        return null;
    }
}

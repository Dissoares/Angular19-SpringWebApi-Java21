package web.api.br.formulario.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum TipoSexoEnum {
    MASCULINO(1, "MASCULINO"),
    FEMININO(2, "FEMININO");

    private final Integer id;
    private final String descricao;

    TipoSexoEnum(Integer id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }

    @JsonValue
    public Integer getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public static TipoSexoEnum getById(Integer id) {
        for (TipoSexoEnum status : values()) {
            if (status.getId().equals(id)) {
                return status;
            }
        }
        return null;
    }
}

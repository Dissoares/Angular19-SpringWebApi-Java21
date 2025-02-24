package web.api.br.formulario.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum EstadoCivilEnum {
    SOLTEIRO(1, "SOLTEIRO"),
    CASADO(2, "CASADO"),
    DIVORCIADO(3, "DIVORCIADO"),
    VIUVO(4, "VIÚVO"),
    SEPARADO(5, "SEPARADO"),
    UNIAO_ESTAVEL(6, "UNIÃO ESTÁVEL");

    private final Integer id;
    private final String descricao;

    EstadoCivilEnum(Integer id, String descricao) {
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

    public static EstadoCivilEnum getById(Integer id) {
        for (EstadoCivilEnum estadoCivil : values()) {
            if (estadoCivil.getId().equals(id)) {
                return estadoCivil;
            }
        }
        return null;
    }

    public static EstadoCivilEnum getByDescricao(String descricao) {
        for (EstadoCivilEnum estadoCivil : values()) {
            if (estadoCivil.getDescricao().equalsIgnoreCase(descricao)) {
                return estadoCivil;
            }
        }
        return null;
    }
}

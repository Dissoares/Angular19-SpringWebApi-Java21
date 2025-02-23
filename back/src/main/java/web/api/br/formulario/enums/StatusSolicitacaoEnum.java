package web.api.br.formulario.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum StatusSolicitacaoEnum  {
    APROVADO(1, "APROVADO"),
    REPROVADO(2, "REPROVADO"),
    EM_ANALISE(3, "EM ANÁLISE"),
    AGUARDANDO_REVISAO(4, "AGUARDANDO REVISÃO"),
    CANCELADO(5, "CANCELADO"),
    PENDENTE(6, "PENDENTE");

    private final Integer id;
    private final String descricao;

    StatusSolicitacaoEnum(Integer id, String descricao) {
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

    public static StatusSolicitacaoEnum getById(Integer id) {
        for (StatusSolicitacaoEnum status : values()) {
            if (status.getId().equals(id)) {
                return status;
            }
        }
        return null;
    }
}

package web.api.br.formulario.enums;
import java.util.Optional;
import java.util.Arrays;
import java.util.List;

public enum StatusCadastroEnum {

    ATIVO(true, "ATIVO"),
    INATIVO(false, "INATIVO");

    private final boolean id;
    private final String descricao;

    StatusCadastroEnum(boolean id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }

    public boolean getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public static List<StatusCadastroEnum> getAllValues() {
        return Arrays.asList(StatusCadastroEnum.values());
    }

    public static Optional<StatusCadastroEnum> getById(boolean id) {
        return Arrays.stream(StatusCadastroEnum.values())
                .filter(status -> status.id == id)
                .findFirst();
    }

    public static Optional<StatusCadastroEnum> getByDescricao(String descricao) {
        return Arrays.stream(StatusCadastroEnum.values())
                .filter(status -> status.descricao.equalsIgnoreCase(descricao))
                .findFirst();
    }
}

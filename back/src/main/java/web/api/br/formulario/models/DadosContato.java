package web.api.br.formulario.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(schema = "SISTEMA_INSTITUICAO", name = "DADOS_CONTATO")
public class DadosContato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String confirmacaoEmail;
    private String telefone;
    private Integer tipoTelefone;
    private boolean ativo;
}

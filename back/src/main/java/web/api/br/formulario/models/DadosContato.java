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
    @Column(name = "ID_CONTATO")
    private Long id;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "CONFIRMACAO_EMAIL")
    private String confirmacaoEmail;

    @Column(name = "TELEFONE")
    private String telefone;

    @Column(name = "TIPO_TELEFONE")
    private Integer tipoTelefone;

    @Column(name = "ATIVO")
    private boolean ativo;
}

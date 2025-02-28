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

    @Column(name = "EMAIL", unique = true)
    private String email;

    @Column(name = "CONFIRMACAO_EMAIL", unique = true)
    private String confirmacaoEmail;

    @Column(name = "TELEFONE")
    private String numero;

    @Column(name = "TIPO_TELEFONE")
    private Integer tipoTelefone;

    @Column(name = "ATIVO", nullable = false)
    private boolean ativo = true;

}

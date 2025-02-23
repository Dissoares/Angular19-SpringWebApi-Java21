package web.api.br.formulario.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import web.api.br.formulario.enums.StatusSolicitacaoEnum;

import java.util.Date;
@Setter
@Getter
@Entity
public class DadosPessoais {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cpf;
    private Date dataNascimento;
    private Integer sexo;
    private String email;
    private String telefone;
    private StatusSolicitacaoEnum statusSolicitacao;
}

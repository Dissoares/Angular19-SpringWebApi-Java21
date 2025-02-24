package web.api.br.formulario.models;
import jakarta.persistence.*;
import web.api.br.formulario.enums.StatusSolicitacaoEnum;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(schema = "SISTEMA_INSTITUICAO", name = "NOTIFICACOES")
public class Notificacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mensagem;
    private StatusSolicitacaoEnum status;
    @ManyToOne
    @JoinColumn(name = "ALUNO_ID")
    private Aluno destinatario;
}

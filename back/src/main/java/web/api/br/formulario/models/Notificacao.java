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
    @Column(name = "ID_NOTIFICACAO")
    private Long id;

    @Column(name = "MENSAGEM")
    private String mensagem;

    @Column(name = "STATUS")
    private Long status;

    @ManyToOne
    @JoinColumn(name = "ALUNO_FK")
    private Aluno destinatario;
}

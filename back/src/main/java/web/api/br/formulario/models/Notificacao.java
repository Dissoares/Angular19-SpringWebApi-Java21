package web.api.br.formulario.models;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
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

    @Column(name = "MENSAGEM", nullable = true)
    private String mensagem;

    @Column(name = "STATUS", nullable = true)
    private Long status;

    @ManyToOne
    @JoinColumn(name = "USUARIO_FK", nullable = true)
    @JsonBackReference
    private Usuario usuario;

    @Column(name = "ATIVO", nullable = false)
    private boolean ativo = true;

}

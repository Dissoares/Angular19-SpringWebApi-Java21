package web.api.br.formulario.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(schema = "SISTEMA_INSTITUICAO", name = "PERMISSOES")
public class Permissao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PERMISSAO")
    private Long id;

    @Column(name = "PERMISSAO", nullable = true)
    private String permissao;

    @ManyToOne
    @JoinColumn(name = "USUARIO_FK", nullable = true)
    @JsonBackReference
    private Usuario usuario;

    @Column(name = "ATIVO", nullable = false)
    private boolean ativo = true;
}

package web.api.br.formulario.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(schema = "SISTEMA_INSTITUICAO", name = "USUARIOS")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USUARIO")
    private Long id;

    @Column(name = "USUARIO", unique = true, nullable = false, length = 100)
    private String usuario;

    @Column(name = "EMAIL", unique = true, nullable = false, length = 250)
    private String email;

    @Column(name = "SENHA", nullable = false, length = 255)
    private String senha;

    @ManyToOne
    @JoinColumn(name = "PERMISSAO_FK", nullable = false)
    private Permissao permissao;

}

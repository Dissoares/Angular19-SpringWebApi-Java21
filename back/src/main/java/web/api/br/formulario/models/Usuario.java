package web.api.br.formulario.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(schema = "SISTEMA_INSTITUICAO", name = "USUARIOS")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USUARIO")
    private Long idUsuario;

    @Column(name = "USUARIO", unique = true, nullable = false, length = 100)
    private String usuario;

    @Column(name = "EMAIL", unique = true, nullable = false, length = 250)
    private String email;

    @Column(name = "SENHA", nullable = false, length = 255)
    private String senha;

    @JsonManagedReference
    @OneToMany(mappedBy = "usuario", cascade = CascadeType.PERSIST, orphanRemoval = false)
    private List<Permissao> permissoes = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "ALUNO_FK", nullable = true, unique = true)
    @JsonBackReference
    private Aluno aluno;

    @Column(name = "ATIVO", nullable = false)
    private boolean ativo = true;

    public void adicionarPermissao(Permissao permissao) {
        this.permissoes.add(permissao);
        permissao.setUsuario(this);
    }

    public void removerPermissao(Permissao permissao) {
        this.permissoes.remove(permissao);
        permissao.setUsuario(null);
    }
}

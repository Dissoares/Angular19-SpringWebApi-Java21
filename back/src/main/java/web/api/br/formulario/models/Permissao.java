package web.api.br.formulario.models;


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

    @Column(name = "PERMISSAO", unique = true, nullable = false, length = 50)
    private String name;
}

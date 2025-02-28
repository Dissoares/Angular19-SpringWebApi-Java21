package web.api.br.formulario.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(schema = "SISTEMA_INSTITUICAO", name = "ALUNO")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ALUNO")
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "DADOS_PESSOAIS_FK", nullable = false)
    private DadosPessoais dadosPessoais;

    @JsonManagedReference
    @OneToMany(mappedBy = "aluno", cascade = CascadeType.PERSIST)
    private List<Notificacao> notificacoes = new ArrayList<>();

    @OneToOne(mappedBy = "aluno")
    private Usuario usuario;
}


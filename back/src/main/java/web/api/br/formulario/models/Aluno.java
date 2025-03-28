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
    private Long idAluno;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "DADOS_PESSOAIS_FK", nullable = false)
    private DadosPessoais dadosPessoais;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "USUARIO_FK", nullable = false)
    private Usuario usuario;
}


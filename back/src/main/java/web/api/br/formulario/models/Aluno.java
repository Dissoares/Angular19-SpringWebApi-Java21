package web.api.br.formulario.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
@Table(schema = "SISTEMA_INSTITUICAO", name = "ALUNOS")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ALUNO")
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "DADOS_PESSOAIS_FK", nullable = false)
    private DadosPessoais dadosPessoais;

    @OneToMany(mappedBy = "destinatario", cascade = CascadeType.ALL)
    private List<Notificacao> notificacoes;

}

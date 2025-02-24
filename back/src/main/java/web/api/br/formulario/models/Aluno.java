package web.api.br.formulario.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
@Table(schema = "SISTEMA_INSTITUICAO", name = "ALUNO")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private DadosPessoais dadosPessoais;

    @OneToMany(mappedBy = "destinatario", cascade = CascadeType.ALL)
    private List<Notificacao> notificacoes;

}

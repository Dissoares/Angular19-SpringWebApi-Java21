package web.api.br.formulario.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import web.api.br.formulario.enums.EstadoCivilEnum;
import web.api.br.formulario.enums.NaturalidadeEnum;
import web.api.br.formulario.enums.TipoSexoEnum;

import java.util.Date;
@Setter
@Getter
@Entity
@Table(schema = "SISTEMA_INSTITUICAO", name = "DADOS_PESSOAIS")
public class DadosPessoais {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String sobrenome;
    private String cpf;
    private Date dataNascimento;
    private TipoSexoEnum sexo;
    private EstadoCivilEnum estadoCivil;
    private NaturalidadeEnum naturalidade;

    @OneToOne(cascade = CascadeType.ALL)
    private DadosContato contato;

    @OneToOne(cascade = CascadeType.ALL)

    private DadosEndereco endereco;
    private boolean ativo;
}

package web.api.br.formulario.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;
@Setter
@Getter
@Entity
@Table(schema = "SISTEMA_INSTITUICAO", name = "DADOS_PESSOAIS")
public class DadosPessoais {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "ID_DADOS_PESSOAIS")
        private Long id;

        @Column(name = "NOME")
        private String nome;

        @Column(name = "CPF", unique = true)
        private String cpf;

        @Column(name = "DATA_NASCIMENTO")
        private Date dataNascimento;

        @Column(name = "SEXO")
        private String sexo;

        @Column(name = "ESTADO_CIVIL")
        private Integer estadoCivil;

        @Column(name = "ESTADO_NASCIMENTO")
        private Integer uf;

        @ManyToOne
        @JoinColumn(name = "CONTATO_FK")
        private DadosContato contato;

        @ManyToOne
        @JoinColumn(name = "ENDERECO_FK")
        private DadosEndereco endereco;

        @Column(name = "ATIVO", nullable = false)
        private boolean ativo = true;


}

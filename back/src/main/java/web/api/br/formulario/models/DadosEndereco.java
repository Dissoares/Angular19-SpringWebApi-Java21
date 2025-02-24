package web.api.br.formulario.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(schema = "SISTEMA_INSTITUICAO", name = "DADOS_ENDERECO")
public class DadosEndereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String rua;
    private String complemento;
    private String numero;
    private String cep;
    private String bairro;
    private String cidade;
    private String estado;
    private String pais;
    private boolean ativo;
}

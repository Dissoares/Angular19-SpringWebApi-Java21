package web.api.br.formulario.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import web.api.br.formulario.repository.*;
import web.api.br.formulario.models.*;
import java.util.Optional;
import java.util.List;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private DadosContatoRepository dadosContatoRepository;
    @Autowired
    private DadosEnderecoRepository dadosEnderecoRepository;
    @Autowired
    private DadosPessoaisRepository dadosPessoaisRepository;
    @Autowired
    private UsuarioRepository dadosUsuarioRepository;

    public ResponseEntity<Aluno> salvar(Aluno aluno) {
        DadosPessoais dadosPessoais = aluno.getDadosPessoais();
        DadosContato dadosContato = dadosPessoais.getContato();
        DadosEndereco dadosEndereco = dadosPessoais.getEndereco();
        Usuario usuario = aluno.getUsuario();

        if (dadosContatoRepository.existsByEmail(dadosContato.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "EmailDuplicado");
        }
        if (dadosPessoaisRepository.existsByCpf(dadosPessoais.getCpf())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CpfDuplicado");
        }

        dadosContato = dadosContatoRepository.save(dadosContato);
        dadosEndereco = dadosEnderecoRepository.save(dadosEndereco);

        dadosPessoais.setContato(dadosContato);
        dadosPessoais.setEndereco(dadosEndereco);

        dadosPessoais = dadosPessoaisRepository.save(dadosPessoais);
        usuario.setEmail(dadosPessoais.getContato().getEmail());
        usuario.setNomeUsuario(dadosPessoais.getCpf());
        usuario = dadosUsuarioRepository.save(usuario);

        aluno.setDadosPessoais(dadosPessoais);
        aluno.setUsuario(usuario);

        aluno = alunoRepository.save(aluno);

        return ResponseEntity.ok(aluno);
    }

    public List<Aluno> listarTodos() {
        return alunoRepository.findAll();
    }

    public Optional<Aluno> buscarPorId(Long id) {
        return alunoRepository.findById(id);
    }

    public void excluir(Long id) {
        alunoRepository.deleteById(id);
    }

    public List<Aluno> filtrarAlunos(Aluno aluno) {
        Specification<Aluno> alunoSpecification = Specification.where(null);

        if (aluno.getDadosPessoais().getNome() != null && !aluno.getDadosPessoais().getNome().isEmpty()) {
            alunoSpecification = alunoSpecification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("dadosPessoais").get("nome")), "%" + aluno.getDadosPessoais().getNome().toLowerCase() + "%"));
        }

        if (aluno.getDadosPessoais().getCpf() != null && !aluno.getDadosPessoais().getCpf().isEmpty()) {
            alunoSpecification = alunoSpecification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("dadosPessoais").get("cpf"), aluno.getDadosPessoais().getCpf()));
        }

        if (aluno.getDadosPessoais().getDataNascimento() != null) {
            alunoSpecification = alunoSpecification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("dadosPessoais").get("dataNascimento"), aluno.getDadosPessoais().getDataNascimento()));
        }
        if (aluno.getDadosPessoais().getSexo() != null && !aluno.getDadosPessoais().getSexo().isEmpty()) {
            alunoSpecification = alunoSpecification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("dadosPessoais").get("sexo"), aluno.getDadosPessoais().getSexo()));
        }

        if (aluno.getDadosPessoais().getContato() != null) {
            if (aluno.getDadosPessoais().getContato().getEmail() != null && !aluno.getDadosPessoais().getContato().getEmail().isEmpty()) {
                alunoSpecification = alunoSpecification.and((root, query, criteriaBuilder) ->
                        criteriaBuilder.equal(root.get("dadosPessoais").get("contato").get("email"), aluno.getDadosPessoais().getContato().getEmail()));
            }
            if (aluno.getDadosPessoais().getContato().getNumero() != null && !aluno.getDadosPessoais().getContato().getNumero().isEmpty()) {
                alunoSpecification = alunoSpecification.and((root, query, criteriaBuilder) ->
                        criteriaBuilder.equal(root.get("dadosPessoais").get("contato").get("numero"), aluno.getDadosPessoais().getContato().getNumero()));
            }
        }


        return alunoRepository.findAll(alunoSpecification);
    }

}
package web.api.br.formulario.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;
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

    public ResponseEntity<Aluno> cadastrar(Aluno aluno) {
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

    public Aluno atualizar(Long idAluno, Aluno novosDados) {
        return alunoRepository.findById(idAluno).map(aluno -> {
            aluno.setUsuario(novosDados.getUsuario());
            aluno.setDadosPessoais(novosDados.getDadosPessoais());
            return alunoRepository.save(aluno);
        }).orElseThrow(() -> new RuntimeException("Aluno não encontrado"));
    }

    public void excluir(Long idAluno) {
        alunoRepository.deleteById(idAluno);
    }

    public Optional<Aluno> buscarPor(Long idAluno) {
        return alunoRepository.findById(idAluno);
    }

    public List<Aluno> buscarTodos() {
        return alunoRepository.findAll();
    }




}
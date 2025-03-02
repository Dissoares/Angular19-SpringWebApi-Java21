package web.api.br.formulario.services;

import web.api.br.formulario.repository.DadosEnderecoRepository;
import web.api.br.formulario.repository.DadosPessoaisRepository;
import web.api.br.formulario.repository.DadosContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ResponseStatusException;
import web.api.br.formulario.repository.AlunoRepository;
import web.api.br.formulario.models.DadosEndereco;
import web.api.br.formulario.models.DadosPessoais;
import web.api.br.formulario.models.DadosContato;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import web.api.br.formulario.models.Aluno;
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

    public ResponseEntity<Aluno> salvar(Aluno aluno) {
        DadosPessoais dadosPessoais = aluno.getDadosPessoais();
        DadosContato dadosContato = dadosPessoais.getContato();
        DadosEndereco dadosEndereco = dadosPessoais.getEndereco();

        if (dadosContatoRepository.existsByEmail(dadosContato.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "EmailDuplicado");
        }
        if (dadosPessoaisRepository.existsByCpf(dadosPessoais.getCpf())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CpfDuplicado");
        }

        dadosContatoRepository.save(dadosContato);
        dadosEnderecoRepository.save(dadosEndereco);
        dadosPessoaisRepository.save(dadosPessoais);
        Aluno alunoSalvo = alunoRepository.save(aluno);

        return ResponseEntity.ok(alunoSalvo);
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
}

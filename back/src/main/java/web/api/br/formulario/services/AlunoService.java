package web.api.br.formulario.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import web.api.br.formulario.models.Aluno;
import web.api.br.formulario.models.DadosContato;
import web.api.br.formulario.models.DadosEndereco;
import web.api.br.formulario.models.DadosPessoais;
import web.api.br.formulario.repository.AlunoRepository;
import web.api.br.formulario.repository.DadosContatoRepository;
import web.api.br.formulario.repository.DadosEnderecoRepository;
import web.api.br.formulario.repository.DadosPessoaisRepository;

import java.util.List;
import java.util.Optional;

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

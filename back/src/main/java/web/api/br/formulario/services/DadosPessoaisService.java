package web.api.br.formulario.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.api.br.formulario.models.DadosPessoais;
import web.api.br.formulario.repository.DadosPessoaisRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DadosPessoaisService {
    @Autowired
    private DadosPessoaisRepository dadosPessoaisRepository;

    public DadosPessoais salvar(DadosPessoais dadosPessoais) {
        return dadosPessoaisRepository.save(dadosPessoais);
    }

    public List<DadosPessoais> listarTodos() {
        return dadosPessoaisRepository.findAll();
    }

    public Optional<DadosPessoais> buscarPorId(Long id) {
        return dadosPessoaisRepository.findById(id);
    }

    public void deletar(Long id) {
        dadosPessoaisRepository.deleteById(id);
    }
}

package web.api.br.formulario.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.api.br.formulario.models.DadosPessoais;
import web.api.br.formulario.services.DadosPessoaisService;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/dados-pessoais")
@CrossOrigin(origins = "http://localhost:4200")
public class DadosPessoaisController {

    @Autowired
    private DadosPessoaisService dadosPessoaisService;

    @PostMapping
    public ResponseEntity<DadosPessoais> salvar(@RequestBody DadosPessoais dadosPessoais) {
        DadosPessoais salvo = dadosPessoaisService.salvar(dadosPessoais);
        return ResponseEntity.ok(salvo);
    }

    @GetMapping
    public ResponseEntity<List<DadosPessoais>> listar() {
        List<DadosPessoais> lista = dadosPessoaisService.listarTodos();
        return ResponseEntity.ok(lista);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DadosPessoais> buscarPorId(@PathVariable Long id) {
        Optional<DadosPessoais> dados = dadosPessoaisService.buscarPorId(id);
        return dados.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        dadosPessoaisService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}

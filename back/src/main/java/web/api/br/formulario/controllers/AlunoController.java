package web.api.br.formulario.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.api.br.formulario.models.Aluno;
import web.api.br.formulario.models.DadosPessoais;
import web.api.br.formulario.services.AlunoService;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/aluno")
@CrossOrigin(origins = "http://localhost:4200")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @PostMapping("/salvar")
    public ResponseEntity<Aluno> salvar(@RequestBody Aluno aluno) {
        System.out.println("Recebido: " + aluno);
        return alunoService.salvar(aluno);
    }

    @GetMapping("/buscar-todos")
    public ResponseEntity<List<Aluno>> listarTodos() {
        List<Aluno> listaAlunos = alunoService.listarTodos();
        return ResponseEntity.ok(listaAlunos);
    }

    @GetMapping("/buscar-po/{id}")
    public ResponseEntity<Aluno> buscarPorId(@PathVariable Long id) {
        Optional<Aluno> listaAlunos = alunoService.buscarPorId(id);
        return listaAlunos.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        alunoService.excluir(id);
        return ResponseEntity.noContent().build();
    }
}

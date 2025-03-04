package web.api.br.formulario.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.api.br.formulario.models.Aluno;
import web.api.br.formulario.models.Usuario;
import web.api.br.formulario.services.AlunoService;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/aluno")
@CrossOrigin(origins = "http://localhost:4200")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @PostMapping("/cadastrar")
    public ResponseEntity<Aluno> salvar(@RequestBody Aluno aluno) {
        return alunoService.cadastrar(aluno);
    }

    @PutMapping("/atualizar/{idAluno}")
    public Aluno atualizar(@PathVariable Long idAluno, @RequestBody Aluno novosDados) {
        return alunoService.atualizar(idAluno, novosDados);
    }

    @DeleteMapping("/excluir/{idAluno}")
    public ResponseEntity<Void> excluir(@PathVariable Long idAluno) {
        alunoService.excluir(idAluno);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/buscar/{idAluno}")
    public ResponseEntity<Aluno> buscarPor(@PathVariable Long idAluno) {
        Aluno aluno = alunoService.buscarPor(idAluno).orElse(null);
        return ResponseEntity.ok(aluno);
    }

    @GetMapping("/buscar-todos")
    public ResponseEntity<List<Aluno>> buscarTodos() {
        List<Aluno> listaAlunos = alunoService.buscarTodos();
        return ResponseEntity.ok(listaAlunos);
    }

}

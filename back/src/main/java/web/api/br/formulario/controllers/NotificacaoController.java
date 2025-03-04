package web.api.br.formulario.controllers;
import com.oracle.svm.core.annotate.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.api.br.formulario.models.Notificacao;
import web.api.br.formulario.services.NotificacaoService;

import java.util.List;

@RestController
@RequestMapping("/api/notificacoes")
@CrossOrigin("*")
public class NotificacaoController {
    @Autowired
    private NotificacaoService notificacaoService;

    @PostMapping("/criar")
    public Notificacao criar(@RequestBody Notificacao notificacao) {
        return notificacaoService.criar(notificacao);
    }

    @Delete("/excluir/{id}")
    public void excluir(@RequestBody Long id) {
        notificacaoService.excluir(id);
    }

    @PutMapping("/lida/{id}")
    public void marcarComoLida(@PathVariable Long id) {
        notificacaoService.marcarComoLida(id);
    }

    @GetMapping("/buscar/{idUsuario}")
    public List<Notificacao> buscarPorId(@PathVariable Long idUsuario) {
        return notificacaoService.buscarPor(idUsuario);
    }
}

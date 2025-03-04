package web.api.br.formulario.controllers;
import com.oracle.svm.core.annotate.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.api.br.formulario.models.Notificacao;
import web.api.br.formulario.services.NotificacaoService;

import java.util.List;

@RestController
@RequestMapping("/api/notificacoes")
@CrossOrigin(origins = "http://localhost:4200")
public class NotificacaoController {
    @Autowired
    private NotificacaoService notificacaoService;

    @GetMapping("/buscar-todas")
    public List<Notificacao> buscarNotificacoes() {
        return notificacaoService.buscarNotificacoes();
    }

    @GetMapping("/buscar-por/{id}")
    public List<Notificacao> buscarPorId(@PathVariable Long id) {
        return notificacaoService.buscarNotificacoesPorUsuario(id);
    }

    @PostMapping("/criar-nova")
    public Notificacao criarNotificacao(@RequestBody Notificacao notificacao) {
        return notificacaoService.criarNotificacao(notificacao);
    }

    @PutMapping("/marcar-como-lida/{id}")
    public void atualizarStatusNotificacao(@PathVariable Long id) {
        notificacaoService.atualizarStatusNotificacao(id);
    }

    @Delete("/excluir/{id}")
    public void excluirNotificacao(@RequestBody Long id) {
        notificacaoService.excluirNotificacao(id);
    }
}

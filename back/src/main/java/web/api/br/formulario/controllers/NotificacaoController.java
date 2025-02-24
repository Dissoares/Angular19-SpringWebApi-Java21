package web.api.br.formulario.controllers;

import com.oracle.svm.core.annotate.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.api.br.formulario.enums.StatusSolicitacaoEnum;
import web.api.br.formulario.models.Notificacao;
import web.api.br.formulario.services.NotificacaoService;

import java.util.List;

@RestController
@RequestMapping("/api/notificacoes")
public class NotificacaoController {
    @Autowired
    private NotificacaoService notificacaoService;

    @GetMapping("/buscar-todas")
    public List<Notificacao> buscarNotificacoes() {
        return notificacaoService.buscarNotificacoes();
    }

    @GetMapping("/buscar-por-id")
    public Notificacao buscarPorId(Long id) {
        return notificacaoService.buscarNotificacaoPorId(id);
    }

    @PostMapping("/criar-nova")
    public Notificacao criarNotificacao(@RequestBody Notificacao notificacao) {
        return notificacaoService.criarNotificacao(notificacao.getMensagem(), notificacao.getStatus());
    }

    @PutMapping("/atualizar/{id}")
    public void atualizarStatusNotificacao(@PathVariable Long id, @RequestBody StatusSolicitacaoEnum status) {
        notificacaoService.atualizarStatusNotificacao(id, status);
    }

    @Delete("/excluir/{id}")
    public void excluirNotificacao(@RequestBody Long id) {
        notificacaoService.excluirNotificacao(id);
    }
}

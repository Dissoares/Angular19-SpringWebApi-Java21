package web.api.br.formulario.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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
    private final SimpMessagingTemplate messagingTemplate;

    public NotificacaoController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @GetMapping
    public List<Notificacao> buscarNotificacoes() {
        return notificacaoService.buscarNotificacoes();
    }

    @PostMapping
    public Notificacao criarNotificacao(@RequestBody Notificacao notificacao) {
        return notificacaoService.criarNotificacao(notificacao.getMensagem(), notificacao.getStatus());
    }

    @PutMapping("/{id}")
    public void atualizarStatusNotificacao(@PathVariable Long id, @RequestBody StatusSolicitacaoEnum status) {
        notificacaoService.atualizarStatusNotificacao(id, status);
    }


    @PostMapping("/enviar")
    public void enviarNotificacao(@RequestBody Notificacao notificacao) {
        messagingTemplate.convertAndSend("/topic/notificacoes", notificacao);
    }
}

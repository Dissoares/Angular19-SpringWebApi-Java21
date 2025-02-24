package web.api.br.formulario.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.api.br.formulario.enums.StatusSolicitacaoEnum;
import web.api.br.formulario.models.Notificacao;
import web.api.br.formulario.repository.NotificacaoRepository;
import java.util.List;

@Service
public class NotificacaoService {
    @Autowired
    private NotificacaoRepository notificacaoRepository;

    public List<Notificacao> buscarNotificacoes() {
        return notificacaoRepository.findAll();
    }

    public Notificacao buscarNotificacaoPorId(Long id) {
        return notificacaoRepository.findById(id).orElse(null);
    }

    public Notificacao criarNotificacao(String mensagem, StatusSolicitacaoEnum status) {
        Notificacao notificacao = new Notificacao();
        notificacao.setMensagem(mensagem);
        notificacao.setStatus(status);
        return notificacaoRepository.save(notificacao);
    }

    public void atualizarStatusNotificacao(Long id, StatusSolicitacaoEnum status) {
        Notificacao notificacao = notificacaoRepository.findById(id).orElseThrow(() -> new RuntimeException("Notificação não encontrada"));
        notificacao.setStatus(status);
        notificacaoRepository.save(notificacao);
    }

    public void excluirNotificacao(Long id) {
        notificacaoRepository.deleteById(id);
    }
}

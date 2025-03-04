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

    public List<Notificacao> buscarNotificacoesPorAluno(Long idAluno) {
        return notificacaoRepository.findByAlunoIdAlunoAndAtivoTrue(idAluno);
    }

    public Notificacao criarNotificacao(Notificacao notificacao) {
        return notificacaoRepository.save(notificacao);
    }

    public void atualizarStatusNotificacao(Long id) {
        Notificacao notificacao = notificacaoRepository.findById(id).orElseThrow(() -> new RuntimeException("Notificação não encontrada"));
        notificacao.setAtivo(false);
        notificacaoRepository.save(notificacao);
    }

    public void excluirNotificacao(Long id) {
        notificacaoRepository.deleteById(id);
    }
}

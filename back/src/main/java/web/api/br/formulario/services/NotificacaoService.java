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

    public List<Notificacao> buscarPoridUsuario(Long idUsuario) {
        return notificacaoRepository.findByUsuario_IdUsuarioAndAtivoTrue(idUsuario);
    }

    public Notificacao nova(Notificacao notificacao) {
        return notificacaoRepository.save(notificacao);
    }

    public void marcarComoLida(Long id) {
        Notificacao notificacao = notificacaoRepository.findById(id).orElseThrow(() -> new RuntimeException("Notificação não encontrada"));
        notificacao.setAtivo(false);
        notificacaoRepository.save(notificacao);
    }

    public void excluir(Long id) {
        notificacaoRepository.deleteById(id);
    }
}

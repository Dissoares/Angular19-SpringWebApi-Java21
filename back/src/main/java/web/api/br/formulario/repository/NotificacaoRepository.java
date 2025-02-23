package web.api.br.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.api.br.formulario.models.Notificacao;

public interface NotificacaoRepository extends JpaRepository<Notificacao, Long> {
}

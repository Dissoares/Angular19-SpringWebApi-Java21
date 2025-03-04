package web.api.br.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.api.br.formulario.models.Notificacao;
import web.api.br.formulario.models.Usuario;

import java.util.List;

public interface NotificacaoRepository extends JpaRepository<Notificacao, Long> {

    List<Notificacao> findByUsuario_IdUsuarioAndAtivoTrue(Long usuarioId);

}

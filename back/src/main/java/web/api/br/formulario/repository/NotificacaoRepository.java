package web.api.br.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.api.br.formulario.models.Notificacao;

import java.util.List;

public interface NotificacaoRepository extends JpaRepository<Notificacao, Long> {

    List<Notificacao> findByAlunoIdAndAtivoTrue(Long alunoId);
}

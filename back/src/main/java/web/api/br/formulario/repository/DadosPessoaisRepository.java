package web.api.br.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.api.br.formulario.models.DadosPessoais;

public interface DadosPessoaisRepository extends JpaRepository<DadosPessoais, Long> {
}

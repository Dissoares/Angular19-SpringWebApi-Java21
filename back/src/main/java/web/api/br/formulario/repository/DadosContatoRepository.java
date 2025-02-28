package web.api.br.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.api.br.formulario.models.DadosContato;

public interface DadosContatoRepository extends JpaRepository<DadosContato, Long> {
    boolean existsByEmail(String email);

}

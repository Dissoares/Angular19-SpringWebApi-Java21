package web.api.br.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.api.br.formulario.models.DadosEndereco;

public interface DadosEnderecoRepository extends JpaRepository<DadosEndereco, Long> {
}

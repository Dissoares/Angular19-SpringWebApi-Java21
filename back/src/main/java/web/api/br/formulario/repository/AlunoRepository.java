package web.api.br.formulario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.api.br.formulario.models.Aluno;
import web.api.br.formulario.models.DadosPessoais;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}

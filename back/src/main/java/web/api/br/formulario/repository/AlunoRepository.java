package web.api.br.formulario.repository;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import web.api.br.formulario.models.Aluno;
import web.api.br.formulario.models.DadosPessoais;

import java.util.List;

public interface AlunoRepository extends JpaRepository<Aluno, Long>, JpaSpecificationExecutor<Aluno> {


}

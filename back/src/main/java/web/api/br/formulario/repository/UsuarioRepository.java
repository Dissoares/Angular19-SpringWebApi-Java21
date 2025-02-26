package web.api.br.formulario.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import web.api.br.formulario.models.Usuario;

public interface UsuarioRepository  extends JpaRepository<Usuario, Long> {
}

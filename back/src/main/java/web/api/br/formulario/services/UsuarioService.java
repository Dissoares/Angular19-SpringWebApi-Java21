package web.api.br.formulario.services;
import org.springframework.beans.factory.annotation.Autowired;
import web.api.br.formulario.repository.UsuarioRepository;
import org.springframework.stereotype.Service;
import web.api.br.formulario.models.Usuario;
import java.util.Optional;
import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> buscarTodos() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> buscarPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    public Usuario criar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario atualizar(Long id, Usuario userDetails) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setNomeUsuario(userDetails.getNomeUsuario());
            usuario.setEmail(userDetails.getEmail());
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    public void excluir(Long id) {
        usuarioRepository.deleteById(id);
    }
}

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

    public Usuario cadastrar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario atualizar(Long idUsuario, Usuario userDetails) {
        return usuarioRepository.findById(idUsuario).map(usuario -> {
            usuario.setNomeUsuario(userDetails.getNomeUsuario());
            usuario.setEmail(userDetails.getEmail());
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    public void excluir(Long idUsuario) {
        usuarioRepository.deleteById(idUsuario);
    }

    public Optional<Usuario> buscarPor(Long idUsuario) {
        return usuarioRepository.findById(idUsuario);
    }

    public List<Usuario> buscarTodos() {
        return usuarioRepository.findAll();
    }





}

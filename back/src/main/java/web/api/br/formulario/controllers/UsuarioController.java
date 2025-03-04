package web.api.br.formulario.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.api.br.formulario.models.Usuario;
import web.api.br.formulario.services.UsuarioService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    public Usuario criar(@RequestBody Usuario usuario) {
        return usuarioService.cadastrar(usuario);
    }

    @PutMapping("/atualizar/{idUsuario}")
    public Usuario atualizar(@PathVariable Long idUsuario, @RequestBody Usuario userDetails) {
        return usuarioService.atualizar(idUsuario, userDetails);
    }

    @DeleteMapping("/excluir/{idUsuario}")
    public void excluir(@PathVariable Long idUsuario) {
        usuarioService.excluir(idUsuario);
    }

    @GetMapping("/buscar/{idUsuario}")
    public Optional<Usuario> buscarPorId(@PathVariable Long idUsuario) {
        return usuarioService.buscarPor(idUsuario);
    }

    @GetMapping("buscar-todos")
    public List<Usuario> buscarTodos() {
        return usuarioService.buscarTodos();
    }

}

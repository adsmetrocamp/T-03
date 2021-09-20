package com.ingressoapp.ingresso.controller;

import com.ingressoapp.ingresso.dto.UsuarioDTO;
import com.ingressoapp.ingresso.model.Usuario;
import com.ingressoapp.ingresso.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
    public String register(@RequestBody UsuarioDTO usuarioDTO) {

        Usuario usuario = new Usuario();

        usuario.setNome("Meu usuario");

        usuarioRepository.save(usuario);

        return "Login";
    }

}



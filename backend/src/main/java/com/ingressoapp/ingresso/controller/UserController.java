package com.ingressoapp.ingresso.controller;

import com.ingressoapp.ingresso.dto.UserDTO;
import com.ingressoapp.ingresso.model.User;
import com.ingressoapp.ingresso.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public String register(@RequestBody UserDTO userDTO) {

        User user = new User();

        user.setName("Meu usuario");

        userRepository.save(user);

        return "Login";
    }

}



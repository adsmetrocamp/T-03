package com.ingressoapp.ingresso.dto;

import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.*;
import java.util.Date;

public class UsuarioDTO {

    @NotNull
    @Size(max = 50)
    private String nome;

    @NotNull
    @Email
    private String email;

    @NotNull
    @Size(min = 8)
    private String senha;

    @NotNull
    @Past
    private Date nascimento;

    @NotNull
    @CPF
    private String cpf;

}

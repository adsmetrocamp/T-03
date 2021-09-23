package com.ingressoapp.ingresso.dto;

import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.*;
import java.util.Date;

public class UserDTO {

    @NotNull
    @Size(max = 50)
    private String name;

    @NotNull
    @Email
    private String email;

    @NotNull
    @Size(min = 8)
    private String password;

    @NotNull
    @Past
    private Date birthDate;

    @NotNull
    @CPF
    private String cpf;

}

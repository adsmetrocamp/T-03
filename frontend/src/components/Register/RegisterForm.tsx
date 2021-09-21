import { Box, Heading, Text, FormControl, FormLabel, Input, Divider, Button, Link, Checkbox } from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import { registerFormSchema } from "../../utils/validators/user";
import { UserRegisterFormType } from "../../models/user/UserRegisterFormType";
import { Link as RouterLink, useHistory } from "react-router-dom";

import DatePicker from "react-datepicker";

import InputMask from "react-input-mask";

interface Props {}

export const RegisterForm = (props: Props) => {
  const registerForm = useFormik<UserRegisterFormType>({
    initialValues: new UserRegisterFormType(),
    onSubmit: handleSubmit,
    validationSchema: registerFormSchema,
  });

  function handleSubmit(value: UserRegisterFormType) {
    console.log(value);
  }

  return (
    <Box width="70%">
      <form onSubmit={registerForm.handleSubmit}>
        <Heading size="lg">Cadastro</Heading>
        <Text size="sm" color="gray.400" mt={2}>
          Ainda não tem conta? Insira suas informações para estar apto para comprar seus bilhetes!
        </Text>

        <Box mt={8}>
          <FormControl isInvalid={!!registerForm.errors.name}>
            <FormLabel>Nome</FormLabel>
            <Input placeholder="Digite seu nome" name="name" onChange={registerForm.handleChange} maxLength={255} />
            <Text color="red.600" mt={1}>
              {registerForm.errors.name}
            </Text>
          </FormControl>
          <FormControl isInvalid={!!registerForm.errors.email} mt={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Digite seu email" name="email" onChange={registerForm.handleChange} maxLength={255} />
            <Text color="red.600" mt={1}>
              {registerForm.errors.email}
            </Text>
          </FormControl>

          <FormControl isInvalid={!!registerForm.errors.birthDate} mt={4}>
            <FormLabel>Data de Nascimento</FormLabel>
            <DatePicker
              selected={registerForm.values.birthDate}
              dateFormat="dd/MM/yyyy"
              onChange={(e) => registerForm.setFieldValue("birthDate", e)}
              placeholderText="Selecione a data de nascimento"
              calendarStartDay={2}
              customInput={
                <InputMask mask="99/99/9999" maskPlaceholder={null} placeholder="Selecione a data de nascimento">
                  <Input placeholder="Selecione a data de nascimento" maxLength={11} />
                </InputMask>
              }
            />

            <Text color="red.600" mt={1}>
              {registerForm.errors.birthDate}
            </Text>
          </FormControl>

          <FormControl isInvalid={!!registerForm.errors.cpf} mt={4}>
            <FormLabel>CPF</FormLabel>
            <InputMask mask="999.999.999-99" onChange={registerForm.handleChange} value={registerForm.values.cpf} maskPlaceholder={null}>
              <Input placeholder="Digite seu CPF" name="cpf" onChange={registerForm.handleChange} maxLength={255} />
            </InputMask>

            <Text color="red.600" mt={1}>
              {registerForm.errors.cpf}
            </Text>
          </FormControl>
          <FormControl mt={4} isInvalid={!!registerForm.errors.password}>
            <FormLabel>Senha</FormLabel>
            <Input placeholder="Digite sua senha" type="password" name="password" onChange={registerForm.handleChange} maxLength={255} />

            <Text color="red.600" mt={1}>
              {registerForm.errors.password}
            </Text>
          </FormControl>
          <FormControl mt={4} isInvalid={!!registerForm.errors.passwordConfirmation}>
            <FormLabel>Confirmação de senha</FormLabel>
            <Input placeholder="Digite a confirmação de senha" type="password" name="passwordConfirmation" onChange={registerForm.handleChange} maxLength={255} />

            <Text color="red.600" mt={1}>
              {registerForm.errors.passwordConfirmation}
            </Text>
          </FormControl>

          <Checkbox colorScheme="purple.500" onChange={() => {}} isChecked={true} my={8}>
            Eu concordo com os{" "}
            <Link color="purple.500" fontWeight="600">
              Termos de Uso e Privacidade
            </Link>
          </Checkbox>

          <br />

          <Button variant="solid" px={5} bg="purple.500" color="white" type="submit">
            Cadastrar
          </Button>

          <Button variant="outline" px={5} ml={3}>
            Voltar ao login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export class UserRegisterFormType {
  name: string = "";
  email: string = "";
  password: string = "";
  passwordConfirmation: string = "";
  cpf: string = "";
  birthDate!: Date;
}

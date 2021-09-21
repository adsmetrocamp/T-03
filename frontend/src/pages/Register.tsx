import React, { useState } from "react";

import { RegisterForm } from "../components/Register/RegisterForm";
import { RegisterPassword } from "../components/Register/RegisterPassword";
import { AuthLayout } from "../components/Layouts/AuthLayout";
import { useFormik } from 'formik';
import { UserPasswordRegisterFormType, UserRegisterFormType } from '../models/user/UserRegisterFormType';
import { registerFormSchema, userPasswordRegisterSchema } from '../utils/validators/user';

interface Props { }

export const Register = (props: Props) => {

  const [step, setStep] = useState<'DATA' | 'PASSWORD'>('DATA');

  const registerForm = useFormik<UserRegisterFormType>({
    initialValues: new UserRegisterFormType(),
    onSubmit: () => setStep('PASSWORD'),
    validationSchema: registerFormSchema,
  });

  const registerPasswordForm = useFormik<UserPasswordRegisterFormType>({
    initialValues: new UserPasswordRegisterFormType(),
    onSubmit: (v) => {
      console.log(v);
    },
    validationSchema: userPasswordRegisterSchema,
  });

  return (
    <AuthLayout>
      {step === 'DATA' && <RegisterForm registerForm={registerForm} />}
      {step === 'PASSWORD' && <RegisterPassword registerPasswordForm={registerPasswordForm} onBack={() => setStep('DATA')} />}
    </AuthLayout>
  );
};

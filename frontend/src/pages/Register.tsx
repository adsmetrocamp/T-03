import React from "react";

import { Box } from "@chakra-ui/react";
import { RegisterForm } from "../components/Register/RegisterForm";
import { AuthLayout } from "../components/Layouts/AuthLayout";

interface Props {}

export const Register = (props: Props) => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

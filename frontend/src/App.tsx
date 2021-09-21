import React from "react";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppRoutes } from "./config/routes/app.routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;

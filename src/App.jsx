import { useState } from "react";
import "./App.css";
import { AuthContextProvider } from "./index";

function App() {
  return (
    <>
      <AuthContextProvider>
        <span>Hola desde Context</span>
      </AuthContextProvider>
    </>
  );
}

export default App;

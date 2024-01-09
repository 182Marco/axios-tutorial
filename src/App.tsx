import React from "react";
import Title from "./components/Title";
import { CustomInstance } from "./examples";
import "./axios/global";

export const App = () => (
  <main>
    <Title />
    <CustomInstance />
  </main>
);
export default App;

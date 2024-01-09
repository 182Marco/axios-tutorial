import React from "react";
import Title from "./components/Title";
import { FirstReq } from "./examples";

export const App = () => {
  console.log(`marcom ---> something: `);
  return (
    <main>
      <Title />
      <FirstReq />
    </main>
  );
};

export default App;

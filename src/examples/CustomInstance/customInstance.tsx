import React from "react";
import { useCustomInstance } from "./customInstance.hook";

export const CustomInstance = () => {
  const {} = useCustomInstance();
  return <h2 className="text-center">custom instance</h2>;
};

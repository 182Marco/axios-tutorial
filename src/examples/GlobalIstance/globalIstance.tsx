import React from "react";
import { useGlobalInstance } from "./globalIstance.hook";

export const GlobalInstance = () => {
  useGlobalInstance();
  return <h2 className="text-center">global instance</h2>;
};

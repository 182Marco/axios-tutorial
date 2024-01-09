import React from "react";
import { useInterceptors } from "./interceptors.hook";

export const Interceptors = () => {
  useInterceptors();
  return <h2 className="text-center">interceptors</h2>;
};

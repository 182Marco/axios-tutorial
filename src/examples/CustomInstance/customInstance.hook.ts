import { useEffect } from "react";
import axios from "axios";
import { authFetch } from "../../axios/custom";
import { randomUserUrl } from "./customInstance.utils";

export const useCustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("react-store-products");
      const resp2 = await axios(randomUserUrl);
    } catch (er: any) {
      console.log(`there as been an errror ---> ${er.response}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {};
};

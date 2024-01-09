import axios from "axios";
import { useEffect } from "react";
import { productsUrl, randomUserUrl } from "./globalIstance.utils";

export const useGlobalInstance = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios(productsUrl);
      const res = await axios(randomUserUrl);
    } catch (er: any) {
      console.error(`an error occurred ---> ${er.response}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {};
};

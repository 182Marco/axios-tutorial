import { useEffect } from "react";
import { authFetch } from "../../axios/interceptors";

export const useInterceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/react-store-products");
    } catch (er) {
      console.log(`An error occurred ---> ${er}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {};
};

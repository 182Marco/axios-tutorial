import { useEffect } from "react";

export const useInterceptors = () => {
  const fetchData = async () => {
    console.log("axios interceptors");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {};
};

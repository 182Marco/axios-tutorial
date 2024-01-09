import { useEffect } from "react";

export const useCustomInstance = () => {
  const fetchData = async () => {
    console.log("custom axios instance");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {};
};

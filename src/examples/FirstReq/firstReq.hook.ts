import axios from "axios";
import { useEffect } from "react";
import { url } from "./firstReq.utils";

export const useFirstReq = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      console.log(`marcom ---> those are the res: `, data);
    } catch (er: any) {
      console.log(`marcom ---> this is the error: ${er.response}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {};
};

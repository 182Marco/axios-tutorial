import { useState } from "react";
import axios from "axios";
import { url } from "./headerReq.utils";

export const useHeaderReq = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchDadJoke = async () => {
    try {
      const {
        data: { joke },
      } = await axios(url, {
        headers: { accept: "application/json" },
      });
      setJoke(joke);
    } catch (er: any) {
      console.log(`An error occurred --> ${er.message}`);
    }
  };

  return {
    joke,
    setJoke,
    fetchDadJoke,
  };
};

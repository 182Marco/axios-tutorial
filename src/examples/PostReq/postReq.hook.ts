import axios from "axios";
import { FormEvent, useState } from "react";
import { url } from "./postReq.utils";

export const usePostRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, { name, email }, {});
    } catch (er: any) {
      console.error(`There was an error ---> ${er.response}`);
    }
  };

  return {
    email,
    setEmail,
    setName,
    name,
    handleSubmit,
  };
};

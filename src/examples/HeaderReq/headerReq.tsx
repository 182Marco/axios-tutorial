import React from "react";
import { useHeaderReq } from "./headerReq.hook";

// Accept : 'application/json'

export const HeaderReq = () => {
  const { joke, fetchDadJoke } = useHeaderReq();

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};

import React from "react";
// limit, if 429 wait for 15 min and try again
import { useFirstReq } from "./firstReq.hook";

export const FirstReq = () => {
  useFirstReq();

  return <h2 className="text-center">first request</h2>;
};

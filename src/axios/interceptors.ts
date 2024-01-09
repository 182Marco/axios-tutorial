import axios from "axios";

export const authFetch = axios.create({
  baseURL: "https://course-api.com",
});

authFetch.interceptors.request.use(
  (req) => {
    const headers = req.headers as Record<string, any>;
    headers.common["Accept"] = "application/json";
    console.log(`marcom ---> request sent`);
    return req;
  },
  (er) => {
    Promise.reject(er);
  }
);

authFetch.interceptors.response.use(
  (res) => {
    console.log(`marcom ---> res: `, res);
    return res;
  },
  (er) => {
    if (er.response.status === 404) console.log("NOT FOUND");
    return Promise.reject(er);
  }
);

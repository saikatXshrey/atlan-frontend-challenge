import axios from "axios";

const queryServer = (q) => {
  const { data } = axios({
    method: "GET",
    url: "http://localhost:4000",
    params: { q },
  });

  return data;
};

export default queryServer;

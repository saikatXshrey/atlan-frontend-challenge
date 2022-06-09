import axios from "axios";

const queryServer = async (q) => {
  const { data } = await axios({
    method: "GET",
    url: "http://localhost:4000",
    params: { q },
  });

  return data;
};

export default queryServer;

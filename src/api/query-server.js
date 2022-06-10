import axios from "axios";

const queryServer = async (q) => {
  const { data } = await axios({
    method: "GET",
    url: "https://another-one-server.herokuapp.com/query",
    params: { q },
  });

  return data;
};

export default queryServer;

import axios from "axios";

const queryServer = async (q) => {
  const { data } = await axios({
    method: "GET",
    url: "https://sql-workbench-server.herokuapp.com/query",
    params: { q },
  });

  return data;
};

export default queryServer;

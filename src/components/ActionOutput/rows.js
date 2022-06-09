const makeRows = (data) => {
  const rows = [];

  data.map((row, id) => rows.push({ ...row, id: id }));

  return rows;
};

export default makeRows;

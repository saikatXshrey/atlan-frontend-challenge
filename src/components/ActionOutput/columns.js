const makeCoulmns = (keys) => {
  const columns = [
    {
      field: "id",
      width: 70,
      headerName: "Sl No",
      align: "center",
      headerAlign: "center",
    },
  ];

  //   map all the coulmns
  keys.map((key) => {
    columns.push({
      field: key,
      headerName: key,
      width: 300,
      align: "center",
      headerAlign: "center",
    });
  });

  return columns;
};

export default makeCoulmns;

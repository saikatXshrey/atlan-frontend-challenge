import React, { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

// components
import { QueryEditor, ActionOutput } from "./components";

// data
import { queryServer } from "./api";

const App = () => {
  // state
  const [data, setData] = useState([]);

  useEffect(() => {
    queryServer("select * from customers;").then((res) => setData(res));
  }, []);

  return (
    <Box m={3}>
      <Stack spacing={5}>
        <Grid container justifyContent="center" alignItems="center">
          <Typography variant="h2">Atlan Query Editor</Typography>
        </Grid>

        {/* query-space */}
        <QueryEditor setData={setData} />

        {data.length > 0 && <ActionOutput data={data} />}
      </Stack>
    </Box>
  );
};

export default App;

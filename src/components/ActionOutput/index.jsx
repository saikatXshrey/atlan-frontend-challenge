import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Card, Grid } from "@mui/material";

// data
import makeColumns from "./columns";
import makeRows from "./rows";

const ActionOutput = ({ data }) => {
  // hooks
  const rows = makeRows(data);
  const columns = makeColumns(Object.keys(data[0]));

  return (
    <Box pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Box p={3} height="auto">
              <DataGrid
                rows={rows}
                columns={columns}
                autoHeight={true}
                headerHeight={88}
                pageSize={10}
                rowsPerPageOptions={[10]}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActionOutput;

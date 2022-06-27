import React from "react";
import { Stack, Typography, Grid } from "@mui/material";

// component
import Card from "./Card";

// data
import tables from "./tables";

const TablesInfo = () => {
  return (
    <Grid container>
      <Grid item xs={12} gutterBottom>
        <Typography variant="h2">Default DB Tables</Typography>
      </Grid>

      <Grid container spacing={3}>
        {tables.map((table) => (
          <Grid item xs={12} sm={6} md={6}>
            <Card name={table.table} columns={table.columns} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default TablesInfo;

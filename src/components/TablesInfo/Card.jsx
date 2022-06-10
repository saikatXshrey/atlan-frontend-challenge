import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TableCard = ({ name, columns }) => {
  return (
    <Card sx={{ minWidth: 275, borderRadius: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <br />

        {columns.map((column) => (
          <Typography variant="body2" gutterBottom>
            → {column}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default TableCard;

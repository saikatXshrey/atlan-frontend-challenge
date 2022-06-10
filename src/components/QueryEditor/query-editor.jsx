import React, { useEffect } from "react";

// material-ui
import { Stack, Button, Alert, Grid, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
// form & validation
import * as yup from "yup";
import { useFormik } from "formik";

// data
import { queryServer } from "../../api";

const QueryEditor = ({ setBlank, setData }) => {
  const formik = useFormik({
    initialValues: {
      query: "select * from customers;",
    },

    onSubmit: ({ query }) => {
      if (!query) {
        setBlank(true);
        setData([]);
        console.log("SQL Query is required!");
        return;
      }

      queryServer(query)
        .then((res) => {
          setData(res);
          setBlank(false);
        })
        .catch(() => {
          setData([]);
          setBlank(false);
        });
    },
  });

  const { errors, touched, handleSubmit, values, getFieldProps } = formik;

  return (
    <Stack justifyContent="center" alignItems="stretch" spacing={2}>
      <form onSubmit={handleSubmit}>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          style={{
            width: "100%",
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: "0 20px 20px 20px",
            outline: "none",
          }}
          name="query"
          label="SQL Query"
          {...getFieldProps("query")}
          error={Boolean(touched.query && errors.query)}
          helperText={touched.query && errors.query}
        />
        <Button fullWidth type="submit" variant="contained">
          Run Query
        </Button>
      </form>
    </Stack>
  );
};

export default QueryEditor;

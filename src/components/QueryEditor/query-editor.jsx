import React, { useEffect } from "react";

// material-ui
import { Button, Grid, TextareaAutosize } from "@mui/material";
// form & validation
import * as yup from "yup";
import { Field, useFormik, Form } from "formik";

// data
import { queryServer } from "../../api";

// yup validation object
const validationSchema = yup.object({
  query: yup.string().required("SQL Query is required!"),
});

const QueryEditor = () => {
  const formik = useFormik({
    initialValues: {
      query: "select * from customers;",
    },

    validationSchema: validationSchema,

    onSubmit: ({ query }) => queryServer(query).then((res) => console.log(res)),
  });

  const { errors, touched, handleSubmit, values, getFieldProps } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={10}
        // placeholder="select * from customers;"
        style={{ width: "100%" }}
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
  );
};

export default QueryEditor;

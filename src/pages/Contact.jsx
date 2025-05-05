import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useTitle } from "../context/TitleContext";

function Contact() {
  const { setTitle } = useTitle();
  useEffect(() => setTitle("Contact"), []);

  const formik = useFormik({
    initialValues: { email: "", message: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="h4">Contact</Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        margin="normal"
        multiline
        rows={4}
        label="Message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </Box>
  );
}

export default Contact;

import React, { useEffect } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useTitle } from "../context/TitleContext";

function Education() {
  const { setTitle } = useTitle();
  useEffect(() => setTitle("Education"), []);

  return (
    <>
      <Typography variant="h4">Education</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Degree</TableCell>
            <TableCell>Institution</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Bachelors in Computer Science</TableCell>
            <TableCell>University</TableCell>
            <TableCell>2025 (Expected)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default Education;

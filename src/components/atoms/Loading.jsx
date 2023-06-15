import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className="center">
      <CircularProgress color="inherit" />;
    </div>
  );
}

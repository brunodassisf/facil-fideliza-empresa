"use client";

import { Box } from "@mui/material";

const RootProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Box component="main">{children}</Box>;
};

export default RootProvider;

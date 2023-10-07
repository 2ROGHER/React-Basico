import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
const CopyRight = () => {
  return (
    <Typography variant='body2' color='GrayText' align="center">
      {`Copyright (c)`}
      <Link color="inherit" href="https://imaginaformacion.com">
        Imagina informacion
      </Link>
      {''}
      { new Date().getFullYear()}
    </Typography>
  );
};

export default CopyRight;

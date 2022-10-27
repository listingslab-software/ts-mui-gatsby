import * as React from "react";
import type { HeadFC } from "gatsby";
import {
  Container,
  Typography,
} from "@mui/material";

const IndexPage = () => {
  return (
    <Container>
      <Typography variant="h6">
        Gatsby with DT9 Features
      </Typography>
    </Container>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (<title>
            Gatsby with DT9 Features
          </title>
  );
};

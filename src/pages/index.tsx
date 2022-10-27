import * as React from "react";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h2>Gatsby with DT9 Features</h2>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => {
  return (<title>
            Gatsby with DT9 Features
          </title>
  );
}

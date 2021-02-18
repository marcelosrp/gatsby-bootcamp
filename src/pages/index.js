import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <h1>Hello.</h1>
    <h2>
      Im Andrew Mead, a full-stack developer living in beautiful Philadelphia.
    </h2>
    <p>
      Need a developer? <Link to="/contact">Contact me.</Link>
    </p>
  </Layout>
);

export default IndexPage

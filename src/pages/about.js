import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <h1>About me</h1>
    <h2>I currently teach full-time on Udemy</h2>
    <p>
      <Link to="/contact">Want to work with me? Reach out.</Link>
    </p>

  </Layout>
);

export default AboutPage;

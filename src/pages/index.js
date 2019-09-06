import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainContent from "../components/mainContent";
import RelativeLinks from "../components/relativeLinks";

import "./index.css";

const IndexPage = () => (
  <Layout>
    <div className="container">
      <SEO title="Home" />
      <h1 className="page-title">Newsroom, trade & advertising</h1>
      <div className="column-wrapper">
        <div className="left-column">
          <MainContent />
        </div>
        <div className="right-column">
          <RelativeLinks />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

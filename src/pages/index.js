import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainContent from "../components/mainContent";
import RelativeLinks from "../components/relativeLinks";
import InternationalLinks from "../components/internationalLinks";

import "./index.css";

const title = "Newsroom, trade & advertising";

const IndexPage = () => (
  <Layout>
    <div className="container">
      <SEO title={title} />
      <h1 className="page-title">{title}</h1>
      <div className="column-wrapper">
        <div className="left-column">
          <MainContent />
        </div>
        <div className="right-column">
          <RelativeLinks />
          <InternationalLinks />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

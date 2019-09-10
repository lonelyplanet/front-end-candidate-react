import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import LinkList from "./linkList";

const transformInternational = ({ content }) => {
  return content.list.map(({ language, url }) => {
    return {
      text: language,
      href: url,
    };
  });
};

const InternationalLinks = () => {
  const data = useStaticQuery(graphql`
    query InternationalLinks {
      allDataJson(filter: { content: { value: { eq: "international" } } }) {
        nodes {
          content {
            list {
              language
              url
            }
          }
        }
      }
    }
  `);

  return (
    <LinkList
      title="International Links"
      links={transformInternational(data.allDataJson.nodes[0])}
    />
  );
};

InternationalLinks.propTypes = {};

export default InternationalLinks;

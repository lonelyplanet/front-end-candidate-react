import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import LinkList from "./linkList";

const transformRelative = ({ content }) => {
  return content.list.map(({ title, path }) => {
    return {
      text: title,
      href: path,
    };
  });
};

const RelativeLinks = () => {
  const data = useStaticQuery(graphql`
    query relativeLinks {
      allDataJson(filter: { content: { value: { eq: "related" } } }) {
        nodes {
          content {
            list {
              title
              path
            }
          }
        }
      }
    }
  `);

  return (
    <LinkList
      title="Related Links"
      links={transformRelative(data.allDataJson.nodes[0])}
    />
  );
};

RelativeLinks.propTypes = {};

export default RelativeLinks;

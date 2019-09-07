import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";

const MainContent = () => {
  const data = useStaticQuery(graphql`
    query mainLinks {
      allDataJson(filter: { content: { value: { eq: "main" } } }) {
        nodes {
          content {
            list {
              title
              description
              path
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <p>
        Welcome to Lonely Planet&apos;s engine room, the hub for news, trade and
        advertising. If you need a media release, stock for your store or the
        lowdown on advertising with us, you&apos;ve come to the right place.
      </p>
      {data.allDataJson.nodes[0].content.list.map(item => {
        return (
          <Fragment key={item.path}>
            <h2>
              <a href={item.path}>{item.title}</a>
            </h2>
            <p>{item.description}</p>
          </Fragment>
        );
      })}
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;

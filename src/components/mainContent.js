import React, { Fragment, Component } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {Route, NavLink, HashRouter} from "react-router-dom";
import newsroom from "./newsroom";

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
    <div style={{textAlign: "left", alignContent: "left"}}>
      <p>
        <b>Welcome to Lonely Planet&apos;s engine room, the hub for news, trade and
        advertising. If you need a media release, stock for your store or the
        lowdown on advertising with us, you&apos;ve come to the right place.</b>
      </p>
      {data.allDataJson.nodes[0].content.list.map(item => {
        return (
          <HashRouter>
          <Fragment key={item.path}>
            {/* cannot figure out how to pull img src from main.json and properly render */ }
            <h2 style={{paddingTop: "7px"}}>
              <a style={{color: "#297CBB", textDecoration: "none", fontSize: "30px"}} href={item.path}>{item.title}</a>
            </h2>
            <p>{item.description}</p>
            <div style={{borderBottom: "1px #dae1e7 solid"}}></div>
          </Fragment>
          </HashRouter>
        );
      })}
    </div>
  );
};

MainContent.propTypes = {};

export default MainContent;


<h1 align="center">
  Lonely Planet React / GraphQL challenge
</h1>

This project is meant to be a relatively simple demonstration of the types of challenges a developer might face early on at Lonely Planet. It will also test some simple implementations of React and, as a bonus, GraphQL.

Instructions for setting up the repo and your development environment are below. Please reach out for help if you have trouble getting setup, as environments can be a pain and this part is not the point of the exercise.

When you're ready to show off your work, push your commits to your fork either on the `master` branch or some other. Then, if you return to lonelyplanet's upstream version of this repo, you should be prompted by Github to open a pull request. Then, we'll be able to review.

-----------

## 🚀 Quick start

1.  **Fork the repo on Github**

    From the repo in Github (https://github.com/lonelyplanet/front-end-candidate-react) use Github's fork functionality to create a copy on your own personal profile so you can begin development. At the time of writing there is a button in the top right corner of the page to do this.

1.  **Clone fork onto your machine.**

    From a parent directory of your choice, run the following command, replacing the github username with your own:

    ```sh
    git clone git@github.com:vacas5/front-end-candidate-react.git
    ```

    This requires that your computer already has [git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

1.  **Install dependencies.**

    1. Navigate into your new site’s directory.

        ```sh
        cd front-end-candidate-react/
        ```

    1. Verify node version

        To install dependencies, first ensure you have Node installed on your machine, and are using version 10.13.0 or higher. To check which version you have installed (if you have it installed), you can run `node -v`. It should print the version or tell you that it can't run the command in the event node isn't installed at all.

        We recommend using [nvm](https://github.com/nvm-sh/nvm/) to manage your node versions if you don't have the right one installed.

    1. Install dependencies using yarn

        ```sh
        yarn install
        ```

        This requires that you also have [yarn installed](https://yarnpkg.com/en/docs/install#mac-stable) on your local machine.

    1. Install gatsby-cli

        This tool will help you run the development server. Run the following command to install:

        ```sh
        npm install -g gatsby-cli
        ```

1.  **Start developing.**

    Now for the fun part

    ```sh
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `front-end-candidate-react` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->

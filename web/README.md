<h1>
  Getting started with the Borealis Gatsby Sanity Template
</h1>
Initialize Gatsby
1. Clone repo to your local machine
2. Open in VSCode / Code Editor
3. In `/web` directory, run: `npm install`

## Initialize Sanity

1. Make sure you have the latest version of the Sanity CLI installed globally
   `npm install -g @sanity/cli`
2. Log in to Sanity via the CLI
   `sanity login`
3. ::Remind Stu to “add” you to the Sanity project in question for write & deploy privileges::

### If Creating a Brand New Project

1. Run `sanity init` from the ::/studio:: directory and follow the prompts to create a new sanity project and follow the prompts
2. Once initialized but before committing, run `sanity start` to make sure the studio runs successfully.
3. Create two new files called ::.env.production:: and ::.env.development:: in the ::/studio:: directory. It’s important that you have BOTH of these files, with the following values:

```
SANITY_STUDIO_API_PROJECT_ID="<PROJECT ID>"
SANITY_STUDIO_API_DATASET="production"
```

4. If you mark your dataset as private, via the Sanity web GUI, you will need to include `SANITY_STUDIO_TOKEN=“” `as well
5. Once the files are populated with the correct info, remove the project id and dataset from sanity.json, leaving empty strings, i.e.

6. Later, but before you can pull the data into Gatsby develop, you will have to deploy the sanity GraphQL api using `sanity graphql deploy`. Whenever you modify the schemas, you will need to run this again.

### If Working on an Existing Project

1. Run `sanity install` in ::/studio::
   - note that Sanity uses ::Yarn:: and not npm as a package manager
2. Create two new files called ::.env.production:: and ::.env.development:: in the ::/studio:: directory. It’s important that you have BOTH of these files, with the following values:

```
SANITY_STUDIO_API_PROJECT_ID="<PROJECT ID>"
SANITY_STUDIO_API_DATASET="production"
```

- Stu can provide you with the studio project ID.
  ::- Remind Stu to “add” you to the Sanity project in question for write/deploy priveleges::

**Note:** When running your studio locally, Sanity will read the values from the ::.env.development:: file. For now, keep the values the same in both files, but keep in mind that we can configure a development-only dataset to use as well.

3. Once that file is created, run `sanity start`
   Common issues:

- check that your `.env.production` file is in the root of the `/studio` directory
- if this is a new project, you may need to deploy your sanity GraphQL API first; to do so run `sanity GraphQL deploy —playground`

## Connect Gatsby to Sanity

1. Create **both** a ::.env.development:: and ::.env.production:: file
2. Populate it with the following information:

```
GATSBY_SANITY_ID=""
GATSBY_SANITY_DATASET=""
// only need token if dataset is private
SANITY_TOKEN=""
```

- FYI - If there is a value for SANITY_TOKEN unnecessarily, there will be an error “Session not found”. Either leave as empty string or remove entirely.
- A token is only necessary if the dataset it marked as private. Check with Stu (it likely is).

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

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

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->

# Borealis Gatsby Sanity Template

Welcome! This website utilizes Gatsby.js for static site buidling funcitonality, and Sanity.io as the CMS of choice.

## Configuration:

The project consists of multiple directories. The "web" directory is a Gatsby project and a development server can be initiated by running gatsby develop from within that directory. The CMS is located in the /studio directory. The sanity studio can be started with <b>sanity start</b>, and the graphql server can be restarted with <b>sanity deploy graphql --playground</b>.

When the template is cloned to your local environment, you will need to run `npm install` in the ~/web/ directory and `yarn install` in the ~/studio/ directory.

Sanity needs to be initialized and configured. In the /studio directory, run `sanity init` to start a new sanity project. If you don't already have a sanity.io account, you should be prompted to create one at this time.

Once Sanity is initialized, you will need to update the projectId in studio/sanity.json, and in web/gatsby-config.js (in the gatsby-source-sanity plugin config)

## Get things up and running

To start Gatsby.js, navigate to the _web_ directory and run the terminal command:
`gatsby develop`

To start the Sanity studio, navigate to the _studio_ directory and run:
`sanity start`

Alternatively, running this command from the _studio_ folder will get both of those processes up and going.

Whenever a change is made in the sanity studio, in order for that new data to be relfected on the actual website, the Sanity graphql api must be re-depolyed:
`sanity graphql deploy --playground`

### To add Notes about

- sanity cli installation

## Additional Notes

Within GitHub, the default branch is **development**. All new branches and pull requests should be made from this branch.

_Pull requests require review by one other person before being merged into development._

# Borealis Gatsby Sanity Template

Welcome! This website utilizes Gatsby.js for static site buidling funcitonality, and Sanity.io as the CMS of choice.

## Get things up and running

To start Gatsby.js, navigate to the _web_ directory and run the terminal command:
`gatsby develop`

To start the Sanity studio, navigate to the _studio_ directory and run:
`sanity start`

Alternatively, running this command from the _studio_ folder will get both of those processes up and going.

Whenever a change is made in the sanity studio, in order for that new data to be relfected on the actual website, the Sanity graphql api must be re-depolyed:
`sanity graphql deploy --playground`

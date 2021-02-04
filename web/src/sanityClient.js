// npm package and readme: https://www.npmjs.com/package/@sanity/client
import sanityClient from "@sanity/client"

export const mySanityClient = sanityClient({
  projectId: process.env.GATSBY_SANITY_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
})

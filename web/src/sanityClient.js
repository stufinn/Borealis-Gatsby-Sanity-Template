// npm package and readme: https://www.npmjs.com/package/@sanity/client
import sanityClient from "@sanity/client"
import { sanityConfig } from "./sanityConfig"

export const mySanityClient = sanityClient(sanityConfig)

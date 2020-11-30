import { graphql } from "gatsby"
import React from "react"

const Album = ({ data }) => {
  return <div>{data.sanityAlbums.title}</div>
}

export const query = graphql`
  query($id: String!) {
    sanityAlbums(id: { eq: $id }) {
      title
    }
  }
`

export default Album

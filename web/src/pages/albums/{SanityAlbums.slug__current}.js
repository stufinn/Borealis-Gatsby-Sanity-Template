import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"

const Album = ({ data }) => {
  return (
    <Layout>
      <div>{data.sanityAlbums.title}</div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityAlbums(id: { eq: $id }) {
      title
    }
  }
`

export default Album

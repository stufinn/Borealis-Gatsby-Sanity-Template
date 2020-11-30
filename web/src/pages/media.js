import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Media = ({ data }) => {
  const { allSanityAlbums } = data
  debugger
  return (
    <Layout>
      <div>Media Page</div>
      {/* List or grid of albums */}
      {allSanityAlbums.edges.map(({ node: album }) => (
        <div>
          <Link to={`/media/${album.slug.current}`}>{album.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MediaPageQuery {
    allSanityAlbums {
      edges {
        node {
          title
          slug {
            current
          }
        }
      }
    }
  }
`

export default Media

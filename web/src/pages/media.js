import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Media = ({ data }) => {
  const { allSanityAlbums } = data
  debugger

  return (
    <Layout className="mx-10 text-center">
      <h1>Media</h1>
      {/* List or grid of albums */}
      <h2>Albums</h2>
      <div className="flex col-gap-10 justify-center flex-wrap">
        {(allSanityAlbums.edges.length > 0 &&
          allSanityAlbums.edges.map(({ node: album }) => {
            {
              /* Use  albumCover if provided in CMS, or use first image in array as cover */
            }
            const albumCover = album.albumCover
              ? album.albumCover.asset.fluid
              : album.albumImages[0].asset.fluid

            {
              /* Add opaque box shadow https://tailwindcss.com/docs/box-shadow */
            }

            return (
              <Link
                className="w-64 shadow-extra"
                to={`/albums/${album.slug.current}`}
                title={`${album.title} album`}
              >
                <Img
                  fluid={{
                    ...albumCover,
                    aspectRatio: 1 / 1,
                  }}
                  alt={album.title}
                />
              </Link>
            )
          })) || <div>No albums yet. Check back soon!</div>}
      </div>
    </Layout>
  )
}

// current queries for all of the images, in all of the albums. Not ideal!

export const query = graphql`
  query MediaPageQuery {
    allSanityAlbums {
      edges {
        node {
          title
          slug {
            current
          }
          albumImages {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          albumCover {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Media

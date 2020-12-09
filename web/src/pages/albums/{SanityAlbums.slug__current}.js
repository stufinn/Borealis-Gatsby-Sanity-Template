import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import ImageGallery from "react-image-gallery"
import urlBuilder from "@sanity/image-url"
import { mySanityClient } from "../../sanityClient"

const Album = ({ data }) => {
  const { title, rawAlbumImages } = data.sanityAlbums
  const builder = urlBuilder(mySanityClient)
  // Get the url for a given source
  const urlFor = source => builder.image(source)

  // create an array of urls for the album
  const imageUrlArray = rawAlbumImages.map(imageData => {
    const url = urlFor(imageData.asset.id)
      .width(700)
      .format("jpg")
      .fit("max")
      .url()

    const previewUrl = urlFor(imageData.asset.id)
      .width(200)
      .height(200)
      .format("jpg")
      .url()
    // const previewUrl = url + "?h=200" + "&w=200" + "&fm=jpg"

    const altText = imageData.altText || ""
    return {
      original: url,
      originalAlt: altText,
      thumbnail: previewUrl,
      thumbnailAlt: altText,
    }
  })
  debugger
  return (
    <Layout className="text-center justify-items-center">
      <h1>{title}</h1>
      <div className="my-10 mx-5">
        <ImageGallery items={imageUrlArray} thumbnailPosition="top" />
      </div>
      <Link
        to="/media"
        className="bg-green-600  hover:bg-white text-white font-semibold hover:text-green-500 py-2 px-8 border border-blue hover:border-green-500 rounded text-2xl uppercase"
      >
        All Albums
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityAlbums(id: { eq: $id }) {
      title
      rawAlbumImages: _rawAlbumImages(resolveReferences: { maxDepth: 10 })
    }
  }
`

export default Album

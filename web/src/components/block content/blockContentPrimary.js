import React from "react"
import PortableText from "@sanity/block-content-to-react"
import { Link } from "gatsby"
import urlBuilder from "@sanity/image-url"
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import Img from 'gatsby-image'

import {sanityConfig} from "../../sanityConfig"

const InternalLink = ({ linkProps, preSlug }) => (
  <span>
    <Link
      to={`/${preSlug}/${linkProps.mark.item.slug.current}`}
      className="underline hover:text-blue-dark visited:text-purple-600"
    >
      {linkProps.children}
    </Link>
  </span>
)

const BlockContentPrimary = ({ blockData }) => {
  // console.log("blockData")
  // console.log(blockData)
  // const urlFor = source =>
  //   urlBuilder({
  //     projectId: process.env.GATSBY_SANITY_ID,
  //     dataset: "production",
  //   }).image(source)
  //   Serializer is used to tell component how to render Portable Text
  //   if no serializer is used, a default serializer is used under-the hood
  //   This allows us to customize how modify defaults and render custom formats
  const serializer = {
    marks: {
      link: props => {
        if (props.mark.blank) {
          return (
            <a
              href={props.mark.href}
              target="_blank"
              rel="noopener noreferrer"
              className="blockContent__link"
            >
              {props.children}
            </a>
          )
        }
        return (
          <a href={props.mark.href} className="blockContent__link">
            {props.children}
          </a>
        )
      },
      internalPostLink: props => {
        return <InternalLink linkProps={props} preSlug="pages" />
      },
      linkToBlogPost: props => {
        return <InternalLink linkProps={props} preSlug="news" />
      },
      LinkToCommunityDept: props => {
        let preSlug = "communities"
        if (props.mark.type === "individualCommunityPages") {
          preSlug = "departments"
        }

        return <InternalLink linkProps={props} preSlug={preSlug} />
      },
    },
    types: {
      inlineImage: props => {
        const sanityImageId = props.node.asset.id
        const fluidProps = getFluidGatsbyImage(sanityImageId, {maxWidth:1000}, sanityConfig)
        return (
          <>
            <div className="w-full lg:w-3/4 max-w-3xl">
              <Img fluid={fluidProps} className=""/>

                {props.node.caption && (
                  <figcaption className="font-bold text-2xl text-center mt-3">
                    {props.node.caption}
                  </figcaption>
                )}

            </div>
          </>
        )
      },
    },
    list: props =>
      // console.log("list", props) ||
      props.type === "bullet" ? (
        <ul>{props.children}</ul>
      ) : (
        <ol>{props.children}</ol>
      ),
  }

  return <PortableText blocks={blockData} serializers={serializer} />
}

export default BlockContentPrimary

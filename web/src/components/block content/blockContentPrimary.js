import React from "react"
import PortableText from "@sanity/block-content-to-react"
import { Link } from "gatsby"
import urlBuilder from "@sanity/image-url"

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
  const urlFor = source =>
    urlBuilder({
      projectId: process.env.SANITY_ID,
      dataset: "production",
    }).image(source)
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
        return (
          <>
            <figure className="flex justify-center">
              <div>
                <img
                  // src={urlFor(props.node.image).url()}
                  // Above src wasn't actually accessing the photo correctly,
                  // not sure if it was in the past so I left it commented out.
                  src={props.node.asset.url}
                  alt={props.node.alt}
                />
                {props.node.caption && (
                  <figcaption className="font-bold text-2xl text-center mt-3">
                    {props.node.caption}
                  </figcaption>
                )}
              </div>
            </figure>
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

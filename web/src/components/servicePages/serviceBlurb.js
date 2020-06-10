import React from "react"

const ServiceBlurb = ({
  className = "",
  title = "title not provided",
  content = "No content provided",
}) => {
  return (
    <div className={`servicePage__blurb ${className}`}>
      <h2 className="servicePage__blurbTitle">{title}</h2>
      <p className="servicePage__blurbContent">{content}</p>
    </div>
  )
}

export default ServiceBlurb

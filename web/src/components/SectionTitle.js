import React from "react"

export default ({ className = "", children }) => {
  return <h1 className={className}>{children}</h1>
}

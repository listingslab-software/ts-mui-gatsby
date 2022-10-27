import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      IndexPage
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return <title>HEAD FC</title>;
}

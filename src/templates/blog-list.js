import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY", locale: "pt-br")
        path
        title
      }
    }
  }
`

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

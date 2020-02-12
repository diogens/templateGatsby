import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD [de] MMMM [de] YYYY [às] HH:MM", locale: "pt-br")
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
      <p>{frontmatter.date}</p>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

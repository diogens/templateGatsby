import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

import SEO from "../components/seo"
import GlobalStyle from "../style/global"

export const linkList = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      skip: 0
      limit: 20
    ) {
      edges {
        node {
          id
          frontmatter {
            date(
              formatString: "DD [de] MMMM [de] YYYY [as] HH:mm"
              locale: "pt-br"
            )
            path
            title
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  console.log(edges)
  return (
    <Layout>
      <SEO title="Home" />
      <GlobalStyle />

      <ul>
        {edges.map(({ node: { id, frontmatter: { path, title, date } } }) => (
          <li key={id}>
            <h1>{title}</h1>
            <p>{date}</p>
            <Link to={path}>Mais</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

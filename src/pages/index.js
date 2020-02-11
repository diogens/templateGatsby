import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

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
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            path
            title
            slug
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

      <h1>Home</h1>
      <ul>
        {edges.map(
          ({
            node: {
              id,
              frontmatter: { path, title, date, slug },
            },
          }) => (
            <li key={id}>
              <h1>{title}</h1>
              <p>{date}</p>
              <Link to={path}>Mais</Link>
              <Link to={slug}>Mais - slug</Link>
            </li>
          )
        )}
      </ul>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProtoType, { node } from "prop-types"
import Footer from "../Footer"
import Header from "../Header"

import * as S from "./styled"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        id
        host
        port
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  const { author, description, title } = data.site.siteMetadata

  return (
    <S.LayoutWrapper>
      <Header titleSite={title} />
      <S.LayoutMain>{children}</S.LayoutMain>
      <Footer autor={author} description={description} title={title} />
    </S.LayoutWrapper>
  )
}

Layout.protoType = {
  children: ProtoType.node.isRequired,
}

export default Layout

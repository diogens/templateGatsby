import React from "react"
import ProtoType from "prop-types"

import * as S from "./styled"

const Footer = ({ autor, description, title }) => (
  <S.WrapperFooter>
    <p>{new Date().getFullYear()}</p>
    <p>Autor: {autor} </p>
    <p>Descrição: {description}</p>
    <p>Tilte: {title}</p>
  </S.WrapperFooter>
)

Footer.protoType = {
  autor: ProtoType.string.isRequired,
  description: ProtoType.string.isRequired,
  title: ProtoType.string.isRequired,
}

export default Footer

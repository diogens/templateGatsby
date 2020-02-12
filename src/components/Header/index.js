import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as S from "./styled"

const Header = ({ titleSite }) => {
  return (
    <S.WrapperHeader>
      <Link to="/">
        <h1>{titleSite}</h1>
      </Link>
    </S.WrapperHeader>
  )
}

Header.propTypes = {
  titleSite: PropTypes.string.isRequired,
}

export default Header

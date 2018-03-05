import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ h1, h2, children }) =>
  <header className="container header uppy">
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    {children}
  </header>

Header.defaultProps = {
  h1: '',
  h2: '',
  children: '',
}

Header.propTypes = {
  h1: PropTypes.string,
  h2: PropTypes.string,
  children: PropTypes.node,
}

export default Header

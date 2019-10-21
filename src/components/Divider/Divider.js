import React from 'react'
import PropTypes from 'prop-types'

const Divider = props => {
  return <span className={props.className}></span>
}

Divider.propTypes = {
  className: PropTypes.string
}

export { Divider }

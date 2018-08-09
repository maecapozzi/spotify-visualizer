import React from 'react'
import PropTypes from 'prop-types'

export const BaseButton = ({ onClick, children, ...props }) => {
  return <button onClick={onClick} {...props}>{children}</button>
}

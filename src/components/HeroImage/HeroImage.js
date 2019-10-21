import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './styles'

const HeroImage = props => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <div className={classes.inner}>{props.children}</div>
    </section>
  )
}

HeroImage.propTypes = {
  children: PropTypes.node
}

export { HeroImage }

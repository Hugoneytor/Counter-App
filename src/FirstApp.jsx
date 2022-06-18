import React from 'react'
import PropTypes from 'prop-types';

const FirstApp = ({title, subtitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'subtitulo default'
}

export default FirstApp


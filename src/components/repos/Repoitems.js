import React from 'react'
import PropTypes from 'prop-types'

const Repoitems = ({repo}) => {
  return (
    <div className='card'>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  )
}
Repoitems.propTypes = {
    repo: PropTypes.object.isRequired,
}
export default Repoitems

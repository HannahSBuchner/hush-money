import React from 'react'
import {connect} from 'react-redux'

export const ProductForFutureGrid = props => {
  const {futuretoy} = props
  return (
    <div className="futuretoy-grid2">
      <div className="futureunderimage">
        <h4>{futuretoy.name}</h4>
        <img className="small-image" src={futuretoy.image} alt="toy image" />
        <p className="pricefont">${futuretoy.price}</p>
        <a href={futuretoy.image_url} className="button" target="_blank">
          Click to Purchase
        </a>
      </div>
    </div>
  )
}

export default ProductForFutureGrid

import React from 'react'
import {connect} from 'react-redux'

export const ProductForGrid = props => {
  const {toy} = props
  return (
    <div className="toy-grid2">
      <div className="underimage">
        <h4>{toy.name}</h4>
        <img className="small-image" src={toy.image} alt="toy image" />
        <p className="pricefont">${toy.price}</p>
        <a href={toy.image_url} className="button">
          Click to Purchase
        </a>
      </div>
    </div>
  )
}

export default ProductForGrid

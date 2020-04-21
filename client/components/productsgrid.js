import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProductForGrid} from './index'
import {getAllToys} from '../store/toy'

export class ProductsGrid extends Component {
  componentDidMount() {
    this.props.getAllToys()
  }
  render() {
    return (
      <div className="toy-grid">
        {this.props.toys.map(toy => (
          <div className="single-toy-square" key={toy.id}>
            <ProductForGrid toy={toy} />
          </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  toys: state.toys
})

const mapDispatchToProps = dispatch => ({
  getAllToys: () => dispatch(getAllToys())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid)

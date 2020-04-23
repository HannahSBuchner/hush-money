import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProductForGrid} from './index'
import {ProductForFutureGrid} from './index'
import {getAllToys} from '../store/toy'
import {getAllFutureToys} from '../store/futuretoy'

export class ProductsGrid extends Component {
  componentDidMount() {
    this.props.getAllToys()
    this.props.getAllFutureToys()
  }
  render() {
    return (
      <div className="wholegrid">
        <div>
          {this.props.toys.length === 0 ? (
            <p className="notoys">
              You don't currently have enough in your account to earn anything.
              But if you keep up the good work, I bet you will soon!
            </p>
          ) : (
            <div className="toy-grid">
              {this.props.toys.map(toy => (
                <div className="single-toy-square" key={toy.id}>
                  <ProductForGrid toy={toy} />
                </div>
              ))}
            </div>
          )}
        </div>

        <h1>Or, keep saving and behaving and you could one day buy...</h1>
        <div className="futuretoy-grid">
          {this.props.futuretoys &&
            this.props.futuretoys.map(futuretoy => (
              <div className="single-futuretoy-square" key={futuretoy.id}>
                <ProductForFutureGrid futuretoy={futuretoy} />
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  toys: state.toys,
  futuretoys: state.futuretoys
})

const mapDispatchToProps = dispatch => ({
  getAllToys: () => dispatch(getAllToys()),
  getAllFutureToys: () => dispatch(getAllFutureToys())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid)

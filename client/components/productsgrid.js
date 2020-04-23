import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ProductForGrid} from './index'
import {ProductForFutureGrid} from './index'
import {getAllToys} from '../store/toy'
import {getAllFutureToys} from '../store/futuretoy'

export class ProductsGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false
    }
    this.handleClickMore = this.handleClickMore.bind(this)
    this.handleClickLess = this.handleClickLess.bind(this)
  }
  handleClickMore() {
    this.setState({showMore: true})
  }
  handleClickLess() {
    this.setState({showMore: false})
  }
  componentDidMount() {
    this.props.getAllToys()
    this.props.getAllFutureToys()
  }
  render() {
    const numberOfItems = this.state.showMore ? this.props.toys.length : 10
    return (
      <div className="wholegrid">
        <div>
          {this.props.toys.length === 0 ? (
            <p className="notoys">
              You don't currently have enough in your account to earn anything.
              But if you keep up the good work, I bet you will soon!
            </p>
          ) : (
            <div>
              <div className="toy-grid">
                {this.props.toys.slice(0, numberOfItems).map(toy => (
                  <div className="single-toy-square" key={toy.id}>
                    <ProductForGrid toy={toy} />
                  </div>
                ))}
              </div>
              <div className="seebuttons">
                <button
                  className="seebutton"
                  type="button"
                  onClick={() => this.handleClickMore()}
                >
                  See All{' '}
                </button>
                <button
                  className="seebutton"
                  type="button"
                  onClick={() => this.handleClickLess()}
                >
                  Shortlist
                </button>
              </div>
            </div>
          )}
        </div>

        <h1 className="future">
          Or, keep saving and behaving and you could one day buy...
        </h1>
        <div className="futuretoy-grid">
          {this.props.futuretoys &&
            this.props.futuretoys.slice(0, numberOfItems).map(futuretoy => (
              <div className="single-futuretoy-square" key={futuretoy.id}>
                <ProductForFutureGrid futuretoy={futuretoy} />
              </div>
            ))}
        </div>
        <div className="seebuttons">
          <button
            className="seebutton"
            type="button"
            onClick={() => this.handleClickMore()}
          >
            See All{' '}
          </button>
          <button
            className="seebutton"
            type="button"
            onClick={() => this.handleClickLess()}
          >
            Shortlist
          </button>
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

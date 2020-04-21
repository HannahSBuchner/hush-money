import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increaseThunk, decreaseThunk} from '../store/user'
import {getAllToys} from '../store/toy'
import {ProductsGrid} from './index'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleIncrease = this.handleIncrease.bind(this)
  }
  handleDecrease() {
    this.props.decreaseThunk()
    this.props.getAllToys()
  }
  handleIncrease() {
    this.props.increaseThunk()
    this.props.getAllToys()
  }
  render() {
    const {balance, name} = this.props

    return (
      <div className="acctbox">
        <div className="acctheader">
          <h1>
            Hey, {name}! <br /> You've earned:
          </h1>
        </div>
        <div className="account">
          <h1 className="amount">${(balance / 100).toFixed(2)}</h1>
        </div>
        <div className="buttons">
          <button
            className="addbutton"
            type="button"
            onClick={() => this.handleIncrease()}
          >
            +
          </button>
          <button
            className="decbutton"
            type="button"
            onClick={() => this.handleDecrease()}
          >
            -
          </button>
        </div>
        <br />
        <div className="resetbutton">
          <button className="reset">Reset</button>
        </div>

        <div className="acctheader">
          <h1>You've got enough to buy a...</h1>
        </div>
        <ProductsGrid />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    name: state.user.name,
    balance: state.user.balance,
    toys: state.toys
  }
}

const mapDispatchToProps = dispatch => ({
  increaseThunk: () => dispatch(increaseThunk()),
  decreaseThunk: () => dispatch(decreaseThunk()),
  getAllToys: () => dispatch(getAllToys())
})

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

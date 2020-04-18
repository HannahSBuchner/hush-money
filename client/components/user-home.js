import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increaseThunk, decreaseThunk} from '../store/user'
import {ProductsGrid} from './index'

/**
 * COMPONENT
 */
class UserHome extends Component {
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
            onClick={() => this.props.increaseThunk()}
          >
            +
          </button>
          <button
            className="decbutton"
            type="button"
            onClick={() => this.props.decreaseThunk()}
          >
            -
          </button>
        </div>
        <div className="acctheader">
          <h1>You've got enough to buy one of the following:</h1>
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
    balance: state.user.balance
  }
}

const mapDispatchToProps = dispatch => ({
  increaseThunk: () => dispatch(increaseThunk()),
  decreaseThunk: () => dispatch(decreaseThunk())
})

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

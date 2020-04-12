import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, account} = props

  return (
    <div className="acctbox">
      <div className="acctheader">
        <h1>
          Hey, {email}! <br /> You've earned:
        </h1>
      </div>
      <div className="account">
        <h1 className="amount">$0.00</h1>
      </div>
      <div className="buttons">
        <button className="addbutton">+</button>
        <button className="decbutton">-</button>
      </div>
      <div className="acctheader">
        <h1>You've got enough to buy one of the following:</h1>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

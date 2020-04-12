const Sequelize = require('sequelize')
const db = require('../db')

const Account = db.define('account', {
  balance: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    get() {
      const pennies = this.getDataValue('balance')
      return pennies / 100
    }
  }
})

module.exports = Account

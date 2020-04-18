const Sequelize = require('sequelize')
const db = require('../db')

const Toy = db.define('toy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get() {
      const pennies = this.getDataValue('price')
      return pennies / 100
    }
  },
  image: {
    type: Sequelize.STRING
  },
  image_url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
})

module.exports = Toy

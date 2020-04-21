const router = require('express').Router()
var Sequelize = require('sequelize')
const Op = Sequelize.Op

const {User, Toy} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    const acct = user.balance
    const toys = await Toy.findAll({
      where: {
        price: {
          [Op.lte]: acct
        }
      }
    })
    res.json(toys)
  } catch (err) {
    next(err)
  }
})

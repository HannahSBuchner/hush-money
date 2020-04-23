const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/increase', async (req, res, next) => {
  try {
    console.log('REQ.USER:', req.user)
    if (req.user) {
      const user = await User.findOne({where: {id: req.user.id}})
      user.balance += 25
      await user.save()
      res.json(user)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/decrease', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({where: {id: req.user.id}})
      user.balance -= 25
      await user.save()
      res.json(user)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/clear', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({where: {id: req.user.id}})
      user.balance = 0
      await user.save()
      res.json(user)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

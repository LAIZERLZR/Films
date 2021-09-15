const User = require("../models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    const users = await  User.find()

    res.json(users)
  },
  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body

      const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))

      const user = await User.create({ login: login, password: hash })

      res.json(user)
    }
    catch (e) {
      return res.status(400).json({
        error: "ошибка при регистрации: " + e.toString()
      })
    }
  },
  login: async (req, res) => {
    const { login, password } = req.body

    const candidate = await User.findOne({ login })

    if(!candidate) {
      return res.json("Неверный логин...")
    }
    const valid = await bcrypt.compare(password, candidate.password)

    if(!valid) {
      return res.status(401).json("Неверный пароль...")
    }
    const payload = {
      id: candidate._id,
      login: candidate.login
    }

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h"
    })


    res.json({
      token
    })
  },
  getUser: async (req,res ) => {
    try {
      const get = await User.find()
      res.json(get)
    } catch (err) {
      res.json(err)
    }
  },
  editUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id)
      res.json("Пользователь  изменен...")
    } catch (err) {
      res.json(err)
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id)
      res.json("Пользователь удален...")
    } catch (err) {
      res.json(err)
    }
  },
}


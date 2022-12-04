const express = require('express');
const { celebrate } = require('celebrate');

const isAuth = require('../middlewares/isAuth');

const userController = require('../controllers/user');
const authValidator = require('../validators/auth');

const route = express.Router();

module.exports = (app) => {
  app.use('/auth', route);

  route.get(
    '/',
    isAuth,
    async (req, res) => res.json({
      status: 'OK',
      email: req.user.email,
    }).status(200),
  );

  route.post(
    '/register',
    celebrate(authValidator.register),
    async (req, res, next) => {
      try {
        // email checker
        const existingUser = await userController.findByEmail(req.body.email);
        if (existingUser) {
          throw new Error('Email is already registered!');
        }

        // register user
        await userController.create(
          req.body.email,
          req.body.full_name,
          req.body.password,
        );

        return res.json({
          status: 'OK',
        }).status(200);
      } catch (err) {
        return next(err);
      }
    },
  );

  route.post(
    '/login',
    celebrate(authValidator.login),
    async (req, res, next) => {
      try {
        const user = await userController.login(
          req.body.email,
          req.body.password,
        );

        if (!user) {
          throw new Error('Wrong email or password!');
        } else {
          res.render('/dashboard');
        };
      } catch (err) {
        return next(err);
      }
    },
  );
  
};


  
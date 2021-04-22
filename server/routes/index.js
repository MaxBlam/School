const express = require('express');
const router = express.Router();
const users = require('../model/users');

router.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (email && password) {
    const user = users.find(
      (el) => el.email === email && el.password === password
    );
    if (user) {
      req.session.userId = user.id;
      res.status(200).json({ id: user.id, name: user.name });
    } else res.status(401).send('Wrong email or password');
  } else res.status(400).send('Login failed');
});

router.get(
  '/logout',
  /*redirectLogin,*/ (req, res) => {
    req.session.destroy();
    res.clearCookie(process.env.SESSION_NAME);
    res.status(200).send('Ok');
  }
);

router.post('/register', (req, res) => {
  try {
    let user = {};
    user.email = req.body.email;
    user.password = req.body.password;
    user.name = req.body.name;
    let status400 = false;
    for (value in user) {
      if (!user[value] || user[value] == '') {
        status400 = true;
      }
    }
    if (status400) {
      res.status(400).send('Registration failed');
    } else if (users.map((user) => user.email).includes(user.email)) {
      res.status(409).send('E-mail already registered');
    } else {
      user.id = Math.max(...users.map((user) => user.id)) + 1;
      users.push(user);
      res.status(200).send();
    }
  } catch (error) {
    console.error(error);
  }
});

router.get('/secretdata', (req, res) => {
  // enter your code here
});

module.exports = router;

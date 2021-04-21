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
    // enter your code here
    req.session.destroy();
    res.clearCookie(process.env.SESSION_NAME);
  }
);

router.post('/register', (req, res) => {
  // enter your code here
});

router.get('/secretdata', (req, res) => {
  // enter your code here
});

module.exports = router;

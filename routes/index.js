const express = require('express');
const { title } = require('process');
const router = express.Router();

const messages = [];

router.get('/', (req,res)=>{
res.render('index', {title: "Mini Message Board",
     messages: messages})
});

router.get('/new', (req, res)=>{
res.render('form', {title: 'New Message'})
});

router.post('/new', (req,res)=>{
const messageUser = req.body.user;
const messageText = req.body.text;
messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
})
res.redirect('/')
});

module.exports = router;
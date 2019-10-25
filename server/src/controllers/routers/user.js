const express = require('express');
const auth = require('../../utils/middleware/auth');
const router = new express.Router();
const User = require('../../models/user');

// Get users
router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find();

        if (!users) {
            return res.status(404).send();
        }
        res.send(users);
    } catch(e) {
        res.status(500).send();
    }
});

// Get user
router.get('/users/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findOne({ _id });

        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch(e) {
        res.status(500).send();
    }
});

// Create user
router.post('/users', auth, async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();

        res.status(201).send({ user, token });
    } catch(e) {
        res.status(400).send(e);
    }
});

// Update user
router.patch('/users/:id', auth, async (req, res) => {
    // Gotta implement allowedUpdates
    try {
        const user = await User.findOne({ _id: req.params.id });

        if (!user) {
            return res.status(404).send();
        } else if (user.administrator) {
            updates.forEach(update => user[update] = req.body[update]);
            await user.save();
            res.send(user);
        } else {
            res.status(403).send({ message: 'Ação só permitida para administradores' }); // 403 - forbidden
        }
    } catch(e) {
        res.status(400).send(e);
    }
});

// Delete user
router.delete('/users/:id', auth, async (req, res) => {
    // Gotta implement level authorization
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });

        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch(e) {
        res.status(500).send();
    }
});

// Loggin in
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch(e) {
        res.status(400).send();
    }
});

// Loggin out
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token;
        });
        await req.user.save();

        res.send();
    } catch(e) {
        res.status(500).send();
    }
});

// Log out of all devices
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch(e) {
        res.status(500).send();
    }
});

// Get ones profile
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

// Update ones profile
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['phone', 'address', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }
    try {
        updates.forEach(update => req.user[update] = req.body[update]);
        await req.user.save();
        res.send(req.user);
    } catch(e) {
        res.status(400).send(e);
    }
});

module.exports = router;
const express = require('express');
const auth = require('../../utils/middleware/auth');
const PickUp = require('../../models/pickUp');
const router = new express.Router();

// Get pick ups
router.get('/pickUps', auth, async (req, res) => {
    try {
        const pickUps = await PickUp.find();

        if (!pickUps) {
            return res.status(404).send();
        }
        res.send(pickUps);
    } catch(e) {
        res.status(500).send();
    }
});

// Get pick up
router.get('/pickUps/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const pickUp = await PickUp.findOne({ _id });

        if (!pickUp) {
            return res.status(404).send();
        }
        res.send(pickUp);
    } catch(e) {
        res.status(500).send();
    }
});

// Create pick up
router.post('/pickUps', auth, async (req, res) => {
    const pickUp = new PickUp({ ...req.body });

    try {
        await pickUp.save();
        res.status(201).send(pickUp);
    } catch(e) {
        res.status(400).send(e);
    }
});

// Update pick up
router.patch('/pickUps/:id', auth, async (req, res) => {
    // Gotta implement allowedUpdates
    try {
        const pickUp = await PickUp.findOne({ _id: req.params.id });

        if (!pickUp) {
            return res.status(404).send();
        }
        updates.forEach(update => pickUp[update] = req.body[update]);
        await pickUp.save();
        res.send(pickUp);
    } catch(e) {
        res.status(400).send(e);
    }
});

// Delete pick up
router.delete('/pickUps/:id', auth, async (req, res) => {
    // Gotta implement level authorization
    try {
        const pickUp = await PickUp.findOneAndDelete({ _id: req.params.id });

        if (!pickUp) {
            return res.status(404).send();
        }
        res.send(pickUp);
    } catch(e) {
        res.status(500).send();
    }
});

module.exports = router;
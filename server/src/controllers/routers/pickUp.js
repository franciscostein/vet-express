const express = require('express');
const auth = require('../../utils/middleware/auth');
const authAdmin = require('../../utils/middleware/authAdmin');
const PickUp = require('../../models/pickUp');
const router = new express.Router();

// Get pick ups
router.get('/pickUps', authAdmin, async (req, res) => {
    try {
        const pickUps = await PickUp.find().populate('clinic', 'name').populate({ path: 'driver', select: 'user', populate: { path: 'user', select: 'name' }}).exec();

        if (!pickUps) {
            return res.status(404).send();
        }
        res.send(pickUps);
    } catch(e) {
        res.status(500).send();
    }
});

// Get driver's pick ups
router.get('/pickUps/driver/:userId', auth, async (req, res) => {
    const _userId = req.params.userId;

    try {
        const pickUps = await PickUp.find().populate('clinic', 'name').populate({ path: 'driver', select: 'user', populate: { path: 'user', match: { _id: _userId }, select: 'name' }}).exec();

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
        const pickUp = await PickUp.findOne({ _id }).populate('clinic', 'name').populate({ path: 'driver', select: 'user', populate: { path: 'user', select: 'name' }}).exec();

        if (!pickUp) {
            return res.status(404).send();
        }
        res.send(pickUp);
    } catch(e) {
        res.status(500).send();
    }
});

// Create pick up
router.post('/pickUps', authAdmin, async (req, res) => {
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
router.delete('/pickUps/:id', authAdmin, async (req, res) => {
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

// Delete many pick ups
router.delete('/pickUps/many/:123', authAdmin, async (req, res) => {
    try {
        const pickUp = await PickUp.deleteMany({ _id: req.body.ids });

        if (!pickUp) {
            return res.status(404).send();
        }
        res.send(pickUp);
    } catch(e) {
        res.status(500).send();
    }
});

module.exports = router;
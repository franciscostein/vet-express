const express = require('express');
const Driver = require('../../models/driver');
const auth = require('../../utils/middleware/auth');
const router = express.Router();

// Get drivers
// Get drivers' user only: /drivers?userOnly=true
router.get('/drivers', auth, async (req, res) => {
    try {
        const userOnly = req.query.userOnly === 'true';
        const driversQueryResult = await Driver.find().populate('user', 'name').exec();
        let drivers = [];

        if (!driversQueryResult) {
            return res.status(404).send();
        }

        if (userOnly) {
            driversQueryResult.forEach(driver => {
                drivers.push(driver.user);
            });
        } else {
            drivers = driversQueryResult;
        }
        res.send(drivers);
    } catch(e) {
        res.status(500).send();
    }
});

// Get driver
router.get('/drivers/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const driver = await Driver.findOne({ _id }).populate('user', 'name').exec();

        if (!driver) {
            return res.status(404).send();
        }
        res.send(driver);
    } catch(e) {
        res.status(500).send();
    }
});

// Create driver
router.post('/drivers', auth, async (req, res) => {
    const driver = new Driver({ ...req.body });

    try {
        await driver.save();
        res.status(201).send(driver);
    } catch(e) {
        res.status(400).send(e);
    }
});

// Update driver
router.patch('/drivers/:id', auth, async (req, res) => {
    // Gotta implement allowedUpdates
    try {
        const driver = await Driver.findOne({ _id: req.params.id });

        if (!driver) {
            return res.status(404).send();
        }
        updates.forEach(update => driver[update] = req.body[update]);
        await driver.save();
        res.send(driver);
    } catch(e) {
        res.status(400).send(e);
    }
});

// Delete driver
router.delete('/drivers/:id', auth, async (req, res) => {
    // Gotta implement level authorization
    try {
        const driver = await Driver.findOneAndDelete({ _id: req.params.id });

        if (!driver) {
            return res.status(404).send();
        }
        res.send(driver);
    } catch(e) {
        res.status(500).send();
    }
});

module.exports = router;
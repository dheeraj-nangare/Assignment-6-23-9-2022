const express = require('express')
const router = express.Router();
const flightSchema = require('../model/flights')

router.get('/flighDetails', async (req, res) => {
    try {
        const record = await flightSchema.find();
        res.json(record);
    } catch (r) {
        res.json({ msg: r })

    }
})

router.post('/postDetails', async (req, res) => {
    const post = new flightSchema({
        flightNo: req.body.flightNo,
        trvaelCities: req.body.trvaelCities,
        flighTimmings: req.body.flighTimmings,
        planeCategory: req.body.planeCategory
    });
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            if (err.code === 11000) {
                res.json({ msg: "Fligh Number Must be unique" })
            }
            else
                res.json({ msg: err })
        })
})

module.exports = router;
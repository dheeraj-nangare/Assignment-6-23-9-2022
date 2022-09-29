const express = require('express')

const router = express.Router();
const flightSchema = require('../model/flights');
const bookSchema = require('../model/bookTickets')

router.post('/bookTickets', async (req, res) => {
    try {
        const record = await flightSchema.find();
        const isFlightAvaialbe = false;
         for (let index = 0; index < record.length; index++) {
            const data1 = record[index];
         
            console.log(data1.flightNo == req.body.planeNo);
            console.log(req.body.planeNo);
            if (data1.flightNo == req.body.planeNo) {
                console.log("abc");
                const book = new bookSchema({
                    planeNo: req.body.planeNo,
                    destination: req.body.destination
                });
                book.save()
                    .then(data => {
                        res.json(data);
                        // break;

                    })
                    .catch(err => {
                        res.json({ msg: err })
                    })

                    break;
            }else{
                if(record.length == index+1){
                    res.json({msg:"no Flight"});

                }
            }
            
        }
        


    } catch (r) {
        res.json({ msg: r })

    }
})

router.get('/getBookingDetails', async (req, res) => {
    try {
        const record = await bookSchema.find();
        res.json(record);
    } catch (r) {
        res.json({ msg: r })

    }
})
module.exports = router;
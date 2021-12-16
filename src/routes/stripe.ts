import { User } from './interface'
const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post('/payment', (req: any,res: any) => {
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"ngn",
    }, (stripeErr: any, stripeRes: any) => {
        if(stripeErr) {
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes);
        }
    })
})
module.exports = router;
import Stripe from "stripe"

const stripe = new Stripe("sk_test_51J0jlWH3X4xB1ZGdVzCvNSwfLgQTKp2tknBlXRiFIlVdCOT3dHsvf4vNCCqzI8PmOdP874cXOC7qhhdX5rQfgQ8k00dU9v5JUs");

export default async (req, res) => {
    const {id,  items} = req.body;

    try{
        const payment  = await stripe.paymentIntents.create({
            items,
            currency: "som",
            description: "sima",
            payment_method: id,
            confirm: true,
        });
        console.log(payment)
        return res.status(200).json({
            confirm: "abc123",
        })
    } catch (error){

    }
}

import Stripe from 'stripe';

if(!process.env.STRIPE_SECRET_KEY){
    throw new Error("STRIPE_SECRET_KEY IS NOT SET");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-12-18.acacia', // use the latest api version
})

export default stripe;
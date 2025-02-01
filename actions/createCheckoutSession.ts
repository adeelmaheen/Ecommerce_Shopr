// 'use server'
// import  {imageUrl} from "@/lib/imageUrl";
// import stripe from "@/lib/stripe";
// import {BasketItem} from "../store/store";


// export type Metadata = {
//     orderNumber: string,
//     customerName: string,
//     customerEmail: string,
//     clerkUserId: string,
// }

// export type GroupedBasketItem = {
//     product: BasketItem["product"];
//     quantity: number;
// }

// export async function createCheckoutSession(
//     items: GroupedBasketItem[],
//     metadata: Metadata
// ){
//     try{
//         // console.log("Basket Items:", items);
//         // const itemsWithoutPrice = items.filter((item)=> item.product.price);
//         // if (itemsWithoutPrice){
//         //     throw new Error("Some items do not have a price");
//         // }
//         console.log("Basket Items:", items);
//         const itemsWithoutPrice = items.filter((item) => !item.product.price);
//         if (itemsWithoutPrice.length > 0) {
//         console.error("Items without price:", itemsWithoutPrice);
//         throw new Error("Some items do not have a price");
// }


//         // Search for existing customer by email
//         const customers = await stripe.customers.list({
//             email: metadata.customerEmail,
//             limit:1,
//         });

//         let customerId: string | undefined;
//         if(customers.data.length > 0){
//             customerId = customers.data[0].id;
//         }

//         const baseUrl = process.env.NODE_ENV === 'production'
//         ? `https://${process.env.VERCEL_URL}`
//         : `${process.env.NEXT_PUBLIC_BASE_URL}`;

//         const succesUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`;
//         const cancelUrl = `${baseUrl}/basket`;

//         // console.log("SUCCESS_URL <<<<<<<",succesUrl)
//         // console.log("CANCEL_URL <<<<<<<<<",cancelUrl)

//         const session = await stripe.checkout.sessions.create({
//                 customer: customerId,
//                 customer_creation: customerId ? undefined: "always",
//                 customer_email: !customerId ? metadata.customerEmail : undefined,
//                 metadata,
//                 mode: "payment",
//                 allow_promotion_codes: true,
//                 success_url: succesUrl,
//                 cancel_url: cancelUrl,
//                 line_items: items.map((item)=> ({
//                     price_data: {
//                         currency: "gbp",
//                         unit_amount: Math.round(item.product.price! * 100),
//                         product_data:{
//                             name: item.product.name || "Unnamed Product",
//                             description: `Product ID: ${item.product._id}`,
//                             metadata:{
//                                 id: item.product._id
//                             },
//                             images: item.product.image 
//                             ? [imageUrl(item.product.image).url()]
//                             : undefined,
//                         },
//                     },
//                     quantity: item.quantity,
//                 })),
                
                  
//         });
//         return session.url;
//     }catch(error){
//             console.log("Error creating checkout session:", error);
//             throw error;
//     }
// }
// ========================
'use server';
import stripe from "@/lib/stripe";
import {BasketItem} from "../store/store";
import Stripe from "stripe";
import { urlFor } from "@/sanity/lib/image";

export interface Metadata {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
}


export type GroupedBasketItem = {
    product: BasketItem["product"];
    quantity: number;
}
export const createCheckoutSession = async ( 
    items: GroupedBasketItem[],
     metadata: Metadata
    ) => {
  try {
    const itemsWithoutPrice = items.filter((item) => !item.product.price);
    if(itemsWithoutPrice.length > 0){
        throw new Error("Some items do not have a price");
    }
    const customers = await stripe.customers.list({
         email: metadata.customerEmail,
          limit: 1,
         });

    const customerId = customers.data.length > 0 ?customers.data[0].id :
    "";
   
    
        const baseUrl = process.env.NODE_ENV === 'production'
        ? `http://${process.env.VERCEL_URL}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}`;

            const succesUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`;
            const cancelUrl = `${baseUrl}/basket`;
            const sessionPayLoad:Stripe.Checkout.SessionCreateParams={
        metadata:{
            orderNumber:metadata.orderNumber,
            customerName:metadata.customerName,
            customerEmail:metadata.customerEmail,
            clerkUserId:metadata.clerkUserId,
        },
        mode: 'payment',
        allow_promotion_codes:true,
        payment_method_types:['card'],
        success_url:succesUrl,
        line_items:items.map((item)=>({
            price_data:{
                currency:"USD",
                unit_amount:Math.round(item.product.price! * 100),
                product_data:{
                    name:item.product.name || 'Unnamed Product',
                    description: Array.isArray(item.product.description) ? item.product.description.map(desc => 'children' in desc && desc.children ? desc.children.map(child => child.text).join('') : '').join(' ') : item.product.description,
                    metadata: {id: item.product._id},
                    images: item.product.image?[urlFor(item.product.image).url()] 
                    : undefined,
                },
            },
            quantity: item.quantity,
        })),
    };
    
    if(customerId){
        sessionPayLoad.customer = customerId
    }else{
        sessionPayLoad.customer_email = metadata.customerEmail;
    }
    const session = await stripe.checkout.sessions.create(sessionPayLoad);
    return session.url;
    
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw new Error("Failed to create Stripe checkout session.");
  }
  

};

// import { defineQuery } from "next-sanity";
// import { sanityFetch } from "../live";
// // import {client} from "../client"

// export async function getMyOrders(userId:string){
//     console.log("fetching orders for userId:", userId);
//     if(!userId){
//         throw new Error("User ID is required");
//     }

//     // Define the query to get orders based on user Id, sorted by orderDate desending
//     const MY_ORDERS_QUERY= defineQuery(`
//         *[_type == "order" && clerkUserId == $userId} ] | order(orderDate desc){
//             ...,
//             products[]{
//                 ...,
//                 product->
//             }
//         }
//         `)
//      const params = { userId }; 
//         try{
//             // use sanityfetch to send the query 
//             const orders = await sanityFetch({
//                 query: MY_ORDERS_QUERY,
//                 params:{userId},
//             });
//             // Return the list of orders, or an empty  array if none are found
//             return orders.data || [];
//         }catch(error){
//             console.error("Error fetching orders:", error)
//             throw new Error("Error fetching orders");
//         }
// }

// ======
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getMyOrders(userId: string) {
  const MY_ORDERS_QUERY = defineQuery(`
    *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {
      _id,
      orderNumber,
      orderDate,
      status,
      totalAmount,
      amountDiscount,
      currency,
      status,
      email,
      customerName,
      products[]{
        ...,
        product->
      }
    }
  `);

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId }
    });

    return orders.data || [];
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
}
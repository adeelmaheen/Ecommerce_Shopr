import { defineQuery } from "next-sanity"
import { CouponCode } from "./couponCodes"
import { sanityFetch } from "../live"; 

export const getActiveSaleByCouponCode = async (couponCode : CouponCode) => {
    const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[
            _type == "sales"
            && isActive == true
            && couponCode == couponCode
        ] | order(validFrom desc){
            _id,
            saleTitle,
            saleDescription,
            discountAmount,
            couponCode,
            validFrom,
            validUntil,
            isActive
            }[0]
        `);

        try{
            const activeSale = await sanityFetch({
                query:ACTIVE_SALE_BY_COUPON_QUERY,
                params:{
                    couponCode,
                },
            });
            return activeSale?activeSale.data : null;
        } catch(error){
            console.error("Error fetching sale by coupon code:", error)
        }
};

// import { defineQuery } from "next-sanity";
// import { CouponCode } from "./couponCodes";
// import { sanityFetch } from "../live";
// // import { Sale } from "@/sanity/schemaTypes/salesType"; // Adjust path as necessary

// export const getActiveSaleByCouponCode = async (couponCode: CouponCode): Promise<Sale | null> => {
//   const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
//     *[
//       _type == "sales"
//       && isActive == true
//       && couponCode == $couponCode
//     ] | order(validFrom desc) {
//       _id,
//       saleTitle as title,
//       saleDescription as description,
//       couponCode,
//       validFrom,
//       validUntil,
//       isActive
//     }[0]
//   `);

//   try {
//     const activeSale = await sanityFetch({
//       query: ACTIVE_SALE_BY_COUPON_QUERY,
//       params: {
//         couponCode,
//       },
//     });

//     return activeSale?activeSale.data : null;
//   } catch (error) {
//     console.error("Error fetching sale by coupon code:", error);
//     return null;
//   }
// };

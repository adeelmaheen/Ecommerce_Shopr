import {TagIcon} from '@sanity/icons';
import {defineField, defineType} from 'sanity';

// export interface Sale {
//     _id: string;
//     title: string;
//     description: string;
//     couponCode: string;
//     validFrom: string;
//     validUntil: string;
//     isActive: boolean;
//     discountAmount: number;
//   }
  

export const salesType = defineType({
    name: 'sales',
    title: 'Sales',
    type: 'document',
    icon: TagIcon,
    fields:[
        defineField({
            name: 'saleTitle',
            type: 'string',
            title: 'Sale Title',
        }),
        defineField({
            name: 'saleDescription',
            type: 'text',
            title: 'Sale Description',
            
        }),
        defineField({
            name: 'discountAmount',
            type: 'number',
            title: 'Discount Amount',
            description: 'Amount off in percentage or fixed value',
        }),
        defineField({
            name: 'couponCode',
            type: 'string',
            title: 'Coupon Code',
        }),
        defineField({
            name: 'validFrom',
            type: 'datetime',
            title: 'Valid From',
        }),
        defineField({
            name: 'validUntil',
            type: 'datetime',
            title: 'Valid Until',
        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Is Active',
            description: 'Toggle to activate or deactivate the sale',
            initialValue: true,
        }),
    ],
    
    
});
import {TrolleyIcon} from '@sanity/icons';
import { defineField, defineType } from 'sanity';
// import { title } from 'process';

export const productType =  defineType ({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon: TrolleyIcon,
    fields:[
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
            
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().min(0),
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        }),
          // Average rating (0-5)
         defineField({
              name: 'averageRating',
              title: 'Average Rating',
              type: 'number',
              readOnly: true,
              description: 'Auto-computed average user rating.',
           }),
        // Total number of reviews
          defineField({
            name: 'reviewCount',
            title: 'Review Count',
            type: 'number',
            readOnly: true,
            description: 'Auto-computed total number of reviews.',
            }),
          defineField({
            name: 'stock',
            title: 'Stock',
            type: 'number',
            validation: Rule => Rule.required().min(0),
        }),
    ],
    
});
// ==========// /sanity/schemas/product.ts

// import { defineField, defineType } from 'sanity'
// // import {TrolleyIcon} from '@sanity/icons'
// // import {tilte} from 'process'


// export const productType = defineType({
//   name: 'product',
//   title: 'Product',
//   type: 'document',
// //   icon: 'TrolleyIcon',
//   fields: [
//     // Display title of the product
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: (Rule) => Rule.required().min(2).max(100),
//     }),

//     // URL-friendly slug, generated from the title
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       description: 'SEO-friendly URL identifier, usually generated from the title.',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required(),
//     }),

//     // Short description for quick highlights
//     defineField({
//       name: 'shortDescription',
//       title: 'Short Description',
//       type: 'string',
//       description: 'A brief overview of the product.',
//       validation: (Rule) => Rule.max(200),
//     }),

//     // Detailed description (could be text, block content, etc.)
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       description: 'Full product description. You may change to "blockContent" if you want rich text.',
//     }),

//     // Name of the brand or manufacturer
//     defineField({
//       name: 'brand',
//       title: 'Brand',
//       type: 'string',
//     }),

//     // SKU (Stock Keeping Unit) for inventory tracking
//     defineField({
//       name: 'sku',
//       title: 'SKU',
//       type: 'string',
//       description: 'Unique stock keeping unit.',
//     }),

//     // Base price of the product
//     defineField({
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       description: 'Price in smallest currency unit (e.g., cents) or as a float (e.g. 19.99).',
//       validation: (Rule) => Rule.min(0),
//     }),

//     // Optional discount price or sale price
//     defineField({
//       name: 'discountPrice',
//       title: 'Discount Price',
//       type: 'number',
//       description: 'If set, show a discounted price for the product.',
//       validation: (Rule) => Rule.min(0),
//     }),

//     // In-stock quantity
//     defineField({
//       name: 'stockQuantity',
//       title: 'Stock Quantity',
//       type: 'number',
//       description: 'Number of items available in stock.',
//       validation: (Rule) => Rule.min(0),
//     }),

//     // Whether this product is featured (e.g. on homepage or special collection)
//     defineField({
//       name: 'isFeatured',
//       title: 'Featured Product',
//       type: 'boolean',
//       description: 'Mark as featured to display prominently in certain listings.',
//     }),

//     // Whether this product is archived/inactive
//     defineField({
//       name: 'isArchived',
//       title: 'Archived Product',
//       type: 'boolean',
//       description: 'Archived products are typically hidden from customers.',
//     }),

//     // Array of categories or references to a separate category document
//     defineField({
//       name: 'categories',
//       title: 'Categories',
//       type: 'array',
//       of: [{ type: 'string' }],
//       // Alternatively: of: [{ type: 'reference', to: [{ type: 'category' }] }]
//     }),

//     // Array of tags or keywords
//     defineField({
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{ type: 'string' }],
//       description: 'Keywords for search or related product suggestions.',
//     }),

//     // Images or references to image objects
//     defineField({
//       name: 'images',
//       title: 'Images',
//       type: 'array',
//       of: [{ type: 'image' }],
//       description: 'A list of images showcasing the product.',
//     }),

//     // Optional variants (colors, sizes, etc.) as a nested array
//     defineField({
//       name: 'variants',
//       title: 'Variants',
//       type: 'array',
//       of: [
//         defineField({
//           name: 'variant',
//           title: 'Variant',
//           type: 'object',
//           fields: [
//             { name: 'name', title: 'Name', type: 'string' }, // e.g., 'Size'
//             { name: 'value', title: 'Value', type: 'string' }, // e.g., 'XL'
//             {
//               name: 'priceModifier',
//               title: 'Price Modifier',
//               type: 'number',
//               description: 'Change in price for this variant (could be positive or negative).',
//             },
//           ],
//         }),
//       ],
//       description: 'Possible variations for this product (e.g. size or color).',
//     }),

//     // Average rating (0-5)
//     defineField({
//       name: 'averageRating',
//       title: 'Average Rating',
//       type: 'number',
//       readOnly: true,
//       description: 'Auto-computed average user rating.',
//     }),

//     // Total number of reviews
//     defineField({
//       name: 'reviewCount',
//       title: 'Review Count',
//       type: 'number',
//       readOnly: true,
//       description: 'Auto-computed total number of reviews.',
//     }),

//     // SEO fields
//     defineField({
//       name: 'metaTitle',
//       title: 'Meta Title',
//       type: 'string',
//       description: 'SEO title tag.',
//     }),
//     defineField({
//       name: 'metaDescription',
//       title: 'Meta Description',
//       type: 'text',
//       description: 'SEO description tag.',
//     }),
//   ],

//   // Preview configuration for Studio UI
//   preview: {
//     select: {
//       title: 'title',
//       subtitle: 'slug.current',
//       media: 'images.0', // use the first image as preview
//     },
//   },
// })

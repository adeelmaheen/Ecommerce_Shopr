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
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                  description: 'SEO-friendly URL identifier, usually generated from the title.',
                  options: {
                    source: 'title',
                    maxLength: 96,
                  },
                  validation: (Rule) => Rule.required(),
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
              description: 'average rating.',
           }),
        // Total number of reviews
          defineField({
            name: 'reviewCount',
            title: 'Review Count',
            type: 'number',
            description: 'total number of reviews.',
            }),
          defineField({
            name: 'stock',
            title: 'Stock',
            type: 'number',
            validation: Rule => Rule.required().min(0),
        }),
        // defineField({
        //     name: 'id',
        //     title: 'ID',
        //     type: 'string',
        //     description: 'Unique identifier for the furniture item',
        //   }),

    ],
    
});

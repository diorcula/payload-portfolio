import { CollectionConfig } from 'payload'

export const Category: CollectionConfig = {
  slug: 'category',

  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
  ],
}

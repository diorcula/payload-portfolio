import { Content } from '@/blocks/Content'
import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',

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
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      index: true,
      label: 'Slug',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      blocks: [Content],
    },

    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

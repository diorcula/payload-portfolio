import { Gallery } from '@/blocks/Gallery/config'
import { SectionTitle } from '@/blocks/SectionTitle/config'
import { CollectionConfig } from 'payload'
import { Content } from '@/blocks/Content/config'

export const Work: CollectionConfig = {
  slug: 'work',

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
      index: true,
      label: 'Slug',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'category',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'features',
      label: 'Features',
      type: 'text',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'linkToWebsite',
      label: 'Link',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      blocks: [SectionTitle, Gallery, Content],
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

import { CTAButton } from '@/fields/CTAButton'
import { Block } from 'payload'

export const Teaser: Block = {
  slug: 'teaser',

  fields: [
    {
      name: 'teaserTitle',
      label: 'Teaser Title',
      type: 'text',
    },
    {
      name: 'teaserImage',
      label: 'Teaser Image',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'teaserDescription',
      label: 'Teaser Description',
      type: 'textarea',
    },
    {
      name: 'teaserLink',
      label: 'Teaser Link',
      type: 'array',
      fields: [CTAButton],
    },
  ],
}

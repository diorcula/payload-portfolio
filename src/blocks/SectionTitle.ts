import { Block } from 'payload'

export const SectionTitle: Block = {
  slug: 'sectionTitle',

  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
    },
    {
      name: 'sectionText',
      type: 'richText',
    },
  ],
}

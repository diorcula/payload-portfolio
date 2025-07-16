import { Block } from 'payload'

export const SectionTitle: Block = {
  slug: 'sectionTitle',
  interfaceName: 'SectionTitleBlock',

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

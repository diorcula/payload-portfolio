import { Block } from 'payload'

export const WorkBlock: Block = {
  slug: 'workblock',

  fields: [
    {
      name: 'populatedBy',
      type: 'select',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
      ],
    },
    {
      name: ' relationToDocument',
      type: 'relationship',
      relationTo: 'work',
      admin: { condition: (_, siblingData) => siblingData.populatedBy === 'collection' },
      label: 'Works to show',
      hasMany: true,
    },
  ],
}

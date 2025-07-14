import { Block } from 'payload'

export const WorkBlock: Block = {
  slug: 'workblock',

  fields: [
    {
      name: 'popylatedBy',
      type: 'select',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
      ],
    },
    {
      name: ' realtionTo',
      type: 'relationship',
      relationTo: 'work',
      admin: { condition: (_, siblingData) => siblingData.popylatedBy === 'collection' },
      label: 'Works to show',
      hasMany: true,
    },
  ],
}

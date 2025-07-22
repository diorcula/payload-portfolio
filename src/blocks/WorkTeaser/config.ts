import { Block } from 'payload'

export const WorkTeaserBlock: Block = {
  slug: 'workteaserblock',
  interfaceName: 'WorkTeaserBlock',

  fields: [
    {
      name: ' relationToDocument',
      type: 'relationship',
      relationTo: 'work',
      label: 'Works to show',
      hasMany: true,
    },
  ],
}

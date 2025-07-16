import { linkField } from '@/fields/link'
import { Block } from 'payload'
import type { Field } from 'payload'

export const CTAButton: Field = {
  name: 'ctabutton',
  label: 'Button',
  type: 'group',
  fields: [
    ...linkField({
      text: { label: 'Button Link Text' },
    }),
  ],
}

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',

  fields: [
    {
      name: 'text',
      type: 'richText',
    },
    CTAButton,
  ],
}

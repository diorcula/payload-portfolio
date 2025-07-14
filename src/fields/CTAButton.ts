import type { Field } from 'payload'

export const CTAButton: Field = {
  name: 'ctabutton',
  label: 'Button',
  type: 'group',
  fields: [
    { name: 'ctaLabel', type: 'text' },
    { name: 'ctaLink', type: 'text' },
  ],
}

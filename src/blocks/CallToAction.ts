import { Block } from 'payload'
import { CTAButton } from '../fields/CTAButton'

export const CallToAction: Block = {
  slug: 'cta',

  fields: [
    {
      name: 'text',
      type: 'textarea',
    },
    CTAButton,
  ],
}

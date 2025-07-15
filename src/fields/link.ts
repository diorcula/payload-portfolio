// import { slugs } from '@/config/slug';
import type {
  CheckboxField,
  CollectionSlug,
  GroupField,
  RelationshipField,
  SelectField,
  TextField,
} from 'payload'
import { z } from 'zod'

interface Overrides {
  group?: Partial<GroupField>
  type?: Partial<SelectField>
  style?: Partial<SelectField>
  newTab?: Partial<CheckboxField>
  text?: Partial<TextField>
  reference?: Partial<RelationshipField>
  url?: Partial<TextField>
}

type LinkField = (overrides?: Overrides) => [GroupField]

export const linkField: LinkField = (overrides = {}) => {
  // @ts-expect-error - ts mismatch Partial<SelectField> with SelectField
  const typeField: SelectField = {
    name: 'type',
    label: 'Type',
    type: 'select',
    required: true,
    defaultValue: 'internal_link',
    enumName: 'FieldLinkType',
    options: [
      {
        label: 'Internal Link',
        value: 'internal_link',
      },
      {
        label: 'Custom URL',
        value: 'custom_url',
      },
    ],
    ...(overrides.type || {}),
    admin: {
      width: '20%',
      ...(overrides.type?.admin || {}),
    },
  }

  // @ts-expect-error - ts mismatch Partial<SelectField> with SelectField
  const styleField: SelectField = {
    name: 'style',
    label: 'Style',
    type: 'select',
    defaultValue: 'link',
    enumName: 'FieldLinkStyle',
    options: [
      {
        value: 'link',
        label: 'Link',
      },
    ],
    ...(overrides.style || {}),
    admin: {
      width: '20%',
      ...(overrides.style?.admin || {}),
    },
  }

  const newTabField: CheckboxField = {
    name: 'newTab',
    label: 'Open link in new tab',
    type: 'checkbox',
    ...(overrides.newTab || {}),
    admin: {
      width: '20%',
      className: 'field-link-new-tab',
      ...(overrides.newTab?.admin || {}),
    },
  }

  // @ts-expect-error - ts mismatch Partial<TextField> with TextField
  const textField: TextField = {
    name: 'text',
    type: 'text',
    required: true,
    ...(overrides.text || {}),
    admin: {
      width: '100%',
      ...(overrides.text?.admin || {}),
    },
  }

  // @ts-expect-error - ts mismatch Partial<RelationshipField> with RelationshipField
  const referenceField: RelationshipField = {
    name: 'reference',
    type: 'relationship',
    required: true,
    relationTo: ['pages', 'work'],
    ...(overrides.reference || {}),
    admin: {
      width: '25%',
      allowCreate: false,
      condition: (_, siblingData) => siblingData.type === 'internal_link',
      ...(overrides.reference?.admin || {}),
    },
  }

  // @ts-expect-error - ts mismatch Partial<TextField> with TextField
  const urlField: TextField = {
    name: 'url',
    type: 'text',
    required: true,
    validate: (value) => {
      const urlSchema = z.string().url()

      const { success } = urlSchema.safeParse(value)

      if (!success) {
        return 'Value should be an valid url'
      }

      return true
    },
    ...(overrides.url || {}),
    admin: {
      width: '25%',
      condition: (_, siblingData) => siblingData.type === 'custom_url',
      ...(overrides.url?.admin || {}),
    },
  }

  const groupField: GroupField = {
    name: 'link',
    label: 'Link',
    type: 'group',
    interfaceName: 'Link',
    ...(overrides.group || {}),
    admin: {
      hideGutter: true,
      ...(overrides.group?.admin || {}),
    },
    fields: [
      {
        type: 'row',
        fields: [typeField, styleField, referenceField, urlField, newTabField, textField],
      },
    ],
  }

  return [groupField]
}

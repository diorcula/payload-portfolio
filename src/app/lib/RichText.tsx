import type { DefaultNodeTypes, SerializedLinkNode } from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  type JSXConvertersFunction,
  LinkJSXConverter,
  RichText as PayloadRichText,
} from '@payloadcms/richtext-lexical/react'
import React from 'react'

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { relationTo, value } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug

  switch (relationTo) {
    case 'work':
      return `/work/${slug}`
    case 'pages':
      return `/${slug}`
    default:
      return `/${relationTo}/${slug}`
  }
}

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
})

interface Props {
  data: SerializedEditorState | undefined | null
}

export default function RichText({ data }: Props) {
  if (!data) {
    return null
  }

  return (
    <div className="paragraph-styles">
      <PayloadRichText converters={jsxConverters} data={data} />
    </div>
  )
}

import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

interface Props {
  data: SerializedEditorState | undefined | null
}

export default function RichText({ data }: Props) {
  if (!data) {
    return null
  }

  return (
    <div className="paragraph-styles">
      <PayloadRichText disableContainer data={data} />
    </div>
  )
}

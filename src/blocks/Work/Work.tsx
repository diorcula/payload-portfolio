import type { WorkBlock as WorkBlockProps } from '@/payload-types'
import Image from 'next/image'

type Props = WorkBlockProps

export function WorkBlock(props: Props) {
  return (
    <>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

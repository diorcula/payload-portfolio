import type { ServicesBlock as ServicesBlockProps } from '@/payload-types'
import { Card } from '@payloadcms/ui'
import Image from 'next/image'

type Props = ServicesBlockProps

export function ServicesBlock(props: Props) {
  if (!props.items) {
    return null
  }

  const items = props.items

  return (
    <>
      {/* <div key={props.id}>
        {items.map((item, index) => (
          <Card title={item.service}> */}
      {/* <Image src={item.serviceImage}></Image> */}
      <pre>{JSON.stringify(props, null, 2)}</pre>
      {/* </Card>
        ))}
      </div> */}
    </>
  )
}

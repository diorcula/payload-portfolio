import type { ServicesBlock as ServicesBlockProps } from '@/payload-types'
import Image from 'next/image'

type Props = ServicesBlockProps

export function ServicesBlock(props: Props) {
  const items = props.items

  if (!props.items) {
    return null
  }

  return (
    <>
      <div className="servicesContainer">
        <h1>Services</h1>
        {items?.map((item) => (
          <div key={item.id} className="serviceItem">
            <h3>{item.service}</h3>

            <Image
              src={item.serviceImage.url}
              alt={item.serviceImage.alt || 'Gallery Block Image'}
              width={item.serviceImage.width || 600}
              height={item.serviceImage.height || 400}
            />

            <p>{item.serviceDescription}</p>
          </div>
        ))}
      </div>
    </>
  )
}

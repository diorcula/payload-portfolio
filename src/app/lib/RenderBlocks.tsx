import type {
  ContentBlock as ContentBlockType,
  SectionTitleBlock as SectionTitleBlockType,
  CallToActionBlock as CallToActionBLockType,
  GalleryBlock as GalleryBlockType,
  ServicesBlock as ServicesBlockType,
  WorkTeaserBlock as WorkTeaserBlockType,
} from '@/payload-types'
import { ContentBLock } from '@/blocks/Content/Content'
import { SectionTitleBlock } from '@/blocks/SectionTitle/SectionTitle'
import { CallToActionBLock } from '@/blocks/CallToAction/CallToAction'
import { GalleryBlock } from '@/blocks/Gallery/Gallery'
import { ServicesBlock } from '@/blocks/Services/Services'
import { WorkTeaserBlock } from '@/blocks/WorkTeaser/WorkTeaser'

interface Props {
  blocks: Blocks[] | null | undefined
}

// add blocks here
type Blocks =
  | ContentBlockType
  | SectionTitleBlockType
  | CallToActionBLockType
  | GalleryBlockType
  | ServicesBlockType
  | WorkTeaserBlockType

// add block components here
function getBlock(block: Blocks) {
  switch (block.blockType) {
    case 'content':
      return <ContentBLock key={block.id} {...block} />
    case 'sectionTitle':
      return <SectionTitleBlock key={block.id} {...block} />
    case 'cta':
      return <CallToActionBLock key={block.id} {...block} />
    case 'gallery':
      return <GalleryBlock key={block.id} {...block} />
    case 'services':
      return <ServicesBlock key={block.id} {...block} />
    case 'workteaserblock':
      return <WorkTeaserBlock key={block.id} {...block} />
    default:
      return null
  }
}

export default function RenderBlocks({ blocks }: Props) {
  if (!blocks || blocks.length < 1) {
    return null
  }
  return blocks.map(getBlock)
}

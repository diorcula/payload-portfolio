import type {
  ContentBlock as ContentBlockType,
  SectionTitleBlock as SectionTitleBlockType,
} from '@/payload-types'
import { ContentBLock } from '@/blocks/Content/Content'
import { SectionTitleBlock } from '@/blocks/SectionTitle/SectionTitle'

interface Props {
  blocks: Blocks[] | null | undefined
}

// add blocks here
type Blocks = ContentBlockType | SectionTitleBlockType

// add block components here
function getBlock(block: Blocks) {
  switch (block.blockType) {
    case 'content':
      return <ContentBLock key={block.id} {...block} />
    case 'sectionTitle':
      return <SectionTitleBlock key={block.id} {...block} />
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

import React from 'react'
import KBadge from '@/components/KBadge/KBadge.vue'

export const CustomDocumentationComponent: React.VFC<any> = () => {
  return (
    <>
      <KBadge appearance="success" class="mr-2">SUCCESS</KBadge>
      <KBadge appearance="warning" class="mr-2">WARNING</KBadge>
      <KBadge appearance="danger" class="mr-2">DANGER</KBadge>
      <KBadge appearance="info" class="mr-2">INFO</KBadge>
      <KBadge>DEFAULT</KBadge>
    </>
  )
}

import { useMediaQuery } from '@vueuse/core'

// Tailwind CSS, https://tailwindcss.com/docs/responsive-design
export enum MediaSize {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1536
}

// Size of Tailwind CSS sm breakpoint
export const isMobile = useMediaQuery(`(max-width: ${MediaSize.sm}px)`)

export function isMediaSize(size: MediaSize) {
  return useMediaQuery(`(min-width: ${size}px)`)
}

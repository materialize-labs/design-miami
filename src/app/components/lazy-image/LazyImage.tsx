// Libs
import { CSSProperties, FC, memo, MouseEvent } from 'react'
import Image from 'next/legacy/image'
import { ImageProps } from 'next/dist/client/image'

// Interface
interface ILazyImage {
  src: ImageProps['src']
  alt: ImageProps['alt']
  width?: ImageProps['width']
  height?: ImageProps['height']
  loading?: ImageProps['loading']
  quality?: ImageProps['quality']
  placeholder?: ImageProps['placeholder']
  className?: string
  style?: CSSProperties
  onClick?: (e: MouseEvent<HTMLImageElement>) => void
}

// Component
const LazyImage: FC<ILazyImage> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  quality = 85,
  placeholder = 'blur',
  className,
  style,
  onClick,
}) => {
  // Preloader
  const shimmer = (w: number | string | undefined, h: number | string | undefined) => `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`
  // Base 64
  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

  // Return
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
      loading={loading}
      className={className}
      style={style}
      onClick={onClick}
      objectFit={'cover'}
      lazyBoundary={'250px'}
      layout={'intrinsic'}
    />
  )
}

export default memo(LazyImage)

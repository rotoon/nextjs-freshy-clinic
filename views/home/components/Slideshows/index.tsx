'use client'
import { TSlide } from '@/app/page'
import { Box } from '@chakra-ui/react'
import { getImageProps } from 'next/image'
import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2500,
}

const placeholder = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

const SlideShow = ({ slides }: { slides: TSlide[] }) => {
  const mobile = slides?.filter((slide) => slide.type === 'mobile') ?? []
  const desktop = slides?.filter((slide) => slide.type === 'desktop') ?? []
  return (
    <Box mt={{ base: '4rem', lg: '8.5rem' }}>
      {desktop?.length > 0 && (
        <Box
          zIndex='banner'
          display={{ base: 'none', md: 'block' }}
        >
          <Slider {...settings}>
            {desktop?.map(({ image }, index) => (
              <picture key={index}>
                <source
                  media='(min-width: 48em)'
                  sizes='100vw'
                  srcSet={getImageProps({ src: image, alt: 'slide image', fill: true, sizes: '100vw' }).props.srcSet}
                />
                {/* The hidden mobile/desktop slider uses an inline placeholder. */}
                <img
                  alt='slide image'
                  src={placeholder}
                  style={{ width: '100%' }}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </picture>
            ))}
          </Slider>
        </Box>
      )}
      {mobile?.length > 0 && (
        <Box
          zIndex='banner'
          display={{ base: 'block', md: 'none' }}
        >
          <Slider {...settings}>
            {mobile?.map(({ image }, index) => (
              <picture key={index}>
                <source
                  media='(width < 48em)'
                  sizes='100vw'
                  srcSet={getImageProps({ src: image, alt: 'slide image', fill: true, sizes: '100vw' }).props.srcSet}
                />
                <img
                  alt='slide image'
                  src={placeholder}
                  style={{ width: '100%' }}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </picture>
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  )
}

export default SlideShow

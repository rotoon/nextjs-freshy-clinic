'use client'
import { TSlide } from '@/app/page'
import { Box, Image } from '@chakra-ui/react'
import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
}

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
              <Image
                alt='slide image'
                src={image}
                key={index}
              />
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
              <Image
                alt='slide image'
                src={image}
                key={index}
              />
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  )
}

export default SlideShow

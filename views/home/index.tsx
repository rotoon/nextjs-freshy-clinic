'use client'
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

export default function Home() {
  return (
    <Box mt={{ base: '4rem', md: '8.5rem' }}>
      <Box
        zIndex='banner'
        display={{ base: 'none', lg: 'block' }}
      >
        <Slider {...settings}>
          <Image src='/slides/desktop/1.jpg' />
          <Image src='/slides/desktop/2.jpg' />
        </Slider>
      </Box>
      <Box
        zIndex='banner'
        display={{ base: 'block', lg: 'none' }}
      >
        <Slider {...settings}>
          <Image src='/slides/mobile/1.jpg' />
          <Image src='/slides/mobile/2.jpg' />
        </Slider>
      </Box>
    </Box>
  )
}

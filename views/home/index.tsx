'use client'
import { Box, Image } from '@chakra-ui/react'
import Slider from 'react-slick'
import Layout from '../layout'
import { HomeComponentProps } from '@/app/page'

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

export default function Home({ slides }: HomeComponentProps) {
  const mobile = slides?.list.filter((slide) => slide.type === 'mobile') ?? []
  const desktop = slides?.list.filter((slide) => slide.type === 'desktop') ?? []

  return (
    <Layout>
      <Box mt={{ base: '4rem', md: '8.5rem' }}>
        {desktop?.length > 0 && (
          <Box
            zIndex='banner'
            display={{ base: 'none', lg: 'block' }}
          >
            <Slider {...settings}>
              {desktop?.map(({ image }, index) => (
                <Image
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
            display={{ base: 'block', lg: 'none' }}
          >
            <Slider {...settings}>
              {mobile?.map(({ image }, index) => (
                <Image
                  src={image}
                  key={index}
                />
              ))}
            </Slider>
          </Box>
        )}
      </Box>
    </Layout>
  )
}

'use client'
import { useState } from 'react'
import { Box, Button, Link, Text, VStack } from '@chakra-ui/react'
import { ImLocation } from 'react-icons/im'

type Props = {
  title: string
  embedUrl: string
  mapUrl: string
}

// Google Maps embeds download ~500 KB each, so load one only when asked.
export default function MapEmbed({ title, embedUrl, mapUrl }: Props) {
  const [showMap, setShowMap] = useState(false)

  return (
    <Box
      w={{ base: '100%', md: '280px' }}
      h='200px'
      flexShrink={0}
      borderRadius='10px'
      overflow='hidden'
      boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    >
      {showMap ? (
        <iframe
          title={title}
          src={embedUrl}
          width='100%'
          height='100%'
          style={{ border: 0 }}
        />
      ) : (
        <VStack
          h='100%'
          justify='center'
          spacing={3}
          bg='purple.50'
          fontFamily='LINESeedSansTH-Rg'
        >
          <Text
            as='span'
            fontSize='2xl'
            color='purple.500'
            aria-hidden
          >
            <ImLocation />
          </Text>
          <Button
            size='sm'
            colorScheme='purple'
            onClick={() => setShowMap(true)}
          >
            แสดงแผนที่
          </Button>
          <Link
            href={mapUrl}
            isExternal
            fontSize='sm'
            color='purple.700'
            textDecoration='underline'
          >
            เปิดใน Google Maps
          </Link>
        </VStack>
      )}
    </Box>
  )
}

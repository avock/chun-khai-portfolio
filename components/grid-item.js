import NextLink from 'next/link'
import Image from 'next/image'
import {
    Box,
    Text,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/react'
import {Global} from '@emotion/react'

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image 
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSIze={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const CodingGridItem = ({children, id, title, thumbnail}) => (
    <Box w="100%" align="center">
        <NextLink href={`/coding/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} classname="grid-item-thumbnail" placeholder="blur" />
                <LinkOverlay href={`/coding/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>
                    {children}
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const PhotographyGridItem = ({children, id, title, thumbnail}) => (
    <Box w="100%" align="center">
        <NextLink href={`/photography/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} classname="grid-item-thumbnail" placeholder="blur" />
                <LinkOverlay href={`/photography/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>
                    {children}
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `} />
)
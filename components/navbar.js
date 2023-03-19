import Logo from './logo'
import NextLink from 'next/link'
import { 
    Container,
    Box,
    Button,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton, 
    useColorModeValue} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({href, path, children}) => {
    const active = path === href
    return (
        <NextLink href={href}>
            <Button
                as={active? 'u': null}
                // color={active? useColorModeValue('', 'black') : ''}
                // bg={active? useColorModeValue('#02b5b5', '#e89b35') : ''}
                bg={''}
                >
                {children}
            </Button>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props
    return (
        <Box 
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#f0e7db', '#20202380')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={1}
        {...props}
        >
            <Container
                display="flex" 
                p={2} 
                maxW="container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
                >
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo/>
                        </Heading>
                    </Flex>
                    <Stack 
                        direction={{base: 'column', md:'row'}}
                        display={{base:'none', md:'flex'}}
                        width={{base:'full', md:'auto'}}
                        alignItems="center"
                        flexGrow={1}
                        mt={{base:4, md:2}}
                    >       
                            <LinkItem href="/aboutMe" path={path}>
                                About
                            </LinkItem>
                            {/* <LinkItem href="/coding" path={path}>
                                Coding
                            </LinkItem>
                            <LinkItem href="/photography" path={path}>
                                Photography
                            </LinkItem> */}
                    </Stack>
                    <Box flex={1} align="right">
                        <ThemeToggleButton />
                        <Box ml={2} display="inline">
                            <Menu>
                                <MenuButton 
                                    as={IconButton} 
                                    icon={<HamburgerIcon />} 
                                    variant="outline" 
                                    aria-label="Options" />
                                <MenuList>
                                    <NextLink href="/aboutMe" passHref>
                                        <MenuItem as={Link}>
                                            About
                                        </MenuItem>
                                    </NextLink>
                                    {/* <NextLink href="/coding" passHref>
                                        <MenuItem as={Link}>
                                            Coding
                                        </MenuItem>
                                    </NextLink>
                                    <NextLink href="/photography" passHref>
                                        <MenuItem as={Link}>
                                            Photography
                                        </MenuItem>
                                    </NextLink>
                                    <MenuItem as={Link} href="https://github.com/avock/chun-khai-portfolio">
                                        View Source
                                    </MenuItem> */}
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
            </Container>
        </Box>
    )
}

export default Navbar
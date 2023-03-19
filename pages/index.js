import NextLink from 'next/link'
import {
	Container, 
	Box, 
	Heading, 
	Image, 
	Link,
	Button,
	Icon,
	List,
	useColorModeValue,
	ListItem,
	} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import {
	IoLogoInstagram,
	IoLogoGithub,
} from 'react-icons/io5'
import {
	IoIosMail
} from 'react-icons/io'
import {
	BsTelegram
} from 'react-icons/bs'
import VoxelDog from '../components/voxel-dog'
import NoSsr from '../components/no-ssr'
import Typewriter from '../components/typeWriter'
import TechStackBar from '../components/techStack'

const timing=0.3

const Page = () => {
	return (
		<Layout>
			<Container>
				<Section delay={timing}>
					<Container align="center">
						<NoSsr>
							<VoxelDog />
						</NoSsr>
						<Box 
							borderRadius='lg' 
							align='center'
							mb={6} 
							p={3} 
							bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} 
						>
							Hey there! I&#39;m an aspiring Software Engineer based in Singapore!🇸🇬
						</Box>
					</Container>
				</Section>

				<Section delay={timing + 0.2}>
					<Box display={{md:'flex'}}> 
						<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Chun Khai // CK
						</Heading>
						<Typewriter 
							fixedWords={"I am a "}
							words={['student', 'programmer', 'photographer', 'coffee lover']} />
						</Box>
						<Box 
							flexShrink={0} 
							mt={{base:4, md:0}} 
							ml={{md:6}}
							align="center"
						>
							<Image
								borderColor="whiteAlpha.800" 
								borderWidth={2} 
								borderStyle="solid" 
								maxWidth="100px" 
								display="inline-block" 
								borderRadius="full" 
								src="/images/profile_picture.jpg"
								alt="Profile Image"/>
						</Box>
					</Box>
				</Section>

				<Section delay={timing + 0.4}>
					<Heading as="h3" variant="section-title">
						Coding 
					</Heading>
					<Paragraph>
					Chun Khai is a freelance software developer and photographer currently studying Computer Science at the {}
					<NextLink href="https://nus.edu.sg">
						<Link>National University of Singapore</Link>
					</NextLink>. He enjoys cooking and coffee brewing in his free time.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/aboutMe">
							<Button rightIcon={<ChevronRightIcon/>} colorScheme={useColorModeValue("teal", "orange")}> 
								More about me!
							</Button>
						</NextLink>
					</Box>					
				</Section>

				<Section delay={timing + 0.4}>
					<Heading as="h3" variant="section-title">
						Tech Stack 
					</Heading>
					<TechStackBar />	
				</Section>

				<Section delay={timing + 1.0}>
					<Heading as='h3' variant='section-title'>
						Get In Touch
					</Heading>
					<List>
						<ListItem>
							<Link href='https://github.com/avock' target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
								Github
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='https://instagram.com/chunkhaik' target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>
								Instagram
								</Button>
							</Link>
						</ListItem>
						<ListItem>
						<ListItem>
							<Link href='https://t.me/chunkhaik' target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={BsTelegram}/>}>
								Telegram
								</Button>
							</Link>
						</ListItem>
							<Link href='mailto:chunkhai.k@gmail.com' target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoIosMail}/>}>
								Email
								</Button>
							</Link>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page
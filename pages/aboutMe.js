import {Container, Heading} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import {BioYear, BioSection} from '../components/bio'

const timing=0.3

const Page = () => {
	return (
		<Layout>
			<Container>
                <Section delay={timing}>
                    <Heading as='h2' fontSize={40} mt={8} mb={4}> 
                        About Me
                    </Heading>
                </Section>
                <Section delay={timing + 0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>2018</BioYear>
						Completed High School at Chung Ling High School (锺灵中学)
					</BioSection>
					<BioSection>
						<BioYear>2020</BioYear>
						Completed Pre-University at Methodist College Kuala Lumpur
					</BioSection>
					<BioSection>
						<BioYear>2017 to present</BioYear>
						Works as a freelance photographer and videographer
					</BioSection>
					<BioSection>
						<BioYear>2021 to present</BioYear>
						Pursuing degree in Computer Science at the National University of Singapore
					</BioSection>
				</Section>
				<Section delay={timing + 0.4}>
					<Heading as="h3" variant="section-title">
						Things I Love
					</Heading>
					<Paragraph>
						Photography, Music (Pop and Jazz), Cooking, Totoro.
					</Paragraph>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page
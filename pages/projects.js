import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'


const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as='h2' fontSize={40} mt={8} mb={4}>
                Past Projects
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                        title="Dummy Link"
                        thumbnail={thumbFishWorkflow}
                        href="https://www.youtube.com"
                    />
                    <GridItem 
                        title="Dummy Link2"
                        thumbnail={thumbFishWorkflow}
                        href="https://www.youtube.com"
                    />
                    <GridItem 
                        title="Dummy Link3"
                        thumbnail={thumbFishWorkflow}
                        href="https://www.youtube.com"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Projects
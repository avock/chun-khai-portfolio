import {
    Container, 
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import { PhotographyGridItem} from '../components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import Layout from '../components/layouts/article'

const Photography = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h2' fontSize={40} mt={8} mb={4}> 
                    Photography Projects
                </Heading>
                {/* [ IDK???? ,min columns, default columns]*/}
                <SimpleGrid columns={[1, 1, 1]} gap={6}>
                    <Section>
                        <PhotographyGridItem id="thaipusam" title="Thaipusam" thumbnail={thumbInkdrop}>
                            (DUMMY PLACE HOLDER FOR NOW)
                        </PhotographyGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Photography
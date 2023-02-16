import {
    Container, 
    Box,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem} from '../components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4} mt={5}> 
                    Works
                </Heading>
                {/* [ IDK???? ,min columns, default columns]*/}
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                            (DUMMY PLACE HOLDER FOR NOW)
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="walknote" title="Walknote" thumbnail={thumbWalknote}>
                            (DUMMY PLACE HOLDER FOR NOW)
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                            (DUMMY PLACE HOLDER FOR NOW)
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="walknote" title="Walknote" thumbnail={thumbWalknote}>
                            (DUMMY PLACE HOLDER FOR NOW)
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
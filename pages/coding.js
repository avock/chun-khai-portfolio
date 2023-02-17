import {
    Container, 
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import { CodingGridItem} from '../components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import Layout from '../components/layouts/article'

const Coding = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h2' fontSize={40} mt={8} mb={4}> 
                    Coding Projects
                </Heading>
                {/* [ IDK???? ,min columns, default columns]*/}
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <CodingGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                            (DUMMY PLACE HOLDER FOR NOW)
                        </CodingGridItem>
                    </Section>
                    <Section>
                        <CodingGridItem id="walknote" title="Walknote" thumbnail={thumbWalknote}>
                            (DUMMY PLACE HOLDER FOR NOW)
                        </CodingGridItem>
                    </Section>
                    <Section>
                        <CodingGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                            (DUMMY PLACE HOLDER FOR NOW)
                        </CodingGridItem>
                    </Section>
                    <Section>
                        <CodingGridItem id="walknote" title="Walknote" thumbnail={thumbWalknote}>
                            (DUMMY PLACE HOLDEzR FOR NOW)
                        </CodingGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Coding
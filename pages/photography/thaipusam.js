import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, Meta, PhotographyImage} from '../../components/projectDisplay'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Photography = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title mt={8} mb={4} pageType="Photography"> 
                    THAIPUSAM <Badge> 2016</Badge>
                </Title>
                <P>
                    (PLACEHOLDER)
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.inkdrop.app/'>
                            https://www.linkdrop.app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span> Windows/MacOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> NodeJS, Electron, React Native</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogspot</Meta>
                        <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                            test paragraph <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <PhotographyImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
                <PhotographyImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
            </Container>
        </Layout>
    )
}

export default Photography
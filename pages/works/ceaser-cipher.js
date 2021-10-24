import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Caesar cipher">
    <Container>
      <Title>
        Caesar cipher <Badge>2021</Badge>
      </Title>
      <P>Application encrypts text using the Caesar cipher.</P>
      <P>
        It is a type of substitution cipher in which each letter in the
        plaintext is replaced by a letter some fixed number of positions down
        the alphabet. For example, with a left shift of 3, D would be replaced
        by A, E would become B, and so on. The method is named after Julius
        Caesar, who used it in his private correspondence.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, Native JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://caesarcipherlr.netlify.app/">
            Encrypt text <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/caesar-cipher.jpg" alt="caesar-cipher" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/caesar-cipher-work.jpg"
          alt="caesar-cipher"
        />
        <WorkImage
          src="/images/works/caesar-cipher-work2.jpg"
          alt="caesar-cipher"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

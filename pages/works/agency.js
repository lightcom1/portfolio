import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Agency">
    <Container>
      <Title>
        Agency <Badge>2020</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/agency.jpg" alt="homepage" />
      </Center>
      <Center my={6}>
        <Image src="/images/works/agency-plan.jpg" alt="plan page" />
      </Center>
      <P>Responsive landing page with graphic agency info.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://lightcom1.github.io/GrafikaAgency/">
            Graphic agency <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Stopwatch = () => (
  <Layout title="Toss a coin">
    <Container>
      <Title>
        Stopwatch <Badge>2021</Badge>
      </Title>
      <P>
        Designed to measure the amount of time that elapses between its
        activation and deactivation with results.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, Native JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://lightcom1.github.io/stopwatch/">
            Stopwatch <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/stopwatch.jpg" alt="stopwatch" />
      <WorkImage
        src="/images/works/stopwatch-results.jpg"
        alt="stopwatch results"
      />
    </Container>
  </Layout>
)

export default Stopwatch

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const CoinToss = () => (
  <Layout title="Toss a coin">
    <Container>
      <Title>
        Toss a coin game <Badge>2021</Badge>
      </Title>
      <P>
        Game in which you can toss a coin and find out how often heads or tails
        come up.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, Native JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://lightcom1.github.io/CoinFlip/">
            Toss a coin <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/coin-flip.jpg" alt="toss a coin" />
      <WorkImage
        src="/images/works/coin-toss.jpg"
        alt="flipping a coin"
      />
    </Container>
  </Layout>
)

export default CoinToss

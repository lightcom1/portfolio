import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Online chat">
    <Container>
      <Title>
        Online chat <Badge>2021</Badge>
      </Title>
      <P>Realtime Chat Application where you can chat with friends.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Express, NodeJS, Socket.IOs</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://dk-online-chat.netlify.app/">
            Chat with friends <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/chat-join.jpg" alt="joining" />
      <WorkImage src="/images/works/online-chat.jpg" alt="chat" />
    </Container>
  </Layout>
)

export default Work

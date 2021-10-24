import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const PasswordChecker = () => (
  <Layout title="Toss a coin">
    <Container>
      <Title>
        Password strength checker <Badge>2021</Badge>
      </Title>
      <P>Here you can check your password for strength.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, Native JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://lightcom1.github.io/password-strength-checker/">
            Check Password Strength <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/password-strength.jpg"
        alt="password strength"
      />
      <WorkImage
        src="/images/works/password-strength2.jpg"
        alt="weak password"
      />
    </Container>
  </Layout>
)

export default PasswordChecker

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Weather = () => (
  <Layout title="Weather app">
    <Container>
      <Title>
        Weather app <Badge>2021</Badge>
      </Title>
      <P>
        Determines the weather depending on the city using geolocation and
        OpenWeather API.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, OpenWeather API</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://dkweatherapp.netlify.app/">
            Weather app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/weather-thumb.jpg" alt="weather" />
      <WorkImage
        src="/images/works/weather-app.jpg"
        alt="weather with greetings"
      />
    </Container>
  </Layout>
)

export default Weather

import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOnlineChat from '../public/images/works/online-chat.jpg'
import thumbAgency from '../public/images/works/agency.jpg'
import thumbCaesarCipher from '../public/images/works/caesar-cipher.jpg'
import thumbWeather from '../public/images/works/weather-thumb.jpg'
import thumbCoinToss from '../public/images/works/coin-flip.jpg'
import thumbPasswordStrength from '../public/images/works/password-strength.jpg'
import thumbStopwatch from '../public/images/works/stopwatch.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="online-chat"
            title="Online chat"
            thumbnail={thumbOnlineChat}
          >
            Realtime Chat Application where you can chat with friends
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="agency"
            thumbnail={thumbAgency}
            title="Landing page"
          >
            Landing page with graphics agency information
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ceaser-cipher"
            thumbnail={thumbCaesarCipher}
            title="Caesar cipher"
          >
            Application encrypts text using the Caesar cipher
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Mini projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.6}>
          <WorkGridItem
            id="weather-app"
            thumbnail={thumbWeather}
            title="Weather app"
          >
            Determines the weather depending on the city using geolocation and
            OpenWeather API
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="coin-toss"
            thumbnail={thumbCoinToss}
            title="Coin toss"
          >
            Game made for fun with drop percentages
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="pass-check"
            thumbnail={thumbPasswordStrength}
            title="Password checker"
          >
            Here you can check your password for strength
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="stopwatch"
            thumbnail={thumbStopwatch}
            title="Stopwatch"
          >
            Designed to measure the amount of time that elapses between its
            activation and deactivation
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works

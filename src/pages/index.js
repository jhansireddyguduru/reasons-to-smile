import React from "react"
import { navigate } from "gatsby"
import { Box, Anchor, Text } from "grommet"
import App from "../components/layout"
import Section from "../components/section"

const IndexPage = () => (
  <App>
    <Section
      background="light-3"
      title="Hello there,"
      pad={{ horizontal: `xlarge`, vertical: `small` }}
    >
      <Box direction="row-responsive" margin="medium">
        <Box align="center" basis="3/4">
          <Text size="large">
            Welcome to the ReasonToSmile blog.
            <br />
            This is my lifestyle blog to include information about my crafts,
            paintings, traveling to new places, and finding out interesting
            adventures and take casual photos.
            <br />
            <br />
            This blog also gives an area for friends to share some of their
            experiences
            <br />
            <br />
            Would you like to take a stroll around the ResonsToSmile world?
            <br />
            <br />
            Then, follow along on our short adventures as we capture the planet!
            <Anchor
              onClick={() => navigate(`/about`)}
              label=" Read more"
              size="medium"
              color="neutral-3"
            />
          </Text>
        </Box>
      </Box>
    </Section>
  </App>
)

export default IndexPage
